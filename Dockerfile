FROM node:lts-alpine as node_build
WORKDIR /www
COPY package.json ./
RUN npm install
COPY resources/ ./resources/
COPY public/ ./public/
RUN npm run build:css:production
#RUN npm run build:js:production

FROM php:8.1.4-fpm-buster as base
WORKDIR /www
RUN set -x; \
    apt-get update \
    && apt-get install -y --no-install-recommends \
        zlib1g-dev \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng-dev  \
        libldap2-dev  \
        libtidy-dev  \
        libxml2-dev  \
        fontconfig  \
        fonts-freefont-ttf   \
        wkhtmltopdf  \
        tar \
        curl \
        libzip-dev \
        unzip \
    \
   && docker-php-ext-install -j$(nproc) dom pdo pdo_mysql zip tidy  \
   && docker-php-ext-configure ldap \
   && docker-php-ext-install -j$(nproc) ldap \
   && docker-php-ext-configure gd --with-freetype=/usr/include/ --with-jpeg=/usr/include/ \
   && docker-php-ext-install -j$(nproc) gd
COPY --from=composer:2.1.12 /usr/bin/composer /usr/bin/composer
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

FROM base AS final
COPY . .
COPY --from=node_build /www/public/ /www/public/
RUN /usr/bin/composer install --no-dev

VOLUME ["/www/public/uploads", "/www/storage/uploads"]

ENTRYPOINT ["/bin/bash", "docker-entrypoint.sh"]