var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// node_modules/entities/lib/maps/entities.json
var require_entities = __commonJS({
  "node_modules/entities/lib/maps/entities.json"(exports, module) {
    module.exports = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", amp: "&", AMP: "&", andand: "\u2A55", And: "\u2A53", and: "\u2227", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angmsd: "\u2221", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", apacir: "\u2A6F", ap: "\u2248", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", barwed: "\u2305", Barwed: "\u2306", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", Because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxdl: "\u2510", boxdL: "\u2555", boxDl: "\u2556", boxDL: "\u2557", boxdr: "\u250C", boxdR: "\u2552", boxDr: "\u2553", boxDR: "\u2554", boxh: "\u2500", boxH: "\u2550", boxhd: "\u252C", boxHd: "\u2564", boxhD: "\u2565", boxHD: "\u2566", boxhu: "\u2534", boxHu: "\u2567", boxhU: "\u2568", boxHU: "\u2569", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxul: "\u2518", boxuL: "\u255B", boxUl: "\u255C", boxUL: "\u255D", boxur: "\u2514", boxuR: "\u2558", boxUr: "\u2559", boxUR: "\u255A", boxv: "\u2502", boxV: "\u2551", boxvh: "\u253C", boxvH: "\u256A", boxVh: "\u256B", boxVH: "\u256C", boxvl: "\u2524", boxvL: "\u2561", boxVl: "\u2562", boxVL: "\u2563", boxvr: "\u251C", boxvR: "\u255E", boxVr: "\u255F", boxVR: "\u2560", bprime: "\u2035", breve: "\u02D8", Breve: "\u02D8", brvbar: "\xA6", bscr: "\u{1D4B7}", Bscr: "\u212C", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsolb: "\u29C5", bsol: "\\", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", cap: "\u2229", Cap: "\u22D2", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", centerdot: "\xB7", CenterDot: "\xB7", cfr: "\u{1D520}", Cfr: "\u212D", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cir: "\u25CB", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", colon: ":", Colon: "\u2237", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", conint: "\u222E", Conint: "\u222F", ContourIntegral: "\u222E", copf: "\u{1D554}", Copf: "\u2102", coprod: "\u2210", Coproduct: "\u2210", copy: "\xA9", COPY: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", cross: "\u2717", Cross: "\u2A2F", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cupbrcap: "\u2A48", cupcap: "\u2A46", CupCap: "\u224D", cup: "\u222A", Cup: "\u22D3", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", dagger: "\u2020", Dagger: "\u2021", daleth: "\u2138", darr: "\u2193", Darr: "\u21A1", dArr: "\u21D3", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", ddagger: "\u2021", ddarr: "\u21CA", DD: "\u2145", dd: "\u2146", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", diamond: "\u22C4", Diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrowBar: "\u2913", downarrow: "\u2193", DownArrow: "\u2193", Downarrow: "\u21D3", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVectorBar: "\u2956", DownLeftVector: "\u21BD", DownRightTeeVector: "\u295F", DownRightVectorBar: "\u2957", DownRightVector: "\u21C1", DownTeeArrow: "\u21A7", DownTee: "\u22A4", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", Ecirc: "\xCA", ecirc: "\xEA", ecir: "\u2256", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", edot: "\u0117", eDot: "\u2251", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", escr: "\u212F", Escr: "\u2130", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", exponentiale: "\u2147", ExponentialE: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", forall: "\u2200", ForAll: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", Fscr: "\u2131", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", ge: "\u2265", gE: "\u2267", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", gescc: "\u2AA9", ges: "\u2A7E", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", gg: "\u226B", Gg: "\u22D9", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gla: "\u2AA5", gl: "\u2277", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gnE: "\u2269", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gt: ">", GT: ">", Gt: "\u226B", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", harrcir: "\u2948", harr: "\u2194", hArr: "\u21D4", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", Hfr: "\u210C", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", Hopf: "\u210D", horbar: "\u2015", HorizontalLine: "\u2500", hscr: "\u{1D4BD}", Hscr: "\u210B", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", Ifr: "\u2111", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", Im: "\u2111", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", incare: "\u2105", in: "\u2208", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", intcal: "\u22BA", int: "\u222B", Int: "\u222C", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", iscr: "\u{1D4BE}", Iscr: "\u2110", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", lang: "\u27E8", Lang: "\u27EA", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", larrb: "\u21E4", larrbfs: "\u291F", larr: "\u2190", Larr: "\u219E", lArr: "\u21D0", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", latail: "\u2919", lAtail: "\u291B", lat: "\u2AAB", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lBarr: "\u290E", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", lE: "\u2266", LeftAngleBracket: "\u27E8", LeftArrowBar: "\u21E4", leftarrow: "\u2190", LeftArrow: "\u2190", Leftarrow: "\u21D0", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVectorBar: "\u2959", LeftDownVector: "\u21C3", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", leftrightarrow: "\u2194", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTeeArrow: "\u21A4", LeftTee: "\u22A3", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangleBar: "\u29CF", LeftTriangle: "\u22B2", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVectorBar: "\u2958", LeftUpVector: "\u21BF", LeftVectorBar: "\u2952", LeftVector: "\u21BC", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", lescc: "\u2AA8", les: "\u2A7D", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", llarr: "\u21C7", ll: "\u226A", Ll: "\u22D8", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoustache: "\u23B0", lmoust: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lnE: "\u2268", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\u27F5", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftrightarrow: "\u27F7", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longmapsto: "\u27FC", longrightarrow: "\u27F6", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", Lscr: "\u2112", lsh: "\u21B0", Lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", lt: "<", LT: "<", Lt: "\u226A", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midast: "*", midcir: "\u2AF0", mid: "\u2223", middot: "\xB7", minusb: "\u229F", minus: "\u2212", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", mscr: "\u{1D4C2}", Mscr: "\u2133", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natural: "\u266E", naturals: "\u2115", natur: "\u266E", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", nearhk: "\u2924", nearr: "\u2197", neArr: "\u21D7", nearrow: "\u2197", ne: "\u2260", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nharr: "\u21AE", nhArr: "\u21CE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlarr: "\u219A", nlArr: "\u21CD", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nleftarrow: "\u219A", nLeftarrow: "\u21CD", nleftrightarrow: "\u21AE", nLeftrightarrow: "\u21CE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nopf: "\u{1D55F}", Nopf: "\u2115", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangle: "\u22EA", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangle: "\u22EB", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", nparallel: "\u2226", npar: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", nprec: "\u2280", npreceq: "\u2AAF\u0338", npre: "\u2AAF\u0338", nrarrc: "\u2933\u0338", nrarr: "\u219B", nrArr: "\u21CF", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nRightarrow: "\u21CF", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvDash: "\u22AD", nVdash: "\u22AE", nVDash: "\u22AF", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwarr: "\u2196", nwArr: "\u21D6", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", Ocirc: "\xD4", ocirc: "\xF4", ocir: "\u229A", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", orarr: "\u21BB", Or: "\u2A54", or: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", otimesas: "\u2A36", Otimes: "\u2A37", otimes: "\u2297", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", para: "\xB6", parallel: "\u2225", par: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plus: "+", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", popf: "\u{1D561}", Popf: "\u2119", pound: "\xA3", prap: "\u2AB7", Pr: "\u2ABB", pr: "\u227A", prcue: "\u227C", precapprox: "\u2AB7", prec: "\u227A", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", pre: "\u2AAF", prE: "\u2AB3", precsim: "\u227E", prime: "\u2032", Prime: "\u2033", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportional: "\u221D", Proportion: "\u2237", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", Qopf: "\u211A", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quot: '"', QUOT: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", Rang: "\u27EB", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarr: "\u2192", Rarr: "\u21A0", rArr: "\u21D2", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", rAtail: "\u291C", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rBarr: "\u290F", RBarr: "\u2910", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", Re: "\u211C", rect: "\u25AD", reg: "\xAE", REG: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", Rfr: "\u211C", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrowBar: "\u21E5", rightarrow: "\u2192", RightArrow: "\u2192", Rightarrow: "\u21D2", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVectorBar: "\u2955", RightDownVector: "\u21C2", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTeeArrow: "\u21A6", RightTee: "\u22A2", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangleBar: "\u29D0", RightTriangle: "\u22B3", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVectorBar: "\u2954", RightUpVector: "\u21BE", RightVectorBar: "\u2953", RightVector: "\u21C0", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoustache: "\u23B1", rmoust: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", Ropf: "\u211D", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", rscr: "\u{1D4C7}", Rscr: "\u211B", rsh: "\u21B1", Rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", Sc: "\u2ABC", sc: "\u227B", sccue: "\u227D", sce: "\u2AB0", scE: "\u2AB4", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdotb: "\u22A1", sdot: "\u22C5", sdote: "\u2A66", searhk: "\u2925", searr: "\u2198", seArr: "\u21D8", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", solbar: "\u233F", solb: "\u29C4", sol: "/", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", square: "\u25A1", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squ: "\u25A1", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", Sub: "\u22D0", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", Subset: "\u22D0", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succapprox: "\u2AB8", succ: "\u227B", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", sum: "\u2211", Sum: "\u2211", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", sup: "\u2283", Sup: "\u22D1", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", Supset: "\u22D1", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swarr: "\u2199", swArr: "\u21D9", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", Therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", tilde: "\u02DC", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", timesbar: "\u2A31", timesb: "\u22A0", times: "\xD7", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", topbot: "\u2336", topcir: "\u2AF1", top: "\u22A4", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", TRADE: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", uarr: "\u2191", Uarr: "\u219F", uArr: "\u21D1", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrowBar: "\u2912", uparrow: "\u2191", UpArrow: "\u2191", Uparrow: "\u21D1", UpArrowDownArrow: "\u21C5", updownarrow: "\u2195", UpDownArrow: "\u2195", Updownarrow: "\u21D5", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", upsi: "\u03C5", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTeeArrow: "\u21A5", UpTee: "\u22A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", vArr: "\u21D5", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", vBar: "\u2AE8", Vbar: "\u2AEB", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", vdash: "\u22A2", vDash: "\u22A8", Vdash: "\u22A9", VDash: "\u22AB", Vdashl: "\u2AE6", veebar: "\u22BB", vee: "\u2228", Vee: "\u22C1", veeeq: "\u225A", vellip: "\u22EE", verbar: "|", Verbar: "\u2016", vert: "|", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\u2227", Wedge: "\u22C0", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xharr: "\u27F7", xhArr: "\u27FA", Xi: "\u039E", xi: "\u03BE", xlarr: "\u27F5", xlArr: "\u27F8", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrarr: "\u27F6", xrArr: "\u27F9", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", yuml: "\xFF", Yuml: "\u0178", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", zfr: "\u{1D537}", Zfr: "\u2128", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", Zopf: "\u2124", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
  }
});

// node_modules/markdown-it/lib/common/entities.js
var require_entities2 = __commonJS({
  "node_modules/markdown-it/lib/common/entities.js"(exports, module) {
    "use strict";
    module.exports = require_entities();
  }
});

// node_modules/uc.micro/categories/P/regex.js
var require_regex = __commonJS({
  "node_modules/uc.micro/categories/P/regex.js"(exports, module) {
    module.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
  }
});

// node_modules/mdurl/encode.js
var require_encode = __commonJS({
  "node_modules/mdurl/encode.js"(exports, module) {
    "use strict";
    var encodeCache = {};
    function getEncodeCache(exclude) {
      var i, ch, cache = encodeCache[exclude];
      if (cache) {
        return cache;
      }
      cache = encodeCache[exclude] = [];
      for (i = 0; i < 128; i++) {
        ch = String.fromCharCode(i);
        if (/^[0-9a-z]$/i.test(ch)) {
          cache.push(ch);
        } else {
          cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
        }
      }
      for (i = 0; i < exclude.length; i++) {
        cache[exclude.charCodeAt(i)] = exclude[i];
      }
      return cache;
    }
    function encode2(string, exclude, keepEscaped) {
      var i, l, code, nextCode, cache, result = "";
      if (typeof exclude !== "string") {
        keepEscaped = exclude;
        exclude = encode2.defaultChars;
      }
      if (typeof keepEscaped === "undefined") {
        keepEscaped = true;
      }
      cache = getEncodeCache(exclude);
      for (i = 0, l = string.length; i < l; i++) {
        code = string.charCodeAt(i);
        if (keepEscaped && code === 37 && i + 2 < l) {
          if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
            result += string.slice(i, i + 3);
            i += 2;
            continue;
          }
        }
        if (code < 128) {
          result += cache[code];
          continue;
        }
        if (code >= 55296 && code <= 57343) {
          if (code >= 55296 && code <= 56319 && i + 1 < l) {
            nextCode = string.charCodeAt(i + 1);
            if (nextCode >= 56320 && nextCode <= 57343) {
              result += encodeURIComponent(string[i] + string[i + 1]);
              i++;
              continue;
            }
          }
          result += "%EF%BF%BD";
          continue;
        }
        result += encodeURIComponent(string[i]);
      }
      return result;
    }
    encode2.defaultChars = ";/?:@&=+$,-_.!~*'()#";
    encode2.componentChars = "-_.!~*'()";
    module.exports = encode2;
  }
});

// node_modules/mdurl/decode.js
var require_decode = __commonJS({
  "node_modules/mdurl/decode.js"(exports, module) {
    "use strict";
    var decodeCache = {};
    function getDecodeCache(exclude) {
      var i, ch, cache = decodeCache[exclude];
      if (cache) {
        return cache;
      }
      cache = decodeCache[exclude] = [];
      for (i = 0; i < 128; i++) {
        ch = String.fromCharCode(i);
        cache.push(ch);
      }
      for (i = 0; i < exclude.length; i++) {
        ch = exclude.charCodeAt(i);
        cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
      }
      return cache;
    }
    function decode2(string, exclude) {
      var cache;
      if (typeof exclude !== "string") {
        exclude = decode2.defaultChars;
      }
      cache = getDecodeCache(exclude);
      return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
        var i, l, b1, b2, b3, b4, chr, result = "";
        for (i = 0, l = seq.length; i < l; i += 3) {
          b1 = parseInt(seq.slice(i + 1, i + 3), 16);
          if (b1 < 128) {
            result += cache[b1];
            continue;
          }
          if ((b1 & 224) === 192 && i + 3 < l) {
            b2 = parseInt(seq.slice(i + 4, i + 6), 16);
            if ((b2 & 192) === 128) {
              chr = b1 << 6 & 1984 | b2 & 63;
              if (chr < 128) {
                result += "\uFFFD\uFFFD";
              } else {
                result += String.fromCharCode(chr);
              }
              i += 3;
              continue;
            }
          }
          if ((b1 & 240) === 224 && i + 6 < l) {
            b2 = parseInt(seq.slice(i + 4, i + 6), 16);
            b3 = parseInt(seq.slice(i + 7, i + 9), 16);
            if ((b2 & 192) === 128 && (b3 & 192) === 128) {
              chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;
              if (chr < 2048 || chr >= 55296 && chr <= 57343) {
                result += "\uFFFD\uFFFD\uFFFD";
              } else {
                result += String.fromCharCode(chr);
              }
              i += 6;
              continue;
            }
          }
          if ((b1 & 248) === 240 && i + 9 < l) {
            b2 = parseInt(seq.slice(i + 4, i + 6), 16);
            b3 = parseInt(seq.slice(i + 7, i + 9), 16);
            b4 = parseInt(seq.slice(i + 10, i + 12), 16);
            if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
              chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;
              if (chr < 65536 || chr > 1114111) {
                result += "\uFFFD\uFFFD\uFFFD\uFFFD";
              } else {
                chr -= 65536;
                result += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
              }
              i += 9;
              continue;
            }
          }
          result += "\uFFFD";
        }
        return result;
      });
    }
    decode2.defaultChars = ";/?:@&=+$,#";
    decode2.componentChars = "";
    module.exports = decode2;
  }
});

// node_modules/mdurl/format.js
var require_format = __commonJS({
  "node_modules/mdurl/format.js"(exports, module) {
    "use strict";
    module.exports = function format(url) {
      var result = "";
      result += url.protocol || "";
      result += url.slashes ? "//" : "";
      result += url.auth ? url.auth + "@" : "";
      if (url.hostname && url.hostname.indexOf(":") !== -1) {
        result += "[" + url.hostname + "]";
      } else {
        result += url.hostname || "";
      }
      result += url.port ? ":" + url.port : "";
      result += url.pathname || "";
      result += url.search || "";
      result += url.hash || "";
      return result;
    };
  }
});

// node_modules/mdurl/parse.js
var require_parse = __commonJS({
  "node_modules/mdurl/parse.js"(exports, module) {
    "use strict";
    function Url() {
      this.protocol = null;
      this.slashes = null;
      this.auth = null;
      this.port = null;
      this.hostname = null;
      this.hash = null;
      this.search = null;
      this.pathname = null;
    }
    var protocolPattern = /^([a-z0-9.+-]+:)/i;
    var portPattern = /:[0-9]*$/;
    var simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
    var delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"];
    var unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims);
    var autoEscape = ["'"].concat(unwise);
    var nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape);
    var hostEndingChars = ["/", "?", "#"];
    var hostnameMaxLen = 255;
    var hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
    var hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
    var hostlessProtocol = {
      "javascript": true,
      "javascript:": true
    };
    var slashedProtocol = {
      "http": true,
      "https": true,
      "ftp": true,
      "gopher": true,
      "file": true,
      "http:": true,
      "https:": true,
      "ftp:": true,
      "gopher:": true,
      "file:": true
    };
    function urlParse(url, slashesDenoteHost) {
      if (url && url instanceof Url) {
        return url;
      }
      var u = new Url();
      u.parse(url, slashesDenoteHost);
      return u;
    }
    Url.prototype.parse = function(url, slashesDenoteHost) {
      var i, l, lowerProto, hec, slashes, rest = url;
      rest = rest.trim();
      if (!slashesDenoteHost && url.split("#").length === 1) {
        var simplePath = simplePathPattern.exec(rest);
        if (simplePath) {
          this.pathname = simplePath[1];
          if (simplePath[2]) {
            this.search = simplePath[2];
          }
          return this;
        }
      }
      var proto = protocolPattern.exec(rest);
      if (proto) {
        proto = proto[0];
        lowerProto = proto.toLowerCase();
        this.protocol = proto;
        rest = rest.substr(proto.length);
      }
      if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        slashes = rest.substr(0, 2) === "//";
        if (slashes && !(proto && hostlessProtocol[proto])) {
          rest = rest.substr(2);
          this.slashes = true;
        }
      }
      if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
        var hostEnd = -1;
        for (i = 0; i < hostEndingChars.length; i++) {
          hec = rest.indexOf(hostEndingChars[i]);
          if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
            hostEnd = hec;
          }
        }
        var auth, atSign;
        if (hostEnd === -1) {
          atSign = rest.lastIndexOf("@");
        } else {
          atSign = rest.lastIndexOf("@", hostEnd);
        }
        if (atSign !== -1) {
          auth = rest.slice(0, atSign);
          rest = rest.slice(atSign + 1);
          this.auth = auth;
        }
        hostEnd = -1;
        for (i = 0; i < nonHostChars.length; i++) {
          hec = rest.indexOf(nonHostChars[i]);
          if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
            hostEnd = hec;
          }
        }
        if (hostEnd === -1) {
          hostEnd = rest.length;
        }
        if (rest[hostEnd - 1] === ":") {
          hostEnd--;
        }
        var host = rest.slice(0, hostEnd);
        rest = rest.slice(hostEnd);
        this.parseHost(host);
        this.hostname = this.hostname || "";
        var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
        if (!ipv6Hostname) {
          var hostparts = this.hostname.split(/\./);
          for (i = 0, l = hostparts.length; i < l; i++) {
            var part = hostparts[i];
            if (!part) {
              continue;
            }
            if (!part.match(hostnamePartPattern)) {
              var newpart = "";
              for (var j = 0, k = part.length; j < k; j++) {
                if (part.charCodeAt(j) > 127) {
                  newpart += "x";
                } else {
                  newpart += part[j];
                }
              }
              if (!newpart.match(hostnamePartPattern)) {
                var validParts = hostparts.slice(0, i);
                var notHost = hostparts.slice(i + 1);
                var bit = part.match(hostnamePartStart);
                if (bit) {
                  validParts.push(bit[1]);
                  notHost.unshift(bit[2]);
                }
                if (notHost.length) {
                  rest = notHost.join(".") + rest;
                }
                this.hostname = validParts.join(".");
                break;
              }
            }
          }
        }
        if (this.hostname.length > hostnameMaxLen) {
          this.hostname = "";
        }
        if (ipv6Hostname) {
          this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        }
      }
      var hash = rest.indexOf("#");
      if (hash !== -1) {
        this.hash = rest.substr(hash);
        rest = rest.slice(0, hash);
      }
      var qm = rest.indexOf("?");
      if (qm !== -1) {
        this.search = rest.substr(qm);
        rest = rest.slice(0, qm);
      }
      if (rest) {
        this.pathname = rest;
      }
      if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
        this.pathname = "";
      }
      return this;
    };
    Url.prototype.parseHost = function(host) {
      var port = portPattern.exec(host);
      if (port) {
        port = port[0];
        if (port !== ":") {
          this.port = port.substr(1);
        }
        host = host.substr(0, host.length - port.length);
      }
      if (host) {
        this.hostname = host;
      }
    };
    module.exports = urlParse;
  }
});

// node_modules/mdurl/index.js
var require_mdurl = __commonJS({
  "node_modules/mdurl/index.js"(exports, module) {
    "use strict";
    module.exports.encode = require_encode();
    module.exports.decode = require_decode();
    module.exports.format = require_format();
    module.exports.parse = require_parse();
  }
});

// node_modules/uc.micro/properties/Any/regex.js
var require_regex2 = __commonJS({
  "node_modules/uc.micro/properties/Any/regex.js"(exports, module) {
    module.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  }
});

// node_modules/uc.micro/categories/Cc/regex.js
var require_regex3 = __commonJS({
  "node_modules/uc.micro/categories/Cc/regex.js"(exports, module) {
    module.exports = /[\0-\x1F\x7F-\x9F]/;
  }
});

// node_modules/uc.micro/categories/Cf/regex.js
var require_regex4 = __commonJS({
  "node_modules/uc.micro/categories/Cf/regex.js"(exports, module) {
    module.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
  }
});

// node_modules/uc.micro/categories/Z/regex.js
var require_regex5 = __commonJS({
  "node_modules/uc.micro/categories/Z/regex.js"(exports, module) {
    module.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
  }
});

// node_modules/uc.micro/index.js
var require_uc = __commonJS({
  "node_modules/uc.micro/index.js"(exports) {
    "use strict";
    exports.Any = require_regex2();
    exports.Cc = require_regex3();
    exports.Cf = require_regex4();
    exports.P = require_regex();
    exports.Z = require_regex5();
  }
});

// node_modules/markdown-it/lib/common/utils.js
var require_utils = __commonJS({
  "node_modules/markdown-it/lib/common/utils.js"(exports) {
    "use strict";
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    function isString(obj) {
      return _class(obj) === "[object String]";
    }
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    function has(object, key) {
      return _hasOwnProperty.call(object, key);
    }
    function assign(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      sources.forEach(function(source) {
        if (!source) {
          return;
        }
        if (typeof source !== "object") {
          throw new TypeError(source + "must be object");
        }
        Object.keys(source).forEach(function(key) {
          obj[key] = source[key];
        });
      });
      return obj;
    }
    function arrayReplaceAt(src, pos, newElements) {
      return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
    }
    function isValidEntityCode(c) {
      if (c >= 55296 && c <= 57343) {
        return false;
      }
      if (c >= 64976 && c <= 65007) {
        return false;
      }
      if ((c & 65535) === 65535 || (c & 65535) === 65534) {
        return false;
      }
      if (c >= 0 && c <= 8) {
        return false;
      }
      if (c === 11) {
        return false;
      }
      if (c >= 14 && c <= 31) {
        return false;
      }
      if (c >= 127 && c <= 159) {
        return false;
      }
      if (c > 1114111) {
        return false;
      }
      return true;
    }
    function fromCodePoint(c) {
      if (c > 65535) {
        c -= 65536;
        var surrogate1 = 55296 + (c >> 10), surrogate2 = 56320 + (c & 1023);
        return String.fromCharCode(surrogate1, surrogate2);
      }
      return String.fromCharCode(c);
    }
    var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
    var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
    var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source, "gi");
    var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
    var entities = require_entities2();
    function replaceEntityPattern(match, name) {
      var code;
      if (has(entities, name)) {
        return entities[name];
      }
      if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
        code = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
        if (isValidEntityCode(code)) {
          return fromCodePoint(code);
        }
      }
      return match;
    }
    function unescapeMd(str) {
      if (str.indexOf("\\") < 0) {
        return str;
      }
      return str.replace(UNESCAPE_MD_RE, "$1");
    }
    function unescapeAll(str) {
      if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) {
        return str;
      }
      return str.replace(UNESCAPE_ALL_RE, function(match, escaped, entity) {
        if (escaped) {
          return escaped;
        }
        return replaceEntityPattern(match, entity);
      });
    }
    var HTML_ESCAPE_TEST_RE = /[&<>"]/;
    var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
    var HTML_REPLACEMENTS = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    function replaceUnsafeChar(ch) {
      return HTML_REPLACEMENTS[ch];
    }
    function escapeHtml2(str) {
      if (HTML_ESCAPE_TEST_RE.test(str)) {
        return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
      }
      return str;
    }
    var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
    function escapeRE(str) {
      return str.replace(REGEXP_ESCAPE_RE, "\\$&");
    }
    function isSpace(code) {
      switch (code) {
        case 9:
        case 32:
          return true;
      }
      return false;
    }
    function isWhiteSpace(code) {
      if (code >= 8192 && code <= 8202) {
        return true;
      }
      switch (code) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 32:
        case 160:
        case 5760:
        case 8239:
        case 8287:
        case 12288:
          return true;
      }
      return false;
    }
    var UNICODE_PUNCT_RE = require_regex();
    function isPunctChar(ch) {
      return UNICODE_PUNCT_RE.test(ch);
    }
    function isMdAsciiPunct(ch) {
      switch (ch) {
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 124:
        case 125:
        case 126:
          return true;
        default:
          return false;
      }
    }
    function normalizeReference(str) {
      str = str.trim().replace(/\s+/g, " ");
      if ("\u1E9E".toLowerCase() === "\u1E7E") {
        str = str.replace(/ẞ/g, "\xDF");
      }
      return str.toLowerCase().toUpperCase();
    }
    exports.lib = {};
    exports.lib.mdurl = require_mdurl();
    exports.lib.ucmicro = require_uc();
    exports.assign = assign;
    exports.isString = isString;
    exports.has = has;
    exports.unescapeMd = unescapeMd;
    exports.unescapeAll = unescapeAll;
    exports.isValidEntityCode = isValidEntityCode;
    exports.fromCodePoint = fromCodePoint;
    exports.escapeHtml = escapeHtml2;
    exports.arrayReplaceAt = arrayReplaceAt;
    exports.isSpace = isSpace;
    exports.isWhiteSpace = isWhiteSpace;
    exports.isMdAsciiPunct = isMdAsciiPunct;
    exports.isPunctChar = isPunctChar;
    exports.escapeRE = escapeRE;
    exports.normalizeReference = normalizeReference;
  }
});

// node_modules/markdown-it/lib/helpers/parse_link_label.js
var require_parse_link_label = __commonJS({
  "node_modules/markdown-it/lib/helpers/parse_link_label.js"(exports, module) {
    "use strict";
    module.exports = function parseLinkLabel(state, start, disableNested) {
      var level, found, marker, prevPos, labelEnd = -1, max = state.posMax, oldPos = state.pos;
      state.pos = start + 1;
      level = 1;
      while (state.pos < max) {
        marker = state.src.charCodeAt(state.pos);
        if (marker === 93) {
          level--;
          if (level === 0) {
            found = true;
            break;
          }
        }
        prevPos = state.pos;
        state.md.inline.skipToken(state);
        if (marker === 91) {
          if (prevPos === state.pos - 1) {
            level++;
          } else if (disableNested) {
            state.pos = oldPos;
            return -1;
          }
        }
      }
      if (found) {
        labelEnd = state.pos;
      }
      state.pos = oldPos;
      return labelEnd;
    };
  }
});

// node_modules/markdown-it/lib/helpers/parse_link_destination.js
var require_parse_link_destination = __commonJS({
  "node_modules/markdown-it/lib/helpers/parse_link_destination.js"(exports, module) {
    "use strict";
    var unescapeAll = require_utils().unescapeAll;
    module.exports = function parseLinkDestination(str, start, max) {
      var code, level, pos = start, result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ""
      };
      if (str.charCodeAt(pos) === 60) {
        pos++;
        while (pos < max) {
          code = str.charCodeAt(pos);
          if (code === 10) {
            return result;
          }
          if (code === 60) {
            return result;
          }
          if (code === 62) {
            result.pos = pos + 1;
            result.str = unescapeAll(str.slice(start + 1, pos));
            result.ok = true;
            return result;
          }
          if (code === 92 && pos + 1 < max) {
            pos += 2;
            continue;
          }
          pos++;
        }
        return result;
      }
      level = 0;
      while (pos < max) {
        code = str.charCodeAt(pos);
        if (code === 32) {
          break;
        }
        if (code < 32 || code === 127) {
          break;
        }
        if (code === 92 && pos + 1 < max) {
          if (str.charCodeAt(pos + 1) === 32) {
            break;
          }
          pos += 2;
          continue;
        }
        if (code === 40) {
          level++;
          if (level > 32) {
            return result;
          }
        }
        if (code === 41) {
          if (level === 0) {
            break;
          }
          level--;
        }
        pos++;
      }
      if (start === pos) {
        return result;
      }
      if (level !== 0) {
        return result;
      }
      result.str = unescapeAll(str.slice(start, pos));
      result.pos = pos;
      result.ok = true;
      return result;
    };
  }
});

// node_modules/markdown-it/lib/helpers/parse_link_title.js
var require_parse_link_title = __commonJS({
  "node_modules/markdown-it/lib/helpers/parse_link_title.js"(exports, module) {
    "use strict";
    var unescapeAll = require_utils().unescapeAll;
    module.exports = function parseLinkTitle(str, start, max) {
      var code, marker, lines = 0, pos = start, result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ""
      };
      if (pos >= max) {
        return result;
      }
      marker = str.charCodeAt(pos);
      if (marker !== 34 && marker !== 39 && marker !== 40) {
        return result;
      }
      pos++;
      if (marker === 40) {
        marker = 41;
      }
      while (pos < max) {
        code = str.charCodeAt(pos);
        if (code === marker) {
          result.pos = pos + 1;
          result.lines = lines;
          result.str = unescapeAll(str.slice(start + 1, pos));
          result.ok = true;
          return result;
        } else if (code === 40 && marker === 41) {
          return result;
        } else if (code === 10) {
          lines++;
        } else if (code === 92 && pos + 1 < max) {
          pos++;
          if (str.charCodeAt(pos) === 10) {
            lines++;
          }
        }
        pos++;
      }
      return result;
    };
  }
});

// node_modules/markdown-it/lib/helpers/index.js
var require_helpers = __commonJS({
  "node_modules/markdown-it/lib/helpers/index.js"(exports) {
    "use strict";
    exports.parseLinkLabel = require_parse_link_label();
    exports.parseLinkDestination = require_parse_link_destination();
    exports.parseLinkTitle = require_parse_link_title();
  }
});

// node_modules/markdown-it/lib/renderer.js
var require_renderer = __commonJS({
  "node_modules/markdown-it/lib/renderer.js"(exports, module) {
    "use strict";
    var assign = require_utils().assign;
    var unescapeAll = require_utils().unescapeAll;
    var escapeHtml2 = require_utils().escapeHtml;
    var default_rules = {};
    default_rules.code_inline = function(tokens, idx, options2, env, slf) {
      var token = tokens[idx];
      return "<code" + slf.renderAttrs(token) + ">" + escapeHtml2(token.content) + "</code>";
    };
    default_rules.code_block = function(tokens, idx, options2, env, slf) {
      var token = tokens[idx];
      return "<pre" + slf.renderAttrs(token) + "><code>" + escapeHtml2(tokens[idx].content) + "</code></pre>\n";
    };
    default_rules.fence = function(tokens, idx, options2, env, slf) {
      var token = tokens[idx], info = token.info ? unescapeAll(token.info).trim() : "", langName = "", langAttrs = "", highlighted, i, arr, tmpAttrs, tmpToken;
      if (info) {
        arr = info.split(/(\s+)/g);
        langName = arr[0];
        langAttrs = arr.slice(2).join("");
      }
      if (options2.highlight) {
        highlighted = options2.highlight(token.content, langName, langAttrs) || escapeHtml2(token.content);
      } else {
        highlighted = escapeHtml2(token.content);
      }
      if (highlighted.indexOf("<pre") === 0) {
        return highlighted + "\n";
      }
      if (info) {
        i = token.attrIndex("class");
        tmpAttrs = token.attrs ? token.attrs.slice() : [];
        if (i < 0) {
          tmpAttrs.push(["class", options2.langPrefix + langName]);
        } else {
          tmpAttrs[i] = tmpAttrs[i].slice();
          tmpAttrs[i][1] += " " + options2.langPrefix + langName;
        }
        tmpToken = {
          attrs: tmpAttrs
        };
        return "<pre><code" + slf.renderAttrs(tmpToken) + ">" + highlighted + "</code></pre>\n";
      }
      return "<pre><code" + slf.renderAttrs(token) + ">" + highlighted + "</code></pre>\n";
    };
    default_rules.image = function(tokens, idx, options2, env, slf) {
      var token = tokens[idx];
      token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(token.children, options2, env);
      return slf.renderToken(tokens, idx, options2);
    };
    default_rules.hardbreak = function(tokens, idx, options2) {
      return options2.xhtmlOut ? "<br />\n" : "<br>\n";
    };
    default_rules.softbreak = function(tokens, idx, options2) {
      return options2.breaks ? options2.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
    };
    default_rules.text = function(tokens, idx) {
      return escapeHtml2(tokens[idx].content);
    };
    default_rules.html_block = function(tokens, idx) {
      return tokens[idx].content;
    };
    default_rules.html_inline = function(tokens, idx) {
      return tokens[idx].content;
    };
    function Renderer() {
      this.rules = assign({}, default_rules);
    }
    Renderer.prototype.renderAttrs = function renderAttrs(token) {
      var i, l, result;
      if (!token.attrs) {
        return "";
      }
      result = "";
      for (i = 0, l = token.attrs.length; i < l; i++) {
        result += " " + escapeHtml2(token.attrs[i][0]) + '="' + escapeHtml2(token.attrs[i][1]) + '"';
      }
      return result;
    };
    Renderer.prototype.renderToken = function renderToken(tokens, idx, options2) {
      var nextToken, result = "", needLf = false, token = tokens[idx];
      if (token.hidden) {
        return "";
      }
      if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
        result += "\n";
      }
      result += (token.nesting === -1 ? "</" : "<") + token.tag;
      result += this.renderAttrs(token);
      if (token.nesting === 0 && options2.xhtmlOut) {
        result += " /";
      }
      if (token.block) {
        needLf = true;
        if (token.nesting === 1) {
          if (idx + 1 < tokens.length) {
            nextToken = tokens[idx + 1];
            if (nextToken.type === "inline" || nextToken.hidden) {
              needLf = false;
            } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
              needLf = false;
            }
          }
        }
      }
      result += needLf ? ">\n" : ">";
      return result;
    };
    Renderer.prototype.renderInline = function(tokens, options2, env) {
      var type, result = "", rules = this.rules;
      for (var i = 0, len = tokens.length; i < len; i++) {
        type = tokens[i].type;
        if (typeof rules[type] !== "undefined") {
          result += rules[type](tokens, i, options2, env, this);
        } else {
          result += this.renderToken(tokens, i, options2);
        }
      }
      return result;
    };
    Renderer.prototype.renderInlineAsText = function(tokens, options2, env) {
      var result = "";
      for (var i = 0, len = tokens.length; i < len; i++) {
        if (tokens[i].type === "text") {
          result += tokens[i].content;
        } else if (tokens[i].type === "image") {
          result += this.renderInlineAsText(tokens[i].children, options2, env);
        } else if (tokens[i].type === "softbreak") {
          result += "\n";
        }
      }
      return result;
    };
    Renderer.prototype.render = function(tokens, options2, env) {
      var i, len, type, result = "", rules = this.rules;
      for (i = 0, len = tokens.length; i < len; i++) {
        type = tokens[i].type;
        if (type === "inline") {
          result += this.renderInline(tokens[i].children, options2, env);
        } else if (typeof rules[type] !== "undefined") {
          result += rules[type](tokens, i, options2, env, this);
        } else {
          result += this.renderToken(tokens, i, options2, env);
        }
      }
      return result;
    };
    module.exports = Renderer;
  }
});

// node_modules/markdown-it/lib/ruler.js
var require_ruler = __commonJS({
  "node_modules/markdown-it/lib/ruler.js"(exports, module) {
    "use strict";
    function Ruler() {
      this.__rules__ = [];
      this.__cache__ = null;
    }
    Ruler.prototype.__find__ = function(name) {
      for (var i = 0; i < this.__rules__.length; i++) {
        if (this.__rules__[i].name === name) {
          return i;
        }
      }
      return -1;
    };
    Ruler.prototype.__compile__ = function() {
      var self = this;
      var chains = [""];
      self.__rules__.forEach(function(rule) {
        if (!rule.enabled) {
          return;
        }
        rule.alt.forEach(function(altName) {
          if (chains.indexOf(altName) < 0) {
            chains.push(altName);
          }
        });
      });
      self.__cache__ = {};
      chains.forEach(function(chain) {
        self.__cache__[chain] = [];
        self.__rules__.forEach(function(rule) {
          if (!rule.enabled) {
            return;
          }
          if (chain && rule.alt.indexOf(chain) < 0) {
            return;
          }
          self.__cache__[chain].push(rule.fn);
        });
      });
    };
    Ruler.prototype.at = function(name, fn, options2) {
      var index2 = this.__find__(name);
      var opt = options2 || {};
      if (index2 === -1) {
        throw new Error("Parser rule not found: " + name);
      }
      this.__rules__[index2].fn = fn;
      this.__rules__[index2].alt = opt.alt || [];
      this.__cache__ = null;
    };
    Ruler.prototype.before = function(beforeName, ruleName, fn, options2) {
      var index2 = this.__find__(beforeName);
      var opt = options2 || {};
      if (index2 === -1) {
        throw new Error("Parser rule not found: " + beforeName);
      }
      this.__rules__.splice(index2, 0, {
        name: ruleName,
        enabled: true,
        fn,
        alt: opt.alt || []
      });
      this.__cache__ = null;
    };
    Ruler.prototype.after = function(afterName, ruleName, fn, options2) {
      var index2 = this.__find__(afterName);
      var opt = options2 || {};
      if (index2 === -1) {
        throw new Error("Parser rule not found: " + afterName);
      }
      this.__rules__.splice(index2 + 1, 0, {
        name: ruleName,
        enabled: true,
        fn,
        alt: opt.alt || []
      });
      this.__cache__ = null;
    };
    Ruler.prototype.push = function(ruleName, fn, options2) {
      var opt = options2 || {};
      this.__rules__.push({
        name: ruleName,
        enabled: true,
        fn,
        alt: opt.alt || []
      });
      this.__cache__ = null;
    };
    Ruler.prototype.enable = function(list, ignoreInvalid) {
      if (!Array.isArray(list)) {
        list = [list];
      }
      var result = [];
      list.forEach(function(name) {
        var idx = this.__find__(name);
        if (idx < 0) {
          if (ignoreInvalid) {
            return;
          }
          throw new Error("Rules manager: invalid rule name " + name);
        }
        this.__rules__[idx].enabled = true;
        result.push(name);
      }, this);
      this.__cache__ = null;
      return result;
    };
    Ruler.prototype.enableOnly = function(list, ignoreInvalid) {
      if (!Array.isArray(list)) {
        list = [list];
      }
      this.__rules__.forEach(function(rule) {
        rule.enabled = false;
      });
      this.enable(list, ignoreInvalid);
    };
    Ruler.prototype.disable = function(list, ignoreInvalid) {
      if (!Array.isArray(list)) {
        list = [list];
      }
      var result = [];
      list.forEach(function(name) {
        var idx = this.__find__(name);
        if (idx < 0) {
          if (ignoreInvalid) {
            return;
          }
          throw new Error("Rules manager: invalid rule name " + name);
        }
        this.__rules__[idx].enabled = false;
        result.push(name);
      }, this);
      this.__cache__ = null;
      return result;
    };
    Ruler.prototype.getRules = function(chainName) {
      if (this.__cache__ === null) {
        this.__compile__();
      }
      return this.__cache__[chainName] || [];
    };
    module.exports = Ruler;
  }
});

// node_modules/markdown-it/lib/rules_core/normalize.js
var require_normalize = __commonJS({
  "node_modules/markdown-it/lib/rules_core/normalize.js"(exports, module) {
    "use strict";
    var NEWLINES_RE = /\r\n?|\n/g;
    var NULL_RE = /\0/g;
    module.exports = function normalize(state) {
      var str;
      str = state.src.replace(NEWLINES_RE, "\n");
      str = str.replace(NULL_RE, "\uFFFD");
      state.src = str;
    };
  }
});

// node_modules/markdown-it/lib/rules_core/block.js
var require_block = __commonJS({
  "node_modules/markdown-it/lib/rules_core/block.js"(exports, module) {
    "use strict";
    module.exports = function block(state) {
      var token;
      if (state.inlineMode) {
        token = new state.Token("inline", "", 0);
        token.content = state.src;
        token.map = [0, 1];
        token.children = [];
        state.tokens.push(token);
      } else {
        state.md.block.parse(state.src, state.md, state.env, state.tokens);
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_core/inline.js
var require_inline = __commonJS({
  "node_modules/markdown-it/lib/rules_core/inline.js"(exports, module) {
    "use strict";
    module.exports = function inline(state) {
      var tokens = state.tokens, tok, i, l;
      for (i = 0, l = tokens.length; i < l; i++) {
        tok = tokens[i];
        if (tok.type === "inline") {
          state.md.inline.parse(tok.content, state.md, state.env, tok.children);
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_core/linkify.js
var require_linkify = __commonJS({
  "node_modules/markdown-it/lib/rules_core/linkify.js"(exports, module) {
    "use strict";
    var arrayReplaceAt = require_utils().arrayReplaceAt;
    function isLinkOpen(str) {
      return /^<a[>\s]/i.test(str);
    }
    function isLinkClose(str) {
      return /^<\/a\s*>/i.test(str);
    }
    module.exports = function linkify(state) {
      var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos, level, htmlLinkLevel, url, fullUrl, urlText, blockTokens = state.tokens, links;
      if (!state.md.options.linkify) {
        return;
      }
      for (j = 0, l = blockTokens.length; j < l; j++) {
        if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) {
          continue;
        }
        tokens = blockTokens[j].children;
        htmlLinkLevel = 0;
        for (i = tokens.length - 1; i >= 0; i--) {
          currentToken = tokens[i];
          if (currentToken.type === "link_close") {
            i--;
            while (tokens[i].level !== currentToken.level && tokens[i].type !== "link_open") {
              i--;
            }
            continue;
          }
          if (currentToken.type === "html_inline") {
            if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
              htmlLinkLevel--;
            }
            if (isLinkClose(currentToken.content)) {
              htmlLinkLevel++;
            }
          }
          if (htmlLinkLevel > 0) {
            continue;
          }
          if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
            text = currentToken.content;
            links = state.md.linkify.match(text);
            nodes = [];
            level = currentToken.level;
            lastPos = 0;
            if (links.length > 0 && links[0].index === 0 && i > 0 && tokens[i - 1].type === "text_special") {
              links = links.slice(1);
            }
            for (ln = 0; ln < links.length; ln++) {
              url = links[ln].url;
              fullUrl = state.md.normalizeLink(url);
              if (!state.md.validateLink(fullUrl)) {
                continue;
              }
              urlText = links[ln].text;
              if (!links[ln].schema) {
                urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
              } else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) {
                urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
              } else {
                urlText = state.md.normalizeLinkText(urlText);
              }
              pos = links[ln].index;
              if (pos > lastPos) {
                token = new state.Token("text", "", 0);
                token.content = text.slice(lastPos, pos);
                token.level = level;
                nodes.push(token);
              }
              token = new state.Token("link_open", "a", 1);
              token.attrs = [["href", fullUrl]];
              token.level = level++;
              token.markup = "linkify";
              token.info = "auto";
              nodes.push(token);
              token = new state.Token("text", "", 0);
              token.content = urlText;
              token.level = level;
              nodes.push(token);
              token = new state.Token("link_close", "a", -1);
              token.level = --level;
              token.markup = "linkify";
              token.info = "auto";
              nodes.push(token);
              lastPos = links[ln].lastIndex;
            }
            if (lastPos < text.length) {
              token = new state.Token("text", "", 0);
              token.content = text.slice(lastPos);
              token.level = level;
              nodes.push(token);
            }
            blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
          }
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_core/replacements.js
var require_replacements = __commonJS({
  "node_modules/markdown-it/lib/rules_core/replacements.js"(exports, module) {
    "use strict";
    var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
    var SCOPED_ABBR_TEST_RE = /\((c|tm|r)\)/i;
    var SCOPED_ABBR_RE = /\((c|tm|r)\)/ig;
    var SCOPED_ABBR = {
      c: "\xA9",
      r: "\xAE",
      tm: "\u2122"
    };
    function replaceFn(match, name) {
      return SCOPED_ABBR[name.toLowerCase()];
    }
    function replace_scoped(inlineTokens) {
      var i, token, inside_autolink = 0;
      for (i = inlineTokens.length - 1; i >= 0; i--) {
        token = inlineTokens[i];
        if (token.type === "text" && !inside_autolink) {
          token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
        }
        if (token.type === "link_open" && token.info === "auto") {
          inside_autolink--;
        }
        if (token.type === "link_close" && token.info === "auto") {
          inside_autolink++;
        }
      }
    }
    function replace_rare(inlineTokens) {
      var i, token, inside_autolink = 0;
      for (i = inlineTokens.length - 1; i >= 0; i--) {
        token = inlineTokens[i];
        if (token.type === "text" && !inside_autolink) {
          if (RARE_RE.test(token.content)) {
            token.content = token.content.replace(/\+-/g, "\xB1").replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1\u2014").replace(/(^|\s)--(?=\s|$)/mg, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1\u2013");
          }
        }
        if (token.type === "link_open" && token.info === "auto") {
          inside_autolink--;
        }
        if (token.type === "link_close" && token.info === "auto") {
          inside_autolink++;
        }
      }
    }
    module.exports = function replace(state) {
      var blkIdx;
      if (!state.md.options.typographer) {
        return;
      }
      for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
        if (state.tokens[blkIdx].type !== "inline") {
          continue;
        }
        if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
          replace_scoped(state.tokens[blkIdx].children);
        }
        if (RARE_RE.test(state.tokens[blkIdx].content)) {
          replace_rare(state.tokens[blkIdx].children);
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_core/smartquotes.js
var require_smartquotes = __commonJS({
  "node_modules/markdown-it/lib/rules_core/smartquotes.js"(exports, module) {
    "use strict";
    var isWhiteSpace = require_utils().isWhiteSpace;
    var isPunctChar = require_utils().isPunctChar;
    var isMdAsciiPunct = require_utils().isMdAsciiPunct;
    var QUOTE_TEST_RE = /['"]/;
    var QUOTE_RE = /['"]/g;
    var APOSTROPHE = "\u2019";
    function replaceAt(str, index2, ch) {
      return str.slice(0, index2) + ch + str.slice(index2 + 1);
    }
    function process_inlines(tokens, state) {
      var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack2, openQuote, closeQuote;
      stack2 = [];
      for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        thisLevel = tokens[i].level;
        for (j = stack2.length - 1; j >= 0; j--) {
          if (stack2[j].level <= thisLevel) {
            break;
          }
        }
        stack2.length = j + 1;
        if (token.type !== "text") {
          continue;
        }
        text = token.content;
        pos = 0;
        max = text.length;
        OUTER:
          while (pos < max) {
            QUOTE_RE.lastIndex = pos;
            t = QUOTE_RE.exec(text);
            if (!t) {
              break;
            }
            canOpen = canClose = true;
            pos = t.index + 1;
            isSingle = t[0] === "'";
            lastChar = 32;
            if (t.index - 1 >= 0) {
              lastChar = text.charCodeAt(t.index - 1);
            } else {
              for (j = i - 1; j >= 0; j--) {
                if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
                  break;
                if (!tokens[j].content)
                  continue;
                lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
                break;
              }
            }
            nextChar = 32;
            if (pos < max) {
              nextChar = text.charCodeAt(pos);
            } else {
              for (j = i + 1; j < tokens.length; j++) {
                if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
                  break;
                if (!tokens[j].content)
                  continue;
                nextChar = tokens[j].content.charCodeAt(0);
                break;
              }
            }
            isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
            isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
            isLastWhiteSpace = isWhiteSpace(lastChar);
            isNextWhiteSpace = isWhiteSpace(nextChar);
            if (isNextWhiteSpace) {
              canOpen = false;
            } else if (isNextPunctChar) {
              if (!(isLastWhiteSpace || isLastPunctChar)) {
                canOpen = false;
              }
            }
            if (isLastWhiteSpace) {
              canClose = false;
            } else if (isLastPunctChar) {
              if (!(isNextWhiteSpace || isNextPunctChar)) {
                canClose = false;
              }
            }
            if (nextChar === 34 && t[0] === '"') {
              if (lastChar >= 48 && lastChar <= 57) {
                canClose = canOpen = false;
              }
            }
            if (canOpen && canClose) {
              canOpen = isLastPunctChar;
              canClose = isNextPunctChar;
            }
            if (!canOpen && !canClose) {
              if (isSingle) {
                token.content = replaceAt(token.content, t.index, APOSTROPHE);
              }
              continue;
            }
            if (canClose) {
              for (j = stack2.length - 1; j >= 0; j--) {
                item = stack2[j];
                if (stack2[j].level < thisLevel) {
                  break;
                }
                if (item.single === isSingle && stack2[j].level === thisLevel) {
                  item = stack2[j];
                  if (isSingle) {
                    openQuote = state.md.options.quotes[2];
                    closeQuote = state.md.options.quotes[3];
                  } else {
                    openQuote = state.md.options.quotes[0];
                    closeQuote = state.md.options.quotes[1];
                  }
                  token.content = replaceAt(token.content, t.index, closeQuote);
                  tokens[item.token].content = replaceAt(
                    tokens[item.token].content,
                    item.pos,
                    openQuote
                  );
                  pos += closeQuote.length - 1;
                  if (item.token === i) {
                    pos += openQuote.length - 1;
                  }
                  text = token.content;
                  max = text.length;
                  stack2.length = j;
                  continue OUTER;
                }
              }
            }
            if (canOpen) {
              stack2.push({
                token: i,
                pos: t.index,
                single: isSingle,
                level: thisLevel
              });
            } else if (canClose && isSingle) {
              token.content = replaceAt(token.content, t.index, APOSTROPHE);
            }
          }
      }
    }
    module.exports = function smartquotes(state) {
      var blkIdx;
      if (!state.md.options.typographer) {
        return;
      }
      for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
        if (state.tokens[blkIdx].type !== "inline" || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
          continue;
        }
        process_inlines(state.tokens[blkIdx].children, state);
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_core/text_join.js
var require_text_join = __commonJS({
  "node_modules/markdown-it/lib/rules_core/text_join.js"(exports, module) {
    "use strict";
    module.exports = function text_join(state) {
      var j, l, tokens, curr, max, last, blockTokens = state.tokens;
      for (j = 0, l = blockTokens.length; j < l; j++) {
        if (blockTokens[j].type !== "inline")
          continue;
        tokens = blockTokens[j].children;
        max = tokens.length;
        for (curr = 0; curr < max; curr++) {
          if (tokens[curr].type === "text_special") {
            tokens[curr].type = "text";
          }
        }
        for (curr = last = 0; curr < max; curr++) {
          if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
            tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
          } else {
            if (curr !== last) {
              tokens[last] = tokens[curr];
            }
            last++;
          }
        }
        if (curr !== last) {
          tokens.length = last;
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/token.js
var require_token = __commonJS({
  "node_modules/markdown-it/lib/token.js"(exports, module) {
    "use strict";
    function Token(type, tag, nesting) {
      this.type = type;
      this.tag = tag;
      this.attrs = null;
      this.map = null;
      this.nesting = nesting;
      this.level = 0;
      this.children = null;
      this.content = "";
      this.markup = "";
      this.info = "";
      this.meta = null;
      this.block = false;
      this.hidden = false;
    }
    Token.prototype.attrIndex = function attrIndex(name) {
      var attrs, i, len;
      if (!this.attrs) {
        return -1;
      }
      attrs = this.attrs;
      for (i = 0, len = attrs.length; i < len; i++) {
        if (attrs[i][0] === name) {
          return i;
        }
      }
      return -1;
    };
    Token.prototype.attrPush = function attrPush(attrData) {
      if (this.attrs) {
        this.attrs.push(attrData);
      } else {
        this.attrs = [attrData];
      }
    };
    Token.prototype.attrSet = function attrSet(name, value) {
      var idx = this.attrIndex(name), attrData = [name, value];
      if (idx < 0) {
        this.attrPush(attrData);
      } else {
        this.attrs[idx] = attrData;
      }
    };
    Token.prototype.attrGet = function attrGet(name) {
      var idx = this.attrIndex(name), value = null;
      if (idx >= 0) {
        value = this.attrs[idx][1];
      }
      return value;
    };
    Token.prototype.attrJoin = function attrJoin(name, value) {
      var idx = this.attrIndex(name);
      if (idx < 0) {
        this.attrPush([name, value]);
      } else {
        this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
      }
    };
    module.exports = Token;
  }
});

// node_modules/markdown-it/lib/rules_core/state_core.js
var require_state_core = __commonJS({
  "node_modules/markdown-it/lib/rules_core/state_core.js"(exports, module) {
    "use strict";
    var Token = require_token();
    function StateCore(src, md, env) {
      this.src = src;
      this.env = env;
      this.tokens = [];
      this.inlineMode = false;
      this.md = md;
    }
    StateCore.prototype.Token = Token;
    module.exports = StateCore;
  }
});

// node_modules/markdown-it/lib/parser_core.js
var require_parser_core = __commonJS({
  "node_modules/markdown-it/lib/parser_core.js"(exports, module) {
    "use strict";
    var Ruler = require_ruler();
    var _rules = [
      ["normalize", require_normalize()],
      ["block", require_block()],
      ["inline", require_inline()],
      ["linkify", require_linkify()],
      ["replacements", require_replacements()],
      ["smartquotes", require_smartquotes()],
      // `text_join` finds `text_special` tokens (for escape sequences)
      // and joins them with the rest of the text
      ["text_join", require_text_join()]
    ];
    function Core() {
      this.ruler = new Ruler();
      for (var i = 0; i < _rules.length; i++) {
        this.ruler.push(_rules[i][0], _rules[i][1]);
      }
    }
    Core.prototype.process = function(state) {
      var i, l, rules;
      rules = this.ruler.getRules("");
      for (i = 0, l = rules.length; i < l; i++) {
        rules[i](state);
      }
    };
    Core.prototype.State = require_state_core();
    module.exports = Core;
  }
});

// node_modules/markdown-it/lib/rules_block/table.js
var require_table = __commonJS({
  "node_modules/markdown-it/lib/rules_block/table.js"(exports, module) {
    "use strict";
    var isSpace = require_utils().isSpace;
    function getLine(state, line) {
      var pos = state.bMarks[line] + state.tShift[line], max = state.eMarks[line];
      return state.src.slice(pos, max);
    }
    function escapedSplit(str) {
      var result = [], pos = 0, max = str.length, ch, isEscaped = false, lastPos = 0, current = "";
      ch = str.charCodeAt(pos);
      while (pos < max) {
        if (ch === 124) {
          if (!isEscaped) {
            result.push(current + str.substring(lastPos, pos));
            current = "";
            lastPos = pos + 1;
          } else {
            current += str.substring(lastPos, pos - 1);
            lastPos = pos;
          }
        }
        isEscaped = ch === 92;
        pos++;
        ch = str.charCodeAt(pos);
      }
      result.push(current + str.substring(lastPos));
      return result;
    }
    module.exports = function table(state, startLine, endLine, silent) {
      var ch, lineText, pos, i, l, nextLine, columns, columnCount, token, aligns, t, tableLines, tbodyLines, oldParentType, terminate, terminatorRules, firstCh, secondCh;
      if (startLine + 2 > endLine) {
        return false;
      }
      nextLine = startLine + 1;
      if (state.sCount[nextLine] < state.blkIndent) {
        return false;
      }
      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        return false;
      }
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      if (pos >= state.eMarks[nextLine]) {
        return false;
      }
      firstCh = state.src.charCodeAt(pos++);
      if (firstCh !== 124 && firstCh !== 45 && firstCh !== 58) {
        return false;
      }
      if (pos >= state.eMarks[nextLine]) {
        return false;
      }
      secondCh = state.src.charCodeAt(pos++);
      if (secondCh !== 124 && secondCh !== 45 && secondCh !== 58 && !isSpace(secondCh)) {
        return false;
      }
      if (firstCh === 45 && isSpace(secondCh)) {
        return false;
      }
      while (pos < state.eMarks[nextLine]) {
        ch = state.src.charCodeAt(pos);
        if (ch !== 124 && ch !== 45 && ch !== 58 && !isSpace(ch)) {
          return false;
        }
        pos++;
      }
      lineText = getLine(state, startLine + 1);
      columns = lineText.split("|");
      aligns = [];
      for (i = 0; i < columns.length; i++) {
        t = columns[i].trim();
        if (!t) {
          if (i === 0 || i === columns.length - 1) {
            continue;
          } else {
            return false;
          }
        }
        if (!/^:?-+:?$/.test(t)) {
          return false;
        }
        if (t.charCodeAt(t.length - 1) === 58) {
          aligns.push(t.charCodeAt(0) === 58 ? "center" : "right");
        } else if (t.charCodeAt(0) === 58) {
          aligns.push("left");
        } else {
          aligns.push("");
        }
      }
      lineText = getLine(state, startLine).trim();
      if (lineText.indexOf("|") === -1) {
        return false;
      }
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      columns = escapedSplit(lineText);
      if (columns.length && columns[0] === "")
        columns.shift();
      if (columns.length && columns[columns.length - 1] === "")
        columns.pop();
      columnCount = columns.length;
      if (columnCount === 0 || columnCount !== aligns.length) {
        return false;
      }
      if (silent) {
        return true;
      }
      oldParentType = state.parentType;
      state.parentType = "table";
      terminatorRules = state.md.block.ruler.getRules("blockquote");
      token = state.push("table_open", "table", 1);
      token.map = tableLines = [startLine, 0];
      token = state.push("thead_open", "thead", 1);
      token.map = [startLine, startLine + 1];
      token = state.push("tr_open", "tr", 1);
      token.map = [startLine, startLine + 1];
      for (i = 0; i < columns.length; i++) {
        token = state.push("th_open", "th", 1);
        if (aligns[i]) {
          token.attrs = [["style", "text-align:" + aligns[i]]];
        }
        token = state.push("inline", "", 0);
        token.content = columns[i].trim();
        token.children = [];
        token = state.push("th_close", "th", -1);
      }
      token = state.push("tr_close", "tr", -1);
      token = state.push("thead_close", "thead", -1);
      for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
        if (state.sCount[nextLine] < state.blkIndent) {
          break;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
        lineText = getLine(state, nextLine).trim();
        if (!lineText) {
          break;
        }
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
          break;
        }
        columns = escapedSplit(lineText);
        if (columns.length && columns[0] === "")
          columns.shift();
        if (columns.length && columns[columns.length - 1] === "")
          columns.pop();
        if (nextLine === startLine + 2) {
          token = state.push("tbody_open", "tbody", 1);
          token.map = tbodyLines = [startLine + 2, 0];
        }
        token = state.push("tr_open", "tr", 1);
        token.map = [nextLine, nextLine + 1];
        for (i = 0; i < columnCount; i++) {
          token = state.push("td_open", "td", 1);
          if (aligns[i]) {
            token.attrs = [["style", "text-align:" + aligns[i]]];
          }
          token = state.push("inline", "", 0);
          token.content = columns[i] ? columns[i].trim() : "";
          token.children = [];
          token = state.push("td_close", "td", -1);
        }
        token = state.push("tr_close", "tr", -1);
      }
      if (tbodyLines) {
        token = state.push("tbody_close", "tbody", -1);
        tbodyLines[1] = nextLine;
      }
      token = state.push("table_close", "table", -1);
      tableLines[1] = nextLine;
      state.parentType = oldParentType;
      state.line = nextLine;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/code.js
var require_code = __commonJS({
  "node_modules/markdown-it/lib/rules_block/code.js"(exports, module) {
    "use strict";
    module.exports = function code(state, startLine, endLine) {
      var nextLine, last, token;
      if (state.sCount[startLine] - state.blkIndent < 4) {
        return false;
      }
      last = nextLine = startLine + 1;
      while (nextLine < endLine) {
        if (state.isEmpty(nextLine)) {
          nextLine++;
          continue;
        }
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
          nextLine++;
          last = nextLine;
          continue;
        }
        break;
      }
      state.line = last;
      token = state.push("code_block", "code", 0);
      token.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + "\n";
      token.map = [startLine, state.line];
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/fence.js
var require_fence = __commonJS({
  "node_modules/markdown-it/lib/rules_block/fence.js"(exports, module) {
    "use strict";
    module.exports = function fence(state, startLine, endLine, silent) {
      var marker, len, params, nextLine, mem, token, markup, haveEndMarker = false, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      if (pos + 3 > max) {
        return false;
      }
      marker = state.src.charCodeAt(pos);
      if (marker !== 126 && marker !== 96) {
        return false;
      }
      mem = pos;
      pos = state.skipChars(pos, marker);
      len = pos - mem;
      if (len < 3) {
        return false;
      }
      markup = state.src.slice(mem, pos);
      params = state.src.slice(pos, max);
      if (marker === 96) {
        if (params.indexOf(String.fromCharCode(marker)) >= 0) {
          return false;
        }
      }
      if (silent) {
        return true;
      }
      nextLine = startLine;
      for (; ; ) {
        nextLine++;
        if (nextLine >= endLine) {
          break;
        }
        pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        if (pos < max && state.sCount[nextLine] < state.blkIndent) {
          break;
        }
        if (state.src.charCodeAt(pos) !== marker) {
          continue;
        }
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
          continue;
        }
        pos = state.skipChars(pos, marker);
        if (pos - mem < len) {
          continue;
        }
        pos = state.skipSpaces(pos);
        if (pos < max) {
          continue;
        }
        haveEndMarker = true;
        break;
      }
      len = state.sCount[startLine];
      state.line = nextLine + (haveEndMarker ? 1 : 0);
      token = state.push("fence", "code", 0);
      token.info = params;
      token.content = state.getLines(startLine + 1, nextLine, len, true);
      token.markup = markup;
      token.map = [startLine, state.line];
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/blockquote.js
var require_blockquote = __commonJS({
  "node_modules/markdown-it/lib/rules_block/blockquote.js"(exports, module) {
    "use strict";
    var isSpace = require_utils().isSpace;
    module.exports = function blockquote(state, startLine, endLine, silent) {
      var adjustTab, ch, i, initial, l, lastLineEmpty, lines, nextLine, offset, oldBMarks, oldBSCount, oldIndent, oldParentType, oldSCount, oldTShift, spaceAfterMarker, terminate, terminatorRules, token, isOutdented, oldLineMax = state.lineMax, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      if (state.src.charCodeAt(pos) !== 62) {
        return false;
      }
      if (silent) {
        return true;
      }
      oldBMarks = [];
      oldBSCount = [];
      oldSCount = [];
      oldTShift = [];
      terminatorRules = state.md.block.ruler.getRules("blockquote");
      oldParentType = state.parentType;
      state.parentType = "blockquote";
      for (nextLine = startLine; nextLine < endLine; nextLine++) {
        isOutdented = state.sCount[nextLine] < state.blkIndent;
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        if (pos >= max) {
          break;
        }
        if (state.src.charCodeAt(pos++) === 62 && !isOutdented) {
          initial = state.sCount[nextLine] + 1;
          if (state.src.charCodeAt(pos) === 32) {
            pos++;
            initial++;
            adjustTab = false;
            spaceAfterMarker = true;
          } else if (state.src.charCodeAt(pos) === 9) {
            spaceAfterMarker = true;
            if ((state.bsCount[nextLine] + initial) % 4 === 3) {
              pos++;
              initial++;
              adjustTab = false;
            } else {
              adjustTab = true;
            }
          } else {
            spaceAfterMarker = false;
          }
          offset = initial;
          oldBMarks.push(state.bMarks[nextLine]);
          state.bMarks[nextLine] = pos;
          while (pos < max) {
            ch = state.src.charCodeAt(pos);
            if (isSpace(ch)) {
              if (ch === 9) {
                offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
              } else {
                offset++;
              }
            } else {
              break;
            }
            pos++;
          }
          lastLineEmpty = pos >= max;
          oldBSCount.push(state.bsCount[nextLine]);
          state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
          oldSCount.push(state.sCount[nextLine]);
          state.sCount[nextLine] = offset - initial;
          oldTShift.push(state.tShift[nextLine]);
          state.tShift[nextLine] = pos - state.bMarks[nextLine];
          continue;
        }
        if (lastLineEmpty) {
          break;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          state.lineMax = nextLine;
          if (state.blkIndent !== 0) {
            oldBMarks.push(state.bMarks[nextLine]);
            oldBSCount.push(state.bsCount[nextLine]);
            oldTShift.push(state.tShift[nextLine]);
            oldSCount.push(state.sCount[nextLine]);
            state.sCount[nextLine] -= state.blkIndent;
          }
          break;
        }
        oldBMarks.push(state.bMarks[nextLine]);
        oldBSCount.push(state.bsCount[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] = -1;
      }
      oldIndent = state.blkIndent;
      state.blkIndent = 0;
      token = state.push("blockquote_open", "blockquote", 1);
      token.markup = ">";
      token.map = lines = [startLine, 0];
      state.md.block.tokenize(state, startLine, nextLine);
      token = state.push("blockquote_close", "blockquote", -1);
      token.markup = ">";
      state.lineMax = oldLineMax;
      state.parentType = oldParentType;
      lines[1] = state.line;
      for (i = 0; i < oldTShift.length; i++) {
        state.bMarks[i + startLine] = oldBMarks[i];
        state.tShift[i + startLine] = oldTShift[i];
        state.sCount[i + startLine] = oldSCount[i];
        state.bsCount[i + startLine] = oldBSCount[i];
      }
      state.blkIndent = oldIndent;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/hr.js
var require_hr = __commonJS({
  "node_modules/markdown-it/lib/rules_block/hr.js"(exports, module) {
    "use strict";
    var isSpace = require_utils().isSpace;
    module.exports = function hr(state, startLine, endLine, silent) {
      var marker, cnt, ch, token, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      marker = state.src.charCodeAt(pos++);
      if (marker !== 42 && marker !== 45 && marker !== 95) {
        return false;
      }
      cnt = 1;
      while (pos < max) {
        ch = state.src.charCodeAt(pos++);
        if (ch !== marker && !isSpace(ch)) {
          return false;
        }
        if (ch === marker) {
          cnt++;
        }
      }
      if (cnt < 3) {
        return false;
      }
      if (silent) {
        return true;
      }
      state.line = startLine + 1;
      token = state.push("hr", "hr", 0);
      token.map = [startLine, state.line];
      token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/list.js
var require_list = __commonJS({
  "node_modules/markdown-it/lib/rules_block/list.js"(exports, module) {
    "use strict";
    var isSpace = require_utils().isSpace;
    function skipBulletListMarker(state, startLine) {
      var marker, pos, max, ch;
      pos = state.bMarks[startLine] + state.tShift[startLine];
      max = state.eMarks[startLine];
      marker = state.src.charCodeAt(pos++);
      if (marker !== 42 && marker !== 45 && marker !== 43) {
        return -1;
      }
      if (pos < max) {
        ch = state.src.charCodeAt(pos);
        if (!isSpace(ch)) {
          return -1;
        }
      }
      return pos;
    }
    function skipOrderedListMarker(state, startLine) {
      var ch, start = state.bMarks[startLine] + state.tShift[startLine], pos = start, max = state.eMarks[startLine];
      if (pos + 1 >= max) {
        return -1;
      }
      ch = state.src.charCodeAt(pos++);
      if (ch < 48 || ch > 57) {
        return -1;
      }
      for (; ; ) {
        if (pos >= max) {
          return -1;
        }
        ch = state.src.charCodeAt(pos++);
        if (ch >= 48 && ch <= 57) {
          if (pos - start >= 10) {
            return -1;
          }
          continue;
        }
        if (ch === 41 || ch === 46) {
          break;
        }
        return -1;
      }
      if (pos < max) {
        ch = state.src.charCodeAt(pos);
        if (!isSpace(ch)) {
          return -1;
        }
      }
      return pos;
    }
    function markTightParagraphs(state, idx) {
      var i, l, level = state.level + 2;
      for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
        if (state.tokens[i].level === level && state.tokens[i].type === "paragraph_open") {
          state.tokens[i + 2].hidden = true;
          state.tokens[i].hidden = true;
          i += 2;
        }
      }
    }
    module.exports = function list(state, startLine, endLine, silent) {
      var ch, contentStart, i, indent, indentAfterMarker, initial, isOrdered, itemLines, l, listLines, listTokIdx, markerCharCode, markerValue, max, offset, oldListIndent, oldParentType, oldSCount, oldTShift, oldTight, pos, posAfterMarker, prevEmptyEnd, start, terminate, terminatorRules, token, nextLine = startLine, isTerminatingParagraph = false, tight = true;
      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        return false;
      }
      if (state.listIndent >= 0 && state.sCount[nextLine] - state.listIndent >= 4 && state.sCount[nextLine] < state.blkIndent) {
        return false;
      }
      if (silent && state.parentType === "paragraph") {
        if (state.sCount[nextLine] >= state.blkIndent) {
          isTerminatingParagraph = true;
        }
      }
      if ((posAfterMarker = skipOrderedListMarker(state, nextLine)) >= 0) {
        isOrdered = true;
        start = state.bMarks[nextLine] + state.tShift[nextLine];
        markerValue = Number(state.src.slice(start, posAfterMarker - 1));
        if (isTerminatingParagraph && markerValue !== 1)
          return false;
      } else if ((posAfterMarker = skipBulletListMarker(state, nextLine)) >= 0) {
        isOrdered = false;
      } else {
        return false;
      }
      if (isTerminatingParagraph) {
        if (state.skipSpaces(posAfterMarker) >= state.eMarks[nextLine])
          return false;
      }
      if (silent) {
        return true;
      }
      markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
      listTokIdx = state.tokens.length;
      if (isOrdered) {
        token = state.push("ordered_list_open", "ol", 1);
        if (markerValue !== 1) {
          token.attrs = [["start", markerValue]];
        }
      } else {
        token = state.push("bullet_list_open", "ul", 1);
      }
      token.map = listLines = [nextLine, 0];
      token.markup = String.fromCharCode(markerCharCode);
      prevEmptyEnd = false;
      terminatorRules = state.md.block.ruler.getRules("list");
      oldParentType = state.parentType;
      state.parentType = "list";
      while (nextLine < endLine) {
        pos = posAfterMarker;
        max = state.eMarks[nextLine];
        initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[nextLine] + state.tShift[nextLine]);
        while (pos < max) {
          ch = state.src.charCodeAt(pos);
          if (ch === 9) {
            offset += 4 - (offset + state.bsCount[nextLine]) % 4;
          } else if (ch === 32) {
            offset++;
          } else {
            break;
          }
          pos++;
        }
        contentStart = pos;
        if (contentStart >= max) {
          indentAfterMarker = 1;
        } else {
          indentAfterMarker = offset - initial;
        }
        if (indentAfterMarker > 4) {
          indentAfterMarker = 1;
        }
        indent = initial + indentAfterMarker;
        token = state.push("list_item_open", "li", 1);
        token.markup = String.fromCharCode(markerCharCode);
        token.map = itemLines = [nextLine, 0];
        if (isOrdered) {
          token.info = state.src.slice(start, posAfterMarker - 1);
        }
        oldTight = state.tight;
        oldTShift = state.tShift[nextLine];
        oldSCount = state.sCount[nextLine];
        oldListIndent = state.listIndent;
        state.listIndent = state.blkIndent;
        state.blkIndent = indent;
        state.tight = true;
        state.tShift[nextLine] = contentStart - state.bMarks[nextLine];
        state.sCount[nextLine] = offset;
        if (contentStart >= max && state.isEmpty(nextLine + 1)) {
          state.line = Math.min(state.line + 2, endLine);
        } else {
          state.md.block.tokenize(state, nextLine, endLine, true);
        }
        if (!state.tight || prevEmptyEnd) {
          tight = false;
        }
        prevEmptyEnd = state.line - nextLine > 1 && state.isEmpty(state.line - 1);
        state.blkIndent = state.listIndent;
        state.listIndent = oldListIndent;
        state.tShift[nextLine] = oldTShift;
        state.sCount[nextLine] = oldSCount;
        state.tight = oldTight;
        token = state.push("list_item_close", "li", -1);
        token.markup = String.fromCharCode(markerCharCode);
        nextLine = state.line;
        itemLines[1] = nextLine;
        if (nextLine >= endLine) {
          break;
        }
        if (state.sCount[nextLine] < state.blkIndent) {
          break;
        }
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
          break;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
        if (isOrdered) {
          posAfterMarker = skipOrderedListMarker(state, nextLine);
          if (posAfterMarker < 0) {
            break;
          }
          start = state.bMarks[nextLine] + state.tShift[nextLine];
        } else {
          posAfterMarker = skipBulletListMarker(state, nextLine);
          if (posAfterMarker < 0) {
            break;
          }
        }
        if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
          break;
        }
      }
      if (isOrdered) {
        token = state.push("ordered_list_close", "ol", -1);
      } else {
        token = state.push("bullet_list_close", "ul", -1);
      }
      token.markup = String.fromCharCode(markerCharCode);
      listLines[1] = nextLine;
      state.line = nextLine;
      state.parentType = oldParentType;
      if (tight) {
        markTightParagraphs(state, listTokIdx);
      }
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/reference.js
var require_reference = __commonJS({
  "node_modules/markdown-it/lib/rules_block/reference.js"(exports, module) {
    "use strict";
    var normalizeReference = require_utils().normalizeReference;
    var isSpace = require_utils().isSpace;
    module.exports = function reference(state, startLine, _endLine, silent) {
      var ch, destEndPos, destEndLineNo, endLine, href, i, l, label, labelEnd, oldParentType, res, start, str, terminate, terminatorRules, title, lines = 0, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine], nextLine = startLine + 1;
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      if (state.src.charCodeAt(pos) !== 91) {
        return false;
      }
      while (++pos < max) {
        if (state.src.charCodeAt(pos) === 93 && state.src.charCodeAt(pos - 1) !== 92) {
          if (pos + 1 === max) {
            return false;
          }
          if (state.src.charCodeAt(pos + 1) !== 58) {
            return false;
          }
          break;
        }
      }
      endLine = state.lineMax;
      terminatorRules = state.md.block.ruler.getRules("reference");
      oldParentType = state.parentType;
      state.parentType = "reference";
      for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
        if (state.sCount[nextLine] - state.blkIndent > 3) {
          continue;
        }
        if (state.sCount[nextLine] < 0) {
          continue;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
      }
      str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
      max = str.length;
      for (pos = 1; pos < max; pos++) {
        ch = str.charCodeAt(pos);
        if (ch === 91) {
          return false;
        } else if (ch === 93) {
          labelEnd = pos;
          break;
        } else if (ch === 10) {
          lines++;
        } else if (ch === 92) {
          pos++;
          if (pos < max && str.charCodeAt(pos) === 10) {
            lines++;
          }
        }
      }
      if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
        return false;
      }
      for (pos = labelEnd + 2; pos < max; pos++) {
        ch = str.charCodeAt(pos);
        if (ch === 10) {
          lines++;
        } else if (isSpace(ch)) {
        } else {
          break;
        }
      }
      res = state.md.helpers.parseLinkDestination(str, pos, max);
      if (!res.ok) {
        return false;
      }
      href = state.md.normalizeLink(res.str);
      if (!state.md.validateLink(href)) {
        return false;
      }
      pos = res.pos;
      lines += res.lines;
      destEndPos = pos;
      destEndLineNo = lines;
      start = pos;
      for (; pos < max; pos++) {
        ch = str.charCodeAt(pos);
        if (ch === 10) {
          lines++;
        } else if (isSpace(ch)) {
        } else {
          break;
        }
      }
      res = state.md.helpers.parseLinkTitle(str, pos, max);
      if (pos < max && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos;
        lines += res.lines;
      } else {
        title = "";
        pos = destEndPos;
        lines = destEndLineNo;
      }
      while (pos < max) {
        ch = str.charCodeAt(pos);
        if (!isSpace(ch)) {
          break;
        }
        pos++;
      }
      if (pos < max && str.charCodeAt(pos) !== 10) {
        if (title) {
          title = "";
          pos = destEndPos;
          lines = destEndLineNo;
          while (pos < max) {
            ch = str.charCodeAt(pos);
            if (!isSpace(ch)) {
              break;
            }
            pos++;
          }
        }
      }
      if (pos < max && str.charCodeAt(pos) !== 10) {
        return false;
      }
      label = normalizeReference(str.slice(1, labelEnd));
      if (!label) {
        return false;
      }
      if (silent) {
        return true;
      }
      if (typeof state.env.references === "undefined") {
        state.env.references = {};
      }
      if (typeof state.env.references[label] === "undefined") {
        state.env.references[label] = { title, href };
      }
      state.parentType = oldParentType;
      state.line = startLine + lines + 1;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/common/html_blocks.js
var require_html_blocks = __commonJS({
  "node_modules/markdown-it/lib/common/html_blocks.js"(exports, module) {
    "use strict";
    module.exports = [
      "address",
      "article",
      "aside",
      "base",
      "basefont",
      "blockquote",
      "body",
      "caption",
      "center",
      "col",
      "colgroup",
      "dd",
      "details",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hr",
      "html",
      "iframe",
      "legend",
      "li",
      "link",
      "main",
      "menu",
      "menuitem",
      "nav",
      "noframes",
      "ol",
      "optgroup",
      "option",
      "p",
      "param",
      "section",
      "source",
      "summary",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "title",
      "tr",
      "track",
      "ul"
    ];
  }
});

// node_modules/markdown-it/lib/common/html_re.js
var require_html_re = __commonJS({
  "node_modules/markdown-it/lib/common/html_re.js"(exports, module) {
    "use strict";
    var attr_name = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
    var unquoted = "[^\"'=<>`\\x00-\\x20]+";
    var single_quoted = "'[^']*'";
    var double_quoted = '"[^"]*"';
    var attr_value = "(?:" + unquoted + "|" + single_quoted + "|" + double_quoted + ")";
    var attribute = "(?:\\s+" + attr_name + "(?:\\s*=\\s*" + attr_value + ")?)";
    var open_tag = "<[A-Za-z][A-Za-z0-9\\-]*" + attribute + "*\\s*\\/?>";
    var close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
    var comment = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->";
    var processing = "<[?][\\s\\S]*?[?]>";
    var declaration = "<![A-Z]+\\s+[^>]*>";
    var cdata = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
    var HTML_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + "|" + comment + "|" + processing + "|" + declaration + "|" + cdata + ")");
    var HTML_OPEN_CLOSE_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + ")");
    module.exports.HTML_TAG_RE = HTML_TAG_RE;
    module.exports.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE;
  }
});

// node_modules/markdown-it/lib/rules_block/html_block.js
var require_html_block = __commonJS({
  "node_modules/markdown-it/lib/rules_block/html_block.js"(exports, module) {
    "use strict";
    var block_names = require_html_blocks();
    var HTML_OPEN_CLOSE_TAG_RE = require_html_re().HTML_OPEN_CLOSE_TAG_RE;
    var HTML_SEQUENCES = [
      [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true],
      [/^<!--/, /-->/, true],
      [/^<\?/, /\?>/, true],
      [/^<![A-Z]/, />/, true],
      [/^<!\[CDATA\[/, /\]\]>/, true],
      [new RegExp("^</?(" + block_names.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true],
      [new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + "\\s*$"), /^$/, false]
    ];
    module.exports = function html_block(state, startLine, endLine, silent) {
      var i, nextLine, token, lineText, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      if (!state.md.options.html) {
        return false;
      }
      if (state.src.charCodeAt(pos) !== 60) {
        return false;
      }
      lineText = state.src.slice(pos, max);
      for (i = 0; i < HTML_SEQUENCES.length; i++) {
        if (HTML_SEQUENCES[i][0].test(lineText)) {
          break;
        }
      }
      if (i === HTML_SEQUENCES.length) {
        return false;
      }
      if (silent) {
        return HTML_SEQUENCES[i][2];
      }
      nextLine = startLine + 1;
      if (!HTML_SEQUENCES[i][1].test(lineText)) {
        for (; nextLine < endLine; nextLine++) {
          if (state.sCount[nextLine] < state.blkIndent) {
            break;
          }
          pos = state.bMarks[nextLine] + state.tShift[nextLine];
          max = state.eMarks[nextLine];
          lineText = state.src.slice(pos, max);
          if (HTML_SEQUENCES[i][1].test(lineText)) {
            if (lineText.length !== 0) {
              nextLine++;
            }
            break;
          }
        }
      }
      state.line = nextLine;
      token = state.push("html_block", "", 0);
      token.map = [startLine, nextLine];
      token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/heading.js
var require_heading = __commonJS({
  "node_modules/markdown-it/lib/rules_block/heading.js"(exports, module) {
    "use strict";
    var isSpace = require_utils().isSpace;
    module.exports = function heading(state, startLine, endLine, silent) {
      var ch, level, tmp, token, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      ch = state.src.charCodeAt(pos);
      if (ch !== 35 || pos >= max) {
        return false;
      }
      level = 1;
      ch = state.src.charCodeAt(++pos);
      while (ch === 35 && pos < max && level <= 6) {
        level++;
        ch = state.src.charCodeAt(++pos);
      }
      if (level > 6 || pos < max && !isSpace(ch)) {
        return false;
      }
      if (silent) {
        return true;
      }
      max = state.skipSpacesBack(max, pos);
      tmp = state.skipCharsBack(max, 35, pos);
      if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
        max = tmp;
      }
      state.line = startLine + 1;
      token = state.push("heading_open", "h" + String(level), 1);
      token.markup = "########".slice(0, level);
      token.map = [startLine, state.line];
      token = state.push("inline", "", 0);
      token.content = state.src.slice(pos, max).trim();
      token.map = [startLine, state.line];
      token.children = [];
      token = state.push("heading_close", "h" + String(level), -1);
      token.markup = "########".slice(0, level);
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/lheading.js
var require_lheading = __commonJS({
  "node_modules/markdown-it/lib/rules_block/lheading.js"(exports, module) {
    "use strict";
    module.exports = function lheading(state, startLine, endLine) {
      var content, terminate, i, l, token, pos, max, level, marker, nextLine = startLine + 1, oldParentType, terminatorRules = state.md.block.ruler.getRules("paragraph");
      if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      oldParentType = state.parentType;
      state.parentType = "paragraph";
      for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
        if (state.sCount[nextLine] - state.blkIndent > 3) {
          continue;
        }
        if (state.sCount[nextLine] >= state.blkIndent) {
          pos = state.bMarks[nextLine] + state.tShift[nextLine];
          max = state.eMarks[nextLine];
          if (pos < max) {
            marker = state.src.charCodeAt(pos);
            if (marker === 45 || marker === 61) {
              pos = state.skipChars(pos, marker);
              pos = state.skipSpaces(pos);
              if (pos >= max) {
                level = marker === 61 ? 1 : 2;
                break;
              }
            }
          }
        }
        if (state.sCount[nextLine] < 0) {
          continue;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
      }
      if (!level) {
        return false;
      }
      content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
      state.line = nextLine + 1;
      token = state.push("heading_open", "h" + String(level), 1);
      token.markup = String.fromCharCode(marker);
      token.map = [startLine, state.line];
      token = state.push("inline", "", 0);
      token.content = content;
      token.map = [startLine, state.line - 1];
      token.children = [];
      token = state.push("heading_close", "h" + String(level), -1);
      token.markup = String.fromCharCode(marker);
      state.parentType = oldParentType;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/paragraph.js
var require_paragraph = __commonJS({
  "node_modules/markdown-it/lib/rules_block/paragraph.js"(exports, module) {
    "use strict";
    module.exports = function paragraph(state, startLine, endLine) {
      var content, terminate, i, l, token, oldParentType, nextLine = startLine + 1, terminatorRules = state.md.block.ruler.getRules("paragraph");
      oldParentType = state.parentType;
      state.parentType = "paragraph";
      for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
        if (state.sCount[nextLine] - state.blkIndent > 3) {
          continue;
        }
        if (state.sCount[nextLine] < 0) {
          continue;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
      }
      content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
      state.line = nextLine;
      token = state.push("paragraph_open", "p", 1);
      token.map = [startLine, state.line];
      token = state.push("inline", "", 0);
      token.content = content;
      token.map = [startLine, state.line];
      token.children = [];
      token = state.push("paragraph_close", "p", -1);
      state.parentType = oldParentType;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/state_block.js
var require_state_block = __commonJS({
  "node_modules/markdown-it/lib/rules_block/state_block.js"(exports, module) {
    "use strict";
    var Token = require_token();
    var isSpace = require_utils().isSpace;
    function StateBlock(src, md, env, tokens) {
      var ch, s, start, pos, len, indent, offset, indent_found;
      this.src = src;
      this.md = md;
      this.env = env;
      this.tokens = tokens;
      this.bMarks = [];
      this.eMarks = [];
      this.tShift = [];
      this.sCount = [];
      this.bsCount = [];
      this.blkIndent = 0;
      this.line = 0;
      this.lineMax = 0;
      this.tight = false;
      this.ddIndent = -1;
      this.listIndent = -1;
      this.parentType = "root";
      this.level = 0;
      this.result = "";
      s = this.src;
      indent_found = false;
      for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
        ch = s.charCodeAt(pos);
        if (!indent_found) {
          if (isSpace(ch)) {
            indent++;
            if (ch === 9) {
              offset += 4 - offset % 4;
            } else {
              offset++;
            }
            continue;
          } else {
            indent_found = true;
          }
        }
        if (ch === 10 || pos === len - 1) {
          if (ch !== 10) {
            pos++;
          }
          this.bMarks.push(start);
          this.eMarks.push(pos);
          this.tShift.push(indent);
          this.sCount.push(offset);
          this.bsCount.push(0);
          indent_found = false;
          indent = 0;
          offset = 0;
          start = pos + 1;
        }
      }
      this.bMarks.push(s.length);
      this.eMarks.push(s.length);
      this.tShift.push(0);
      this.sCount.push(0);
      this.bsCount.push(0);
      this.lineMax = this.bMarks.length - 1;
    }
    StateBlock.prototype.push = function(type, tag, nesting) {
      var token = new Token(type, tag, nesting);
      token.block = true;
      if (nesting < 0)
        this.level--;
      token.level = this.level;
      if (nesting > 0)
        this.level++;
      this.tokens.push(token);
      return token;
    };
    StateBlock.prototype.isEmpty = function isEmpty(line) {
      return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
    };
    StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
      for (var max = this.lineMax; from < max; from++) {
        if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
          break;
        }
      }
      return from;
    };
    StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
      var ch;
      for (var max = this.src.length; pos < max; pos++) {
        ch = this.src.charCodeAt(pos);
        if (!isSpace(ch)) {
          break;
        }
      }
      return pos;
    };
    StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
      if (pos <= min) {
        return pos;
      }
      while (pos > min) {
        if (!isSpace(this.src.charCodeAt(--pos))) {
          return pos + 1;
        }
      }
      return pos;
    };
    StateBlock.prototype.skipChars = function skipChars(pos, code) {
      for (var max = this.src.length; pos < max; pos++) {
        if (this.src.charCodeAt(pos) !== code) {
          break;
        }
      }
      return pos;
    };
    StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
      if (pos <= min) {
        return pos;
      }
      while (pos > min) {
        if (code !== this.src.charCodeAt(--pos)) {
          return pos + 1;
        }
      }
      return pos;
    };
    StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
      var i, lineIndent, ch, first2, last, queue, lineStart, line = begin;
      if (begin >= end) {
        return "";
      }
      queue = new Array(end - begin);
      for (i = 0; line < end; line++, i++) {
        lineIndent = 0;
        lineStart = first2 = this.bMarks[line];
        if (line + 1 < end || keepLastLF) {
          last = this.eMarks[line] + 1;
        } else {
          last = this.eMarks[line];
        }
        while (first2 < last && lineIndent < indent) {
          ch = this.src.charCodeAt(first2);
          if (isSpace(ch)) {
            if (ch === 9) {
              lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
            } else {
              lineIndent++;
            }
          } else if (first2 - lineStart < this.tShift[line]) {
            lineIndent++;
          } else {
            break;
          }
          first2++;
        }
        if (lineIndent > indent) {
          queue[i] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first2, last);
        } else {
          queue[i] = this.src.slice(first2, last);
        }
      }
      return queue.join("");
    };
    StateBlock.prototype.Token = Token;
    module.exports = StateBlock;
  }
});

// node_modules/markdown-it/lib/parser_block.js
var require_parser_block = __commonJS({
  "node_modules/markdown-it/lib/parser_block.js"(exports, module) {
    "use strict";
    var Ruler = require_ruler();
    var _rules = [
      // First 2 params - rule name & source. Secondary array - list of rules,
      // which can be terminated by this one.
      ["table", require_table(), ["paragraph", "reference"]],
      ["code", require_code()],
      ["fence", require_fence(), ["paragraph", "reference", "blockquote", "list"]],
      ["blockquote", require_blockquote(), ["paragraph", "reference", "blockquote", "list"]],
      ["hr", require_hr(), ["paragraph", "reference", "blockquote", "list"]],
      ["list", require_list(), ["paragraph", "reference", "blockquote"]],
      ["reference", require_reference()],
      ["html_block", require_html_block(), ["paragraph", "reference", "blockquote"]],
      ["heading", require_heading(), ["paragraph", "reference", "blockquote"]],
      ["lheading", require_lheading()],
      ["paragraph", require_paragraph()]
    ];
    function ParserBlock() {
      this.ruler = new Ruler();
      for (var i = 0; i < _rules.length; i++) {
        this.ruler.push(_rules[i][0], _rules[i][1], { alt: (_rules[i][2] || []).slice() });
      }
    }
    ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
      var ok, i, prevLine, rules = this.ruler.getRules(""), len = rules.length, line = startLine, hasEmptyLines = false, maxNesting = state.md.options.maxNesting;
      while (line < endLine) {
        state.line = line = state.skipEmptyLines(line);
        if (line >= endLine) {
          break;
        }
        if (state.sCount[line] < state.blkIndent) {
          break;
        }
        if (state.level >= maxNesting) {
          state.line = endLine;
          break;
        }
        prevLine = state.line;
        for (i = 0; i < len; i++) {
          ok = rules[i](state, line, endLine, false);
          if (ok) {
            if (prevLine >= state.line) {
              throw new Error("block rule didn't increment state.line");
            }
            break;
          }
        }
        if (!ok)
          throw new Error("none of the block rules matched");
        state.tight = !hasEmptyLines;
        if (state.isEmpty(state.line - 1)) {
          hasEmptyLines = true;
        }
        line = state.line;
        if (line < endLine && state.isEmpty(line)) {
          hasEmptyLines = true;
          line++;
          state.line = line;
        }
      }
    };
    ParserBlock.prototype.parse = function(src, md, env, outTokens) {
      var state;
      if (!src) {
        return;
      }
      state = new this.State(src, md, env, outTokens);
      this.tokenize(state, state.line, state.lineMax);
    };
    ParserBlock.prototype.State = require_state_block();
    module.exports = ParserBlock;
  }
});

// node_modules/markdown-it/lib/rules_inline/text.js
var require_text = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/text.js"(exports, module) {
    "use strict";
    function isTerminatorChar(ch) {
      switch (ch) {
        case 10:
        case 33:
        case 35:
        case 36:
        case 37:
        case 38:
        case 42:
        case 43:
        case 45:
        case 58:
        case 60:
        case 61:
        case 62:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 125:
        case 126:
          return true;
        default:
          return false;
      }
    }
    module.exports = function text(state, silent) {
      var pos = state.pos;
      while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
        pos++;
      }
      if (pos === state.pos) {
        return false;
      }
      if (!silent) {
        state.pending += state.src.slice(state.pos, pos);
      }
      state.pos = pos;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/linkify.js
var require_linkify2 = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/linkify.js"(exports, module) {
    "use strict";
    var SCHEME_RE = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
    module.exports = function linkify(state, silent) {
      var pos, max, match, proto, link, url, fullUrl, token;
      if (!state.md.options.linkify)
        return false;
      if (state.linkLevel > 0)
        return false;
      pos = state.pos;
      max = state.posMax;
      if (pos + 3 > max)
        return false;
      if (state.src.charCodeAt(pos) !== 58)
        return false;
      if (state.src.charCodeAt(pos + 1) !== 47)
        return false;
      if (state.src.charCodeAt(pos + 2) !== 47)
        return false;
      match = state.pending.match(SCHEME_RE);
      if (!match)
        return false;
      proto = match[1];
      link = state.md.linkify.matchAtStart(state.src.slice(pos - proto.length));
      if (!link)
        return false;
      url = link.url;
      if (url.length <= proto.length)
        return false;
      url = url.replace(/\*+$/, "");
      fullUrl = state.md.normalizeLink(url);
      if (!state.md.validateLink(fullUrl))
        return false;
      if (!silent) {
        state.pending = state.pending.slice(0, -proto.length);
        token = state.push("link_open", "a", 1);
        token.attrs = [["href", fullUrl]];
        token.markup = "linkify";
        token.info = "auto";
        token = state.push("text", "", 0);
        token.content = state.md.normalizeLinkText(url);
        token = state.push("link_close", "a", -1);
        token.markup = "linkify";
        token.info = "auto";
      }
      state.pos += url.length - proto.length;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/newline.js
var require_newline = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/newline.js"(exports, module) {
    "use strict";
    var isSpace = require_utils().isSpace;
    module.exports = function newline(state, silent) {
      var pmax, max, ws, pos = state.pos;
      if (state.src.charCodeAt(pos) !== 10) {
        return false;
      }
      pmax = state.pending.length - 1;
      max = state.posMax;
      if (!silent) {
        if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
          if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
            ws = pmax - 1;
            while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 32)
              ws--;
            state.pending = state.pending.slice(0, ws);
            state.push("hardbreak", "br", 0);
          } else {
            state.pending = state.pending.slice(0, -1);
            state.push("softbreak", "br", 0);
          }
        } else {
          state.push("softbreak", "br", 0);
        }
      }
      pos++;
      while (pos < max && isSpace(state.src.charCodeAt(pos))) {
        pos++;
      }
      state.pos = pos;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/escape.js
var require_escape = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/escape.js"(exports, module) {
    "use strict";
    var isSpace = require_utils().isSpace;
    var ESCAPED = [];
    for (i = 0; i < 256; i++) {
      ESCAPED.push(0);
    }
    var i;
    "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
      ESCAPED[ch.charCodeAt(0)] = 1;
    });
    module.exports = function escape(state, silent) {
      var ch1, ch2, origStr, escapedStr, token, pos = state.pos, max = state.posMax;
      if (state.src.charCodeAt(pos) !== 92)
        return false;
      pos++;
      if (pos >= max)
        return false;
      ch1 = state.src.charCodeAt(pos);
      if (ch1 === 10) {
        if (!silent) {
          state.push("hardbreak", "br", 0);
        }
        pos++;
        while (pos < max) {
          ch1 = state.src.charCodeAt(pos);
          if (!isSpace(ch1))
            break;
          pos++;
        }
        state.pos = pos;
        return true;
      }
      escapedStr = state.src[pos];
      if (ch1 >= 55296 && ch1 <= 56319 && pos + 1 < max) {
        ch2 = state.src.charCodeAt(pos + 1);
        if (ch2 >= 56320 && ch2 <= 57343) {
          escapedStr += state.src[pos + 1];
          pos++;
        }
      }
      origStr = "\\" + escapedStr;
      if (!silent) {
        token = state.push("text_special", "", 0);
        if (ch1 < 256 && ESCAPED[ch1] !== 0) {
          token.content = escapedStr;
        } else {
          token.content = origStr;
        }
        token.markup = origStr;
        token.info = "escape";
      }
      state.pos = pos + 1;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/backticks.js
var require_backticks = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/backticks.js"(exports, module) {
    "use strict";
    module.exports = function backtick(state, silent) {
      var start, max, marker, token, matchStart, matchEnd, openerLength, closerLength, pos = state.pos, ch = state.src.charCodeAt(pos);
      if (ch !== 96) {
        return false;
      }
      start = pos;
      pos++;
      max = state.posMax;
      while (pos < max && state.src.charCodeAt(pos) === 96) {
        pos++;
      }
      marker = state.src.slice(start, pos);
      openerLength = marker.length;
      if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
        if (!silent)
          state.pending += marker;
        state.pos += openerLength;
        return true;
      }
      matchEnd = pos;
      while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
        matchEnd = matchStart + 1;
        while (matchEnd < max && state.src.charCodeAt(matchEnd) === 96) {
          matchEnd++;
        }
        closerLength = matchEnd - matchStart;
        if (closerLength === openerLength) {
          if (!silent) {
            token = state.push("code_inline", "code", 0);
            token.markup = marker;
            token.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
          }
          state.pos = matchEnd;
          return true;
        }
        state.backticks[closerLength] = matchStart;
      }
      state.backticksScanned = true;
      if (!silent)
        state.pending += marker;
      state.pos += openerLength;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/strikethrough.js
var require_strikethrough = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/strikethrough.js"(exports, module) {
    "use strict";
    module.exports.tokenize = function strikethrough(state, silent) {
      var i, scanned, token, len, ch, start = state.pos, marker = state.src.charCodeAt(start);
      if (silent) {
        return false;
      }
      if (marker !== 126) {
        return false;
      }
      scanned = state.scanDelims(state.pos, true);
      len = scanned.length;
      ch = String.fromCharCode(marker);
      if (len < 2) {
        return false;
      }
      if (len % 2) {
        token = state.push("text", "", 0);
        token.content = ch;
        len--;
      }
      for (i = 0; i < len; i += 2) {
        token = state.push("text", "", 0);
        token.content = ch + ch;
        state.delimiters.push({
          marker,
          length: 0,
          // disable "rule of 3" length checks meant for emphasis
          token: state.tokens.length - 1,
          end: -1,
          open: scanned.can_open,
          close: scanned.can_close
        });
      }
      state.pos += scanned.length;
      return true;
    };
    function postProcess(state, delimiters) {
      var i, j, startDelim, endDelim, token, loneMarkers = [], max = delimiters.length;
      for (i = 0; i < max; i++) {
        startDelim = delimiters[i];
        if (startDelim.marker !== 126) {
          continue;
        }
        if (startDelim.end === -1) {
          continue;
        }
        endDelim = delimiters[startDelim.end];
        token = state.tokens[startDelim.token];
        token.type = "s_open";
        token.tag = "s";
        token.nesting = 1;
        token.markup = "~~";
        token.content = "";
        token = state.tokens[endDelim.token];
        token.type = "s_close";
        token.tag = "s";
        token.nesting = -1;
        token.markup = "~~";
        token.content = "";
        if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") {
          loneMarkers.push(endDelim.token - 1);
        }
      }
      while (loneMarkers.length) {
        i = loneMarkers.pop();
        j = i + 1;
        while (j < state.tokens.length && state.tokens[j].type === "s_close") {
          j++;
        }
        j--;
        if (i !== j) {
          token = state.tokens[j];
          state.tokens[j] = state.tokens[i];
          state.tokens[i] = token;
        }
      }
    }
    module.exports.postProcess = function strikethrough(state) {
      var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
      postProcess(state, state.delimiters);
      for (curr = 0; curr < max; curr++) {
        if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
          postProcess(state, tokens_meta[curr].delimiters);
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/emphasis.js
var require_emphasis = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/emphasis.js"(exports, module) {
    "use strict";
    module.exports.tokenize = function emphasis(state, silent) {
      var i, scanned, token, start = state.pos, marker = state.src.charCodeAt(start);
      if (silent) {
        return false;
      }
      if (marker !== 95 && marker !== 42) {
        return false;
      }
      scanned = state.scanDelims(state.pos, marker === 42);
      for (i = 0; i < scanned.length; i++) {
        token = state.push("text", "", 0);
        token.content = String.fromCharCode(marker);
        state.delimiters.push({
          // Char code of the starting marker (number).
          //
          marker,
          // Total length of these series of delimiters.
          //
          length: scanned.length,
          // A position of the token this delimiter corresponds to.
          //
          token: state.tokens.length - 1,
          // If this delimiter is matched as a valid opener, `end` will be
          // equal to its position, otherwise it's `-1`.
          //
          end: -1,
          // Boolean flags that determine if this delimiter could open or close
          // an emphasis.
          //
          open: scanned.can_open,
          close: scanned.can_close
        });
      }
      state.pos += scanned.length;
      return true;
    };
    function postProcess(state, delimiters) {
      var i, startDelim, endDelim, token, ch, isStrong, max = delimiters.length;
      for (i = max - 1; i >= 0; i--) {
        startDelim = delimiters[i];
        if (startDelim.marker !== 95 && startDelim.marker !== 42) {
          continue;
        }
        if (startDelim.end === -1) {
          continue;
        }
        endDelim = delimiters[startDelim.end];
        isStrong = i > 0 && delimiters[i - 1].end === startDelim.end + 1 && // check that first two markers match and adjacent
        delimiters[i - 1].marker === startDelim.marker && delimiters[i - 1].token === startDelim.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
        delimiters[startDelim.end + 1].token === endDelim.token + 1;
        ch = String.fromCharCode(startDelim.marker);
        token = state.tokens[startDelim.token];
        token.type = isStrong ? "strong_open" : "em_open";
        token.tag = isStrong ? "strong" : "em";
        token.nesting = 1;
        token.markup = isStrong ? ch + ch : ch;
        token.content = "";
        token = state.tokens[endDelim.token];
        token.type = isStrong ? "strong_close" : "em_close";
        token.tag = isStrong ? "strong" : "em";
        token.nesting = -1;
        token.markup = isStrong ? ch + ch : ch;
        token.content = "";
        if (isStrong) {
          state.tokens[delimiters[i - 1].token].content = "";
          state.tokens[delimiters[startDelim.end + 1].token].content = "";
          i--;
        }
      }
    }
    module.exports.postProcess = function emphasis(state) {
      var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
      postProcess(state, state.delimiters);
      for (curr = 0; curr < max; curr++) {
        if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
          postProcess(state, tokens_meta[curr].delimiters);
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/link.js
var require_link = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/link.js"(exports, module) {
    "use strict";
    var normalizeReference = require_utils().normalizeReference;
    var isSpace = require_utils().isSpace;
    module.exports = function link(state, silent) {
      var attrs, code, label, labelEnd, labelStart, pos, res, ref, token, href = "", title = "", oldPos = state.pos, max = state.posMax, start = state.pos, parseReference = true;
      if (state.src.charCodeAt(state.pos) !== 91) {
        return false;
      }
      labelStart = state.pos + 1;
      labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);
      if (labelEnd < 0) {
        return false;
      }
      pos = labelEnd + 1;
      if (pos < max && state.src.charCodeAt(pos) === 40) {
        parseReference = false;
        pos++;
        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace(code) && code !== 10) {
            break;
          }
        }
        if (pos >= max) {
          return false;
        }
        start = pos;
        res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
        if (res.ok) {
          href = state.md.normalizeLink(res.str);
          if (state.md.validateLink(href)) {
            pos = res.pos;
          } else {
            href = "";
          }
          start = pos;
          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);
            if (!isSpace(code) && code !== 10) {
              break;
            }
          }
          res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
          if (pos < max && start !== pos && res.ok) {
            title = res.str;
            pos = res.pos;
            for (; pos < max; pos++) {
              code = state.src.charCodeAt(pos);
              if (!isSpace(code) && code !== 10) {
                break;
              }
            }
          }
        }
        if (pos >= max || state.src.charCodeAt(pos) !== 41) {
          parseReference = true;
        }
        pos++;
      }
      if (parseReference) {
        if (typeof state.env.references === "undefined") {
          return false;
        }
        if (pos < max && state.src.charCodeAt(pos) === 91) {
          start = pos + 1;
          pos = state.md.helpers.parseLinkLabel(state, pos);
          if (pos >= 0) {
            label = state.src.slice(start, pos++);
          } else {
            pos = labelEnd + 1;
          }
        } else {
          pos = labelEnd + 1;
        }
        if (!label) {
          label = state.src.slice(labelStart, labelEnd);
        }
        ref = state.env.references[normalizeReference(label)];
        if (!ref) {
          state.pos = oldPos;
          return false;
        }
        href = ref.href;
        title = ref.title;
      }
      if (!silent) {
        state.pos = labelStart;
        state.posMax = labelEnd;
        token = state.push("link_open", "a", 1);
        token.attrs = attrs = [["href", href]];
        if (title) {
          attrs.push(["title", title]);
        }
        state.linkLevel++;
        state.md.inline.tokenize(state);
        state.linkLevel--;
        token = state.push("link_close", "a", -1);
      }
      state.pos = pos;
      state.posMax = max;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/image.js
var require_image = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/image.js"(exports, module) {
    "use strict";
    var normalizeReference = require_utils().normalizeReference;
    var isSpace = require_utils().isSpace;
    module.exports = function image(state, silent) {
      var attrs, code, content, label, labelEnd, labelStart, pos, ref, res, title, token, tokens, start, href = "", oldPos = state.pos, max = state.posMax;
      if (state.src.charCodeAt(state.pos) !== 33) {
        return false;
      }
      if (state.src.charCodeAt(state.pos + 1) !== 91) {
        return false;
      }
      labelStart = state.pos + 2;
      labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
      if (labelEnd < 0) {
        return false;
      }
      pos = labelEnd + 1;
      if (pos < max && state.src.charCodeAt(pos) === 40) {
        pos++;
        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace(code) && code !== 10) {
            break;
          }
        }
        if (pos >= max) {
          return false;
        }
        start = pos;
        res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
        if (res.ok) {
          href = state.md.normalizeLink(res.str);
          if (state.md.validateLink(href)) {
            pos = res.pos;
          } else {
            href = "";
          }
        }
        start = pos;
        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace(code) && code !== 10) {
            break;
          }
        }
        res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
        if (pos < max && start !== pos && res.ok) {
          title = res.str;
          pos = res.pos;
          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);
            if (!isSpace(code) && code !== 10) {
              break;
            }
          }
        } else {
          title = "";
        }
        if (pos >= max || state.src.charCodeAt(pos) !== 41) {
          state.pos = oldPos;
          return false;
        }
        pos++;
      } else {
        if (typeof state.env.references === "undefined") {
          return false;
        }
        if (pos < max && state.src.charCodeAt(pos) === 91) {
          start = pos + 1;
          pos = state.md.helpers.parseLinkLabel(state, pos);
          if (pos >= 0) {
            label = state.src.slice(start, pos++);
          } else {
            pos = labelEnd + 1;
          }
        } else {
          pos = labelEnd + 1;
        }
        if (!label) {
          label = state.src.slice(labelStart, labelEnd);
        }
        ref = state.env.references[normalizeReference(label)];
        if (!ref) {
          state.pos = oldPos;
          return false;
        }
        href = ref.href;
        title = ref.title;
      }
      if (!silent) {
        content = state.src.slice(labelStart, labelEnd);
        state.md.inline.parse(
          content,
          state.md,
          state.env,
          tokens = []
        );
        token = state.push("image", "img", 0);
        token.attrs = attrs = [["src", href], ["alt", ""]];
        token.children = tokens;
        token.content = content;
        if (title) {
          attrs.push(["title", title]);
        }
      }
      state.pos = pos;
      state.posMax = max;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/autolink.js
var require_autolink = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/autolink.js"(exports, module) {
    "use strict";
    var EMAIL_RE = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
    var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
    module.exports = function autolink(state, silent) {
      var url, fullUrl, token, ch, start, max, pos = state.pos;
      if (state.src.charCodeAt(pos) !== 60) {
        return false;
      }
      start = state.pos;
      max = state.posMax;
      for (; ; ) {
        if (++pos >= max)
          return false;
        ch = state.src.charCodeAt(pos);
        if (ch === 60)
          return false;
        if (ch === 62)
          break;
      }
      url = state.src.slice(start + 1, pos);
      if (AUTOLINK_RE.test(url)) {
        fullUrl = state.md.normalizeLink(url);
        if (!state.md.validateLink(fullUrl)) {
          return false;
        }
        if (!silent) {
          token = state.push("link_open", "a", 1);
          token.attrs = [["href", fullUrl]];
          token.markup = "autolink";
          token.info = "auto";
          token = state.push("text", "", 0);
          token.content = state.md.normalizeLinkText(url);
          token = state.push("link_close", "a", -1);
          token.markup = "autolink";
          token.info = "auto";
        }
        state.pos += url.length + 2;
        return true;
      }
      if (EMAIL_RE.test(url)) {
        fullUrl = state.md.normalizeLink("mailto:" + url);
        if (!state.md.validateLink(fullUrl)) {
          return false;
        }
        if (!silent) {
          token = state.push("link_open", "a", 1);
          token.attrs = [["href", fullUrl]];
          token.markup = "autolink";
          token.info = "auto";
          token = state.push("text", "", 0);
          token.content = state.md.normalizeLinkText(url);
          token = state.push("link_close", "a", -1);
          token.markup = "autolink";
          token.info = "auto";
        }
        state.pos += url.length + 2;
        return true;
      }
      return false;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/html_inline.js
var require_html_inline = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/html_inline.js"(exports, module) {
    "use strict";
    var HTML_TAG_RE = require_html_re().HTML_TAG_RE;
    function isLinkOpen(str) {
      return /^<a[>\s]/i.test(str);
    }
    function isLinkClose(str) {
      return /^<\/a\s*>/i.test(str);
    }
    function isLetter(ch) {
      var lc = ch | 32;
      return lc >= 97 && lc <= 122;
    }
    module.exports = function html_inline(state, silent) {
      var ch, match, max, token, pos = state.pos;
      if (!state.md.options.html) {
        return false;
      }
      max = state.posMax;
      if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max) {
        return false;
      }
      ch = state.src.charCodeAt(pos + 1);
      if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter(ch)) {
        return false;
      }
      match = state.src.slice(pos).match(HTML_TAG_RE);
      if (!match) {
        return false;
      }
      if (!silent) {
        token = state.push("html_inline", "", 0);
        token.content = match[0];
        if (isLinkOpen(token.content))
          state.linkLevel++;
        if (isLinkClose(token.content))
          state.linkLevel--;
      }
      state.pos += match[0].length;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/entity.js
var require_entity = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/entity.js"(exports, module) {
    "use strict";
    var entities = require_entities2();
    var has = require_utils().has;
    var isValidEntityCode = require_utils().isValidEntityCode;
    var fromCodePoint = require_utils().fromCodePoint;
    var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
    var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
    module.exports = function entity(state, silent) {
      var ch, code, match, token, pos = state.pos, max = state.posMax;
      if (state.src.charCodeAt(pos) !== 38)
        return false;
      if (pos + 1 >= max)
        return false;
      ch = state.src.charCodeAt(pos + 1);
      if (ch === 35) {
        match = state.src.slice(pos).match(DIGITAL_RE);
        if (match) {
          if (!silent) {
            code = match[1][0].toLowerCase() === "x" ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
            token = state.push("text_special", "", 0);
            token.content = isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(65533);
            token.markup = match[0];
            token.info = "entity";
          }
          state.pos += match[0].length;
          return true;
        }
      } else {
        match = state.src.slice(pos).match(NAMED_RE);
        if (match) {
          if (has(entities, match[1])) {
            if (!silent) {
              token = state.push("text_special", "", 0);
              token.content = entities[match[1]];
              token.markup = match[0];
              token.info = "entity";
            }
            state.pos += match[0].length;
            return true;
          }
        }
      }
      return false;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/balance_pairs.js
var require_balance_pairs = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/balance_pairs.js"(exports, module) {
    "use strict";
    function processDelimiters(delimiters) {
      var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx, isOddMatch, lastJump, openersBottom = {}, max = delimiters.length;
      if (!max)
        return;
      var headerIdx = 0;
      var lastTokenIdx = -2;
      var jumps = [];
      for (closerIdx = 0; closerIdx < max; closerIdx++) {
        closer = delimiters[closerIdx];
        jumps.push(0);
        if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
          headerIdx = closerIdx;
        }
        lastTokenIdx = closer.token;
        closer.length = closer.length || 0;
        if (!closer.close)
          continue;
        if (!openersBottom.hasOwnProperty(closer.marker)) {
          openersBottom[closer.marker] = [-1, -1, -1, -1, -1, -1];
        }
        minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + closer.length % 3];
        openerIdx = headerIdx - jumps[headerIdx] - 1;
        newMinOpenerIdx = openerIdx;
        for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
          opener = delimiters[openerIdx];
          if (opener.marker !== closer.marker)
            continue;
          if (opener.open && opener.end < 0) {
            isOddMatch = false;
            if (opener.close || closer.open) {
              if ((opener.length + closer.length) % 3 === 0) {
                if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
                  isOddMatch = true;
                }
              }
            }
            if (!isOddMatch) {
              lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
              jumps[closerIdx] = closerIdx - openerIdx + lastJump;
              jumps[openerIdx] = lastJump;
              closer.open = false;
              opener.end = closerIdx;
              opener.close = false;
              newMinOpenerIdx = -1;
              lastTokenIdx = -2;
              break;
            }
          }
        }
        if (newMinOpenerIdx !== -1) {
          openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length || 0) % 3] = newMinOpenerIdx;
        }
      }
    }
    module.exports = function link_pairs(state) {
      var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
      processDelimiters(state.delimiters);
      for (curr = 0; curr < max; curr++) {
        if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
          processDelimiters(tokens_meta[curr].delimiters);
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/fragments_join.js
var require_fragments_join = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/fragments_join.js"(exports, module) {
    "use strict";
    module.exports = function fragments_join(state) {
      var curr, last, level = 0, tokens = state.tokens, max = state.tokens.length;
      for (curr = last = 0; curr < max; curr++) {
        if (tokens[curr].nesting < 0)
          level--;
        tokens[curr].level = level;
        if (tokens[curr].nesting > 0)
          level++;
        if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
          tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
        } else {
          if (curr !== last) {
            tokens[last] = tokens[curr];
          }
          last++;
        }
      }
      if (curr !== last) {
        tokens.length = last;
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/state_inline.js
var require_state_inline = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/state_inline.js"(exports, module) {
    "use strict";
    var Token = require_token();
    var isWhiteSpace = require_utils().isWhiteSpace;
    var isPunctChar = require_utils().isPunctChar;
    var isMdAsciiPunct = require_utils().isMdAsciiPunct;
    function StateInline(src, md, env, outTokens) {
      this.src = src;
      this.env = env;
      this.md = md;
      this.tokens = outTokens;
      this.tokens_meta = Array(outTokens.length);
      this.pos = 0;
      this.posMax = this.src.length;
      this.level = 0;
      this.pending = "";
      this.pendingLevel = 0;
      this.cache = {};
      this.delimiters = [];
      this._prev_delimiters = [];
      this.backticks = {};
      this.backticksScanned = false;
      this.linkLevel = 0;
    }
    StateInline.prototype.pushPending = function() {
      var token = new Token("text", "", 0);
      token.content = this.pending;
      token.level = this.pendingLevel;
      this.tokens.push(token);
      this.pending = "";
      return token;
    };
    StateInline.prototype.push = function(type, tag, nesting) {
      if (this.pending) {
        this.pushPending();
      }
      var token = new Token(type, tag, nesting);
      var token_meta = null;
      if (nesting < 0) {
        this.level--;
        this.delimiters = this._prev_delimiters.pop();
      }
      token.level = this.level;
      if (nesting > 0) {
        this.level++;
        this._prev_delimiters.push(this.delimiters);
        this.delimiters = [];
        token_meta = { delimiters: this.delimiters };
      }
      this.pendingLevel = this.level;
      this.tokens.push(token);
      this.tokens_meta.push(token_meta);
      return token;
    };
    StateInline.prototype.scanDelims = function(start, canSplitWord) {
      var pos = start, lastChar, nextChar, count, can_open, can_close, isLastWhiteSpace, isLastPunctChar, isNextWhiteSpace, isNextPunctChar, left_flanking = true, right_flanking = true, max = this.posMax, marker = this.src.charCodeAt(start);
      lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32;
      while (pos < max && this.src.charCodeAt(pos) === marker) {
        pos++;
      }
      count = pos - start;
      nextChar = pos < max ? this.src.charCodeAt(pos) : 32;
      isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
      isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
      isLastWhiteSpace = isWhiteSpace(lastChar);
      isNextWhiteSpace = isWhiteSpace(nextChar);
      if (isNextWhiteSpace) {
        left_flanking = false;
      } else if (isNextPunctChar) {
        if (!(isLastWhiteSpace || isLastPunctChar)) {
          left_flanking = false;
        }
      }
      if (isLastWhiteSpace) {
        right_flanking = false;
      } else if (isLastPunctChar) {
        if (!(isNextWhiteSpace || isNextPunctChar)) {
          right_flanking = false;
        }
      }
      if (!canSplitWord) {
        can_open = left_flanking && (!right_flanking || isLastPunctChar);
        can_close = right_flanking && (!left_flanking || isNextPunctChar);
      } else {
        can_open = left_flanking;
        can_close = right_flanking;
      }
      return {
        can_open,
        can_close,
        length: count
      };
    };
    StateInline.prototype.Token = Token;
    module.exports = StateInline;
  }
});

// node_modules/markdown-it/lib/parser_inline.js
var require_parser_inline = __commonJS({
  "node_modules/markdown-it/lib/parser_inline.js"(exports, module) {
    "use strict";
    var Ruler = require_ruler();
    var _rules = [
      ["text", require_text()],
      ["linkify", require_linkify2()],
      ["newline", require_newline()],
      ["escape", require_escape()],
      ["backticks", require_backticks()],
      ["strikethrough", require_strikethrough().tokenize],
      ["emphasis", require_emphasis().tokenize],
      ["link", require_link()],
      ["image", require_image()],
      ["autolink", require_autolink()],
      ["html_inline", require_html_inline()],
      ["entity", require_entity()]
    ];
    var _rules2 = [
      ["balance_pairs", require_balance_pairs()],
      ["strikethrough", require_strikethrough().postProcess],
      ["emphasis", require_emphasis().postProcess],
      // rules for pairs separate '**' into its own text tokens, which may be left unused,
      // rule below merges unused segments back with the rest of the text
      ["fragments_join", require_fragments_join()]
    ];
    function ParserInline() {
      var i;
      this.ruler = new Ruler();
      for (i = 0; i < _rules.length; i++) {
        this.ruler.push(_rules[i][0], _rules[i][1]);
      }
      this.ruler2 = new Ruler();
      for (i = 0; i < _rules2.length; i++) {
        this.ruler2.push(_rules2[i][0], _rules2[i][1]);
      }
    }
    ParserInline.prototype.skipToken = function(state) {
      var ok, i, pos = state.pos, rules = this.ruler.getRules(""), len = rules.length, maxNesting = state.md.options.maxNesting, cache = state.cache;
      if (typeof cache[pos] !== "undefined") {
        state.pos = cache[pos];
        return;
      }
      if (state.level < maxNesting) {
        for (i = 0; i < len; i++) {
          state.level++;
          ok = rules[i](state, true);
          state.level--;
          if (ok) {
            if (pos >= state.pos) {
              throw new Error("inline rule didn't increment state.pos");
            }
            break;
          }
        }
      } else {
        state.pos = state.posMax;
      }
      if (!ok) {
        state.pos++;
      }
      cache[pos] = state.pos;
    };
    ParserInline.prototype.tokenize = function(state) {
      var ok, i, prevPos, rules = this.ruler.getRules(""), len = rules.length, end = state.posMax, maxNesting = state.md.options.maxNesting;
      while (state.pos < end) {
        prevPos = state.pos;
        if (state.level < maxNesting) {
          for (i = 0; i < len; i++) {
            ok = rules[i](state, false);
            if (ok) {
              if (prevPos >= state.pos) {
                throw new Error("inline rule didn't increment state.pos");
              }
              break;
            }
          }
        }
        if (ok) {
          if (state.pos >= end) {
            break;
          }
          continue;
        }
        state.pending += state.src[state.pos++];
      }
      if (state.pending) {
        state.pushPending();
      }
    };
    ParserInline.prototype.parse = function(str, md, env, outTokens) {
      var i, rules, len;
      var state = new this.State(str, md, env, outTokens);
      this.tokenize(state);
      rules = this.ruler2.getRules("");
      len = rules.length;
      for (i = 0; i < len; i++) {
        rules[i](state);
      }
    };
    ParserInline.prototype.State = require_state_inline();
    module.exports = ParserInline;
  }
});

// node_modules/linkify-it/lib/re.js
var require_re = __commonJS({
  "node_modules/linkify-it/lib/re.js"(exports, module) {
    "use strict";
    module.exports = function(opts) {
      var re = {};
      opts = opts || {};
      re.src_Any = require_regex2().source;
      re.src_Cc = require_regex3().source;
      re.src_Z = require_regex5().source;
      re.src_P = require_regex().source;
      re.src_ZPCc = [re.src_Z, re.src_P, re.src_Cc].join("|");
      re.src_ZCc = [re.src_Z, re.src_Cc].join("|");
      var text_separators = "[><\uFF5C]";
      re.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re.src_ZPCc + ")" + re.src_Any + ")";
      re.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
      re.src_auth = "(?:(?:(?!" + re.src_ZCc + "|[@/\\[\\]()]).)+@)?";
      re.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
      re.src_host_terminator = "(?=$|" + text_separators + "|" + re.src_ZPCc + ")(?!" + (opts["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + re.src_ZPCc + "))";
      re.src_path = "(?:[/?#](?:(?!" + re.src_ZCc + "|" + text_separators + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + re.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + re.src_ZCc + "|[']).)+\\'|\\'(?=" + re.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + re.src_ZCc + "|[.]|$)|" + (opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + re.src_ZCc + "|$)|;(?!" + re.src_ZCc + "|$)|\\!+(?!" + re.src_ZCc + "|[!]|$)|\\?(?!" + re.src_ZCc + "|[?]|$))+|\\/)?";
      re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
      re.src_xn = "xn--[a-z0-9\\-]{1,59}";
      re.src_domain_root = // Allow letters & digits (http://test1)
      "(?:" + re.src_xn + "|" + re.src_pseudo_letter + "{1,63})";
      re.src_domain = "(?:" + re.src_xn + "|(?:" + re.src_pseudo_letter + ")|(?:" + re.src_pseudo_letter + "(?:-|" + re.src_pseudo_letter + "){0,61}" + re.src_pseudo_letter + "))";
      re.src_host = "(?:(?:(?:(?:" + re.src_domain + ")\\.)*" + re.src_domain + "))";
      re.tpl_host_fuzzy = "(?:" + re.src_ip4 + "|(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%)))";
      re.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%))";
      re.src_host_strict = re.src_host + re.src_host_terminator;
      re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
      re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
      re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
      re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;
      re.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re.src_ZPCc + "|>|$))";
      re.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re.src_ZCc + ")(" + re.src_email_name + "@" + re.tpl_host_fuzzy_strict + ")";
      re.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_fuzzy_strict + re.src_path + ")";
      re.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ")";
      return re;
    };
  }
});

// node_modules/linkify-it/index.js
var require_linkify_it = __commonJS({
  "node_modules/linkify-it/index.js"(exports, module) {
    "use strict";
    function assign(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      sources.forEach(function(source) {
        if (!source) {
          return;
        }
        Object.keys(source).forEach(function(key) {
          obj[key] = source[key];
        });
      });
      return obj;
    }
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    function isString(obj) {
      return _class(obj) === "[object String]";
    }
    function isObject(obj) {
      return _class(obj) === "[object Object]";
    }
    function isRegExp(obj) {
      return _class(obj) === "[object RegExp]";
    }
    function isFunction(obj) {
      return _class(obj) === "[object Function]";
    }
    function escapeRE(str) {
      return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
    }
    var defaultOptions = {
      fuzzyLink: true,
      fuzzyEmail: true,
      fuzzyIP: false
    };
    function isOptionsObj(obj) {
      return Object.keys(obj || {}).reduce(function(acc, k) {
        return acc || defaultOptions.hasOwnProperty(k);
      }, false);
    }
    var defaultSchemas = {
      "http:": {
        validate: function(text, pos, self) {
          var tail = text.slice(pos);
          if (!self.re.http) {
            self.re.http = new RegExp(
              "^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path,
              "i"
            );
          }
          if (self.re.http.test(tail)) {
            return tail.match(self.re.http)[0].length;
          }
          return 0;
        }
      },
      "https:": "http:",
      "ftp:": "http:",
      "//": {
        validate: function(text, pos, self) {
          var tail = text.slice(pos);
          if (!self.re.no_http) {
            self.re.no_http = new RegExp(
              "^" + self.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
              // with code comments
              "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path,
              "i"
            );
          }
          if (self.re.no_http.test(tail)) {
            if (pos >= 3 && text[pos - 3] === ":") {
              return 0;
            }
            if (pos >= 3 && text[pos - 3] === "/") {
              return 0;
            }
            return tail.match(self.re.no_http)[0].length;
          }
          return 0;
        }
      },
      "mailto:": {
        validate: function(text, pos, self) {
          var tail = text.slice(pos);
          if (!self.re.mailto) {
            self.re.mailto = new RegExp(
              "^" + self.re.src_email_name + "@" + self.re.src_host_strict,
              "i"
            );
          }
          if (self.re.mailto.test(tail)) {
            return tail.match(self.re.mailto)[0].length;
          }
          return 0;
        }
      }
    };
    var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
    var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
    function resetScanCache(self) {
      self.__index__ = -1;
      self.__text_cache__ = "";
    }
    function createValidator(re) {
      return function(text, pos) {
        var tail = text.slice(pos);
        if (re.test(tail)) {
          return tail.match(re)[0].length;
        }
        return 0;
      };
    }
    function createNormalizer() {
      return function(match, self) {
        self.normalize(match);
      };
    }
    function compile(self) {
      var re = self.re = require_re()(self.__opts__);
      var tlds = self.__tlds__.slice();
      self.onCompile();
      if (!self.__tlds_replaced__) {
        tlds.push(tlds_2ch_src_re);
      }
      tlds.push(re.src_xn);
      re.src_tlds = tlds.join("|");
      function untpl(tpl) {
        return tpl.replace("%TLDS%", re.src_tlds);
      }
      re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), "i");
      re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), "i");
      re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), "i");
      re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), "i");
      var aliases = [];
      self.__compiled__ = {};
      function schemaError(name, val) {
        throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
      }
      Object.keys(self.__schemas__).forEach(function(name) {
        var val = self.__schemas__[name];
        if (val === null) {
          return;
        }
        var compiled = { validate: null, link: null };
        self.__compiled__[name] = compiled;
        if (isObject(val)) {
          if (isRegExp(val.validate)) {
            compiled.validate = createValidator(val.validate);
          } else if (isFunction(val.validate)) {
            compiled.validate = val.validate;
          } else {
            schemaError(name, val);
          }
          if (isFunction(val.normalize)) {
            compiled.normalize = val.normalize;
          } else if (!val.normalize) {
            compiled.normalize = createNormalizer();
          } else {
            schemaError(name, val);
          }
          return;
        }
        if (isString(val)) {
          aliases.push(name);
          return;
        }
        schemaError(name, val);
      });
      aliases.forEach(function(alias) {
        if (!self.__compiled__[self.__schemas__[alias]]) {
          return;
        }
        self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
        self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
      });
      self.__compiled__[""] = { validate: null, normalize: createNormalizer() };
      var slist = Object.keys(self.__compiled__).filter(function(name) {
        return name.length > 0 && self.__compiled__[name];
      }).map(escapeRE).join("|");
      self.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + "))(" + slist + ")", "i");
      self.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + "))(" + slist + ")", "ig");
      self.re.schema_at_start = RegExp("^" + self.re.schema_search.source, "i");
      self.re.pretest = RegExp(
        "(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@",
        "i"
      );
      resetScanCache(self);
    }
    function Match(self, shift) {
      var start = self.__index__, end = self.__last_index__, text = self.__text_cache__.slice(start, end);
      this.schema = self.__schema__.toLowerCase();
      this.index = start + shift;
      this.lastIndex = end + shift;
      this.raw = text;
      this.text = text;
      this.url = text;
    }
    function createMatch(self, shift) {
      var match = new Match(self, shift);
      self.__compiled__[match.schema].normalize(match, self);
      return match;
    }
    function LinkifyIt(schemas, options2) {
      if (!(this instanceof LinkifyIt)) {
        return new LinkifyIt(schemas, options2);
      }
      if (!options2) {
        if (isOptionsObj(schemas)) {
          options2 = schemas;
          schemas = {};
        }
      }
      this.__opts__ = assign({}, defaultOptions, options2);
      this.__index__ = -1;
      this.__last_index__ = -1;
      this.__schema__ = "";
      this.__text_cache__ = "";
      this.__schemas__ = assign({}, defaultSchemas, schemas);
      this.__compiled__ = {};
      this.__tlds__ = tlds_default;
      this.__tlds_replaced__ = false;
      this.re = {};
      compile(this);
    }
    LinkifyIt.prototype.add = function add(schema, definition) {
      this.__schemas__[schema] = definition;
      compile(this);
      return this;
    };
    LinkifyIt.prototype.set = function set2(options2) {
      this.__opts__ = assign(this.__opts__, options2);
      return this;
    };
    LinkifyIt.prototype.test = function test(text) {
      this.__text_cache__ = text;
      this.__index__ = -1;
      if (!text.length) {
        return false;
      }
      var m, ml, me, len, shift, next, re, tld_pos, at_pos;
      if (this.re.schema_test.test(text)) {
        re = this.re.schema_search;
        re.lastIndex = 0;
        while ((m = re.exec(text)) !== null) {
          len = this.testSchemaAt(text, m[2], re.lastIndex);
          if (len) {
            this.__schema__ = m[2];
            this.__index__ = m.index + m[1].length;
            this.__last_index__ = m.index + m[0].length + len;
            break;
          }
        }
      }
      if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
        tld_pos = text.search(this.re.host_fuzzy_test);
        if (tld_pos >= 0) {
          if (this.__index__ < 0 || tld_pos < this.__index__) {
            if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
              shift = ml.index + ml[1].length;
              if (this.__index__ < 0 || shift < this.__index__) {
                this.__schema__ = "";
                this.__index__ = shift;
                this.__last_index__ = ml.index + ml[0].length;
              }
            }
          }
        }
      }
      if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
        at_pos = text.indexOf("@");
        if (at_pos >= 0) {
          if ((me = text.match(this.re.email_fuzzy)) !== null) {
            shift = me.index + me[1].length;
            next = me.index + me[0].length;
            if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
              this.__schema__ = "mailto:";
              this.__index__ = shift;
              this.__last_index__ = next;
            }
          }
        }
      }
      return this.__index__ >= 0;
    };
    LinkifyIt.prototype.pretest = function pretest(text) {
      return this.re.pretest.test(text);
    };
    LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
      if (!this.__compiled__[schema.toLowerCase()]) {
        return 0;
      }
      return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
    };
    LinkifyIt.prototype.match = function match(text) {
      var shift = 0, result = [];
      if (this.__index__ >= 0 && this.__text_cache__ === text) {
        result.push(createMatch(this, shift));
        shift = this.__last_index__;
      }
      var tail = shift ? text.slice(shift) : text;
      while (this.test(tail)) {
        result.push(createMatch(this, shift));
        tail = tail.slice(this.__last_index__);
        shift += this.__last_index__;
      }
      if (result.length) {
        return result;
      }
      return null;
    };
    LinkifyIt.prototype.matchAtStart = function matchAtStart(text) {
      this.__text_cache__ = text;
      this.__index__ = -1;
      if (!text.length)
        return null;
      var m = this.re.schema_at_start.exec(text);
      if (!m)
        return null;
      var len = this.testSchemaAt(text, m[2], m[0].length);
      if (!len)
        return null;
      this.__schema__ = m[2];
      this.__index__ = m.index + m[1].length;
      this.__last_index__ = m.index + m[0].length + len;
      return createMatch(this, 0);
    };
    LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
      list = Array.isArray(list) ? list : [list];
      if (!keepOld) {
        this.__tlds__ = list.slice();
        this.__tlds_replaced__ = true;
        compile(this);
        return this;
      }
      this.__tlds__ = this.__tlds__.concat(list).sort().filter(function(el, idx, arr) {
        return el !== arr[idx - 1];
      }).reverse();
      compile(this);
      return this;
    };
    LinkifyIt.prototype.normalize = function normalize(match) {
      if (!match.schema) {
        match.url = "http://" + match.url;
      }
      if (match.schema === "mailto:" && !/^mailto:/i.test(match.url)) {
        match.url = "mailto:" + match.url;
      }
    };
    LinkifyIt.prototype.onCompile = function onCompile() {
    };
    module.exports = LinkifyIt;
  }
});

// node_modules/punycode/punycode.es6.js
var punycode_es6_exports = {};
__export(punycode_es6_exports, {
  decode: () => decode,
  default: () => punycode_es6_default,
  encode: () => encode,
  toASCII: () => toASCII,
  toUnicode: () => toUnicode,
  ucs2decode: () => ucs2decode,
  ucs2encode: () => ucs2encode
});
function error2(type) {
  throw new RangeError(errors[type]);
}
function map(array2, callback) {
  const result = [];
  let length = array2.length;
  while (length--) {
    result[length] = callback(array2[length]);
  }
  return result;
}
function mapDomain(domain, callback) {
  const parts = domain.split("@");
  let result = "";
  if (parts.length > 1) {
    result = parts[0] + "@";
    domain = parts[1];
  }
  domain = domain.replace(regexSeparators, ".");
  const labels = domain.split(".");
  const encoded = map(labels, callback).join(".");
  return result + encoded;
}
function ucs2decode(string) {
  const output = [];
  let counter = 0;
  const length = string.length;
  while (counter < length) {
    const value = string.charCodeAt(counter++);
    if (value >= 55296 && value <= 56319 && counter < length) {
      const extra = string.charCodeAt(counter++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
var maxInt, base, tMin, tMax, skew, damp, initialBias, initialN, delimiter, regexPunycode, regexNonASCII, regexSeparators, errors, baseMinusTMin, floor, stringFromCharCode, ucs2encode, basicToDigit, digitToBasic, adapt, decode, encode, toUnicode, toASCII, punycode, punycode_es6_default;
var init_punycode_es6 = __esm({
  "node_modules/punycode/punycode.es6.js"() {
    "use strict";
    maxInt = 2147483647;
    base = 36;
    tMin = 1;
    tMax = 26;
    skew = 38;
    damp = 700;
    initialBias = 72;
    initialN = 128;
    delimiter = "-";
    regexPunycode = /^xn--/;
    regexNonASCII = /[^\0-\x7F]/;
    regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
    errors = {
      "overflow": "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    };
    baseMinusTMin = base - tMin;
    floor = Math.floor;
    stringFromCharCode = String.fromCharCode;
    ucs2encode = (codePoints) => String.fromCodePoint(...codePoints);
    basicToDigit = function(codePoint) {
      if (codePoint >= 48 && codePoint < 58) {
        return 26 + (codePoint - 48);
      }
      if (codePoint >= 65 && codePoint < 91) {
        return codePoint - 65;
      }
      if (codePoint >= 97 && codePoint < 123) {
        return codePoint - 97;
      }
      return base;
    };
    digitToBasic = function(digit, flag) {
      return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    };
    adapt = function(delta, numPoints, firstTime) {
      let k = 0;
      delta = firstTime ? floor(delta / damp) : delta >> 1;
      delta += floor(delta / numPoints);
      for (; delta > baseMinusTMin * tMax >> 1; k += base) {
        delta = floor(delta / baseMinusTMin);
      }
      return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    };
    decode = function(input) {
      const output = [];
      const inputLength = input.length;
      let i = 0;
      let n = initialN;
      let bias = initialBias;
      let basic = input.lastIndexOf(delimiter);
      if (basic < 0) {
        basic = 0;
      }
      for (let j = 0; j < basic; ++j) {
        if (input.charCodeAt(j) >= 128) {
          error2("not-basic");
        }
        output.push(input.charCodeAt(j));
      }
      for (let index2 = basic > 0 ? basic + 1 : 0; index2 < inputLength; ) {
        const oldi = i;
        for (let w = 1, k = base; ; k += base) {
          if (index2 >= inputLength) {
            error2("invalid-input");
          }
          const digit = basicToDigit(input.charCodeAt(index2++));
          if (digit >= base) {
            error2("invalid-input");
          }
          if (digit > floor((maxInt - i) / w)) {
            error2("overflow");
          }
          i += digit * w;
          const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (digit < t) {
            break;
          }
          const baseMinusT = base - t;
          if (w > floor(maxInt / baseMinusT)) {
            error2("overflow");
          }
          w *= baseMinusT;
        }
        const out = output.length + 1;
        bias = adapt(i - oldi, out, oldi == 0);
        if (floor(i / out) > maxInt - n) {
          error2("overflow");
        }
        n += floor(i / out);
        i %= out;
        output.splice(i++, 0, n);
      }
      return String.fromCodePoint(...output);
    };
    encode = function(input) {
      const output = [];
      input = ucs2decode(input);
      const inputLength = input.length;
      let n = initialN;
      let delta = 0;
      let bias = initialBias;
      for (const currentValue of input) {
        if (currentValue < 128) {
          output.push(stringFromCharCode(currentValue));
        }
      }
      const basicLength = output.length;
      let handledCPCount = basicLength;
      if (basicLength) {
        output.push(delimiter);
      }
      while (handledCPCount < inputLength) {
        let m = maxInt;
        for (const currentValue of input) {
          if (currentValue >= n && currentValue < m) {
            m = currentValue;
          }
        }
        const handledCPCountPlusOne = handledCPCount + 1;
        if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
          error2("overflow");
        }
        delta += (m - n) * handledCPCountPlusOne;
        n = m;
        for (const currentValue of input) {
          if (currentValue < n && ++delta > maxInt) {
            error2("overflow");
          }
          if (currentValue === n) {
            let q = delta;
            for (let k = base; ; k += base) {
              const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
              if (q < t) {
                break;
              }
              const qMinusT = q - t;
              const baseMinusT = base - t;
              output.push(
                stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
              );
              q = floor(qMinusT / baseMinusT);
            }
            output.push(stringFromCharCode(digitToBasic(q, 0)));
            bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
            delta = 0;
            ++handledCPCount;
          }
        }
        ++delta;
        ++n;
      }
      return output.join("");
    };
    toUnicode = function(input) {
      return mapDomain(input, function(string) {
        return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
      });
    };
    toASCII = function(input) {
      return mapDomain(input, function(string) {
        return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
      });
    };
    punycode = {
      /**
       * A string representing the current Punycode.js version number.
       * @memberOf punycode
       * @type String
       */
      "version": "2.3.1",
      /**
       * An object of methods to convert from JavaScript's internal character
       * representation (UCS-2) to Unicode code points, and back.
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode
       * @type Object
       */
      "ucs2": {
        "decode": ucs2decode,
        "encode": ucs2encode
      },
      "decode": decode,
      "encode": encode,
      "toASCII": toASCII,
      "toUnicode": toUnicode
    };
    punycode_es6_default = punycode;
  }
});

// node_modules/markdown-it/lib/presets/default.js
var require_default = __commonJS({
  "node_modules/markdown-it/lib/presets/default.js"(exports, module) {
    "use strict";
    module.exports = {
      options: {
        html: false,
        // Enable HTML tags in source
        xhtmlOut: false,
        // Use '/' to close single tags (<br />)
        breaks: false,
        // Convert '\n' in paragraphs into <br>
        langPrefix: "language-",
        // CSS language prefix for fenced blocks
        linkify: false,
        // autoconvert URL-like texts to links
        // Enable some language-neutral replacements + quotes beautification
        typographer: false,
        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        quotes: "\u201C\u201D\u2018\u2019",
        /* “”‘’ */
        // Highlighter function. Should return escaped HTML,
        // or '' if the source string is not changed and should be escaped externaly.
        // If result starts with <pre... internal wrapper is skipped.
        //
        // function (/*str, lang*/) { return ''; }
        //
        highlight: null,
        maxNesting: 100
        // Internal protection, recursion limit
      },
      components: {
        core: {},
        block: {},
        inline: {}
      }
    };
  }
});

// node_modules/markdown-it/lib/presets/zero.js
var require_zero = __commonJS({
  "node_modules/markdown-it/lib/presets/zero.js"(exports, module) {
    "use strict";
    module.exports = {
      options: {
        html: false,
        // Enable HTML tags in source
        xhtmlOut: false,
        // Use '/' to close single tags (<br />)
        breaks: false,
        // Convert '\n' in paragraphs into <br>
        langPrefix: "language-",
        // CSS language prefix for fenced blocks
        linkify: false,
        // autoconvert URL-like texts to links
        // Enable some language-neutral replacements + quotes beautification
        typographer: false,
        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        quotes: "\u201C\u201D\u2018\u2019",
        /* “”‘’ */
        // Highlighter function. Should return escaped HTML,
        // or '' if the source string is not changed and should be escaped externaly.
        // If result starts with <pre... internal wrapper is skipped.
        //
        // function (/*str, lang*/) { return ''; }
        //
        highlight: null,
        maxNesting: 20
        // Internal protection, recursion limit
      },
      components: {
        core: {
          rules: [
            "normalize",
            "block",
            "inline",
            "text_join"
          ]
        },
        block: {
          rules: [
            "paragraph"
          ]
        },
        inline: {
          rules: [
            "text"
          ],
          rules2: [
            "balance_pairs",
            "fragments_join"
          ]
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/presets/commonmark.js
var require_commonmark = __commonJS({
  "node_modules/markdown-it/lib/presets/commonmark.js"(exports, module) {
    "use strict";
    module.exports = {
      options: {
        html: true,
        // Enable HTML tags in source
        xhtmlOut: true,
        // Use '/' to close single tags (<br />)
        breaks: false,
        // Convert '\n' in paragraphs into <br>
        langPrefix: "language-",
        // CSS language prefix for fenced blocks
        linkify: false,
        // autoconvert URL-like texts to links
        // Enable some language-neutral replacements + quotes beautification
        typographer: false,
        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        quotes: "\u201C\u201D\u2018\u2019",
        /* “”‘’ */
        // Highlighter function. Should return escaped HTML,
        // or '' if the source string is not changed and should be escaped externaly.
        // If result starts with <pre... internal wrapper is skipped.
        //
        // function (/*str, lang*/) { return ''; }
        //
        highlight: null,
        maxNesting: 20
        // Internal protection, recursion limit
      },
      components: {
        core: {
          rules: [
            "normalize",
            "block",
            "inline",
            "text_join"
          ]
        },
        block: {
          rules: [
            "blockquote",
            "code",
            "fence",
            "heading",
            "hr",
            "html_block",
            "lheading",
            "list",
            "reference",
            "paragraph"
          ]
        },
        inline: {
          rules: [
            "autolink",
            "backticks",
            "emphasis",
            "entity",
            "escape",
            "html_inline",
            "image",
            "link",
            "newline",
            "text"
          ],
          rules2: [
            "balance_pairs",
            "emphasis",
            "fragments_join"
          ]
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/index.js
var require_lib = __commonJS({
  "node_modules/markdown-it/lib/index.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var helpers = require_helpers();
    var Renderer = require_renderer();
    var ParserCore = require_parser_core();
    var ParserBlock = require_parser_block();
    var ParserInline = require_parser_inline();
    var LinkifyIt = require_linkify_it();
    var mdurl = require_mdurl();
    var punycode2 = (init_punycode_es6(), __toCommonJS(punycode_es6_exports));
    var config = {
      default: require_default(),
      zero: require_zero(),
      commonmark: require_commonmark()
    };
    var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
    var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
    function validateLink(url) {
      var str = url.trim().toLowerCase();
      return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) ? true : false : true;
    }
    var RECODE_HOSTNAME_FOR = ["http:", "https:", "mailto:"];
    function normalizeLink(url) {
      var parsed = mdurl.parse(url, true);
      if (parsed.hostname) {
        if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
          try {
            parsed.hostname = punycode2.toASCII(parsed.hostname);
          } catch (er) {
          }
        }
      }
      return mdurl.encode(mdurl.format(parsed));
    }
    function normalizeLinkText(url) {
      var parsed = mdurl.parse(url, true);
      if (parsed.hostname) {
        if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
          try {
            parsed.hostname = punycode2.toUnicode(parsed.hostname);
          } catch (er) {
          }
        }
      }
      return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + "%");
    }
    function MarkdownIt2(presetName, options2) {
      if (!(this instanceof MarkdownIt2)) {
        return new MarkdownIt2(presetName, options2);
      }
      if (!options2) {
        if (!utils.isString(presetName)) {
          options2 = presetName || {};
          presetName = "default";
        }
      }
      this.inline = new ParserInline();
      this.block = new ParserBlock();
      this.core = new ParserCore();
      this.renderer = new Renderer();
      this.linkify = new LinkifyIt();
      this.validateLink = validateLink;
      this.normalizeLink = normalizeLink;
      this.normalizeLinkText = normalizeLinkText;
      this.utils = utils;
      this.helpers = utils.assign({}, helpers);
      this.options = {};
      this.configure(presetName);
      if (options2) {
        this.set(options2);
      }
    }
    MarkdownIt2.prototype.set = function(options2) {
      utils.assign(this.options, options2);
      return this;
    };
    MarkdownIt2.prototype.configure = function(presets) {
      var self = this, presetName;
      if (utils.isString(presets)) {
        presetName = presets;
        presets = config[presetName];
        if (!presets) {
          throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
        }
      }
      if (!presets) {
        throw new Error("Wrong `markdown-it` preset, can't be empty");
      }
      if (presets.options) {
        self.set(presets.options);
      }
      if (presets.components) {
        Object.keys(presets.components).forEach(function(name) {
          if (presets.components[name].rules) {
            self[name].ruler.enableOnly(presets.components[name].rules);
          }
          if (presets.components[name].rules2) {
            self[name].ruler2.enableOnly(presets.components[name].rules2);
          }
        });
      }
      return this;
    };
    MarkdownIt2.prototype.enable = function(list, ignoreInvalid) {
      var result = [];
      if (!Array.isArray(list)) {
        list = [list];
      }
      ["core", "block", "inline"].forEach(function(chain) {
        result = result.concat(this[chain].ruler.enable(list, true));
      }, this);
      result = result.concat(this.inline.ruler2.enable(list, true));
      var missed = list.filter(function(name) {
        return result.indexOf(name) < 0;
      });
      if (missed.length && !ignoreInvalid) {
        throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
      }
      return this;
    };
    MarkdownIt2.prototype.disable = function(list, ignoreInvalid) {
      var result = [];
      if (!Array.isArray(list)) {
        list = [list];
      }
      ["core", "block", "inline"].forEach(function(chain) {
        result = result.concat(this[chain].ruler.disable(list, true));
      }, this);
      result = result.concat(this.inline.ruler2.disable(list, true));
      var missed = list.filter(function(name) {
        return result.indexOf(name) < 0;
      });
      if (missed.length && !ignoreInvalid) {
        throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
      }
      return this;
    };
    MarkdownIt2.prototype.use = function(plugin) {
      var args = [this].concat(Array.prototype.slice.call(arguments, 1));
      plugin.apply(plugin, args);
      return this;
    };
    MarkdownIt2.prototype.parse = function(src, env) {
      if (typeof src !== "string") {
        throw new Error("Input data should be a String");
      }
      var state = new this.core.State(src, this, env);
      this.core.process(state);
      return state.tokens;
    };
    MarkdownIt2.prototype.render = function(src, env) {
      env = env || {};
      return this.renderer.render(this.parse(src, env), this.options, env);
    };
    MarkdownIt2.prototype.parseInline = function(src, env) {
      var state = new this.core.State(src, this, env);
      state.inlineMode = true;
      this.core.process(state);
      return state.tokens;
    };
    MarkdownIt2.prototype.renderInline = function(src, env) {
      env = env || {};
      return this.renderer.render(this.parseInline(src, env), this.options, env);
    };
    module.exports = MarkdownIt2;
  }
});

// node_modules/markdown-it/index.js
var require_markdown_it = __commonJS({
  "node_modules/markdown-it/index.js"(exports, module) {
    "use strict";
    module.exports = require_lib();
  }
});

// node_modules/markdown-it-task-lists/index.js
var require_markdown_it_task_lists = __commonJS({
  "node_modules/markdown-it-task-lists/index.js"(exports, module) {
    var disableCheckboxes = true;
    var useLabelWrapper = false;
    var useLabelAfter = false;
    module.exports = function(md, options2) {
      if (options2) {
        disableCheckboxes = !options2.enabled;
        useLabelWrapper = !!options2.label;
        useLabelAfter = !!options2.labelAfter;
      }
      md.core.ruler.after("inline", "github-task-lists", function(state) {
        var tokens = state.tokens;
        for (var i = 2; i < tokens.length; i++) {
          if (isTodoItem(tokens, i)) {
            todoify(tokens[i], state.Token);
            attrSet(tokens[i - 2], "class", "task-list-item" + (!disableCheckboxes ? " enabled" : ""));
            attrSet(tokens[parentToken(tokens, i - 2)], "class", "contains-task-list");
          }
        }
      });
    };
    function attrSet(token, name, value) {
      var index2 = token.attrIndex(name);
      var attr = [name, value];
      if (index2 < 0) {
        token.attrPush(attr);
      } else {
        token.attrs[index2] = attr;
      }
    }
    function parentToken(tokens, index2) {
      var targetLevel = tokens[index2].level - 1;
      for (var i = index2 - 1; i >= 0; i--) {
        if (tokens[i].level === targetLevel) {
          return i;
        }
      }
      return -1;
    }
    function isTodoItem(tokens, index2) {
      return isInline(tokens[index2]) && isParagraph(tokens[index2 - 1]) && isListItem(tokens[index2 - 2]) && startsWithTodoMarkdown(tokens[index2]);
    }
    function todoify(token, TokenConstructor) {
      token.children.unshift(makeCheckbox(token, TokenConstructor));
      token.children[1].content = token.children[1].content.slice(3);
      token.content = token.content.slice(3);
      if (useLabelWrapper) {
        if (useLabelAfter) {
          token.children.pop();
          var id = "task-item-" + Math.ceil(Math.random() * (1e4 * 1e3) - 1e3);
          token.children[0].content = token.children[0].content.slice(0, -1) + ' id="' + id + '">';
          token.children.push(afterLabel(token.content, id, TokenConstructor));
        } else {
          token.children.unshift(beginLabel(TokenConstructor));
          token.children.push(endLabel(TokenConstructor));
        }
      }
    }
    function makeCheckbox(token, TokenConstructor) {
      var checkbox = new TokenConstructor("html_inline", "", 0);
      var disabledAttr = disableCheckboxes ? ' disabled="" ' : "";
      if (token.content.indexOf("[ ] ") === 0) {
        checkbox.content = '<input class="task-list-item-checkbox"' + disabledAttr + 'type="checkbox">';
      } else if (token.content.indexOf("[x] ") === 0 || token.content.indexOf("[X] ") === 0) {
        checkbox.content = '<input class="task-list-item-checkbox" checked=""' + disabledAttr + 'type="checkbox">';
      }
      return checkbox;
    }
    function beginLabel(TokenConstructor) {
      var token = new TokenConstructor("html_inline", "", 0);
      token.content = "<label>";
      return token;
    }
    function endLabel(TokenConstructor) {
      var token = new TokenConstructor("html_inline", "", 0);
      token.content = "</label>";
      return token;
    }
    function afterLabel(content, id, TokenConstructor) {
      var token = new TokenConstructor("html_inline", "", 0);
      token.content = '<label class="task-list-item-label" for="' + id + '">' + content + "</label>";
      token.attrs = [{ for: id }];
      return token;
    }
    function isInline(token) {
      return token.type === "inline";
    }
    function isParagraph(token) {
      return token.type === "paragraph_open";
    }
    function isListItem(token) {
      return token.type === "list_item_open";
    }
    function startsWithTodoMarkdown(token) {
      return token.content.indexOf("[ ] ") === 0 || token.content.indexOf("[x] ") === 0 || token.content.indexOf("[X] ") === 0;
    }
  }
});

// resources/js/services/events.js
var events_exports = {};
__export(events_exports, {
  emit: () => emit,
  emitPublic: () => emitPublic,
  error: () => error,
  listen: () => listen,
  showResponseError: () => showResponseError,
  showValidationErrors: () => showValidationErrors,
  success: () => success
});
var listeners = {};
var stack = [];
function emit(eventName, eventData) {
  stack.push({ name: eventName, data: eventData });
  const listenersToRun = listeners[eventName] || [];
  for (const listener of listenersToRun) {
    listener(eventData);
  }
}
function listen(eventName, callback) {
  if (typeof listeners[eventName] === "undefined")
    listeners[eventName] = [];
  listeners[eventName].push(callback);
}
function emitPublic(targetElement, eventName, eventData) {
  const event = new CustomEvent(eventName, {
    detail: eventData,
    bubbles: true
  });
  targetElement.dispatchEvent(event);
}
function success(message) {
  emit("success", message);
}
function error(message) {
  emit("error", message);
}
function showValidationErrors(responseErr) {
  if (!responseErr.status)
    return;
  if (responseErr.status === 422 && responseErr.data) {
    const message = Object.values(responseErr.data).flat().join("\n");
    error(message);
  }
}
function showResponseError(responseErr) {
  if (!responseErr.status)
    return;
  if (responseErr.status >= 400 && responseErr.data && responseErr.data.message) {
    error(responseErr.data.message);
  }
}

// resources/js/services/http.js
var http_exports = {};
__export(http_exports, {
  HttpError: () => HttpError,
  createXMLHttpRequest: () => createXMLHttpRequest,
  delete: () => performDelete,
  get: () => get,
  patch: () => patch,
  post: () => post,
  put: () => put
});
async function getResponseContent(response) {
  if (response.status === 204) {
    return null;
  }
  const responseContentType = response.headers.get("Content-Type") || "";
  const subType = responseContentType.split(";")[0].split("/").pop();
  if (subType === "javascript" || subType === "json") {
    return response.json();
  }
  return response.text();
}
var HttpError = class extends Error {
  constructor(response, content) {
    super(response.statusText);
    this.data = content;
    this.headers = response.headers;
    this.redirected = response.redirected;
    this.status = response.status;
    this.statusText = response.statusText;
    this.url = response.url;
    this.original = response;
  }
};
function createXMLHttpRequest(method, url, events = {}) {
  const csrfToken = document.querySelector("meta[name=token]").getAttribute("content");
  const req = new XMLHttpRequest();
  for (const [eventName, callback] of Object.entries(events)) {
    req.addEventListener(eventName, callback.bind(req));
  }
  req.open(method, url);
  req.withCredentials = true;
  req.setRequestHeader("X-CSRF-TOKEN", csrfToken);
  return req;
}
async function request(url, options2 = {}) {
  let requestUrl = url;
  if (!requestUrl.startsWith("http")) {
    requestUrl = window.baseUrl(requestUrl);
  }
  if (options2.params) {
    const urlObj = new URL(requestUrl);
    for (const paramName of Object.keys(options2.params)) {
      const value = options2.params[paramName];
      if (typeof value !== "undefined" && value !== null) {
        urlObj.searchParams.set(paramName, value);
      }
    }
    requestUrl = urlObj.toString();
  }
  const csrfToken = document.querySelector("meta[name=token]").getAttribute("content");
  const requestOptions = { ...options2, credentials: "same-origin" };
  requestOptions.headers = {
    ...requestOptions.headers || {},
    baseURL: window.baseUrl(""),
    "X-CSRF-TOKEN": csrfToken
  };
  const response = await fetch(requestUrl, requestOptions);
  const content = await getResponseContent(response);
  const returnData = {
    data: content,
    headers: response.headers,
    redirected: response.redirected,
    status: response.status,
    statusText: response.statusText,
    url: response.url,
    original: response
  };
  if (!response.ok) {
    throw new HttpError(response, content);
  }
  return returnData;
}
async function dataRequest(method, url, data = null) {
  const options2 = {
    method,
    body: data
  };
  if (typeof data === "object" && !(data instanceof FormData)) {
    options2.headers = {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest"
    };
    options2.body = JSON.stringify(data);
  }
  if (data instanceof FormData && method !== "post") {
    data.append("_method", method);
    options2.method = "post";
  }
  return request(url, options2);
}
async function get(url, params = {}) {
  return request(url, {
    method: "GET",
    params
  });
}
async function post(url, data = null) {
  return dataRequest("POST", url, data);
}
async function put(url, data = null) {
  return dataRequest("PUT", url, data);
}
async function patch(url, data = null) {
  return dataRequest("PATCH", url, data);
}
async function performDelete(url, data = null) {
  return dataRequest("DELETE", url, data);
}

// resources/js/services/translations.js
var Translator = class {
  constructor() {
    this.store = /* @__PURE__ */ new Map();
    this.parseTranslations();
  }
  /**
   * Parse translations out of the page and place into the store.
   */
  parseTranslations() {
    const translationMetaTags = document.querySelectorAll('meta[name="translation"]');
    for (const tag of translationMetaTags) {
      const key = tag.getAttribute("key");
      const value = tag.getAttribute("value");
      this.store.set(key, value);
    }
  }
  /**
   * Get a translation, Same format as Laravel's 'trans' helper
   * @param key
   * @param replacements
   * @returns {*}
   */
  get(key, replacements) {
    const text = this.getTransText(key);
    return this.performReplacements(text, replacements);
  }
  /**
   * Get pluralised text, Dependent on the given count.
   * Same format at Laravel's 'trans_choice' helper.
   * @param key
   * @param count
   * @param replacements
   * @returns {*}
   */
  getPlural(key, count, replacements) {
    const text = this.getTransText(key);
    return this.parsePlural(text, count, replacements);
  }
  /**
   * Parse the given translation and find the correct plural option
   * to use. Similar format at Laravel's 'trans_choice' helper.
   * @param {String} translation
   * @param {Number} count
   * @param {Object} replacements
   * @returns {String}
   */
  parsePlural(translation, count, replacements) {
    const splitText = translation.split("|");
    const exactCountRegex = /^{([0-9]+)}/;
    const rangeRegex = /^\[([0-9]+),([0-9*]+)]/;
    let result = null;
    for (const t of splitText) {
      const exactMatches = t.match(exactCountRegex);
      if (exactMatches !== null && Number(exactMatches[1]) === count) {
        result = t.replace(exactCountRegex, "").trim();
        break;
      }
      const rangeMatches = t.match(rangeRegex);
      if (rangeMatches !== null) {
        const rangeStart = Number(rangeMatches[1]);
        if (rangeStart <= count && (rangeMatches[2] === "*" || Number(rangeMatches[2]) >= count)) {
          result = t.replace(rangeRegex, "").trim();
          break;
        }
      }
    }
    if (result === null && splitText.length > 1) {
      result = count === 1 ? splitText[0] : splitText[1];
    }
    if (result === null) {
      result = splitText[0];
    }
    return this.performReplacements(result, replacements);
  }
  /**
   * Fetched translation text from the store for the given key.
   * @param key
   * @returns {String|Object}
   */
  getTransText(key) {
    const value = this.store.get(key);
    if (value === void 0) {
      console.warn(`Translation with key "${key}" does not exist`);
    }
    return value;
  }
  /**
   * Perform replacements on a string.
   * @param {String} string
   * @param {Object} replacements
   * @returns {*}
   */
  performReplacements(string, replacements) {
    if (!replacements)
      return string;
    const replaceMatches = string.match(/:(\S+)/g);
    if (replaceMatches === null)
      return string;
    let updatedString = string;
    replaceMatches.forEach((match) => {
      const key = match.substring(1);
      if (typeof replacements[key] === "undefined")
        return;
      updatedString = updatedString.replace(match, replacements[key]);
    });
    return updatedString;
  }
};
var translations_default = Translator;

// resources/js/services/components.js
var components_exports = {};
__export(components_exports, {
  first: () => first,
  firstOnElement: () => firstOnElement,
  get: () => get2,
  init: () => init,
  register: () => register
});

// resources/js/services/text.js
function kebabToCamel(kebab) {
  const ucFirst = (word) => word.slice(0, 1).toUpperCase() + word.slice(1);
  const words = kebab.split("-");
  return words[0] + words.slice(1).map(ucFirst).join("");
}
function camelToKebab(camelStr) {
  return camelStr.replace(/[A-Z]/g, (str, offset) => (offset > 0 ? "-" : "") + str.toLowerCase());
}

// resources/js/services/components.js
var components = {};
var componentModelMap = {};
var elementComponentMap = /* @__PURE__ */ new WeakMap();
function parseRefs(name, element) {
  const refs = {};
  const manyRefs = {};
  const prefix = `${name}@`;
  const selector = `[refs*="${prefix}"]`;
  const refElems = [...element.querySelectorAll(selector)];
  if (element.matches(selector)) {
    refElems.push(element);
  }
  for (const el of refElems) {
    const refNames = el.getAttribute("refs").split(" ").filter((str) => str.startsWith(prefix)).map((str) => str.replace(prefix, "")).map(kebabToCamel);
    for (const ref of refNames) {
      refs[ref] = el;
      if (typeof manyRefs[ref] === "undefined") {
        manyRefs[ref] = [];
      }
      manyRefs[ref].push(el);
    }
  }
  return { refs, manyRefs };
}
function parseOpts(componentName, element) {
  const opts = {};
  const prefix = `option:${componentName}:`;
  for (const { name, value } of element.attributes) {
    if (name.startsWith(prefix)) {
      const optName = name.replace(prefix, "");
      opts[kebabToCamel(optName)] = value || "";
    }
  }
  return opts;
}
function initComponent(name, element) {
  const ComponentModel = componentModelMap[name];
  if (ComponentModel === void 0)
    return;
  let instance;
  try {
    instance = new ComponentModel();
    instance.$name = name;
    instance.$el = element;
    const allRefs = parseRefs(name, element);
    instance.$refs = allRefs.refs;
    instance.$manyRefs = allRefs.manyRefs;
    instance.$opts = parseOpts(name, element);
    instance.setup();
  } catch (e) {
    console.error("Failed to create component", e, name, element);
  }
  if (typeof components[name] === "undefined") {
    components[name] = [];
  }
  components[name].push(instance);
  const elComponents = elementComponentMap.get(element) || {};
  elComponents[name] = instance;
  elementComponentMap.set(element, elComponents);
}
function init(parentElement = document) {
  const componentElems = parentElement.querySelectorAll("[component],[components]");
  for (const el of componentElems) {
    const componentNames = `${el.getAttribute("component") || ""} ${el.getAttribute("components")}`.toLowerCase().split(" ").filter(Boolean);
    for (const name of componentNames) {
      initComponent(name, el);
    }
  }
}
function register(mapping) {
  const keys = Object.keys(mapping);
  for (const key of keys) {
    componentModelMap[camelToKebab(key)] = mapping[key];
  }
}
function first(name) {
  return (components[name] || [null])[0];
}
function get2(name) {
  return components[name] || [];
}
function firstOnElement(element, name) {
  const elComponents = elementComponentMap.get(element) || {};
  return elComponents[name] || null;
}

// resources/js/components/index.js
var components_exports2 = {};
__export(components_exports2, {
  AddRemoveRows: () => AddRemoveRows,
  AjaxDeleteRow: () => AjaxDeleteRow,
  AjaxForm: () => AjaxForm,
  Attachments: () => Attachments,
  AttachmentsList: () => AttachmentsList,
  AutoSubmit: () => AutoSubmit,
  AutoSuggest: () => AutoSuggest,
  BackToTop: () => BackToTop,
  BookSort: () => BookSort,
  ChapterContents: () => ChapterContents,
  CodeEditor: () => CodeEditor,
  CodeHighlighter: () => CodeHighlighter,
  CodeTextarea: () => CodeTextarea,
  Collapsible: () => Collapsible,
  ConfirmDialog: () => ConfirmDialog,
  CustomCheckbox: () => CustomCheckbox,
  DetailsHighlighter: () => DetailsHighlighter,
  Dropdown: () => Dropdown,
  DropdownSearch: () => DropdownSearch,
  Dropzone: () => Dropzone,
  EditorToolbox: () => EditorToolbox,
  EntityPermissions: () => EntityPermissions,
  EntitySearch: () => EntitySearch,
  EntitySelector: () => EntitySelector,
  EntitySelectorPopup: () => EntitySelectorPopup,
  EventEmitSelect: () => EventEmitSelect,
  ExpandToggle: () => ExpandToggle,
  GlobalSearch: () => GlobalSearch,
  HeaderMobileToggle: () => HeaderMobileToggle,
  ImageManager: () => ImageManager,
  ImagePicker: () => ImagePicker,
  ListSortControl: () => ListSortControl,
  MarkdownEditor: () => MarkdownEditor,
  NewUserPassword: () => NewUserPassword,
  Notification: () => Notification,
  OptionalInput: () => OptionalInput,
  PageComment: () => PageComment,
  PageComments: () => PageComments,
  PageDisplay: () => PageDisplay,
  PageEditor: () => PageEditor,
  PagePicker: () => PagePicker,
  PermissionsTable: () => PermissionsTable,
  Pointer: () => Pointer,
  Popup: () => Popup,
  SettingAppColorScheme: () => SettingAppColorScheme,
  SettingColorPicker: () => SettingColorPicker,
  SettingHomepageControl: () => SettingHomepageControl,
  ShelfSort: () => ShelfSort,
  ShortcutInput: () => ShortcutInput,
  Shortcuts: () => Shortcuts,
  SortableList: () => SortableList,
  SubmitOnChange: () => SubmitOnChange,
  Tabs: () => Tabs,
  TagManager: () => TagManager,
  TemplateManager: () => TemplateManager,
  ToggleSwitch: () => ToggleSwitch,
  TriLayout: () => TriLayout,
  UserSelect: () => UserSelect,
  WebhookEvents: () => WebhookEvents,
  WysiwygEditor: () => WysiwygEditor,
  WysiwygInput: () => WysiwygInput
});

// resources/js/services/dom.js
function elem(tagName2, attrs = {}, children = []) {
  const el = document.createElement(tagName2);
  for (const [key, val] of Object.entries(attrs)) {
    if (val === null) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, val);
    }
  }
  for (const child of children) {
    if (typeof child === "string") {
      el.append(document.createTextNode(child));
    } else {
      el.append(child);
    }
  }
  return el;
}
function forEach(selector, callback) {
  const elements = document.querySelectorAll(selector);
  for (const element of elements) {
    callback(element);
  }
}
function onEvents(listenerElement, events, callback) {
  for (const eventName of events) {
    listenerElement.addEventListener(eventName, callback);
  }
}
function onSelect(elements, callback) {
  if (!Array.isArray(elements)) {
    elements = [elements];
  }
  for (const listenerElement of elements) {
    listenerElement.addEventListener("click", callback);
    listenerElement.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        callback(event);
      }
    });
  }
}
function onKeyPress(key, elements, callback) {
  if (!Array.isArray(elements)) {
    elements = [elements];
  }
  const listener = (event) => {
    if (event.key === key) {
      callback(event);
    }
  };
  elements.forEach((e) => e.addEventListener("keydown", listener));
}
function onEnterPress(elements, callback) {
  onKeyPress("Enter", elements, callback);
}
function onEscapePress(elements, callback) {
  onKeyPress("Escape", elements, callback);
}
function onChildEvent(listenerElement, childSelector, eventName, callback) {
  listenerElement.addEventListener(eventName, (event) => {
    const matchingChild = event.target.closest(childSelector);
    if (matchingChild) {
      callback.call(matchingChild, event, matchingChild);
    }
  });
}
function findText(selector, text) {
  const elements = document.querySelectorAll(selector);
  text = text.toLowerCase();
  for (const element of elements) {
    if (element.textContent.toLowerCase().includes(text)) {
      return element;
    }
  }
  return null;
}
function showLoading(element) {
  element.innerHTML = '<div class="loading-container"><div></div><div></div><div></div></div>';
}
function getLoading() {
  const wrap2 = document.createElement("div");
  wrap2.classList.add("loading-container");
  wrap2.innerHTML = "<div></div><div></div><div></div>";
  return wrap2;
}
function removeLoading(element) {
  const loadingEls = element.querySelectorAll(".loading-container");
  for (const el of loadingEls) {
    el.remove();
  }
}
function htmlToDom(html) {
  const wrap2 = document.createElement("div");
  wrap2.innerHTML = html;
  window.$components.init(wrap2);
  return wrap2.children[0];
}

// resources/js/services/util.js
function debounce(func, waitMs, immediate) {
  let timeout;
  return function debouncedWrapper(...args) {
    const context = this;
    const later = function debouncedTimeout() {
      timeout = null;
      if (!immediate)
        func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, waitMs);
    if (callNow)
      func.apply(context, args);
  };
}
function scrollAndHighlightElement(element) {
  if (!element)
    return;
  let parent = element;
  while (parent.parentElement) {
    parent = parent.parentElement;
    if (parent.nodeName === "DETAILS" && !parent.open) {
      parent.open = true;
    }
  }
  element.scrollIntoView({ behavior: "smooth" });
  const highlight = getComputedStyle(document.body).getPropertyValue("--color-link");
  element.style.outline = `2px dashed ${highlight}`;
  element.style.outlineOffset = "5px";
  element.style.transition = null;
  setTimeout(() => {
    element.style.transition = "outline linear 3s";
    element.style.outline = "2px dashed rgba(0, 0, 0, 0)";
    const listener = () => {
      element.removeEventListener("transitionend", listener);
      element.style.transition = null;
      element.style.outline = null;
      element.style.outlineOffset = null;
    };
    element.addEventListener("transitionend", listener);
  }, 1e3);
}
function escapeHtml(unsafe) {
  return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function uniqueId() {
  const S4 = () => ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
}
function wait(timeMs) {
  return new Promise((res) => {
    setTimeout(res, timeMs);
  });
}

// resources/js/components/component.js
var Component = class {
  constructor() {
    /**
     * The registered name of the component.
     * @type {string}
     */
    __publicField(this, "$name", "");
    /**
     * The element that the component is registered upon.
     * @type {Element}
     */
    __publicField(this, "$el", null);
    /**
     * Mapping of referenced elements within the component.
     * @type {Object<string, Element>}
     */
    __publicField(this, "$refs", {});
    /**
     * Mapping of arrays of referenced elements within the component so multiple
     * references, sharing the same name, can be fetched.
     * @type {Object<string, Element[]>}
     */
    __publicField(this, "$manyRefs", {});
    /**
     * Options passed into this component.
     * @type {Object<String, String>}
     */
    __publicField(this, "$opts", {});
  }
  /**
   * Component-specific setup methods.
   * Use this to assign local variables and run any initial setup or actions.
   */
  setup() {
  }
  /**
   * Emit an event from this component.
   * Will be bubbled up from the dom element this is registered on, as a custom event
   * with the name `<elementName>-<eventName>`, with the provided data in the event detail.
   * @param {String} eventName
   * @param {Object} data
   */
  $emit(eventName, data = {}) {
    data.from = this;
    const componentName = this.$name;
    const event = new CustomEvent(`${componentName}-${eventName}`, {
      bubbles: true,
      detail: data
    });
    this.$el.dispatchEvent(event);
  }
};

// resources/js/components/add-remove-rows.js
var AddRemoveRows = class extends Component {
  setup() {
    this.modelRow = this.$refs.model;
    this.addButton = this.$refs.add;
    this.removeSelector = this.$opts.removeSelector;
    this.rowSelector = this.$opts.rowSelector;
    this.setupListeners();
  }
  setupListeners() {
    this.addButton.addEventListener("click", this.add.bind(this));
    onChildEvent(this.$el, this.removeSelector, "click", (e) => {
      const row = e.target.closest(this.rowSelector);
      row.remove();
    });
  }
  // For external use
  add() {
    const clone2 = this.modelRow.cloneNode(true);
    clone2.classList.remove("hidden");
    this.setClonedInputNames(clone2);
    this.modelRow.parentNode.insertBefore(clone2, this.modelRow);
    window.$components.init(clone2);
  }
  /**
   * Update the HTML names of a clone to be unique if required.
   * Names can use placeholder values. For exmaple, a model row
   * may have name="tags[randrowid][name]".
   * These are the available placeholder values:
   * - randrowid - An random string ID, applied the same across the row.
   * @param {HTMLElement} clone
   */
  setClonedInputNames(clone2) {
    const rowId = uniqueId();
    const randRowIdElems = clone2.querySelectorAll('[name*="randrowid"]');
    for (const elem2 of randRowIdElems) {
      elem2.name = elem2.name.split("randrowid").join(rowId);
    }
  }
};

// resources/js/components/ajax-delete-row.js
var AjaxDeleteRow = class extends Component {
  setup() {
    this.row = this.$el;
    this.url = this.$opts.url;
    this.deleteButtons = this.$manyRefs.delete;
    onSelect(this.deleteButtons, this.runDelete.bind(this));
  }
  runDelete() {
    this.row.style.opacity = "0.7";
    this.row.style.pointerEvents = "none";
    window.$http.delete(this.url).then((resp) => {
      if (typeof resp.data === "object" && resp.data.message) {
        window.$events.emit("success", resp.data.message);
      }
      this.row.remove();
    }).catch(() => {
      this.row.style.opacity = null;
      this.row.style.pointerEvents = null;
    });
  }
};

// resources/js/components/ajax-form.js
var AjaxForm = class extends Component {
  setup() {
    this.container = this.$el;
    this.responseContainer = this.container;
    this.url = this.$opts.url;
    this.method = this.$opts.method || "post";
    this.successMessage = this.$opts.successMessage;
    this.submitButtons = this.$manyRefs.submit || [];
    if (this.$opts.responseContainer) {
      this.responseContainer = this.container.closest(this.$opts.responseContainer);
    }
    this.setupListeners();
  }
  setupListeners() {
    if (this.container.tagName === "FORM") {
      this.container.addEventListener("submit", this.submitRealForm.bind(this));
      return;
    }
    onEnterPress(this.container, (event) => {
      this.submitFakeForm();
      event.preventDefault();
    });
    this.submitButtons.forEach((button) => onSelect(button, this.submitFakeForm.bind(this)));
  }
  submitFakeForm() {
    const fd = new FormData();
    const inputs = this.container.querySelectorAll("[name]");
    for (const input of inputs) {
      fd.append(input.getAttribute("name"), input.value);
    }
    this.submit(fd);
  }
  submitRealForm(event) {
    event.preventDefault();
    const fd = new FormData(this.container);
    this.submit(fd);
  }
  async submit(formData) {
    this.responseContainer.style.opacity = "0.7";
    this.responseContainer.style.pointerEvents = "none";
    try {
      const resp = await window.$http[this.method.toLowerCase()](this.url, formData);
      this.$emit("success", { formData });
      this.responseContainer.innerHTML = resp.data;
      if (this.successMessage) {
        window.$events.emit("success", this.successMessage);
      }
    } catch (err) {
      this.responseContainer.innerHTML = err.data;
    }
    window.$components.init(this.responseContainer);
    this.responseContainer.style.opacity = null;
    this.responseContainer.style.pointerEvents = null;
  }
};

// resources/js/components/attachments.js
var Attachments = class extends Component {
  setup() {
    this.container = this.$el;
    this.pageId = this.$opts.pageId;
    this.editContainer = this.$refs.editContainer;
    this.listContainer = this.$refs.listContainer;
    this.linksContainer = this.$refs.linksContainer;
    this.listPanel = this.$refs.listPanel;
    this.attachLinkButton = this.$refs.attachLinkButton;
    this.setupListeners();
  }
  setupListeners() {
    const reloadListBound = this.reloadList.bind(this);
    this.container.addEventListener("dropzone-upload-success", reloadListBound);
    this.container.addEventListener("ajax-form-success", reloadListBound);
    this.container.addEventListener("sortable-list-sort", (event) => {
      this.updateOrder(event.detail.ids);
    });
    this.container.addEventListener("event-emit-select-edit", (event) => {
      this.startEdit(event.detail.id);
    });
    this.container.addEventListener("event-emit-select-edit-back", () => {
      this.stopEdit();
    });
    this.container.addEventListener("event-emit-select-insert", (event) => {
      const insertContent = event.target.closest("[data-drag-content]").getAttribute("data-drag-content");
      const contentTypes = JSON.parse(insertContent);
      window.$events.emit("editor::insert", {
        html: contentTypes["text/html"],
        markdown: contentTypes["text/plain"]
      });
    });
    this.attachLinkButton.addEventListener("click", () => {
      this.showSection("links");
    });
  }
  showSection(section) {
    const sectionMap = {
      links: this.linksContainer,
      edit: this.editContainer,
      list: this.listContainer
    };
    for (const [name, elem2] of Object.entries(sectionMap)) {
      elem2.toggleAttribute("hidden", name !== section);
    }
  }
  reloadList() {
    this.stopEdit();
    window.$http.get(`/attachments/get/page/${this.pageId}`).then((resp) => {
      this.listPanel.innerHTML = resp.data;
      window.$components.init(this.listPanel);
    });
  }
  updateOrder(idOrder) {
    window.$http.put(`/attachments/sort/page/${this.pageId}`, { order: idOrder }).then((resp) => {
      window.$events.emit("success", resp.data.message);
    });
  }
  async startEdit(id) {
    this.showSection("edit");
    showLoading(this.editContainer);
    const resp = await window.$http.get(`/attachments/edit/${id}`);
    this.editContainer.innerHTML = resp.data;
    window.$components.init(this.editContainer);
  }
  stopEdit() {
    this.showSection("list");
  }
};

// resources/js/components/attachments-list.js
var AttachmentsList = class extends Component {
  setup() {
    this.container = this.$el;
    this.fileLinks = this.$manyRefs.linkTypeFile;
    this.setupListeners();
  }
  setupListeners() {
    const isExpectedKey = (event) => event.key === "Control" || event.key === "Meta";
    window.addEventListener("keydown", (event) => {
      if (isExpectedKey(event)) {
        this.addOpenQueryToLinks();
      }
    }, { passive: true });
    window.addEventListener("keyup", (event) => {
      if (isExpectedKey(event)) {
        this.removeOpenQueryFromLinks();
      }
    }, { passive: true });
  }
  addOpenQueryToLinks() {
    for (const link of this.fileLinks) {
      if (link.href.split("?")[1] !== "open=true") {
        link.href += "?open=true";
        link.setAttribute("target", "_blank");
      }
    }
  }
  removeOpenQueryFromLinks() {
    for (const link of this.fileLinks) {
      link.href = link.href.split("?")[0];
      link.removeAttribute("target");
    }
  }
};

// resources/js/services/keyboard-navigation.js
var _keydownHandler, keydownHandler_fn, _getFocusable, getFocusable_fn;
var KeyboardNavigationHandler = class {
  /**
   * @param {Element} container
   * @param {Function|null} onEscape
   * @param {Function|null} onEnter
   */
  constructor(container, onEscape = null, onEnter = null) {
    /**
     * @param {KeyboardEvent} event
     */
    __privateAdd(this, _keydownHandler);
    /**
     * Get an array of focusable elements within the current containers.
     * @returns {Element[]}
     */
    __privateAdd(this, _getFocusable);
    this.containers = [container];
    this.onEscape = onEscape;
    this.onEnter = onEnter;
    container.addEventListener("keydown", __privateMethod(this, _keydownHandler, keydownHandler_fn).bind(this));
  }
  /**
   * Also share the keyboard event handling to the given element.
   * Only elements within the original container are considered focusable though.
   * @param {Element} element
   */
  shareHandlingToEl(element) {
    this.containers.push(element);
    element.addEventListener("keydown", __privateMethod(this, _keydownHandler, keydownHandler_fn).bind(this));
  }
  /**
   * Focus on the next focusable element within the current containers.
   */
  focusNext() {
    const focusable = __privateMethod(this, _getFocusable, getFocusable_fn).call(this);
    const currentIndex = focusable.indexOf(document.activeElement);
    let newIndex2 = currentIndex + 1;
    if (newIndex2 >= focusable.length) {
      newIndex2 = 0;
    }
    focusable[newIndex2].focus();
  }
  /**
   * Focus on the previous existing focusable element within the current containers.
   */
  focusPrevious() {
    const focusable = __privateMethod(this, _getFocusable, getFocusable_fn).call(this);
    const currentIndex = focusable.indexOf(document.activeElement);
    let newIndex2 = currentIndex - 1;
    if (newIndex2 < 0) {
      newIndex2 = focusable.length - 1;
    }
    focusable[newIndex2].focus();
  }
};
_keydownHandler = new WeakSet();
keydownHandler_fn = function(event) {
  if (event.target.matches("input") && (event.key === "ArrowRight" || event.key === "ArrowLeft")) {
    return;
  }
  if (event.key === "ArrowDown" || event.key === "ArrowRight") {
    this.focusNext();
    event.preventDefault();
  } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
    this.focusPrevious();
    event.preventDefault();
  } else if (event.key === "Escape") {
    if (this.onEscape) {
      this.onEscape(event);
    } else if (document.activeElement) {
      document.activeElement.blur();
    }
  } else if (event.key === "Enter" && this.onEnter) {
    this.onEnter(event);
  }
};
_getFocusable = new WeakSet();
getFocusable_fn = function() {
  const focusable = [];
  const selector = '[tabindex]:not([tabindex="-1"]),[href],button:not([tabindex="-1"],[disabled]),input:not([type=hidden])';
  for (const container of this.containers) {
    focusable.push(...container.querySelectorAll(selector));
  }
  return focusable;
};

// resources/js/components/auto-suggest.js
var ajaxCache = {};
var AutoSuggest = class extends Component {
  setup() {
    this.parent = this.$el.parentElement;
    this.container = this.$el;
    this.type = this.$opts.type;
    this.url = this.$opts.url;
    this.input = this.$refs.input;
    this.list = this.$refs.list;
    this.lastPopulated = 0;
    this.setupListeners();
  }
  setupListeners() {
    const navHandler = new KeyboardNavigationHandler(
      this.list,
      () => {
        this.input.focus();
        setTimeout(() => this.hideSuggestions(), 1);
      },
      (event) => {
        event.preventDefault();
        const selectionValue = event.target.textContent;
        if (selectionValue) {
          this.selectSuggestion(selectionValue);
        }
      }
    );
    navHandler.shareHandlingToEl(this.input);
    onChildEvent(this.list, ".text-item", "click", (event, el) => {
      this.selectSuggestion(el.textContent);
    });
    this.input.addEventListener("input", this.requestSuggestions.bind(this));
    this.input.addEventListener("focus", this.requestSuggestions.bind(this));
    this.input.addEventListener("blur", this.hideSuggestionsIfFocusedLost.bind(this));
    this.input.addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        this.hideSuggestions();
      }
    });
  }
  selectSuggestion(value) {
    this.input.value = value;
    this.lastPopulated = Date.now();
    this.input.focus();
    this.input.dispatchEvent(new Event("input", { bubbles: true }));
    this.input.dispatchEvent(new Event("change", { bubbles: true }));
    this.hideSuggestions();
  }
  async requestSuggestions() {
    if (Date.now() - this.lastPopulated < 50) {
      return;
    }
    const nameFilter = this.getNameFilterIfNeeded();
    const search = this.input.value.toLowerCase();
    const suggestions = await this.loadSuggestions(search, nameFilter);
    const toShow = suggestions.filter((val) => search === "" || val.toLowerCase().startsWith(search)).slice(0, 10);
    this.displaySuggestions(toShow);
  }
  getNameFilterIfNeeded() {
    if (this.type !== "value")
      return null;
    return this.parent.querySelector("input").value;
  }
  /**
   * @param {String} search
   * @param {String|null} nameFilter
   * @returns {Promise<Object|String|*>}
   */
  async loadSuggestions(search, nameFilter = null) {
    search = search.slice(0, 4);
    const params = { search, name: nameFilter };
    const cacheKey = `${this.url}:${JSON.stringify(params)}`;
    if (ajaxCache[cacheKey]) {
      return ajaxCache[cacheKey];
    }
    const resp = await window.$http.get(this.url, params);
    ajaxCache[cacheKey] = resp.data;
    return resp.data;
  }
  /**
   * @param {String[]} suggestions
   */
  displaySuggestions(suggestions) {
    if (suggestions.length === 0) {
      this.hideSuggestions();
      return;
    }
    this.list.innerHTML = suggestions.map((value) => `<li><div tabindex="0" class="text-item">${escapeHtml(value)}</div></li>`).join("");
    this.list.style.display = "block";
    for (const button of this.list.querySelectorAll(".text-item")) {
      button.addEventListener("blur", this.hideSuggestionsIfFocusedLost.bind(this));
    }
  }
  hideSuggestions() {
    this.list.style.display = "none";
  }
  hideSuggestionsIfFocusedLost(event) {
    if (!this.container.contains(event.relatedTarget)) {
      this.hideSuggestions();
    }
  }
};

// resources/js/components/auto-submit.js
var AutoSubmit = class extends Component {
  setup() {
    this.form = this.$el;
    this.form.submit();
  }
};

// resources/js/components/back-to-top.js
var BackToTop = class extends Component {
  setup() {
    this.button = this.$el;
    this.targetElem = document.getElementById("header");
    this.showing = false;
    this.breakPoint = 1200;
    if (document.body.classList.contains("flexbox")) {
      this.button.style.display = "none";
      return;
    }
    this.button.addEventListener("click", this.scrollToTop.bind(this));
    window.addEventListener("scroll", this.onPageScroll.bind(this));
  }
  onPageScroll() {
    const scrollTopPos = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (!this.showing && scrollTopPos > this.breakPoint) {
      this.button.style.display = "block";
      this.showing = true;
      setTimeout(() => {
        this.button.style.opacity = 0.4;
      }, 1);
    } else if (this.showing && scrollTopPos < this.breakPoint) {
      this.button.style.opacity = 0;
      this.showing = false;
      setTimeout(() => {
        this.button.style.display = "none";
      }, 500);
    }
  }
  scrollToTop() {
    const targetTop = this.targetElem.getBoundingClientRect().top;
    const scrollElem = document.documentElement.scrollTop ? document.documentElement : document.body;
    const duration = 300;
    const start = Date.now();
    const scrollStart = this.targetElem.getBoundingClientRect().top;
    function setPos() {
      const percentComplete = 1 - (Date.now() - start) / duration;
      const target = Math.abs(percentComplete * scrollStart);
      if (percentComplete > 0) {
        scrollElem.scrollTop = target;
        requestAnimationFrame(setPos.bind(this));
      } else {
        scrollElem.scrollTop = targetTop;
      }
    }
    requestAnimationFrame(setPos.bind(this));
  }
};

// node_modules/sortablejs/modular/sortable.esm.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var version = "1.15.2";
function userAgent(pattern) {
  if (typeof window !== "undefined" && window.navigator) {
    return !!/* @__PURE__ */ navigator.userAgent.match(pattern);
  }
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
  capture: false,
  passive: false
};
function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches(el, selector) {
  if (!selector)
    return;
  selector[0] === ">" && (selector = selector.substring(1));
  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }
  return false;
}
function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest(el, selector, ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;
    do {
      if (selector != null && (selector[0] === ">" ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }
      if (el === ctx)
        break;
    } while (el = getParentOrHost(el));
  }
  return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? "add" : "remove"](name);
    } else {
      var className = (" " + el.className + " ").replace(R_SPACE, " ").replace(" " + name + " ", " ");
      el.className = (className + (state ? " " + name : "")).replace(R_SPACE, " ");
    }
  }
}
function css(el, prop, val) {
  var style = el && el.style;
  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, "");
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }
      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf("webkit") === -1) {
        prop = "-webkit-" + prop;
      }
      style[prop] = val + (typeof val === "string" ? "" : "px");
    }
  }
}
function matrix(el, selfOnly) {
  var appliedTransforms = "";
  if (typeof el === "string") {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, "transform");
      if (transform && transform !== "none") {
        appliedTransforms = transform + " " + appliedTransforms;
      }
    } while (!selfOnly && (el = el.parentNode));
  }
  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName2, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName2), i = 0, n = list.length;
    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }
    return list;
  }
  return [];
}
function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;
  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window)
    return;
  var elRect, top, left, bottom, right, height, width;
  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }
  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    container = container || el.parentNode;
    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, "transform") !== "none" || relativeToNonStaticParent && css(container, "position") !== "static")) {
          var containerRect = container.getBoundingClientRect();
          top -= containerRect.top + parseInt(css(container, "border-top-width"));
          left -= containerRect.left + parseInt(css(container, "border-left-width"));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
      } while (container = container.parentNode);
    }
  }
  if (undoScale && el !== window) {
    var elMatrix = matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }
  return {
    top,
    left,
    bottom,
    right,
    width,
    height
  };
}
function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true), elSideVal = getRect(el)[elSide];
  while (parent) {
    var parentSideVal = getRect(parent)[parentSide], visible = void 0;
    if (parentSide === "top" || parentSide === "left") {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }
    if (!visible)
      return parent;
    if (parent === getWindowScrollingElement())
      break;
    parent = getParentAutoScrollElement(parent, false);
  }
  return false;
}
function getChild(el, childNum, options2, includeDragEl) {
  var currentChild = 0, i = 0, children = el.children;
  while (i < children.length) {
    if (children[i].style.display !== "none" && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options2.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }
      currentChild++;
    }
    i++;
  }
  return null;
}
function lastChild(el, selector) {
  var last = el.lastElementChild;
  while (last && (last === Sortable.ghost || css(last, "display") === "none" || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }
  return last || null;
}
function index(el, selector) {
  var index2 = 0;
  if (!el || !el.parentNode) {
    return -1;
  }
  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== "TEMPLATE" && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index2++;
    }
  }
  return index2;
}
function getRelativeScrollOffset(el) {
  var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
  if (el) {
    do {
      var elMatrix = matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }
  return [offsetLeft, offsetTop];
}
function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i))
      continue;
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key])
        return Number(i);
    }
  }
  return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
  if (!el || !el.getBoundingClientRect)
    return getWindowScrollingElement();
  var elem2 = el;
  var gotSelf = false;
  do {
    if (elem2.clientWidth < elem2.scrollWidth || elem2.clientHeight < elem2.scrollHeight) {
      var elemCSS = css(elem2);
      if (elem2.clientWidth < elem2.scrollWidth && (elemCSS.overflowX == "auto" || elemCSS.overflowX == "scroll") || elem2.clientHeight < elem2.scrollHeight && (elemCSS.overflowY == "auto" || elemCSS.overflowY == "scroll")) {
        if (!elem2.getBoundingClientRect || elem2 === document.body)
          return getWindowScrollingElement();
        if (gotSelf || includeSelf)
          return elem2;
        gotSelf = true;
      }
    }
  } while (elem2 = elem2.parentNode);
  return getWindowScrollingElement();
}
function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }
  return dst;
}
function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
  return function() {
    if (!_throttleTimeout) {
      var args = arguments, _this = this;
      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }
      _throttleTimeout = setTimeout(function() {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}
function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}
function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;
  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}
function setRect(el, rect) {
  css(el, "position", "absolute");
  css(el, "top", rect.top);
  css(el, "left", rect.left);
  css(el, "width", rect.width);
  css(el, "height", rect.height);
}
function unsetRect(el) {
  css(el, "position", "");
  css(el, "top", "");
  css(el, "left", "");
  css(el, "width", "");
  css(el, "height", "");
}
function getChildContainingRectFromElement(container, options2, ghostEl2) {
  var rect = {};
  Array.from(container.children).forEach(function(child) {
    var _rect$left, _rect$top, _rect$right, _rect$bottom;
    if (!closest(child, options2.draggable, container, false) || child.animated || child === ghostEl2)
      return;
    var childRect = getRect(child);
    rect.left = Math.min((_rect$left = rect.left) !== null && _rect$left !== void 0 ? _rect$left : Infinity, childRect.left);
    rect.top = Math.min((_rect$top = rect.top) !== null && _rect$top !== void 0 ? _rect$top : Infinity, childRect.top);
    rect.right = Math.max((_rect$right = rect.right) !== null && _rect$right !== void 0 ? _rect$right : -Infinity, childRect.right);
    rect.bottom = Math.max((_rect$bottom = rect.bottom) !== null && _rect$bottom !== void 0 ? _rect$bottom : -Infinity, childRect.bottom);
  });
  rect.width = rect.right - rect.left;
  rect.height = rect.bottom - rect.top;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
var expando = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function AnimationStateManager() {
  var animationStates = [], animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation)
        return;
      var children = [].slice.call(this.el.children);
      children.forEach(function(child) {
        if (css(child, "display") === "none" || child === Sortable.ghost)
          return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });
        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);
        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);
          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }
        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;
      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === "function")
          callback();
        return;
      }
      var animating = false, animationTime = 0;
      animationStates.forEach(function(state) {
        var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
        if (targetMatrix) {
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }
        target.toRect = toRect;
        if (target.thisAnimationDuration) {
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        }
        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;
          if (!time) {
            time = _this.options.animation;
          }
          _this.animate(target, animatingRect, toRect, time);
        }
        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function() {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);
      if (!animating) {
        if (typeof callback === "function")
          callback();
      } else {
        animationCallbackId = setTimeout(function() {
          if (typeof callback === "function")
            callback();
        }, animationTime);
      }
      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, "transition", "");
        css(target, "transform", "");
        var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, "transform", "translate3d(" + translateX + "px," + translateY + "px,0)");
        this.forRepaintDummy = repaint(target);
        css(target, "transition", "transform " + duration + "ms" + (this.options.easing ? " " + this.options.easing : ""));
        css(target, "transform", "translate3d(0,0,0)");
        typeof target.animated === "number" && clearTimeout(target.animated);
        target.animated = setTimeout(function() {
          css(target, "transition", "");
          css(target, "transform", "");
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}
function repaint(target) {
  return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options2) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options2.animation;
}
var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    for (var option2 in defaults) {
      if (defaults.hasOwnProperty(option2) && !(option2 in plugin)) {
        plugin[option2] = defaults[option2];
      }
    }
    plugins.forEach(function(p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;
    this.eventCanceled = false;
    evt.cancel = function() {
      _this.eventCanceled = true;
    };
    var eventNameGlobal = eventName + "Global";
    plugins.forEach(function(plugin) {
      if (!sortable[plugin.pluginName])
        return;
      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable
        }, evt));
      }
      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults2, options2) {
    plugins.forEach(function(plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault)
        return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized;
      _extends(defaults2, initialized.defaults);
    });
    for (var option2 in sortable.options) {
      if (!sortable.options.hasOwnProperty(option2))
        continue;
      var modified = this.modifyOption(sortable, option2, sortable.options[option2]);
      if (typeof modified !== "undefined") {
        sortable.options[option2] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function(plugin) {
      if (typeof plugin.eventProperties !== "function")
        return;
      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function(plugin) {
      if (!sortable[plugin.pluginName])
        return;
      if (plugin.optionListeners && typeof plugin.optionListeners[name] === "function") {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};
function dispatchEvent(_ref) {
  var sortable = _ref.sortable, rootEl2 = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl2 = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex2 = _ref.oldIndex, newIndex2 = _ref.newIndex, oldDraggableIndex2 = _ref.oldDraggableIndex, newDraggableIndex2 = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl2 && rootEl2[expando];
  if (!sortable)
    return;
  var evt, options2 = sortable.options, onName = "on" + name.charAt(0).toUpperCase() + name.substr(1);
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent(name, true, true);
  }
  evt.to = toEl || rootEl2;
  evt.from = fromEl || rootEl2;
  evt.item = targetEl || rootEl2;
  evt.clone = cloneEl2;
  evt.oldIndex = oldIndex2;
  evt.newIndex = newIndex2;
  evt.oldDraggableIndex = oldDraggableIndex2;
  evt.newDraggableIndex = newDraggableIndex2;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable2 ? putSortable2.lastPutMode : void 0;
  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
  for (var option2 in allEventProperties) {
    evt[option2] = allEventProperties[option2];
  }
  if (rootEl2) {
    rootEl2.dispatchEvent(evt);
  }
  if (options2[onName]) {
    options2[onName].call(sortable, evt);
  }
}
var _excluded = ["evt"];
var pluginEvent2 = function pluginEvent3(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, originalEvent = _ref.evt, data = _objectWithoutProperties(_ref, _excluded);
  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    dragStarted: moved,
    putSortable,
    activeSortable: Sortable.active,
    originalEvent,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable,
        name,
        originalEvent
      });
    }
  }, data));
};
function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable,
    cloneEl,
    targetEl: dragEl,
    rootEl,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex
  }, info));
}
var dragEl;
var parentEl;
var ghostEl;
var rootEl;
var nextEl;
var lastDownEl;
var cloneEl;
var cloneHidden;
var oldIndex;
var newIndex;
var oldDraggableIndex;
var newDraggableIndex;
var activeGroup;
var putSortable;
var awaitingDragStarted = false;
var ignoreNextClick = false;
var sortables = [];
var tapEvt;
var touchEvt;
var lastDx;
var lastDy;
var tapDistanceLeft;
var tapDistanceTop;
var moved;
var lastTarget;
var lastDirection;
var pastFirstInvertThresh = false;
var isCircumstantialInvert = false;
var targetMoveDistance;
var ghostRelativeParent;
var ghostRelativeParentInitialScroll = [];
var _silent = false;
var savedInputChecked = [];
var documentExists = typeof document !== "undefined";
var PositionGhostAbsolutely = IOS;
var CSSFloatProperty = Edge || IE11OrLess ? "cssFloat" : "float";
var supportDraggable = documentExists && !ChromeForAndroid && !IOS && "draggable" in document.createElement("div");
var supportCssPointerEvents = function() {
  if (!documentExists)
    return;
  if (IE11OrLess) {
    return false;
  }
  var el = document.createElement("x");
  el.style.cssText = "pointer-events:auto";
  return el.style.pointerEvents === "auto";
}();
var _detectDirection = function _detectDirection2(el, options2) {
  var elCSS = css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el, 0, options2), child2 = getChild(el, 1, options2), firstChildCSS = child1 && css(child1), secondChildCSS = child2 && css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
  if (elCSS.display === "flex") {
    return elCSS.flexDirection === "column" || elCSS.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  }
  if (elCSS.display === "grid") {
    return elCSS.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  }
  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== "none") {
    var touchingSideChild2 = firstChildCSS["float"] === "left" ? "left" : "right";
    return child2 && (secondChildCSS.clear === "both" || secondChildCSS.clear === touchingSideChild2) ? "vertical" : "horizontal";
  }
  return child1 && (firstChildCSS.display === "block" || firstChildCSS.display === "flex" || firstChildCSS.display === "table" || firstChildCSS.display === "grid" || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === "none" || child2 && elCSS[CSSFloatProperty] === "none" && firstChildWidth + secondChildWidth > elWidth) ? "vertical" : "horizontal";
};
var _dragElInRowColumn = function _dragElInRowColumn2(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
};
var _detectNearestEmptySortable = function _detectNearestEmptySortable2(x, y) {
  var ret;
  sortables.some(function(sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable))
      return;
    var rect = getRect(sortable), insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
};
var _prepareGroup = function _prepareGroup2(options2) {
  function toFn(value, pull) {
    return function(to, from, dragEl2, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
      if (value == null && (pull || sameGroup)) {
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === "clone") {
        return value;
      } else if (typeof value === "function") {
        return toFn(value(to, from, dragEl2, evt), pull)(to, from, dragEl2, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === "string" && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }
  var group = {};
  var originalGroup = options2.group;
  if (!originalGroup || _typeof(originalGroup) != "object") {
    originalGroup = {
      name: originalGroup
    };
  }
  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options2.group = group;
};
var _hideGhostForTarget = function _hideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, "display", "none");
  }
};
var _unhideGhostForTarget = function _unhideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, "display", "");
  }
};
if (documentExists && !ChromeForAndroid) {
  document.addEventListener("click", function(evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent2(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;
    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
    if (nearest) {
      var event = {};
      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }
      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;
      nearest[expando]._onDragOver(event);
    }
  }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl2(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
function Sortable(el, options2) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }
  this.el = el;
  this.options = options2 = _extends({}, options2);
  el[expando] = this;
  var defaults2 = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl2) {
      dataTransfer.setData("Text", dragEl2.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults2);
  for (var name in defaults2) {
    !(name in options2) && (options2[name] = defaults2[name]);
  }
  _prepareGroup(options2);
  for (var fn in this) {
    if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
      this[fn] = this[fn].bind(this);
    }
  }
  this.nativeDraggable = options2.forceFallback ? false : supportDraggable;
  if (this.nativeDraggable) {
    this.options.touchStartThreshold = 1;
  }
  if (options2.supportPointer) {
    on(el, "pointerdown", this._onTapStart);
  } else {
    on(el, "mousedown", this._onTapStart);
    on(el, "touchstart", this._onTapStart);
  }
  if (this.nativeDraggable) {
    on(el, "dragover", this);
    on(el, "dragenter", this);
  }
  sortables.push(this.el);
  options2.store && options2.store.get && this.sort(options2.store.get(this) || []);
  _extends(this, AnimationStateManager());
}
Sortable.prototype = /** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === "function" ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(evt) {
    if (!evt.cancelable)
      return;
    var _this = this, el = this.el, options2 = this.options, preventOnFilter = options2.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === "touch" && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options2.filter;
    _saveInputCheckedState(el);
    if (dragEl) {
      return;
    }
    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options2.disabled) {
      return;
    }
    if (originalTarget.isContentEditable) {
      return;
    }
    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === "SELECT") {
      return;
    }
    target = closest(target, options2.draggable, el, false);
    if (target && target.animated) {
      return;
    }
    if (lastDownEl === target) {
      return;
    }
    oldIndex = index(target);
    oldDraggableIndex = index(target, options2.draggable);
    if (typeof filter === "function") {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: "filter",
          targetEl: target,
          toEl: el,
          fromEl: el
        });
        pluginEvent2("filter", _this, {
          evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return;
      }
    } else if (filter) {
      filter = filter.split(",").some(function(criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);
        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: "filter",
            targetEl: target,
            fromEl: el,
            toEl: el
          });
          pluginEvent2("filter", _this, {
            evt
          });
          return true;
        }
      });
      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return;
      }
    }
    if (options2.handle && !closest(originalTarget, options2.handle, el, false)) {
      return;
    }
    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(evt, touch, target) {
    var _this = this, el = _this.el, options2 = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options2.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style["will-change"] = "all";
      dragStartFn = function dragStartFn2() {
        pluginEvent2("delayEnded", _this, {
          evt
        });
        if (Sortable.eventCanceled) {
          _this._onDrop();
          return;
        }
        _this._disableDelayedDragEvents();
        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        }
        _this._triggerDragStart(evt, touch);
        _dispatchEvent({
          sortable: _this,
          name: "choose",
          originalEvent: evt
        });
        toggleClass(dragEl, options2.chosenClass, true);
      };
      options2.ignore.split(",").forEach(function(criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, "dragover", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "mousemove", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "touchmove", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "mouseup", _this._onDrop);
      on(ownerDocument, "touchend", _this._onDrop);
      on(ownerDocument, "touchcancel", _this._onDrop);
      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }
      pluginEvent2("delayStart", this, {
        evt
      });
      if (options2.delay && (!options2.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();
          return;
        }
        on(ownerDocument, "mouseup", _this._disableDelayedDrag);
        on(ownerDocument, "touchend", _this._disableDelayedDrag);
        on(ownerDocument, "touchcancel", _this._disableDelayedDrag);
        on(ownerDocument, "mousemove", _this._delayedDragTouchMoveHandler);
        on(ownerDocument, "touchmove", _this._delayedDragTouchMoveHandler);
        options2.supportPointer && on(ownerDocument, "pointermove", _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options2.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(e) {
    var touch = e.touches ? e.touches[0] : e;
    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);
    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._disableDelayedDrag);
    off(ownerDocument, "touchend", this._disableDelayedDrag);
    off(ownerDocument, "touchcancel", this._disableDelayedDrag);
    off(ownerDocument, "mousemove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "touchmove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(evt, touch) {
    touch = touch || evt.pointerType == "touch" && evt;
    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, "pointermove", this._onTouchMove);
      } else if (touch) {
        on(document, "touchmove", this._onTouchMove);
      } else {
        on(document, "mousemove", this._onTouchMove);
      }
    } else {
      on(dragEl, "dragend", this);
      on(rootEl, "dragstart", this._onDragStart);
    }
    try {
      if (document.selection) {
        _nextTick(function() {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {
    }
  },
  _dragStarted: function _dragStarted(fallback, evt) {
    awaitingDragStarted = false;
    if (rootEl && dragEl) {
      pluginEvent2("dragStarted", this, {
        evt
      });
      if (this.nativeDraggable) {
        on(document, "dragover", _checkOutsideTargetEl);
      }
      var options2 = this.options;
      !fallback && toggleClass(dragEl, options2.dragClass, false);
      toggleClass(dragEl, options2.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost();
      _dispatchEvent({
        sortable: this,
        name: "start",
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;
      _hideGhostForTarget();
      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;
      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent)
          break;
        parent = target;
      }
      dragEl.parentNode[expando]._isOutsideThisEl(target);
      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target,
              rootEl: parent
            });
            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }
          target = parent;
        } while (parent = parent.parentNode);
      }
      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(evt) {
    if (tapEvt) {
      var options2 = this.options, fallbackTolerance = options2.fallbackTolerance, fallbackOffset = options2.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);
      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }
        this._onDragStart(evt, true);
      }
      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }
        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, "webkitTransform", cssMatrix);
        css(ghostEl, "mozTransform", cssMatrix);
        css(ghostEl, "msTransform", cssMatrix);
        css(ghostEl, "transform", cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }
      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options2 = this.options;
      if (PositionGhostAbsolutely) {
        ghostRelativeParent = container;
        while (css(ghostRelativeParent, "position") === "static" && css(ghostRelativeParent, "transform") === "none" && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }
        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document)
            ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }
        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }
      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options2.ghostClass, false);
      toggleClass(ghostEl, options2.fallbackClass, true);
      toggleClass(ghostEl, options2.dragClass, true);
      css(ghostEl, "transition", "");
      css(ghostEl, "transform", "");
      css(ghostEl, "box-sizing", "border-box");
      css(ghostEl, "margin", 0);
      css(ghostEl, "top", rect.top);
      css(ghostEl, "left", rect.left);
      css(ghostEl, "width", rect.width);
      css(ghostEl, "height", rect.height);
      css(ghostEl, "opacity", "0.8");
      css(ghostEl, "position", PositionGhostAbsolutely ? "absolute" : "fixed");
      css(ghostEl, "zIndex", "100000");
      css(ghostEl, "pointerEvents", "none");
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl);
      css(ghostEl, "transform-origin", tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + "% " + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + "%");
    }
  },
  _onDragStart: function _onDragStart(evt, fallback) {
    var _this = this;
    var dataTransfer = evt.dataTransfer;
    var options2 = _this.options;
    pluginEvent2("dragStart", this, {
      evt
    });
    if (Sortable.eventCanceled) {
      this._onDrop();
      return;
    }
    pluginEvent2("setupClone", this);
    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style["will-change"] = "";
      this._hideClone();
      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    }
    _this.cloneId = _nextTick(function() {
      pluginEvent2("clone", _this);
      if (Sortable.eventCanceled)
        return;
      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }
      _this._hideClone();
      _dispatchEvent({
        sortable: _this,
        name: "clone"
      });
    });
    !fallback && toggleClass(dragEl, options2.dragClass, true);
    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      off(document, "mouseup", _this._onDrop);
      off(document, "touchend", _this._onDrop);
      off(document, "touchcancel", _this._onDrop);
      if (dataTransfer) {
        dataTransfer.effectAllowed = "move";
        options2.setData && options2.setData.call(_this, dataTransfer, dragEl);
      }
      on(document, "drop", _this);
      css(dragEl, "transform", "translateZ(0)");
    }
    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, "selectstart", _this);
    moved = true;
    if (Safari) {
      css(document.body, "user-select", "none");
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(evt) {
    var el = this.el, target = evt.target, dragRect, targetRect, revert, options2 = this.options, group = options2.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options2.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
    if (_silent)
      return;
    function dragOverEvent(name, extra) {
      pluginEvent2(name, _this, _objectSpread2({
        evt,
        isOwner,
        axis: vertical ? "vertical" : "horizontal",
        revert,
        dragRect,
        targetRect,
        canSort,
        fromSortable,
        target,
        completed,
        onMove: function onMove(target2, after2) {
          return _onMove(rootEl, el, dragEl, dragRect, target2, getRect(target2), evt, after2);
        },
        changed
      }, extra));
    }
    function capture() {
      dragOverEvent("dragOverAnimationCapture");
      _this.captureAnimationState();
      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    }
    function completed(insertion) {
      dragOverEvent("dragOverCompleted", {
        insertion
      });
      if (insertion) {
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }
        if (_this !== fromSortable) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options2.ghostClass, true);
        }
        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        }
        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }
        _this.animateAll(function() {
          dragOverEvent("dragOverAnimationComplete");
          _this._ignoreWhileAnimating = null;
        });
        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      }
      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      }
      if (!options2.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
        !insertion && nearestEmptyInsertDetectEvent(evt);
      }
      !options2.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    }
    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options2.draggable);
      _dispatchEvent({
        sortable: _this,
        name: "change",
        toEl: el,
        newIndex,
        newDraggableIndex,
        originalEvent: evt
      });
    }
    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }
    target = closest(target, options2.draggable, el, true);
    dragOverEvent("dragOver");
    if (Sortable.eventCanceled)
      return completedFired;
    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }
    ignoreNextClick = false;
    if (activeSortable && !options2.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === "vertical";
      dragRect = getRect(dragEl);
      dragOverEvent("dragOverValid");
      if (Sortable.eventCanceled)
        return completedFired;
      if (revert) {
        parentEl = rootEl;
        capture();
        this._hideClone();
        dragOverEvent("revert");
        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }
        return completed(true);
      }
      var elLastChild = lastChild(el, options2.draggable);
      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        if (elLastChild === dragEl) {
          return completed(false);
        }
        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }
        if (target) {
          targetRect = getRect(target);
        }
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          if (elLastChild && elLastChild.nextSibling) {
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }
          parentEl = el;
          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        var firstChild = getChild(el, 0, options2, true);
        if (firstChild === dragEl) {
          return completed(false);
        }
        target = firstChild;
        targetRect = getRect(target);
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el;
          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? "top" : "left", scrolledPastTop = isScrolledPast(target, "top", "top") || isScrolledPast(dragEl, "top", "top"), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options2.invertSwap || differentLevel;
        }
        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options2.swapThreshold, options2.invertedSwapThreshold == null ? options2.swapThreshold : options2.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;
        if (direction !== 0) {
          var dragIndex = index(dragEl);
          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, "display") === "none" || sibling === ghostEl));
        }
        if (direction === 0 || sibling === target) {
          return completed(false);
        }
        lastTarget = target;
        lastDirection = direction;
        var nextSibling2 = target.nextElementSibling, after = false;
        after = direction === 1;
        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }
          _silent = true;
          setTimeout(_unsilent, 30);
          capture();
          if (after && !nextSibling2) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling2 : target);
          }
          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }
          parentEl = dragEl.parentNode;
          if (targetBeforeFirstSwap !== void 0 && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }
          changed();
          return completed(true);
        }
      }
      if (el.contains(dragEl)) {
        return completed(false);
      }
    }
    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, "mousemove", this._onTouchMove);
    off(document, "touchmove", this._onTouchMove);
    off(document, "pointermove", this._onTouchMove);
    off(document, "dragover", nearestEmptyInsertDetectEvent);
    off(document, "mousemove", nearestEmptyInsertDetectEvent);
    off(document, "touchmove", nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._onDrop);
    off(ownerDocument, "touchend", this._onDrop);
    off(ownerDocument, "pointerup", this._onDrop);
    off(ownerDocument, "touchcancel", this._onDrop);
    off(document, "selectstart", this);
  },
  _onDrop: function _onDrop(evt) {
    var el = this.el, options2 = this.options;
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options2.draggable);
    pluginEvent2("drop", this, {
      evt
    });
    parentEl = dragEl && dragEl.parentNode;
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options2.draggable);
    if (Sortable.eventCanceled) {
      this._nulling();
      return;
    }
    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);
    _cancelNextTick(this.cloneId);
    _cancelNextTick(this._dragStartId);
    if (this.nativeDraggable) {
      off(document, "drop", this);
      off(el, "dragstart", this._onDragStart);
    }
    this._offMoveEvents();
    this._offUpEvents();
    if (Safari) {
      css(document.body, "user-select", "");
    }
    css(dragEl, "transform", "");
    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options2.dropBubble && evt.stopPropagation();
      }
      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") {
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }
      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, "dragend", this);
        }
        _disableDraggable(dragEl);
        dragEl.style["will-change"] = "";
        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }
        toggleClass(dragEl, this.options.chosenClass, false);
        _dispatchEvent({
          sortable: this,
          name: "unchoose",
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });
        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            _dispatchEvent({
              rootEl: parentEl,
              name: "add",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "remove",
              toEl: parentEl,
              originalEvent: evt
            });
            _dispatchEvent({
              rootEl: parentEl,
              name: "sort",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "sort",
              toEl: parentEl,
              originalEvent: evt
            });
          }
          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              _dispatchEvent({
                sortable: this,
                name: "update",
                toEl: parentEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: "sort",
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }
        if (Sortable.active) {
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }
          _dispatchEvent({
            sortable: this,
            name: "end",
            toEl: parentEl,
            originalEvent: evt
          });
          this.save();
        }
      }
    }
    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent2("nulling", this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function(el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(evt) {
    switch (evt.type) {
      case "drop":
      case "dragend":
        this._onDrop(evt);
        break;
      case "dragenter":
      case "dragover":
        if (dragEl) {
          this._onDragOver(evt);
          _globalDragOver(evt);
        }
        break;
      case "selectstart":
        evt.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [], el, children = this.el.children, i = 0, n = children.length, options2 = this.options;
    for (; i < n; i++) {
      el = children[i];
      if (closest(el, options2.draggable, this.el, false)) {
        order.push(el.getAttribute(options2.dataIdAttr) || _generateId(el));
      }
    }
    return order;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {}, rootEl2 = this.el;
    this.toArray().forEach(function(id, i) {
      var el = rootEl2.children[i];
      if (closest(el, this.options.draggable, rootEl2, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function(id) {
      if (items[id]) {
        rootEl2.removeChild(items[id]);
        rootEl2.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options2 = this.options;
    if (value === void 0) {
      return options2[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);
      if (typeof modifiedValue !== "undefined") {
        options2[name] = modifiedValue;
      } else {
        options2[name] = value;
      }
      if (name === "group") {
        _prepareGroup(options2);
      }
    }
  },
  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent2("destroy", this);
    var el = this.el;
    el[expando] = null;
    off(el, "mousedown", this._onTapStart);
    off(el, "touchstart", this._onTapStart);
    off(el, "pointerdown", this._onTapStart);
    if (this.nativeDraggable) {
      off(el, "dragover", this);
      off(el, "dragenter", this);
    }
    Array.prototype.forEach.call(el.querySelectorAll("[draggable]"), function(el2) {
      el2.removeAttribute("draggable");
    });
    this._onDrop();
    this._disableDelayedDragEvents();
    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent2("hideClone", this);
      if (Sortable.eventCanceled)
        return;
      css(cloneEl, "display", "none");
      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }
      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable2) {
    if (putSortable2.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (cloneHidden) {
      pluginEvent2("showClone", this);
      if (Sortable.eventCanceled)
        return;
      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }
      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }
      css(cloneEl, "display", "");
      cloneHidden = false;
    }
  }
};
function _globalDragOver(evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = "move";
  }
  evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl2, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal;
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent("move", {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent("move", true, true);
  }
  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl2;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);
  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }
  return retVal;
}
function _disableDraggable(el) {
  el.draggable = false;
}
function _unsilent() {
  _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
  var firstElRect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX < childContainingRect.left - spacer || evt.clientY < firstElRect.top && evt.clientX < firstElRect.right : evt.clientY < childContainingRect.top - spacer || evt.clientY < firstElRect.bottom && evt.clientX < firstElRect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
  var lastElRect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX > childContainingRect.right + spacer || evt.clientY > lastElRect.bottom && evt.clientX > lastElRect.left : evt.clientY > childContainingRect.bottom + spacer || evt.clientX > lastElRect.right && evt.clientY > lastElRect.top;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
  if (!invertSwap) {
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        pastFirstInvertThresh = true;
      }
      if (!pastFirstInvertThresh) {
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }
  invert = invert || invertSwap;
  if (invert) {
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }
  return 0;
}
function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent, i = str.length, sum = 0;
  while (i--) {
    sum += str.charCodeAt(i);
  }
  return sum.toString(36);
}
function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName("input");
  var idx = inputs.length;
  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}
function _nextTick(fn) {
  return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
  return clearTimeout(id);
}
if (documentExists) {
  on(document, "touchmove", function(evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
}
Sortable.utils = {
  on,
  off,
  css,
  find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend,
  throttle,
  closest,
  toggleClass,
  clone,
  index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild
};
Sortable.get = function(element) {
  return element[expando];
};
Sortable.mount = function() {
  for (var _len = arguments.length, plugins2 = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins2[_key] = arguments[_key];
  }
  if (plugins2[0].constructor === Array)
    plugins2 = plugins2[0];
  plugins2.forEach(function(plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }
    if (plugin.utils)
      Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
Sortable.create = function(el, options2) {
  return new Sortable(el, options2);
};
Sortable.version = version;
var autoScrolls = [];
var scrollEl;
var scrollRootEl;
var scrolling = false;
var lastAutoScrollX;
var lastAutoScrollY;
var touchEvt$1;
var pointerElemChangedInterval;
function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    };
    for (var fn in this) {
      if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
        this[fn] = this[fn].bind(this);
      }
    }
  }
  AutoScroll.prototype = {
    dragStarted: function dragStarted2(_ref) {
      var originalEvent = _ref.originalEvent;
      if (this.sortable.nativeDraggable) {
        on(document, "dragover", this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, "pointermove", this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, "touchmove", this._handleFallbackAutoScroll);
        } else {
          on(document, "mousemove", this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop4() {
      if (this.sortable.nativeDraggable) {
        off(document, "dragover", this._handleAutoScroll);
      } else {
        off(document, "pointermove", this._handleFallbackAutoScroll);
        off(document, "touchmove", this._handleFallbackAutoScroll);
        off(document, "mousemove", this._handleFallbackAutoScroll);
      }
      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;
      var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem2 = document.elementFromPoint(x, y);
      touchEvt$1 = evt;
      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem2, fallback);
        var ogElemScroller = getParentAutoScrollElement(elem2, true);
        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval();
          pointerElemChangedInterval = setInterval(function() {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }
            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem2, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }
        autoScroll(evt, this.options, getParentAutoScrollElement(elem2, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: "scroll",
    initializeByDefault: true
  });
}
function clearAutoScrolls() {
  autoScrolls.forEach(function(autoScroll2) {
    clearInterval(autoScroll2.pid);
  });
  autoScrolls = [];
}
function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function(evt, options2, rootEl2, isFallback) {
  if (!options2.scroll)
    return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options2.scrollSensitivity, speed = options2.scrollSpeed, winScroller = getWindowScrollingElement();
  var scrollThisInstance = false, scrollCustomFn;
  if (scrollRootEl !== rootEl2) {
    scrollRootEl = rootEl2;
    clearAutoScrolls();
    scrollEl = options2.scroll;
    scrollCustomFn = options2.scrollFn;
    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl2, true);
    }
  }
  var layersOut = 0;
  var currentParent = scrollEl;
  do {
    var el = currentParent, rect = getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll" || elCSS.overflowX === "visible");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll" || elCSS.overflowY === "visible");
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll");
    }
    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }
    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);
      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        autoScrolls[layersOut].pid = setInterval(function() {
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1);
          }
          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
          if (typeof scrollCustomFn === "function") {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== "continue") {
              return;
            }
          }
          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }
    layersOut++;
  } while (options2.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
  scrolling = scrollThisInstance;
}, 30);
var drop = function drop2(_ref) {
  var originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, dragEl2 = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent)
    return;
  var toSortable = putSortable2 || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();
  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent("spill");
    this.onSpill({
      dragEl: dragEl2,
      putSortable: putSortable2
    });
  }
};
function Revert() {
}
Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex2 = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex2;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl2 = _ref3.dragEl, putSortable2 = _ref3.putSortable;
    this.sortable.captureAnimationState();
    if (putSortable2) {
      putSortable2.captureAnimationState();
    }
    var nextSibling2 = getChild(this.sortable.el, this.startIndex, this.options);
    if (nextSibling2) {
      this.sortable.el.insertBefore(dragEl2, nextSibling2);
    } else {
      this.sortable.el.appendChild(dragEl2);
    }
    this.sortable.animateAll();
    if (putSortable2) {
      putSortable2.animateAll();
    }
  },
  drop
};
_extends(Revert, {
  pluginName: "revertOnSpill"
});
function Remove() {
}
Remove.prototype = {
  onSpill: function onSpill2(_ref4) {
    var dragEl2 = _ref4.dragEl, putSortable2 = _ref4.putSortable;
    var parentSortable = putSortable2 || this.sortable;
    parentSortable.captureAnimationState();
    dragEl2.parentNode && dragEl2.parentNode.removeChild(dragEl2);
    parentSortable.animateAll();
  },
  drop
};
_extends(Remove, {
  pluginName: "removeOnSpill"
});
var multiDragElements = [];
var multiDragClones = [];
var lastMultiDragSelect;
var multiDragSortable;
var initialFolding = false;
var folding = false;
var dragStarted = false;
var dragEl$1;
var clonesFromRect;
var clonesHidden;
function MultiDragPlugin() {
  function MultiDrag(sortable) {
    for (var fn in this) {
      if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
        this[fn] = this[fn].bind(this);
      }
    }
    if (!sortable.options.avoidImplicitDeselect) {
      if (sortable.options.supportPointer) {
        on(document, "pointerup", this._deselectMultiDrag);
      } else {
        on(document, "mouseup", this._deselectMultiDrag);
        on(document, "touchend", this._deselectMultiDrag);
      }
    }
    on(document, "keydown", this._checkKeyDown);
    on(document, "keyup", this._checkKeyUp);
    this.defaults = {
      selectedClass: "sortable-selected",
      multiDragKey: null,
      avoidImplicitDeselect: false,
      setData: function setData(dataTransfer, dragEl2) {
        var data = "";
        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function(multiDragElement, i) {
            data += (!i ? "" : ", ") + multiDragElement.textContent;
          });
        } else {
          data = dragEl2.textContent;
        }
        dataTransfer.setData("Text", data);
      }
    };
  }
  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable, cancel = _ref2.cancel;
      if (!this.isMultiDrag)
        return;
      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style["will-change"] = "";
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }
      sortable._hideClone();
      cancel();
    },
    clone: function clone2(_ref3) {
      var sortable = _ref3.sortable, rootEl2 = _ref3.rootEl, dispatchSortableEvent = _ref3.dispatchSortableEvent, cancel = _ref3.cancel;
      if (!this.isMultiDrag)
        return;
      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl2);
          dispatchSortableEvent("clone");
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown, rootEl2 = _ref4.rootEl, cancel = _ref4.cancel;
      if (!this.isMultiDrag)
        return;
      insertMultiDragClones(false, rootEl2);
      multiDragClones.forEach(function(clone2) {
        css(clone2, "display", "");
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;
      var sortable = _ref5.sortable, cloneNowHidden = _ref5.cloneNowHidden, cancel = _ref5.cancel;
      if (!this.isMultiDrag)
        return;
      multiDragClones.forEach(function(clone2) {
        css(clone2, "display", "none");
        if (_this.options.removeCloneOnHide && clone2.parentNode) {
          clone2.parentNode.removeChild(clone2);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;
      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }
      multiDragElements.forEach(function(multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      });
      multiDragElements = multiDragElements.sort(function(a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted2(_ref7) {
      var _this2 = this;
      var sortable = _ref7.sortable;
      if (!this.isMultiDrag)
        return;
      if (this.options.sort) {
        sortable.captureAnimationState();
        if (this.options.animation) {
          multiDragElements.forEach(function(multiDragElement) {
            if (multiDragElement === dragEl$1)
              return;
            css(multiDragElement, "position", "absolute");
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function(multiDragElement) {
            if (multiDragElement === dragEl$1)
              return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }
      sortable.animateAll(function() {
        folding = false;
        initialFolding = false;
        if (_this2.options.animation) {
          multiDragElements.forEach(function(multiDragElement) {
            unsetRect(multiDragElement);
          });
        }
        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target, completed = _ref8.completed, cancel = _ref8.cancel;
      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable, rootEl2 = _ref9.rootEl, sortable = _ref9.sortable, dragRect = _ref9.dragRect;
      if (multiDragElements.length > 1) {
        multiDragElements.forEach(function(multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl2);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable, isOwner = _ref10.isOwner, insertion = _ref10.insertion, activeSortable = _ref10.activeSortable, parentEl2 = _ref10.parentEl, putSortable2 = _ref10.putSortable;
      var options2 = this.options;
      if (insertion) {
        if (isOwner) {
          activeSortable._hideClone();
        }
        initialFolding = false;
        if (options2.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable2)) {
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function(multiDragElement) {
            if (multiDragElement === dragEl$1)
              return;
            setRect(multiDragElement, dragRectAbsolute);
            parentEl2.appendChild(multiDragElement);
          });
          folding = true;
        }
        if (!isOwner) {
          if (!folding) {
            removeMultiDragElements();
          }
          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;
            activeSortable._showClone(sortable);
            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function(clone2) {
                activeSortable.addAnimationState({
                  target: clone2,
                  rect: clonesFromRect
                });
                clone2.fromRect = clonesFromRect;
                clone2.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect, isOwner = _ref11.isOwner, activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function(multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });
      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop4(_ref12) {
      var evt = _ref12.originalEvent, rootEl2 = _ref12.rootEl, parentEl2 = _ref12.parentEl, sortable = _ref12.sortable, dispatchSortableEvent = _ref12.dispatchSortableEvent, oldIndex2 = _ref12.oldIndex, putSortable2 = _ref12.putSortable;
      var toSortable = putSortable2 || this.sortable;
      if (!evt)
        return;
      var options2 = this.options, children = parentEl2.children;
      if (!dragStarted) {
        if (options2.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }
        toggleClass(dragEl$1, options2.selectedClass, !~multiDragElements.indexOf(dragEl$1));
        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable,
            rootEl: rootEl2,
            name: "select",
            targetEl: dragEl$1,
            originalEvent: evt
          });
          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect), currentIndex = index(dragEl$1);
            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              var n, i;
              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }
              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i]))
                  continue;
                toggleClass(children[i], options2.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable,
                  rootEl: rootEl2,
                  name: "select",
                  targetEl: children[i],
                  originalEvent: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }
          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable,
            rootEl: rootEl2,
            name: "deselect",
            targetEl: dragEl$1,
            originalEvent: evt
          });
        }
      }
      if (dragStarted && this.isMultiDrag) {
        folding = false;
        if ((parentEl2[expando].options.sort || parentEl2 !== rootEl2) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1), multiDragIndex = index(dragEl$1, ":not(." + this.options.selectedClass + ")");
          if (!initialFolding && options2.animation)
            dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();
          if (!initialFolding) {
            if (options2.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function(multiDragElement) {
                multiDragElement.thisAnimationDuration = null;
                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect;
                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect
                  });
                }
              });
            }
            removeMultiDragElements();
            multiDragElements.forEach(function(multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl2.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl2.appendChild(multiDragElement);
              }
              multiDragIndex++;
            });
            if (oldIndex2 === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function(multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });
              if (update) {
                dispatchSortableEvent("update");
                dispatchSortableEvent("sort");
              }
            }
          }
          multiDragElements.forEach(function(multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }
        multiDragSortable = toSortable;
      }
      if (rootEl2 === parentEl2 || putSortable2 && putSortable2.lastPutMode !== "clone") {
        multiDragClones.forEach(function(clone2) {
          clone2.parentNode && clone2.parentNode.removeChild(clone2);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();
      off(document, "pointerup", this._deselectMultiDrag);
      off(document, "mouseup", this._deselectMultiDrag);
      off(document, "touchend", this._deselectMultiDrag);
      off(document, "keydown", this._checkKeyDown);
      off(document, "keyup", this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted)
        return;
      if (multiDragSortable !== this.sortable)
        return;
      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false))
        return;
      if (evt && evt.button !== 0)
        return;
      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: "deselect",
          targetEl: el,
          originalEvent: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: "multiDrag",
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el))
          return;
        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();
          multiDragSortable = sortable;
        }
        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },
      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando], index2 = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index2)
          return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index2, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;
      var oldIndicies = [], newIndicies = [];
      multiDragElements.forEach(function(multiDragElement) {
        oldIndicies.push({
          multiDragElement,
          index: multiDragElement.sortableIndex
        });
        var newIndex2;
        if (folding && multiDragElement !== dragEl$1) {
          newIndex2 = -1;
        } else if (folding) {
          newIndex2 = index(multiDragElement, ":not(." + _this3.options.selectedClass + ")");
        } else {
          newIndex2 = index(multiDragElement);
        }
        newIndicies.push({
          multiDragElement,
          index: newIndex2
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies,
        newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();
        if (key === "ctrl") {
          key = "Control";
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }
        return key;
      }
    }
  });
}
function insertMultiDragElements(clonesInserted, rootEl2) {
  multiDragElements.forEach(function(multiDragElement, i) {
    var target = rootEl2.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
    if (target) {
      rootEl2.insertBefore(multiDragElement, target);
    } else {
      rootEl2.appendChild(multiDragElement);
    }
  });
}
function insertMultiDragClones(elementsInserted, rootEl2) {
  multiDragClones.forEach(function(clone2, i) {
    var target = rootEl2.children[clone2.sortableIndex + (elementsInserted ? Number(i) : 0)];
    if (target) {
      rootEl2.insertBefore(clone2, target);
    } else {
      rootEl2.appendChild(clone2);
    }
  });
}
function removeMultiDragElements() {
  multiDragElements.forEach(function(multiDragElement) {
    if (multiDragElement === dragEl$1)
      return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
var sortable_esm_default = Sortable;

// resources/js/components/book-sort.js
var sortOperations = {
  name(a, b) {
    const aName = a.getAttribute("data-name").trim().toLowerCase();
    const bName = b.getAttribute("data-name").trim().toLowerCase();
    return aName.localeCompare(bName);
  },
  created(a, b) {
    const aTime = Number(a.getAttribute("data-created"));
    const bTime = Number(b.getAttribute("data-created"));
    return bTime - aTime;
  },
  updated(a, b) {
    const aTime = Number(a.getAttribute("data-updated"));
    const bTime = Number(b.getAttribute("data-updated"));
    return bTime - aTime;
  },
  chaptersFirst(a, b) {
    const aType = a.getAttribute("data-type");
    const bType = b.getAttribute("data-type");
    if (aType === bType) {
      return 0;
    }
    return aType === "chapter" ? -1 : 1;
  },
  chaptersLast(a, b) {
    const aType = a.getAttribute("data-type");
    const bType = b.getAttribute("data-type");
    if (aType === bType) {
      return 0;
    }
    return aType === "chapter" ? 1 : -1;
  }
};
var moveActions = {
  up: {
    active(elem2, parent) {
      return !(elem2.previousElementSibling === null && !parent);
    },
    run(elem2, parent) {
      const newSibling = elem2.previousElementSibling || parent;
      newSibling.insertAdjacentElement("beforebegin", elem2);
    }
  },
  down: {
    active(elem2, parent) {
      return !(elem2.nextElementSibling === null && !parent);
    },
    run(elem2, parent) {
      const newSibling = elem2.nextElementSibling || parent;
      newSibling.insertAdjacentElement("afterend", elem2);
    }
  },
  next_book: {
    active(elem2, parent, book) {
      return book.nextElementSibling !== null;
    },
    run(elem2, parent, book) {
      const newList = book.nextElementSibling.querySelector("ul");
      newList.prepend(elem2);
    }
  },
  prev_book: {
    active(elem2, parent, book) {
      return book.previousElementSibling !== null;
    },
    run(elem2, parent, book) {
      const newList = book.previousElementSibling.querySelector("ul");
      newList.appendChild(elem2);
    }
  },
  next_chapter: {
    active(elem2, parent) {
      return elem2.dataset.type === "page" && this.getNextChapter(elem2, parent);
    },
    run(elem2, parent) {
      const nextChapter = this.getNextChapter(elem2, parent);
      nextChapter.querySelector("ul").prepend(elem2);
    },
    getNextChapter(elem2, parent) {
      const topLevel = parent || elem2;
      const topItems = Array.from(topLevel.parentElement.children);
      const index2 = topItems.indexOf(topLevel);
      return topItems.slice(index2 + 1).find((item) => item.dataset.type === "chapter");
    }
  },
  prev_chapter: {
    active(elem2, parent) {
      return elem2.dataset.type === "page" && this.getPrevChapter(elem2, parent);
    },
    run(elem2, parent) {
      const prevChapter = this.getPrevChapter(elem2, parent);
      prevChapter.querySelector("ul").append(elem2);
    },
    getPrevChapter(elem2, parent) {
      const topLevel = parent || elem2;
      const topItems = Array.from(topLevel.parentElement.children);
      const index2 = topItems.indexOf(topLevel);
      return topItems.slice(0, index2).reverse().find((item) => item.dataset.type === "chapter");
    }
  },
  book_end: {
    active(elem2, parent) {
      return parent || parent === null && elem2.nextElementSibling;
    },
    run(elem2, parent, book) {
      book.querySelector("ul").append(elem2);
    }
  },
  book_start: {
    active(elem2, parent) {
      return parent || parent === null && elem2.previousElementSibling;
    },
    run(elem2, parent, book) {
      book.querySelector("ul").prepend(elem2);
    }
  },
  before_chapter: {
    active(elem2, parent) {
      return parent;
    },
    run(elem2, parent) {
      parent.insertAdjacentElement("beforebegin", elem2);
    }
  },
  after_chapter: {
    active(elem2, parent) {
      return parent;
    },
    run(elem2, parent) {
      parent.insertAdjacentElement("afterend", elem2);
    }
  }
};
var BookSort = class extends Component {
  setup() {
    this.container = this.$el;
    this.sortContainer = this.$refs.sortContainer;
    this.input = this.$refs.input;
    sortable_esm_default.mount(new MultiDragPlugin());
    const initialSortBox = this.container.querySelector(".sort-box");
    this.setupBookSortable(initialSortBox);
    this.setupSortPresets();
    this.setupMoveActions();
    window.$events.listen("entity-select-change", this.bookSelect.bind(this));
  }
  /**
   * Set up the handlers for the item-level move buttons.
   */
  setupMoveActions() {
    this.container.addEventListener("click", (event) => {
      if (event.target.matches("[data-move]")) {
        const action = event.target.getAttribute("data-move");
        const sortItem = event.target.closest("[data-id]");
        this.runSortAction(sortItem, action);
      }
    });
    this.updateMoveActionStateForAll();
  }
  /**
   * Set up the handlers for the preset sort type buttons.
   */
  setupSortPresets() {
    let lastSort = "";
    let reverse = false;
    const reversibleTypes = ["name", "created", "updated"];
    this.sortContainer.addEventListener("click", (event) => {
      const sortButton = event.target.closest(".sort-box-options [data-sort]");
      if (!sortButton)
        return;
      event.preventDefault();
      const sortLists = sortButton.closest(".sort-box").querySelectorAll("ul");
      const sort2 = sortButton.getAttribute("data-sort");
      reverse = lastSort === sort2 ? !reverse : false;
      let sortFunction = sortOperations[sort2];
      if (reverse && reversibleTypes.includes(sort2)) {
        sortFunction = function reverseSortOperation(a, b) {
          return 0 - sortOperations[sort2](a, b);
        };
      }
      for (const list of sortLists) {
        const directItems = Array.from(list.children).filter((child) => child.matches("li"));
        directItems.sort(sortFunction).forEach((sortedItem) => {
          list.appendChild(sortedItem);
        });
      }
      lastSort = sort2;
      this.updateMapInput();
    });
  }
  /**
   * Handle book selection from the entity selector.
   * @param {Object} entityInfo
   */
  bookSelect(entityInfo) {
    const alreadyAdded = this.container.querySelector(`[data-type="book"][data-id="${entityInfo.id}"]`) !== null;
    if (alreadyAdded)
      return;
    const entitySortItemUrl = `${entityInfo.link}/sort-item`;
    window.$http.get(entitySortItemUrl).then((resp) => {
      const newBookContainer = htmlToDom(resp.data);
      this.sortContainer.append(newBookContainer);
      this.setupBookSortable(newBookContainer);
      this.updateMoveActionStateForAll();
      const summary = newBookContainer.querySelector("summary");
      summary.focus();
    });
  }
  /**
   * Set up the given book container element to have sortable items.
   * @param {Element} bookContainer
   */
  setupBookSortable(bookContainer) {
    const sortElems = Array.from(bookContainer.querySelectorAll(".sort-list, .sortable-page-sublist"));
    const bookGroupConfig = {
      name: "book",
      pull: ["book", "chapter"],
      put: ["book", "chapter"]
    };
    const chapterGroupConfig = {
      name: "chapter",
      pull: ["book", "chapter"],
      put(toList, fromList, draggedElem) {
        return draggedElem.getAttribute("data-type") === "page";
      }
    };
    for (const sortElem of sortElems) {
      sortable_esm_default.create(sortElem, {
        group: sortElem.classList.contains("sort-list") ? bookGroupConfig : chapterGroupConfig,
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65,
        onSort: () => {
          this.ensureNoNestedChapters();
          this.updateMapInput();
          this.updateMoveActionStateForAll();
        },
        dragClass: "bg-white",
        ghostClass: "primary-background-light",
        multiDrag: true,
        multiDragKey: "Control",
        selectedClass: "sortable-selected"
      });
    }
  }
  /**
   * Handle nested chapters by moving them to the parent book.
   * Needed since sorting with multi-sort only checks group rules based on the active item,
   * not all in group, therefore need to manually check after a sort.
   * Must be done before updating the map input.
   */
  ensureNoNestedChapters() {
    const nestedChapters = this.container.querySelectorAll('[data-type="chapter"] [data-type="chapter"]');
    for (const chapter of nestedChapters) {
      const parentChapter = chapter.parentElement.closest('[data-type="chapter"]');
      parentChapter.insertAdjacentElement("afterend", chapter);
    }
  }
  /**
   * Update the input with our sort data.
   */
  updateMapInput() {
    const pageMap = this.buildEntityMap();
    this.input.value = JSON.stringify(pageMap);
  }
  /**
   * Build up a mapping of entities with their ordering and nesting.
   * @returns {Array}
   */
  buildEntityMap() {
    const entityMap = [];
    const lists = this.container.querySelectorAll(".sort-list");
    for (const list of lists) {
      const bookId = list.closest('[data-type="book"]').getAttribute("data-id");
      const directChildren = Array.from(list.children).filter((elem2) => elem2.matches('[data-type="page"], [data-type="chapter"]'));
      for (let i = 0; i < directChildren.length; i++) {
        this.addBookChildToMap(directChildren[i], i, bookId, entityMap);
      }
    }
    return entityMap;
  }
  /**
   * Parse a sort item and add it to a data-map array.
   * Parses sub0items if existing also.
   * @param {Element} childElem
   * @param {Number} index
   * @param {Number} bookId
   * @param {Array} entityMap
   */
  addBookChildToMap(childElem, index2, bookId, entityMap) {
    const type = childElem.getAttribute("data-type");
    const parentChapter = false;
    const childId = childElem.getAttribute("data-id");
    entityMap.push({
      id: childId,
      sort: index2,
      parentChapter,
      type,
      book: bookId
    });
    const subPages = childElem.querySelectorAll('[data-type="page"]');
    for (let i = 0; i < subPages.length; i++) {
      entityMap.push({
        id: subPages[i].getAttribute("data-id"),
        sort: i,
        parentChapter: childId,
        type: "page",
        book: bookId
      });
    }
  }
  /**
   * Run the given sort action up the provided sort item.
   * @param {Element} item
   * @param {String} action
   */
  runSortAction(item, action) {
    const parentItem = item.parentElement.closest("li[data-id]");
    const parentBook = item.parentElement.closest('[data-type="book"]');
    moveActions[action].run(item, parentItem, parentBook);
    this.updateMapInput();
    this.updateMoveActionStateForAll();
    item.scrollIntoView({ behavior: "smooth", block: "nearest" });
    item.focus();
  }
  /**
   * Update the state of the available move actions on this item.
   * @param {Element} item
   */
  updateMoveActionState(item) {
    const parentItem = item.parentElement.closest("li[data-id]");
    const parentBook = item.parentElement.closest('[data-type="book"]');
    for (const [action, functions] of Object.entries(moveActions)) {
      const moveButton = item.querySelector(`[data-move="${action}"]`);
      moveButton.disabled = !functions.active(item, parentItem, parentBook);
    }
  }
  updateMoveActionStateForAll() {
    const items = this.container.querySelectorAll('[data-type="chapter"],[data-type="page"]');
    for (const item of items) {
      this.updateMoveActionState(item);
    }
  }
};

// resources/js/services/animations.js
var animateStylesCleanupMap = /* @__PURE__ */ new WeakMap();
function animateStyles(element, styles, animTime = 400, onComplete = null) {
  const styleNames = Object.keys(styles);
  for (const style of styleNames) {
    element.style[style] = styles[style][0];
  }
  const cleanup = () => {
    for (const style of styleNames) {
      element.style[style] = null;
    }
    element.style.transition = null;
    element.removeEventListener("transitionend", cleanup);
    animateStylesCleanupMap.delete(element);
    if (onComplete)
      onComplete();
  };
  setTimeout(() => {
    element.style.transition = `all ease-in-out ${animTime}ms`;
    for (const style of styleNames) {
      element.style[style] = styles[style][1];
    }
    element.addEventListener("transitionend", cleanup);
    animateStylesCleanupMap.set(element, cleanup);
  }, 15);
}
function cleanupExistingElementAnimation(element) {
  if (animateStylesCleanupMap.has(element)) {
    const oldCleanup = animateStylesCleanupMap.get(element);
    oldCleanup();
  }
}
function fadeIn(element, animTime = 400, onComplete = null) {
  cleanupExistingElementAnimation(element);
  element.style.display = "block";
  animateStyles(element, {
    opacity: ["0", "1"]
  }, animTime, () => {
    if (onComplete)
      onComplete();
  });
}
function fadeOut(element, animTime = 400, onComplete = null) {
  cleanupExistingElementAnimation(element);
  animateStyles(element, {
    opacity: ["1", "0"]
  }, animTime, () => {
    element.style.display = "none";
    if (onComplete)
      onComplete();
  });
}
function slideUp(element, animTime = 400) {
  cleanupExistingElementAnimation(element);
  const currentHeight = element.getBoundingClientRect().height;
  const computedStyles = getComputedStyle(element);
  const currentPaddingTop = computedStyles.getPropertyValue("padding-top");
  const currentPaddingBottom = computedStyles.getPropertyValue("padding-bottom");
  const animStyles = {
    maxHeight: [`${currentHeight}px`, "0px"],
    overflow: ["hidden", "hidden"],
    paddingTop: [currentPaddingTop, "0px"],
    paddingBottom: [currentPaddingBottom, "0px"]
  };
  animateStyles(element, animStyles, animTime, () => {
    element.style.display = "none";
  });
}
function slideDown(element, animTime = 400) {
  cleanupExistingElementAnimation(element);
  element.style.display = "block";
  const targetHeight = element.getBoundingClientRect().height;
  const computedStyles = getComputedStyle(element);
  const targetPaddingTop = computedStyles.getPropertyValue("padding-top");
  const targetPaddingBottom = computedStyles.getPropertyValue("padding-bottom");
  const animStyles = {
    maxHeight: ["0px", `${targetHeight}px`],
    overflow: ["hidden", "hidden"],
    paddingTop: ["0px", targetPaddingTop],
    paddingBottom: ["0px", targetPaddingBottom]
  };
  animateStyles(element, animStyles, animTime);
}
function transitionHeight(element, animTime = 400) {
  const startHeight = element.getBoundingClientRect().height;
  const initialComputedStyles = getComputedStyle(element);
  const startPaddingTop = initialComputedStyles.getPropertyValue("padding-top");
  const startPaddingBottom = initialComputedStyles.getPropertyValue("padding-bottom");
  return () => {
    cleanupExistingElementAnimation(element);
    const targetHeight = element.getBoundingClientRect().height;
    const computedStyles = getComputedStyle(element);
    const targetPaddingTop = computedStyles.getPropertyValue("padding-top");
    const targetPaddingBottom = computedStyles.getPropertyValue("padding-bottom");
    const animStyles = {
      height: [`${startHeight}px`, `${targetHeight}px`],
      overflow: ["hidden", "hidden"],
      paddingTop: [startPaddingTop, targetPaddingTop],
      paddingBottom: [startPaddingBottom, targetPaddingBottom]
    };
    animateStyles(element, animStyles, animTime);
  };
}

// resources/js/components/chapter-contents.js
var ChapterContents = class extends Component {
  setup() {
    this.list = this.$refs.list;
    this.toggle = this.$refs.toggle;
    this.isOpen = this.toggle.classList.contains("open");
    this.toggle.addEventListener("click", this.click.bind(this));
  }
  open() {
    this.toggle.classList.add("open");
    this.toggle.setAttribute("aria-expanded", "true");
    slideDown(this.list, 180);
    this.isOpen = true;
  }
  close() {
    this.toggle.classList.remove("open");
    this.toggle.setAttribute("aria-expanded", "false");
    slideUp(this.list, 180);
    this.isOpen = false;
  }
  click(event) {
    event.preventDefault();
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
};

// resources/js/components/code-editor.js
var CodeEditor = class extends Component {
  constructor() {
    super(...arguments);
    /**
     * @type {null|SimpleEditorInterface}
     */
    __publicField(this, "editor", null);
    /**
     * @type {?Function}
     */
    __publicField(this, "saveCallback", null);
    /**
     * @type {?Function}
     */
    __publicField(this, "cancelCallback", null);
    __publicField(this, "history", {});
    __publicField(this, "historyKey", "code_history");
  }
  setup() {
    this.container = this.$refs.container;
    this.popup = this.$el;
    this.editorInput = this.$refs.editor;
    this.languageButtons = this.$manyRefs.languageButton;
    this.languageOptionsContainer = this.$refs.languageOptionsContainer;
    this.saveButton = this.$refs.saveButton;
    this.languageInput = this.$refs.languageInput;
    this.historyDropDown = this.$refs.historyDropDown;
    this.historyList = this.$refs.historyList;
    this.favourites = new Set(this.$opts.favourites.split(","));
    this.setupListeners();
    this.setupFavourites();
  }
  setupListeners() {
    this.container.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.key === "Enter") {
        this.save();
      }
    });
    onSelect(this.languageButtons, (event) => {
      const language = event.target.dataset.lang;
      this.languageInput.value = language;
      this.languageInputChange(language);
    });
    onEnterPress(this.languageInput, () => this.save());
    this.languageInput.addEventListener("input", () => this.languageInputChange(this.languageInput.value));
    onSelect(this.saveButton, () => this.save());
    onChildEvent(this.historyList, "button", "click", (event, elem2) => {
      event.preventDefault();
      const historyTime = elem2.dataset.time;
      if (this.editor) {
        this.editor.setContent(this.history[historyTime]);
      }
    });
  }
  setupFavourites() {
    for (const button of this.languageButtons) {
      this.setupFavouritesForButton(button);
    }
    this.sortLanguageList();
  }
  /**
   * @param {HTMLButtonElement} button
   */
  setupFavouritesForButton(button) {
    const language = button.dataset.lang;
    let isFavorite = this.favourites.has(language);
    button.setAttribute("data-favourite", isFavorite ? "true" : "false");
    onChildEvent(button.parentElement, ".lang-option-favorite-toggle", "click", () => {
      isFavorite = !isFavorite;
      if (isFavorite) {
        this.favourites.add(language);
      } else {
        this.favourites.delete(language);
      }
      button.setAttribute("data-favourite", isFavorite ? "true" : "false");
      window.$http.patch("/preferences/update-code-language-favourite", {
        language,
        active: isFavorite
      });
      this.sortLanguageList();
      if (isFavorite) {
        button.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    });
  }
  sortLanguageList() {
    const sortedParents = this.languageButtons.sort((a, b) => {
      const aFav = a.dataset.favourite === "true";
      const bFav = b.dataset.favourite === "true";
      if (aFav && !bFav) {
        return -1;
      }
      if (bFav && !aFav) {
        return 1;
      }
      return a.dataset.lang > b.dataset.lang ? 1 : -1;
    }).map((button) => button.parentElement);
    for (const parent of sortedParents) {
      this.languageOptionsContainer.append(parent);
    }
  }
  save() {
    if (this.saveCallback) {
      this.saveCallback(this.editor.getContent(), this.languageInput.value);
    }
    this.hide();
  }
  async open(code, language, saveCallback, cancelCallback) {
    this.languageInput.value = language;
    this.saveCallback = saveCallback;
    this.cancelCallback = cancelCallback;
    await this.show();
    this.languageInputChange(language);
    this.editor.setContent(code);
  }
  async show() {
    const Code = await window.importVersioned("code");
    if (!this.editor) {
      this.editor = Code.popupEditor(this.editorInput, this.languageInput.value);
    }
    this.loadHistory();
    this.getPopup().show(() => {
      this.editor.focus();
    }, () => {
      this.addHistory();
      if (this.cancelCallback) {
        this.cancelCallback();
      }
    });
  }
  hide() {
    this.getPopup().hide();
    this.addHistory();
  }
  /**
   * @returns {Popup}
   */
  getPopup() {
    return window.$components.firstOnElement(this.popup, "popup");
  }
  async updateEditorMode(language) {
    this.editor.setMode(language, this.editor.getContent());
  }
  languageInputChange(language) {
    this.updateEditorMode(language);
    const inputLang = language.toLowerCase();
    for (const link of this.languageButtons) {
      const lang = link.dataset.lang.toLowerCase().trim();
      const isMatch = inputLang === lang;
      link.classList.toggle("active", isMatch);
      if (isMatch) {
        link.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    }
  }
  loadHistory() {
    this.history = JSON.parse(window.sessionStorage.getItem(this.historyKey) || "{}");
    const historyKeys = Object.keys(this.history).reverse();
    this.historyDropDown.classList.toggle("hidden", historyKeys.length === 0);
    this.historyList.innerHTML = historyKeys.map((key) => {
      const localTime = new Date(parseInt(key, 10)).toLocaleTimeString();
      return `<li><button type="button" data-time="${key}" class="text-item">${localTime}</button></li>`;
    }).join("");
  }
  addHistory() {
    if (!this.editor)
      return;
    const code = this.editor.getContent();
    if (!code)
      return;
    const lastHistoryKey = Object.keys(this.history).pop();
    if (this.history[lastHistoryKey] === code)
      return;
    this.history[String(Date.now())] = code;
    const historyString = JSON.stringify(this.history);
    window.sessionStorage.setItem(this.historyKey, historyString);
  }
};

// resources/js/components/code-highlighter.js
var CodeHighlighter = class extends Component {
  setup() {
    const container = this.$el;
    const codeBlocks = container.querySelectorAll("pre");
    if (codeBlocks.length > 0) {
      window.importVersioned("code").then((Code) => {
        Code.highlightWithin(container);
      });
    }
  }
};

// resources/js/components/code-textarea.js
var CodeTextarea = class extends Component {
  async setup() {
    const { mode } = this.$opts;
    const Code = await window.importVersioned("code");
    Code.inlineEditor(this.$el, mode);
  }
};

// resources/js/components/collapsible.js
var Collapsible = class extends Component {
  setup() {
    this.container = this.$el;
    this.trigger = this.$refs.trigger;
    this.content = this.$refs.content;
    if (this.trigger) {
      this.trigger.addEventListener("click", this.toggle.bind(this));
      this.openIfContainsError();
    }
  }
  open() {
    this.container.classList.add("open");
    this.trigger.setAttribute("aria-expanded", "true");
    slideDown(this.content, 300);
  }
  close() {
    this.container.classList.remove("open");
    this.trigger.setAttribute("aria-expanded", "false");
    slideUp(this.content, 300);
  }
  toggle() {
    if (this.container.classList.contains("open")) {
      this.close();
    } else {
      this.open();
    }
  }
  openIfContainsError() {
    const error3 = this.content.querySelector(".text-neg.text-small");
    if (error3) {
      this.open();
    }
  }
};

// resources/js/components/confirm-dialog.js
var ConfirmDialog = class extends Component {
  setup() {
    this.container = this.$el;
    this.confirmButton = this.$refs.confirm;
    this.res = null;
    onSelect(this.confirmButton, () => {
      this.sendResult(true);
      this.getPopup().hide();
    });
  }
  show() {
    this.getPopup().show(null, () => {
      this.sendResult(false);
    });
    return new Promise((res) => {
      this.res = res;
    });
  }
  /**
   * @returns {Popup}
   */
  getPopup() {
    return window.$components.firstOnElement(this.container, "popup");
  }
  /**
   * @param {Boolean} result
   */
  sendResult(result) {
    if (this.res) {
      this.res(result);
      this.res = null;
    }
  }
};

// resources/js/components/custom-checkbox.js
var CustomCheckbox = class extends Component {
  setup() {
    this.container = this.$el;
    this.checkbox = this.container.querySelector("input[type=checkbox]");
    this.display = this.container.querySelector('[role="checkbox"]');
    this.checkbox.addEventListener("change", this.stateChange.bind(this));
    this.container.addEventListener("keydown", this.onKeyDown.bind(this));
  }
  onKeyDown(event) {
    const isEnterOrSpace = event.key === " " || event.key === "Enter";
    if (isEnterOrSpace) {
      event.preventDefault();
      this.toggle();
    }
  }
  toggle() {
    this.checkbox.checked = !this.checkbox.checked;
    this.checkbox.dispatchEvent(new Event("change"));
    this.stateChange();
  }
  stateChange() {
    const checked = this.checkbox.checked ? "true" : "false";
    this.display.setAttribute("aria-checked", checked);
  }
};

// resources/js/components/details-highlighter.js
var DetailsHighlighter = class extends Component {
  setup() {
    this.container = this.$el;
    this.dealtWith = false;
    this.container.addEventListener("toggle", this.onToggle.bind(this));
  }
  onToggle() {
    if (this.dealtWith)
      return;
    if (this.container.querySelector("pre")) {
      window.importVersioned("code").then((Code) => {
        Code.highlightWithin(this.container);
      });
    }
    this.dealtWith = true;
  }
};

// resources/js/components/dropdown.js
var Dropdown = class extends Component {
  setup() {
    this.container = this.$el;
    this.menu = this.$refs.menu;
    this.toggle = this.$refs.toggle;
    this.moveMenu = this.$opts.moveMenu;
    this.bubbleEscapes = this.$opts.bubbleEscapes === "true";
    this.direction = document.dir === "rtl" ? "right" : "left";
    this.body = document.body;
    this.showing = false;
    this.hide = this.hide.bind(this);
    this.setupListeners();
  }
  show(event = null) {
    this.hideAll();
    this.menu.style.display = "block";
    this.menu.classList.add("anim", "menuIn");
    this.toggle.setAttribute("aria-expanded", "true");
    const menuOriginalRect = this.menu.getBoundingClientRect();
    let heightOffset = 0;
    const toggleHeight = this.toggle.getBoundingClientRect().height;
    const dropUpwards = menuOriginalRect.bottom > window.innerHeight;
    const containerRect = this.container.getBoundingClientRect();
    if (this.moveMenu) {
      this.body.appendChild(this.menu);
      this.menu.style.position = "fixed";
      this.menu.style.width = `${menuOriginalRect.width}px`;
      this.menu.style.left = `${menuOriginalRect.left}px`;
      if (dropUpwards) {
        heightOffset = window.innerHeight - menuOriginalRect.top - toggleHeight / 2;
      } else {
        heightOffset = menuOriginalRect.top;
      }
    }
    if (dropUpwards) {
      this.menu.style.top = "initial";
      this.menu.style.bottom = `${heightOffset}px`;
      const maxHeight = window.innerHeight - 40 - (window.innerHeight - containerRect.bottom);
      this.menu.style.maxHeight = `${Math.floor(maxHeight)}px`;
    } else {
      this.menu.style.top = `${heightOffset}px`;
      this.menu.style.bottom = "initial";
      const maxHeight = window.innerHeight - 40 - containerRect.top;
      this.menu.style.maxHeight = `${Math.floor(maxHeight)}px`;
    }
    this.menu.addEventListener("mouseleave", this.hide);
    window.addEventListener("click", (clickEvent) => {
      if (!this.menu.contains(clickEvent.target)) {
        this.hide();
      }
    });
    const input = this.menu.querySelector("input");
    if (input !== null)
      input.focus();
    this.showing = true;
    const showEvent = new Event("show");
    this.container.dispatchEvent(showEvent);
    if (event) {
      event.stopPropagation();
    }
  }
  hideAll() {
    for (const dropdown of window.$components.get("dropdown")) {
      dropdown.hide();
    }
  }
  hide() {
    this.menu.style.display = "none";
    this.menu.classList.remove("anim", "menuIn");
    this.toggle.setAttribute("aria-expanded", "false");
    this.menu.style.top = "";
    this.menu.style.bottom = "";
    this.menu.style.maxHeight = "";
    if (this.moveMenu) {
      this.menu.style.position = "";
      this.menu.style[this.direction] = "";
      this.menu.style.width = "";
      this.menu.style.left = "";
      this.container.appendChild(this.menu);
    }
    this.showing = false;
  }
  setupListeners() {
    const keyboardNavHandler = new KeyboardNavigationHandler(this.container, (event) => {
      this.hide();
      this.toggle.focus();
      if (!this.bubbleEscapes) {
        event.stopPropagation();
      }
    }, (event) => {
      if (event.target.nodeName === "INPUT") {
        event.preventDefault();
        event.stopPropagation();
      }
      this.hide();
    });
    if (this.moveMenu) {
      keyboardNavHandler.shareHandlingToEl(this.menu);
    }
    this.container.addEventListener("click", (event) => {
      const possibleChildren = Array.from(this.menu.querySelectorAll("a"));
      if (possibleChildren.includes(event.target)) {
        this.hide();
      }
    });
    onSelect(this.toggle, (event) => {
      event.stopPropagation();
      event.preventDefault();
      this.show(event);
      if (event instanceof KeyboardEvent) {
        keyboardNavHandler.focusNext();
      }
    });
  }
};

// resources/js/components/dropdown-search.js
var DropdownSearch = class extends Component {
  setup() {
    this.elem = this.$el;
    this.searchInput = this.$refs.searchInput;
    this.loadingElem = this.$refs.loading;
    this.listContainerElem = this.$refs.listContainer;
    this.localSearchSelector = this.$opts.localSearchSelector;
    this.url = this.$opts.url;
    this.elem.addEventListener("show", this.onShow.bind(this));
    this.searchInput.addEventListener("input", this.onSearch.bind(this));
    this.runAjaxSearch = debounce(this.runAjaxSearch, 300, false);
  }
  onShow() {
    this.loadList();
  }
  onSearch() {
    const input = this.searchInput.value.toLowerCase().trim();
    if (this.localSearchSelector) {
      this.runLocalSearch(input);
    } else {
      this.toggleLoading(true);
      this.listContainerElem.innerHTML = "";
      this.runAjaxSearch(input);
    }
  }
  runAjaxSearch(searchTerm) {
    this.loadList(searchTerm);
  }
  runLocalSearch(searchTerm) {
    const listItems = this.listContainerElem.querySelectorAll(this.localSearchSelector);
    for (const listItem of listItems) {
      const match = !searchTerm || listItem.textContent.toLowerCase().includes(searchTerm);
      listItem.style.display = match ? "flex" : "none";
      listItem.classList.toggle("hidden", !match);
    }
  }
  async loadList(searchTerm = "") {
    this.listContainerElem.innerHTML = "";
    this.toggleLoading(true);
    try {
      const resp = await window.$http.get(this.getAjaxUrl(searchTerm));
      const animate = transitionHeight(this.listContainerElem, 80);
      this.listContainerElem.innerHTML = resp.data;
      animate();
    } catch (err) {
      console.error(err);
    }
    this.toggleLoading(false);
    if (this.localSearchSelector) {
      this.onSearch();
    }
  }
  getAjaxUrl(searchTerm = null) {
    if (!searchTerm) {
      return this.url;
    }
    const joiner = this.url.includes("?") ? "&" : "?";
    return `${this.url}${joiner}search=${encodeURIComponent(searchTerm)}`;
  }
  toggleLoading(show2 = false) {
    this.loadingElem.style.display = show2 ? "block" : "none";
  }
};

// resources/js/services/clipboard.js
var Clipboard = class {
  /**
   * Constructor
   * @param {DataTransfer} clipboardData
   */
  constructor(clipboardData) {
    this.data = clipboardData;
  }
  /**
   * Check if the clipboard has any items.
   */
  hasItems() {
    return Boolean(this.data) && Boolean(this.data.types) && this.data.types.length > 0;
  }
  /**
   * Check if the given event has tabular-looking data in the clipboard.
   * @return {boolean}
   */
  containsTabularData() {
    const rtfData = this.data.getData("text/rtf");
    return rtfData && rtfData.includes("\\trowd");
  }
  /**
   * Get the images that are in the clipboard data.
   * @return {Array<File>}
   */
  getImages() {
    const { types } = this.data;
    const images = [];
    for (const type of types) {
      if (type.includes("image")) {
        const item = this.data.getData(type);
        images.push(item.getAsFile());
      }
    }
    const imageFiles = this.getFiles().filter((f) => f.type.includes("image"));
    images.push(...imageFiles);
    return images;
  }
  /**
   * Get the files included in the clipboard data.
   * @return {File[]}
   */
  getFiles() {
    const { files } = this.data;
    return [...files];
  }
};
async function copyTextToClipboard(text) {
  if (window.isSecureContext && navigator.clipboard) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const tempInput = document.createElement("textarea");
  tempInput.style = "position: absolute; left: -1000px; top: -1000px;";
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

// resources/js/components/dropzone.js
var Dropzone = class extends Component {
  setup() {
    this.container = this.$el;
    this.statusArea = this.$refs.statusArea;
    this.dropTarget = this.$refs.dropTarget;
    this.selectButtons = this.$manyRefs.selectButton || [];
    this.isActive = true;
    this.url = this.$opts.url;
    this.method = (this.$opts.method || "post").toUpperCase();
    this.successMessage = this.$opts.successMessage;
    this.errorMessage = this.$opts.errorMessage;
    this.uploadLimitMb = Number(this.$opts.uploadLimit);
    this.uploadLimitMessage = this.$opts.uploadLimitMessage;
    this.zoneText = this.$opts.zoneText;
    this.fileAcceptTypes = this.$opts.fileAccept;
    this.allowMultiple = this.$opts.allowMultiple === "true";
    this.setupListeners();
  }
  /**
   * Public method to allow external disabling/enabling of this drag+drop dropzone.
   * @param {Boolean} active
   */
  toggleActive(active) {
    this.isActive = active;
  }
  setupListeners() {
    onSelect(this.selectButtons, this.manualSelectHandler.bind(this));
    this.setupDropTargetHandlers();
  }
  setupDropTargetHandlers() {
    let depth = 0;
    const reset = () => {
      this.hideOverlay();
      depth = 0;
    };
    this.dropTarget.addEventListener("dragenter", (event) => {
      event.preventDefault();
      depth += 1;
      if (depth === 1 && this.isActive) {
        this.showOverlay();
      }
    });
    this.dropTarget.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    this.dropTarget.addEventListener("dragend", reset);
    this.dropTarget.addEventListener("dragleave", () => {
      depth -= 1;
      if (depth === 0) {
        reset();
      }
    });
    this.dropTarget.addEventListener("drop", (event) => {
      event.preventDefault();
      reset();
      if (!this.isActive) {
        return;
      }
      const clipboard = new Clipboard(event.dataTransfer);
      const files = clipboard.getFiles();
      for (const file of files) {
        this.createUploadFromFile(file);
      }
    });
  }
  manualSelectHandler() {
    const input = elem("input", {
      type: "file",
      style: "left: -400px; visibility: hidden; position: fixed;",
      accept: this.fileAcceptTypes,
      multiple: this.allowMultiple ? "" : null
    });
    this.container.append(input);
    input.click();
    input.addEventListener("change", () => {
      for (const file of input.files) {
        this.createUploadFromFile(file);
      }
      input.remove();
    });
  }
  showOverlay() {
    const overlay = this.dropTarget.querySelector(".dropzone-overlay");
    if (!overlay) {
      const zoneElem = elem("div", { class: "dropzone-overlay" }, [this.zoneText]);
      this.dropTarget.append(zoneElem);
    }
  }
  hideOverlay() {
    const overlay = this.dropTarget.querySelector(".dropzone-overlay");
    if (overlay) {
      overlay.remove();
    }
  }
  /**
   * @param {File} file
   * @return {Upload}
   */
  createUploadFromFile(file) {
    const {
      dom,
      status,
      progress,
      dismiss
    } = this.createDomForFile(file);
    this.statusArea.append(dom);
    const component = this;
    const upload2 = {
      file,
      dom,
      updateProgress(percentComplete) {
        progress.textContent = `${percentComplete}%`;
        progress.style.width = `${percentComplete}%`;
      },
      markError(message) {
        status.setAttribute("data-status", "error");
        status.textContent = message;
        removeLoading(dom);
        this.updateProgress(100);
      },
      markSuccess(message) {
        status.setAttribute("data-status", "success");
        status.textContent = message;
        removeLoading(dom);
        setTimeout(dismiss, 2400);
        component.$emit("upload-success", {
          name: file.name
        });
      }
    };
    if (file.size > this.uploadLimitMb * 1e6) {
      upload2.markError(this.uploadLimitMessage);
      return upload2;
    }
    this.startXhrForUpload(upload2);
    return upload2;
  }
  /**
   * @param {Upload} upload
   */
  startXhrForUpload(upload2) {
    const formData = new FormData();
    formData.append("file", upload2.file, upload2.file.name);
    if (this.method !== "POST") {
      formData.append("_method", this.method);
    }
    const component = this;
    const req = window.$http.createXMLHttpRequest("POST", this.url, {
      error() {
        upload2.markError(component.errorMessage);
      },
      readystatechange() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          upload2.markSuccess(component.successMessage);
        } else if (this.readyState === XMLHttpRequest.DONE && this.status >= 400) {
          const content = this.responseText;
          const data = content.startsWith("{") ? JSON.parse(content) : { message: content };
          const message = data?.message || data?.error || content;
          upload2.markError(message);
        }
      }
    });
    req.upload.addEventListener("progress", (evt) => {
      const percent = Math.min(Math.ceil(evt.loaded / evt.total * 100), 100);
      upload2.updateProgress(percent);
    });
    req.setRequestHeader("Accept", "application/json");
    req.send(formData);
  }
  /**
   * @param {File} file
   * @return {{image: Element, dom: Element, progress: Element, status: Element, dismiss: function}}
   */
  createDomForFile(file) {
    const image = elem("img", { src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M9.224 7.373a.924.924 0 0 0-.92.925l-.006 7.404c0 .509.412.925.921.925h5.557a.928.928 0 0 0 .926-.925v-5.553l-2.777-2.776Zm3.239 3.239V8.067l2.545 2.545z' style='fill:%23000;fill-opacity:.75'/%3E%3C/svg%3E" });
    const status = elem("div", { class: "dropzone-file-item-status" }, []);
    const progress = elem("div", { class: "dropzone-file-item-progress" });
    const imageWrap = elem("div", { class: "dropzone-file-item-image-wrap" }, [image]);
    const dom = elem("div", { class: "dropzone-file-item" }, [
      imageWrap,
      elem("div", { class: "dropzone-file-item-text-wrap" }, [
        elem("div", { class: "dropzone-file-item-label" }, [file.name]),
        getLoading(),
        status
      ]),
      progress
    ]);
    if (file.type.startsWith("image/")) {
      image.src = URL.createObjectURL(file);
    }
    const dismiss = () => {
      dom.classList.add("dismiss");
      dom.addEventListener("animationend", () => {
        dom.remove();
      });
    };
    dom.addEventListener("click", dismiss);
    return {
      dom,
      progress,
      status,
      dismiss
    };
  }
};

// resources/js/components/editor-toolbox.js
var EditorToolbox = class extends Component {
  setup() {
    this.container = this.$el;
    this.buttons = this.$manyRefs.tabButton;
    this.contentElements = this.$manyRefs.tabContent;
    this.toggleButton = this.$refs.toggle;
    this.editorWrapEl = this.container.closest(".page-editor");
    this.setupListeners();
    this.setActiveTab(this.contentElements[0].dataset.tabContent);
  }
  setupListeners() {
    this.toggleButton.addEventListener("click", () => this.toggle());
    this.container.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (this.buttons.includes(button)) {
        const name = button.dataset.tab;
        this.setActiveTab(name, true);
      }
    });
  }
  toggle() {
    this.container.classList.toggle("open");
    const isOpen = this.container.classList.contains("open");
    this.toggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    this.editorWrapEl.classList.toggle("toolbox-open", isOpen);
  }
  setActiveTab(tabName, openToolbox = false) {
    for (const button of this.buttons) {
      button.classList.remove("active");
      const bName = button.dataset.tab;
      if (bName === tabName)
        button.classList.add("active");
    }
    for (const contentEl of this.contentElements) {
      contentEl.style.display = "none";
      const cName = contentEl.dataset.tabContent;
      if (cName === tabName)
        contentEl.style.display = "block";
    }
    if (openToolbox && !this.container.classList.contains("open")) {
      this.toggle();
    }
  }
};

// resources/js/components/entity-permissions.js
var EntityPermissions = class extends Component {
  setup() {
    this.container = this.$el;
    this.entityType = this.$opts.entityType;
    this.everyoneInheritToggle = this.$refs.everyoneInherit;
    this.roleSelect = this.$refs.roleSelect;
    this.roleContainer = this.$refs.roleContainer;
    this.setupListeners();
  }
  setupListeners() {
    this.everyoneInheritToggle.addEventListener("change", (event) => {
      const inherit = event.target.checked;
      const permissions = document.querySelectorAll('input[name^="permissions[0]["]');
      for (const permission of permissions) {
        permission.disabled = inherit;
        permission.checked = false;
      }
    });
    this.container.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (button && button.dataset.roleId) {
        this.removeRowOnButtonClick(button);
      }
    });
    this.roleSelect.addEventListener("change", () => {
      const roleId = this.roleSelect.value;
      if (roleId) {
        this.addRoleRow(roleId);
      }
    });
  }
  async addRoleRow(roleId) {
    this.roleSelect.disabled = true;
    const option2 = this.roleSelect.querySelector(`option[value="${roleId}"]`);
    if (option2) {
      option2.remove();
    }
    const resp = await window.$http.get(`/permissions/form-row/${this.entityType}/${roleId}`);
    const row = htmlToDom(resp.data);
    this.roleContainer.append(row);
    this.roleSelect.disabled = false;
  }
  removeRowOnButtonClick(button) {
    const row = button.closest(".item-list-row");
    const { roleId } = button.dataset;
    const { roleName } = button.dataset;
    const option2 = document.createElement("option");
    option2.value = roleId;
    option2.textContent = roleName;
    this.roleSelect.append(option2);
    row.remove();
  }
};

// resources/js/components/entity-search.js
var EntitySearch = class extends Component {
  setup() {
    this.entityId = this.$opts.entityId;
    this.entityType = this.$opts.entityType;
    this.contentView = this.$refs.contentView;
    this.searchView = this.$refs.searchView;
    this.searchResults = this.$refs.searchResults;
    this.searchInput = this.$refs.searchInput;
    this.searchForm = this.$refs.searchForm;
    this.clearButton = this.$refs.clearButton;
    this.loadingBlock = this.$refs.loadingBlock;
    this.setupListeners();
  }
  setupListeners() {
    this.searchInput.addEventListener("change", this.runSearch.bind(this));
    this.searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.runSearch();
    });
    onSelect(this.clearButton, this.clearSearch.bind(this));
  }
  runSearch() {
    const term = this.searchInput.value.trim();
    if (term.length === 0) {
      this.clearSearch();
      return;
    }
    this.searchView.classList.remove("hidden");
    this.contentView.classList.add("hidden");
    this.loadingBlock.classList.remove("hidden");
    const url = window.baseUrl(`/search/${this.entityType}/${this.entityId}`);
    window.$http.get(url, { term }).then((resp) => {
      this.searchResults.innerHTML = resp.data;
    }).catch(console.error).then(() => {
      this.loadingBlock.classList.add("hidden");
    });
  }
  clearSearch() {
    this.searchView.classList.add("hidden");
    this.contentView.classList.remove("hidden");
    this.loadingBlock.classList.add("hidden");
    this.searchInput.value = "";
  }
};

// resources/js/components/entity-selector.js
var EntitySelector = class extends Component {
  setup() {
    this.elem = this.$el;
    this.input = this.$refs.input;
    this.searchInput = this.$refs.search;
    this.loading = this.$refs.loading;
    this.resultsContainer = this.$refs.results;
    this.searchOptions = {
      entityTypes: this.$opts.entityTypes || "page,book,chapter",
      entityPermission: this.$opts.entityPermission || "view",
      searchEndpoint: this.$opts.searchEndpoint || "",
      initialValue: this.searchInput.value || ""
    };
    this.search = "";
    this.lastClick = 0;
    this.setupListeners();
    this.showLoading();
    if (this.searchOptions.searchEndpoint) {
      this.initialLoad();
    }
  }
  /**
   * @param {EntitySelectorSearchOptions} options
   */
  configureSearchOptions(options2) {
    Object.assign(this.searchOptions, options2);
    this.reset();
    this.searchInput.value = this.searchOptions.initialValue;
  }
  setupListeners() {
    this.elem.addEventListener("click", this.onClick.bind(this));
    let lastSearch = 0;
    this.searchInput.addEventListener("input", () => {
      lastSearch = Date.now();
      this.showLoading();
      setTimeout(() => {
        if (Date.now() - lastSearch < 199)
          return;
        this.searchEntities(this.searchInput.value);
      }, 200);
    });
    this.searchInput.addEventListener("keydown", (event) => {
      if (event.keyCode === 13)
        event.preventDefault();
    });
    onChildEvent(this.$el, "[data-entity-type]", "keydown", (event) => {
      if (event.ctrlKey && event.code === "Enter") {
        const form = this.$el.closest("form");
        if (form) {
          form.submit();
          event.preventDefault();
          return;
        }
      }
      if (event.code === "ArrowDown") {
        this.focusAdjacent(true);
      }
      if (event.code === "ArrowUp") {
        this.focusAdjacent(false);
      }
    });
    this.searchInput.addEventListener("keydown", (event) => {
      if (event.code === "ArrowDown") {
        this.focusAdjacent(true);
      }
    });
  }
  focusAdjacent(forward = true) {
    const items = Array.from(this.resultsContainer.querySelectorAll("[data-entity-type]"));
    const selectedIndex = items.indexOf(document.activeElement);
    const newItem = items[selectedIndex + (forward ? 1 : -1)] || items[0];
    if (newItem) {
      newItem.focus();
    }
  }
  reset() {
    this.searchInput.value = "";
    this.showLoading();
    this.initialLoad();
  }
  focusSearch() {
    this.searchInput.focus();
  }
  showLoading() {
    this.loading.style.display = "block";
    this.resultsContainer.style.display = "none";
  }
  hideLoading() {
    this.loading.style.display = "none";
    this.resultsContainer.style.display = "block";
  }
  initialLoad() {
    if (!this.searchOptions.searchEndpoint) {
      throw new Error("Search endpoint not set for entity-selector load");
    }
    if (this.searchOptions.initialValue) {
      this.searchEntities(this.searchOptions.initialValue);
      return;
    }
    window.$http.get(this.searchUrl()).then((resp) => {
      this.resultsContainer.innerHTML = resp.data;
      this.hideLoading();
    });
  }
  searchUrl() {
    const query = `types=${encodeURIComponent(this.searchOptions.entityTypes)}&permission=${encodeURIComponent(this.searchOptions.entityPermission)}`;
    return `${this.searchOptions.searchEndpoint}?${query}`;
  }
  searchEntities(searchTerm) {
    if (!this.searchOptions.searchEndpoint) {
      throw new Error("Search endpoint not set for entity-selector load");
    }
    this.input.value = "";
    const url = `${this.searchUrl()}&term=${encodeURIComponent(searchTerm)}`;
    window.$http.get(url).then((resp) => {
      this.resultsContainer.innerHTML = resp.data;
      this.hideLoading();
    });
  }
  isDoubleClick() {
    const now = Date.now();
    const answer = now - this.lastClick < 300;
    this.lastClick = now;
    return answer;
  }
  onClick(event) {
    const listItem = event.target.closest("[data-entity-type]");
    if (listItem) {
      event.preventDefault();
      event.stopPropagation();
      this.selectItem(listItem);
    }
  }
  selectItem(item) {
    const isDblClick = this.isDoubleClick();
    const type = item.getAttribute("data-entity-type");
    const id = item.getAttribute("data-entity-id");
    const isSelected = !item.classList.contains("selected") || isDblClick;
    this.unselectAll();
    this.input.value = isSelected ? `${type}:${id}` : "";
    const link = item.getAttribute("href");
    const name = item.querySelector(".entity-list-item-name").textContent;
    const data = { id: Number(id), name, link };
    if (isSelected) {
      item.classList.add("selected");
    } else {
      window.$events.emit("entity-select-change", null);
    }
    if (!isDblClick && !isSelected)
      return;
    if (isDblClick) {
      this.confirmSelection(data);
    }
    if (isSelected) {
      window.$events.emit("entity-select-change", data);
    }
  }
  confirmSelection(data) {
    window.$events.emit("entity-select-confirm", data);
  }
  unselectAll() {
    const selected = this.elem.querySelectorAll(".selected");
    for (const selectedElem of selected) {
      selectedElem.classList.remove("selected", "primary-background");
    }
  }
};

// resources/js/components/entity-selector-popup.js
var EntitySelectorPopup = class extends Component {
  setup() {
    this.container = this.$el;
    this.selectButton = this.$refs.select;
    this.selectorEl = this.$refs.selector;
    this.callback = null;
    this.selection = null;
    this.selectButton.addEventListener("click", this.onSelectButtonClick.bind(this));
    window.$events.listen("entity-select-change", this.onSelectionChange.bind(this));
    window.$events.listen("entity-select-confirm", this.handleConfirmedSelection.bind(this));
  }
  /**
   * Show the selector popup.
   * @param {Function} callback
   * @param {EntitySelectorSearchOptions} searchOptions
   */
  show(callback, searchOptions = {}) {
    this.callback = callback;
    this.getSelector().configureSearchOptions(searchOptions);
    this.getPopup().show();
    this.getSelector().focusSearch();
  }
  hide() {
    this.getPopup().hide();
  }
  /**
   * @returns {Popup}
   */
  getPopup() {
    return window.$components.firstOnElement(this.container, "popup");
  }
  /**
   * @returns {EntitySelector}
   */
  getSelector() {
    return window.$components.firstOnElement(this.selectorEl, "entity-selector");
  }
  onSelectButtonClick() {
    this.handleConfirmedSelection(this.selection);
  }
  onSelectionChange(entity) {
    this.selection = entity;
    if (entity === null) {
      this.selectButton.setAttribute("disabled", "true");
    } else {
      this.selectButton.removeAttribute("disabled");
    }
  }
  handleConfirmedSelection(entity) {
    this.hide();
    this.getSelector().reset();
    if (this.callback && entity)
      this.callback(entity);
  }
};

// resources/js/components/event-emit-select.js
var EventEmitSelect = class extends Component {
  setup() {
    this.container = this.$el;
    this.name = this.$opts.name;
    onSelect(this.$el, () => {
      this.$emit(this.name, this.$opts);
    });
  }
};

// resources/js/components/expand-toggle.js
var ExpandToggle = class extends Component {
  setup() {
    this.targetSelector = this.$opts.targetSelector;
    this.isOpen = this.$opts.isOpen === "true";
    this.updateEndpoint = this.$opts.updateEndpoint;
    this.$el.addEventListener("click", this.click.bind(this));
  }
  open(elemToToggle) {
    slideDown(elemToToggle, 200);
  }
  close(elemToToggle) {
    slideUp(elemToToggle, 200);
  }
  click(event) {
    event.preventDefault();
    const matchingElems = document.querySelectorAll(this.targetSelector);
    for (const match of matchingElems) {
      const action = this.isOpen ? this.close : this.open;
      action(match);
    }
    this.isOpen = !this.isOpen;
    this.updateSystemAjax(this.isOpen);
  }
  updateSystemAjax(isOpen) {
    window.$http.patch(this.updateEndpoint, {
      expand: isOpen ? "true" : "false"
    });
  }
};

// resources/js/components/global-search.js
var GlobalSearch = class extends Component {
  setup() {
    this.container = this.$el;
    this.input = this.$refs.input;
    this.suggestions = this.$refs.suggestions;
    this.suggestionResultsWrap = this.$refs.suggestionResults;
    this.loadingWrap = this.$refs.loading;
    this.button = this.$refs.button;
    this.setupListeners();
  }
  setupListeners() {
    const updateSuggestionsDebounced = debounce(this.updateSuggestions.bind(this), 200, false);
    this.input.addEventListener("input", () => {
      const { value } = this.input;
      if (value.length > 0) {
        this.loadingWrap.style.display = "block";
        this.suggestionResultsWrap.style.opacity = "0.5";
        updateSuggestionsDebounced(value);
      } else {
        this.hideSuggestions();
      }
    });
    this.input.addEventListener("dblclick", () => {
      this.input.setAttribute("autocomplete", "on");
      this.button.focus();
      this.input.focus();
    });
    new KeyboardNavigationHandler(this.container, () => {
      this.hideSuggestions();
    });
  }
  /**
   * @param {String} search
   */
  async updateSuggestions(search) {
    const { data: results } = await window.$http.get("/search/suggest", { term: search });
    if (!this.input.value) {
      return;
    }
    const resultDom = htmlToDom(results);
    this.suggestionResultsWrap.innerHTML = "";
    this.suggestionResultsWrap.style.opacity = "1";
    this.loadingWrap.style.display = "none";
    this.suggestionResultsWrap.append(resultDom);
    if (!this.container.classList.contains("search-active")) {
      this.showSuggestions();
    }
  }
  showSuggestions() {
    this.container.classList.add("search-active");
    window.requestAnimationFrame(() => {
      this.suggestions.classList.add("search-suggestions-animation");
    });
  }
  hideSuggestions() {
    this.container.classList.remove("search-active");
    this.suggestions.classList.remove("search-suggestions-animation");
    this.suggestionResultsWrap.innerHTML = "";
  }
};

// resources/js/components/header-mobile-toggle.js
var HeaderMobileToggle = class extends Component {
  setup() {
    this.elem = this.$el;
    this.toggleButton = this.$refs.toggle;
    this.menu = this.$refs.menu;
    this.open = false;
    this.toggleButton.addEventListener("click", this.onToggle.bind(this));
    this.onWindowClick = this.onWindowClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  onToggle(event) {
    this.open = !this.open;
    this.menu.classList.toggle("show", this.open);
    this.toggleButton.setAttribute("aria-expanded", this.open ? "true" : "false");
    if (this.open) {
      this.elem.addEventListener("keydown", this.onKeyDown);
      window.addEventListener("click", this.onWindowClick);
    } else {
      this.elem.removeEventListener("keydown", this.onKeyDown);
      window.removeEventListener("click", this.onWindowClick);
    }
    event.stopPropagation();
  }
  onKeyDown(event) {
    if (event.code === "Escape") {
      this.onToggle(event);
    }
  }
  onWindowClick(event) {
    this.onToggle(event);
  }
};

// resources/js/components/image-manager.js
var ImageManager = class extends Component {
  setup() {
    this.uploadedTo = this.$opts.uploadedTo;
    this.container = this.$el;
    this.popupEl = this.$refs.popup;
    this.searchForm = this.$refs.searchForm;
    this.searchInput = this.$refs.searchInput;
    this.cancelSearch = this.$refs.cancelSearch;
    this.listContainer = this.$refs.listContainer;
    this.filterTabs = this.$manyRefs.filterTabs;
    this.selectButton = this.$refs.selectButton;
    this.uploadButton = this.$refs.uploadButton;
    this.uploadHint = this.$refs.uploadHint;
    this.formContainer = this.$refs.formContainer;
    this.formContainerPlaceholder = this.$refs.formContainerPlaceholder;
    this.dropzoneContainer = this.$refs.dropzoneContainer;
    this.loadMore = this.$refs.loadMore;
    this.type = "gallery";
    this.lastSelected = {};
    this.lastSelectedTime = 0;
    this.callback = null;
    this.resetState = () => {
      this.hasData = false;
      this.page = 1;
      this.filter = "all";
    };
    this.resetState();
    this.setupListeners();
  }
  setupListeners() {
    onSelect(this.filterTabs, (e) => {
      this.resetAll();
      this.filter = e.target.dataset.filter;
      this.setActiveFilterTab(this.filter);
      this.loadGallery();
    });
    this.searchForm.addEventListener("submit", (event) => {
      this.resetListView();
      this.loadGallery();
      this.cancelSearch.toggleAttribute("hidden", !this.searchInput.value);
      event.preventDefault();
    });
    onSelect(this.cancelSearch, () => {
      this.resetListView();
      this.resetSearchView();
      this.loadGallery();
    });
    onChildEvent(this.container, ".load-more button", "click", this.runLoadMore.bind(this));
    this.listContainer.addEventListener("event-emit-select-image", this.onImageSelectEvent.bind(this));
    this.listContainer.addEventListener("error", (event) => {
      event.target.src = window.baseUrl("loading_error.png");
    }, true);
    onSelect(this.selectButton, () => {
      if (this.callback) {
        this.callback(this.lastSelected);
      }
      this.hide();
    });
    onChildEvent(this.formContainer, "#image-manager-delete", "click", () => {
      if (this.lastSelected) {
        this.loadImageEditForm(this.lastSelected.id, true);
      }
    });
    onChildEvent(this.formContainer, "#image-manager-rebuild-thumbs", "click", async (_, button) => {
      button.disabled = true;
      if (this.lastSelected) {
        await this.rebuildThumbnails(this.lastSelected.id);
      }
      button.disabled = false;
    });
    this.formContainer.addEventListener("ajax-form-success", () => {
      this.refreshGallery();
      this.resetEditForm();
    });
    this.container.addEventListener("dropzone-upload-success", this.refreshGallery.bind(this));
    const scrollZone = this.listContainer.parentElement;
    let scrollEvents = [];
    scrollZone.addEventListener("wheel", (event) => {
      const scrollOffset = Math.ceil(scrollZone.scrollHeight - scrollZone.scrollTop);
      const bottomedOut = scrollOffset === scrollZone.clientHeight;
      if (!bottomedOut || event.deltaY < 1) {
        return;
      }
      const secondAgo = Date.now() - 1e3;
      scrollEvents.push(Date.now());
      scrollEvents = scrollEvents.filter((d) => d >= secondAgo);
      if (scrollEvents.length > 5 && this.canLoadMore()) {
        this.runLoadMore();
      }
    });
  }
  show(callback, type = "gallery") {
    this.resetAll();
    this.callback = callback;
    this.type = type;
    this.getPopup().show();
    const hideUploads = type !== "gallery";
    this.dropzoneContainer.classList.toggle("hidden", hideUploads);
    this.uploadButton.classList.toggle("hidden", hideUploads);
    this.uploadHint.classList.toggle("hidden", hideUploads);
    const dropzone = window.$components.firstOnElement(this.container, "dropzone");
    dropzone.toggleActive(!hideUploads);
    if (!this.hasData) {
      this.loadGallery();
      this.hasData = true;
    }
  }
  hide() {
    this.getPopup().hide();
  }
  /**
   * @returns {Popup}
   */
  getPopup() {
    return window.$components.firstOnElement(this.popupEl, "popup");
  }
  async loadGallery() {
    const params = {
      page: this.page,
      search: this.searchInput.value || null,
      uploaded_to: this.uploadedTo,
      filter_type: this.filter === "all" ? null : this.filter
    };
    const { data: html } = await window.$http.get(`images/${this.type}`, params);
    if (params.page === 1) {
      this.listContainer.innerHTML = "";
    }
    this.addReturnedHtmlElementsToList(html);
    removeLoading(this.listContainer);
  }
  addReturnedHtmlElementsToList(html) {
    const el = document.createElement("div");
    el.innerHTML = html;
    const loadMore = el.querySelector(".load-more");
    if (loadMore) {
      loadMore.remove();
      this.loadMore.innerHTML = loadMore.innerHTML;
    }
    this.loadMore.toggleAttribute("hidden", !loadMore);
    window.$components.init(el);
    for (const child of [...el.children]) {
      this.listContainer.appendChild(child);
    }
  }
  setActiveFilterTab(filterName) {
    for (const tab of this.filterTabs) {
      const selected = tab.dataset.filter === filterName;
      tab.setAttribute("aria-selected", selected ? "true" : "false");
    }
  }
  resetAll() {
    this.resetState();
    this.resetListView();
    this.resetSearchView();
    this.resetEditForm();
    this.setActiveFilterTab("all");
    this.selectButton.classList.add("hidden");
  }
  resetSearchView() {
    this.searchInput.value = "";
    this.cancelSearch.toggleAttribute("hidden", true);
  }
  resetEditForm() {
    this.formContainer.innerHTML = "";
    this.formContainerPlaceholder.removeAttribute("hidden");
  }
  resetListView() {
    showLoading(this.listContainer);
    this.page = 1;
  }
  refreshGallery() {
    this.resetListView();
    this.loadGallery();
  }
  async onImageSelectEvent(event) {
    let image = JSON.parse(event.detail.data);
    const isDblClick = image && image.id === this.lastSelected.id && Date.now() - this.lastSelectedTime < 400;
    const alreadySelected = event.target.classList.contains("selected");
    [...this.listContainer.querySelectorAll(".selected")].forEach((el) => {
      el.classList.remove("selected");
    });
    if (!alreadySelected && !isDblClick) {
      event.target.classList.add("selected");
      image = await this.loadImageEditForm(image.id);
    } else if (!isDblClick) {
      this.resetEditForm();
    } else if (isDblClick) {
      image = this.lastSelected;
    }
    this.selectButton.classList.toggle("hidden", alreadySelected);
    if (isDblClick && this.callback) {
      this.callback(image);
      this.hide();
    }
    this.lastSelected = image;
    this.lastSelectedTime = Date.now();
  }
  async loadImageEditForm(imageId, requestDelete = false) {
    if (!requestDelete) {
      this.formContainer.innerHTML = "";
    }
    const params = requestDelete ? { delete: true } : {};
    const { data: formHtml } = await window.$http.get(`/images/edit/${imageId}`, params);
    this.formContainer.innerHTML = formHtml;
    this.formContainerPlaceholder.setAttribute("hidden", "");
    window.$components.init(this.formContainer);
    const imageDataEl = this.formContainer.querySelector("#image-manager-form-image-data");
    return JSON.parse(imageDataEl.text);
  }
  runLoadMore() {
    showLoading(this.loadMore);
    this.page += 1;
    this.loadGallery();
  }
  canLoadMore() {
    return this.loadMore.querySelector("button") && !this.loadMore.hasAttribute("hidden");
  }
  async rebuildThumbnails(imageId) {
    try {
      const response = await window.$http.put(`/images/${imageId}/rebuild-thumbnails`);
      window.$events.success(response.data);
      this.refreshGallery();
    } catch (err) {
      window.$events.showResponseError(err);
    }
  }
};

// resources/js/components/image-picker.js
var ImagePicker = class extends Component {
  setup() {
    this.imageElem = this.$refs.image;
    this.imageInput = this.$refs.imageInput;
    this.resetInput = this.$refs.resetInput;
    this.removeInput = this.$refs.removeInput;
    this.resetButton = this.$refs.resetButton;
    this.removeButton = this.$refs.removeButton || null;
    this.defaultImage = this.$opts.defaultImage;
    this.setupListeners();
  }
  setupListeners() {
    this.resetButton.addEventListener("click", this.reset.bind(this));
    if (this.removeButton) {
      this.removeButton.addEventListener("click", this.removeImage.bind(this));
    }
    this.imageInput.addEventListener("change", this.fileInputChange.bind(this));
  }
  fileInputChange() {
    this.resetInput.setAttribute("disabled", "disabled");
    if (this.removeInput) {
      this.removeInput.setAttribute("disabled", "disabled");
    }
    for (const file of this.imageInput.files) {
      this.imageElem.src = window.URL.createObjectURL(file);
    }
    this.imageElem.classList.remove("none");
  }
  reset() {
    this.imageInput.value = "";
    this.imageElem.src = this.defaultImage;
    this.resetInput.removeAttribute("disabled");
    if (this.removeInput) {
      this.removeInput.setAttribute("disabled", "disabled");
    }
    this.imageElem.classList.remove("none");
  }
  removeImage() {
    this.imageInput.value = "";
    this.imageElem.classList.add("none");
    this.removeInput.removeAttribute("disabled");
    this.resetInput.setAttribute("disabled", "disabled");
  }
};

// resources/js/components/list-sort-control.js
var ListSortControl = class extends Component {
  setup() {
    this.elem = this.$el;
    this.menu = this.$refs.menu;
    this.sortInput = this.$refs.sort;
    this.orderInput = this.$refs.order;
    this.form = this.$refs.form;
    this.setupListeners();
  }
  setupListeners() {
    this.menu.addEventListener("click", (event) => {
      if (event.target.closest("[data-sort-value]") !== null) {
        this.sortOptionClick(event);
      }
    });
    this.elem.addEventListener("click", (event) => {
      if (event.target.closest("[data-sort-dir]") !== null) {
        this.sortDirectionClick(event);
      }
    });
  }
  sortOptionClick(event) {
    const sortOption = event.target.closest("[data-sort-value]");
    this.sortInput.value = sortOption.getAttribute("data-sort-value");
    event.preventDefault();
    this.form.submit();
  }
  sortDirectionClick(event) {
    const currentDir = this.orderInput.value;
    this.orderInput.value = currentDir === "asc" ? "desc" : "asc";
    event.preventDefault();
    this.form.submit();
  }
};

// resources/js/markdown/markdown.js
var import_markdown_it = __toESM(require_markdown_it());
var import_markdown_it_task_lists = __toESM(require_markdown_it_task_lists());
var Markdown = class {
  constructor() {
    this.renderer = new import_markdown_it.default({ html: true });
    this.renderer.use(import_markdown_it_task_lists.default, { label: true });
  }
  /**
   * Get the front-end render used to convert markdown to HTML.
   * @returns {MarkdownIt}
   */
  getRenderer() {
    return this.renderer;
  }
  /**
   * Convert the given Markdown to HTML.
   * @param {String} markdown
   * @returns {String}
   */
  render(markdown) {
    return this.renderer.render(markdown);
  }
};

// node_modules/snabbdom/build/htmldomapi.js
function createElement(tagName2, options2) {
  return document.createElement(tagName2, options2);
}
function createElementNS(namespaceURI, qualifiedName, options2) {
  return document.createElementNS(namespaceURI, qualifiedName, options2);
}
function createDocumentFragment() {
  return parseFragment(document.createDocumentFragment());
}
function createTextNode(text) {
  return document.createTextNode(text);
}
function createComment(text) {
  return document.createComment(text);
}
function insertBefore(parentNode2, newNode, referenceNode) {
  if (isDocumentFragment(parentNode2)) {
    let node = parentNode2;
    while (node && isDocumentFragment(node)) {
      const fragment = parseFragment(node);
      node = fragment.parent;
    }
    parentNode2 = node !== null && node !== void 0 ? node : parentNode2;
  }
  if (isDocumentFragment(newNode)) {
    newNode = parseFragment(newNode, parentNode2);
  }
  if (referenceNode && isDocumentFragment(referenceNode)) {
    referenceNode = parseFragment(referenceNode).firstChildNode;
  }
  parentNode2.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
  node.removeChild(child);
}
function appendChild(node, child) {
  if (isDocumentFragment(child)) {
    child = parseFragment(child, node);
  }
  node.appendChild(child);
}
function parentNode(node) {
  if (isDocumentFragment(node)) {
    while (node && isDocumentFragment(node)) {
      const fragment = parseFragment(node);
      node = fragment.parent;
    }
    return node !== null && node !== void 0 ? node : null;
  }
  return node.parentNode;
}
function nextSibling(node) {
  var _a;
  if (isDocumentFragment(node)) {
    const fragment = parseFragment(node);
    const parent = parentNode(fragment);
    if (parent && fragment.lastChildNode) {
      const children = Array.from(parent.childNodes);
      const index2 = children.indexOf(fragment.lastChildNode);
      return (_a = children[index2 + 1]) !== null && _a !== void 0 ? _a : null;
    }
    return null;
  }
  return node.nextSibling;
}
function tagName(elm) {
  return elm.tagName;
}
function setTextContent(node, text) {
  node.textContent = text;
}
function getTextContent(node) {
  return node.textContent;
}
function isElement(node) {
  return node.nodeType === 1;
}
function isText(node) {
  return node.nodeType === 3;
}
function isComment(node) {
  return node.nodeType === 8;
}
function isDocumentFragment(node) {
  return node.nodeType === 11;
}
function parseFragment(fragmentNode, parentNode2) {
  var _a, _b, _c;
  const fragment = fragmentNode;
  (_a = fragment.parent) !== null && _a !== void 0 ? _a : fragment.parent = parentNode2 !== null && parentNode2 !== void 0 ? parentNode2 : null;
  (_b = fragment.firstChildNode) !== null && _b !== void 0 ? _b : fragment.firstChildNode = fragmentNode.firstChild;
  (_c = fragment.lastChildNode) !== null && _c !== void 0 ? _c : fragment.lastChildNode = fragmentNode.lastChild;
  return fragment;
}
var htmlDomApi = {
  createElement,
  createElementNS,
  createTextNode,
  createDocumentFragment,
  createComment,
  insertBefore,
  removeChild,
  appendChild,
  parentNode,
  nextSibling,
  tagName,
  setTextContent,
  getTextContent,
  isElement,
  isText,
  isComment,
  isDocumentFragment
};

// node_modules/snabbdom/build/vnode.js
function vnode(sel, data, children, text, elm) {
  const key = data === void 0 ? void 0 : data.key;
  return { sel, data, children, text, elm, key };
}

// node_modules/snabbdom/build/is.js
var array = Array.isArray;
function primitive(s) {
  return typeof s === "string" || typeof s === "number" || s instanceof String || s instanceof Number;
}

// node_modules/snabbdom/build/init.js
function isUndef(s) {
  return s === void 0;
}
function isDef(s) {
  return s !== void 0;
}
var emptyNode = vnode("", {}, [], void 0, void 0);
function sameVnode(vnode1, vnode2) {
  var _a, _b;
  const isSameKey = vnode1.key === vnode2.key;
  const isSameIs = ((_a = vnode1.data) === null || _a === void 0 ? void 0 : _a.is) === ((_b = vnode2.data) === null || _b === void 0 ? void 0 : _b.is);
  const isSameSel = vnode1.sel === vnode2.sel;
  const isSameTextOrFragment = !vnode1.sel && vnode1.sel === vnode2.sel ? typeof vnode1.text === typeof vnode2.text : true;
  return isSameSel && isSameKey && isSameIs && isSameTextOrFragment;
}
function documentFragmentIsNotSupported() {
  throw new Error("The document fragment is not supported on this platform.");
}
function isElement2(api, vnode2) {
  return api.isElement(vnode2);
}
function isDocumentFragment2(api, vnode2) {
  return api.isDocumentFragment(vnode2);
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
  var _a;
  const map2 = {};
  for (let i = beginIdx; i <= endIdx; ++i) {
    const key = (_a = children[i]) === null || _a === void 0 ? void 0 : _a.key;
    if (key !== void 0) {
      map2[key] = i;
    }
  }
  return map2;
}
var hooks = [
  "create",
  "update",
  "remove",
  "destroy",
  "pre",
  "post"
];
function init2(modules, domApi, options2) {
  const cbs = {
    create: [],
    update: [],
    remove: [],
    destroy: [],
    pre: [],
    post: []
  };
  const api = domApi !== void 0 ? domApi : htmlDomApi;
  for (const hook of hooks) {
    for (const module of modules) {
      const currentHook = module[hook];
      if (currentHook !== void 0) {
        cbs[hook].push(currentHook);
      }
    }
  }
  function emptyNodeAt(elm) {
    const id = elm.id ? "#" + elm.id : "";
    const classes = elm.getAttribute("class");
    const c = classes ? "." + classes.split(" ").join(".") : "";
    return vnode(api.tagName(elm).toLowerCase() + id + c, {}, [], void 0, elm);
  }
  function emptyDocumentFragmentAt(frag) {
    return vnode(void 0, {}, [], void 0, frag);
  }
  function createRmCb(childElm, listeners2) {
    return function rmCb() {
      if (--listeners2 === 0) {
        const parent = api.parentNode(childElm);
        if (parent !== null) {
          api.removeChild(parent, childElm);
        }
      }
    };
  }
  function createElm(vnode2, insertedVnodeQueue) {
    var _a, _b, _c, _d;
    let i;
    let data = vnode2.data;
    if (data !== void 0) {
      const init5 = (_a = data.hook) === null || _a === void 0 ? void 0 : _a.init;
      if (isDef(init5)) {
        init5(vnode2);
        data = vnode2.data;
      }
    }
    const children = vnode2.children;
    const sel = vnode2.sel;
    if (sel === "!") {
      if (isUndef(vnode2.text)) {
        vnode2.text = "";
      }
      vnode2.elm = api.createComment(vnode2.text);
    } else if (sel === "") {
      vnode2.elm = api.createTextNode(vnode2.text);
    } else if (sel !== void 0) {
      const hashIdx = sel.indexOf("#");
      const dotIdx = sel.indexOf(".", hashIdx);
      const hash = hashIdx > 0 ? hashIdx : sel.length;
      const dot = dotIdx > 0 ? dotIdx : sel.length;
      const tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
      const elm = vnode2.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag, data) : api.createElement(tag, data);
      if (hash < dot)
        elm.setAttribute("id", sel.slice(hash + 1, dot));
      if (dotIdx > 0)
        elm.setAttribute("class", sel.slice(dot + 1).replace(/\./g, " "));
      for (i = 0; i < cbs.create.length; ++i)
        cbs.create[i](emptyNode, vnode2);
      if (primitive(vnode2.text) && (!array(children) || children.length === 0)) {
        api.appendChild(elm, api.createTextNode(vnode2.text));
      }
      if (array(children)) {
        for (i = 0; i < children.length; ++i) {
          const ch = children[i];
          if (ch != null) {
            api.appendChild(elm, createElm(ch, insertedVnodeQueue));
          }
        }
      }
      const hook = vnode2.data.hook;
      if (isDef(hook)) {
        (_b = hook.create) === null || _b === void 0 ? void 0 : _b.call(hook, emptyNode, vnode2);
        if (hook.insert) {
          insertedVnodeQueue.push(vnode2);
        }
      }
    } else if (((_c = options2 === null || options2 === void 0 ? void 0 : options2.experimental) === null || _c === void 0 ? void 0 : _c.fragments) && vnode2.children) {
      vnode2.elm = ((_d = api.createDocumentFragment) !== null && _d !== void 0 ? _d : documentFragmentIsNotSupported)();
      for (i = 0; i < cbs.create.length; ++i)
        cbs.create[i](emptyNode, vnode2);
      for (i = 0; i < vnode2.children.length; ++i) {
        const ch = vnode2.children[i];
        if (ch != null) {
          api.appendChild(vnode2.elm, createElm(ch, insertedVnodeQueue));
        }
      }
    } else {
      vnode2.elm = api.createTextNode(vnode2.text);
    }
    return vnode2.elm;
  }
  function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      const ch = vnodes[startIdx];
      if (ch != null) {
        api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
      }
    }
  }
  function invokeDestroyHook(vnode2) {
    var _a, _b;
    const data = vnode2.data;
    if (data !== void 0) {
      (_b = (_a = data === null || data === void 0 ? void 0 : data.hook) === null || _a === void 0 ? void 0 : _a.destroy) === null || _b === void 0 ? void 0 : _b.call(_a, vnode2);
      for (let i = 0; i < cbs.destroy.length; ++i)
        cbs.destroy[i](vnode2);
      if (vnode2.children !== void 0) {
        for (let j = 0; j < vnode2.children.length; ++j) {
          const child = vnode2.children[j];
          if (child != null && typeof child !== "string") {
            invokeDestroyHook(child);
          }
        }
      }
    }
  }
  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    var _a, _b;
    for (; startIdx <= endIdx; ++startIdx) {
      let listeners2;
      let rm;
      const ch = vnodes[startIdx];
      if (ch != null) {
        if (isDef(ch.sel)) {
          invokeDestroyHook(ch);
          listeners2 = cbs.remove.length + 1;
          rm = createRmCb(ch.elm, listeners2);
          for (let i = 0; i < cbs.remove.length; ++i)
            cbs.remove[i](ch, rm);
          const removeHook = (_b = (_a = ch === null || ch === void 0 ? void 0 : ch.data) === null || _a === void 0 ? void 0 : _a.hook) === null || _b === void 0 ? void 0 : _b.remove;
          if (isDef(removeHook)) {
            removeHook(ch, rm);
          } else {
            rm();
          }
        } else if (ch.children) {
          invokeDestroyHook(ch);
          removeVnodes(parentElm, ch.children, 0, ch.children.length - 1);
        } else {
          api.removeChild(parentElm, ch.elm);
        }
      }
    }
  }
  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let oldKeyToIdx;
    let idxInOld;
    let elmToMove;
    let before;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (oldStartVnode == null) {
        oldStartVnode = oldCh[++oldStartIdx];
      } else if (oldEndVnode == null) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (newStartVnode == null) {
        newStartVnode = newCh[++newStartIdx];
      } else if (newEndVnode == null) {
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (oldKeyToIdx === void 0) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }
        idxInOld = oldKeyToIdx[newStartVnode.key];
        if (isUndef(idxInOld)) {
          api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else if (isUndef(oldKeyToIdx[newEndVnode.key])) {
          api.insertBefore(parentElm, createElm(newEndVnode, insertedVnodeQueue), api.nextSibling(oldEndVnode.elm));
          newEndVnode = newCh[--newEndIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          if (elmToMove.sel !== newStartVnode.sel) {
            api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          } else {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = void 0;
            api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
    }
    if (newStartIdx <= newEndIdx) {
      before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    }
    if (oldStartIdx <= oldEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }
  function patchVnode(oldVnode, vnode2, insertedVnodeQueue) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const hook = (_a = vnode2.data) === null || _a === void 0 ? void 0 : _a.hook;
    (_b = hook === null || hook === void 0 ? void 0 : hook.prepatch) === null || _b === void 0 ? void 0 : _b.call(hook, oldVnode, vnode2);
    const elm = vnode2.elm = oldVnode.elm;
    if (oldVnode === vnode2)
      return;
    if (vnode2.data !== void 0 || isDef(vnode2.text) && vnode2.text !== oldVnode.text) {
      (_c = vnode2.data) !== null && _c !== void 0 ? _c : vnode2.data = {};
      (_d = oldVnode.data) !== null && _d !== void 0 ? _d : oldVnode.data = {};
      for (let i = 0; i < cbs.update.length; ++i)
        cbs.update[i](oldVnode, vnode2);
      (_g = (_f = (_e = vnode2.data) === null || _e === void 0 ? void 0 : _e.hook) === null || _f === void 0 ? void 0 : _f.update) === null || _g === void 0 ? void 0 : _g.call(_f, oldVnode, vnode2);
    }
    const oldCh = oldVnode.children;
    const ch = vnode2.children;
    if (isUndef(vnode2.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch)
          updateChildren(elm, oldCh, ch, insertedVnodeQueue);
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text))
          api.setTextContent(elm, "");
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        api.setTextContent(elm, "");
      }
    } else if (oldVnode.text !== vnode2.text) {
      if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      }
      api.setTextContent(elm, vnode2.text);
    }
    (_h = hook === null || hook === void 0 ? void 0 : hook.postpatch) === null || _h === void 0 ? void 0 : _h.call(hook, oldVnode, vnode2);
  }
  return function patch2(oldVnode, vnode2) {
    let i, elm, parent;
    const insertedVnodeQueue = [];
    for (i = 0; i < cbs.pre.length; ++i)
      cbs.pre[i]();
    if (isElement2(api, oldVnode)) {
      oldVnode = emptyNodeAt(oldVnode);
    } else if (isDocumentFragment2(api, oldVnode)) {
      oldVnode = emptyDocumentFragmentAt(oldVnode);
    }
    if (sameVnode(oldVnode, vnode2)) {
      patchVnode(oldVnode, vnode2, insertedVnodeQueue);
    } else {
      elm = oldVnode.elm;
      parent = api.parentNode(elm);
      createElm(vnode2, insertedVnodeQueue);
      if (parent !== null) {
        api.insertBefore(parent, vnode2.elm, api.nextSibling(elm));
        removeVnodes(parent, [oldVnode], 0, 0);
      }
    }
    for (i = 0; i < insertedVnodeQueue.length; ++i) {
      insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
    }
    for (i = 0; i < cbs.post.length; ++i)
      cbs.post[i]();
    return vnode2;
  };
}

// node_modules/snabbdom/build/h.js
function addNS(data, children, sel) {
  data.ns = "http://www.w3.org/2000/svg";
  if (sel !== "foreignObject" && children !== void 0) {
    for (let i = 0; i < children.length; ++i) {
      const child = children[i];
      if (typeof child === "string")
        continue;
      const childData = child.data;
      if (childData !== void 0) {
        addNS(childData, child.children, child.sel);
      }
    }
  }
}

// node_modules/snabbdom/build/tovnode.js
function toVNode(node, domApi) {
  const api = domApi !== void 0 ? domApi : htmlDomApi;
  let text;
  if (api.isElement(node)) {
    const id = node.id ? "#" + node.id : "";
    const cn = node.getAttribute("class");
    const c = cn ? "." + cn.split(" ").join(".") : "";
    const sel = api.tagName(node).toLowerCase() + id + c;
    const attrs = {};
    const dataset = {};
    const data = {};
    const children = [];
    let name;
    let i, n;
    const elmAttrs = node.attributes;
    const elmChildren = node.childNodes;
    for (i = 0, n = elmAttrs.length; i < n; i++) {
      name = elmAttrs[i].nodeName;
      if (name.startsWith("data-")) {
        dataset[name.slice(5)] = elmAttrs[i].nodeValue || "";
      } else if (name !== "id" && name !== "class") {
        attrs[name] = elmAttrs[i].nodeValue;
      }
    }
    for (i = 0, n = elmChildren.length; i < n; i++) {
      children.push(toVNode(elmChildren[i], domApi));
    }
    if (Object.keys(attrs).length > 0)
      data.attrs = attrs;
    if (Object.keys(dataset).length > 0)
      data.dataset = dataset;
    if (sel.startsWith("svg") && (sel.length === 3 || sel[3] === "." || sel[3] === "#")) {
      addNS(data, children, sel);
    }
    return vnode(sel, data, children, void 0, node);
  } else if (api.isText(node)) {
    text = api.getTextContent(node);
    return vnode(void 0, void 0, void 0, text, node);
  } else if (api.isComment(node)) {
    text = api.getTextContent(node);
    return vnode("!", {}, [], text, node);
  } else {
    return vnode("", {}, [], void 0, node);
  }
}

// node_modules/snabbdom/build/modules/attributes.js
var xlinkNS = "http://www.w3.org/1999/xlink";
var xmlnsNS = "http://www.w3.org/2000/xmlns/";
var xmlNS = "http://www.w3.org/XML/1998/namespace";
var colonChar = 58;
var xChar = 120;
var mChar = 109;
function updateAttrs(oldVnode, vnode2) {
  let key;
  const elm = vnode2.elm;
  let oldAttrs = oldVnode.data.attrs;
  let attrs = vnode2.data.attrs;
  if (!oldAttrs && !attrs)
    return;
  if (oldAttrs === attrs)
    return;
  oldAttrs = oldAttrs || {};
  attrs = attrs || {};
  for (key in attrs) {
    const cur = attrs[key];
    const old = oldAttrs[key];
    if (old !== cur) {
      if (cur === true) {
        elm.setAttribute(key, "");
      } else if (cur === false) {
        elm.removeAttribute(key);
      } else {
        if (key.charCodeAt(0) !== xChar) {
          elm.setAttribute(key, cur);
        } else if (key.charCodeAt(3) === colonChar) {
          elm.setAttributeNS(xmlNS, key, cur);
        } else if (key.charCodeAt(5) === colonChar) {
          key.charCodeAt(1) === mChar ? elm.setAttributeNS(xmlnsNS, key, cur) : elm.setAttributeNS(xlinkNS, key, cur);
        } else {
          elm.setAttribute(key, cur);
        }
      }
    }
  }
  for (key in oldAttrs) {
    if (!(key in attrs)) {
      elm.removeAttribute(key);
    }
  }
}
var attributesModule = {
  create: updateAttrs,
  update: updateAttrs
};

// resources/js/services/vdom.js
var patcher;
function getPatcher() {
  if (patcher)
    return patcher;
  patcher = init2([
    attributesModule
  ]);
  return patcher;
}
function patchDomFromHtmlString(domTarget, html) {
  const contentDom = document.createElement("div");
  contentDom.innerHTML = html;
  getPatcher()(toVNode(domTarget), toVNode(contentDom));
}

// resources/js/markdown/display.js
var Display = class {
  /**
   * @param {MarkdownEditor} editor
   */
  constructor(editor) {
    this.editor = editor;
    this.container = editor.config.displayEl;
    this.doc = null;
    this.lastDisplayClick = 0;
    if (this.container.contentDocument.readyState === "complete") {
      this.onLoad();
    } else {
      this.container.addEventListener("load", this.onLoad.bind(this));
    }
    this.updateVisibility(editor.settings.get("showPreview"));
    editor.settings.onChange("showPreview", (show2) => this.updateVisibility(show2));
  }
  updateVisibility(show2) {
    const wrap2 = this.container.closest(".markdown-editor-wrap");
    wrap2.style.display = show2 ? null : "none";
  }
  onLoad() {
    this.doc = this.container.contentDocument;
    this.loadStylesIntoDisplay();
    this.doc.body.className = "page-content";
    this.doc.addEventListener("click", this.onDisplayClick.bind(this));
  }
  /**
   * @param {MouseEvent} event
   */
  onDisplayClick(event) {
    const isDblClick = Date.now() - this.lastDisplayClick < 300;
    const link = event.target.closest("a");
    if (link !== null) {
      event.preventDefault();
      window.open(link.getAttribute("href"));
      return;
    }
    const drawing = event.target.closest("[drawio-diagram]");
    if (drawing !== null && isDblClick) {
      this.editor.actions.editDrawing(drawing);
      return;
    }
    this.lastDisplayClick = Date.now();
  }
  loadStylesIntoDisplay() {
    this.doc.documentElement.classList.add("markdown-editor-display");
    if (document.documentElement.classList.contains("dark-mode")) {
      this.doc.documentElement.style.backgroundColor = "#222";
      this.doc.documentElement.classList.add("dark-mode");
    }
    this.doc.head.innerHTML = "";
    const styles = document.head.querySelectorAll("style,link[rel=stylesheet]");
    for (const style of styles) {
      const copy = style.cloneNode(true);
      this.doc.head.appendChild(copy);
    }
  }
  /**
   * Patch the display DOM with the given HTML content.
   * @param {String} html
   */
  patchWithHtml(html) {
    const { body } = this.doc;
    if (body.children.length === 0) {
      const wrap2 = document.createElement("div");
      this.doc.body.append(wrap2);
    }
    const target = body.children[0];
    patchDomFromHtmlString(target, html);
  }
  /**
   * Scroll to the given block index within the display content.
   * Will scroll to the end if the index is -1.
   * @param {Number} index
   */
  scrollToIndex(index2) {
    const elems = this.doc.body?.children[0]?.children;
    if (elems && elems.length <= index2)
      return;
    const topElem = index2 === -1 ? elems[elems.length - 1] : elems[index2];
    topElem.scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth" });
  }
};

// node_modules/idb-keyval/dist/index.js
function promisifyRequest(request2) {
  return new Promise((resolve, reject) => {
    request2.oncomplete = request2.onsuccess = () => resolve(request2.result);
    request2.onabort = request2.onerror = () => reject(request2.error);
  });
}
function createStore(dbName, storeName) {
  const request2 = indexedDB.open(dbName);
  request2.onupgradeneeded = () => request2.result.createObjectStore(storeName);
  const dbp = promisifyRequest(request2);
  return (txMode, callback) => dbp.then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
var defaultGetStoreFunc;
function defaultGetStore() {
  if (!defaultGetStoreFunc) {
    defaultGetStoreFunc = createStore("keyval-store", "keyval");
  }
  return defaultGetStoreFunc;
}
function get3(key, customStore = defaultGetStore()) {
  return customStore("readonly", (store) => promisifyRequest(store.get(key)));
}
function set(key, value, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.put(value, key);
    return promisifyRequest(store.transaction);
  });
}
function del(key, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.delete(key);
    return promisifyRequest(store.transaction);
  });
}

// resources/js/services/drawio.js
var iFrame = null;
var lastApprovedOrigin;
var onInit;
var onSave;
var saveBackupKey = "last-drawing-save";
function drawPostMessage(data) {
  iFrame.contentWindow.postMessage(JSON.stringify(data), lastApprovedOrigin);
}
function drawEventExport(message) {
  set(saveBackupKey, message.data);
  if (onSave) {
    onSave(message.data).then(() => {
      del(saveBackupKey);
    });
  }
}
function drawEventSave(message) {
  drawPostMessage({
    action: "export",
    format: "xmlpng",
    xml: message.xml,
    spin: "Updating drawing"
  });
}
function drawEventInit() {
  if (!onInit)
    return;
  onInit().then((xml) => {
    drawPostMessage({ action: "load", autosave: 1, xml });
  });
}
function drawEventConfigure() {
  const config = {};
  window.$events.emitPublic(iFrame, "editor-drawio::configure", { config });
  drawPostMessage({ action: "configure", config });
}
function drawEventClose() {
  window.removeEventListener("message", drawReceive);
  if (iFrame)
    document.body.removeChild(iFrame);
}
function drawReceive(event) {
  if (!event.data || event.data.length < 1)
    return;
  if (event.origin !== lastApprovedOrigin)
    return;
  const message = JSON.parse(event.data);
  if (message.event === "init") {
    drawEventInit();
  } else if (message.event === "exit") {
    drawEventClose();
  } else if (message.event === "save") {
    drawEventSave(message);
  } else if (message.event === "export") {
    drawEventExport(message);
  } else if (message.event === "configure") {
    drawEventConfigure();
  }
}
async function attemptRestoreIfExists() {
  const backupVal = await get3(saveBackupKey);
  const dialogEl = document.getElementById("unsaved-drawing-dialog");
  if (!dialogEl) {
    console.error("Missing expected unsaved-drawing dialog");
  }
  if (backupVal) {
    const dialog = window.$components.firstOnElement(dialogEl, "confirm-dialog");
    const restore = await dialog.show();
    if (restore) {
      onInit = async () => backupVal;
    }
  }
}
async function show(drawioUrl, onInitCallback, onSaveCallback) {
  onInit = onInitCallback;
  onSave = onSaveCallback;
  await attemptRestoreIfExists();
  iFrame = document.createElement("iframe");
  iFrame.setAttribute("frameborder", "0");
  window.addEventListener("message", drawReceive);
  iFrame.setAttribute("src", drawioUrl);
  iFrame.setAttribute("class", "fullscreen");
  iFrame.style.backgroundColor = "#FFFFFF";
  document.body.appendChild(iFrame);
  lastApprovedOrigin = new URL(drawioUrl).origin;
}
async function upload(imageData, pageUploadedToId) {
  const data = {
    image: imageData,
    uploaded_to: pageUploadedToId
  };
  const resp = await window.$http.post(window.baseUrl("/images/drawio"), data);
  return resp.data;
}
function close() {
  drawEventClose();
}
async function load(drawingId) {
  try {
    const resp = await window.$http.get(window.baseUrl(`/images/drawio/base64/${drawingId}`));
    return `data:image/png;base64,${resp.data.content}`;
  } catch (error3) {
    if (error3 instanceof window.$http.HttpError) {
      window.$events.showResponseError(error3);
    }
    close();
    throw error3;
  }
}

// resources/js/markdown/actions.js
var _insertDrawing, insertDrawing_fn, _getText, getText_fn, _setText, setText_fn, _replaceSelection, replaceSelection_fn, _getSelectionText, getSelectionText_fn, _getSelectionRange, getSelectionRange_fn, _cleanTextForEditor, cleanTextForEditor_fn, _findAndReplaceContent, findAndReplaceContent_fn, _wrapLine, wrapLine_fn, _dispatchChange, dispatchChange_fn, _setSelection, setSelection_fn;
var Actions = class {
  /**
   * @param {MarkdownEditor} editor
   */
  constructor(editor) {
    __privateAdd(this, _insertDrawing);
    /**
     * Get the current text of the editor instance.
     * @return {string}
     */
    __privateAdd(this, _getText);
    /**
     * Set the text of the current editor instance.
     * @param {String} text
     * @param {?SelectionRange} selectionRange
     */
    __privateAdd(this, _setText);
    /**
     * Replace the current selection and focus the editor.
     * Takes an offset for the cursor, after the change, relative to the start of the provided string.
     * Can be provided a selection range to use instead of the current selection range.
     * @param {String} newContent
     * @param {Number} cursorOffset
     * @param {?SelectionRange} selectionRange
     */
    __privateAdd(this, _replaceSelection);
    /**
     * Get the text content of the main current selection.
     * @param {SelectionRange} selectionRange
     * @return {string}
     */
    __privateAdd(this, _getSelectionText);
    /**
     * Get the range of the current main selection.
     * @return {SelectionRange}
     */
    __privateAdd(this, _getSelectionRange);
    /**
     * Cleans the given text to work with the editor.
     * Standardises line endings to what's expected.
     * @param {String} text
     * @return {String}
     */
    __privateAdd(this, _cleanTextForEditor);
    /**
     * Find and replace the first occurrence of [search] with [replace]
     * @param {String} search
     * @param {String} replace
     */
    __privateAdd(this, _findAndReplaceContent);
    /**
     * Wrap the line in the given start and end contents.
     * @param {String} start
     * @param {String} end
     */
    __privateAdd(this, _wrapLine);
    /**
     * Dispatch changes to the editor.
     * @param {Number} from
     * @param {?Number} to
     * @param {?String} text
     * @param {?Number} selectFrom
     * @param {?Number} selectTo
     */
    __privateAdd(this, _dispatchChange);
    /**
     * Set the current selection range.
     * Optionally will scroll the new range into view.
     * @param {Number} from
     * @param {Number} to
     * @param {Boolean} scrollIntoView
     */
    __privateAdd(this, _setSelection);
    this.editor = editor;
    this.lastContent = {
      html: "",
      markdown: ""
    };
  }
  updateAndRender() {
    const content = __privateMethod(this, _getText, getText_fn).call(this);
    this.editor.config.inputEl.value = content;
    const html = this.editor.markdown.render(content);
    window.$events.emit("editor-html-change", "");
    window.$events.emit("editor-markdown-change", "");
    this.lastContent.html = html;
    this.lastContent.markdown = content;
    this.editor.display.patchWithHtml(html);
  }
  getContent() {
    return this.lastContent;
  }
  showImageInsert() {
    const imageManager = window.$components.first("image-manager");
    imageManager.show((image) => {
      const imageUrl = image.thumbs?.display || image.url;
      const selectedText = __privateMethod(this, _getSelectionText, getSelectionText_fn).call(this);
      const newText = `[![${selectedText || image.name}](${imageUrl})](${image.url})`;
      __privateMethod(this, _replaceSelection, replaceSelection_fn).call(this, newText, newText.length);
    }, "gallery");
  }
  insertImage() {
    const newText = `![${__privateMethod(this, _getSelectionText, getSelectionText_fn).call(this)}](http://)`;
    __privateMethod(this, _replaceSelection, replaceSelection_fn).call(this, newText, newText.length - 1);
  }
  insertLink() {
    const selectedText = __privateMethod(this, _getSelectionText, getSelectionText_fn).call(this);
    const newText = `[${selectedText}]()`;
    const cursorPosDiff = selectedText === "" ? -3 : -1;
    __privateMethod(this, _replaceSelection, replaceSelection_fn).call(this, newText, newText.length + cursorPosDiff);
  }
  showImageManager() {
    const selectionRange = __privateMethod(this, _getSelectionRange, getSelectionRange_fn).call(this);
    const imageManager = window.$components.first("image-manager");
    imageManager.show((image) => {
      __privateMethod(this, _insertDrawing, insertDrawing_fn).call(this, image, selectionRange);
    }, "drawio");
  }
  // Show the popup link selector and insert a link when finished
  showLinkSelector() {
    const selectionRange = __privateMethod(this, _getSelectionRange, getSelectionRange_fn).call(this);
    const selector = window.$components.first("entity-selector-popup");
    const selectionText = __privateMethod(this, _getSelectionText, getSelectionText_fn).call(this, selectionRange);
    selector.show((entity) => {
      const selectedText = selectionText || entity.name;
      const newText = `[${selectedText}](${entity.link})`;
      __privateMethod(this, _replaceSelection, replaceSelection_fn).call(this, newText, newText.length, selectionRange);
    }, {
      initialValue: selectionText,
      searchEndpoint: "/search/entity-selector",
      entityTypes: "page,book,chapter,bookshelf",
      entityPermission: "view"
    });
  }
  // Show draw.io if enabled and handle save.
  startDrawing() {
    const url = this.editor.config.drawioUrl;
    if (!url)
      return;
    const selectionRange = __privateMethod(this, _getSelectionRange, getSelectionRange_fn).call(this);
    show(url, () => Promise.resolve(""), async (pngData) => {
      const data = {
        image: pngData,
        uploaded_to: Number(this.editor.config.pageId)
      };
      try {
        const resp = await window.$http.post("/images/drawio", data);
        __privateMethod(this, _insertDrawing, insertDrawing_fn).call(this, resp.data, selectionRange);
        close();
      } catch (err) {
        this.handleDrawingUploadError(err);
        throw new Error(`Failed to save image with error: ${err}`);
      }
    });
  }
  // Show draw.io if enabled and handle save.
  editDrawing(imgContainer) {
    const { drawioUrl } = this.editor.config;
    if (!drawioUrl) {
      return;
    }
    const selectionRange = __privateMethod(this, _getSelectionRange, getSelectionRange_fn).call(this);
    const drawingId = imgContainer.getAttribute("drawio-diagram");
    show(drawioUrl, () => load(drawingId), async (pngData) => {
      const data = {
        image: pngData,
        uploaded_to: Number(this.editor.config.pageId)
      };
      try {
        const resp = await window.$http.post("/images/drawio", data);
        const newText = `<div drawio-diagram="${resp.data.id}"><img src="${resp.data.url}"></div>`;
        const newContent = __privateMethod(this, _getText, getText_fn).call(this).split("\n").map((line) => {
          if (line.indexOf(`drawio-diagram="${drawingId}"`) !== -1) {
            return newText;
          }
          return line;
        }).join("\n");
        __privateMethod(this, _setText, setText_fn).call(this, newContent, selectionRange);
        close();
      } catch (err) {
        this.handleDrawingUploadError(err);
        throw new Error(`Failed to save image with error: ${err}`);
      }
    });
  }
  handleDrawingUploadError(error3) {
    if (error3.status === 413) {
      window.$events.emit("error", this.editor.config.text.serverUploadLimit);
    } else {
      window.$events.emit("error", this.editor.config.text.imageUploadError);
    }
    console.error(error3);
  }
  // Make the editor full screen
  fullScreen() {
    const { container } = this.editor.config;
    const alreadyFullscreen = container.classList.contains("fullscreen");
    container.classList.toggle("fullscreen", !alreadyFullscreen);
    document.body.classList.toggle("markdown-fullscreen", !alreadyFullscreen);
  }
  // Scroll to a specified text
  scrollToText(searchText) {
    if (!searchText) {
      return;
    }
    const text = this.editor.cm.state.doc;
    let lineCount = 1;
    let scrollToLine = -1;
    for (const line2 of text.iterLines()) {
      if (line2.includes(searchText)) {
        scrollToLine = lineCount;
        break;
      }
      lineCount += 1;
    }
    if (scrollToLine === -1) {
      return;
    }
    const line = text.line(scrollToLine);
    __privateMethod(this, _setSelection, setSelection_fn).call(this, line.from, line.to, true);
    this.focus();
  }
  focus() {
    if (!this.editor.cm.hasFocus) {
      this.editor.cm.focus();
    }
  }
  /**
   * Insert content into the editor.
   * @param {String} content
   */
  insertContent(content) {
    __privateMethod(this, _replaceSelection, replaceSelection_fn).call(this, content, content.length);
  }
  /**
   * Prepend content to the editor.
   * @param {String} content
   */
  prependContent(content) {
    content = __privateMethod(this, _cleanTextForEditor, cleanTextForEditor_fn).call(this, content);
    const selectionRange = __privateMethod(this, _getSelectionRange, getSelectionRange_fn).call(this);
    const selectFrom = selectionRange.from + content.length + 1;
    __privateMethod(this, _dispatchChange, dispatchChange_fn).call(this, 0, 0, `${content}
`, selectFrom);
    this.focus();
  }
  /**
   * Append content to the editor.
   * @param {String} content
   */
  appendContent(content) {
    content = __privateMethod(this, _cleanTextForEditor, cleanTextForEditor_fn).call(this, content);
    __privateMethod(this, _dispatchChange, dispatchChange_fn).call(this, this.editor.cm.state.doc.length, `
${content}`);
    this.focus();
  }
  /**
   * Replace the editor's contents
   * @param {String} content
   */
  replaceContent(content) {
    __privateMethod(this, _setText, setText_fn).call(this, content);
  }
  /**
   * Replace the start of the line
   * @param {String} newStart
   */
  replaceLineStart(newStart) {
    const selectionRange = __privateMethod(this, _getSelectionRange, getSelectionRange_fn).call(this);
    const line = this.editor.cm.state.doc.lineAt(selectionRange.from);
    const lineContent = line.text;
    const lineStart = lineContent.split(" ")[0];
    if (lineStart === newStart) {
      const newLineContent2 = lineContent.replace(`${newStart} `, "");
      const selectFrom2 = selectionRange.from + (newLineContent2.length - lineContent.length);
      __privateMethod(this, _dispatchChange, dispatchChange_fn).call(this, line.from, line.to, newLineContent2, selectFrom2);
      return;
    }
    let newLineContent = lineContent;
    const alreadySymbol = /^[#>`]/.test(lineStart);
    if (alreadySymbol) {
      newLineContent = lineContent.replace(lineStart, newStart).trim();
    } else if (newStart !== "") {
      newLineContent = `${newStart} ${lineContent}`;
    }
    const selectFrom = selectionRange.from + (newLineContent.length - lineContent.length);
    __privateMethod(this, _dispatchChange, dispatchChange_fn).call(this, line.from, line.to, newLineContent, selectFrom);
  }
  /**
   * Wrap the selection in the given contents start and end contents.
   * @param {String} start
   * @param {String} end
   */
  wrapSelection(start, end) {
    const selectRange = __privateMethod(this, _getSelectionRange, getSelectionRange_fn).call(this);
    const selectionText = __privateMethod(this, _getSelectionText, getSelectionText_fn).call(this, selectRange);
    if (!selectionText) {
      __privateMethod(this, _wrapLine, wrapLine_fn).call(this, start, end);
      return;
    }
    let newSelectionText = selectionText;
    let newRange;
    if (selectionText.startsWith(start) && selectionText.endsWith(end)) {
      newSelectionText = selectionText.slice(start.length, selectionText.length - end.length);
      newRange = selectRange.extend(selectRange.from, selectRange.to - (start.length + end.length));
    } else {
      newSelectionText = `${start}${selectionText}${end}`;
      newRange = selectRange.extend(selectRange.from, selectRange.to + (start.length + end.length));
    }
    __privateMethod(this, _dispatchChange, dispatchChange_fn).call(this, selectRange.from, selectRange.to, newSelectionText, newRange.anchor, newRange.head);
  }
  replaceLineStartForOrderedList() {
    const selectionRange = __privateMethod(this, _getSelectionRange, getSelectionRange_fn).call(this);
    const line = this.editor.cm.state.doc.lineAt(selectionRange.from);
    const prevLine = this.editor.cm.state.doc.line(line.number - 1);
    const listMatch = prevLine.text.match(/^(\s*)(\d)([).])\s/) || [];
    const number = (Number(listMatch[2]) || 0) + 1;
    const whiteSpace = listMatch[1] || "";
    const listMark = listMatch[3] || ".";
    const prefix = `${whiteSpace}${number}${listMark}`;
    return this.replaceLineStart(prefix);
  }
  /**
   * Cycles through the type of callout block within the selection.
   * Creates a callout block if none existing, and removes it if cycling past the danger type.
   */
  cycleCalloutTypeAtSelection() {
    const selectionRange = __privateMethod(this, _getSelectionRange, getSelectionRange_fn).call(this);
    const line = this.editor.cm.state.doc.lineAt(selectionRange.from);
    const formats2 = ["info", "success", "warning", "danger"];
    const joint = formats2.join("|");
    const regex = new RegExp(`class="((${joint})\\s+callout|callout\\s+(${joint}))"`, "i");
    const matches2 = regex.exec(line.text);
    const format = (matches2 ? matches2[2] || matches2[3] : "").toLowerCase();
    if (format === formats2[formats2.length - 1]) {
      __privateMethod(this, _wrapLine, wrapLine_fn).call(this, `<p class="callout ${formats2[formats2.length - 1]}">`, "</p>");
    } else if (format === "") {
      __privateMethod(this, _wrapLine, wrapLine_fn).call(this, '<p class="callout info">', "</p>");
    } else {
      const newFormatIndex = formats2.indexOf(format) + 1;
      const newFormat = formats2[newFormatIndex];
      const newContent = line.text.replace(matches2[0], matches2[0].replace(format, newFormat));
      const lineDiff = newContent.length - line.text.length;
      __privateMethod(this, _dispatchChange, dispatchChange_fn).call(this, line.from, line.to, newContent, selectionRange.anchor + lineDiff, selectionRange.head + lineDiff);
    }
  }
  syncDisplayPosition(event) {
    const scrollEl2 = event.target;
    const atEnd = Math.abs(scrollEl2.scrollHeight - scrollEl2.clientHeight - scrollEl2.scrollTop) < 1;
    if (atEnd) {
      this.editor.display.scrollToIndex(-1);
      return;
    }
    const blockInfo = this.editor.cm.lineBlockAtHeight(scrollEl2.scrollTop);
    const range = this.editor.cm.state.sliceDoc(0, blockInfo.from);
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.editor.markdown.render(range), "text/html");
    const totalLines = doc.documentElement.querySelectorAll("body > *");
    this.editor.display.scrollToIndex(totalLines.length);
  }
  /**
   * Fetch and insert the template of the given ID.
   * The page-relative position provided can be used to determine insert location if possible.
   * @param {String} templateId
   * @param {Number} posX
   * @param {Number} posY
   */
  async insertTemplate(templateId, posX, posY) {
    const cursorPos = this.editor.cm.posAtCoords({ x: posX, y: posY }, false);
    const { data } = await window.$http.get(`/templates/${templateId}`);
    const content = data.markdown || data.html;
    __privateMethod(this, _dispatchChange, dispatchChange_fn).call(this, cursorPos, cursorPos, content, cursorPos);
  }
  /**
   * Insert multiple images from the clipboard from an event at the provided
   * screen coordinates (Typically form a paste event).
   * @param {File[]} images
   * @param {Number} posX
   * @param {Number} posY
   */
  insertClipboardImages(images, posX, posY) {
    const cursorPos = this.editor.cm.posAtCoords({ x: posX, y: posY }, false);
    for (const image of images) {
      this.uploadImage(image, cursorPos);
    }
  }
  /**
   * Handle image upload and add image into markdown content
   * @param {File} file
   * @param {?Number} position
   */
  async uploadImage(file, position = null) {
    if (file === null || file.type.indexOf("image") !== 0)
      return;
    let ext = "png";
    if (position === null) {
      position = __privateMethod(this, _getSelectionRange, getSelectionRange_fn).call(this).from;
    }
    if (file.name) {
      const fileNameMatches = file.name.match(/\.(.+)$/);
      if (fileNameMatches.length > 1)
        ext = fileNameMatches[1];
    }
    const id = `image-${Math.random().toString(16).slice(2)}`;
    const placeholderImage = window.baseUrl(`/loading.gif#upload${id}`);
    const placeHolderText = `![](${placeholderImage})`;
    __privateMethod(this, _dispatchChange, dispatchChange_fn).call(this, position, position, placeHolderText, position);
    const remoteFilename = `image-${Date.now()}.${ext}`;
    const formData = new FormData();
    formData.append("file", file, remoteFilename);
    formData.append("uploaded_to", this.editor.config.pageId);
    try {
      const { data } = await window.$http.post("/images/gallery", formData);
      const newContent = `[![](${data.thumbs.display})](${data.url})`;
      __privateMethod(this, _findAndReplaceContent, findAndReplaceContent_fn).call(this, placeHolderText, newContent);
    } catch (err) {
      window.$events.error(err?.data?.message || this.editor.config.text.imageUploadError);
      __privateMethod(this, _findAndReplaceContent, findAndReplaceContent_fn).call(this, placeHolderText, "");
      console.error(err);
    }
  }
};
_insertDrawing = new WeakSet();
insertDrawing_fn = function(image, originalSelectionRange) {
  const newText = `<div drawio-diagram="${image.id}"><img src="${image.url}"></div>`;
  __privateMethod(this, _replaceSelection, replaceSelection_fn).call(this, newText, newText.length, originalSelectionRange);
};
_getText = new WeakSet();
getText_fn = function() {
  return this.editor.cm.state.doc.toString();
};
_setText = new WeakSet();
setText_fn = function(text, selectionRange = null) {
  selectionRange = selectionRange || __privateMethod(this, _getSelectionRange, getSelectionRange_fn).call(this);
  const newDoc = this.editor.cm.state.toText(text);
  const newSelectFrom = Math.min(selectionRange.from, newDoc.length);
  __privateMethod(this, _dispatchChange, dispatchChange_fn).call(this, 0, this.editor.cm.state.doc.length, text, newSelectFrom);
  this.focus();
};
_replaceSelection = new WeakSet();
replaceSelection_fn = function(newContent, cursorOffset = 0, selectionRange = null) {
  selectionRange = selectionRange || this.editor.cm.state.selection.main;
  const selectFrom = selectionRange.from + cursorOffset;
  __privateMethod(this, _dispatchChange, dispatchChange_fn).call(this, selectionRange.from, selectionRange.to, newContent, selectFrom);
  this.focus();
};
_getSelectionText = new WeakSet();
getSelectionText_fn = function(selectionRange = null) {
  selectionRange = selectionRange || __privateMethod(this, _getSelectionRange, getSelectionRange_fn).call(this);
  return this.editor.cm.state.sliceDoc(selectionRange.from, selectionRange.to);
};
_getSelectionRange = new WeakSet();
getSelectionRange_fn = function() {
  return this.editor.cm.state.selection.main;
};
_cleanTextForEditor = new WeakSet();
cleanTextForEditor_fn = function(text) {
  return text.replace(/\r\n|\r/g, "\n");
};
_findAndReplaceContent = new WeakSet();
findAndReplaceContent_fn = function(search, replace) {
  const newText = __privateMethod(this, _getText, getText_fn).call(this).replace(search, replace);
  __privateMethod(this, _setText, setText_fn).call(this, newText);
};
_wrapLine = new WeakSet();
wrapLine_fn = function(start, end) {
  const selectionRange = __privateMethod(this, _getSelectionRange, getSelectionRange_fn).call(this);
  const line = this.editor.cm.state.doc.lineAt(selectionRange.from);
  const lineContent = line.text;
  let newLineContent;
  let lineOffset = 0;
  if (lineContent.startsWith(start) && lineContent.endsWith(end)) {
    newLineContent = lineContent.slice(start.length, lineContent.length - end.length);
    lineOffset = -start.length;
  } else {
    newLineContent = `${start}${lineContent}${end}`;
    lineOffset = start.length;
  }
  __privateMethod(this, _dispatchChange, dispatchChange_fn).call(this, line.from, line.to, newLineContent, selectionRange.from + lineOffset);
};
_dispatchChange = new WeakSet();
dispatchChange_fn = function(from, to = null, text = null, selectFrom = null, selectTo = null) {
  const tr = { changes: { from, to, insert: text } };
  if (selectFrom) {
    tr.selection = { anchor: selectFrom };
    if (selectTo) {
      tr.selection.head = selectTo;
    }
  }
  this.editor.cm.dispatch(tr);
};
_setSelection = new WeakSet();
setSelection_fn = function(from, to, scrollIntoView = false) {
  this.editor.cm.dispatch({
    selection: { anchor: from, head: to },
    scrollIntoView
  });
};

// resources/js/markdown/settings.js
var Settings = class {
  constructor(settingInputs) {
    this.settingMap = {
      scrollSync: true,
      showPreview: true,
      editorWidth: 50
    };
    this.changeListeners = {};
    this.loadFromLocalStorage();
    this.applyToInputs(settingInputs);
    this.listenToInputChanges(settingInputs);
  }
  applyToInputs(inputs) {
    for (const input of inputs) {
      const name = input.getAttribute("name").replace("md-", "");
      input.checked = this.settingMap[name];
    }
  }
  listenToInputChanges(inputs) {
    for (const input of inputs) {
      input.addEventListener("change", () => {
        const name = input.getAttribute("name").replace("md-", "");
        this.set(name, input.checked);
      });
    }
  }
  loadFromLocalStorage() {
    const lsValString = window.localStorage.getItem("md-editor-settings");
    if (!lsValString) {
      return;
    }
    const lsVals = JSON.parse(lsValString);
    for (const [key, value] of Object.entries(lsVals)) {
      if (value !== null && this.settingMap[key] !== void 0) {
        this.settingMap[key] = value;
      }
    }
  }
  set(key, value) {
    this.settingMap[key] = value;
    window.localStorage.setItem("md-editor-settings", JSON.stringify(this.settingMap));
    for (const listener of this.changeListeners[key] || []) {
      listener(value);
    }
  }
  get(key) {
    return this.settingMap[key] || null;
  }
  onChange(key, callback) {
    const listeners2 = this.changeListeners[key] || [];
    listeners2.push(callback);
    this.changeListeners[key] = listeners2;
  }
};

// resources/js/markdown/common-events.js
function getContentToInsert({ html, markdown }) {
  return markdown || html;
}
function listen2(editor) {
  window.$events.listen("editor::replace", (eventContent) => {
    const markdown = getContentToInsert(eventContent);
    editor.actions.replaceContent(markdown);
  });
  window.$events.listen("editor::append", (eventContent) => {
    const markdown = getContentToInsert(eventContent);
    editor.actions.appendContent(markdown);
  });
  window.$events.listen("editor::prepend", (eventContent) => {
    const markdown = getContentToInsert(eventContent);
    editor.actions.prependContent(markdown);
  });
  window.$events.listen("editor::insert", (eventContent) => {
    const markdown = getContentToInsert(eventContent);
    editor.actions.insertContent(markdown);
  });
  window.$events.listen("editor::focus", () => {
    editor.actions.focus();
  });
}

// resources/js/markdown/shortcuts.js
function provide(editor) {
  const shortcuts = {};
  shortcuts["Shift-Mod-i"] = () => editor.actions.insertImage();
  shortcuts["Mod-s"] = () => window.$events.emit("editor-save-draft");
  shortcuts["Mod-Enter"] = () => window.$events.emit("editor-save-page");
  shortcuts["Shift-Mod-k"] = () => editor.actions.showLinkSelector();
  shortcuts["Mod-k"] = () => editor.actions.insertLink();
  shortcuts["Mod-1"] = () => editor.actions.replaceLineStart("##");
  shortcuts["Mod-2"] = () => editor.actions.replaceLineStart("###");
  shortcuts["Mod-3"] = () => editor.actions.replaceLineStart("####");
  shortcuts["Mod-4"] = () => editor.actions.replaceLineStart("#####");
  shortcuts["Mod-5"] = () => editor.actions.replaceLineStart("");
  shortcuts["Mod-d"] = () => editor.actions.replaceLineStart("");
  shortcuts["Mod-6"] = () => editor.actions.replaceLineStart(">");
  shortcuts["Mod-q"] = () => editor.actions.replaceLineStart(">");
  shortcuts["Mod-7"] = () => editor.actions.wrapSelection("\n```\n", "\n```");
  shortcuts["Mod-8"] = () => editor.actions.wrapSelection("`", "`");
  shortcuts["Shift-Mod-e"] = () => editor.actions.wrapSelection("`", "`");
  shortcuts["Mod-9"] = () => editor.actions.cycleCalloutTypeAtSelection();
  shortcuts["Mod-p"] = () => editor.actions.replaceLineStart("-");
  shortcuts["Mod-o"] = () => editor.actions.replaceLineStartForOrderedList();
  return shortcuts;
}
function provideKeyBindings(editor) {
  const shortcuts = provide(editor);
  const keyBindings = [];
  const wrapAction = (action) => () => {
    action();
    return true;
  };
  for (const [shortcut, action] of Object.entries(shortcuts)) {
    keyBindings.push({ key: shortcut, run: wrapAction(action), preventDefault: true });
  }
  return keyBindings;
}

// resources/js/markdown/codemirror.js
async function init3(editor) {
  const Code = await window.importVersioned("code");
  function onViewUpdate(v) {
    if (v.docChanged) {
      editor.actions.updateAndRender();
    }
  }
  const onScrollDebounced = debounce(editor.actions.syncDisplayPosition.bind(editor.actions), 100, false);
  let syncActive = editor.settings.get("scrollSync");
  editor.settings.onChange("scrollSync", (val) => {
    syncActive = val;
  });
  const domEventHandlers = {
    // Handle scroll to sync display view
    scroll: (event) => syncActive && onScrollDebounced(event),
    // Handle image & content drag n drop
    drop: (event) => {
      const templateId = event.dataTransfer.getData("bookstack/template");
      if (templateId) {
        event.preventDefault();
        editor.actions.insertTemplate(templateId, event.pageX, event.pageY);
      }
      const clipboard = new Clipboard(event.dataTransfer);
      const clipboardImages = clipboard.getImages();
      if (clipboardImages.length > 0) {
        event.stopPropagation();
        event.preventDefault();
        editor.actions.insertClipboardImages(clipboardImages, event.pageX, event.pageY);
      }
    },
    // Handle image paste
    paste: (event) => {
      const clipboard = new Clipboard(event.clipboardData || event.dataTransfer);
      if (!clipboard.hasItems() || clipboard.containsTabularData()) {
        return;
      }
      const images = clipboard.getImages();
      for (const image of images) {
        editor.actions.uploadImage(image);
      }
    }
  };
  const cm = Code.markdownEditor(
    editor.config.inputEl,
    onViewUpdate,
    domEventHandlers,
    provideKeyBindings(editor)
  );
  window.mdEditorView = cm;
  return cm;
}

// resources/js/markdown/editor.js
async function init4(config) {
  const editor = {
    config,
    markdown: new Markdown(),
    settings: new Settings(config.settingInputs)
  };
  editor.actions = new Actions(editor);
  editor.display = new Display(editor);
  editor.cm = await init3(editor);
  listen2(editor);
  return editor;
}

// resources/js/components/markdown-editor.js
var MarkdownEditor = class extends Component {
  setup() {
    this.elem = this.$el;
    this.pageId = this.$opts.pageId;
    this.textDirection = this.$opts.textDirection;
    this.imageUploadErrorText = this.$opts.imageUploadErrorText;
    this.serverUploadLimitText = this.$opts.serverUploadLimitText;
    this.display = this.$refs.display;
    this.input = this.$refs.input;
    this.divider = this.$refs.divider;
    this.displayWrap = this.$refs.displayWrap;
    const { settingContainer } = this.$refs;
    const settingInputs = settingContainer.querySelectorAll('input[type="checkbox"]');
    this.editor = null;
    init4({
      pageId: this.pageId,
      container: this.elem,
      displayEl: this.display,
      inputEl: this.input,
      drawioUrl: this.getDrawioUrl(),
      settingInputs: Array.from(settingInputs),
      text: {
        serverUploadLimit: this.serverUploadLimitText,
        imageUploadError: this.imageUploadErrorText
      }
    }).then((editor) => {
      this.editor = editor;
      this.setupListeners();
      this.emitEditorEvents();
      this.scrollToTextIfNeeded();
      this.editor.actions.updateAndRender();
    });
  }
  emitEditorEvents() {
    window.$events.emitPublic(this.elem, "editor-markdown::setup", {
      markdownIt: this.editor.markdown.getRenderer(),
      displayEl: this.display,
      cmEditorView: this.editor.cm
    });
  }
  setupListeners() {
    this.elem.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-action]");
      if (button === null)
        return;
      const action = button.getAttribute("data-action");
      if (action === "insertImage")
        this.editor.actions.showImageInsert();
      if (action === "insertLink")
        this.editor.actions.showLinkSelector();
      if (action === "insertDrawing" && (event.ctrlKey || event.metaKey)) {
        this.editor.actions.showImageManager();
        return;
      }
      if (action === "insertDrawing")
        this.editor.actions.startDrawing();
      if (action === "fullscreen")
        this.editor.actions.fullScreen();
    });
    this.elem.addEventListener("click", (event) => {
      const toolbarLabel = event.target.closest(".editor-toolbar-label");
      if (!toolbarLabel)
        return;
      const currentActiveSections = this.elem.querySelectorAll(".markdown-editor-wrap");
      for (const activeElem of currentActiveSections) {
        activeElem.classList.remove("active");
      }
      toolbarLabel.closest(".markdown-editor-wrap").classList.add("active");
    });
    this.handleDividerDrag();
  }
  handleDividerDrag() {
    this.divider.addEventListener("pointerdown", () => {
      const wrapRect = this.elem.getBoundingClientRect();
      const moveListener = (event) => {
        const xRel = event.pageX - wrapRect.left;
        const xPct = Math.min(Math.max(20, Math.floor(xRel / wrapRect.width * 100)), 80);
        this.displayWrap.style.flexBasis = `${100 - xPct}%`;
        this.editor.settings.set("editorWidth", xPct);
      };
      const upListener = () => {
        window.removeEventListener("pointermove", moveListener);
        window.removeEventListener("pointerup", upListener);
        this.display.style.pointerEvents = null;
        document.body.style.userSelect = null;
      };
      this.display.style.pointerEvents = "none";
      document.body.style.userSelect = "none";
      window.addEventListener("pointermove", moveListener);
      window.addEventListener("pointerup", upListener);
    });
    const widthSetting = this.editor.settings.get("editorWidth");
    if (widthSetting) {
      this.displayWrap.style.flexBasis = `${100 - widthSetting}%`;
    }
  }
  scrollToTextIfNeeded() {
    const queryParams = new URL(window.location).searchParams;
    const scrollText = queryParams.get("content-text");
    if (scrollText) {
      this.editor.actions.scrollToText(scrollText);
    }
  }
  /**
   * Get the URL for the configured drawio instance.
   * @returns {String}
   */
  getDrawioUrl() {
    const drawioAttrEl = document.querySelector("[drawio-url]");
    if (!drawioAttrEl) {
      return "";
    }
    return drawioAttrEl.getAttribute("drawio-url") || "";
  }
  /**
   * Get the content of this editor.
   * Used by the parent page editor component.
   * @return {{html: String, markdown: String}}
   */
  getContent() {
    return this.editor.actions.getContent();
  }
};

// resources/js/components/new-user-password.js
var NewUserPassword = class extends Component {
  setup() {
    this.container = this.$el;
    this.inputContainer = this.$refs.inputContainer;
    this.inviteOption = this.container.querySelector("input[name=send_invite]");
    if (this.inviteOption) {
      this.inviteOption.addEventListener("change", this.inviteOptionChange.bind(this));
      this.inviteOptionChange();
    }
  }
  inviteOptionChange() {
    const inviting = this.inviteOption.value === "true";
    const passwordBoxes = this.container.querySelectorAll("input[type=password]");
    for (const input of passwordBoxes) {
      input.disabled = inviting;
    }
    this.inputContainer.style.display = inviting ? "none" : "block";
  }
};

// resources/js/components/notification.js
var Notification = class extends Component {
  setup() {
    this.container = this.$el;
    this.type = this.$opts.type;
    this.textElem = this.container.querySelector("span");
    this.autoHide = this.$opts.autoHide === "true";
    this.initialShow = this.$opts.show === "true";
    this.container.style.display = "grid";
    window.$events.listen(this.type, (text) => {
      this.show(text);
    });
    this.container.addEventListener("click", this.hide.bind(this));
    if (this.initialShow) {
      setTimeout(() => this.show(this.textElem.textContent), 100);
    }
    this.hideCleanup = this.hideCleanup.bind(this);
  }
  show(textToShow = "") {
    this.container.removeEventListener("transitionend", this.hideCleanup);
    this.textElem.textContent = textToShow;
    this.container.style.display = "grid";
    setTimeout(() => {
      this.container.classList.add("showing");
    }, 1);
    if (this.autoHide) {
      const words = textToShow.split(" ").length;
      const timeToShow = Math.max(2e3, 1e3 + 250 * words);
      setTimeout(this.hide.bind(this), timeToShow);
    }
  }
  hide() {
    this.container.classList.remove("showing");
    this.container.addEventListener("transitionend", this.hideCleanup);
  }
  hideCleanup() {
    this.container.style.display = "none";
    this.container.removeEventListener("transitionend", this.hideCleanup);
  }
};

// resources/js/components/optional-input.js
var OptionalInput = class extends Component {
  setup() {
    this.removeButton = this.$refs.remove;
    this.showButton = this.$refs.show;
    this.input = this.$refs.input;
    this.setupListeners();
  }
  setupListeners() {
    onSelect(this.removeButton, () => {
      this.input.value = "";
      this.input.classList.add("hidden");
      this.removeButton.classList.add("hidden");
      this.showButton.classList.remove("hidden");
    });
    onSelect(this.showButton, () => {
      this.input.classList.remove("hidden");
      this.removeButton.classList.remove("hidden");
      this.showButton.classList.add("hidden");
    });
  }
};

// resources/js/wysiwyg/shortcuts.js
function register2(editor) {
  for (let i = 1; i < 5; i++) {
    editor.shortcuts.add(`meta+${i}`, "", ["FormatBlock", false, `h${i + 1}`]);
  }
  editor.shortcuts.add("meta+5", "", ["FormatBlock", false, "p"]);
  editor.shortcuts.add("meta+d", "", ["FormatBlock", false, "p"]);
  editor.shortcuts.add("meta+6", "", ["FormatBlock", false, "blockquote"]);
  editor.shortcuts.add("meta+q", "", ["FormatBlock", false, "blockquote"]);
  editor.shortcuts.add("meta+7", "", ["codeeditor", false, "pre"]);
  editor.shortcuts.add("meta+e", "", ["codeeditor", false, "pre"]);
  editor.shortcuts.add("meta+8", "", ["FormatBlock", false, "code"]);
  editor.shortcuts.add("meta+shift+E", "", ["FormatBlock", false, "code"]);
  editor.shortcuts.add("meta+o", "", "InsertOrderedList");
  editor.shortcuts.add("meta+p", "", "InsertUnorderedList");
  editor.shortcuts.add("meta+S", "", () => {
    window.$events.emit("editor-save-draft");
  });
  editor.shortcuts.add("meta+13", "", () => {
    window.$events.emit("editor-save-page");
  });
  editor.shortcuts.add("meta+9", "", () => {
    const selectedNode = editor.selection.getNode();
    const callout = selectedNode ? selectedNode.closest(".callout") : null;
    const formats2 = ["info", "success", "warning", "danger"];
    const currentFormatIndex = formats2.findIndex((format) => {
      return callout && callout.classList.contains(format);
    });
    const newFormatIndex = (currentFormatIndex + 1) % formats2.length;
    const newFormat = formats2[newFormatIndex];
    editor.formatter.apply(`callout${newFormat}`);
  });
  editor.shortcuts.add("meta+shift+K", "", () => {
    const selectorPopup = window.$components.first("entity-selector-popup");
    const selectionText = editor.selection.getContent({ format: "text" }).trim();
    selectorPopup.show((entity) => {
      if (editor.selection.isCollapsed()) {
        editor.insertContent(editor.dom.createHTML("a", { href: entity.link }, editor.dom.encode(entity.name)));
      } else {
        editor.formatter.apply("link", { href: entity.link });
      }
      editor.selection.collapse(false);
      editor.focus();
    }, {
      initialValue: selectionText,
      searchEndpoint: "/search/entity-selector",
      entityTypes: "page,book,chapter,bookshelf",
      entityPermission: "view"
    });
  });
}

// resources/js/wysiwyg/common-events.js
function listen3(editor) {
  window.$events.listen("editor::replace", ({ html }) => {
    editor.setContent(html);
  });
  window.$events.listen("editor::append", ({ html }) => {
    const content = editor.getContent() + html;
    editor.setContent(content);
  });
  window.$events.listen("editor::prepend", ({ html }) => {
    const content = html + editor.getContent();
    editor.setContent(content);
  });
  window.$events.listen("editor::insert", ({ html }) => {
    editor.insertContent(html);
  });
  window.$events.listen("editor::focus", () => {
    if (editor.initialized) {
      editor.focus();
    }
  });
}

// resources/js/wysiwyg/scrolling.js
function scrollToText(editor, scrollId) {
  const element = editor.dom.get(encodeURIComponent(scrollId).replace(/!/g, "%21"));
  if (!element) {
    return;
  }
  element.scrollIntoView();
  editor.selection.select(element, true);
  editor.selection.collapse(false);
  editor.focus();
}
function scrollToQueryString(editor) {
  const queryParams = new URL(window.location).searchParams;
  const scrollId = queryParams.get("content-id");
  if (scrollId) {
    scrollToText(editor, scrollId);
  }
}

// resources/js/wysiwyg/drop-paste-handling.js
var wrap;
var draggedContentEditable;
function hasTextContent(node) {
  return node && !!(node.textContent || node.innerText);
}
async function uploadImageFile(file, pageId) {
  if (file === null || file.type.indexOf("image") !== 0) {
    throw new Error("Not an image file");
  }
  const remoteFilename = file.name || `image-${Date.now()}.png`;
  const formData = new FormData();
  formData.append("file", file, remoteFilename);
  formData.append("uploaded_to", pageId);
  const resp = await window.$http.post(window.baseUrl("/images/gallery"), formData);
  return resp.data;
}
function paste(editor, options2, event) {
  const clipboard = new Clipboard(event.clipboardData || event.dataTransfer);
  if (!clipboard.hasItems() || clipboard.containsTabularData()) {
    return;
  }
  const images = clipboard.getImages();
  for (const imageFile of images) {
    const id = `image-${Math.random().toString(16).slice(2)}`;
    const loadingImage = window.baseUrl("/loading.gif");
    event.preventDefault();
    setTimeout(() => {
      editor.insertContent(`<p><img src="${loadingImage}" id="${id}"></p>`);
      uploadImageFile(imageFile, options2.pageId).then((resp) => {
        const safeName = resp.name.replace(/"/g, "");
        const newImageHtml = `<img src="${resp.thumbs.display}" alt="${safeName}" />`;
        const newEl = editor.dom.create("a", {
          target: "_blank",
          href: resp.url
        }, newImageHtml);
        editor.dom.replace(newEl, id);
      }).catch((err) => {
        editor.dom.remove(id);
        window.$events.error(err?.data?.message || options2.translations.imageUploadErrorText);
        console.error(err);
      });
    }, 10);
  }
}
function dragStart2(editor) {
  const node = editor.selection.getNode();
  if (node.nodeName === "IMG") {
    wrap = editor.dom.getParent(node, ".mceTemp");
    if (!wrap && node.parentNode.nodeName === "A" && !hasTextContent(node.parentNode)) {
      wrap = node.parentNode;
    }
  }
  if (node.hasAttribute("contenteditable") && node.getAttribute("contenteditable") === "false") {
    draggedContentEditable = node;
  }
}
function drop3(editor, options2, event) {
  const { dom } = editor;
  const rng = window.tinymce.dom.RangeUtils.getCaretRangeFromPoint(
    event.clientX,
    event.clientY,
    editor.getDoc()
  );
  const templateId = event.dataTransfer && event.dataTransfer.getData("bookstack/template");
  if (templateId) {
    event.preventDefault();
    window.$http.get(`/templates/${templateId}`).then((resp) => {
      editor.selection.setRng(rng);
      editor.undoManager.transact(() => {
        editor.execCommand("mceInsertContent", false, resp.data.html);
      });
    });
  }
  if (dom.getParent(rng.startContainer, ".mceTemp")) {
    event.preventDefault();
  } else if (wrap) {
    event.preventDefault();
    editor.undoManager.transact(() => {
      editor.selection.setRng(rng);
      editor.selection.setNode(wrap);
      dom.remove(wrap);
    });
  }
  if (!event.isDefaultPrevented() && draggedContentEditable) {
    event.preventDefault();
    editor.undoManager.transact(() => {
      const selectedNode = editor.selection.getNode();
      const range = editor.selection.getRng();
      const selectedNodeRoot = selectedNode.closest("body > *");
      if (range.startOffset > range.startContainer.length / 2) {
        selectedNodeRoot.after(draggedContentEditable);
      } else {
        selectedNodeRoot.before(draggedContentEditable);
      }
    });
  }
  if (!event.isDefaultPrevented()) {
    paste(editor, options2, event);
  }
  wrap = null;
}
function listenForDragAndPaste(editor, options2) {
  editor.on("dragstart", () => dragStart2(editor));
  editor.on("drop", (event) => drop3(editor, options2, event));
  editor.on("paste", (event) => paste(editor, options2, event));
}

// resources/js/wysiwyg/toolbars.js
function getPrimaryToolbar(options2) {
  const textDirPlugins = options2.textDirection === "rtl" ? "ltr rtl" : "";
  const toolbar = [
    "undo redo",
    "styles",
    "bold italic underline forecolor backcolor formatoverflow",
    "alignleft aligncenter alignright alignjustify",
    "bullist numlist listoverflow",
    textDirPlugins,
    "link customtable imagemanager-insert insertoverflow",
    "code about fullscreen"
  ];
  return toolbar.filter((row) => Boolean(row)).join(" | ");
}
function registerPrimaryToolbarGroups(editor) {
  editor.ui.registry.addGroupToolbarButton("formatoverflow", {
    icon: "more-drawer",
    tooltip: "More",
    items: "strikethrough superscript subscript inlinecode removeformat"
  });
  editor.ui.registry.addGroupToolbarButton("listoverflow", {
    icon: "more-drawer",
    tooltip: "More",
    items: "tasklist outdent indent"
  });
  editor.ui.registry.addGroupToolbarButton("insertoverflow", {
    icon: "more-drawer",
    tooltip: "More",
    items: "customhr codeeditor drawio media details"
  });
}
function registerLinkContextToolbar(editor) {
  editor.ui.registry.addContextToolbar("linkcontexttoolbar", {
    predicate(node) {
      return node.closest("a") !== null;
    },
    position: "node",
    scope: "node",
    items: "link unlink openlink"
  });
}
function registerImageContextToolbar(editor) {
  editor.ui.registry.addContextToolbar("imagecontexttoolbar", {
    predicate(node) {
      return node.closest("img") !== null;
    },
    position: "node",
    scope: "node",
    items: "image"
  });
}
function registerAdditionalToolbars(editor) {
  registerPrimaryToolbarGroups(editor);
  registerLinkContextToolbar(editor);
  registerImageContextToolbar(editor);
}

// resources/js/wysiwyg/icons.js
var icons = {
  "table-delete-column": '<svg width="24" height="24"><path d="M21 19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14c1.1 0 2 .9 2 2zm-2 0V5h-4v2.2h-2V5h-2v2.2H9V5H5v14h4v-2.1h2V19h2v-2.1h2V19Z"/><path d="M14.829 10.585 13.415 12l1.414 1.414c.943.943-.472 2.357-1.414 1.414L12 13.414l-1.414 1.414c-.944.944-2.358-.47-1.414-1.414L10.586 12l-1.414-1.415c-.943-.942.471-2.357 1.414-1.414L12 10.585l1.344-1.343c1.111-1.112 2.2.627 1.485 1.343z" style="fill-rule:nonzero"/></svg>',
  "table-delete-row": '<svg width="24" height="24"><path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14c0 1.1-.9 2-2 2zm0-2h14v-4h-2.2v-2H19v-2h-2.2V9H19V5H5v4h2.1v2H5v2h2.1v2H5Z"/><path d="M13.415 14.829 12 13.415l-1.414 1.414c-.943.943-2.357-.472-1.414-1.414L10.586 12l-1.414-1.414c-.944-.944.47-2.358 1.414-1.414L12 10.586l1.415-1.414c.942-.943 2.357.471 1.414 1.414L13.415 12l1.343 1.344c1.112 1.111-.627 2.2-1.343 1.485z" style="fill-rule:nonzero"/></svg>',
  "table-insert-column-after": '<svg width="24" height="24"><path d="M16 5h-5v14h5c1.235 0 1.234 2 0 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11c1.229 0 1.236 2 0 2zm-7 6V5H5v6zm0 8v-6H5v6zm11.076-6h-2v2c0 1.333-2 1.333-2 0v-2h-2c-1.335 0-1.335-2 0-2h2V9c0-1.333 2-1.333 2 0v2h1.9c1.572 0 1.113 2 .1 2z"/></svg>',
  "table-insert-column-before": '<svg width="24" height="24"><path d="M8 19h5V5H8C6.764 5 6.766 3 8 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8c-1.229 0-1.236-2 0-2zm7-6v6h4v-6zm0-8v6h4V5ZM3.924 11h2V9c0-1.333 2-1.333 2 0v2h2c1.335 0 1.335 2 0 2h-2v2c0 1.333-2 1.333-2 0v-2h-1.9c-1.572 0-1.113-2-.1-2z"/></svg>',
  "table-insert-row-above": '<svg width="24" height="24"><path d="M5 8v5h14V8c0-1.235 2-1.234 2 0v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8C3 6.77 5 6.764 5 8zm6 7H5v4h6zm8 0h-6v4h6zM13 3.924v2h2c1.333 0 1.333 2 0 2h-2v2c0 1.335-2 1.335-2 0v-2H9c-1.333 0-1.333-2 0-2h2v-1.9c0-1.572 2-1.113 2-.1z"/></svg>',
  "table-insert-row-after": '<svg width="24" height="24"><path d="M19 16v-5H5v5c0 1.235-2 1.234-2 0V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11c0 1.229-2 1.236-2 0zm-6-7h6V5h-6zM5 9h6V5H5Zm6 11.076v-2H9c-1.333 0-1.333-2 0-2h2v-2c0-1.335 2-1.335 2 0v2h2c1.333 0 1.333 2 0 2h-2v1.9c0 1.572-2 1.113-2 .1z"/></svg>',
  table: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2ZM5 14v5h6v-5zm14 0h-6v5h6zm0-7h-6v5h6zM5 12h6V7H5Z"/></svg>',
  "table-delete-table": '<svg width="24" height="24"><path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14c0 1.1-.9 2-2 2zm0-2h14V5H5v14z"/><path d="m13.711 15.423-1.71-1.712-1.712 1.712c-1.14 1.14-2.852-.57-1.71-1.712l1.71-1.71-1.71-1.712c-1.143-1.142.568-2.853 1.71-1.71L12 10.288l1.711-1.71c1.141-1.142 2.852.57 1.712 1.71L13.71 12l1.626 1.626c1.345 1.345-.76 2.663-1.626 1.797z" style="fill-rule:nonzero;stroke-width:1.20992"/></svg>'
};
function registerCustomIcons(editor) {
  for (const [name, svg] of Object.entries(icons)) {
    editor.ui.registry.addIcon(name, svg);
  }
}

// resources/js/wysiwyg/filters.js
function setupBrFilter(editor) {
  editor.serializer.addNodeFilter("br", (nodes) => {
    for (const node of nodes) {
      if (node.parent && node.parent.name === "code") {
        const newline = window.tinymce.html.Node.create("#text");
        newline.value = "\n";
        node.replace(newline);
      }
    }
  });
}
function setupPointerFilter(editor) {
  editor.parser.addNodeFilter("div", (nodes) => {
    for (const node of nodes) {
      const id = node.attr("id") || "";
      const nodeClass = node.attr("class") || "";
      if (id === "pointer" || nodeClass.includes("pointer")) {
        node.remove();
      }
    }
  });
}
function setupFilters(editor) {
  setupBrFilter(editor);
  setupPointerFilter(editor);
}

// resources/js/wysiwyg/plugin-codeeditor.js
function elemIsCodeBlock(elem2) {
  return elem2.tagName.toLowerCase() === "code-block";
}
function showPopup(editor, code, language, callback) {
  const codeEditor = window.$components.first("code-editor");
  const bookMark = editor.selection.getBookmark();
  codeEditor.open(code, language, (newCode, newLang) => {
    callback(newCode, newLang);
    editor.focus();
    editor.selection.moveToBookmark(bookMark);
  }, () => {
    editor.focus();
    editor.selection.moveToBookmark(bookMark);
  });
}
function showPopupForCodeBlock(editor, codeBlock) {
  showPopup(editor, codeBlock.getContent(), codeBlock.getLanguage(), (newCode, newLang) => {
    codeBlock.setContent(newCode, newLang);
  });
}
function defineCodeBlockCustomElement(editor) {
  const doc = editor.getDoc();
  const win = doc.defaultView;
  class CodeBlockElement extends win.HTMLElement {
    constructor() {
      super();
      /**
       * @type {?SimpleEditorInterface}
       */
      __publicField(this, "editor", null);
      this.attachShadow({ mode: "open" });
      const stylesToCopy = document.head.querySelectorAll('link[rel="stylesheet"]:not([media="print"]),style');
      const copiedStyles = Array.from(stylesToCopy).map((styleEl) => styleEl.cloneNode(true));
      const cmContainer = document.createElement("div");
      cmContainer.style.pointerEvents = "none";
      cmContainer.contentEditable = "false";
      cmContainer.classList.add("CodeMirrorContainer");
      cmContainer.classList.toggle("dark-mode", document.documentElement.classList.contains("dark-mode"));
      this.shadowRoot.append(...copiedStyles, cmContainer);
    }
    getLanguage() {
      const getLanguageFromClassList = (classes) => {
        const langClasses = classes.split(" ").filter((cssClass) => cssClass.startsWith("language-"));
        return (langClasses[0] || "").replace("language-", "");
      };
      const code = this.querySelector("code");
      const pre = this.querySelector("pre");
      return getLanguageFromClassList(pre.className) || code && getLanguageFromClassList(code.className) || "";
    }
    setContent(content, language) {
      if (this.editor) {
        this.editor.setContent(content);
        this.editor.setMode(language, content);
      }
      let pre = this.querySelector("pre");
      if (!pre) {
        pre = doc.createElement("pre");
        this.append(pre);
      }
      pre.innerHTML = "";
      const code = doc.createElement("code");
      pre.append(code);
      code.innerText = content;
      code.className = `language-${language}`;
    }
    getContent() {
      const code = this.querySelector("code") || this.querySelector("pre");
      const tempEl = document.createElement("pre");
      tempEl.innerHTML = code.innerHTML.replace(/\ufeff/g, "");
      const brs = tempEl.querySelectorAll("br");
      for (const br of brs) {
        br.replaceWith("\n");
      }
      return tempEl.textContent;
    }
    connectedCallback() {
      const connectedTime = Date.now();
      if (this.editor) {
        return;
      }
      this.cleanChildContent();
      const content = this.getContent();
      const lines = content.split("\n").length;
      const height = lines * 19.2 + 18 + 24;
      this.style.height = `${height}px`;
      const container = this.shadowRoot.querySelector(".CodeMirrorContainer");
      const renderEditor = (Code) => {
        this.editor = Code.wysiwygView(container, this.shadowRoot, content, this.getLanguage());
        setTimeout(() => {
          this.style.height = null;
        }, 12);
      };
      window.importVersioned("code").then((Code) => {
        const timeout = Date.now() - connectedTime < 20 ? 20 : 0;
        setTimeout(() => renderEditor(Code), timeout);
      });
    }
    cleanChildContent() {
      const pre = this.querySelector("pre");
      if (!pre)
        return;
      for (const preChild of pre.childNodes) {
        if (preChild.nodeName === "#text" && preChild.textContent === "\uFEFF") {
          preChild.remove();
        }
      }
    }
  }
  win.customElements.define("code-block", CodeBlockElement);
}
function register3(editor) {
  editor.ui.registry.addIcon("codeblock", '<svg width="24" height="24"><path d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1Zm1 2v14h14V5Z"/><path d="M11.103 15.423c.277.277.277.738 0 .922a.692.692 0 0 1-1.106 0l-4.057-3.78a.738.738 0 0 1 0-1.107l4.057-3.872c.276-.277.83-.277 1.106 0a.724.724 0 0 1 0 1.014L7.6 12.012ZM12.897 8.577c-.245-.312-.2-.675.08-.955.28-.281.727-.27 1.027.033l4.057 3.78a.738.738 0 0 1 0 1.107l-4.057 3.872c-.277.277-.83.277-1.107 0a.724.724 0 0 1 0-1.014l3.504-3.412z"/></svg>');
  editor.ui.registry.addButton("codeeditor", {
    tooltip: "Insert code block",
    icon: "codeblock",
    onAction() {
      editor.execCommand("codeeditor");
    }
  });
  editor.ui.registry.addButton("editcodeeditor", {
    tooltip: "Edit code block",
    icon: "edit-block",
    onAction() {
      editor.execCommand("codeeditor");
    }
  });
  editor.addCommand("codeeditor", () => {
    const selectedNode = editor.selection.getNode();
    const doc = selectedNode.ownerDocument;
    if (elemIsCodeBlock(selectedNode)) {
      showPopupForCodeBlock(editor, selectedNode);
    } else {
      const textContent = editor.selection.getContent({ format: "text" });
      showPopup(editor, textContent, "", (newCode, newLang) => {
        const pre = doc.createElement("pre");
        const code = doc.createElement("code");
        code.classList.add(`language-${newLang}`);
        code.innerText = newCode;
        pre.append(code);
        editor.insertContent(pre.outerHTML);
      });
    }
  });
  editor.on("dblclick", () => {
    const selectedNode = editor.selection.getNode();
    if (elemIsCodeBlock(selectedNode)) {
      showPopupForCodeBlock(editor, selectedNode);
    }
  });
  editor.on("PreInit", () => {
    editor.parser.addNodeFilter("pre", (elms) => {
      for (const el of elms) {
        const wrapper = window.tinymce.html.Node.create("code-block", {
          contenteditable: "false"
        });
        const direction = el.attr("dir");
        if (direction) {
          wrapper.attr("dir", direction);
        }
        const spans = el.getAll("span");
        for (const span of spans) {
          span.unwrap();
        }
        el.attr("style", null);
        el.wrap(wrapper);
      }
    });
    editor.parser.addNodeFilter("code-block", (elms) => {
      for (const el of elms) {
        el.attr("contenteditable", "false");
      }
    });
    editor.serializer.addNodeFilter("code-block", (elms) => {
      for (const el of elms) {
        const direction = el.attr("dir");
        if (direction && el.firstChild) {
          el.firstChild.attr("dir", direction);
        } else if (el.firstChild) {
          el.firstChild.attr("dir", null);
        }
        el.unwrap();
      }
    });
  });
  editor.ui.registry.addContextToolbar("codeeditor", {
    predicate(node) {
      return node.nodeName.toLowerCase() === "code-block";
    },
    items: "editcodeeditor",
    position: "node",
    scope: "node"
  });
  editor.on("PreInit", () => {
    defineCodeBlockCustomElement(editor);
  });
}
function getPlugin() {
  return register3;
}

// resources/js/wysiwyg/plugin-drawio.js
var pageEditor = null;
var currentNode = null;
var options = {};
function isDrawing(node) {
  return node.hasAttribute("drawio-diagram");
}
function showDrawingManager(mceEditor, selectedNode = null) {
  pageEditor = mceEditor;
  currentNode = selectedNode;
  const imageManager = window.$components.first("image-manager");
  imageManager.show((image) => {
    if (selectedNode) {
      const imgElem = selectedNode.querySelector("img");
      pageEditor.undoManager.transact(() => {
        pageEditor.dom.setAttrib(imgElem, "src", image.url);
        pageEditor.dom.setAttrib(selectedNode, "drawio-diagram", image.id);
      });
    } else {
      const imgHTML = `<div drawio-diagram="${image.id}" contenteditable="false"><img src="${image.url}"></div>`;
      pageEditor.insertContent(imgHTML);
    }
  }, "drawio");
}
async function updateContent(pngData) {
  const loadingImage = window.baseUrl("/loading.gif");
  const handleUploadError = (error3) => {
    if (error3.status === 413) {
      window.$events.emit("error", options.translations.serverUploadLimitText);
    } else {
      window.$events.emit("error", options.translations.imageUploadErrorText);
    }
    console.error(error3);
  };
  if (currentNode) {
    close();
    const imgElem = currentNode.querySelector("img");
    try {
      const img = await upload(pngData, options.pageId);
      pageEditor.undoManager.transact(() => {
        pageEditor.dom.setAttrib(imgElem, "src", img.url);
        pageEditor.dom.setAttrib(currentNode, "drawio-diagram", img.id);
      });
    } catch (err) {
      handleUploadError(err);
      throw new Error(`Failed to save image with error: ${err}`);
    }
    return;
  }
  await wait(5);
  const id = `drawing-${Math.random().toString(16).slice(2)}`;
  const wrapId = `drawing-wrap-${Math.random().toString(16).slice(2)}`;
  pageEditor.insertContent(`<div drawio-diagram contenteditable="false" id="${wrapId}"><img src="${loadingImage}" id="${id}"></div>`);
  close();
  try {
    const img = await upload(pngData, options.pageId);
    pageEditor.undoManager.transact(() => {
      pageEditor.dom.setAttrib(id, "src", img.url);
      pageEditor.dom.setAttrib(wrapId, "drawio-diagram", img.id);
    });
  } catch (err) {
    pageEditor.dom.remove(wrapId);
    handleUploadError(err);
    throw new Error(`Failed to save image with error: ${err}`);
  }
}
function drawingInit() {
  if (!currentNode) {
    return Promise.resolve("");
  }
  const drawingId = currentNode.getAttribute("drawio-diagram");
  return load(drawingId);
}
function showDrawingEditor(mceEditor, selectedNode = null) {
  pageEditor = mceEditor;
  currentNode = selectedNode;
  show(options.drawioUrl, drawingInit, updateContent);
}
function register4(editor) {
  editor.addCommand("drawio", () => {
    const selectedNode = editor.selection.getNode();
    showDrawingEditor(editor, isDrawing(selectedNode) ? selectedNode : null);
  });
  editor.ui.registry.addIcon("diagram", `<svg width="24" height="24" fill="${options.darkMode ? "#BBB" : "#000000"}" xmlns="http://www.w3.org/2000/svg"><path d="M20.716 7.639V2.845h-4.794v1.598h-7.99V2.845H3.138v4.794h1.598v7.99H3.138v4.794h4.794v-1.598h7.99v1.598h4.794v-4.794h-1.598v-7.99zM4.736 4.443h1.598V6.04H4.736zm1.598 14.382H4.736v-1.598h1.598zm9.588-1.598h-7.99v-1.598H6.334v-7.99h1.598V6.04h7.99v1.598h1.598v7.99h-1.598zm3.196 1.598H17.52v-1.598h1.598zM17.52 6.04V4.443h1.598V6.04zm-4.21 7.19h-2.79l-.582 1.599H8.643l2.717-7.191h1.119l2.724 7.19h-1.302zm-2.43-1.006h2.086l-1.039-3.06z"/></svg>`);
  editor.ui.registry.addSplitButton("drawio", {
    tooltip: "Insert/edit drawing",
    icon: "diagram",
    onAction() {
      editor.execCommand("drawio");
      window.document.body.dispatchEvent(new Event("mousedown", { bubbles: true }));
    },
    fetch(callback) {
      callback([
        {
          type: "choiceitem",
          text: "Drawing manager",
          value: "drawing-manager"
        }
      ]);
    },
    onItemAction(api, value) {
      if (value === "drawing-manager") {
        const selectedNode = editor.selection.getNode();
        showDrawingManager(editor, isDrawing(selectedNode) ? selectedNode : null);
      }
    }
  });
  editor.on("dblclick", () => {
    const selectedNode = editor.selection.getNode();
    if (!isDrawing(selectedNode))
      return;
    showDrawingEditor(editor, selectedNode);
  });
  editor.on("SetContent", () => {
    const drawings = editor.dom.select("body > div[drawio-diagram]");
    if (!drawings.length)
      return;
    editor.undoManager.transact(() => {
      for (const drawing of drawings) {
        drawing.setAttribute("contenteditable", "false");
      }
    });
  });
}
function getPlugin2(providedOptions) {
  options = providedOptions;
  return register4;
}

// resources/js/wysiwyg/plugins-customhr.js
function register5(editor) {
  editor.addCommand("InsertHorizontalRule", () => {
    const hrElem = document.createElement("hr");
    const cNode = editor.selection.getNode();
    const { parentNode: parentNode2 } = cNode;
    parentNode2.insertBefore(hrElem, cNode);
  });
  editor.ui.registry.addButton("customhr", {
    icon: "horizontal-rule",
    tooltip: "Insert horizontal line",
    onAction() {
      editor.execCommand("InsertHorizontalRule");
    }
  });
}
function getPlugin3() {
  return register5;
}

// resources/js/wysiwyg/plugins-imagemanager.js
function register6(editor) {
  editor.ui.registry.addButton("imagemanager-insert", {
    title: "Insert image",
    icon: "image",
    tooltip: "Insert image",
    onAction() {
      const imageManager = window.$components.first("image-manager");
      imageManager.show((image) => {
        const imageUrl = image.thumbs?.display || image.url;
        let html = `<a href="${image.url}" target="_blank">`;
        html += `<img src="${imageUrl}" alt="${image.name}">`;
        html += "</a>";
        editor.execCommand("mceInsertContent", false, html);
      }, "gallery");
    }
  });
}
function getPlugin4() {
  return register6;
}

// resources/js/wysiwyg/plugins-about.js
function register7(editor) {
  const aboutDialog = {
    title: "About the WYSIWYG Editor",
    url: window.baseUrl("/help/wysiwyg")
  };
  editor.ui.registry.addButton("about", {
    icon: "help",
    tooltip: "About the editor",
    onAction() {
      window.tinymce.activeEditor.windowManager.openUrl(aboutDialog);
    }
  });
}
function getPlugin5() {
  return register7;
}

// resources/js/wysiwyg/util.js
var blockElementTypes = [
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "div",
  "blockquote",
  "pre",
  "code-block",
  "details",
  "ul",
  "ol",
  "table",
  "hr"
];

// resources/js/wysiwyg/plugins-details.js
function getSelectedDetailsBlock(editor) {
  return editor.selection.getNode().closest("details");
}
function setSummary(editor, summaryContent) {
  const details = getSelectedDetailsBlock(editor);
  if (!details)
    return;
  editor.undoManager.transact(() => {
    let summary = details.querySelector("summary");
    if (!summary) {
      summary = document.createElement("summary");
      details.prepend(summary);
    }
    summary.textContent = summaryContent;
  });
}
function detailsDialog(editor) {
  return {
    title: "Edit collapsible block",
    body: {
      type: "panel",
      items: [
        {
          type: "input",
          name: "summary",
          label: "Toggle label"
        }
      ]
    },
    buttons: [
      {
        type: "cancel",
        text: "Cancel"
      },
      {
        type: "submit",
        text: "Save",
        primary: true
      }
    ],
    onSubmit(api) {
      const { summary } = api.getData();
      setSummary(editor, summary);
      api.close();
    }
  };
}
function getSummaryTextFromDetails(element) {
  const summary = element.querySelector("summary");
  if (!summary) {
    return "";
  }
  return summary.textContent;
}
function showDetailLabelEditWindow(editor) {
  const details = getSelectedDetailsBlock(editor);
  const dialog = editor.windowManager.open(detailsDialog(editor));
  dialog.setData({ summary: getSummaryTextFromDetails(details) });
}
function unwrapDetailsInSelection(editor) {
  const details = editor.selection.getNode().closest("details");
  const selectionBm = editor.selection.getBookmark();
  if (details) {
    const elements = details.querySelectorAll("details > *:not(summary, doc-root), doc-root > *");
    editor.undoManager.transact(() => {
      for (const element of elements) {
        details.parentNode.insertBefore(element, details);
      }
      details.remove();
    });
  }
  editor.focus();
  editor.selection.moveToBookmark(selectionBm);
}
function unwrapDetailsEditable(detailsEl) {
  detailsEl.attr("contenteditable", null);
  let madeUnwrap = false;
  for (const child of detailsEl.children()) {
    if (child.name === "doc-root") {
      child.unwrap();
      madeUnwrap = true;
    }
  }
  if (madeUnwrap) {
    unwrapDetailsEditable(detailsEl);
  }
}
function ensureDetailsWrappedInEditable(detailsEl) {
  unwrapDetailsEditable(detailsEl);
  detailsEl.attr("contenteditable", "false");
  const rootWrap = window.tinymce.html.Node.create("doc-root", { contenteditable: "true" });
  let previousBlockWrap = null;
  for (const child of detailsEl.children()) {
    if (child.name === "summary")
      continue;
    const isBlock = blockElementTypes.includes(child.name);
    if (!isBlock) {
      if (!previousBlockWrap) {
        previousBlockWrap = window.tinymce.html.Node.create("p");
        rootWrap.append(previousBlockWrap);
      }
      previousBlockWrap.append(child);
    } else {
      rootWrap.append(child);
      previousBlockWrap = null;
    }
  }
  detailsEl.append(rootWrap);
}
function setupElementFilters(editor) {
  editor.parser.addNodeFilter("details", (elms) => {
    for (const el of elms) {
      ensureDetailsWrappedInEditable(el);
    }
  });
  editor.serializer.addNodeFilter("details", (elms) => {
    for (const el of elms) {
      unwrapDetailsEditable(el);
      el.attr("open", null);
    }
  });
  editor.serializer.addNodeFilter("doc-root", (elms) => {
    for (const el of elms) {
      el.unwrap();
    }
  });
}
function register8(editor) {
  editor.ui.registry.addIcon("details", '<svg width="24" height="24"><path d="M8.2 9a.5.5 0 0 0-.4.8l4 5.6a.5.5 0 0 0 .8 0l4-5.6a.5.5 0 0 0-.4-.8ZM20.122 18.151h-16c-.964 0-.934 2.7 0 2.7h16c1.139 0 1.173-2.7 0-2.7zM20.122 3.042h-16c-.964 0-.934 2.7 0 2.7h16c1.139 0 1.173-2.7 0-2.7z"/></svg>');
  editor.ui.registry.addIcon("togglefold", '<svg height="24"  width="24"><path d="M8.12 19.3c.39.39 1.02.39 1.41 0L12 16.83l2.47 2.47c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-3.17-3.17c-.39-.39-1.02-.39-1.41 0l-3.17 3.17c-.4.38-.4 1.02-.01 1.41zm7.76-14.6c-.39-.39-1.02-.39-1.41 0L12 7.17 9.53 4.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.03 0 1.42l3.17 3.17c.39.39 1.02.39 1.41 0l3.17-3.17c.4-.39.4-1.03.01-1.42z"/></svg>');
  editor.ui.registry.addIcon("togglelabel", '<svg height="18" width="18" viewBox="0 0 24 24"><path d="M21.41,11.41l-8.83-8.83C12.21,2.21,11.7,2,11.17,2H4C2.9,2,2,2.9,2,4v7.17c0,0.53,0.21,1.04,0.59,1.41l8.83,8.83 c0.78,0.78,2.05,0.78,2.83,0l7.17-7.17C22.2,13.46,22.2,12.2,21.41,11.41z M6.5,8C5.67,8,5,7.33,5,6.5S5.67,5,6.5,5S8,5.67,8,6.5 S7.33,8,6.5,8z"/></svg>');
  editor.ui.registry.addButton("details", {
    icon: "details",
    tooltip: "Insert collapsible block",
    onAction() {
      editor.execCommand("InsertDetailsBlock");
    }
  });
  editor.ui.registry.addButton("removedetails", {
    icon: "table-delete-table",
    tooltip: "Unwrap",
    onAction() {
      unwrapDetailsInSelection(editor);
    }
  });
  editor.ui.registry.addButton("editdetials", {
    icon: "togglelabel",
    tooltip: "Edit label",
    onAction() {
      showDetailLabelEditWindow(editor);
    }
  });
  editor.on("dblclick", (event) => {
    if (!getSelectedDetailsBlock(editor) || event.target.closest("doc-root"))
      return;
    showDetailLabelEditWindow(editor);
  });
  editor.ui.registry.addButton("toggledetails", {
    icon: "togglefold",
    tooltip: "Toggle open/closed",
    onAction() {
      const details = getSelectedDetailsBlock(editor);
      details.toggleAttribute("open");
      editor.focus();
    }
  });
  editor.addCommand("InsertDetailsBlock", () => {
    let content = editor.selection.getContent({ format: "html" });
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    const id = `details-${Date.now()}`;
    details.setAttribute("data-id", id);
    details.appendChild(summary);
    if (!content) {
      content = "<p><br></p>";
    }
    details.innerHTML += content;
    editor.insertContent(details.outerHTML);
    editor.focus();
    const domDetails = editor.dom.select(`[data-id="${id}"]`)[0] || null;
    if (domDetails) {
      const firstChild = domDetails.querySelector("doc-root > *");
      if (firstChild) {
        firstChild.focus();
      }
      domDetails.removeAttribute("data-id");
    }
  });
  editor.ui.registry.addContextToolbar("details", {
    predicate(node) {
      return node.nodeName.toLowerCase() === "details";
    },
    items: "editdetials toggledetails removedetails",
    position: "node",
    scope: "node"
  });
  editor.on("PreInit", () => {
    setupElementFilters(editor);
  });
}
function getPlugin6() {
  return register8;
}

// resources/js/wysiwyg/plugins-table-additions.js
function register9(editor) {
  editor.ui.registry.addIcon("tableclearformatting", '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 24 24"><path d="M15.53088 4.64727v-.82364c0-.453-.37063-.82363-.82363-.82363H4.82363C4.37063 3 4 3.37064 4 3.82363v3.29454c0 .453.37064.82364.82363.82364h9.88362c.453 0 .82363-.37064.82363-.82364v-.82363h.82364v3.29454H8.11817v7.4127c0 .453.37064.82364.82364.82364h1.64727c.453 0 .82363-.37064.82363-.82364v-5.76544h6.58907V4.64727Z"/><path d="m18.42672 19.51563-1.54687-1.54688-1.54688 1.54688c-.26751.2675-.70124.2675-.96875 0-.26751-.26752-.26751-.70124 0-.96876L15.9111 17l-1.54688-1.54688c-.26751-.2675-.26751-.70123 0-.96875.26751-.2675.70124-.2675.96875 0l1.54688 1.54688 1.54687-1.54688c.26751-.2675.70124-.2675.96875 0 .26751.26752.26751.70124 0 .96875L17.8486 17l1.54687 1.54688c.26751.2675.26751.70123 0 .96874-.26751.26752-.70124.26752-.96875 0z"/></svg>');
  const tableFirstRowContextSpec = {
    items: " | tablerowheader",
    predicate(elem2) {
      const isTable = elem2.nodeName.toLowerCase() === "table";
      const selectionNode = editor.selection.getNode();
      const parentTable = selectionNode.closest("table");
      if (!isTable || !parentTable) {
        return false;
      }
      const firstRow = parentTable.querySelector("tr");
      return firstRow.contains(selectionNode);
    },
    position: "node",
    scope: "node"
  };
  editor.ui.registry.addContextToolbar("customtabletoolbarfirstrow", tableFirstRowContextSpec);
  editor.addCommand("tableclearformatting", () => {
    const table = editor.dom.getParent(editor.selection.getStart(), "table");
    if (!table) {
      return;
    }
    const attrsToRemove = ["class", "style", "width", "height"];
    const styled = [table, ...table.querySelectorAll(attrsToRemove.map((a) => `[${a}]`).join(","))];
    for (const elem2 of styled) {
      for (const attr of attrsToRemove) {
        elem2.removeAttribute(attr);
      }
    }
  });
  editor.addCommand("tableclearsizes", () => {
    const table = editor.dom.getParent(editor.selection.getStart(), "table");
    if (!table) {
      return;
    }
    const targets = [table, ...table.querySelectorAll("tr,td,th,tbody,thead,tfoot,th>*,td>*")];
    for (const elem2 of targets) {
      elem2.removeAttribute("width");
      elem2.removeAttribute("height");
      elem2.style.height = null;
      elem2.style.width = null;
    }
  });
  const onPreInit = () => {
    const exitingButtons = editor.ui.registry.getAll().buttons;
    editor.ui.registry.addMenuButton("customtable", {
      ...exitingButtons.table,
      fetch: (callback) => callback("inserttable | cell row column | advtablesort | tableprops tableclearformatting tableclearsizes deletetable")
    });
    editor.ui.registry.addMenuItem("tableclearformatting", {
      icon: "tableclearformatting",
      text: "Clear table formatting",
      onSetup: exitingButtons.tableprops.onSetup,
      onAction() {
        editor.execCommand("tableclearformatting");
      }
    });
    editor.ui.registry.addMenuItem("tableclearsizes", {
      icon: "resize",
      text: "Resize to contents",
      onSetup: exitingButtons.tableprops.onSetup,
      onAction() {
        editor.execCommand("tableclearsizes");
      }
    });
    editor.off("PreInit", onPreInit);
  };
  editor.on("PreInit", onPreInit);
}
function getPlugin7() {
  return register9;
}

// resources/js/wysiwyg/plugins-tasklist.js
function elementWithinTaskList(element) {
  const listEl = element.closest("li");
  return listEl && listEl.parentNode.nodeName === "UL" && listEl.classList.contains("task-list-item");
}
function handleTaskListItemClick(event, clickedEl, editor) {
  const bounds = clickedEl.getBoundingClientRect();
  const withinBounds = event.clientX <= bounds.right && event.clientX >= bounds.left && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
  if (!withinBounds) {
    editor.undoManager.transact(() => {
      if (clickedEl.hasAttribute("checked")) {
        clickedEl.removeAttribute("checked");
      } else {
        clickedEl.setAttribute("checked", "checked");
      }
    });
  }
}
function parseTaskListNode(node) {
  node.attr("class", "task-list-item");
  for (const child of node.children()) {
    if (child.name === "input") {
      if (child.attr("checked") === "checked") {
        node.attr("checked", "checked");
      }
      child.remove();
    }
  }
}
function serializeTaskListNode(node) {
  const isChecked = node.attr("checked") === "checked";
  node.attr("checked", null);
  const inputAttrs = { type: "checkbox", disabled: "disabled" };
  if (isChecked) {
    inputAttrs.checked = "checked";
  }
  const checkbox = window.tinymce.html.Node.create("input", inputAttrs);
  checkbox.shortEnded = true;
  if (node.firstChild) {
    node.insert(checkbox, node.firstChild, true);
  } else {
    node.append(checkbox);
  }
}
function register10(editor) {
  editor.ui.registry.addIcon("tasklist", '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22,8c0-0.55-0.45-1-1-1h-7c-0.55,0-1,0.45-1,1s0.45,1,1,1h7C21.55,9,22,8.55,22,8z M13,16c0,0.55,0.45,1,1,1h7 c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1h-7C13.45,15,13,15.45,13,16z M10.47,4.63c0.39,0.39,0.39,1.02,0,1.41l-4.23,4.25 c-0.39,0.39-1.02,0.39-1.42,0L2.7,8.16c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0l1.42,1.42l3.54-3.54 C9.45,4.25,10.09,4.25,10.47,4.63z M10.48,12.64c0.39,0.39,0.39,1.02,0,1.41l-4.23,4.25c-0.39,0.39-1.02,0.39-1.42,0L2.7,16.16 c-0.39-0.39-0.39-1.02,0-1.41s1.02-0.39,1.41,0l1.42,1.42l3.54-3.54C9.45,12.25,10.09,12.25,10.48,12.64L10.48,12.64z"/></svg>');
  editor.ui.registry.addToggleButton("tasklist", {
    tooltip: "Task list",
    icon: "tasklist",
    active: false,
    onAction(api) {
      if (api.isActive()) {
        editor.execCommand("RemoveList");
      } else {
        editor.execCommand("InsertUnorderedList", null, {
          "list-item-attributes": {
            class: "task-list-item"
          },
          "list-style-type": "tasklist"
        });
      }
    },
    onSetup(api) {
      editor.on("NodeChange", (event) => {
        const parentListEl = event.parents.find((el) => el.nodeName === "LI");
        const inList = parentListEl && parentListEl.classList.contains("task-list-item");
        api.setActive(Boolean(inList));
      });
    }
  });
  const existingBullListButton = editor.ui.registry.getAll().buttons.bullist;
  existingBullListButton.onSetup = function customBullListOnSetup(api) {
    editor.on("NodeChange", (event) => {
      const parentList = event.parents.find((el) => el.nodeName === "LI");
      const inTaskList = parentList && parentList.classList.contains("task-list-item");
      const inUlList = parentList && parentList.parentNode.nodeName === "UL";
      api.setActive(Boolean(inUlList && !inTaskList));
    });
  };
  existingBullListButton.onAction = function customBullListOnAction() {
    if (elementWithinTaskList(editor.selection.getNode())) {
      editor.execCommand("InsertOrderedList", null, {
        "list-item-attributes": { class: null }
      });
    }
    editor.execCommand("InsertUnorderedList", null, {
      "list-item-attributes": { class: null }
    });
  };
  const existingNumListButton = editor.ui.registry.getAll().buttons.numlist;
  existingNumListButton.onAction = function customNumListButtonOnAction() {
    editor.execCommand("InsertOrderedList", null, {
      "list-item-attributes": { class: null }
    });
  };
  editor.on("PreInit", () => {
    editor.parser.addNodeFilter("li", (nodes) => {
      for (const node of nodes) {
        if (node.attributes.map.class === "task-list-item") {
          parseTaskListNode(node);
        }
      }
    });
    editor.serializer.addNodeFilter("li", (nodes) => {
      for (const node of nodes) {
        if (node.attributes.map.class === "task-list-item") {
          serializeTaskListNode(node);
        }
      }
    });
  });
  editor.on("click", (event) => {
    const clickedEl = event.target;
    if (clickedEl.nodeName === "LI" && clickedEl.classList.contains("task-list-item")) {
      handleTaskListItemClick(event, clickedEl, editor);
      event.preventDefault();
    }
  });
}
function getPlugin8() {
  return register10;
}

// resources/js/wysiwyg/fixes.js
function handleEmbedAlignmentChanges(editor) {
  function updateClassesForPreview(previewElem) {
    const mediaTarget = previewElem.querySelector("iframe, video");
    if (!mediaTarget) {
      return;
    }
    const alignmentClasses = [...mediaTarget.classList.values()].filter((c) => c.startsWith("align-"));
    const previewAlignClasses = [...previewElem.classList.values()].filter((c) => c.startsWith("align-"));
    previewElem.classList.remove(...previewAlignClasses);
    previewElem.classList.add(...alignmentClasses);
  }
  editor.on("SetContent", () => {
    const previewElems = editor.dom.select("span.mce-preview-object");
    for (const previewElem of previewElems) {
      updateClassesForPreview(previewElem);
    }
  });
  editor.on("FormatApply", (event) => {
    const isAlignment = event.format.startsWith("align");
    if (!event.node || !event.node.matches(".mce-preview-object")) {
      return;
    }
    const realTarget = event.node.querySelector("iframe, video");
    if (isAlignment && realTarget) {
      const className = (editor.formatter.get(event.format)[0]?.classes || [])[0];
      const toAdd = !realTarget.classList.contains(className);
      const wrapperClasses = (event.node.getAttribute("data-mce-p-class") || "").split(" ");
      const wrapperClassesFiltered = wrapperClasses.filter((c) => !c.startsWith("align-"));
      if (toAdd) {
        wrapperClassesFiltered.push(className);
      }
      const classesToApply = wrapperClassesFiltered.join(" ");
      event.node.setAttribute("data-mce-p-class", classesToApply);
      realTarget.setAttribute("class", classesToApply);
      editor.formatter.apply(event.format, {}, realTarget);
      updateClassesForPreview(event.node);
    }
  });
}
function cleanElementDirection(element) {
  const directionChildren = element.querySelectorAll('[dir],[style*="direction"],[style*="text-align"]');
  for (const child of directionChildren) {
    child.removeAttribute("dir");
    child.style.direction = null;
    child.style.textAlign = null;
  }
  element.style.direction = null;
  element.style.textAlign = null;
}
function handleTableCellRangeEvents(editor) {
  let selectedCells = [];
  editor.on("TableSelectionChange", (event) => {
    selectedCells = (event.cells || []).map((cell) => cell.dom);
  });
  editor.on("TableSelectionClear", () => {
    selectedCells = [];
  });
  const attrsToRemove = ["class", "style", "width", "height"];
  editor.on("FormatRemove", () => {
    for (const cell of selectedCells) {
      for (const attr of attrsToRemove) {
        cell.removeAttribute(attr);
      }
    }
  });
  editor.on("ExecCommand", (event) => {
    const command = event.command;
    if (command !== "mceDirectionLTR" && command !== "mceDirectionRTL") {
      return;
    }
    const dir = command === "mceDirectionLTR" ? "ltr" : "rtl";
    for (const cell of selectedCells) {
      cell.setAttribute("dir", dir);
      cleanElementDirection(cell);
    }
  });
}
function handleTextDirectionCleaning(editor) {
  editor.on("ExecCommand", (event) => {
    const command = event.command;
    if (command !== "mceDirectionLTR" && command !== "mceDirectionRTL") {
      return;
    }
    const blocks = editor.selection.getSelectedBlocks();
    for (const block of blocks) {
      cleanElementDirection(block);
    }
  });
}

// resources/js/wysiwyg/config.js
var styleFormats = [
  { title: "Large Header", format: "h2", preview: "color: blue;" },
  { title: "Medium Header", format: "h3" },
  { title: "Small Header", format: "h4" },
  { title: "Tiny Header", format: "h5" },
  {
    title: "Paragraph",
    format: "p",
    exact: true,
    classes: ""
  },
  { title: "Blockquote", format: "blockquote" },
  {
    title: "Callouts",
    items: [
      { title: "Information", format: "calloutinfo" },
      { title: "Success", format: "calloutsuccess" },
      { title: "Warning", format: "calloutwarning" },
      { title: "Danger", format: "calloutdanger" }
    ]
  }
];
var formats = {
  alignleft: { selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img,iframe,video", classes: "align-left" },
  aligncenter: { selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img,iframe,video", classes: "align-center" },
  alignright: { selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img,iframe,video", classes: "align-right" },
  calloutsuccess: { block: "p", exact: true, attributes: { class: "callout success" } },
  calloutinfo: { block: "p", exact: true, attributes: { class: "callout info" } },
  calloutwarning: { block: "p", exact: true, attributes: { class: "callout warning" } },
  calloutdanger: { block: "p", exact: true, attributes: { class: "callout danger" } }
};
var colorMap = [
  "#BFEDD2",
  "",
  "#FBEEB8",
  "",
  "#F8CAC6",
  "",
  "#ECCAFA",
  "",
  "#C2E0F4",
  "",
  "#2DC26B",
  "",
  "#F1C40F",
  "",
  "#E03E2D",
  "",
  "#B96AD9",
  "",
  "#3598DB",
  "",
  "#169179",
  "",
  "#E67E23",
  "",
  "#BA372A",
  "",
  "#843FA1",
  "",
  "#236FA1",
  "",
  "#ECF0F1",
  "",
  "#CED4D9",
  "",
  "#95A5A6",
  "",
  "#7E8C8D",
  "",
  "#34495E",
  "",
  "#000000",
  "",
  "#ffffff",
  ""
];
function filePickerCallback(callback, value, meta) {
  if (meta.filetype === "file") {
    const selector = window.$components.first("entity-selector-popup");
    const selectionText = this.selection.getContent({ format: "text" }).trim();
    selector.show((entity) => {
      callback(entity.link, {
        text: entity.name,
        title: entity.name
      });
    }, {
      initialValue: selectionText,
      searchEndpoint: "/search/entity-selector",
      entityTypes: "page,book,chapter,bookshelf",
      entityPermission: "view"
    });
  }
  if (meta.filetype === "image") {
    const imageManager = window.$components.first("image-manager");
    imageManager.show((image) => {
      callback(image.url, { alt: image.name });
    }, "gallery");
  }
}
function gatherPlugins(options2) {
  const plugins2 = [
    "image",
    "table",
    "link",
    "autolink",
    "fullscreen",
    "code",
    "customhr",
    "autosave",
    "lists",
    "codeeditor",
    "media",
    "imagemanager",
    "about",
    "details",
    "tasklist",
    "tableadditions",
    options2.textDirection === "rtl" ? "directionality" : ""
  ];
  window.tinymce.PluginManager.add("codeeditor", getPlugin());
  window.tinymce.PluginManager.add("customhr", getPlugin3());
  window.tinymce.PluginManager.add("imagemanager", getPlugin4());
  window.tinymce.PluginManager.add("about", getPlugin5());
  window.tinymce.PluginManager.add("details", getPlugin6());
  window.tinymce.PluginManager.add("tasklist", getPlugin8());
  window.tinymce.PluginManager.add("tableadditions", getPlugin7());
  if (options2.drawioUrl) {
    window.tinymce.PluginManager.add("drawio", getPlugin2(options2));
    plugins2.push("drawio");
  }
  return plugins2.filter((plugin) => Boolean(plugin));
}
function addCustomHeadContent(editorDoc) {
  const headContentLines = document.head.innerHTML.split("\n");
  const startLineIndex = headContentLines.findIndex((line) => line.trim() === "<!-- Start: custom user content -->");
  const endLineIndex = headContentLines.findIndex((line) => line.trim() === "<!-- End: custom user content -->");
  if (startLineIndex === -1 || endLineIndex === -1) {
    return;
  }
  const customHeadHtml = headContentLines.slice(startLineIndex + 1, endLineIndex).join("\n");
  const el = editorDoc.createElement("div");
  el.innerHTML = customHeadHtml;
  editorDoc.head.append(...el.children);
}
function getSetupCallback(options2) {
  return function setupCallback(editor) {
    function editorChange() {
      if (options2.darkMode) {
        editor.contentDocument.documentElement.classList.add("dark-mode");
      }
      window.$events.emit("editor-html-change", "");
    }
    editor.on("ExecCommand change input NodeChange ObjectResized", editorChange);
    listen3(editor);
    listenForDragAndPaste(editor, options2);
    editor.on("init", () => {
      editorChange();
      scrollToQueryString(editor);
      window.editor = editor;
      register2(editor);
    });
    editor.on("PreInit", () => {
      setupFilters(editor);
    });
    handleEmbedAlignmentChanges(editor);
    handleTableCellRangeEvents(editor);
    handleTextDirectionCleaning(editor);
    window.$events.emitPublic(options2.containerElement, "editor-tinymce::setup", { editor });
    editor.ui.registry.addButton("inlinecode", {
      tooltip: "Inline code",
      icon: "sourcecode",
      onAction() {
        editor.execCommand("mceToggleFormat", false, "code");
      }
    });
  };
}
function getContentStyle(options2) {
  return `
html, body, html.dark-mode {
    background: ${options2.darkMode ? "#222" : "#fff"};
} 
body {
    padding-left: 15px !important;
    padding-right: 15px !important; 
    height: initial !important;
    margin:0!important; 
    margin-left: auto! important;
    margin-right: auto !important;
    overflow-y: hidden !important;
}`.trim().replace("\n", "");
}
function buildForEditor(options2) {
  window.tinymce.addI18n(options2.language, options2.translationMap);
  const version2 = document.querySelector('script[src*="/dist/app.js"]').getAttribute("src").split("?version=")[1];
  return {
    width: "100%",
    height: "100%",
    selector: "#html-editor",
    cache_suffix: `?version=${version2}`,
    content_css: [
      window.baseUrl("/dist/styles.css")
    ],
    branding: false,
    skin: options2.darkMode ? "tinymce-5-dark" : "tinymce-5",
    body_class: "page-content",
    browser_spellcheck: true,
    relative_urls: false,
    language: options2.language,
    directionality: options2.textDirection,
    remove_script_host: false,
    document_base_url: window.baseUrl("/"),
    end_container_on_empty_block: true,
    remove_trailing_brs: false,
    statusbar: false,
    menubar: false,
    paste_data_images: false,
    extended_valid_elements: "pre[*],svg[*],div[drawio-diagram],details[*],summary[*],div[*],li[class|checked|style]",
    automatic_uploads: false,
    custom_elements: "doc-root,code-block",
    valid_children: [
      "-div[p|h1|h2|h3|h4|h5|h6|blockquote|code-block]",
      "+div[pre|img]",
      "-doc-root[doc-root|#text]",
      "-li[details]",
      "+code-block[pre]",
      "+doc-root[p|h1|h2|h3|h4|h5|h6|blockquote|code-block|div|hr]"
    ].join(","),
    plugins: gatherPlugins(options2),
    contextmenu: false,
    toolbar: getPrimaryToolbar(options2),
    content_style: getContentStyle(options2),
    style_formats: styleFormats,
    style_formats_merge: false,
    media_alt_source: false,
    media_poster: false,
    formats,
    table_style_by_css: true,
    table_use_colgroups: true,
    file_picker_types: "file image",
    color_map: colorMap,
    file_picker_callback: filePickerCallback,
    paste_preprocess(plugin, args) {
      const { content } = args;
      if (content.indexOf('<img src="file://') !== -1) {
        args.content = "";
      }
    },
    init_instance_callback(editor) {
      addCustomHeadContent(editor.getDoc());
    },
    setup(editor) {
      registerCustomIcons(editor);
      registerAdditionalToolbars(editor);
      getSetupCallback(options2)(editor);
    }
  };
}
function buildForInput(options2) {
  window.tinymce.addI18n(options2.language, options2.translationMap);
  const version2 = document.querySelector('script[src*="/dist/app.js"]').getAttribute("src").split("?version=")[1];
  return {
    width: "100%",
    height: "185px",
    target: options2.containerElement,
    cache_suffix: `?version=${version2}`,
    content_css: [
      window.baseUrl("/dist/styles.css")
    ],
    branding: false,
    skin: options2.darkMode ? "tinymce-5-dark" : "tinymce-5",
    body_class: "wysiwyg-input",
    browser_spellcheck: true,
    relative_urls: false,
    language: options2.language,
    directionality: options2.textDirection,
    remove_script_host: false,
    document_base_url: window.baseUrl("/"),
    end_container_on_empty_block: true,
    remove_trailing_brs: false,
    statusbar: false,
    menubar: false,
    plugins: "link autolink lists",
    contextmenu: false,
    toolbar: "bold italic link bullist numlist",
    content_style: getContentStyle(options2),
    file_picker_types: "file",
    valid_elements: "p,a[href|title|target],ol,ul,li,strong,em,br",
    file_picker_callback: filePickerCallback,
    init_instance_callback(editor) {
      addCustomHeadContent(editor.getDoc());
      editor.contentDocument.documentElement.classList.toggle("dark-mode", options2.darkMode);
    }
  };
}

// resources/js/components/page-comment.js
var PageComment = class extends Component {
  setup() {
    this.commentId = this.$opts.commentId;
    this.commentLocalId = this.$opts.commentLocalId;
    this.commentParentId = this.$opts.commentParentId;
    this.deletedText = this.$opts.deletedText;
    this.updatedText = this.$opts.updatedText;
    this.wysiwygEditor = null;
    this.wysiwygLanguage = this.$opts.wysiwygLanguage;
    this.wysiwygTextDirection = this.$opts.wysiwygTextDirection;
    this.container = this.$el;
    this.contentContainer = this.$refs.contentContainer;
    this.form = this.$refs.form;
    this.formCancel = this.$refs.formCancel;
    this.editButton = this.$refs.editButton;
    this.deleteButton = this.$refs.deleteButton;
    this.replyButton = this.$refs.replyButton;
    this.input = this.$refs.input;
    this.setupListeners();
  }
  setupListeners() {
    if (this.replyButton) {
      this.replyButton.addEventListener("click", () => this.$emit("reply", {
        id: this.commentLocalId,
        element: this.container
      }));
    }
    if (this.editButton) {
      this.editButton.addEventListener("click", this.startEdit.bind(this));
      this.form.addEventListener("submit", this.update.bind(this));
      this.formCancel.addEventListener("click", () => this.toggleEditMode(false));
    }
    if (this.deleteButton) {
      this.deleteButton.addEventListener("click", this.delete.bind(this));
    }
  }
  toggleEditMode(show2) {
    this.contentContainer.toggleAttribute("hidden", show2);
    this.form.toggleAttribute("hidden", !show2);
  }
  startEdit() {
    this.toggleEditMode(true);
    if (this.wysiwygEditor) {
      this.wysiwygEditor.focus();
      return;
    }
    const config = buildForInput({
      language: this.wysiwygLanguage,
      containerElement: this.input,
      darkMode: document.documentElement.classList.contains("dark-mode"),
      textDirection: this.wysiwygTextDirection,
      translations: {},
      translationMap: window.editor_translations
    });
    window.tinymce.init(config).then((editors) => {
      this.wysiwygEditor = editors[0];
      setTimeout(() => this.wysiwygEditor.focus(), 50);
    });
  }
  async update(event) {
    event.preventDefault();
    const loading = this.showLoading();
    this.form.toggleAttribute("hidden", true);
    const reqData = {
      html: this.wysiwygEditor.getContent(),
      parent_id: this.parentId || null
    };
    try {
      const resp = await window.$http.put(`/comment/${this.commentId}`, reqData);
      const newComment = htmlToDom(resp.data);
      this.container.replaceWith(newComment);
      window.$events.success(this.updatedText);
    } catch (err) {
      console.error(err);
      window.$events.showValidationErrors(err);
      this.form.toggleAttribute("hidden", false);
      loading.remove();
    }
  }
  async delete() {
    this.showLoading();
    await window.$http.delete(`/comment/${this.commentId}`);
    this.container.closest(".comment-branch").remove();
    window.$events.success(this.deletedText);
    this.$emit("delete");
  }
  showLoading() {
    const loading = getLoading();
    loading.classList.add("px-l");
    this.container.append(loading);
    return loading;
  }
};

// resources/js/components/page-comments.js
var PageComments = class extends Component {
  setup() {
    this.elem = this.$el;
    this.pageId = Number(this.$opts.pageId);
    this.container = this.$refs.commentContainer;
    this.commentCountBar = this.$refs.commentCountBar;
    this.commentsTitle = this.$refs.commentsTitle;
    this.addButtonContainer = this.$refs.addButtonContainer;
    this.replyToRow = this.$refs.replyToRow;
    this.formContainer = this.$refs.formContainer;
    this.form = this.$refs.form;
    this.formInput = this.$refs.formInput;
    this.formReplyLink = this.$refs.formReplyLink;
    this.addCommentButton = this.$refs.addCommentButton;
    this.hideFormButton = this.$refs.hideFormButton;
    this.removeReplyToButton = this.$refs.removeReplyToButton;
    this.wysiwygLanguage = this.$opts.wysiwygLanguage;
    this.wysiwygTextDirection = this.$opts.wysiwygTextDirection;
    this.wysiwygEditor = null;
    this.createdText = this.$opts.createdText;
    this.countText = this.$opts.countText;
    this.parentId = null;
    this.formReplyText = this.formReplyLink?.textContent || "";
    this.setupListeners();
  }
  setupListeners() {
    this.elem.addEventListener("page-comment-delete", () => {
      this.updateCount();
      this.hideForm();
    });
    this.elem.addEventListener("page-comment-reply", (event) => {
      this.setReply(event.detail.id, event.detail.element);
    });
    if (this.form) {
      this.removeReplyToButton.addEventListener("click", this.removeReplyTo.bind(this));
      this.hideFormButton.addEventListener("click", this.hideForm.bind(this));
      this.addCommentButton.addEventListener("click", this.showForm.bind(this));
      this.form.addEventListener("submit", this.saveComment.bind(this));
    }
  }
  saveComment(event) {
    event.preventDefault();
    event.stopPropagation();
    const loading = getLoading();
    loading.classList.add("px-l");
    this.form.after(loading);
    this.form.toggleAttribute("hidden", true);
    const reqData = {
      html: this.wysiwygEditor.getContent(),
      parent_id: this.parentId || null
    };
    window.$http.post(`/comment/${this.pageId}`, reqData).then((resp) => {
      const newElem = htmlToDom(resp.data);
      this.formContainer.after(newElem);
      window.$events.success(this.createdText);
      this.hideForm();
      this.updateCount();
    }).catch((err) => {
      this.form.toggleAttribute("hidden", false);
      window.$events.showValidationErrors(err);
    });
    this.form.toggleAttribute("hidden", false);
    loading.remove();
  }
  updateCount() {
    const count = this.getCommentCount();
    this.commentsTitle.textContent = window.trans_plural(this.countText, count, { count });
  }
  resetForm() {
    this.removeEditor();
    this.formInput.value = "";
    this.parentId = null;
    this.replyToRow.toggleAttribute("hidden", true);
    this.container.append(this.formContainer);
  }
  showForm() {
    this.removeEditor();
    this.formContainer.toggleAttribute("hidden", false);
    this.addButtonContainer.toggleAttribute("hidden", true);
    this.formContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    this.loadEditor();
  }
  hideForm() {
    this.resetForm();
    this.formContainer.toggleAttribute("hidden", true);
    if (this.getCommentCount() > 0) {
      this.elem.append(this.addButtonContainer);
    } else {
      this.commentCountBar.append(this.addButtonContainer);
    }
    this.addButtonContainer.toggleAttribute("hidden", false);
  }
  loadEditor() {
    if (this.wysiwygEditor) {
      this.wysiwygEditor.focus();
      return;
    }
    const config = buildForInput({
      language: this.wysiwygLanguage,
      containerElement: this.formInput,
      darkMode: document.documentElement.classList.contains("dark-mode"),
      textDirection: this.wysiwygTextDirection,
      translations: {},
      translationMap: window.editor_translations
    });
    window.tinymce.init(config).then((editors) => {
      this.wysiwygEditor = editors[0];
      setTimeout(() => this.wysiwygEditor.focus(), 50);
    });
  }
  removeEditor() {
    if (this.wysiwygEditor) {
      this.wysiwygEditor.remove();
      this.wysiwygEditor = null;
    }
  }
  getCommentCount() {
    return this.container.querySelectorAll('[component="page-comment"]').length;
  }
  setReply(commentLocalId, commentElement) {
    const targetFormLocation = commentElement.closest(".comment-branch").querySelector(".comment-branch-children");
    targetFormLocation.append(this.formContainer);
    this.showForm();
    this.parentId = commentLocalId;
    this.replyToRow.toggleAttribute("hidden", false);
    this.formReplyLink.textContent = this.formReplyText.replace("1234", this.parentId);
    this.formReplyLink.href = `#comment${this.parentId}`;
  }
  removeReplyTo() {
    this.parentId = null;
    this.replyToRow.toggleAttribute("hidden", true);
    this.container.append(this.formContainer);
    this.showForm();
  }
};

// resources/js/components/page-display.js
function toggleAnchorHighlighting(elementId, shouldHighlight) {
  forEach(`#page-navigation a[href="#${elementId}"]`, (anchor) => {
    anchor.closest("li").classList.toggle("current-heading", shouldHighlight);
  });
}
function headingVisibilityChange(entries) {
  for (const entry of entries) {
    const isVisible = entry.intersectionRatio === 1;
    toggleAnchorHighlighting(entry.target.id, isVisible);
  }
}
function addNavObserver(headings) {
  const intersectOpts = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 1
  };
  const pageNavObserver = new IntersectionObserver(headingVisibilityChange, intersectOpts);
  for (const heading of headings) {
    pageNavObserver.observe(heading);
  }
}
var PageDisplay = class extends Component {
  setup() {
    this.container = this.$el;
    this.pageId = this.$opts.pageId;
    window.importVersioned("code").then((Code) => Code.highlight());
    this.setupNavHighlighting();
    if (window.location.hash) {
      const text = window.location.hash.replace(/%20/g, " ").substring(1);
      this.goToText(text);
    }
    const sidebarPageNav = document.querySelector(".sidebar-page-nav");
    if (sidebarPageNav) {
      onChildEvent(sidebarPageNav, "a", "click", (event, child) => {
        event.preventDefault();
        window.$components.first("tri-layout").showContent();
        const contentId = child.getAttribute("href").substr(1);
        this.goToText(contentId);
        window.history.pushState(null, null, `#${contentId}`);
      });
    }
  }
  goToText(text) {
    const idElem = document.getElementById(text);
    forEach(".page-content [data-highlighted]", (elem2) => {
      elem2.removeAttribute("data-highlighted");
      elem2.style.backgroundColor = null;
    });
    if (idElem !== null) {
      scrollAndHighlightElement(idElem);
    } else {
      const textElem = findText(".page-content > div > *", text);
      if (textElem) {
        scrollAndHighlightElement(textElem);
      }
    }
  }
  setupNavHighlighting() {
    const pageNav = document.querySelector(".sidebar-page-nav");
    const headings = document.querySelector(".page-content").querySelectorAll("h1, h2, h3, h4, h5, h6");
    if (headings.length > 0 && pageNav !== null) {
      addNavObserver(headings);
    }
  }
};

// resources/js/services/dates.js
function utcTimeStampToLocalTime(timestamp) {
  const date = new Date(timestamp * 1e3);
  const hours = date.getHours();
  const mins = date.getMinutes();
  return `${(hours > 9 ? "" : "0") + hours}:${(mins > 9 ? "" : "0") + mins}`;
}

// resources/js/components/page-editor.js
var PageEditor = class extends Component {
  setup() {
    this.draftsEnabled = this.$opts.draftsEnabled === "true";
    this.editorType = this.$opts.editorType;
    this.pageId = Number(this.$opts.pageId);
    this.isNewDraft = this.$opts.pageNewDraft === "true";
    this.hasDefaultTitle = this.$opts.hasDefaultTitle || false;
    this.container = this.$el;
    this.titleElem = this.$refs.titleContainer.querySelector("input");
    this.saveDraftButton = this.$refs.saveDraft;
    this.discardDraftButton = this.$refs.discardDraft;
    this.discardDraftWrap = this.$refs.discardDraftWrap;
    this.deleteDraftButton = this.$refs.deleteDraft;
    this.deleteDraftWrap = this.$refs.deleteDraftWrap;
    this.draftDisplay = this.$refs.draftDisplay;
    this.draftDisplayIcon = this.$refs.draftDisplayIcon;
    this.changelogInput = this.$refs.changelogInput;
    this.changelogDisplay = this.$refs.changelogDisplay;
    this.changeEditorButtons = this.$manyRefs.changeEditor || [];
    this.switchDialogContainer = this.$refs.switchDialog;
    this.deleteDraftDialogContainer = this.$refs.deleteDraftDialog;
    this.draftText = this.$opts.draftText;
    this.autosaveFailText = this.$opts.autosaveFailText;
    this.editingPageText = this.$opts.editingPageText;
    this.draftDiscardedText = this.$opts.draftDiscardedText;
    this.draftDeleteText = this.$opts.draftDeleteText;
    this.draftDeleteFailText = this.$opts.draftDeleteFailText;
    this.setChangelogText = this.$opts.setChangelogText;
    this.autoSave = {
      interval: null,
      frequency: 3e4,
      last: 0,
      pendingChange: false
    };
    this.shownWarningsCache = /* @__PURE__ */ new Set();
    if (this.pageId !== 0 && this.draftsEnabled) {
      window.setTimeout(() => {
        this.startAutoSave();
      }, 1e3);
    }
    this.draftDisplay.innerHTML = this.draftText;
    this.setupListeners();
    this.setInitialFocus();
  }
  setupListeners() {
    window.$events.listen("editor-save-draft", this.saveDraft.bind(this));
    window.$events.listen("editor-save-page", this.savePage.bind(this));
    const onContentChange = () => {
      this.autoSave.pendingChange = true;
    };
    window.$events.listen("editor-html-change", onContentChange);
    window.$events.listen("editor-markdown-change", onContentChange);
    this.titleElem.addEventListener("input", onContentChange);
    const updateChangelogDebounced = debounce(this.updateChangelogDisplay.bind(this), 300, false);
    this.changelogInput.addEventListener("input", updateChangelogDebounced);
    onSelect(this.saveDraftButton, this.saveDraft.bind(this));
    onSelect(this.discardDraftButton, this.discardDraft.bind(this));
    onSelect(this.deleteDraftButton, this.deleteDraft.bind(this));
    onSelect(this.changeEditorButtons, this.changeEditor.bind(this));
  }
  setInitialFocus() {
    if (this.hasDefaultTitle) {
      this.titleElem.select();
      return;
    }
    window.setTimeout(() => {
      window.$events.emit("editor::focus", "");
    }, 500);
  }
  startAutoSave() {
    this.autoSave.interval = window.setInterval(this.runAutoSave.bind(this), this.autoSave.frequency);
  }
  runAutoSave() {
    const savedRecently = Date.now() - this.autoSave.last < this.autoSave.frequency / 2;
    if (savedRecently || !this.autoSave.pendingChange) {
      return;
    }
    this.saveDraft();
  }
  savePage() {
    this.container.closest("form").submit();
  }
  async saveDraft() {
    const data = { name: this.titleElem.value.trim() };
    const editorContent = this.getEditorComponent().getContent();
    Object.assign(data, editorContent);
    let didSave = false;
    try {
      const resp = await window.$http.put(`/ajax/page/${this.pageId}/save-draft`, data);
      if (!this.isNewDraft) {
        this.discardDraftWrap.toggleAttribute("hidden", false);
        this.deleteDraftWrap.toggleAttribute("hidden", false);
      }
      this.draftNotifyChange(`${resp.data.message} ${utcTimeStampToLocalTime(resp.data.timestamp)}`);
      this.autoSave.last = Date.now();
      if (resp.data.warning && !this.shownWarningsCache.has(resp.data.warning)) {
        window.$events.emit("warning", resp.data.warning);
        this.shownWarningsCache.add(resp.data.warning);
      }
      didSave = true;
      this.autoSave.pendingChange = false;
    } catch (err) {
      try {
        const saveKey = `draft-save-fail-${(/* @__PURE__ */ new Date()).toISOString()}`;
        window.localStorage.setItem(saveKey, JSON.stringify(data));
      } catch (lsErr) {
        console.error(lsErr);
      }
      window.$events.emit("error", this.autosaveFailText);
    }
    return didSave;
  }
  draftNotifyChange(text) {
    this.draftDisplay.innerText = text;
    this.draftDisplayIcon.classList.add("visible");
    window.setTimeout(() => {
      this.draftDisplayIcon.classList.remove("visible");
    }, 2e3);
  }
  async discardDraft(notify = true) {
    let response;
    try {
      response = await window.$http.get(`/ajax/page/${this.pageId}`);
    } catch (e) {
      console.error(e);
      return;
    }
    if (this.autoSave.interval) {
      window.clearInterval(this.autoSave.interval);
    }
    this.draftDisplay.innerText = this.editingPageText;
    this.discardDraftWrap.toggleAttribute("hidden", true);
    window.$events.emit("editor::replace", {
      html: response.data.html,
      markdown: response.data.markdown
    });
    this.titleElem.value = response.data.name;
    window.setTimeout(() => {
      this.startAutoSave();
    }, 1e3);
    if (notify) {
      window.$events.success(this.draftDiscardedText);
    }
  }
  async deleteDraft() {
    const dialog = window.$components.firstOnElement(this.deleteDraftDialogContainer, "confirm-dialog");
    const confirmed = await dialog.show();
    if (!confirmed) {
      return;
    }
    try {
      const discard = this.discardDraft(false);
      const draftDelete = window.$http.delete(`/page-revisions/user-drafts/${this.pageId}`);
      await Promise.all([discard, draftDelete]);
      window.$events.success(this.draftDeleteText);
      this.deleteDraftWrap.toggleAttribute("hidden", true);
    } catch (err) {
      console.error(err);
      window.$events.error(this.draftDeleteFailText);
    }
  }
  updateChangelogDisplay() {
    let summary = this.changelogInput.value.trim();
    if (summary.length === 0) {
      summary = this.setChangelogText;
    } else if (summary.length > 16) {
      summary = `${summary.slice(0, 16)}...`;
    }
    this.changelogDisplay.innerText = summary;
  }
  async changeEditor(event) {
    event.preventDefault();
    const link = event.target.closest("a").href;
    const dialog = window.$components.firstOnElement(this.switchDialogContainer, "confirm-dialog");
    const [saved, confirmed] = await Promise.all([this.saveDraft(), dialog.show()]);
    if (saved && confirmed) {
      window.location = link;
    }
  }
  /**
   * @return MarkdownEditor|WysiwygEditor
   */
  getEditorComponent() {
    return window.$components.first("markdown-editor") || window.$components.first("wysiwyg-editor");
  }
};

// resources/js/components/page-picker.js
function toggleElem(elem2, show2) {
  elem2.toggleAttribute("hidden", !show2);
}
var PagePicker = class extends Component {
  setup() {
    this.input = this.$refs.input;
    this.resetButton = this.$refs.resetButton;
    this.selectButton = this.$refs.selectButton;
    this.display = this.$refs.display;
    this.defaultDisplay = this.$refs.defaultDisplay;
    this.buttonSep = this.$refs.buttonSeperator;
    this.selectorEndpoint = this.$opts.selectorEndpoint;
    this.value = this.input.value;
    this.setupListeners();
  }
  setupListeners() {
    this.selectButton.addEventListener("click", this.showPopup.bind(this));
    this.display.parentElement.addEventListener("click", this.showPopup.bind(this));
    this.display.addEventListener("click", (e) => e.stopPropagation());
    this.resetButton.addEventListener("click", () => {
      this.setValue("", "");
    });
  }
  showPopup() {
    const selectorPopup = window.$components.first("entity-selector-popup");
    selectorPopup.show((entity) => {
      this.setValue(entity.id, entity.name);
    }, {
      initialValue: "",
      searchEndpoint: this.selectorEndpoint,
      entityTypes: "page",
      entityPermission: "view"
    });
  }
  setValue(value, name) {
    this.value = value;
    this.input.value = value;
    this.controlView(name);
  }
  controlView(name) {
    const hasValue = this.value && this.value !== 0;
    toggleElem(this.resetButton, hasValue);
    toggleElem(this.buttonSep, hasValue);
    toggleElem(this.defaultDisplay, !hasValue);
    toggleElem(this.display, hasValue);
    if (hasValue) {
      const id = this.getAssetIdFromVal();
      this.display.textContent = `#${id}, ${name}`;
      this.display.href = window.baseUrl(`/link/${id}`);
    }
  }
  getAssetIdFromVal() {
    return Number(this.value);
  }
};

// resources/js/components/permissions-table.js
var PermissionsTable = class extends Component {
  setup() {
    this.container = this.$el;
    this.cellSelector = this.$opts.cellSelector || "td,th";
    this.rowSelector = this.$opts.rowSelector || "tr";
    for (const toggleAllElem of this.$manyRefs.toggleAll || []) {
      toggleAllElem.addEventListener("click", this.toggleAllClick.bind(this));
    }
    for (const toggleRowElem of this.$manyRefs.toggleRow || []) {
      toggleRowElem.addEventListener("click", this.toggleRowClick.bind(this));
    }
    for (const toggleColElem of this.$manyRefs.toggleColumn || []) {
      toggleColElem.addEventListener("click", this.toggleColumnClick.bind(this));
    }
  }
  toggleAllClick(event) {
    event.preventDefault();
    this.toggleAllInElement(this.container);
  }
  toggleRowClick(event) {
    event.preventDefault();
    this.toggleAllInElement(event.target.closest(this.rowSelector));
  }
  toggleColumnClick(event) {
    event.preventDefault();
    const tableCell = event.target.closest(this.cellSelector);
    const colIndex = Array.from(tableCell.parentElement.children).indexOf(tableCell);
    const tableRows = this.container.querySelectorAll(this.rowSelector);
    const inputsToToggle = [];
    for (const row of tableRows) {
      const targetCell = row.children[colIndex];
      if (targetCell) {
        inputsToToggle.push(...targetCell.querySelectorAll("input[type=checkbox]"));
      }
    }
    this.toggleAllInputs(inputsToToggle);
  }
  toggleAllInElement(domElem) {
    const inputsToToggle = domElem.querySelectorAll("input[type=checkbox]");
    this.toggleAllInputs(inputsToToggle);
  }
  toggleAllInputs(inputsToToggle) {
    const currentState = inputsToToggle.length > 0 ? inputsToToggle[0].checked : false;
    for (const checkbox of inputsToToggle) {
      checkbox.checked = !currentState;
      checkbox.dispatchEvent(new Event("change"));
    }
  }
};

// resources/js/components/pointer.js
var Pointer = class extends Component {
  setup() {
    this.container = this.$el;
    this.pointer = this.$refs.pointer;
    this.linkInput = this.$refs.linkInput;
    this.linkButton = this.$refs.linkButton;
    this.includeInput = this.$refs.includeInput;
    this.includeButton = this.$refs.includeButton;
    this.sectionModeButton = this.$refs.sectionModeButton;
    this.modeToggles = this.$manyRefs.modeToggle;
    this.modeSections = this.$manyRefs.modeSection;
    this.pageId = this.$opts.pageId;
    this.showing = false;
    this.isSelection = false;
    this.setupListeners();
  }
  setupListeners() {
    this.includeButton.addEventListener("click", () => copyTextToClipboard(this.includeInput.value));
    this.linkButton.addEventListener("click", () => copyTextToClipboard(this.linkInput.value));
    onSelect([this.includeInput, this.linkInput], (event) => {
      event.target.select();
      event.stopPropagation();
    });
    onEvents(this.pointer, ["click", "focus"], (event) => {
      event.stopPropagation();
    });
    onEvents(document.body, ["click", "focus"], () => {
      if (!this.showing || this.isSelection)
        return;
      this.hidePointer();
    });
    onEscapePress(this.pointer, this.hidePointer.bind(this));
    const pageContent = document.querySelector(".page-content");
    onEvents(pageContent, ["mouseup", "keyup"], (event) => {
      event.stopPropagation();
      const targetEl = event.target.closest('[id^="bkmrk"]');
      if (targetEl && window.getSelection().toString().length > 0) {
        this.showPointerAtTarget(targetEl, event.pageX, false);
      }
    });
    onSelect(this.sectionModeButton, this.enterSectionSelectMode.bind(this));
    onSelect(this.modeToggles, (event) => {
      for (const section of this.modeSections) {
        const show2 = !section.contains(event.target);
        section.toggleAttribute("hidden", !show2);
      }
      this.modeToggles.find((b) => b !== event.target).focus();
    });
  }
  hidePointer() {
    this.pointer.style.display = null;
    this.showing = false;
  }
  /**
   * Move and display the pointer at the given element, targeting the given screen x-position if possible.
   * @param {Element} element
   * @param {Number} xPosition
   * @param {Boolean} keyboardMode
   */
  showPointerAtTarget(element, xPosition, keyboardMode) {
    this.updateForTarget(element);
    this.pointer.style.display = "block";
    const targetBounds = element.getBoundingClientRect();
    const pointerBounds = this.pointer.getBoundingClientRect();
    const xTarget = Math.min(Math.max(xPosition, targetBounds.left), targetBounds.right);
    const xOffset = xTarget - pointerBounds.width / 2;
    const yOffset = targetBounds.top - pointerBounds.height - 16;
    this.pointer.style.left = `${xOffset}px`;
    this.pointer.style.top = `${yOffset}px`;
    this.showing = true;
    this.isSelection = true;
    setTimeout(() => {
      this.isSelection = false;
    }, 100);
    const scrollListener = () => {
      this.hidePointer();
      window.removeEventListener("scroll", scrollListener, { passive: true });
    };
    element.parentElement.insertBefore(this.pointer, element);
    if (!keyboardMode) {
      window.addEventListener("scroll", scrollListener, { passive: true });
    }
  }
  /**
   * Update the pointer inputs/content for the given target element.
   * @param {?Element} element
   */
  updateForTarget(element) {
    const permaLink = window.baseUrl(`/link/${this.pageId}#${element.id}`);
    const includeTag = `{{@${this.pageId}#${element.id}}}`;
    this.linkInput.value = permaLink;
    this.includeInput.value = includeTag;
    const editAnchor = this.pointer.querySelector("#pointer-edit");
    if (editAnchor && element) {
      const { editHref } = editAnchor.dataset;
      const elementId = element.id;
      const queryContent = element.textContent && element.textContent.substring(0, 50);
      editAnchor.href = `${editHref}?content-id=${elementId}&content-text=${encodeURIComponent(queryContent)}`;
    }
  }
  enterSectionSelectMode() {
    const sections = Array.from(document.querySelectorAll('.page-content [id^="bkmrk"]'));
    for (const section of sections) {
      section.setAttribute("tabindex", "0");
    }
    sections[0].focus();
    onEnterPress(sections, (event) => {
      this.showPointerAtTarget(event.target, 0, true);
      this.pointer.focus();
    });
  }
};

// resources/js/components/popup.js
var Popup = class extends Component {
  setup() {
    this.container = this.$el;
    this.hideButtons = this.$manyRefs.hide || [];
    this.onkeyup = null;
    this.onHide = null;
    this.setupListeners();
  }
  setupListeners() {
    let lastMouseDownTarget = null;
    this.container.addEventListener("mousedown", (event) => {
      lastMouseDownTarget = event.target;
    });
    this.container.addEventListener("click", (event) => {
      if (event.target === this.container && lastMouseDownTarget === this.container) {
        this.hide();
      }
    });
    onSelect(this.hideButtons, () => this.hide());
  }
  hide(onComplete = null) {
    fadeOut(this.container, 120, onComplete);
    if (this.onkeyup) {
      window.removeEventListener("keyup", this.onkeyup);
      this.onkeyup = null;
    }
    if (this.onHide) {
      this.onHide();
    }
  }
  show(onComplete = null, onHide = null) {
    fadeIn(this.container, 120, onComplete);
    this.onkeyup = (event) => {
      if (event.key === "Escape") {
        this.hide();
      }
    };
    window.addEventListener("keyup", this.onkeyup);
    this.onHide = onHide;
  }
};

// resources/js/components/setting-app-color-scheme.js
var SettingAppColorScheme = class extends Component {
  setup() {
    this.container = this.$el;
    this.mode = this.$opts.mode;
    this.lightContainer = this.$refs.lightContainer;
    this.darkContainer = this.$refs.darkContainer;
    this.container.addEventListener("tabs-change", (event) => {
      const panel = event.detail.showing;
      const newMode = panel === "color-scheme-panel-light" ? "light" : "dark";
      this.handleModeChange(newMode);
    });
    const onInputChange = (event) => {
      this.updateAppColorsFromInputs();
      if (event.target.name.startsWith("setting-app-color")) {
        this.updateLightForInput(event.target);
      }
    };
    this.container.addEventListener("change", onInputChange);
    this.container.addEventListener("input", onInputChange);
  }
  handleModeChange(newMode) {
    this.mode = newMode;
    const isDark = newMode === "dark";
    document.documentElement.classList.toggle("dark-mode", isDark);
    this.updateAppColorsFromInputs();
  }
  updateAppColorsFromInputs() {
    const inputContainer = this.mode === "dark" ? this.darkContainer : this.lightContainer;
    const inputs = inputContainer.querySelectorAll('input[type="color"]');
    for (const input of inputs) {
      const splitName = input.name.split("-");
      const colorPos = splitName.indexOf("color");
      let cssId = splitName.slice(1, colorPos).join("-");
      if (cssId === "app") {
        cssId = "primary";
      }
      const varName = `--color-${cssId}`;
      document.body.style.setProperty(varName, input.value);
    }
  }
  /**
   * Update the 'light' app color variant for the given input.
   * @param {HTMLInputElement} input
   */
  updateLightForInput(input) {
    const lightName = input.name.replace("-color", "-color-light");
    const hexVal = input.value;
    const rgb = this.hexToRgb(hexVal);
    const rgbLightVal = `rgba(${[rgb.r, rgb.g, rgb.b, "0.15"].join(",")})`;
    const lightColorInput = this.container.querySelector(`input[name="${lightName}"][type="hidden"]`);
    lightColorInput.value = rgbLightVal;
  }
  /**
   * Covert a hex color code to rgb components.
   * @attribution https://stackoverflow.com/a/5624139
   * @param {String} hex
   * @returns {{r: Number, g: Number, b: Number}}
   */
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return {
      r: result ? parseInt(result[1], 16) : 0,
      g: result ? parseInt(result[2], 16) : 0,
      b: result ? parseInt(result[3], 16) : 0
    };
  }
};

// resources/js/components/setting-color-picker.js
var SettingColorPicker = class extends Component {
  setup() {
    this.colorInput = this.$refs.input;
    this.resetButton = this.$refs.resetButton;
    this.defaultButton = this.$refs.defaultButton;
    this.currentColor = this.$opts.current;
    this.defaultColor = this.$opts.default;
    this.resetButton.addEventListener("click", () => this.setValue(this.currentColor));
    this.defaultButton.addEventListener("click", () => this.setValue(this.defaultColor));
  }
  setValue(value) {
    this.colorInput.value = value;
    this.colorInput.dispatchEvent(new Event("change", { bubbles: true }));
  }
};

// resources/js/components/setting-homepage-control.js
var SettingHomepageControl = class extends Component {
  setup() {
    this.typeControl = this.$refs.typeControl;
    this.pagePickerContainer = this.$refs.pagePickerContainer;
    this.typeControl.addEventListener("change", this.controlPagePickerVisibility.bind(this));
    this.controlPagePickerVisibility();
  }
  controlPagePickerVisibility() {
    const showPagePicker = this.typeControl.value === "page";
    this.pagePickerContainer.style.display = showPagePicker ? "block" : "none";
  }
};

// resources/js/components/shelf-sort.js
var itemActions = {
  move_up(item) {
    const list = item.parentNode;
    const index2 = Array.from(list.children).indexOf(item);
    const newIndex2 = Math.max(index2 - 1, 0);
    list.insertBefore(item, list.children[newIndex2] || null);
  },
  move_down(item) {
    const list = item.parentNode;
    const index2 = Array.from(list.children).indexOf(item);
    const newIndex2 = Math.min(index2 + 2, list.children.length);
    list.insertBefore(item, list.children[newIndex2] || null);
  },
  remove(item, shelfBooksList, allBooksList) {
    allBooksList.appendChild(item);
  },
  add(item, shelfBooksList) {
    shelfBooksList.appendChild(item);
  }
};
var ShelfSort = class extends Component {
  setup() {
    this.elem = this.$el;
    this.input = this.$refs.input;
    this.shelfBookList = this.$refs.shelfBookList;
    this.allBookList = this.$refs.allBookList;
    this.bookSearchInput = this.$refs.bookSearch;
    this.sortButtonContainer = this.$refs.sortButtonContainer;
    this.lastSort = null;
    this.initSortable();
    this.setupListeners();
  }
  initSortable() {
    const scrollBoxes = this.elem.querySelectorAll(".scroll-box");
    for (const scrollBox of scrollBoxes) {
      new sortable_esm_default(scrollBox, {
        group: "shelf-books",
        ghostClass: "primary-background-light",
        handle: ".handle",
        animation: 150,
        onSort: this.onChange.bind(this)
      });
    }
  }
  setupListeners() {
    this.elem.addEventListener("click", (event) => {
      const sortItemAction = event.target.closest(".scroll-box-item button[data-action]");
      if (sortItemAction) {
        this.sortItemActionClick(sortItemAction);
      }
    });
    this.bookSearchInput.addEventListener("input", () => {
      this.filterBooksByName(this.bookSearchInput.value);
    });
    this.sortButtonContainer.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-sort]");
      if (button) {
        this.sortShelfBooks(button.dataset.sort);
      }
    });
  }
  /**
   * @param {String} filterVal
   */
  filterBooksByName(filterVal) {
    if (!this.allBookList.style.height) {
      this.allBookList.style.height = `${this.allBookList.getBoundingClientRect().height}px`;
    }
    const books = this.allBookList.children;
    const lowerFilter = filterVal.trim().toLowerCase();
    for (const bookEl of books) {
      const show2 = !filterVal || bookEl.textContent.toLowerCase().includes(lowerFilter);
      bookEl.style.display = show2 ? null : "none";
    }
  }
  /**
   * Called when a sort item action button is clicked.
   * @param {HTMLElement} sortItemAction
   */
  sortItemActionClick(sortItemAction) {
    const sortItem = sortItemAction.closest(".scroll-box-item");
    const { action } = sortItemAction.dataset;
    const actionFunction = itemActions[action];
    actionFunction(sortItem, this.shelfBookList, this.allBookList);
    this.onChange();
  }
  onChange() {
    const shelfBookElems = Array.from(this.shelfBookList.querySelectorAll("[data-id]"));
    this.input.value = shelfBookElems.map((elem2) => elem2.getAttribute("data-id")).join(",");
  }
  sortShelfBooks(sortProperty) {
    const books = Array.from(this.shelfBookList.children);
    const reverse = sortProperty === this.lastSort;
    books.sort((bookA, bookB) => {
      const aProp = bookA.dataset[sortProperty].toLowerCase();
      const bProp = bookB.dataset[sortProperty].toLowerCase();
      if (reverse) {
        return bProp.localeCompare(aProp);
      }
      return aProp.localeCompare(bProp);
    });
    for (const book of books) {
      this.shelfBookList.append(book);
    }
    this.lastSort = this.lastSort === sortProperty ? null : sortProperty;
    this.onChange();
  }
};

// resources/js/components/shortcuts.js
function reverseMap(map2) {
  const reversed = {};
  for (const [key, value] of Object.entries(map2)) {
    reversed[value] = key;
  }
  return reversed;
}
var Shortcuts = class extends Component {
  setup() {
    this.container = this.$el;
    this.mapById = JSON.parse(this.$opts.keyMap);
    this.mapByShortcut = reverseMap(this.mapById);
    this.hintsShowing = false;
    this.hideHints = this.hideHints.bind(this);
    this.hintAbortController = null;
    this.setupListeners();
  }
  setupListeners() {
    window.addEventListener("keydown", (event) => {
      if (event.target.closest("input, select, textarea, .cm-editor")) {
        return;
      }
      if (event.key === "?") {
        if (this.hintsShowing) {
          this.hideHints();
        } else {
          this.showHints();
        }
        return;
      }
      this.handleShortcutPress(event);
    });
  }
  /**
   * @param {KeyboardEvent} event
   */
  handleShortcutPress(event) {
    const keys = [
      event.ctrlKey ? "Ctrl" : "",
      event.metaKey ? "Cmd" : "",
      event.key
    ];
    const combo = keys.filter((s) => Boolean(s)).join(" + ");
    const shortcutId = this.mapByShortcut[combo];
    if (shortcutId) {
      const wasHandled = this.runShortcut(shortcutId);
      if (wasHandled) {
        event.preventDefault();
      }
    }
  }
  /**
   * Run the given shortcut, and return a boolean to indicate if the event
   * was successfully handled by a shortcut action.
   * @param {String} id
   * @return {boolean}
   */
  runShortcut(id) {
    const el = this.container.querySelector(`[data-shortcut="${id}"]`);
    if (!el) {
      return false;
    }
    if (el.matches("input, textarea, select")) {
      el.focus();
      return true;
    }
    if (el.matches("a, button")) {
      el.click();
      return true;
    }
    if (el.matches("div[tabindex]")) {
      el.click();
      el.focus();
      return true;
    }
    console.error("Shortcut attempted to be ran for element type that does not have handling setup", el);
    return false;
  }
  showHints() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("shortcut-container");
    this.container.append(wrapper);
    const shortcutEls = this.container.querySelectorAll("[data-shortcut]");
    const displayedIds = /* @__PURE__ */ new Set();
    for (const shortcutEl of shortcutEls) {
      const id = shortcutEl.getAttribute("data-shortcut");
      if (displayedIds.has(id)) {
        continue;
      }
      const key = this.mapById[id];
      this.showHintLabel(shortcutEl, key, wrapper);
      displayedIds.add(id);
    }
    this.hintAbortController = new AbortController();
    const signal = this.hintAbortController.signal;
    window.addEventListener("scroll", this.hideHints, { signal });
    window.addEventListener("focus", this.hideHints, { signal });
    window.addEventListener("blur", this.hideHints, { signal });
    window.addEventListener("click", this.hideHints, { signal });
    this.hintsShowing = true;
  }
  /**
   * @param {Element} targetEl
   * @param {String} key
   * @param {Element} wrapper
   */
  showHintLabel(targetEl, key, wrapper) {
    const targetBounds = targetEl.getBoundingClientRect();
    const label = document.createElement("div");
    label.classList.add("shortcut-hint");
    label.textContent = key;
    const linkage = document.createElement("div");
    linkage.classList.add("shortcut-linkage");
    linkage.style.left = `${targetBounds.x}px`;
    linkage.style.top = `${targetBounds.y}px`;
    linkage.style.width = `${targetBounds.width}px`;
    linkage.style.height = `${targetBounds.height}px`;
    wrapper.append(label, linkage);
    const labelBounds = label.getBoundingClientRect();
    label.style.insetInlineStart = `${targetBounds.x + targetBounds.width - (labelBounds.width + 6)}px`;
    label.style.insetBlockStart = `${targetBounds.y + (targetBounds.height - labelBounds.height) / 2}px`;
  }
  hideHints() {
    const wrapper = this.container.querySelector(".shortcut-container");
    wrapper.remove();
    this.hintAbortController?.abort();
    this.hintsShowing = false;
  }
};

// resources/js/components/shortcut-input.js
var ignoreKeys = ["Control", "Alt", "Shift", "Meta", "Super", " ", "+", "Tab", "Escape"];
var ShortcutInput = class extends Component {
  setup() {
    this.input = this.$el;
    this.setupListeners();
  }
  setupListeners() {
    this.listenerRecordKey = this.listenerRecordKey.bind(this);
    this.input.addEventListener("focus", () => {
      this.startListeningForInput();
    });
    this.input.addEventListener("blur", () => {
      this.stopListeningForInput();
    });
  }
  startListeningForInput() {
    this.input.addEventListener("keydown", this.listenerRecordKey);
  }
  /**
   * @param {KeyboardEvent} event
   */
  listenerRecordKey(event) {
    if (ignoreKeys.includes(event.key)) {
      return;
    }
    const keys = [
      event.ctrlKey ? "Ctrl" : "",
      event.metaKey ? "Cmd" : "",
      event.key
    ];
    this.input.value = keys.filter((s) => Boolean(s)).join(" + ");
  }
  stopListeningForInput() {
    this.input.removeEventListener("keydown", this.listenerRecordKey);
  }
};

// resources/js/components/sortable-list.js
var SortableList = class extends Component {
  setup() {
    this.container = this.$el;
    this.handleSelector = this.$opts.handleSelector;
    const sortable = new sortable_esm_default(this.container, {
      handle: this.handleSelector,
      animation: 150,
      onSort: () => {
        this.$emit("sort", { ids: sortable.toArray() });
      },
      setData(dataTransferItem, dragEl2) {
        const jsonContent = dragEl2.getAttribute("data-drag-content");
        if (jsonContent) {
          const contentByType = JSON.parse(jsonContent);
          for (const [type, content] of Object.entries(contentByType)) {
            dataTransferItem.setData(type, content);
          }
        }
      },
      revertOnSpill: true,
      dropBubble: true,
      dragoverBubble: false
    });
  }
};

// resources/js/components/submit-on-change.js
var SubmitOnChange = class extends Component {
  setup() {
    this.filter = this.$opts.filter;
    this.$el.addEventListener("change", (event) => {
      if (this.filter && !event.target.matches(this.filter)) {
        return;
      }
      const form = this.$el.closest("form");
      if (form) {
        form.submit();
      }
    });
  }
};

// resources/js/components/tabs.js
var Tabs = class extends Component {
  setup() {
    this.container = this.$el;
    this.tabList = this.container.querySelector('[role="tablist"]');
    this.tabs = Array.from(this.tabList.querySelectorAll('[role="tab"]'));
    this.panels = Array.from(this.container.querySelectorAll(':scope > [role="tabpanel"], :scope > * > [role="tabpanel"]'));
    this.activeUnder = this.$opts.activeUnder ? Number(this.$opts.activeUnder) : 1e4;
    this.active = null;
    this.container.addEventListener("click", (event) => {
      const tab = event.target.closest('[role="tab"]');
      if (tab && this.tabs.includes(tab)) {
        this.show(tab.getAttribute("aria-controls"));
      }
    });
    window.addEventListener("resize", this.updateActiveState.bind(this), {
      passive: true
    });
    this.updateActiveState();
  }
  show(sectionId) {
    for (const panel of this.panels) {
      panel.toggleAttribute("hidden", panel.id !== sectionId);
    }
    for (const tab of this.tabs) {
      const tabSection = tab.getAttribute("aria-controls");
      const selected = tabSection === sectionId;
      tab.setAttribute("aria-selected", selected ? "true" : "false");
    }
    this.$emit("change", { showing: sectionId });
  }
  updateActiveState() {
    const active = window.innerWidth < this.activeUnder;
    if (active === this.active) {
      return;
    }
    if (active) {
      this.activate();
    } else {
      this.deactivate();
    }
    this.active = active;
  }
  activate() {
    const panelToShow = this.panels.find((p) => !p.hasAttribute("hidden")) || this.panels[0];
    this.show(panelToShow.id);
    this.tabList.toggleAttribute("hidden", false);
  }
  deactivate() {
    for (const panel of this.panels) {
      panel.removeAttribute("hidden");
    }
    for (const tab of this.tabs) {
      tab.setAttribute("aria-selected", "false");
    }
    this.tabList.toggleAttribute("hidden", true);
  }
};

// resources/js/components/tag-manager.js
var TagManager = class extends Component {
  setup() {
    this.addRemoveComponentEl = this.$refs.addRemove;
    this.container = this.$el;
    this.rowSelector = this.$opts.rowSelector;
    this.setupListeners();
  }
  setupListeners() {
    this.container.addEventListener("input", (event) => {
      const addRemoveComponent = window.$components.firstOnElement(this.addRemoveComponentEl, "add-remove-rows");
      if (!this.hasEmptyRows() && event.target.value) {
        addRemoveComponent.add();
      }
    });
  }
  hasEmptyRows() {
    const rows = this.container.querySelectorAll(this.rowSelector);
    const firstEmpty = [...rows].find((row) => [...row.querySelectorAll("input")].filter((input) => input.value).length === 0);
    return firstEmpty !== void 0;
  }
};

// resources/js/components/template-manager.js
var TemplateManager = class extends Component {
  setup() {
    this.container = this.$el;
    this.list = this.$refs.list;
    this.searchInput = this.$refs.searchInput;
    this.searchButton = this.$refs.searchButton;
    this.searchCancel = this.$refs.searchCancel;
    this.setupListeners();
  }
  setupListeners() {
    onChildEvent(this.container, "[template-action]", "click", this.handleTemplateActionClick.bind(this));
    onChildEvent(this.container, ".pagination a", "click", this.handlePaginationClick.bind(this));
    onChildEvent(this.container, ".template-item-content", "click", this.handleTemplateItemClick.bind(this));
    onChildEvent(this.container, ".template-item", "dragstart", this.handleTemplateItemDragStart.bind(this));
    this.searchInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        this.performSearch();
      }
    });
    this.searchButton.addEventListener("click", () => this.performSearch());
    this.searchCancel.addEventListener("click", () => {
      this.searchInput.value = "";
      this.performSearch();
    });
  }
  handleTemplateItemClick(event, templateItem) {
    const templateId = templateItem.closest("[template-id]").getAttribute("template-id");
    this.insertTemplate(templateId, "replace");
  }
  handleTemplateItemDragStart(event, templateItem) {
    const templateId = templateItem.closest("[template-id]").getAttribute("template-id");
    event.dataTransfer.setData("bookstack/template", templateId);
    event.dataTransfer.setData("text/plain", templateId);
  }
  handleTemplateActionClick(event, actionButton) {
    event.stopPropagation();
    const action = actionButton.getAttribute("template-action");
    const templateId = actionButton.closest("[template-id]").getAttribute("template-id");
    this.insertTemplate(templateId, action);
  }
  async insertTemplate(templateId, action = "replace") {
    const resp = await window.$http.get(`/templates/${templateId}`);
    const eventName = `editor::${action}`;
    window.$events.emit(eventName, resp.data);
  }
  async handlePaginationClick(event, paginationLink) {
    event.preventDefault();
    const paginationUrl = paginationLink.getAttribute("href");
    const resp = await window.$http.get(paginationUrl);
    this.list.innerHTML = resp.data;
  }
  async performSearch() {
    const searchTerm = this.searchInput.value;
    const resp = await window.$http.get("/templates", {
      search: searchTerm
    });
    this.searchCancel.style.display = searchTerm ? "block" : "none";
    this.list.innerHTML = resp.data;
  }
};

// resources/js/components/toggle-switch.js
var ToggleSwitch = class extends Component {
  setup() {
    this.input = this.$el.querySelector("input[type=hidden]");
    this.checkbox = this.$el.querySelector("input[type=checkbox]");
    this.checkbox.addEventListener("change", this.stateChange.bind(this));
  }
  stateChange() {
    this.input.value = this.checkbox.checked ? "true" : "false";
    const changeEvent = new Event("change");
    this.input.dispatchEvent(changeEvent);
  }
};

// resources/js/components/tri-layout.js
var TriLayout = class extends Component {
  setup() {
    this.container = this.$refs.container;
    this.tabs = this.$manyRefs.tab;
    this.lastLayoutType = "none";
    this.onDestroy = null;
    this.scrollCache = {
      content: 0,
      info: 0
    };
    this.lastTabShown = "content";
    this.mobileTabClick = this.mobileTabClick.bind(this);
    this.updateLayout();
    window.addEventListener("resize", () => {
      this.updateLayout();
    }, { passive: true });
  }
  updateLayout() {
    let newLayout = "tablet";
    if (window.innerWidth <= 1e3)
      newLayout = "mobile";
    if (window.innerWidth >= 1400)
      newLayout = "desktop";
    if (newLayout === this.lastLayoutType)
      return;
    if (this.onDestroy) {
      this.onDestroy();
      this.onDestroy = null;
    }
    if (newLayout === "desktop") {
      this.setupDesktop();
    } else if (newLayout === "mobile") {
      this.setupMobile();
    }
    this.lastLayoutType = newLayout;
  }
  setupMobile() {
    for (const tab of this.tabs) {
      tab.addEventListener("click", this.mobileTabClick);
    }
    this.onDestroy = () => {
      for (const tab of this.tabs) {
        tab.removeEventListener("click", this.mobileTabClick);
      }
    };
  }
  setupDesktop() {
  }
  /**
   * Action to run when the mobile info toggle bar is clicked/tapped
   * @param event
   */
  mobileTabClick(event) {
    const { tab } = event.target.dataset;
    this.showTab(tab);
  }
  /**
   * Show the content tab.
   * Used by the page-display component.
   */
  showContent() {
    this.showTab("content", false);
  }
  /**
   * Show the given tab
   * @param {String} tabName
   * @param {Boolean }scroll
   */
  showTab(tabName, scroll = true) {
    this.scrollCache[this.lastTabShown] = document.documentElement.scrollTop;
    for (const tab of this.tabs) {
      const isActive = tab.dataset.tab === tabName;
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    }
    const showInfo = tabName === "info";
    this.container.classList.toggle("show-info", showInfo);
    if (scroll) {
      const pageHeader = document.querySelector("header");
      const defaultScrollTop = pageHeader.getBoundingClientRect().bottom;
      document.documentElement.scrollTop = this.scrollCache[tabName] || defaultScrollTop;
      setTimeout(() => {
        document.documentElement.scrollTop = this.scrollCache[tabName] || defaultScrollTop;
      }, 50);
    }
    this.lastTabShown = tabName;
  }
};

// resources/js/components/user-select.js
var UserSelect = class extends Component {
  setup() {
    this.container = this.$el;
    this.input = this.$refs.input;
    this.userInfoContainer = this.$refs.userInfo;
    onChildEvent(this.container, "a.dropdown-search-item", "click", this.selectUser.bind(this));
  }
  selectUser(event, userEl) {
    event.preventDefault();
    this.input.value = userEl.getAttribute("data-id");
    this.userInfoContainer.innerHTML = userEl.innerHTML;
    this.input.dispatchEvent(new Event("change", { bubbles: true }));
    this.hide();
  }
  hide() {
    const dropdown = window.$components.firstOnElement(this.container, "dropdown");
    dropdown.hide();
  }
};

// resources/js/components/webhook-events.js
var WebhookEvents = class extends Component {
  setup() {
    this.checkboxes = this.$el.querySelectorAll('input[type="checkbox"]');
    this.allCheckbox = this.$el.querySelector('input[type="checkbox"][value="all"]');
    this.$el.addEventListener("change", (event) => {
      if (event.target.checked && event.target === this.allCheckbox) {
        this.deselectIndividualEvents();
      } else if (event.target.checked) {
        this.allCheckbox.checked = false;
      }
    });
  }
  deselectIndividualEvents() {
    for (const checkbox of this.checkboxes) {
      if (checkbox !== this.allCheckbox) {
        checkbox.checked = false;
      }
    }
  }
};

// resources/js/components/wysiwyg-editor.js
var WysiwygEditor = class extends Component {
  setup() {
    this.elem = this.$el;
    this.tinyMceConfig = buildForEditor({
      language: this.$opts.language,
      containerElement: this.elem,
      darkMode: document.documentElement.classList.contains("dark-mode"),
      textDirection: this.$opts.textDirection,
      drawioUrl: this.getDrawIoUrl(),
      pageId: Number(this.$opts.pageId),
      translations: {
        imageUploadErrorText: this.$opts.imageUploadErrorText,
        serverUploadLimitText: this.$opts.serverUploadLimitText
      },
      translationMap: window.editor_translations
    });
    window.$events.emitPublic(this.elem, "editor-tinymce::pre-init", { config: this.tinyMceConfig });
    window.tinymce.init(this.tinyMceConfig).then((editors) => {
      this.editor = editors[0];
    });
  }
  getDrawIoUrl() {
    const drawioUrlElem = document.querySelector("[drawio-url]");
    if (drawioUrlElem) {
      return drawioUrlElem.getAttribute("drawio-url");
    }
    return "";
  }
  /**
   * Get the content of this editor.
   * Used by the parent page editor component.
   * @return {{html: String}}
   */
  getContent() {
    return {
      html: this.editor.getContent()
    };
  }
};

// resources/js/components/wysiwyg-input.js
var WysiwygInput = class extends Component {
  setup() {
    this.elem = this.$el;
    const config = buildForInput({
      language: this.$opts.language,
      containerElement: this.elem,
      darkMode: document.documentElement.classList.contains("dark-mode"),
      textDirection: this.$opts.textDirection,
      translations: {},
      translationMap: window.editor_translations
    });
    window.tinymce.init(config).then((editors) => {
      this.editor = editors[0];
    });
  }
};

// resources/js/addons/header.js
var cumulativeOffset = function(element) {
  let offsetTop = 0, offsetLeft = 0;
  do {
    offsetTop += element.offsetTop || 0;
    offsetLeft += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);
  return { offsetTop, offsetLeft };
};
var elxsNavigation = {
  initialized: false,
  logoSelectors: [
    "#header .logo"
  ],
  navigationList: {
    ENABLE_HOME: {
      img: "data:image/png;base64,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",
      url: "/",
      title: "Home"
    },
    ENABLE_BOOKSTACK: {
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAEAQAAACm67yuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAEdASURBVHja7Z13WFPXG8e/J2HLUgngQFEgDmQoioqrWBcB3GJrrT/rqlWr1l1sXVUrWnerVuuos6LWASSIWmorOHAxqhKCKAgIQZayk5zfH2CrrQNJ4BI4n+fJIyTnvvd9r5zvvTnjfQEGg/FOXI/S1ZUMHjZM0v/UKQnJz5cICwslnhJJaLK7O9e+vSuEawcYDG1Bcq1NGxWZOJE3ftw4us7K6j8NVCUldN/Qod7HQ0O59rWyMAFgMN5AYKChoclWPz/aa9Ik9OzZ823tiW9qqoHC1taTKBRc+14ZmAAwGK9ALLWzAz77DKc/+QSOjRq9y7Gq93r08DGKjOQ6hsqgw7UDDEZtYSnl8boP9/JSBUyfTkQDB9ItPB4c390O71HTplzHUlmYADDqPWKpqSk1mjSJpzd9uup069aQAXRL1e0RGdGaJ2smAIx6S8hIa2scmzoVCTNnkpiGDelprj2qeZgAMOodksPOzjRs+nQYjhsHiYEB1/5wCRMARr1BsqBnT/y4cCGN9PaGn/Y8plcnTAAYdZrrUbq6cvnQofTK/Pm0W5cueI9rj2oXTAAYdZJzYWZmCvMpUzLTZs6EbvPm6KYBo6qSEggjIiDr25fr+DQFj2sHGAxNcn5f48YhdNkyxawHD2jW2rXQbd5cbaP2jx8jKSBA9YWdnUq6YAHXMWoS9gTAqBMEdbKw4N2YMaN0yuzZxNLMjK5X3yZZduMG9dyyxVJw5Ejn6WVlABAMa2uuY9UkTAAYWo1YKhBQh+nTSfAXX0BiaophahpUlZRg+ZkzOLRhg9e1K1dwDUAA11FWH0wAGFpJmJOlpWLqnDnA558TiZER+GoajE1Ppwt27lS5ff+9782sLAi5jrBmYALA0CrE0ubNsWzBAoXZ5MloZWAAmZoGt12+TE+sX1/w7NQpP6JUch1fTcMEgKEVnB1vY6Ps+eWXkE6YgLH6+moZE1OKmaGhQECAKPjiRahnTathAsCo1Zzf17hxacH8+arNM2fCz9BQHVtkpkoFuViMr1as8BJGRXEdW22ACQCjVhJOjY2LEqZPL1335ZcYZmZGN1XdFhGVlmLw0aM4vGqVl3t8POZzHV3tgQkAo1YReFRPz2T9+PHFHVaswDorK3VG9Yn306equ3v3qhzWrvU5k5qKM1xHV/tgAsCoFVyP0tWVT//kE4xZsoQGNWumlrHjmZlYtGEDjd++3VuYn891bLUZJgAMTqGUkFDJyJGZZitXYplQrck34pOVpVL+8AOx37BBxDp+pWACwOCMkKj+/UMN1q6lJ11d1ZnOIz5ZWfTed9/xHb//3osUFHAdlzbBBIBR44Q0ateO2C1fDvmoUfSkGoZWP3lC//z+e93QjRv7C/PyuI5LG2ECwKgxzjVq2rRs8NKl8J84ETJ+1dfu/ZWdTedt3aqns3Fjf8I6vjowAWBUO+HU2LjYbsGCsulz5qBdgwZVfty3z8nBtI0bsW3zZm/CvuNrAiYAjGpjKeXxui4aO7Zo7Zo1+L5Jkyobsi8sxLmtW0u81qwZdj43t76s068JmAAwqoWQqP79yeiNGzHesQqJtSuQKhR05O7des4rVvTPTkvDdK6jqnswAWBolNBke3vViNWrIR81CuOraERMKa4eP05PfvWVd3OplOuY6jJMABgaIcypQYOymPnzVSGLFmG5Gpt1xp4/D4svvxRJr1+H+rl8GG+BCQBDLZZSHq9rwvjxCqxaRSTW1lVOMmd//Tpv95dfDso+fx7ZXEdVf2ACwKgyknVdutCEbdsg69y5ykbsHz6Eq7+/V8GRIySAUq5jqm8wAWC8M8HBDRsS+2XLKG/69CrP56999oyGr19fcCwgwK+wqIiVqeUGJgCMSkMpIZJFH38M1Xff4b5AUCUjUoUCt/fsUfy1ZMlgkpHBdUz1HSYA/+K0h4kJ318g0Nltbq6MNzPj2Zub0yhzc1w0M6MO5uZkm4EB+cbMjJrq6sLM1BT6+vq4Y2SEH42NyTpd3Rdt0YMmJsRRRwcA6CiVisjKV63R+WVlcMnJweXsbJzNzka3nBxyMDWVNEtNVZ1NTi4pSEkZRnJzub4WLyKWduwoabVjB7a5u1fZSG5QEN9gwYKB++7d4zoeRjn15sFLLBUIgObNSa6NDaa0bKnaZWNDzKysAIEAC62sMN7SEnyBADw1001pCoVcjk/v3SMe8fE0KS4ORtevKwtv3fK9WVhY49du8tChGPLLL1W+NvaxsZgze7Yo+Lffatp3TRMc7ObG412//qY2BH5+XqJjx7j2tTLUiSeAwEA+39jV1pbmtW5NzGxsqEOLFjzLFi2o0sYGc2xsyP4WLaisPJ0UBYDVAJEDkFcYmMx1BK9ARyDAboGAolev52/xpQqFeMidOzgUFQVcv85zvHYt/8PoaD+/6ktmeZKamyNhzx7IqtD5Vz95QoYsWWLgtXOnZ7BCwdGVZLwBrRKAc2FmZopooVDVqm1b4ty2La4KhWRT27bUyMEBMn19AgBygMgA+vM/x9FOXHuuIYQ6OoCzM7o4OwMTJ6oAmMzNzZU0vHAB0nPn+H3DwgbEJiVp8pSGVl5eqn0NG77TQVKFAqIdO3iHly4d1CI7m6Xgqr3USgEIpwYGRW06dKC7XF15O1xd8ah9e+rTtm2ZokkTOFZ8b5EBaAzQb7j2llvoenNzYMQIRI0YoQgAJP4JCWgXFkZanDqV7xYeru7TgWpu06bvdID9b7+pDs+a5TM7Lo7ra8N4O5wLQFAnCwvd/q6uNNjVlS5wdUWIq2vR5jZtsElHhxQA9GOuPdQu6GoHB8DBgWL6dBOfrCyx9ORJmnfsmFHn8HBP8u6P4cQzIYFmVaKdb2oqnTF3rkh09CjX14BReWpUAK5H6epmfuTignHduiGwa1d06NYNY+3tVQDQp6LReK4vSd2BBltYQDZ5MsHkycX8rCxJs0OHaM7u3aLC2NjK2niaFBpqrJ+YCD07u1c22FBWhm1btpR2Xb58yOanT7mOWRs5Sc3NzVFc7EmKi2v63NU6CxDUyciI92OPHrxdnp7UolcvctzNjW5SL7c7QwNciYoCdu161uHgQT+/oqK3NT/r6uKi/FAigdO/tvQ+vXiRlzp9+qA5f/3FdUg1haZmASglJLTjjBl0+YIF0G3eHPZKJeLi48m+Gzfodzdv8m7cuFGy9fbtIZHVK6oaFYDydeG9elEHT0/StG9fkt61KxXr6VVnAFxAZhcV0eC8POJYPiVH/1IoyNjy/yh6kFJ0e2EOf3NuLrZQSqSGhpRvYACPBg1Ipp4eSk1NqX6DBjhgZaVWdhx14vDJyoLt9u1lT3/4YbD8zYtyzoWZmSkiJ0ygv3bqhOO5udQ/JER07OxZQurX8l1NCUBI1Nq1RD7/jcOjZKZKRQ2kUsy/cYO+f/Mm+eDqVa8/IyM1ec01JgCSBT170km7d0OmXmbXGkWqUJC5GRn0bno6rqenIyw9Hf5ZWSQ3Nxcz8vKwLCdHJcjN5f2em6v6MC9P1ys3N/er3Fy/0aWlmnIhMJDPN1psbc0LsbHhjW7alB5t3pz2a9OGtGzXDhFOTjTYwqLar4OqpIT8sWzZoICAgPrWod8VTQiA5FqbNhhz5w7dwnvnrVPEPyGBBo4bJxJeuaKJeDQiACGN2rUji6Oi0K5BA03Y0whShYLMT06mc5KSMPH+fRqTnMwb8egRxmRm8u6mpirsMzJExzIyavsfvFgqENChHTrwiJsbPdmjB9CtG2TVVKM+dt480cL167mOuTajEQGQzpxJZZs3V9kJ+8JCpaGrq69NQoK68WhkEJBsXLwYgprv/GR2UREexsfT2Ph4IDGRpiclkXX37+s8TErSjUlJ8ZytUCAAr67vfhtasQ5SJJTLgfBwIDwcwu++A4Awp1atlF/26EHD+/VDTP/+WPqOU3Wvu577vvoqqNP27VysNqxP0CBjY7RTw4DMyEhnx9dfA+PGqeuLZmYBzLp109TFeSX2OTnAnTvky7t3cS8+Hs537ig/uncvKv7Bg+VEpXpljjgt6NxVZUBsUhLGJCUBBw8CQPDhDh3ImgEDeG2GDKG3evSo6pgCXW9uzp/dvj3w5juctnLaw8TENKKoqCrToZqEjLpxg6q5SoIad++uCV80IwDtGzVSu077c75KSkKv27cx/fZtknv7tio5Otpb+PDhS23+AnBEQ+erA/gcjIvDwbg4YMOGsBGWlophQ4ag/ciR5Kt+/d71eyZvmLn5K5+YtBTJYWdnmjNmDJk9ahT9qnXromnFxWLp6dP81fPnD9yXksKFT1dszp3rOu3yZUxToxMva9wYh9X3hduFQKufPCGxly/D6soVKrx8WXfmjRv9b+bl4SaAqn9DqtcMiM3MROyuXcCuXWJp8+YIGjeOHBg/vnyBUP0g5HjLlhgwZgzPc8wYat6hA8wBerriQ18DA8hGj1be7dXrXKMuXfpnp6XVtH/LiUp1RjBsmG54YCA91rs3l9eq5gTAXqnEkb/+ItsjI+Fw5YrqyOXL3pcqEj7mAZACCObyUtQ9RMJHj4DVqyn99ltJLw8PRM6Zg+Dhw7n2qzq4HqWrm2k2ZAh2T52K3/v2hREhb1wmvrRpU8X/Vq4EJkzgwt/yadc+fcT23boBffoAHTsi0NWV7HNwqMrsQFWpGQHw+fXXsm7jx/+9qOExwBI+1hzlMx0REaELDQ1VqFsCEHK8ZUuyb/LkTLOJEyGztv57RWkloL7e3tjDrf/l03n/TOmFU2Pjol4uLoR88w390tOzus9fM0ozLiurulc0MeoPlBIiSR44UGwUHMxbdP8+pi1eXKWp0UXGxlzH8m88ybNnoksREdRO/Sm+ysD5ZiAGo7KIpfr66DNmTGjnOXPoNx064HhFfoeq0ufGDa5j4homAIxaz/l9jRuXrZ46lWLGDOy2ttbIyi0xpbxuAQFQpzpxHYAJAKPWEpTi4MDvMXt2qcf48dhkZKSxqeag4mKyYvbsQYKQEK5j5BomAIxaR/m+krlziefgwXQHj6exjj87OpocPHSo7Pj+/YO3s4zEABMARi2hfCeptzf536JF9D0PD8gAukUDhn9JSaH+J08S3r59IumtW6h6TuM6CRMABqeEUwODooRPPsG3CxbA1daWfq2+TSIqLaXTfv0Vs3fs8Pr5jz9q+4YvLmECwOCEMKcGDRS6kyYV68yfj6BmzeCqvk3im5pKtxw8SKXffy8SPnqEbVxHWfthAsCoUU5Sc3O9EzNmKP1mzUKwhYXat2YxpeSvs2dhvXXrFUVo6HKiUnEdozbBBIBRIwR1srDg3Zgxg9d+1iy63tycqrnsm4hKSzH46FGl6dq1PuEVGYjZBrF3hgkAo1o5I7Cy0ln2xRfo//nnkBgZUXXTjSjz86nDvn2QrltXvteBoQ5MABjVwtnxNjbKnl9+CesJE8DT11d7Kq80MRFxmzbpHN27d0BsQQHX8dUVmAAwNMrZ8TY2ikXz5ik3T5mCpgYG6tojy27coJ5bthiuOXzYcygrL6ZpdIDyvHOk94oV9IshQ+DYqBGEsbFEtnatthQ4ZHDPuTAzs7J933yjHDllCrmvrw/fqtsiM1Uqev/UKdWz9et9rkVG4hpQl5KU1DTiWaNHk8vz59MlHTpAmJNDep86pWj69de+N7OydMRSgQB3Ll+me14o/CDr3JkiMDAk39/f2/Tbb7kOgFG7EUtNTRUfXrqEbzp0UMcOEZWWUuGBA4rwgABfm4QEGHEdmfYjES5eTAeuXEkHVrwhs7ame6ZO5Zf27x+0ols3Hum9YsXrqr6QPStWiKWvqQjDYDznnL8/VaPzk9lFRbD//ntFJwcHkXTSJE1ku2UAocn29nTasmWv/FDPzo4/bcUKHhoPG/ZaC0IdHcBXjYc5Rr2g/xv+ht4A8X76lArWrSvLadVKJPz8c9+byclch1KXoHt8fcv78Gt4MnSoDvW0tHyjFVcrK64DYdRuyDAzM7ruHQ74Kzubztu6lfdwyxbvFtnZXPtfV6GCt/TdFGtrHkTkzQm015E6nGCboRGSY2Iq04zMz8iA/aJFZSdtbb3JsmWDWOfnFhEhNZZ8kFGH+TAgAOLXb7gh8zMyqPPcuQr91q1FwoAAlh6u9sDWATDUxmvnhQsS+WefQbBly0vFYI9nZqLN2rUK/e3bfZuzakO1ESYADI3gJfjxx3ONgoIUfw0dqppnaUlm3737bNCZM5UpP17dhFMdnZJF772nauTigmE5OYoeISFvq4ZcX2ACwNAY/bPT0jB/2zY8L3rNYXEXSgkJKerenT9xzJiiID8/9BEIAAAyQGdkcbH4izlzRMLt27m+ZlzDBIBRpwhKcXDgF40fL/l2zBieq60t/fgVjXwNDCDbti3kUUqKd/Pgel2OhgkAQ+u5HqWrm+E8eDBpMnUqAt5/HyJCKpNghBQuWgQwAWBUknNhZmbKtny+Isbc/HVt9L6ktPTb3Fy6pKSEldmuXoI6tWjBWzt5cuZvEycSeZMmOPiuFjp25DoGrqnXAiCW6uvzf2vVSiVq2RKXBAJIBQK61tKSNLCyopstLKArEOBbKyt8ZGmJdg0alCkAxAFvqtymCKgot7QSEKNitdvJzEwSkJEBY7mcNsvIoHvT08mi+/d5xxMSeEaJiQNiMzO5vhbahLhnjx6InDMHvwwZAhmfD6cqGlrz7BnXsXBNnReAwKN6esYdHR2JzN4ev9vZIdHODpl2dsi1s4OoeXPlFh4PcQDMAbgD/6k2s1K989MQExPAxIR+/c+eCiIB0AdQ9QFUAMTK/Hy0kUqp0Y0bZOeNGxh7/bplXlxc5y5lZVxfv9pCYCCfb2I8fDhGzJ1L/bt2BQC1cwxcCgriOi6uqVMCEOZkaak44eqKCa6umOzsjO7OzpjWti3m6OpSAHiv4lXb4JuaQta5M0HnzugGQAZkqkpKxE2uXUPejh2iwsMaqASvnZz2MDHRLZ4wAWtmzaIrW7XCCc3YJb6pqTpmS5ZwHR/XaK0ALKU8XveN7drRX3r0oAd79MAyDw/FWHt7yAD4VzSSAZjDtadVhKevj929egG9eon3dOwoOj5/vvpGtQextHlz0v/zz5EzZQpd//oxl3dmQ1kZhCdO0Lvz5/cXpqVxHSfXaJ0AiI2cnHB78WIkDBigatuwIZahvKOP5dqzamTCvHnB+0+e9DGKjOTalermrKuLi9J12jRsHDeOblc/o9BzyLIbN6jiwAGdsiNHBpzPzGQpw8vRKgEIae/pSRQhIVRmaMi1LzUN78CoUUDdFABKCQkd4+VFl8+dq5T17asxwzfj42G4fz+Zc/iwl+jBA67jrI1ojQBcj9LVzTTbu7c+dn4AwA8WFly7oGmelwOTLP36a3zcpYtGagDaK5Wki0RCpm7ePHDNhQuEUIq5XEdae9Ga3YCZX7i7Q9ayJdd+cMb/7t7l2gVNsZTyeBLxqFHd9OPiIDtzBt26dFHb6PK0NCQFBPBXt2rllefrOyjg/HlWEuztaM0TAO1hYVFjiQmCiotRIJfjj/R0kpOZCT25nEZkZwMlJUB+PkFREcYWF7/Sz4NGRoC+Pk02NiYtDA2xzsIChywsYCkQIMzKChutrOD7jt9tlfn5vEt799ZU+NWFWKqvD59PPoHbggV0ZatWOKUBo/YREbzRGzbkf3n6tJ+fUsl1jNqG1ggAmRgXhy2UvjWBydsQU4r+qakoTkzE1zIZvZ6YyLskk+H39HTVzMxMhV96+iv3qwsraf917R6Uf0YpIZKEZs0AO7vnL9LF2Zn6u7nBqUmT/xxnn5NDvhs1atDJ9PQaveAa5HkdQNydNw+bmjdX1x6ZqVJBLhZTpzVrRJciIgAAflxHqZ1ojQCIhImJYunp05ANHVqpA8SUkh+Tkui06GhCo6PJn7GxCkeptMEBmcyTvHD3Nn3hmLXVH0f5Y+mjR+Wvixf//mAhcK5R06ZlV9zcaIyLC/nV0pLcSUjQnX34cL+dT57U0GXWKOfCzMwUM2bMUP41ezaCNTCGcbegADf27FFu2rTJx+f+fVziOkLtR2sEAABKHD75xOB/lpb0aw+P/3y4PC0NMyIj0TUiAhOiorAnNtbr+/z8l7ak3gLefb14zdE/Oy0NwrQ04IUVauO59urdCafGxkUJ06eXnV6wAJsaNVLXHpmfkaGK27FDP3Pr1n6HnzxBvV0WpXm0SgCGkdxcSnv2DI3y9aXvde9OxlJKD8bF0f0REd5XHz7E1RcaV/aRnaExnnf8ou8WLIBjo0ZwVNOgvVSKD7ZtM4j78ceXntoYGkOrBAB4/gh95gxw5gx2Vrw5kmuvGJJrgwcX83fvRrCFhdod/+KFC2T6unWDbMLCyE1KwdLSVhtaJwCM2kfI6q5daeSJEwjWqfrfk5hS3A4KoqLVq70Drl5lpcBqBiYADLXhhX/5Jf2iap2fzFSpqPjYMeKxerXX9zExbGCvZmECwFAb2s/d/Z0P2lBWRo8dOkR///Zb7+ZSKdcx1FeYADDU52hxcaWTcgQVFyNkzx66Ye1a74YPH3Lten1Ha5YCM2oxWRLJW9vYFxaSoxs28B63bi1Knj7deyTr/LUB9gTAUBulxdKl/LLBg6H7ilV+9oWFZNWOHWXitWtZLv7aB3sCYKiN782sLNW8bt3IRydOwL5iPf7qJ09gv369okfr1l4/z53LOn/thD0BMDSCT0JqKjByZOAtPb2Gn1lY5OzIyPATcr85JzDQ0NDE2MeHLh01CodcXIhLTg4unjhh0GXrVra4iAkAQ8P4jS4tBdLSuNycExjI5xu7vv8+1o0ZA8NhwyhMTbEcgAygJwBkde1abDRiRFCnvn3re+p2JgCMOoNYamdH+k+ZQl3HjYPM2hrDXt+WnujalW+/eDGEixdz7TeXMAFgaDXhVEeneIivLx0zdSoR9etHt/N4lc8s9NFHABMAxr8Ipzo6JcMFAjpKICDRlpaqiVZWZGyDBigwNaUn+Xyca9jwtQfPpxS3c3OBkhIytrCQxj17RsZmZNCDmZlUJJcX+MnlLHGF+pxr1LRp2bJPPy3qNmkSljZtCgB0yzsakVpbcx0H19Q7AbgepaubZdWyJYWdHY7a2SHOzg5nWrakBpaWaCwQwFwgKJI0bozJ5e1pH5R/d1xWYUAGoNUbTnAcfxeseH4MBYChAAFgLKZULM3IABITsU4mowNlMv60xETFHqm0sCA2tvw7NON1nHV1cVEGzpmjEH7wAez19LBUDWM34uO5jodr6qwAhFNj4xJ7Jyd6xdmZnnZxwQIHB9ja2WVG2NhAWLFu3bHiNboGHRMRApm1NWBtjWE9ehAAqn3l87Emo0tLxdKYmH8qBEVEiIR37nB9LbmGUkLEowYOJL/Nnatc3a8fZAAVa8Dwhzt2qCUgdYA6IQBhTg0alCnd3bGiRw/eZFdXutfVtdihVSu6lcdDFICmqNWJQJ5DxXp6/64QJD568aLqq48+Kp9mq1+Ipfr65MLYsZLRX3xBJjg6YoIGjQfu3Hl1748/ch0j12ilAIilAgF+6NuXfubhwRvXo4dijIsLqbir00Plbd75+2BtxaRPH15AWFj4MDe3+jJvHdTJwoLnP3UqGTZjBl1nZaWprEhkdlER7Xf6NP19507vO+Hh2Md1pNyjVQIQGMjnGweuWYNps2Zhjq4uuf/Cd/O6jEH79oV/jB0L/PQT165UJ2KpnR1VzZxJQiZOhFGDBnSd+jbLtxtfvkzG7t9Pg3/5RSTMz+c6ztqEVgmAceCaNZgwbx7XfnABb6SHR10VgNBkd3c60d8fIl9fbOHx0E4DRu2lUmr044+KvEOHBgsrliGzNHH/QWsEIMzJ0lJ5fOZMqsnvgdpEb6VSU5VxawuSBT174seFC1VxPj74QgMG7ZVKdAsPx5UtW7wcgoNZYZC3ozUCoOzQuTMN0NPj2g+uUHmeO1dXBEA8xssLyxYvprIePTRRrp34pqZSzx9/5Jn89NOg7PR0dqevPFojAHS5QqGR2nGvgMzNzaWr0tJQJpfjYno6nZmZiTi5HILHj3mGmZnkQ7lcefHJE16z0lJlSF5eYWFxsZ9fUdGrbIU5NWhQ+q2eHl1iYsI7Y2BAG1lYkOUCAc/WwgIbra1psLX13wVBhLa2VFwJUXt68eK16cePYwan/wVq8bwOIA5+/TW6aagOYFRMDAn54QcDxf799WWAVNNojQAYOkRGFp3OzoZj1fLME5+sLHSVSunPMhmmyWSITEzk3ZPJdH5LTOx398kTDH+h8atKR1eyns2A2IIC+BQUADk55cf8K93VC3enwEA+v0Fh8+bE2dmZOri58czd3F6sEEREpaUYsX9/afqcOctHq1QcXv4qs5TyeN0kI0bQk8uWwaB9e3TTgFH7iAggIMDLKziYLGVZg9VBawTAkzx7JpZ+9RVk295c2d1eqURcfDz1jo4mD6OjqX90tN5vMTH9VWlpuIyXB4JacBtT+ZLghw/LXxXFQBYCZwRWVjoFlpYGNCnJkzx7xq2XVeN6lK6u/Pq4cdDz96enW7fGu1VD/C+qkhLa48gR+vn69T4H4+K4jq+uoDUCAAAi4fbtElpURLutWvV8/TdO5uUh8coV0uHyZdXHkZGK8VeuvLK2nxZRnjwjI0Mb72zXo3R1M49/+KF88ldf0dUODjitpkFlfj512LeP8Nat82746BHX8dU1tEoAAMCL7NtH6c8/n3O2tVXGUHrFKzl5OVGp8BuAurL4RwuhlJDQ3uPGyT2WLMHp1q1pH/XskSH379OlGzfqHN27d0BsQQHX8dVVtE4AgOfVgZKStPEOWRcJDOTzJbOPHcOXw4apa4sMu30bJ1evfnro11/ZrsnqRysFgFG7MHGdPp0aq9n5t12+zNNdtWpgsVjM5u9rDiYADLWhsePHw7CKB1+8cIEGrVrlfSc8HADYU13NwgSAoT6vSgf+JsSUkgMhITRq1SqR6MoVrt2vzzABYKjPzKQkbBMI3taMzFSp4HD8OC999eqBedHRbMUe9zABYKhPyY4dwOvrA5KZKhVyfvmFt+qbbwZOvXePa3cZ/8AKgzDUxitt3z4E7tz57/fJTJWKvn/kiCq7QwevJx99xDp/7YM9ATDUpnzU/tNPxf4nTsDHz49kWFmpzt+9y5+3Z4+Xfu3o9EGdLCx0bnTowOuYkxN5KzZ2OdHOpdWahgkAQ2OIhGFhQFgYAKAL194A58LMzMr+N3w4xn30ESa+9x6V8PnK1UDXBKk05Pjkyd4j//iDax+5hgkAo04ReFRPz3SNj48q+qOPyk6KRNhtUL4L4cXdhzKhkFw4ezZkZPfu3sdv3+baZy5hAsCoEwQHt27NezhlCs5+8olqlaXlWw/wNTAguStW4PjgwVz7ziVMABhaSzjV0Sma4uODxKlTyez+/ekWHu+NNRv+Y6B3b65j4BomAKjIQvtAIMBOgQC+AgESrK15Oy0sIBcIqMzSEvMsLcl6Y2N60MSEOOro0NXm5hhCXr1mbYJKRa7m5YGUlMC1sJA2fPqU8DIzacOMDGTK5eRIZibNSUvjBd+/r/9FYiJLZPHunN/XuHHZ6qlTi3U++wxBzZoBFcVXGO9MvRCAcKqjUxDSogWxsrMjH9nZwdnODs3s7NDIzg7GdnZo16DB340vlP9DB71sgy5DeYWg59tbX5fRxh+gaNz4pWNf/Dmq/F9VW6Doc0rF4x49IkkymeqIVEp23rjBi71xw8I/NrZzl7Iyrq9bbSMoxcGB32P27FKP8eOxychIbYN3L17kOiauqXMCENTJwkKns4sLmjo701QXFwxydi4mjo48sZ4e5AA2ce3hC4gIAWxsKGxsSIynJ7oBqm5AZkZJiXhJTAzZHRlJ5u7aNWjOX39x7SqXSBb07EknzZ1LPAcPpjvepfjn6yGzi4p4RkuWcB0b12i1AJTf2V1c+MIePSg8PLDSwwMf2Nj8+3FQI2WkahKevj66delCu3XpQqXTp0t6TZrk9efPP3PtVk0STnV0Cn8YPpx8N3cufc/dHTINFnu5GR9Plk+ePPDD6Giu4+QarROAc2FmZmUrPv0UewYOLPJ0d+ctMDamz+8IH3DtXTUg1NHBnzt3BqVERvraJCRw7U51c9rDxER338SJRd/OmkVcbW2xTX2bQEXiV+WJE1Tn0KFrf128yBYClaNVAhCU4uCgEJ0/j4AWLSADsIBrj2oGKtbT43/2v/8BX33FtS/VhVjavDnNmzmT7JwyBTIzM7hqwKiqpIR8HByMXocO0dNisUhYUgKAbTl+Aa0SAH6vgwfpthYcp/LkiFG2tgjm2gnNE+bUqlXZsdmzsXHKFOJrYAC1cwoBKE1MRPtdu4A9e7xy5HKcAXCG60hrJ1ojACEjXV0x4fU7zuo8n6WkcO2CJgke26EDP3/BAkXfDz8k93V04KuePTJTpaLZv/1GDu7c+bT011/9hCydWGXQGgEgDW1ta/ykUoUCJXI5iuVycv7JE6pbWoqn+fk4VFSE1a+Zv79pZAR9fX0cMjYmEw0MUCgQ0CMWFhBbWKCignGV/Lh94EBd2D8vWdelC8IWL6bmgwfTMUT9h/HVT57AfMcOJdm+3Sc7NRUiriPULrRGADD/4UNNVgYi3k+fQi8xkf4kkyE/MZH0T0sjPeVympGeTjbK5by9cvmA2MzMVx5cmY4o/O/PQZ0sLEh7a2vSzM4On9vZEQ87O9jb2WGgs/PzYiD/8XOmSqU6NXu2t/DOnRq60tXC8zqA9KG3N75Qv+OTIffvU6ctW3TKfvppwCWWNbiqaI0AiIS3bomXREWhW5d322dm//AhrsfEoHNsLJkolSrPJiSoWiYmDqYZGSgB8PG/2lfjAJHvzaws3MzKAuLiEFDxZjKA34BzjZo2Lbvi5kYd3NxIgosL+Z+lpUoslUL844/eQu1NmxUyctAgIly8mPbs2VMjdQC/iYwkxevXXy49dYqN5KuP1ggAANApY8eSwosXIbO2ftXnZMj9+7RdZCQ5HhUFh5gYZUh0tI8wJ+elRuqvH6sW+menpUGYlvZ3hSAAaMi1V1UndGG/fnTLypV0Qteu6toiM1UqyMVi6rRmjdfliIjyN7mOsG6gVQLg3VwqDU12dKQzZs+mud27kzJKMTw2lsRERMD28uVBZenpiAGrA88hzzu+qk/XrlCzOAiCiotJ6rFjOLxqlZd7fDwucR1d3UOrBAAABrXIzgZeWML5fH3cLa49q9+Ipe3bY85PP6n6dO+udse3f/wYQVu38r7csWNQi+xsNoVXfWidADBqHyHHW7bEhD/+gP/Lm6DemdsPHhDddesMvPbs8ZxbXIy5XEdW92ECwFAb3mdLl9Kf1ej8N+PjyeI1awSCQ4c6dykrw3yuI6o/MAFgqA2N6Nu3SlO0UTExyF69+uqmY8fYiD43MAFgqA1pp6NDg96h/YirV2n0qlVeXsHBhFCKzVxHUH9hdQEYakM7RUZWquHm33/nXezf36uoWzeRMCiIFQHlHiYADLWhiUuXwr6w8LUN7CMieBf79xed9fQcFHD+PNf+Mv6BCQBDbbyz794lPw0cSIbcv//i++Tb8HDi5ekpEvbsyTp+7YSNATA0gtfaS5eWUgeH7imdOyt5lpak8O5drz8TE2vDij2x1M4OGDmStnRxIQ45OXA+cUIU/NtvXPtVG2ACwNAY5SP5165x7QcAnBFYWek28/Oji8eMgaxbNwAgMgA7AGDaNIn+Tz9dOf7pp/V99oEJAKPOEHhUT6+BfOhQ8uuECdjRrx+V8fmva0snTprUNeHmTWD7dq795hImAAytJ8ypVStl98mTsWLCBLrOygrzgMqsSyAfTpvGBIDxRkKTGzUiYkvLsuYNGpAFpqZ8Xz6f9mn42n161J5S3u7cXGWX0lJqUFDAt3z2TJmZmenj869diQy1CAzk801svb2p+dSpStHAgXQoj4eh72aDLndwgA/XkXBLvRWAMCdLS8WJ1q0BOzviY2uLAoGArrawIDMsLek8KysYCAQ4Z2GhitPVRYuK6ZLvgLd+YZQBqj7lu1UJAJoF8HiABKWl4MvldHBGBs6mp2Po/fvkTkICbS+T0bWJiQURDx74jS4t5fq61HbCqbFxccKECXCcNYuebt0aWWqkC49JT+c6Hq6p0wIQ1MnISOdDR0eVu4sLb5yDA/Lt7FBoZ4dSOztFgInJ88dEuumfY+jRFww4ac4XKtbTA5o1A5o1w+SK9yo+IzGAyejSUol7bCxtf+MGWly/zioEvUywQ7NmvNmff17c/tNP6Xpzc5xW3yYiDx3iOi6uqTMCEBzcsCH/UPfutLOrKznv4kJ7uLjAz96eyvh8UgDQWv5Nr1wg3NzKX1OmqLoBmY/z88UWu3cbyv3962sNwZCRrq680jlzcGb0aNpKT4+u14xd8k1kpKJk9Wqu4+MarRWAoBQHB50xHh50d48e+MrDA6Ht29OPy3PN0XYVjTSYQ5AT+Kam2P/FF0UJbdsupT4+9WXKilJCJB8NGgSbuXPR5/33KQBM1Yxt4p+QgLKdO+nJrVt9n9cJqMdonQBI+n/wAZ2+ciVi7ezolyjv5OO59qqakXl5dV03eDBw6hTXrlQngUf19IxvfvBBaOf58/FNhw4aM7z6yRPYnzhBLA8cGHQrIoIQSlnWqHK0SgBCLk6aRAt27eLaDy6gSwcNwq66KQDBwQ0b8jbNmEFWTJ9O11lZUXUzCgHlVYH+d+IEvfzzz89mXrjg51dRJ2At19HWLrRGAMKpsXHRlO++00jlGC2ELDcw4NoHTSOWCgTUYfp0XvtZs+h6c3ONbA18sSrQE7mc3enfjNYIQMmibt0wzMyMaz+4gghrxxJbTXB2vI2NYtG8ecRn8mRsMjRUe2DPXqkk04ODsXv79is2587Vl7ESTaA1AqD83MCAxFTzSdY+e0Zy09NpYGYmIJfjj/R0OjEzE3/J5fy+2dnKlNJS/pK8PFVEUZFq0atH5XWeGhnhtr6+KtvYmHfa0JA2tbCgEywsYCQQYIqVFURNmsDSzg4jLS0r6xYZcv8+v632lwd/XgdQuXnKFHLfwODF6dcqsfbZM9gePkxXrl8vOieVon5WjVQL7RGAjlFROntLSsDT16+ykaDiYjxJTCQ5MhmaJibSxTIZkJiokspkhYXp6X6/FxUBeDmt+KQXfn7xzJVdQZYJYOYLv1cU+Dx9z8TEoLB1a0rs7JQ3nZ155m5u1N/N7T8VgnbdvEn/8vMbINTe6jehGxwd6e8LF2qsDuD8jAxV3I4d/A5btgxqkZ2NfVxHqL1ojQAMlmdkiFO3b4fN7Nlva0tmqlRULJPho+hokhcdTYNjYmhMTIxoW3LyS1loOLynDol8+hSIjgaio0F+/RUAsLC8QpBioKsrDltaKoukUm+vy5e1NXOOWNqxI374+mu6bcgQuoWnfu6JqJgYFK5f/3TJL7/4EbZqUhNojQAAwLOG8+aZHNDVpcunTsWLO70UcjmeXblCbkdGko4RETzDmzdfumNq0UBQ/+y0NBxJS8MRrj2pOmIjJyc4fv01towcCREhdKCaBu0jIoCAgL9zCDI0hlYJQPlUzowZISPWreMZubtTe0pJbmysl3t8PNe+MYCzri4uysBly7BlyBCI1CsASkSlpaqcw4dJsw0bRIWxsVzHVlfRKgF4jvfIhw+Bhw+59oPxD+J+X3+t3LZ0KWR8vlolupX5+Ujevp0M27zZuyHbrFPdaKUAMGoXoR2HD1fNWbFCraXXq588wZ4tW1TSrVt9prOt0zUFEwCG2qgWzZxZ5YPtHz8mw9avN4jbscOTPHvGdSz1DSYADPUxbN/+nY+xf/iQlq5bZ+Swe7fnX8XFtSF5aH2ECQBDfRRyOXQEgkq1tZdK0WfNGsszBw+yXAfcw+oCMNRn2y+/vK0JGXr3Lm/8mDHPbrdvL0rfu5d1/toBewJgqM+2tWuBgQMh69Hj3x+RoXfvEvNvvrlccvTocqJSwY9rZxkvwgSAoTYiYUmJWPr++7TnnDk8gZ8fXWFlhew7d3h7d+/+u+Oz7/i1EiYADI0gEpaUAN9+C3z7LRa+8AHr+LUaJgAMRiUIp8bGxb1HjKCRkyahJ9feaA4mAAzGa1hKebxuCz08aObHHxfzPvyQhpiYcO2TpmECwGD8C8m1Nm1UXT78kKf38cf0dOvWAEDr6OAlE4AXCHNq0ACwtFScsLICBAL0sbAgH1tZ0T2WlvBp0AD+Zma4yudjlrn562yQMkpp29xczCgtRXhBAaHPntHEjAxCMjKIRVaW6q+MDBVNT/eWpqWxnW21h+Dghg15c0aPhnDcOJrVvTuRALSqtQc65OdzHU9lqVcCEJrcqBE9ameHMDs7PLSzQ055oRB6q2VL4mNpqQgwNATwTzrx3RXFO96r+F0GoDGAg68/x0s92u+f3+kLn/EASKYVF0vcZDJ6RCaDv0xGkhMSlEtu3LC2iolhc+Q1R+iRXr2Uwz/7jJwbPhyb1Eg28xypQkF2xVR37iqNUScF4FyYmVlpvosLuefsDD9nZwxwcUGYg4MqrmFDOAJw/NcBsperA9UIvgYG1LdDB8g6dMCEcnHgAZB3KS0VS2NiSO/r11XfR0YqNpw6VZ48hKEpTnuYmOjuGzsW+OwzlczJiVyA5pbE3d6zZ9BJ7dnFqPUCIJbq66uau7nxu3h40JM9euC4q2uZwtaWGAHohPK79jZoTZEQKtbTg6xzZ7qnc2eCqVN1h6Snh2aMGDEo8fJlrn3TdoLHdujA++Ozz8jljz+mMg0P6IkpxR+HDj1b/Pnn2pSiTOsEgFJCQj/t21c1eeBAYubhAWnnzjyZvj5dh/JO7sq1hxrGqUkTmnTmTFCndu18b2Zlce2OthF4VE/P5KfhwxH52Wd0TO/eGPOvr2nqYv/4MVUFBpKZ+/aJvr91C6O5jvjd0CoBOEnNzSUJJ05gaN++RA5Ajnqxm4EGW1jwV0+YAKxlZS0qSbBDs2a8Np99RlZMmkTXWVnhCw0aP5mXR079+qtKfORIwe3ffvu76IgWolUCYNDop5/oob59ufaDE/KdNFiruO4ilnbsiJFz5sBy9GhM09XV2N1eVVJCPg4OJraHD+vfFIs9dxUXowvX0aqP1ghAcHDr1jR0+HCu/eCMDjk50Jqx5ZqFUkLOLnr/fbpj1iy6xdsba9TLR/gSxXfuoMP+/cCePV45cjlyUKeWN2uNAJA/nZzUTTSpFsr8fDKktBT8/Hw6rKiIPHh1YRC6yNCQjDYwgLBBA7rG0BB8U1ONnH/ZiRM4zFn0tRKxVF8fu0ePloxesADjHR2hiZqCAHAyLw9lR48SywMHvNZeusR1nNWJ1ggA3zU7W+P1nuyVSnyQnIwHiYm4kpYGyOU4mZ6ObLkcKXI5LU1P1/stM7PhWbn877l5FYDAN9h8/ozyFwDfilkKbwsL3QYWFspAKysysUkTpNrZIa98DQJK7OxosIXFG/0M3LlTtO/iRW6ufO0jzMnSsixm2jQETZuGPgKBxjr+5t9/593auVM/4+RJT/Jqga9raI0A6H9w+XKRW1ISVrZq9c4HL09LQ4PYWLotPp73gUyGdomJqnUyWUHEgwd+NysKTLypdoAa3/XKd8mlpgKpqa87R+iuJk1UAZ07Uwc3N565mxsd4uICP0tLCKVS0vCHHwZ57dypTVNL1UVosr29qnjBAsXGjz8mEgMDTfz1krm5ubTjgQM0dPt27+y7d8vf5DrSmkNrBMCTKBQhUZ9+SjKCgl5bHkxMKdl57x6Ni4qiRtHR/K0xMWXnbt/+e/qsbUW720BtKrwx6GR6Ok4GBQFBQQCA/RUvBoDy+Xt+/oIFql8//BBC9UuLAQBZduMGsHMnX+fQoQGHtbfsmrpojQAAgHeXc+fEwp498WjZMtz28MBpStEiNhYdIyJ4CyMjsfny5UHfZ2drUyUgxusJWd21KxH7+8Pc15eOUX/8h4hKSzH46FH02rrV61pUFNfx1Qa0SgAAQCS9fh3w8XllJz/JtXcMTSBZ0LMnfly4kLr6+GhkYdfxzEy47d1Lpd9/LxI+eoQzXEdYe9A6AWDUXUIX9uun+mvFCvpe9+5/b8BSh9nR0cR827an8w4c8POrqPzMeAkmAAxOoZSQs52GDVMVLFmi6uPiovaIvphS6EskVPLdd97S8HAAYIlIXw8TAAYnUEqIJMHHJ7Tr0qV0lZubuvbITJUKcrGYWi1fXv41kVEZmAAwapzQhf36hXZdswbL3NzoMjWNqUpKyM7AQEX4N9/42iQkII/r6LQLJgCMGiN0Yb9+qonffquSde6s9qO+Mj+fOuzbx/9yzZpBZ9LT2cBe1WACwKh2xFJfXyxctkzVp1MndfMykIXJyfTExo06I3btGhBbf+fvNQUTAEa1Ie7Zowe5tXo1lfXujclqGjsok+He99/TEzt2lK+uZGgCJgAMjROa7O6ucl21Cv79+qm9HXfb5cvY8O23XoeCgwmhlC3y0ixMABgaI6RRu3bEbvly1dqRI3FQzZV7BVeuwGX1alFwUBCCuY6s7sIEgKE2QZ1atOA7L14M/4kTIePz1TL2vOMLK/ZFMKoVJgCMKhPUycKCd/jrr3ltp06lK/X01BrgK7hyhR5dvtz7eGgo13HVJ5gAMN6ZwKN6esYBn31GipYto/fNzalYDWMVd3wvh+BgMooVSqlpmAAwKg2lhIRKRo6kXwUEYGWrVmr11tnR0WTTqlWDRh4/ziokcQcTAEalCGnv6Rnadd06uszNDSvVMDTt2jXSfflyL6lYDBHXUTGYADDeiORamzZ0+jffYPmoUercpsnQu3dxaunSQUnsjl+bYALAeCXPB/ho6LRpWK5T9b+TX1JSyL2VK58e3L3bT6S9+fPrKkwAGC9BRxgZiScuXIh4f3/cNzWt6sIb4pOVRe99953hz5s3e5LiYrYlt3bCBIDxEnTv0aPwNTBAVWfzT+bl0YHffWeo3LTJkzx7xnU8jDfDBIDxMr4GBlU5jIhKS+n4fft0bnz99YBdmZlch8GoHEwAGOphr1TCZ98+pcPSpT77UlO5dofxbjABYFSdsefP81vMmzdQGh3NtSuMqsEEgPHuFN+5Q90XLvTODg5GNtfOMNShHhTXZmgK4puaSpZ9+ukzhbOzd/NgtkevDsCeABhvhXg/fQqHgACFy8aNvtcKC9mUXt2BPQHUI5RB77YQh8xUqZCxZ49qhFDoJV21yvdmYSHXMTA0C3sCqEeQU8nJld6yax8Rodw0a5aPz40bXPvNqD7YE0A9QiRMTCQjrl59Y6NfUlJ448eM8XLo1Yt1/roPE4B6Bm/j+PE4/t+FOmR2URFkK1Yo49q2HZR55AjbsFM/YF8BNEw4NTAoCDE0BAAdZ0IUMebmAKCzu6hIMbG4uIH306eeRKHgyr+BU+/dCx3m6kqPzptHF/fuTcYSgnYXLyqMN2/2nZmczPX1+zcnqbm5jpuODllhagoAqk8KCnh7S0sBgCdUKkXC/HyufdRmmAAACKfGxoWpTZvytlha4p5AoJrbuDHsTE3RzNSUCExNsc7MDDqmpphlbo4ZZmbQMzWFrqkphpUvmyUiMzO6hccDgCIJwKt4rlLFvfDz5PLHrSIJIBYDsM/JwT2FAjHZ2fgzPZ3op6TQ71JSyOnUVDokJYX6p6QU+MXHV0dRy0En09OBuXPxc8Ub12ruWp/f17ixoq+dnfKHJk14Z1u0gHuTJnjcvDn9rlkzDG/aFB+bmWGYgQGmGRtjjq4uJMCL+Qd4P79gTFZxLZ+z9tkz7CwrI8NKS+nJvDwgPx/dcnMJzcuDTn4+XZmXh5L8fBTl5xPT3Fz6fmYmPZ6ZqSNNS1P6Z2bWx3TjdVoAxFJ9fWrUsiXSW7ZEYcuWJNrGhg63suJ9Ym1N9S0tkWZtTZ5ZWxdJDA0JAPoegPcAUgAgpuK1/wWDB/91gooBNbqlCs7JGjaEDoBOAgE6tWlDK+xRx/J/yQTA2F6pFEsTE3E1JoZExcWRP2NjVUejo0XCxESur+3bCHOytFS07NCB9Gnbljbs0IH83LYtdXB0LLW0tEQcQPoA9MXqQDIAa1/4eU4VTrrA2BgygK4DILOyAgAcBF71Xeb59SaugNK1/Gfxuuxs2D1+jB8zM8n1tDRKMjJI5IMHFElJcH3wwLAgKamubXDSegEIdmjWjOgKhbyLQiFtaWtLc1q25L3XsiVV2dpiS5MmRPRCemp7gMQA9It/jq/VX3RlfD4gFKKxUEgHjRxJBwGQARLHjAx6NyIC9/78Ez6XLhnG377N5deKoE5GRrrz3dxUye7u5Hd3d7q5a1eFrGVL4J/rS7/k+mJWAsdGjYBGjTCrffu//X4+a3K8/OlNwsvKol8lJZGopCTqk5SE/lIpcOdOicO9e8NIbi7XIbwrWiEAYqm+Pm+hoyMi2rRRZrRpg1KhkNdLKESUUEg3m5gAAI0CcBwgFwD6NdceVy90nZUVMHw4ZMOHYxNQ5PnsmcTs999plFhMHCQSL/LgQXWe/1yYmVmZbe/e8PD0RK8+fdDH2VllpqMDJ4A6AeqW/6rN0GALC8DCgnbr0gX4J1Z9GSAOSE/HsLt30e/ePSq+cwf3YmOJ8+3btXmcotYJgITa2tIEJycEOTnB19kZcU5OEAuFqsk6OpgMEEl5O7WrytYlFhgbU/j4QObjQ2WARO/uXTo4JASrT5zwcrh6Vd0R/cCjenomF3r1Uk0eOJAEvfdemW2nTpDx+S99PWIATk2aQNakCXb07UuSARgB2EKp+NT9+1h18yY+uH0bN27dUt6LivK9mZXFtbsAxwIglgoEvIXu7ipPd3dy0t2ditzdqaRRIwBAO5SrqwHAykG9G/RUu3ZAu3aQzZsnwcOHIVGBgTTj6NF3mdcPGWltTVaLRKSrSESN+venQ01NiRxAN9TpO7zGEREC2NlhuZ0dMGoU2gF8MaXi0vh4lEZEkPhLlxSPIiJ8bRISuHCvxgQgMNDQ0MinY0feI3d3bOralexyd6ey1q1VFUUj6Xwuwq8HyFq2JJg/n/Dmz5fo376Nlbt26bgcOtR/QF7ev5ueEVhZ6S4YMYK28PMji3v1ojIejx7iOoA6iIgQiNq2Bdq2pZKJE/moGNfpFxlJGv75p0ovMpJs1NWlNbDnomYEYMQHHxhv/uQTGOvqAgB8AOpTI2dmvAA96eoK/PBDWezatRJBYCCN2LkTSEyEz4gRxMrPj+7u3ZtWlPaq0swGo8qUj+sMG0YxbBgBQH9W22SlqBkB4JuaVmlapxZARKWldEJuLhbl5mJAbi7y8/PRvrAQJSUlpEVeHvUqK0NJfj6dVlxMEl6esyennz7FsfLReaowNMQvBgY02diYxOvqQt/UFL0bNEC3pk3Js2bNqIeNDRYYG9dIUO0aNKA/f/IJZJ98AjGl2ETI82kxTq6x99On0H30iMalp5N5qam0UVERCc/NxUClks7Ly6NGZWW84f9Mv6l+NTYmhRU3EwDER0eHzjIxoe8bGpI1BgYwMjXFDj09mJuawqNBAzxo2JDQhg1pgLk5ePr63ERZO6l1g4A1gkIux96UFPIsJYX+kJlJBj1+DFO5HAK5nP6Qns4Lzsrir8zJKbbNzfVFYSH2ANjzwvGXKv6NAnCi4ufplTjvm8YyfgdOl5qY6O6zscE6oRBt27enMzp04Jm2a0dPtGtXbX+4IjWr+FaW5WlpOHDvHv6Ij8fjO3fowPh4nRspKeSHlJQBtKAApa+4PjsrXv+m+Svee9X1zwZeqizsUz5lSZ42bMhLbdSI97mVFXWxtoZUIMBea2s6wMqK/NK0KexsbenKFi3qg1jUPQEIKi7GF8nJ2J2SQhelpMD84UOSkJxM81JSdG6kpOQ1evjwpdV1//6je/H3Gs52MyTy6VMI79wB7twBTp3C3PL3w711dEo7OjoqAz08yLzu3alx9+4Ya2/PyfV9G2JKySWZTHX1+nXIr1/HlevX9Uyjo/tfzct76dp+xY175VuaCwuB1FQExMa+9OGuin9vA9SbkPONmzQpeWRrq2PbsqVSZmuL/JYtyThbW2S2bIletrZVTaBam9BOARBTipnJycRNKqW+9+6RjvfuISE+ns6Ljxdtf/QI2yvaBXDtqGYoX+QTHQ1hdDSwfTsAnDlnZaVT8P77+GjAANgPGACnJk04cU5VUoLIqCiM/+MPYvDHH8VeV68OI7m50PJ7Z/nUaVoajNLSgMhImL78OY0lJBQtW2JM+/Y0pUMHtGvfHvMdHRHUrh3aNWjAtf+VRQdiSt/0GEjdeW/fMThBpYJ/NXgnppT8mJQE41u3VNlxcbwB9+7RH+LjlZHx8b7fVySnOFzxAl79uFhHGSzPyAAOH8auw4cBQHLY2VmlN3gwOTRsGCZ36lRd5yUzVSo65sYN2vvsWd77Fy48PXb1qt/qoiKs5vqK1CzlAvHgQflLLMYlALvKC6iec7a1LZM4OpIP2reHc8eOGNClC/Ts7DTqwASV6m1NqDuPR+RvaCCmVAczi4ogMzJ6baBxjRu/1Zn+qalAJdq9CVVJCVkRF0dzb98mRtHRZOHt26qZ0dFe3+fnIwfAc4liawJeideYmBggJgZYuTJM1qqVcvfIkfTR+PEwaN9eXdtkbm4uXRQSwpsfElLW/Nw53xW1YxFLbaRcGJKS0DwpCQgOxiUA24DQ5EaNKLp0Qb/OndGySxf81rkzDWrWrMon6p+a+vdY1GvgiSws3jib0KqwUIcMe/qUrnuDAOxv2vRtvlDHY8cInJ0r7byYUvweH4/uV69i/tWr1P/yZaNjcXGePi+sZ/+wypem3jMgNikJ7uvWAevWhSa7u6vCxo8n6z/8kK4v35pcKRRyOdqeOkX9f/312bLffvMbXb4FF6zkR5UY1CI7Gzh7Fjh7FtLy984G2tioBvTpQzv37o3A3r3RqU2bytojhwID39aGOr2l7yry84l4ybVreL6u+VXcfvBA5N+q1ZvshFMDg2KPCxfo1x4er3RWVFpK/a9dI7+Eh6s6RUbS8Vev+vjk5FTnBWe8TDg1MCg8MW8eMfrmmzc2DP7lF/LDjz8+Pfbnn35+rJhnTRIy0tqaNOvThxweOJDOGzToteM69hERwPvvv237ssTp4UMa0KLF6z4nI65eJWLnAwewZuzYNxni+7u6Drz95uIPgYGGhia2M2ZgxujRlDRpQuJkMur55588x99/LzsXGckSSnJP6MJ+/VR9zp17Uxvexf79BwWcP8+1r/UdSgmRJLi6IsjLC2H9+yNXKMSCjAza/9ixgtBNm96WJ0Is7dgRsps333gS+/37dcjxqCgqe7MAqPJHjADeLADlDpU/dv79ZjBenodlMBiVonws4dat8tfq8iHWEe9gYM6IEZj25ia09No1HnUND3+rMf3PPz+/T81BPgaDUSMEBzdsiA3Tpr2tnc6lCxd4XgVxcTgoe+MiULre3Lws3L86JvoYDIaG4X+6dClkDRu+sdHN+PiBU+/d4xFCKZYdOPBWqxGzZ4cO8/bmOjgGg/F6xFJfXxh+/vnb2pH95X2eBwDUf+dOBBUXv+kAuoXHU004fFhy+B2m+xgMRo1x1tXFhbQ5dOh5gtrXYl9YWJbz009AhQB4H3/8mOTu3v3WM/BNTanJn3+yJwEGo3Yhlvr6qqL//JOGlKfIeyPhO3eWryR9oTAIXb58Of7Kfvv2F76pqSrg9GmxxYYNockV2XsYDAYnnN/XuLGk2aZNRHTqVGU6P/HJytLTX/l3ovW/BUAklMvxdNGiSp1Vxudj/xdfqIplMknrFSvOurq4cH0hGIz6hFjasaPYZ+XK0ojERLpr1qy3PvY/Rzl/fr/xT548//U/m4DEXQIDsXzUqHd1iCxMTqYD4uLI/owMuiyTLRitjfS3tYVs9Og3trE/ehTnqjerMKNq0DFWVrzh1tbUxtERH9jYvPPx7x854q0/ZsyL7/1XAKSmpvD54w9sYnd1BqPOUHTrVtn6Pn2GRD59+uLb/3lsEAnz83mOXl4orf3VZxgMRiU4KJPRIyLRvzs/8JrqwINOpqfTgz17oujWLa59ZzAYamAfG6uKeu897+OPH7/q49cOHHgff/wYTu+9R7a+fdshg8GofdD3jxwpG9+jh09Caurr2lQqIaRk+8SJ9NnateW10xgMRm2G+GRlQTl/vhfZt++tbStrNKiThQW/7ZIl5PqkSXSToSHXQTIYjH9hX1hIPHft0l31zTcvTvW9iXdOCX1GYGXF3z55MnH++GPIhCxBF4PBNQvu3SOlBw+W5fz00/MVfpVFrZzwYmn79gjs25dcc3enMW3aIKxFC0wxNq6xAhcMRn1i7bNn2PnsGQYkJyPs3j1aeu0aev/2m3f23btVNfl/PrIjw7OZuDMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMTM6MzE6MTcrMDA6MDCkcy9eAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDEzOjMxOjE3KzAwOjAw1S6X4gAAAABJRU5ErkJggg==",
      url: "/bookstack",
      title: "Praxishandbuch"
    },
    ENABLE_ROCKETCHAT: {
      img: "data:image/png;base64,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",
      url: "/chat",
      title: "Chat"
    },
    ENABLE_NEXTCLOUD: {
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAEAQAAACm67yuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflBB0NIAUwmEptAAAzMUlEQVR42u2de1hU1frHv2tAQAVveb+g5DDizGAm3tOUQoUBUhQR5KJZVr9OmVlmeiy0OpZZ5s/qPHU6pSkIIngDZlAq9HgXb8nMqIiY4P1+BQRmr98fZj87zd7DZc/suazP8/j0PK01e71rDfs7a71rrfcFGAyGy0KkNsCVyckJCiIdJk0iJwMC8FrTplLbw7AuxFRVRQtPnOA+WLkyIkWvl9oegAmAJBRQb++qtt9+S+Pi4qAh7DtwMcgMjsMzixfv/Xb+/IWE4yS1RerBcDW0xZ6eWPnTTxg2bJjUtjAkRr52bftbiYn9B9TUSGWCTOoxcDXIV+++y15+BgCgZNKkKyHr1xdQLy+pTGAzABuSsdbDw2fBpUv081atpLaFYUds//lnd+3YsaOL7t2zddNsBmBDvL8cMIC9/Iy/MOLZZ2uztmzJ39qypa2bZgJgQ2hsly5S28CwU0qeeqp2/s8/Z/dr29aWzbpL3W9XQtbGw4MKVZDv2oXBlZVS28loJHNUKgR26lTfj9EFQUFuK7dty+s+alTohgsXbGEqEwC7YsoUzfVTp6S2gtE4cl9asYLsmTq1QR+eqlJx83ftyskJCYmIKC21tq1sCcBg2Bsf+fm5zS0oyC7397d2U0wAGAyRkSko70qPzL50iXxcUGDpGXSxr6/bmu3b85aqVFa1VYoBYjBcFtn9+/T7sDDyxaZNFusGdurERezYkbto0CCrmSP1eDAYzgb9lH8GQJ8kRKO4f//OizExuJaZafFhJa1bk9NbtmiHPfWUNWxlAsBgiM3H/AKACQ/ufsRMqq6+6xkbS6asWGHxeVEtW+KHrVtzC0eNEttUJgAMhkTExJhMoZdfeIE+vny5xcolzZqRS9nZuueiosS0gQkAgyEyJFDACTj+z7c/CaFU02vmTPzw2WcWHyzz9KTPZGTkZiYmimUrEwAGQ2IIoVSTOXs25O++a7Gywt2d9FmxQls8bZoYbTMBYDBEhgr4AGh//vgPGsXixTj0+uvQUsEDoyhxc8Pyf/9bWzxzZmNtZQLAYNgRmvlffUWS/+d/yAwLgUI0hKDkiy+0xe+/35j2mAAwGGKzSOAXfLzlCFBh7b79lp5PTERxba3FtkoWLtR+/cknDTWVCQCDITL0IwtT+DqgqVizhgydMAHc/fsWK/vNmaOL++orSusfXo4JAINhS6Lq/pKGDdy8GWuioshMyzdEaeLf/qY7+e23yVRWr3eaCQCDITKy/o2fATxEs0anozlhYST8zh2LlUumTx/0t9TUA4VNmtTZVonGiMFwSUg9ZgAP0Si2b8enzz4Lw/XrFitHxMbWJ84gEwAGQ2SEfAB0UMPCwIfNLizE2JAQ1F65YrH9tIiIqqe12gLq7W2pLhMABsNB0CgOH3Y7//TTJPLcOUt16dzg4MrOWq22uEULoXpMAKzMlqnduunKxozRqd5+m/7awCgxDIeC/Cywhz+ucYlgxrxy/Dg5PXIk5GfOWKz8/fDh5ImtW3NyWrfmq8JCgolETk7r1m7/UamwTankVqlUZKhSiXF9+pii27eHHsASqS1kOAuhviUlW6YOH26a99NPKFEohOrSrEGDZFU7d+ZFhYSYizPIBKCeaItbtOCK/f1lO1Qq+CqVZJ5KhQqlksoef5yOBDASIKUAUqS2lGGPkEbOAB4yZmV5+ebcp592f23rVgzo00ewspdSyQUVFGgXh4RoFGfPPlrEBICHjLUeHi3O+fvTAKWSC1OpyEClEnNVKqIJCJAtl8kw4kE9mia1pQx7gy6kFCXWb+e5K5cu5QSNHOk2QaejWRaiBvXr1QvYuTOvLCQk1LfkD+tcXgAOFDZpcnWHQmHyUKkQEBhIRiuVpE9gIH3y8cc5Hzc3ACA6AAsf1KeWb24zXJ2C2lp0M19EX2jSBN+J11RExI0b+VvHjKnpkZuLEgtRg0q6d+dqCgq2fDNq1JhXjh8HXCg1WDKVyQad9PPDksBABCiViOzTB1AqiaJXL6r18JDaPgCAXC7XKFhYcEdHG/Lee5j1wQe8FWYOGKApPnBAzDa3BjZvXntu40akhIRYrJx5+TJX/eyzESl6vVPOALZM7dat9q5KJXsnMJDzVyrJFbUaJ5VKlDRrhofxVH6fBFGt1NYynA1yv6xM8CjgssJC3exLl3Dy+nX0ragQo00TAITUMclodPv2bpF5edriJ590aAFIpjLZoF79+iFp8GCUBAZinkpFxqpUpphWrQgAehUgV6W28hG0lEIjjhOIYb9wb2zbZulLpks6dAA6dJDKRprdpQswZ47D/jFqiyMjScznn9NF1k+eUG+Ka2vx75ISzNHrSaFeT18zGMjNoiIMGDKE6gSCQLIlgNOgnbdjh72ngSfzTp50yBmAtnjmTCxfupQukvjXVEspdv/2G97W6/GiwQAUFVGN0XhvotEYo6+uxsPIbb87DnMzBw4kzaQdO4ZtoBvff5/c/vlne57x0bY9ejicAORmPv000Xz+OV1u44FdeP48MRoMGF9UhMFGIwkvKvIMMxqDyd27mPxIvczf/zFcmnBjQYGu6qOPqOa996S2hZdZTZo4nACQ1z/6iH5fvzvP9cJw/Tp8i4pwx2jE00VF9KjB4DZQrw/d9/tNrB9//8dgWCD0VHJyXk8Asr//nS634t9sI3AoAcju17YthoqzriLhd+7Q7seOkaCjRxFoNHLher3bIr3eVmmZGc4PIZQC77+fuyg3l3y2cCGUo0fb25LAoQRAFt2zJ/rWcwC5+/dx32jEXaORGPR6boZe3yTMYBjF/fYbIZTiNwBZABZI3TuGsxI+b98+IDQ0r2WnTvSLESO4rQEBZJVcjq88PEhx06ZUYTniT4OZq1LBS6nkK3YoAcCh+/fRV6C85uxZ3N6791HPu9eAU6eCySPBFT/9/b92pcMMV+DB7DI9/S9/e4XWazM3asECoktO5it3KAHweOn06RqhOKmr09M1mbNnA/jD885gMPixS8cEH6NG37olFAyBXFOrpbaRwXAkHEoAAICO0Ot5y2YyAWAw6oPDCQC+4RcANOnaNa+sTRupTWQwHAXHE4ARBoNQMf2K3+PJYDD+jMMJAJklMAMAgNkqldQ2MhiOgsMJQG2awSCUOJG+wQSAwagrDicAkYcqKuhnp0/zlZNy5ghkMOqKwwkAAOAzAT/ArsBAqc1jMBwFxxSAHwS2AnPatt3cTrpACwyGI+GYAtBXeCegSRRbBjAYdcEhBYD8W3gngB5gAsBg1AWHE4BkKpPR/h07CtUhfkwAGIy64DCXgXJygoKIPCmJDI6ORnLnzkJ16X22FQgABdTL615lv37uC5uxQGQOgmlAdTXpc+SIRnH7ti3as2sByFuqUpnenDhR5pGYSGWPP45SAMmWP0dy1WpKCXkQkME1yYsKD69Sf/+9bEmHDtwIqa1h1BUCAC/dvat9f9YszQffiZhCxDx2JwAPX3oSHx/PBcjlRAfQTfV7Bs318dFm+foCdcig6oRoi5VK7ovMTEyvY5x4hn3xjrc38K9/aadfuaL5buNGazZlFz6AvKUqVS5dsED70fHjXIBeT3TJyUiQyxvVsSwXXgZEz52LSPbyOzyj58yxdhOSzQC0xUol9Y+JkXnGxHABvXsTHYB+4j2flqvVgNY18/5c6d5dahMYIvBEjx7WbsKmAqCjPXrQoLFjkT5xIkqeeoqUAHSjlRr7QaWCovGPcUSo8dQpsmf4cKntYDSSlSVWzzFs9SXA1kA/v9zbc+fqPA8fprrTp/HRsmUWs5iKQZHrHgmmuz78EJ/evSu1HYxGoKUUUz/80NrNWEUANrfr0EHX9/XXtRG7d9eOOHWK7Fy0iG7o21eMZ5OZlZW4lpkJ+cSJ5MuMDN6KP/XunZHxIL23qxERUVqKf0VEkLGlpVLbwqg/JOLqVbjFxWkUW7dauy3RlgD5W1u2rPl57FjyzcSJ9IkxY+isJk1Es5K7f5/E5+fTV9atq267YcPYxDt3AEA77PHHgZgYs5+J9PJq3qdnT6C42NqDaI9oFNu3Z2QoFC2OBwTUKphD0FFwu11Tcyft+PGYSdXVtmivUQKgLfb0BEaPJm9PnFhTNH48RjRvTsXac5abTMDevSRh1Sr3j9auHXXr1i0s/nMV0k2vF9rod4tUq11VAAAgJsZkAoTvTTBcm3oLQDKVyQbPGTqUXk5MxInYWLi1aEFfEcma3196xK5bh/Q1azSKK1cAAKPNV689odcLzfG5tWo1FOvXW3kMGQyHpc4C8MdR3JMxMXSk8Fn8+kBmcBzV7tmD2HXrasvT05+7cukSANTFgx9xsLxc99KtW4hq2dLss1l0IAZDEEEBePRUHmRyOURyKT360nN9164NV1y82KDnEEq1EUYjMGSIuXI6Xa2GztpDyGA4Ln8RAB3t0YO7ExdHLsbFcSWBgUQHIEGElrSUYsbu3QQZGe7XMzNHKc6fBwAcauRzl+r1KDEvAPinv7+22NNTo7h/38rjyGA4JH8IwNZAPz9Txy++oK8/9xwRM4Np4dGj5F5aGjcyLS1cIf7ZfAIBR+CsJk3IgV69gKNHRR85BsMJcAcAraJ/f1Ntfj59s1UrMR5KxpaW0jFpabJn0tJCk63rhaaz9Hq8KlD+olrNBIDBMI+7trhFCyRu2kSTG/nyyy9eJMFr19KC9PSwmr17kQMgxwYdOKPXC+ULxRHXPRLMYFjCnUS8/jpdJhxggw/y1s2b9J3162XH09Ju3y0oiDlnMtn6ZRtddPmytvbKFbi3a2e2wjQWHYjB4MMdZ6Kj6/MBMrOyEj2zs2nXtDS6SaezBwcbWaLX07nBwWbL9jEBYDD4cEf3Xr0s1iqurYUmP58eTUurabtx41jdg6O4sHq8krpBu+n1gHkBQPcePbY2bd58dNG9e1LbyWDYG+70Zf40W/j07l386513TPPXrYucefWq1MbyQUr4dwLocpnMZFAqMbuwUGo7GQx7Q4YCAQ+5unlzrnjLlshD9vvyAwD1sJAxeClbBjAY5pAhOIffV68hRLYsPl5qIy1xf4fBAC1/AFAymgkAg2EOGe2emir48lxNTJTaSEtEkZs3MercOb5yWs7uBDAY5pCFR585g6ydO/kq0EX+/rolAwZIbaglyDL+bEFkO5sBMBjmkAEAOZqaKljLAZYB9DGBhKHZXbrklbVpI7WNDIa9IQMA076MDHD8+/l0TFxcAXW3uxwCj0LWWXAEfqVUSm0jg2FvuANARMSNG9o3tFqMiYoyWyu6ffvK+FGjAJ3dXq6lvfR6LBMo36hWA/xLHWckLyo8nDuo0eAZ+xZvxv9D8jiO+2r37v0TUlMXEoEtepH44w+DfpqaSn7mEQAAZEtCgj0LgMnbaHSfwXF0ucx8oNMc17kTQCkhupdWrOCipkzBdKmtYdQHGgMQvPLK4Keff15bHBZm7ZO2f7ws9zZmZ2PRtWu8hu0ZN27TUB8fqQeIj8hDFRV0oEAU3NddxxGoezcxEVFTpkhtB6Ph0LnBwbRs/nxrt/OHAMRMqq6GPCuLt2ZJs2ZNhvPPEOyCBQI7AfmuIwB4ITZWahMYjYf8YP3v8U/TZRphYTfgSfveDaBlAjsBOW3b5kaLF8vQniEvsDDgTsEk63+PfxIAzYQdOzD/9Gm+ymR+SEiOf5cuUo8Lb2cWC+8EuPV0jVkA98Yvv0htA0MEcn7+2dpN/EkACKEU6WlpfJXpcpmMFEyaJPW48GHqwD8DAADuBdcQgGYTPvsMM3/9VWo7GI1g4fnztRslyA5MB6ekkJR58/g+QF6PjweWLpV6fMzR8Y0TJ64MqK6mWg8Ps7bPdY0jwcGkqiq739Ch7hvnz6fbNBpy2n6dt4w/Q9dWVeH69u2mmvfff+6K9S/h/UUAwq8fO6b97tAhTO9nPln39H79cpqr1REpwr+2UtB/QE2NNubkScD8i05j1Wpk1fepjknkoYoKHJo3D+AXc4YdMt62zZndM6dfCjsDZe/HxdnWzHrwkcBOQIxKRamIEY8ZDAfHrACYnkxNRXEtb6xNMiEhIZnKrJ5avEG8yu8IpLk+PtosX1+pTWQw7AWzL/FzVy5dQkd+TzJd7Os7MGvYMKmNNwdpJrw0cUt1DUcgg1EX+H/FDwsvA0ifBDHyBYlO7dcWdgIWMwFgMB7CKwDu2qwsfHr3Lu8nl8TEZGQ0bSp1B/6bA11PncIx/gCg5G3X2AlgMOoCrwCMLrp3D89v2sT7yaiWLZuP1Wik7sB/s5BwHFl7/DhfOZ3CZgAMxkOEHXlbLCwD3rHPo8H0CYFlwE+9e2dkuLlJbSODYQ8ICkDT1Px8yPlTd5P/DQ//aeVjj0ndib/YNV3gSHCkl5dPD7lcahsZDHtAUACCSW0tCV67lq+caj08asLrl1nIFtBlFhyBT7BlAIMBWFoCAMBM4WUA7WN/ywA3D2EBkM1mAsBgAHUQgLDZhYV4h9+phgnDhm0N9POTuiOPMnrF2bPkrZs3+crpHrYTwGAAdZkBAEDHNWt4yzSEmO5Pnix1Rx6FEErRymjkreAil4IYDEvUSQDoK6tWCSUPoR72dyiI9hJYBpQpFNpiT0+pbWQwpKZOAhAefeYMZuzezVvh04CAnJygIKk78yhknsBOgMLdnRyoQ1ZkBsPJqfuFnoiUFMEHnbOvWQCdJewIpC8yRyCDUWcB4JauXSuUPAT7Jk+2p+QhpvMCWY8B4AjzAzAYdRaAiIgbN6AQyAsQ3b59xcSQEKk79JDIQ1evIvPyZd4K09gMgMGo151+2l14GUAi7WsZgHcFgoPss70AuL3KH2MBAOhR4XIGQ2zqNWVv5pGbW/XWzZv081atzFa4Om5cAfX2DiYCtwhtCOX0eoJnnjFb9rKfX8GXtrW19ofiYl7FNd2+3aH7+fNitZUX1akTt/iLL3AiLAxuLVrYqo+MxkFmVlbSrv/5j1vMzJljXhE4fyMS9ZoBBJOqKigzM3kr9G7evCpt3DjrD1MdO5cksBOgIeR+uW0ThkZEHDyIa+bHjz65cGH/ATU1YrSTk9O6NTd1/36UTJrEXn7Hgi5r2hRvjxljSi8szCuz/p2Veof1oh8LLwPov+1nGWDaZuFOQJXtlwFNOrz4Ivlm9eo/zlVkV1Xh2N//vr/LsmVitSFbOW8emnTtauu+MUTkHW9vrmrJEms3U28B2Oe/YweZU1bGW+GbkBB7ycDjudNgEDrARP5h+52AUaNv3QrbnJRUu7ZTJ8j79av5tX17zVuLFomZCZboBg60db8YVmDDoEHWbqLeArCQcBw9JXA0uMTNjSyyj9x0o0bfuoXbZ8/yldNy6bYCn7ty6ZJGcfjw2N137oj+8KE3bkjVL4aIHLx+3dpNNCyy75HVq4Ur2NENwfkCOwHbnXMrkHh/953UNjBEoMT632ODBECjMBpJ1JEj/Ib375+31D4O2tBbAglDs7t0yStr00ZqG8UmdENuLuTJyZCbTFLbwmgYZMqKFfsOfvmltdtp8Mk9+kFKCtC3L18590tcHGD9/OaWkM0yGOhcgQq7VCpgxw6p7RQbjeKDD3IS1q93mxEWRgvtL2oTg4eq27exYfv2sCu7dsEGKWwaLACyvWvWcFGLF6OEJ77e0oQEmv3ee4TwO+FsgWmOXi80zeGC1GpnFAAAiEjR62GHKdwY9kODs/uEbrhwgQQJpKEu6d59S7r0yUMqKoxGoakwSbaPpQqDIQWNS+/VVzhcmGm49M7AmJjKShJTWspXTsc5pyOQwagLjRIAt5uZmYJJOCpiYuwh8AYdIRQcJDBQavsYDKlolACMLrp3j762eTNvhZLWrcnb0icPIdkCAqBq0yYvqlMnqW1kMKSg0Rl+ZVMtHA3Okf5oMGchOIhpnm2XAdriyEjtmIIC7eSTJ3WjNm7MSWDLEIY0NFoAvNZs3Sp4735zeHhOTuvWUnbSrVrgUhAA0tJ2jkBtvzfeQMnmzXhj5EgkyOX0zbFjZbEHDuSlDR8u5RgxXJNGC0Awqa1FFX/yEMg8PWX7pU0e0nZ4cTHRVFfzVoiwzS9wXlSnThj0ySd/KZB5etIp334r3QgxXJVGCwAAyD6xECjkc2mXAf0H1NTQ4hMneO0rt9EU/LchQxDp5WWuiG7s3Tu/TefOEg0Rw0URRQBCfffvxyH+F4w+P3y4jvboIWlPl/EvA+gglYpSYvVzV3R2s2ZC5aYjwuUMhtiIIgAAgBjh5CHcnbg4KTtKnxHwA7zj7Z2H7t2ltI/BkALxBACpqUJ372VtExOl7CjZYiE4yDnmiWe4HqIJgEZx6hQ5uGcPXznd2Lt3XlS/fpJ19D0LCUOXMwFguB4izgAAjLeQSbiFdEeD93QrLRU6tUjz2J0AhushqgCQSenpQtttVBkXl5HBc3vQyiwkHIfIY8d4bT/BZgAM10NUAQj1vX6dDsvL460Q2KmTd99nn5Wqs7SdQHCQrN697SmzEYNhC8RdAgCgscLLACnDhcmGCewEyDw9qwp79pTKNgZDCkQXgGZ/27yZvHXzJm+F7AkTCqi3txSd5Xpb2Al4gi0DGK6F6FPeYFJVpV2xfj0wbZrZCr2bN69s/txzgMC5AStBFun1KOEvl81Wq4GsLFvbZS3yytq04aqeeoqUmD99yLA/6IaaGm5bYWHEyXPnbNGedda8WampeJVHAADgf+Lj8bntBUCjOHtW15s/tRnd4zw7Adri+Hjuw6+/RlTLlpLGZGPUjyjA7bvqam3x++9rFIsXW7s50ZcAALAve9s2pJeX81boNnr05nYdOli7c+agUQLLgErnCA6SVzZwILQrVyKqZUupbWHUH6r18EDJJ59o35g0ydptWUUAFhKOwyCBX3iFu3uTXdbvnDnoqwKOwBflcnuIYNRYuKpZs6BgOxqODtkze7a127CKAAAARq1aJVRMU6S5ISiLEBAAhbu7W0xAgBR2icoIdqvQGaApXbpYuw2rCYBGYTRi5q+/8lYYPGDAlm9s/7Jx1RaiA2U4wU7AGP4DTwxHwmi0dgvWmwEAICnCZwK4TydPtnYH/9KmV1GRoM2fOb4jkNv1wQeQs/yADk1xbS3NnDfP2s1YVQDcQ1NThWLy07ykJFvcw3+UyENXr5LZly7x2jTS8WcAD7aQnn0W3x06JLUtjPpDxpaWQhMeHj5v3z5rt2VVR9Go6+fPa7/ftg0jeI7/lnTvrps2dCiwa5e1O/ooNEKvB8zvQpApjj8DAACN4vBhICgo161jRzqVBRpxFGSK6urQ6nPnbJVRy/qe4lWpqbwCAABT4+Ox08YC8LzBQErN20Rf9vPbdMjHxyppuyUgPPPiRWRKbQXDXrHqEgAAsD0rC/KKCt7yG5Mm2XrrTZYksBOgIcQzvXdvW9rDYEiF1QVAo7h9G8jO5q2gatOGfh8aastOm7ZZuBNQ5fh+AAajLlh/BgCANrMQNfgX294QlJ3V64XCl5F/OIcfgMGwhE0EoFmXvDwhzzv6R0ZuoObP51sDjeL2bbKd/6gyDWMzAIZrYBMBCCa1tXTDunW8FSK9vLy+mTDBlh2nowWWAV8wAWC4BjYRgAdYiBf4m23DhpNMAQFI7tw5r6xNG1vaw2BIgc0EQKPYu5fMO3mSt8KwAQNs2XEaK5wv0LSfzQIYzo8NZwAAd1jghmCvixdtastwCwlD+zBHIMP5sakAuI3/9lu+0NwkVCDBqBWoqDAahY4pI4TNABjOj00FIHTDhQv0tSlTkF1V9ej/J5Py89ut/fBDW9oSE1NZSWJKS/nKyTUmAAznx+ZBI8I9s7Jy/Pfule2LjkZ6y5Yk+cCBvbfz8hYSjrO1LXSEXg/4+5ste1Klwk5bW8Rg2BZJosY8uK32v/8Lxe//I02azpNsvZ6OiYoyWzjvscfyvuvUKXTDhQvSWMdgWB+bLgHsDRop7AiEgjkCGc6NSwuArLuFOwEvMD8Aw7lxaQFoO7y4WCiXIZnLZgAM58alBaD/gJoaBBUX85XTWDYDYDg3Li0AAEAHCSwDvlarbR2yjMGwJS4fO54+YzDwvuHveHvnoXt34LffpLaz3v2ihOQ9nZREq8LDcap1a6ntYdSRxDt3SOsdO+70/vrrmEn8y1OxcHkBIFv0ekTxl3Pn1GpHE4BkKpPp0jZuxNzISKltYdQfiqgo7+8SErYGPv306CLzJ2fFwm6WAPltOnfWTl+5Urv4/Hltv9JSre/XX+dvtX5qK9l7wjsBsuWO5wcYdPLll9GKvfwOzfR+/Uz9PvjA2s3YhQBsGurjU+u7bRuipkxBYKdO+MjPD9+8+mpNj/37rS0Ce7qVlgrFLKR5DrgTcGjcOKlNYDQeWhQV1finCGMXAuBxdcYMusjMkdwShaLm0xkzrNn2gyPI/BlYyAnHmwHgsJub1CYwGg+psf73aBcCQHOeeoq38LUpU6zuiV/CfyKQTgsIKKCOlWiTvq7VSm0Do/HQN3Jzrd2GXQgA9gk4Ojx69sytHDLEms2T3QJ+gEgvr+pv5XLpBqf+NOuyfDmZ+J//SG0Ho+GQeSdPch3//ndrt2Mfv2zvaLX4Pjqar1gWEB8P7N5trea53nq90BSj9nmVCq8cPy7pGNWDYFJbW0Cffbbi3IwZ5EuNhhTYLuAqo5EY7t3jNv3nP00PL14cTO7etXZz9iEA27OySMTXX9NlTZuaLX89NjbD9803rbUv6u5tMJgEymWz1WogK0vqYaoPwaS2Fli69ME/hkMRYrum7GIJoFHcvo2ewslDfPyslzxkzMrycvLWzZt85XSPA+4EMBh1wC4EAACwUDhqMJKtmzyEbuJ3BJJfHXAngMGoA3YjAO2ITkcirl7lK6c9nnvOqslDFgnsBHzq72/r/IUMhi2wGwHoP6CmhnbNyOCtEOnl5Xly/HhrtU/mCQQHUbi7kwO9ekk7QgyG+NiNAAAAd9zCMgDWWwbQWcJHgumLbBnAcD7sSgAimu3eLZQ8hGhGjtwytVs3a7RtOn/0qGCFI8wRyHA+7EoAAIBOS+MNEUqXy2SmEuukEIs8dPUqMi9f5q0wjc0AGM6H3QmAbNzq1UKpu9E5Kclqjb/Lvwwg+5gAMJwPuxOAUN+SEuQUFvJWmKpS6db06WONtinHLwD0ZT+/TUN9fKQeHwZDTOxOAACAbLXgDJxrHWegLElgJ0BDiGd6797SjgyDIS52KQAUaWlYWlPDW94xISEjQ/yrkqZtFsKED2KOQIZzYZcCoFFcuYIn8vN5KyR37uy9asQIsdv13GkwCPoftjMBYDgXdikAACBbnZIiWGGC+MuAUaNv3cLts2d5K7zCHIEM58JuBaCm66ZNJPzOHd4KbaOjMzJ4bg82hvkCOwHbmQAwnAu7FYDIQxUV9MX163kruLVo0fyy+IEv6S2BnYDsLl3yytq0kXpsGAyxsFsBAAD6kvBuAEkXfxkgm2UhYegu5gdgOA92LQD7+//8M4k8d463gldYWHa/tm3FbNM0x8JOQBBbBjCcB7sWgIWE4+ix9HTeCrOaNHGPi4kRs82KCqMRchNvgCCSzGYADOfBrgXgAcLLALo9IUHM1mJiKiux4PRp3vbGsRkAw3mwewHQKA4fJkLZe14dMiT3rEIhaqMLBHYC4tgMgOE82L0AAABXsGaNYCc+FfeGIC0T2AnIads2N7pjR6nHhMEQA8cQgJGpqWQGx/GV06sJCWImD5EtFt4JcOvJlgEM58AhBCDyUFkZ/ceOHbwVEuRy7ccDB4rVnqmDhZ2AF5gAMJwDhxAAAIDBwpkAvXhnAjq+ceIE0fDnICBzmR+A4Rw4jAA0GZaRQWZWVvJWiI2NPVDYpIkYbfUfUFNDY/hDk9FYNgNgOAcOIwCjRt+6hSsCSS/d27W7umj0aNEa/EhgGfC1Wm31hKUMhg1wGAEAAAwXXgaYxDwa/KqAI/Adb29tlq+v1MPBYDQW+8gNWEfuxOfmehuuX4fK/IUccmbs2E1DfXzG7ha4RVhX/IqKBMsHBwYCZ86I2sE3WrTIyWndWtRnMlwa8k8vL/jxlzuUAMRMqq7OPbtuHTn68stmK5Q0a+bhNn488OOPjW3L9L7B4CYgAaRCpQJycsTsHzf94EHHmpIx7B4/4WKH+3tz22EhXuARcZYBB7qeOoVj9+7xlZO3678TQAusn+6ZwagrJPzOHYcTgDGxO3divsBZ/YPPPJPfpnPnxrazkHAcWXv8OG+FLYGB9X0mzTpxwmYDxWBYgJ44ccLhBIAQStFZ4GhwiZtbzRxxjgbTJwSOBE8LCKhvYNLw68eOocpotNlgMRiCZGY6nAAAgFuEcLxA8r44NwTJdIGdgEgvL58ecnm9n9l17lyrDxCDYYn08vKm/l9/7ZACMOaV48fJgoMH+crphr59cxIaf1iHLrNwJPiJ+rcRNnDzZpK3YIFNBorBMIfh+nUuJioqmNy965ACAAA0RXgWIFvfeGegm4ewAMhmN0xkwpYvXEhLJ02CXORtRAbDEtG5uRg7cGBExIMfUIc9zZYb3bEjGVZeDoW72a1MMqesbO9RP7+FhP8WoSUoJUT30o0biGrZ0myF5HXrNIUNj0iUkeHm5r188GD6j969SafHHrP5INoptMzbWzaxd2+6LzAQ6NkTJeIngRETMoPj6MDSUrQrKsIpoxFLRTiHIiYbamux8MIFumrXrvDoP//oOKwAAID2mbw8vD1mDG8F+ciRGsX27Y1pQzdk1y763tChZgurjEbNeHYxqKEcKGzS5OoOhYIGKJVcmEpFBiqVmKtSkXcCAuhymX3OTosuXMBig4HuNhplSQYDRhqNbrrDh0cX8W8Z2zMOdRDov6GvpqYSCAgA4uOBxgkA7aXXAzwCUKZQaIs9PTWK+/elHgt7JiPDza1Zs+7dZQqVClAqydsqFS4qlZcvqdUI8PQEAKIDsPBBfbpcaosByG/cAIxGLDIYcNRolI0yGLgXfv1Vo7lyBQAQ8Hu9/VIb2jgcegawNbB589qply6hd/PmZjv31s2bXsZOnYJJVVVD29D1ff11umg5758kufnEE2GTjx6VeizsAUoJyUP37mS8SsUtVqsRrVYjWaWCp1IJ2YMX3V4hsy9dws30dIRnZ9O3jx7VKH5/0Z0ch54BjC66d0/bduPGB7/0f4V+3qpV5cmICCAzs6Ft0K7C0YHoi2o14HoCkJPTurXbf1QqbFMquVUqFZEFBeXJ+vShuT4+dDqAEgCfSG2lBbKrqnAgOxupq1e3W5mX139ATQ3+BeBfUhtmOxxaAAAAW1JTkSDk8Y+Pb4wA1O4zGNxfFahwRKWCuCFJ7Yr8rS1b3q+Wy2U7VCr6fFAQGapUYq9ajZKOHelIACMBUvqgLs2V2lrLkBkcR7V79pCEVauq3dPSxhbeuePM35/F8ZDagMZSQN3dK0+Wl6PEfKBOoqmubrKyc+eQqdeuNbQN7ebLl+Herp3ZwkWbN2t2jh0r9Tg0loy1Hh4tzvn7c5eCguCrVJJ5KhUqlEr6sp8fNE4Q+6DKaIR61So678cfwzMvXpTaHHvB4WcAwaS2Vtdl7Vr63RtvmCunWg+P6pkTJwLffNPQNsgSvZ7ODQ42W7bPsaIDCXneueUy2UPnFk2T2lIRSC8vp/M2bMD8FSvCM48ckdoce8ThBQAAaPOUFMC8AAAAchISoGi4ANBuej1gXgDQvUePrU2bN7e3baCMDDe35kN79kS7wEByRqVCvFpNflWrL+/y90fAg7MTdud5FwP5jRu0WUaGbHlKSuiPu3YRQqnUJtkzjj+1+x3teoMBXkql+UJKuVC5PCKitLQhz9ZdefllWsgvIMQwcGDY7MJCqfqe36ZzZ9N0pZLLV6nQR6nEPJUKePJJlDRrJpVNNoW7f5/E5+fTV9atM+VnZkYeqqiQ2iRHwSlmAABAubQ0gg8/NFuoIYRUTJ4MfPRRg54dpddjnkD5UrUasL4AbG7XoYPHtMBALl+lIn5qNY1Vq0mMSlWT4uMDABjxe8USa1tSR+QVFcCpU0DXrigRN9IRmcFx9B87dtCOKSnVT2dmRt26eROLpe6w4+E0M4DczO7dybbTp/kcVmTeyZNhRxqWQix/a8uWNZtv3OB1hsk//1yjePttsfryqOf9oUOOFvbvz+folJzi2loyu6wMzYxG7ubBgzKdwUC3N22KFwYMwCcxMYhu316spsi4Y8e4+xkZNHfVqobO6Bj/j9MIAABo5+3YgWHDhvFWmDlggKb4wIEGPXtTeTmadO1qtvCzLVs0v4SG1veZDz3vDx1yslZBQXbveS+6cIEsOniQLjIYUGY0csMNhubhBkMwqara8k1AQO3LsbEkPj4eCfW/Ks3LwvPn6Y+ZmbIf1q0L+3TnTqmHwJlwmiUAACAzNVVQAN6Kj8fLDRMAskyvp7PNCwDZLrwTUEDd3e/l+vrKFCoV9Q8Keuh5h7pXL87nwUUXorMzz7ulM+9/e1At729t2lQNSkrSFiclmZYPHUp0hECEaAxkZmUlbZmTg9TVq5vu1emCSW2t1EPijNjnr0wDyclp3VqGCxd4j51mXr7c9PsuXRryx6SNXrIE0/in+TL1Y4+F+l6/nt+mc+eavUFBj555p0EqFSK9vKQeH7PwnXkXOApbQL28qnSRkYhLSqIDxozBLHESskBuMmFwQQGmr17d9JP164MJi6FobZxKAABAW7xhA0rGjeMrpz+EhYVn5uXV97m64VOm0LkrV/JWOHTiBFnl60uXNW0q9RiYZcOtW5it12ORwUCO6PW0q8GApUVFdT3znpHh5uYzOCQEr8XH09tRUXjH21ss08iEffvQKzWVZqSnu8oZfHvBuZYAAIDUVIBfAEhxfDxQfwGgl4TvBKBfr160n9R9f3Dyka4vKcHHBgPdbzSSkwcPcsUGQ/i/Tp/+0574EQB1CGqet1Sl4jwTE3E6KYl6d+qEV0Syc05ZGX0lLY2O/eEHTWVxMY4ArnwkVyqcbgZQQL28qpQXLtDPW7UyW+HYvXtNZ3XsWN/pZXa/Zs3c0m/ftpvgFEtrasiNEydomsFAIoqKEGA0kq+KivZ0Ky1tTBAUANDRHj3QKz4ev8XH0429e4tlMom4ehWT1q4l+1NTQ0/t2SP1EDKcUAAAQDfhu+/oCy++yNvpm4mJYZOFQ4qZQxuxezdeHTLEln35I9rMAr0eswwG9Cwq4q4ZDB3fOHGi/4CaGrHayclp3dptUEwM7RMfjwnDhom1C0FmVlbSnM2bgdTU9rd+v3HHsBucUgC0xSNGoGTbNt4KDdy2061JSKCtVq+2muHp5eWk3GDgPi0qks0yGExz9Hr6/rFj1jrZpi329JRNCg/n1iYmojgsTKw7+w9u3G3bhhEpKdielaVR3L5ttTFjNAqnFIBkKpMN7nP6NF3Mk8BTbjLReV271vdWGKWE6JpnZyMzPLwx9pGIq1fp8aNHAaORtNbraZRef3+HwRBFbt60xdgMzBo2jPRJSCBjJ07kXSo1hMKjR0lYSoopfs2aiJPnzlm7L4zG45QCAADaZh9/jMx33+WtIH/zTY1i2bL6Pjcjo2lT7yU//oiFEydarGy6fRvfGgxYqtcT6PX4zGBw21NUNLro8mVbj0feUpWKHo+Px574eF5hbAg1Z8+SGWvW0CspKZoKCwlVGXaH0wpA3lKVigvgD+tNFhw8GLa/f/+GPj+3cNQo9Hn+edmg/v1pho8P5pw/T0wGA72u15Nuej03wWD47wistia/TefO1UdjY8m+hAQ0ffJJ0R684dYtDM3KoktSUvYbtm9vrNORIR1OKwAAoPM8fJhu6NuXr1x2XK0OnWVhe8/ByMho2tTHOyICcUlJdGFoKF/Y9HrzyCEdd21Wlr1df2Y0DCc8B/AI8tRUgF8AuF/i4oD586U2s7FkZLi5tTgYHEyPJSXRf0ZF0Xe8vSHSsWKy4OBBWrt6tXtNWtro65cvsxt3zoVTzwAeHMstK+Pdu5efORPm7+fnqEEjHh7SIf+cOpUu6dBBtAfLz5xBfnq66bnvv4/sdvKk1P1kWA+nFgAA0LbJz0dKSAhfuezW00+Hxu3YIbWddSW7n6+vW3pcHDBtGkoadr3ZLIbr12HIzCTtV68OXcwi6bgKzr0EAEBUKSkU/ALAbUlIAOxbAH5a+dhjNVcmTaLbExLQY/BglIh0VVheUUGGbNyI0ampXmu2bv3jktSnUveYYSucfgawaaiPT5OVFy/yhseS37gBdOpkb9l9CqiXV+XJUaMQn5hICseOpVoPDzGe+5ew2LvtLI8dw6Y4vQAAgPbVtDRExMbyDsI348eHbd6wQWo7k6lMNnjO0KHctIkTyYvx8ZgnYsLQ38Niy+asWhW64cIFqfvKsA9cQgByz0ZEkKPZ2byDEJ+VFXYjOloq+/KWqlSmNydOJEFJSfjIz0+0B9ecPUt7rV9PZCtXahSHD0vVP4b94hICUEDd3avUZ8/yecqJprqalHXqFOp7/bqtbMrx79JF5hMdTdwTE+mCoCCxnkveunkT/tnZpPeqVWM++fln5sxjCOESAgAA2uIvv0TJa6/xVtj70kuaD777zro2tGiB78eNI99MnCjqIR0WFpvRQFxIAAYPRonAHfQ727drJo0cKXa7fzqkM2L8eL5Mxg3h4SEdpK9ZwyLpMBqCywgAAOj6FhfTRf7+Zgu1lNKRfn5inN+nlJDcyiFDZAHx8fCdNEl0Z97p1FTaPTVV6rsGDMfH6c8BPAp3eM0aoktONluoIQTDJk8GPv64oc/PzezenfSJjc178oUXZIv8/dHgZGT/xaJr1yDPyiLtV69mYbEZYuJSMwBtcc+eWH7yJG/ykHHHjoVV86QX4yGvrE0bGh0dTVOSkrB86FBRI+k8DIvtz8JiM6yDSwkAAGjX7dmD5oMH81aQ9+tnacvs0UM6aDluHAuLzXBUXGoJAAA4kZqKfgICgPh44K8C8PCQDr2cmFgli4tDro/Pw8y6jebR3PXXL17EYoDdumPYApebAfy08rHHaqaeP897tLbowoW7ft26xcSYTMAjh3Q+njIFfXv0EM2Q9PJyDFqzhgxYsSJs4IkTUo8LwzVxOQEAAO2azZvRKjKSt8IL06bREx07khfj4zFVpRKt4UXXrmFqRgY3OSUlvOmePeyQDkNqXFIAdKNiY+mbabbJxPf7IR2krVp1586mTTGTqqul7j+D8RCXFIAC6uVV+dLFi4hq2dIaz3944w6x69Z5zEhJCZl67ZrUfWYwzOGSAgAAuTdWrCB7pk4V9aFVRiONWreO5a5nOAquKwDK4GDy2S+/NPY5JPLcORqVlkbGr14dNvnoUan7xWDUB5cVAADQ9ti3D/8cOLDeHzTdvk2HrV8vm5OSsvfbggIWFpvhqLi0AGz5JiDA9ExBAUo6drRYeWlNDabl5WFfaurdpzZvjomprJTafgajsbi0AABAXplcTv3XrePNH/DPPXvoJ6mpXNLatZGHrl6V2l4GQ0xcXgCAB7f3tOfCw2WDQkJorL8/vqiqwvH9+2VeWVmhviUlUtvHYDAYDIbo/B/UWREuDz3KMwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOVQxMzozMjowNSswMDowMBRxheoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjlUMTM6MzI6MDUrMDA6MDBlLD1WAAAAAElFTkSuQmCC",
      url: "/cloud",
      title: "Dateien"
    },
    ENABLE_OCRMYPDF: {
      img: "data:image/png;base64,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",
      url: "/ocrmypdf",
      title: "OCRmyPDF"
    }
  },
  buildNavigation(configObject) {
    const container = document.createElement("div");
    container.id = "elxs-nav-container";
    const row = document.createElement("div");
    row.id = "elxs-nav-list";
    const activeRow = document.createElement("div");
    activeRow.id = "elxs-nav-list-active";
    row.appendChild(activeRow);
    const noActiveRow = document.createElement("div");
    noActiveRow.id = "elxs-nav-list-no-active";
    const noActiveRowTitle = document.createElement("div");
    const noActiveRowInner = document.createElement("div");
    noActiveRowInner.id = "elxs-nav-list-no-active-inner";
    noActiveRowTitle.innerText = "Nicht installiert";
    noActiveRowTitle.className = "elxs-nav-list-no-active-title";
    const noActiveLinks = Object.keys(configObject).filter((el) => !configObject[el]);
    if (noActiveLinks.length) {
      noActiveRow.className = "fill";
      noActiveRow.appendChild(noActiveRowTitle);
      noActiveRow.appendChild(noActiveRowInner);
    }
    row.appendChild(noActiveRow);
    if (!Object.keys(this.navigationList).some((r) => noActiveLinks.indexOf(r) >= 0)) {
      noActiveRow.style.display = "none";
    }
    for (const [key, item] of Object.entries(this.navigationList)) {
      const link = document.createElement("a");
      link.href = item.url;
      link.innerHTML = `
                    <div style="width: 90%; margin: 0 auto;">
                        <img id="${item.title}" src="${item.img}" style="width: 50%;">
                        <p style="">
                            ${item.title}
                        </p>
                    </div>
                `;
      if (noActiveLinks.includes(key)) {
        link.className = "no-active";
        noActiveRowInner.appendChild(link);
      } else {
        activeRow.appendChild(link);
      }
    }
    container.appendChild(row);
    return container;
  },
  renderStyles() {
    const styles = document.createElement("style");
    styles.innerHTML = `
                #elxs-nav-container {
                    position: absolute;
                    left: -9999px;
                    top: -9999px;
                    transition: opacity .15s ease-in-out, transform .15s ease-in-out;
                    opacity: 0;
                    padding-top: 15px;
                    text-indent: initial !important;
                }
                #elxs-nav-container.elxs-bottom-center { transform: translate(-50%, 30px); }
                #elxs-nav-container.elxs-bottom-left { transform: translate(0, 30px); }
                #elxs-nav-container.elxs-top-left { transform: translate(0, -30px); }
                #elxs-nav-container.elxs-top-center { transform: translate(-50%, -30px); }
                #elxs-nav-container.elxs-show { pointer-events: all; opacity: 1; }
                #elxs-nav-container.elxs-bottom-center.elxs-show {
                    transform: translate(-50%, 0);
                    top: 100%;
                    left: 50%;
                }
                #elxs-nav-container.elxs-bottom-left.elxs-show {
                    transform: translate(0, 0);
                    top: 100%;
                    left: 5px;
                }
                #elxs-nav-container.elxs-top-center.elxs-show {
                    transform: translate(-50%, 0);
                    top: initial;
                    bottom: 100%;
                    left: 50%;
                }
                #elxs-nav-container.elxs-top-left.elxs-show {
                    top: initial;
                    bottom: 100%;
                    left: 15px;
                    transform: translate(0, 0);
                }
                #elxs-nav-container.elxs-show.elxs-top-left {
                    left: 15px;
                    transform: translate(0, 0);
                    top: initial;
                    bottom: 100%;
                }
                #elxs-nav-list {
                    box-shadow: 0px 4px 17px rgba(115, 115, 115, 0.25);
                    background: #F2F2F2;
                    border-radius: 4px;
                    width: 210px;
                    min-height: 210px;
                    padding: 25px 13px 16px;
                    position: relative;
                }

                html.dark-mode #elxs-nav-list {
                    background: #222;
                    box-shadow: none;
                }

                #elxs-nav-list-active {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }
                #elxs-nav-list-no-active-inner {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }
                #elxs-nav-list-no-active.fill {
                    padding: 15px 0 0;
                    margin: 15px 0 0;
                    border-top: 1px solid #929292;
                }
                .elxs-nav-list-no-active-title{
                    font-size: 12px;
                    color: #929292;
                    padding: 0 0 10px;
                    text-align: center;
                }

                html.dark-mode .elxs-nav-list-no-active-title{
                    color: #f6f6f6;
                }

                #elxs-nav-list::before {
                    content: "";
                    border-left: 16px solid transparent;
                    border-right: 16px solid transparent;
                    border-bottom: 11px solid #f2f2f2;
                    position: absolute;
                }

                html.dark-mode #elxs-nav-list::before {
                    border-bottom: 11px solid #222;
                }

                #elxs-nav-container.elxs-bottom-center #elxs-nav-list::before {
                    top: -5px;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }

                #elxs-nav-container.elxs-bottom-left #elxs-nav-list::before {
                    top: -5px;
                    left: 40px;
                    transform: translate(0,-50%);
                }

                #elxs-nav-container.elxs-top-center #elxs-nav-list::before {
                    bottom: -5px;
                    left: 50%;
                    transform: translate(-50%,50%) rotate(180deg);
                }

                #elxs-nav-container.elxs-top-left #elxs-nav-list::before {
                    bottom: -5px;
                    left: 40px;
                    transform: translate(0,50%) rotate(180deg);
                }

                #elxs-nav-list a {
                    display: block;
                    width: 50%;
                    text-align: center;
                    font-size: 12px;
                    font-family: 'Roboto';
                    font-weight: 300;
                    color: #929292;
                    transition: .15s ease-in-out;
                    text-decoration: none;
                    padding: 3px 0;
                }
                html.dark-mode #elxs-nav-list a {
                    color: #f6f6f6;
                }

                #elxs-nav-list-no-active-inner a,
                #elxs-nav-list-active a{
                    padding-bottom: 20px;
                }
                #elxs-nav-list-no-active-inner a:nth-last-child(2),
                #elxs-nav-list-active a:nth-last-child(2){
                    padding-bottom: 0;
                }
                #elxs-nav-list-no-active-inner a:last-child,
                #elxs-nav-list-active a:last-child{
                    padding-bottom: 0;
                }
                #elxs-nav-list-no-active{
                    max-height: 230px;
                    overflow: auto;
                }

                #elxs-nav-list a:hover { color: #000; text-decoration: none; }
                html.dark-mode #elxs-nav-list a:hover { color: #f6f6f6; text-decoration: none; }
                #elxs-nav-list p { margin: 3% 0 0; }
                #elxs-nav-list img { width: 46px !important; margin: 0 auto;  margin-bottom: 4px;}
            `;
    document.head.appendChild(styles);
  },
  loadConfig() {
    const url = "/.eenv.properties.json";
    return fetch(url).then((resp) => resp.json()).then((data) => data).catch((error3) => {
      return {
        "ENABLE_BOOKSTACK": true,
        "ENABLE_ROCKETCHAT": false,
        "ENABLE_NEXTCLOUD": false,
        "ENABLE_OCRMYPDF": false
      };
    });
  },
  run() {
    return this.loadConfig().then((configObject) => {
      this.renderStyles();
      this.logoSelectors.forEach((selector) => {
        const el = document.querySelector(selector);
        if (el && !this.initialized) {
          const navigationContainer = this.buildNavigation(configObject);
          const handleResize = () => {
            navigationContainer.classList = "";
            let bottom = window.innerHeight - el.clientHeight;
            bottom = bottom - el.offsetTop;
            const { offsetLeft } = cumulativeOffset(el);
            if (bottom < 200 && offsetLeft < 200) {
              navigationContainer.classList.add("elxs-top-left");
            } else if (bottom < 200) {
              navigationContainer.classList.add("elxs-top-center");
            } else if (offsetLeft < 200) {
              navigationContainer.classList.add("elxs-bottom-left");
            } else {
              navigationContainer.classList.add("elxs-bottom-center");
            }
          };
          handleResize();
          window.onresize = handleResize;
          el.style.position = "relative";
          el.appendChild(navigationContainer);
          this.initialized = true;
          const handleOpen = (e) => {
            if (!navigationContainer.classList.contains("elxs-show")) {
              e.preventDefault();
              e.stopImmediatePropagation();
              navigationContainer.classList.add("elxs-show");
            }
          };
          const handleClose = () => {
            navigationContainer.classList.remove("elxs-show");
          };
          const isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
          if (isTouch) {
            el.addEventListener("touchstart", handleOpen);
            document.addEventListener("touchstart", (e) => {
              if (!el.contains(e.target))
                handleClose();
            });
          } else {
            el.addEventListener("mouseover", handleOpen);
            el.addEventListener("mouseout", handleClose);
          }
        }
      });
    }).catch(function(error3) {
    });
  }
};
elxsNavigation.run();

// resources/js/app.js
window.baseUrl = function baseUrl(path) {
  let targetPath = path;
  let basePath = document.querySelector('meta[name="base-url"]').getAttribute("content");
  if (basePath[basePath.length - 1] === "/")
    basePath = basePath.slice(0, basePath.length - 1);
  if (targetPath[0] === "/")
    targetPath = targetPath.slice(1);
  return `${basePath}/${targetPath}`;
};
window.importVersioned = function importVersioned(moduleName) {
  const version2 = document.querySelector('link[href*="/dist/styles.css?version="]').href.split("?version=").pop();
  const importPath = window.baseUrl(`dist/${moduleName}.js?version=${version2}`);
  return import(importPath);
};
window.$http = http_exports;
window.$events = events_exports;
var translator = new translations_default();
window.trans = translator.get.bind(translator);
window.trans_choice = translator.getPlural.bind(translator);
window.trans_plural = translator.parsePlural.bind(translator);
register(components_exports2);
window.$components = components_exports;
init();
/*! Bundled license information:

sortablejs/modular/sortable.esm.js:
  (**!
   * Sortable 1.15.2
   * @author	RubaXa   <trash@rubaxa.org>
   * @author	owenm    <owen23355@gmail.com>
   * @license MIT
   *)
*/
//# sourceMappingURL=app.js.map
