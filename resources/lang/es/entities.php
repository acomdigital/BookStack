<?php
/**
 * Text used for 'Entities' (Document Structure Elements) such as
 * Books, Shelves, Chapters & Pages
 */
return [

    // Shared
    'recently_created' => 'Creado Recientemente',
    'recently_created_pages' => 'Páginas creadas recientemente',
    'recently_updated_pages' => 'Páginas actualizadas recientemente',
    'recently_created_chapters' => 'Capítulos recientemente creados',
    'recently_created_books' => 'Libros recientemente creados',
    'recently_created_shelves' => 'Estantes recientemente creados',
    'recently_update' => 'Recientemente actualizado',
    'recently_viewed' => 'Recientemente visto',
    'recent_activity' => 'Actividad reciente',
    'create_now' => 'Crear uno ahora',
    'revisions' => 'Revisiones',
    'meta_revision' => 'Revisión #:revisionCount',
    'meta_created' => 'Creado :timeLength',
    'meta_created_name' => 'Creado :timeLength por :user',
    'meta_updated' => 'Actualizado :timeLength',
    'meta_updated_name' => 'Actualizado :timeLength por :user',
    'meta_owned_name' => 'Propiedad de :user',
    'entity_select' => 'Seleccione entidad',
    'entity_select_lack_permission' => 'No tiene los permisos necesarios para seleccionar este elemento',
    'images' => 'Imágenes',
    'my_recent_drafts' => 'Mis borradores recientes',
    'my_recently_viewed' => 'Mis visualizaciones recientes',
    'my_most_viewed_favourites' => 'Mis favoritos más vistos',
    'my_favourites' => 'Mis favoritos',
    'no_pages_viewed' => 'No ha visto ninguna página',
    'no_pages_recently_created' => 'Ninguna página ha sido creada recientemente',
    'no_pages_recently_updated' => 'Ninguna página ha sido actualizada recientemente',
    'export' => 'Exportar',
    'export_html' => 'Archivo web',
    'export_pdf' => 'Archivo PDF',
    'export_text' => 'Archivo de texto',
    'export_md' => 'Archivo Markdown',

    // Permissions and restrictions
    'permissions' => 'Permisos',
    'permissions_intro' => 'Una vez habilitado, estos permisos tendrán prioridad por encima de cualquier permiso establecido.',
    'permissions_enable' => 'Habilitar permisos personalizados',
    'permissions_save' => 'Guardar permisos',
    'permissions_owner' => 'Propietario',

    // Search
    'search_results' => 'Resultados de búsqueda',
    'search_total_results_found' => 'Se han encontrado :count resultados|Se han encontrado :count resultados en total',
    'search_clear' => 'Limpiar resultados',
    'search_no_pages' => 'Ninguna página encontrada para la búsqueda',
    'search_for_term' => 'Búsqueda por :term',
    'search_more' => 'Más Resultados',
    'search_advanced' => 'Búsqueda Avanzada',
    'search_terms' => 'Términos de búsqueda',
    'search_content_type' => 'Tipo de Contenido',
    'search_exact_matches' => 'Coincidencias Exactas',
    'search_tags' => 'Búsquedas Etiquetadas',
    'search_options' => 'Opciones',
    'search_viewed_by_me' => 'Vistas por mí',
    'search_not_viewed_by_me' => 'No vistas por mí',
    'search_permissions_set' => 'Permisos ajustados',
    'search_created_by_me' => 'Creadas por mí',
    'search_updated_by_me' => 'Actualizadas por mí',
    'search_owned_by_me' => 'De mi propiedad',
    'search_date_options' => 'Opciones de fecha',
    'search_updated_before' => 'Actualizadas antes de',
    'search_updated_after' => 'Actualizadas después de',
    'search_created_before' => 'Creadas antes de',
    'search_created_after' => 'Creadas después de',
    'search_set_date' => 'fecha',
    'search_update' => 'Actualizar Búsqueda',

    // Shelves
    'shelf' => 'Estante',
    'shelves' => 'Estantes',
    'x_shelves' => ':count estante|:count estantes',
    'shelves_long' => 'Estantes',
    'shelves_empty' => 'No hay estantes creados',
    'shelves_create' => 'Crear estante',
    'shelves_popular' => 'Estantes populares',
    'shelves_new' => 'Estantes nuevos',
    'shelves_new_action' => 'Nuevo estante',
    'shelves_popular_empty' => 'Los estantes más populares aparecerán aquí.',
    'shelves_new_empty' => 'Los libros más recientes aparecerán aquí.',
    'shelves_save' => 'Guardar estante',
    'shelves_books' => 'Libros en este estante',
    'shelves_add_books' => 'Añadir libros a este estante',
    'shelves_drag_books' => 'Arrastra los libros a continuación para añadirlos a este estante',
    'shelves_empty_contents' => 'Este estante no tiene libros asignados',
    'shelves_edit_and_assign' => 'Editar el estante para asignar libros',
    'shelves_edit_named' => 'Editar estante :name',
    'shelves_edit' => 'Editar estante',
    'shelves_delete' => 'Borrar estante',
    'shelves_delete_named' => 'Borrar estante :name',
    'shelves_delete_explain' => "Esto borrará el estante con el nombre ':name'. Los libros que contenga no se borrarán.",
    'shelves_delete_confirmation' => '¿Está seguro de que desea borrar este estante?',
    'shelves_permissions' => 'Permisos del estante',
    'shelves_permissions_updated' => 'Permisos del estante actualizados',
    'shelves_permissions_active' => 'Permisos del estante activos',
    'shelves_permissions_cascade_warning' => 'Los permisos en los estantes no se aplican automáticamente a los libros contenidos. Esto se debe a que un libro puede existir en múltiples estantes. Sin embargo, los permisos pueden ser aplicados a los libros del estante utilizando la opción a continuación.',
    'shelves_copy_permissions_to_books' => 'Copiar permisos a los libros',
    'shelves_copy_permissions' => 'Copiar permisos',
    'shelves_copy_permissions_explain' => 'Esto aplicará los ajustes de permisos de este estante para todos sus libros. Antes de activarlo, asegúrese de que todos los cambios de permisos para este estante han sido guardados.',
    'shelves_copy_permission_success' => 'Permisos del estante copiados a :count libros',

    // Books
    'book' => 'Libro',
    'books' => 'Libros',
    'x_books' => ':count Libro|:count Libros',
    'books_empty' => 'No hay libros creados',
    'books_popular' => 'Libros populares',
    'books_recent' => 'Libros recientes',
    'books_new' => 'Libros nuevos',
    'books_new_action' => 'Nuevo Libro',
    'books_popular_empty' => 'Los libros más populares aparecerán aquí.',
    'books_new_empty' => 'Los libros más recientes aparecerán aquí.',
    'books_create' => 'Crear nuevo libro',
    'books_delete' => 'Borrar libro',
    'books_delete_named' => 'Borrar libro :bookName',
    'books_delete_explain' => 'Esto borrará el libro con el nombre \':bookName\', Todos las páginas y capítulos serán borrados.',
    'books_delete_confirmation' => '¿Está seguro de que desea borrar este libro?',
    'books_edit' => 'Editar Libro',
    'books_edit_named' => 'Editar Libro :bookName',
    'books_form_book_name' => 'Nombre de libro',
    'books_save' => 'Guardar libro',
    'books_permissions' => 'Permisos del libro',
    'books_permissions_updated' => 'Permisos del libro actualizados',
    'books_empty_contents' => 'Ninguna página o capítulo ha sido creada para este libro.',
    'books_empty_create_page' => 'Crear una nueva página',
    'books_empty_sort_current_book' => 'Organizar el libro actual',
    'books_empty_add_chapter' => 'Agregar un capítulo',
    'books_permissions_active' => 'Permisos de libro activos',
    'books_search_this' => 'Buscar en este libro',
    'books_navigation' => 'Navegación de libro',
    'books_sort' => 'Organizar contenido de libro',
    'books_sort_named' => 'Organizar libro :bookName',
    'books_sort_name' => 'Organizar por Nombre',
    'books_sort_created' => 'Organizar por Fecha de creación',
    'books_sort_updated' => 'Organizar por Fecha de modificación',
    'books_sort_chapters_first' => 'Capítulos al inicio',
    'books_sort_chapters_last' => 'Capítulos al final ',
    'books_sort_show_other' => 'Mostrar otros libros',
    'books_sort_save' => 'Guardar nuevo orden',
    'books_copy' => 'Copiar Libro',
    'books_copy_success' => 'Libro copiado correctamente',

    // Chapters
    'chapter' => 'Capítulo',
    'chapters' => 'Capítulos',
    'x_chapters' => ':count Capítulo|:count Capítulos',
    'chapters_popular' => 'Capítulos populares',
    'chapters_new' => 'Nuevo capítulo',
    'chapters_create' => 'Crear nuevo capítulo',
    'chapters_delete' => 'Borrar capítulo',
    'chapters_delete_named' => 'Borrar capítulo :chapterName',
    'chapters_delete_explain' => 'Esto eliminará el capítulo con el nombre \':chapterName\'. También se eliminarán todas las páginas que existen dentro de este capítulo.',
    'chapters_delete_confirm' => '¿Está seguro de borrar este capítulo?',
    'chapters_edit' => 'Editar capítulo',
    'chapters_edit_named' => 'Editar capítulo :chapterName',
    'chapters_save' => 'Guardar capítulo',
    'chapters_move' => 'Mover capítulo',
    'chapters_move_named' => 'Mover Capítulo :chapterName',
    'chapter_move_success' => 'Capítulo movido a :bookName',
    'chapters_copy' => 'Copiar Capítulo',
    'chapters_copy_success' => 'Capítulo copiado correctamente',
    'chapters_permissions' => 'Permisos de capítulo',
    'chapters_empty' => 'No existen páginas en este capítulo.',
    'chapters_permissions_active' => 'Permisos de capítulo activos',
    'chapters_permissions_success' => 'Permisos de capítulo actualizados',
    'chapters_search_this' => 'Buscar este capítulo',
    'chapter_sort_book' => 'Organizar Libro',

    // Pages
    'page' => 'Página',
    'pages' => 'Páginas',
    'x_pages' => ':count Página|:count Páginas',
    'pages_popular' => 'Páginas populares',
    'pages_new' => 'Nueva página',
    'pages_attachments' => 'Adjuntos',
    'pages_navigation' => 'Navegación de página',
    'pages_delete' => 'Borrar página',
    'pages_delete_named' => 'Borrar página :pageName',
    'pages_delete_draft_named' => 'Borrar borrador de página :pageName',
    'pages_delete_draft' => 'Borrar borrador de página',
    'pages_delete_success' => 'Página borrada',
    'pages_delete_draft_success' => 'Borrador de página borrado',
    'pages_delete_confirm' => '¿Está seguro de borrar esta página?',
    'pages_delete_draft_confirm' => '¿Está seguro de que desea borrar este borrador de página?',
    'pages_editing_named' => 'Editando página :pageName',
    'pages_edit_draft_options' => 'Opciones de Borrador',
    'pages_edit_save_draft' => 'Guardar borrador',
    'pages_edit_draft' => 'Editar borrador de página',
    'pages_editing_draft' => 'Editando borrador',
    'pages_editing_page' => 'Editando página',
    'pages_edit_draft_save_at' => 'Borrador guardado ',
    'pages_edit_delete_draft' => 'Borrar borrador',
    'pages_edit_discard_draft' => 'Descartar borrador',
    'pages_edit_switch_to_markdown' => 'Cambiar a Editor Markdown',
    'pages_edit_switch_to_markdown_clean' => '(Limpiar Contenido)',
    'pages_edit_switch_to_markdown_stable' => '(Contenido Estable)',
    'pages_edit_switch_to_wysiwyg' => 'Cambiar a Editor WYSIWYG',
    'pages_edit_set_changelog' => 'Ajustar Log de cambios',
    'pages_edit_enter_changelog_desc' => 'Introduzca una breve descripción de los cambios que ha realizado',
    'pages_edit_enter_changelog' => 'Entrar al Log de cambios',
    'pages_editor_switch_title' => 'Cambiar editor',
    'pages_editor_switch_are_you_sure' => '¿Está seguro de que desea cambiar el editor de esta página?',
    'pages_editor_switch_consider_following' => 'Considere lo siguiente al cambiar de editor:',
    'pages_editor_switch_consideration_a' => 'Una vez guardado, el nuevo editor será utilizado por cualquier usuario en el futuro, incluyendo aquellos que no puedan cambiar el tipo de editor por sí mismos.',
    'pages_editor_switch_consideration_b' => 'Esto puede llevar a una pérdida de detalle y sintaxis en ciertas circunstancias.',
    'pages_editor_switch_consideration_c' => 'Cambios en etiquetas o en el registro de cambios, realizados desde el último guardado, no persistirán a través de este cambio.',
    'pages_save' => 'Guardar página',
    'pages_title' => 'Título de página',
    'pages_name' => 'Nombre de página',
    'pages_md_editor' => 'Editor',
    'pages_md_preview' => 'Previsualizar',
    'pages_md_insert_image' => 'Insertar Imagen',
    'pages_md_insert_link' => 'Insertar link de entidad',
    'pages_md_insert_drawing' => 'Insertar Dibujo',
    'pages_not_in_chapter' => 'La página no está en un capítulo',
    'pages_move' => 'Mover página',
    'pages_move_success' => 'Página movida a ":parentName"',
    'pages_copy' => 'Copiar página',
    'pages_copy_desination' => 'Destino de la copia',
    'pages_copy_success' => 'Página copiada a correctamente',
    'pages_permissions' => 'Permisos de página',
    'pages_permissions_success' => 'Permisos de página actualizados',
    'pages_revision' => 'Revisión',
    'pages_revisions' => 'Revisiones de página',
    'pages_revisions_named' => 'Revisiones de página para :pageName',
    'pages_revision_named' => 'Revisión de página para :pageName',
    'pages_revision_restored_from' => 'Restaurado de #:id; :summary',
    'pages_revisions_created_by' => 'Creado por',
    'pages_revisions_date' => 'Fecha de revisión',
    'pages_revisions_number' => '#',
    'pages_revisions_numbered' => 'Revisión #:id',
    'pages_revisions_numbered_changes' => 'Revisión #:id Cambios',
    'pages_revisions_editor' => 'Tipo de Editor',
    'pages_revisions_changelog' => 'Log de cambios',
    'pages_revisions_changes' => 'Cambios',
    'pages_revisions_current' => 'Versión actual',
    'pages_revisions_preview' => 'Previsualizar',
    'pages_revisions_restore' => 'Restaurar',
    'pages_revisions_none' => 'Esta página no tiene revisiones',
    'pages_copy_link' => 'Copiar Enlace',
    'pages_edit_content_link' => 'Contenido editado',
    'pages_permissions_active' => 'Permisos de página activos',
    'pages_initial_revision' => 'Publicación inicial',
    'pages_initial_name' => 'Página nueva',
    'pages_editing_draft_notification' => 'Está actualmente editando un borrador que fue guardado por última vez el :timeDiff.',
    'pages_draft_edited_notification' => 'Esta página ha sido actualizada desde ese momento. Se recomienda que cancele este borrador.',
    'pages_draft_page_changed_since_creation' => 'Esta página ha sido actualizada desde que se creó este borrador. Se recomienda descartar este borrador o tener cuidado de no sobrescribir ningún cambio en la página.',
    'pages_draft_edit_active' => [
        'start_a' => ':count usuarios han comenzado a editar esta página',
        'start_b' => ':userName ha comenzado a editar esta página',
        'time_a' => 'desde que la página fue actualizada',
        'time_b' => 'en los últimos :minCount minutos',
        'message' => ':start :time. ¡Ten cuidado de no sobreescribir los cambios del otro usuario!',
    ],
    'pages_draft_discarded' => 'Borrador descartado, el editor ha sido actualizado con el contenido de la página actual',
    'pages_specific' => 'Página específica',
    'pages_is_template' => 'Página es plantilla',

    // Editor Sidebar
    'page_tags' => 'Etiquetas de Página',
    'chapter_tags' => 'Etiquetas de Capítulo',
    'book_tags' => 'Etiquetas de Libro',
    'shelf_tags' => 'Etiquetas de Estante',
    'tag' => 'Etiqueta',
    'tags' =>  'Etiquetas',
    'tag_name' =>  'Nombre de la Etiqueta',
    'tag_value' => 'Valor de la etiqueta (Opcional)',
    'tags_explain' => "Agrege algunas etiquetas para mejorar la categorización de su contenido. \n Puede asignar un valor a una etiqueta para una organización a mayor detalle.",
    'tags_add' => 'Agregar otra etiqueta',
    'tags_remove' => 'Eliminar esta etiqueta',
    'tags_usages' => 'Uso total de etiquetas',
    'tags_assigned_pages' => 'Asignadas a páginas',
    'tags_assigned_chapters' => 'Asignadas a capitulos',
    'tags_assigned_books' => 'Asignadas a libros',
    'tags_assigned_shelves' => 'Asignadas a estantes',
    'tags_x_unique_values' => ':count valores únicos',
    'tags_all_values' => 'Todos los valores',
    'tags_view_tags' => 'Ver etiquetas',
    'tags_view_existing_tags' => 'Ver etiquetas existentes',
    'tags_list_empty_hint' => 'Las etiquetas se pueden asignar a través de la barra lateral del editor de páginas o mientras se editan los detalles de un libro, capítulo o estante.',
    'attachments' => 'Adjuntos',
    'attachments_explain' => 'Subir ficheros o agregar enlaces para mostrar en la página. Estos son visibles en la barra lateral de la página.',
    'attachments_explain_instant_save' => 'Los cambios son guardados de manera instantánea .',
    'attachments_items' => 'Elementos adjuntados',
    'attachments_upload' => 'Subir Archivo',
    'attachments_link' => 'Adjuntar Enlace',
    'attachments_set_link' => 'Ajustar Enlace',
    'attachments_delete' => '¿Está seguro de que quiere eliminar este archivo adjunto?',
    'attachments_dropzone' => 'Arrastre ficheros aquí o haga click aquí para adjuntar un fichero',
    'attachments_no_files' => 'No se han subido ficheros',
    'attachments_explain_link' => 'Puede agregar un enlace si prefiere no subir un archivo. Puede ser un enlace a otra página o un enlace a un fichero en la nube.',
    'attachments_link_name' => 'Nombre del Enlace',
    'attachment_link' => 'Enlace adjunto',
    'attachments_link_url' => 'Enlace a fichero',
    'attachments_link_url_hint' => 'Url del sitio o fichero',
    'attach' => 'Adjuntar',
    'attachments_insert_link' => 'Añadir enlace al adjunto en la página',
    'attachments_edit_file' => 'Editar fichero',
    'attachments_edit_file_name' => 'Nombre del fichero',
    'attachments_edit_drop_upload' => 'Arrastre a los ficheros o haga click aquí para subir y sobreescribir',
    'attachments_order_updated' => 'Orden de adjuntos actualizado',
    'attachments_updated_success' => 'Detalles de adjuntos actualizados',
    'attachments_deleted' => 'Adjunto borrado',
    'attachments_file_uploaded' => 'Fichero subido éxitosamente',
    'attachments_file_updated' => 'Fichero actualizado éxitosamente',
    'attachments_link_attached' => 'Enlace agregado éxitosamente a la página',
    'templates' => 'Plantillas',
    'templates_set_as_template' => 'La página es una plantilla',
    'templates_explain_set_as_template' => 'Puede ajustar esta página como una plantilla, así su contenido puede emplearse al crear una nueva página. Otros usuarios podrán utilizar esta plantilla si tienen permisos de lectura sobre esta página.',
    'templates_replace_content' => 'Reemplazar el contenido de la página',
    'templates_append_content' => 'Añadir después del contenido de la página',
    'templates_prepend_content' => 'Añadir antes del contenido de la página',

    // Profile View
    'profile_user_for_x' => 'Usuario para :time',
    'profile_created_content' => 'Contenido creado',
    'profile_not_created_pages' => ':userName no ha creado ninguna página',
    'profile_not_created_chapters' => ':userName no ha creado ningún capítulo',
    'profile_not_created_books' => ':userName no ha creado ningún libro',
    'profile_not_created_shelves' => ':userName no ha creado ningún estante',

    // Comments
    'comment' => 'Comentario',
    'comments' => 'Comentarios',
    'comment_add' => 'Añadir Comentario',
    'comment_placeholder' => 'Introduzca su comentario aquí',
    'comment_count' => '{0} Sin Comentarios|{1} 1 Comentario|[2,*] :count Comentarios',
    'comment_save' => 'Guardar comentario',
    'comment_saving' => 'Guardando comentario...',
    'comment_deleting' => 'Borrando comentario...',
    'comment_new' => 'Nuevo Comentario',
    'comment_created' => 'comentado :createDiff',
    'comment_updated' => 'Actualizado :updateDiff por :username',
    'comment_deleted_success' => 'Comentario borrado',
    'comment_created_success' => 'Comentario añadido',
    'comment_updated_success' => 'Comentario actualizado',
    'comment_delete_confirm' => '¿Está seguro de que quiere borrar este comentario?',
    'comment_in_reply_to' => 'En respuesta a :commentId',

    // Revision
    'revision_delete_confirm' => '¿Está seguro de que desea eliminar esta revisión?',
    'revision_restore_confirm' => '¿Está seguro de que desea restaurar esta revisión? El contenido actual de la página será reemplazado.',
    'revision_delete_success' => 'Revisión eliminada',
    'revision_cannot_delete_latest' => 'No se puede eliminar la última revisión.',

    // Copy view
    'copy_consider' => 'Por favor, tenga en cuenta lo siguiente al copiar el contenido.',
    'copy_consider_permissions' => 'Los ajustes de permisos personalizados no serán copiados.',
    'copy_consider_owner' => 'Usted se convertirá en el dueño de todo el contenido copiado.',
    'copy_consider_images' => 'Los archivos de imagen de de las páginas no serán duplicados y las imágenes originales conservarán su relación con la página a la que fueron subidos originalmente.',
    'copy_consider_attachments' => 'Los archivos adjuntos de la página no serán copiados.',
    'copy_consider_access' => 'Un cambio de ubicación, propietario o permisos puede resultar en que este contenido sea accesible para aquellos que anteriormente no tuvieran acceso.',

    // Conversions
    'convert_to_shelf' => 'Convertir a Estante',
    'convert_to_shelf_contents_desc' => 'Puedes convertir este libro a un nuevo estante con el mismo contenido. Los capítulos contenidos en este libro se convertirán en libros nuevos. Si este libro contiene alguna página, que no esté en un capítulo, este libro será renombrado y contendrá tales páginas, y este libro pasará a formar parte del nuevo estante.',
    'convert_to_shelf_permissions_desc' => 'Cualquier permiso establecido en este libro será copiado al nuevo estante y a todos los nuevos libros que no tengan sus propios permisos configurados. Tenga en cuenta que los permisos de los estantes no se aplican automáticamente sobre el contenido en su interior, como lo hacen para los libros.',
    'convert_book' => 'Convertir Libro',
    'convert_book_confirm' => '¿Está seguro de que desea borrar este libro?',
    'convert_undo_warning' => 'Esto no puede revertirse de forma sencilla.',
    'convert_to_book' => 'Convertir a Libro',
    'convert_to_book_desc' => 'Puede convertir este capítulo en un nuevo libro con el mismo contenido. Cualquier permiso establecido en este capítulo será copiado al nuevo libro pero cualquier permiso heredado, del libro padre, no se copiará lo que podría conducir a un cambio de control de acceso.',
    'convert_chapter' => 'Convertir Capítulo',
    'convert_chapter_confirm' => '¿Estás seguro de que quieres convertir este capítulo?',
];
