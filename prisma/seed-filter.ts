/**
 * seed-filter.ts
 * Inserta palabras filtradas comunes (España + Latinoamérica) en la BD.
 *
 * Uso:
 *   npx tsx prisma/seed-filter.ts
 *
 * Variables de entorno necesarias: DATABASE_URL, GUILD_ID
 *
 * Solo añade palabras nuevas (skipDuplicates). Seguro de ejecutar varias veces.
 */

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';
import 'dotenv/config';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const GUILD_ID = process.env.GUILD_ID;
const ADDED_BY = 'system-seed';

if (!GUILD_ID) {
  console.error('❌  GUILD_ID no está definido en el entorno.');
  process.exit(1);
}

const guildId = GUILD_ID as string;

// ── Palabras base (sin tildes, minúsculas) ────────────────────────────────────
// La normalización del filtro cubre variantes con tildes, leet speak, separadores
// y caracteres repetidos, por lo que solo se necesita la forma canónica.

const WORDS: string[] = [

  // ════════════════════════════════════════════════════════════════════════════
  // ESPAÑA
  // ════════════════════════════════════════════════════════════════════════════

  // Profanidad básica
  'mierda', 'mierdoso', 'mierdica',
  'puta', 'puto', 'putada', 'puton', 'putero', 'putona', 'reputa',
  'joder', 'jodido', 'jodete',
  'hostia', 'hostias', 'hostiazo',
  'cono',                    // coño
  'cojon', 'cojones', 'cojonudo',
  'follar', 'follarse', 'follazo',
  'cabron', 'cabronazo', 'cabronas',
  'gilipolla', 'gilipollas', 'gilipollez',
  'capullo', 'capullada',
  'imbecil',
  'idiota', 'idiotez',
  'estupido', 'estupidez',
  'gañan',
  'mammarracho',
  'zoquete',
  'lerdo',
  'soplagaitas',
  'mamón', 'mamona', 'mamones',
  'cagarse', 'cagada', 'cagon', 'cagao',
  'maldito', 'maldita',
  'polla', 'pollon', 'pollas',
  'ramera',
  'zorron', 'zorra', 'zorras',
  'putisimo',
  'cojonazos',
  'meacon',
  'bocazas',
  'chivato',
  'lameculos',
  'comepollas',
  'tragasables',
  'capullismo',
  'culo', 'culón', 'culada',
  'hijoputa', 'hijosdeputa',
  'hdp',

  // ════════════════════════════════════════════════════════════════════════════
  // MÉXICO Y CENTROAMÉRICA
  // ════════════════════════════════════════════════════════════════════════════

  'pendejo', 'pendeja', 'pendejada', 'pendejos',
  'chingada', 'chingado', 'chingar', 'chingo', 'chingon',
  'chingaquedito',
  'pinche', 'pinches',
  'culero', 'culera', 'culeros',
  'verga', 'vergon', 'vergazo',
  'ojete',
  'piche',
  'wey', 'guey',             // güey
  'cholo',
  'mamila',
  'puta madre', 'putamadre',
  'vete a chingar',
  'cabron',                  // ya en España, también MX
  'naco', 'naca',
  'culillo',
  'cachondo',
  'menso', 'mensa',
  'tarugo',
  'joto', 'jota',            // slur homofóbico MX
  'maricona',
  'buey',
  'chinguen',
  'metiche',
  'mamey',
  'cagon',
  'putero',
  'mamon',
  'culaso',
  'chingadera',
  'pedazo de mierda',
  'chupapija',
  'lacra',

  // ════════════════════════════════════════════════════════════════════════════
  // ARGENTINA Y URUGUAY
  // ════════════════════════════════════════════════════════════════════════════

  'boludo', 'boluda', 'boludez', 'boludos',
  'pelotudo', 'pelotuda', 'pelotudez',
  'tarado', 'tarada',
  'mogolico',                // mongólico — slur de discapacidad
  'cagon', 'cagones',
  'culo roto',
  'hdlp',                    // hijo de la puta
  'hdtp',
  'ptm',                     // puta tu madre
  'stm',                     // su tu madre
  'ctm',                     // con tu madre
  'manga de idiotas',
  'pedazo',
  'pajero', 'pajera',
  'fiolo',
  'ortiva',
  'trolo', 'trola',          // slur trans/gay AR
  'puto',
  'turro', 'turra',
  'gil', 'giles',
  'forro', 'forra',
  'cabeza de pija',
  'hdp',

  // ════════════════════════════════════════════════════════════════════════════
  // CHILE
  // ════════════════════════════════════════════════════════════════════════════

  'culiao', 'culiada', 'culiados',
  'weon', 'weon', 'aweon', 'hueon',
  'conchetumadre', 'ctm', 'conchasumadre',
  'reconchuda',
  'weona',
  'chucha', 'chuchadesumadre',
  'maraco',                  // slur homofóbico CL
  'puta la wea',
  'qliao',                   // culiado abreviado
  'saopotear',
  'penca',
  'csm',                     // conchasumadre
  'lacra',
  'maricón',
  'aweonao',
  'hdlp',

  // ════════════════════════════════════════════════════════════════════════════
  // COLOMBIA Y VENEZUELA
  // ════════════════════════════════════════════════════════════════════════════

  'gonorrea',
  'malparido', 'malparida',
  'hijueputa', 'hijuepuerca',
  'mamerto', 'mamerta',
  'mamera',
  'hp',                      // hijueputa
  'bobo', 'boba',
  'sapo', 'sapa',
  'guevon', 'guevona',       // venezolano
  'coño',                    // venezolano exclamación/insulto
  'paridero',
  'chuchamadre',
  'nojoda',
  'nojodas',
  'tierruo',
  'tierrua',
  'pelabola',
  'pajuo',
  'arrechera',
  'arrecho', 'arrecha',
  'comeflor',
  'lambucio',
  'lambucio',
  'montañero',               // despectivo Venezuela
  'cafetero',                // despectivo Colombia
  'marico',                  // slur homofóbico VE/CO
  'marica',
  'pendejo',
  'cagao',
  'hijueputa',
  'hijuepuerca',

  // ════════════════════════════════════════════════════════════════════════════
  // PERÚ, ECUADOR, BOLIVIA
  // ════════════════════════════════════════════════════════════════════════════

  'conchadesumadre',
  'conchesumadre',
  'huevon', 'awevo', 'huevona',
  'puta madre',
  'serrano',                 // usado racistamente en PE/EC
  'cholo',                   // racista en ciertos contextos PE
  'concha tu madre',
  'cojudo', 'cojuda',        // PE — tonto
  'mostro',                  // PE argot ofensivo
  'chibolo',                 // menor en contexto ofensivo
  'shunsho',                 // EC — tonto
  'longo',                   // EC — racista
  'fiambre',                 // BO — insulto

  // ════════════════════════════════════════════════════════════════════════════
  // CUBA, PUERTO RICO, REPÚBLICA DOMINICANA
  // ════════════════════════════════════════════════════════════════════════════

  'comemierda',              // CU — insulto universal Caribe
  'comemierdas',
  'singao', 'singada',       // CU/PR — de "singar" (follar)
  'singao',
  'bicho',                   // PR — pene / insulto
  'mamaguevo',               // DO/VE — fellatio como insulto
  'cabron',
  'puñeta',                  // PR — exclamación ofensiva
  'hostia',
  'coño',
  'prieto',                  // racista Caribe
  'mojon',                   // excremento / insulto
  'dembow',                  // usado despectivamente
  'yola',                    // PR — ignorante
  'pendejo',
  'jangao',                  // DO — vago/inútil

  // ════════════════════════════════════════════════════════════════════════════
  // SLURS — HOMOFÓBICOS / TRANSFÓBICOS
  // ════════════════════════════════════════════════════════════════════════════

  'maricon', 'maricón', 'maricones',
  'marica', 'maricas',
  'joto', 'jota',
  'sarasa',
  'travelo', 'travesti',     // usado ofensivamente
  'trolo',
  'maraco',
  'culero',                  // también homofóbico MX
  'puto',
  'manflora',                // VE
  'maricón de mierda',
  'invertido',
  'raro',                    // en contexto homofóbico

  // ════════════════════════════════════════════════════════════════════════════
  // SLURS — RACISTAS / XENÓFOBOS
  // ════════════════════════════════════════════════════════════════════════════

  'sudaca',
  'mono',                    // racista ES/futbol
  'negrata',
  'moro',                    // ES xenófobo
  'sudaca',
  'zambo',                   // racista Latam
  'cholo',                   // racista PE/BO
  'indio',                   // racista según contexto
  'serrano',
  'longui', 'longo',
  'prieto',
  'niche',                   // CO racista
  'motilón',                 // CO racista
  'paragua',                 // AR xenófobo (paraguayo)
  'bolita',                  // AR xenófobo (boliviano)
  'peruca',                  // AR xenófobo (peruano)

  // ════════════════════════════════════════════════════════════════════════════
  // SLURS — DISCAPACIDAD / NEURODIVERSIDAD
  // ════════════════════════════════════════════════════════════════════════════

  'mongolo', 'mongolito',
  'retrasado', 'retrasada',
  'subnormal',
  'lisiado', 'lisiada',
  'tullido',
  'deficiente',
  'anormal',
  'imbecil',
  'idiota',
  'Down',                    // usado ofensivamente

  // ════════════════════════════════════════════════════════════════════════════
  // INSULTOS SEXUALES GENÉRICOS
  // ════════════════════════════════════════════════════════════════════════════

  'zorra', 'zorron', 'zorras',
  'perra', 'perro',          // usado como insulto sexual
  'ramera',
  'furcia',
  'buscona',
  'golfa',
  'puta callejera',
  'chupapolla', 'chupapollas',
  'chupapija',
  'mamaguevo',
  'tragatodo',
  'guarra', 'guarro',
  'cerdo', 'cerda',          // en contexto sexual ofensivo
  'sexoservidor',
  'prostituta',              // usado como insulto

  // ════════════════════════════════════════════════════════════════════════════
  // GAMING — TOXICIDAD ESPECÍFICA EN ESPAÑOL
  // ════════════════════════════════════════════════════════════════════════════

  'noob', 'nub',             // no ofensivo por sí solo pero frecuente en insultos
  'hdp',
  'ptm',
  'ctm',
  'hp',
  'stm',
  'qtm',
  'vtm',                     // vete a la mierda (madre)
  'cagateygañate',
  'muertetelo',
  'peligro publico',
  'cabeza de chorlito',
  'cenutrio',
  'ceporro',
  'papanatas',
  'mequetrefe',
  'majadero',
  'soplagaitas',
  'mindundi',
  'pazguato',
  'zopenco',
  'comebasura',
  'pedazodemierdas',
  'sinverguenza',
  'vivales',
  'chupasangre',
  'chupasangres',

  // ════════════════════════════════════════════════════════════════════════════
  // AMENAZAS / INCITACIÓN DIRECTA
  // ════════════════════════════════════════════════════════════════════════════

  'matarete',
  'muerete',
  'ojala te mueras',
  'que te den',
  'que te jodan',
  'vete a la mierda',
  'vete al carajo',
  'vete a tomar',
  'melapela',
  'mecago',
  'mecagoen',
  'mecagoendiez',
  'mecagoentodo',
  'tevoyamatar',
  'tevoyapartir',
  'tevoyareventar',
  'tevoyaromper',
  'terompolacara',
  'tepartolohuevos',
  'basura humana',
  'escoria de la sociedad',
  'eres una basura',
  'rata de alcantarilla',

  // ════════════════════════════════════════════════════════════════════════════
  // ESPAÑA — VARIANTES ADICIONALES
  // ════════════════════════════════════════════════════════════════════════════

  'putero', 'putera', 'puterío',
  'cabrona', 'cabronada', 'cabronazo',
  'joderse', 'jodimiento', 'jodida',
  'cojonudo', 'acojonante',
  'pajillero', 'pajillera',
  'meapiscinas',
  'chivata', 'chivatazo',
  'pringado', 'pringada', 'pringao',
  'pelagatos',
  'inútil',
  'alcornoque',
  'burro', 'burra', 'burrada',
  'bestia',
  'asno',
  'paleto', 'paleta', 'paletada',
  'cateto', 'cateta',
  'hortera',
  'memo', 'mema',
  'lelo', 'lela',
  'panoli',
  'gaznápiro',
  'besugo',
  'zote',
  'borrico',
  'cenutrio',
  'ceporro',
  'gamberro', 'gamberra',
  'escoria',
  'chusma',
  'indeseable',
  'miserable',
  'patán',
  'rufián',
  'sabandija',
  'tunante',
  'zángano',
  'guiñapo',
  'nefasto',
  'malnacido', 'malnacida',
  'guarrindongo', 'guarrindonga',
  'tontolaba', 'tontorrón',
  'tonto del culo',
  'tontopijo',
  'mequetrefe',
  'pazguato',
  'simplón',
  'mindundi',
  'don nadie',
  'fantasma',
  'repugnante',
  'asqueroso', 'asquerosa',
  'cretino', 'cretina',
  'villano',
  'facha',                   // fascista como insulto
  'fascista',
  'cacique',
  'vivales',
  'aprovechado', 'aprovechada',
  'sinvergüenza', 'sinverguenza',
  'fresco', 'fresca',        // en contexto de insulto
  'caradura',

  // ════════════════════════════════════════════════════════════════════════════
  // MÉXICO Y CENTROAMÉRICA — VARIANTES ADICIONALES
  // ════════════════════════════════════════════════════════════════════════════

  'madrazo', 'madrazos',
  'chingados',
  'chinga tu madre',
  'chingada madre',
  'vete a la verga',
  'poca madre',
  'madre',                   // "partir a madres"
  'putiza',
  'piruja', 'pirujada',
  'cabrona',
  'mayate',                  // slur homofóbico MX
  'chichifo',
  'zorrón', 'zorrona',
  'mocoso', 'mocosa',
  'baboso', 'babosa',
  'lagartijo', 'lagartija',
  'puto de mierda',
  'vato loco',
  'mamila',
  'lambe',                   // lambe-botas, servil
  'jodido',
  'culada',
  'cagado',
  'meado',
  'putísimo', 'putísima',
  'vergón de mierda',
  'chupetón',
  'moco',
  'escuincle',               // despectivo para niños MX
  'peladillo',

  // ════════════════════════════════════════════════════════════════════════════
  // ARGENTINA Y URUGUAY — VARIANTES ADICIONALES
  // ════════════════════════════════════════════════════════════════════════════

  'sorete', 'soretazo',
  'garcha', 'garchar', 'garchada',
  'garca',                   // traidor AR
  'nabo', 'naba',
  'otario', 'otaria',
  'conchuda',
  'la concha de tu madre',
  'puta madre que lo pario',
  'mariposón',
  'chupaculos',
  'chupamelapija',
  'botón',                   // delator AR
  'gil de mierda',
  'pelotudo de mierda',
  'villero', 'villera',      // despectivo AR
  'chorro', 'chorra',        // ladrón AR
  'sorete de mierda',
  'hdlm',                    // hijo de la madre
  're pelotudo',
  'manga de boludos',
  'anormal de mierda',
  'pelopincha',
  'pajero de mierda',

  // ════════════════════════════════════════════════════════════════════════════
  // CHILE — VARIANTES ADICIONALES
  // ════════════════════════════════════════════════════════════════════════════

  'conchetumare',
  'weona',
  'chucha de tu madre',
  'chucheta',
  'chupahuevo',
  'fleto',                   // slur gay CL
  'saowea',
  'lacra culiao',
  'mierda culiao',
  'puta wea',
  'ql',                      // culiado abreviado CL
  'csm',                     // conchasumadre
  'andate a la chucha',
  'huevon de mierda',
  'culiao de mierda',
  'weon culiao',

  // ════════════════════════════════════════════════════════════════════════════
  // COLOMBIA — VARIANTES ADICIONALES
  // ════════════════════════════════════════════════════════════════════════════

  'pirobo', 'piroba',        // insulto fuerte CO
  'carechimba',              // CO — horrible/feo
  'careculo',
  'caremorrao',
  'guache',                  // CO — vulgar
  'monda', 'mondao',         // CO — pene/insulto
  'ñero', 'ñera',            // CO — delincuente
  'vividillo',
  'mamaguevo',               // también CO/VE
  'bocaebagre',              // CO — feo
  'caretorta',
  'lambucio', 'lambucia',
  'hijueputa vida',
  'no joda',
  'malpario',                // variante de malparido
  'patarrabia',
  'tierruo', 'tierrua',
  'pelabola', 'pelabolas',
  'pensantivo',              // sarcástico CO
  'mamarracho',

  // ════════════════════════════════════════════════════════════════════════════
  // VENEZUELA — VARIANTES ADICIONALES
  // ════════════════════════════════════════════════════════════════════════════

  'pajuazo',
  'bagueto',                 // VE — mal vestido
  'caraembicho',
  'caraejoda',
  'careverga',
  'mamabicho',
  'jodedor', 'jodedora',
  'enchufado',               // VE — político corrupto
  'carechimba',
  'guevonada',
  'guevonear',
  'nojoda',
  'apendejado',
  'apendejarse',
  'vaina de mierda',

  // ════════════════════════════════════════════════════════════════════════════
  // PERÚ — VARIANTES ADICIONALES
  // ════════════════════════════════════════════════════════════════════════════

  'cojudez',
  'cojudo de mierda',
  'huachafo', 'huachafa',    // PE — ridículo/cursi
  'rochos',                  // PE — sucio
  'mostro',                  // PE — peyorativo
  'aweonao',
  'pendejada',
  'malcriado', 'malcriada',
  'fresco de mierda',

  // ════════════════════════════════════════════════════════════════════════════
  // CUBA — VARIANTES ADICIONALES
  // ════════════════════════════════════════════════════════════════════════════

  'pinga',                   // CU — pene/insulto
  'pingahazo',
  'cabeza de pinga',
  'comemierda de playa',
  'singa', 'singao', 'singada',
  'bicho malo',
  'papanata',
  'coño e tu madre',
  'coñazo',

  // ════════════════════════════════════════════════════════════════════════════
  // PUERTO RICO — VARIANTES ADICIONALES
  // ════════════════════════════════════════════════════════════════════════════

  'puñetero', 'puñetera',
  'al carajo',
  'carajo',
  'pal carajo',
  'bicho e',
  'maldito sea',
  'puñeta',
  'jíbaro',                  // usado despectivamente PR

  // ════════════════════════════════════════════════════════════════════════════
  // REPÚBLICA DOMINICANA — VARIANTES ADICIONALES
  // ════════════════════════════════════════════════════════════════════════════

  'jodío', 'jodia',
  'manganzón', 'manganzóna',
  'cabrón del carajo',
  'sucio de mierda',
  'puta vida',
  'maldita sea',
  'haitiano',                // xenófobo DO — revisar
  'muerto de hambre',        // DO/genérico

  // ════════════════════════════════════════════════════════════════════════════
  // SLURS HOMOFÓBICOS / TRANSFÓBICOS — VARIANTES ADICIONALES
  // ════════════════════════════════════════════════════════════════════════════

  'bujarrón',
  'sodomita',
  'invertido', 'invertida',
  'mariconsote',
  'amujerado',
  'afeminado',               // como insulto
  'raro de mierda',
  'bicha',                   // VE slur trans
  'pajaro',                  // slur gay PR/DO/CU
  'mariconzón',
  'putonazo',
  'fleto de mierda',
  'joto de mierda',
  'maraco de mierda',
  'manflor',                 // VE

  // ════════════════════════════════════════════════════════════════════════════
  // SLURS RACISTAS / XENÓFOBOS — VARIANTES ADICIONALES
  // ════════════════════════════════════════════════════════════════════════════

  'negrata',
  'negrata de mierda',
  'negrito de mierda',
  'moro de mierda',
  'gabacho', 'gabacha',      // ES — francés despectivo
  'franchute',
  'gringo de mierda',
  'sudaca de mierda',
  'bolita',                  // AR — boliviano despectivo
  'peruca',                  // AR — peruano despectivo
  'paragua',                 // AR — paraguayo despectivo
  'zambo',                   // racista Latam
  'zamba',
  'niche',                   // CO racista
  'motilón',                 // CO racista
  'longui',
  'longo de mierda',
  'chino de mierda',         // genérico racista
  'japones de mierda',
  'turco de mierda',
  'judio de mierda',
  'piel roja',               // slur indigena
  'prieto de mierda',
  'moreno de mierda',
  'inmigrante de mierda',
  'ilegal de mierda',

  // ════════════════════════════════════════════════════════════════════════════
  // SLURS DISCAPACIDAD — VARIANTES ADICIONALES
  // ════════════════════════════════════════════════════════════════════════════

  'tullido', 'tullida',
  'deficiente',
  'anormal',
  'incapaz de mierda',
  'paralítico',
  'paralítica',
  'lobotomizado',
  'minusválido', 'minusválida',
  'vegetal',                 // como insulto
  'mogólico', 'mogólica',
  'down de mierda',
  'retrasado mental',
  'discapacitado de mierda',

  // ════════════════════════════════════════════════════════════════════════════
  // INSULTOS SEXUALES — VARIANTES ADICIONALES
  // ════════════════════════════════════════════════════════════════════════════

  'pija',                    // AR — pene
  'pijudo', 'pijuda',
  'culorroto', 'culo roto',
  'pajero de mierda',
  'masturbador',
  'pervertido', 'pervertida',
  'degenerado', 'degenerada',
  'depravado', 'depravada',
  'obsceno', 'obscena',
  'libidinoso', 'libidinosa',
  'salido', 'salida',
  'calentorro', 'calentorra',
  'ninfómana',
  'putón verbenero',
  'calientapollas',
  'calienta huevos',
  'puta barata',
  'prostituta de mierda',
  'guarro de mierda',
  'cerda',
  'golfante',
  'viciosa', 'vicioso',
  'mugrienta', 'mugriento',

  // ════════════════════════════════════════════════════════════════════════════
  // BODY SHAMING / APARIENCIA
  // ════════════════════════════════════════════════════════════════════════════

  'gordo de mierda',
  'gordo asqueroso',
  'gorda asquerosa',
  'feo de mierda',
  'fea de mierda',
  'asco de persona',
  'deforme',
  'monstruo',
  'esperpento',
  'adefesio',
  'espantajo',
  'engendro',
  'engendro de mierda',

  // ════════════════════════════════════════════════════════════════════════════
  // GAMING TÓXICO EN ESPAÑOL — VARIANTES ADICIONALES
  // ════════════════════════════════════════════════════════════════════════════

  'noob de mierda',
  'noob asqueroso',
  'desinstala el juego',
  'desinstalate',
  'eres una mierda jugando',
  'peor jugador',
  'inútil del juego',
  'tramposo', 'tramposa',
  'cheatero', 'cheatera',
  'hacker de pacotilla',
  'boosted de mierda',
  'cuenta comprada',
  'smurfeando',
  'feeder de mierda',
  'inter de mierda',
  'reportado',
  'baneado para siempre',
  'plata de mierda',
  'bronce de mierda',
  'hardstuck de mierda',
  'bot inútil',
  'eres un bot',
  'juega con los pies',
  'vete a jugar a otra cosa',
  'gg noob',
  'ez noob',
  'llora mas',
  'llora noob',
  'eres una caña',
  'juega como el culo',
  'eres una vergüenza',
  'deberías retirarte',
  'nunca mejoraras',

];

// Deduplica por si hay repeticiones en la lista
const unique = [...new Set(WORDS.map(w => w.toLowerCase().trim()))].filter(Boolean);

async function main() {
  console.log(`🌱  Seeding ${unique.length} palabras filtradas para guild ${GUILD_ID}…`);

  const result = await prisma.filterWord.createMany({
    data: unique.map(word => ({
      guildId,
      word,
      addedById: ADDED_BY,
    })),
    skipDuplicates: true,
  });

  console.log(`✅  ${result.count} palabras insertadas (duplicados omitidos).`);

  const total = await prisma.filterWord.count({ where: { guildId } });
  console.log(`📊  Total de palabras en el filtro del servidor: ${total}`);
}

main()
  .catch(err => { console.error('❌  Error:', err); process.exit(1); })
  .finally(() => prisma.$disconnect());
