/****************************** 
 * Sentires_Psychopy_Fin *
 ******************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'SentirES_psychopy_fin';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(BCBLRoutineBegin());
flowScheduler.add(BCBLRoutineEachFrame());
flowScheduler.add(BCBLRoutineEnd());
flowScheduler.add(consent_1RoutineBegin());
flowScheduler.add(consent_1RoutineEachFrame());
flowScheduler.add(consent_1RoutineEnd());
flowScheduler.add(concent_2RoutineBegin());
flowScheduler.add(concent_2RoutineEachFrame());
flowScheduler.add(concent_2RoutineEnd());
flowScheduler.add(consent_3RoutineBegin());
flowScheduler.add(consent_3RoutineEachFrame());
flowScheduler.add(consent_3RoutineEnd());
flowScheduler.add(aut_personaldataRoutineBegin());
flowScheduler.add(aut_personaldataRoutineEachFrame());
flowScheduler.add(aut_personaldataRoutineEnd());
flowScheduler.add(fine_printRoutineBegin());
flowScheduler.add(fine_printRoutineEachFrame());
flowScheduler.add(fine_printRoutineEnd());
flowScheduler.add(breif_descriptionRoutineBegin());
flowScheduler.add(breif_descriptionRoutineEachFrame());
flowScheduler.add(breif_descriptionRoutineEnd());
flowScheduler.add(experimentoRoutineBegin());
flowScheduler.add(experimentoRoutineEachFrame());
flowScheduler.add(experimentoRoutineEnd());
flowScheduler.add(instructions2PANRoutineBegin());
flowScheduler.add(instructions2PANRoutineEachFrame());
flowScheduler.add(instructions2PANRoutineEnd());
const SentirES2PAN19LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(SentirES2PAN19LoopBegin(SentirES2PAN19LoopScheduler));
flowScheduler.add(SentirES2PAN19LoopScheduler);
flowScheduler.add(SentirES2PAN19LoopEnd);


flowScheduler.add(catch2PAN1RoutineBegin());
flowScheduler.add(catch2PAN1RoutineEachFrame());
flowScheduler.add(catch2PAN1RoutineEnd());
const SentirES2SPAN45LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(SentirES2SPAN45LoopBegin(SentirES2SPAN45LoopScheduler));
flowScheduler.add(SentirES2SPAN45LoopScheduler);
flowScheduler.add(SentirES2SPAN45LoopEnd);


flowScheduler.add(catch2SPAN2RoutineBegin());
flowScheduler.add(catch2SPAN2RoutineEachFrame());
flowScheduler.add(catch2SPAN2RoutineEnd());
flowScheduler.add(break2PANRoutineBegin());
flowScheduler.add(break2PANRoutineEachFrame());
flowScheduler.add(break2PANRoutineEnd());
const SentirES2SPAN78LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(SentirES2SPAN78LoopBegin(SentirES2SPAN78LoopScheduler));
flowScheduler.add(SentirES2SPAN78LoopScheduler);
flowScheduler.add(SentirES2SPAN78LoopEnd);


flowScheduler.add(catch2PAN3RoutineBegin());
flowScheduler.add(catch2PAN3RoutineEachFrame());
flowScheduler.add(catch2PAN3RoutineEnd());
const SentirES2SPAN80LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(SentirES2SPAN80LoopBegin(SentirES2SPAN80LoopScheduler));
flowScheduler.add(SentirES2SPAN80LoopScheduler);
flowScheduler.add(SentirES2SPAN80LoopEnd);


flowScheduler.add(debriefing_2RoutineBegin());
flowScheduler.add(debriefing_2RoutineEachFrame());
flowScheduler.add(debriefing_2RoutineEnd());
flowScheduler.add(finRoutineBegin());
flowScheduler.add(finRoutineEachFrame());
flowScheduler.add(finRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'stimSPAN/Stimuli2PAN19.csv', 'path': 'stimSPAN/Stimuli2PAN19.csv'},
    {'name': 'stimSPAN/Stimuli2PAN45.csv', 'path': 'stimSPAN/Stimuli2PAN45.csv'},
    {'name': 'stimSPAN/Stimuli2PAN78.csv', 'path': 'stimSPAN/Stimuli2PAN78.csv'},
    {'name': 'stimSPAN/Stimuli2PAN80.csv', 'path': 'stimSPAN/Stimuli2PAN80.csv'},
    {'name': 'bcbl.jpg', 'path': 'bcbl.jpg'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.com/submissions/complete?cc=C3F7D6M3', '');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var BCBLClock;
var presentation;
var Acpeto;
var bcbl;
var consent_1Clock;
var personaldata;
var personaldata_2;
var personaldata_3;
var personaldata_4;
var yesno;
var yesno_2;
var yesno_3;
var yesno_4;
var Continuar;
var concent_2Clock;
var personaldata_5;
var personaldata_6;
var personaldata_7;
var personaldata_8;
var yesno_5;
var continuar_2;
var consent_3Clock;
var perdonaldata_9;
var personaldata_10;
var personaldata_11;
var personaldata_12;
var continuar_3;
var aut_personaldataClock;
var infomored;
var informed_2;
var Iaccept;
var idonotaccept;
var fine_printClock;
var fine_print_consent;
var Iaccept_2;
var idontaccept_2;
var breif_descriptionClock;
var text;
var continuar_4;
var experimentoClock;
var text_2;
var text_3;
var continuar_5;
var instructions2PANClock;
var instructions2PANtext;
var next2PANinstr;
var SentirES_psychopyClock;
var pregunta;
var stimuli;
var audition;
var taste;
var haptic;
var olfaction;
var vision;
var interoception;
var auditionslider;
var tasteslider;
var hapticslider;
var olfactionslider;
var visionslider;
var interoceptionsslider;
var next2PANstim;
var nose2PAN;
var catch2PAN1Clock;
var catch2PANanimal;
var Oso;
var Pez;
var Ave;
var catch2SPAN2Clock;
var catch2PANmates;
var quinze;
var setentaydos;
var cien;
var break2PANClock;
var SentirESbreak;
var next2PANbreak;
var catch2PAN3Clock;
var catch2PANfruta;
var bocadillo;
var coliflor;
var manzana;
var debriefing_2Clock;
var debriefing_3;
var contact;
var next;
var finClock;
var fin_y;
var fin2PAN;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "BCBL"
  BCBLClock = new util.Clock();
  presentation = new visual.TextStim({
    win: psychoJS.window,
    name: 'presentation',
    text: 'Gracias por participar en SENTIRES de BCBL. \n\nBasque Center on Cognition, Brain and Language es un centro internacional de investigación interdisciplinar para el estudio de la cognición, el cerebro y el lenguaje. Visita nuestra página web (www.bcbl.eu) y síguenos en redes sociales como Facebook (@bcbl.eu), Instagram (bcbl_basque_center), Twitter (@bcbl_) y YouTube (BCBL) para conocer todas las novedades de nuestro centro así como del campo de la neurociencia cognitiva.\n\n',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  Acpeto = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Acpeto',
    text: 'Acepto',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.55, (- 0.4)],
    letterHeight: 0.03,
    size: [0.2, 0.2],
    ori: 0.0
    ,
    depth: -1
  });
  Acpeto.clock = new util.Clock();
  
  bcbl = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bcbl', units : undefined, 
    image : 'bcbl.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.4, 0.4], 
    draggable: false,
    size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "consent_1"
  consent_1Clock = new util.Clock();
  personaldata = new visual.TextStim({
    win: psychoJS.window,
    name: 'personaldata',
    text: 'Si el participante consiente participar en este estudio, recibirá la compensación por parte de Prolific.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.4], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  personaldata_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'personaldata_2',
    text: 'El participante debe seguir las normas y reglamentos de Prolific, y, una vez que el investigador haya aprobado tu respuestas, se abonará la cantidad indicada en el anuncio. Es necesario que el participante siga las instrucciones y responda dentro del tiempo específico permitido para completar el experimento.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.2], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  personaldata_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'personaldata_3',
    text: 'Este experimento consta de una sesión que durará aproximadamente 40 minutos. El tiempo que el/la participante invierta en este experimento dependerá del número de sesiones, los descansos y la velocidad a la que se complete la tarea.',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.1)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  personaldata_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'personaldata_4',
    text: 'La participación es totalmente voluntaria. Puedes detenerte en cualquier momento cerrando la ventana del navegador. No completar el estudio no impedirá que el/la participante pueda participar en futuros estudios que ofrezcamos pero no se compensará por la participación en este experimento.',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.3)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -3.0 
  });
  
  yesno = new visual.Slider({
    win: psychoJS.window, name: 'yesno',
    startValue: undefined,
    size: [0.1, 0.03], pos: [(- 0.7), 0.4], ori: 0.0, units: 'height',
    labels: ["Acepto", "No Acepto"], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  yesno_2 = new visual.Slider({
    win: psychoJS.window, name: 'yesno_2',
    startValue: undefined,
    size: [0.1, 0.03], pos: [(- 0.7), 0.2], ori: 0.0, units: 'height',
    labels: ["Acepto", "No Acepto"], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  yesno_3 = new visual.Slider({
    win: psychoJS.window, name: 'yesno_3',
    startValue: undefined,
    size: [0.1, 0.03], pos: [(- 0.7), (- 0.1)], ori: 0.0, units: 'height',
    labels: ["Acepto", "No Acepto"], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  yesno_4 = new visual.Slider({
    win: psychoJS.window, name: 'yesno_4',
    startValue: undefined,
    size: [0.1, 0.03], pos: [(- 0.7), (- 0.3)], ori: 0.0, units: 'height',
    labels: ["Acepto", "No Acepto"], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -7, 
    flip: false,
  });
  
  Continuar = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Continuar',
    text: 'Acepto',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.55, (- 0.4)],
    letterHeight: 0.03,
    size: [0.2, 0.2],
    ori: 0.0
    ,
    depth: -8
  });
  Continuar.clock = new util.Clock();
  
  // Initialize components for Routine "concent_2"
  concent_2Clock = new util.Clock();
  personaldata_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'personaldata_5',
    text: 'Este estudio de investigación pertenece al centro Basque Center on Cognition, Brain and Language (www.bcbl.eu) y ha sido aprobado por el comité ético del centro. Al hacer clic en “Acepto”, el/la participante consiente la información anterior y acepta participar en el estudio.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.35], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  personaldata_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'personaldata_6',
    text: 'El participante autoriza a BCBL a gestionar los datos obtenidos durante su participación en este estudio para su utilización en artículos científicos y congresos, basados en este estudio o publicaciones externas derivadas de él, así como para su diseminación en repositorios científicos públicos, siempre de forma totalmente anónima, para garantizar su reproducibilidad. En los siguientes puntos se informa sobre los repositorios de acceso público:',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.1], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  personaldata_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'personaldata_7',
    text: 'Se mantendrá la parte privada de los datos del/de la participante (nombre, información de contacto, etc.) en un lugar seguro.',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.1)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  personaldata_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'personaldata_8',
    text: 'Los datos que se compartan no contendrán el nombre del participante y estarán anonimizados mediante un código, y no se compartirá ninguna otra información que el centro crea que pudiera identificar al participante.',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.3)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -3.0 
  });
  
  yesno_5 = new visual.Slider({
    win: psychoJS.window, name: 'yesno_5',
    startValue: undefined,
    size: [0.1, 0.03], pos: [(- 0.7), 0.4], ori: 0.0, units: 'height',
    labels: ["Acepto", "No Acepto"], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  continuar_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'continuar_2',
    text: 'Acepto',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.55, (- 0.4)],
    letterHeight: 0.03,
    size: [0.2, 0.2],
    ori: 0.0
    ,
    depth: -5
  });
  continuar_2.clock = new util.Clock();
  
  // Initialize components for Routine "consent_3"
  consent_3Clock = new util.Clock();
  perdonaldata_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'perdonaldata_9',
    text: 'Los datos y las muestras de este estudio podrían utilizarse para otros futuros proyectos de investigación y ser compartidos con otros investigadores de otras instituciones internacionales, además del estudio en que se esté participando actualmente. Esos futuros proyectos podrían estar enfocados a cualquier otra temática no relacionada con los objetivos de este estudio.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.4], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  personaldata_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'personaldata_10',
    text: 'Se podrá dar acceso a los datos que se recogen en este estudio, incluidas las imágenes y las grabaciones de voz, a través de bases de datos de dominio público.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.1], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  personaldata_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'personaldata_11',
    text: 'Cualquier dato o resultados de investigación que ya hayan sido compartidos con otros investigadores o el dominio público no podrán ser destruidos o retirados.',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.1)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  personaldata_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'personaldata_12',
    text: 'Asimismo, el riesgo de que se produzca una violación de seguridad (ataque cibernético) que pudiera hacer que alguien asociase al participante con sus datos es muy bajo, ya que los datos están guardados en una base de datos segura, y la información está guardada por separado, relacionados mediante un solo código.',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.3)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -3.0 
  });
  
  continuar_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'continuar_3',
    text: 'Acepto',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.55, (- 0.4)],
    letterHeight: 0.03,
    size: [0.2, 0.2],
    ori: 0.0
    ,
    depth: -4
  });
  continuar_3.clock = new util.Clock();
  
  // Initialize components for Routine "aut_personaldata"
  aut_personaldataClock = new util.Clock();
  infomored = new visual.TextStim({
    win: psychoJS.window,
    name: 'infomored',
    text: 'Ante cualquier pregunta, por favor contacta con la coordinadora del estudio, Dra. Clara Martin y Dr. Cesar Caballero-Gaudes, en la dirección de email c.martin@bcbl.eu, c.caballero@bcbl.eu\n\nGracias por participar en este estudio.\n',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.4], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  informed_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'informed_2',
    text: 'Tras la lectura de lo anterior, DECLARO que he sido convenientemente informado/a mediante de los detalles del estudio en el que voy a participar voluntariamente, entiendo tanto su propósito y lo que implica como la/s técnica/s que se van a utilizar durante el estudio y he tenido la posibilidad de resolver cualquier duda concerniente al estudio.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  Iaccept = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Iaccept',
    text: 'Acepto',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.2), (- 0.4)],
    letterHeight: 0.03,
    size: [0.2, 0.2],
    ori: 0.0
    ,
    depth: -2
  });
  Iaccept.clock = new util.Clock();
  
  idonotaccept = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'idonotaccept',
    text: 'No Acepto',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.4, (- 0.4)],
    letterHeight: 0.03,
    size: [0.2, 0.2],
    ori: 0.0
    ,
    depth: -3
  });
  idonotaccept.clock = new util.Clock();
  
  // Initialize components for Routine "fine_print"
  fine_printClock = new util.Clock();
  fine_print_consent = new visual.TextStim({
    win: psychoJS.window,
    name: 'fine_print_consent',
    text: 'Tus datos de carácter personal, o de la persona a la que representas, serán tratados y se incorporarán a ficheros de los que es responsable el BCBL y que tienen como finalidad la gestión y la administración del centro, la realización de estudios sobre la cognición, el cerebro y el lenguaje y el envío de comunicaciones relacionadas con estos fines por cualquier medio. La legitimación para el tratamiento es el consentimiento de la persona interesada. Estos datos, que se conservarán de forma indefinida, solo podrán ser cedidos, anonimizados, a instituciones o personas dedicadas a fines análogos, salvo las cesiones legalmente establecidas.\n\nPodras ejercitar los derechos de acceso, rectificación, supresión, portabilidad, limitación de tratamiento, revocar el consentimiento o no ser objeto de decisiones basadas únicamente en el tratamiento automatizado de sus datos, de conformidad al Reglamento (UE) 2016/679 y a la ley Orgánica 3/2018 de 5 de diciembre de protección de datos personales y garantía de los derechos digitales dirigiendo un correo electrónico a info@bcbl.eu o bien mediante escrito dirigido al Delegado de Protección de Datos a la dirección Paseo Mikeletegi, 69 – 2o - 20009 SAN SEBASTIÁN, acompañando fotocopia de su DNI.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Iaccept_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Iaccept_2',
    text: 'Acepto',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.2), (- 0.4)],
    letterHeight: 0.03,
    size: [0.2, 0.2],
    ori: 0.0
    ,
    depth: -1
  });
  Iaccept_2.clock = new util.Clock();
  
  idontaccept_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'idontaccept_2',
    text: 'No Acepto',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.4, (- 0.4)],
    letterHeight: 0.03,
    size: [0.2, 0.2],
    ori: 0.0
    ,
    depth: -2
  });
  idontaccept_2.clock = new util.Clock();
  
  // Initialize components for Routine "breif_description"
  breif_descriptionClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '¡Gracias por participar en este estudio! Por favor, lee detenidamente la siguiente información y no dudes en preguntarnos si precisas alguna aclaración adicional. Muchas gracias.\n\nEste estudio trata de investigar las diferencias en cómo los hablantes monolingües y nativos de español e inglés reaccionan corporalmente con el lenguaje cotidiano. A nivel intercultural, nuestros idiomas dan forma a nuestro entorno y viceversa. Esto aún no se ha investigado entre dos idiomas.\n',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  continuar_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'continuar_4',
    text: 'Acepto',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.55, (- 0.4)],
    letterHeight: 0.03,
    size: [0.2, 0.2],
    ori: 0.0
    ,
    depth: -1
  });
  continuar_4.clock = new util.Clock();
  
  // Initialize components for Routine "experimento"
  experimentoClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Ahora, comenzarás el estudio, que durará aproximadamente 40 minutos y la compensación será de 7 euros. Por favor, una vez comenzado el test, es importante que realices el estudio todo seguido hasta el final y evitando distracciones (móvil, ruidos, levantarse, etc.). Con el objetivo de asegurarnos de que la tarea se hace adecuadamente, deberás contestar algunas preguntas no relacionadas con el estudio. Estas preguntas NO RELACIONADAS con el estudio le servirán al investigador responsable para saber si estás prestando la atención necesaria y haciendo el experimento online adecuadamente. Una vez completada la tarea, un comité de investigadores chequeará la fiabilidad de los datos y, en caso de sospecha de fraudulencia (p. ej., si las preguntas NO RELACIONADAS con el estudio no se responden correctamente a menudo), esto podría llevar a tu exclusión del estudio o a no compensarte económicamente.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'TEN EN CUENTA QUE para llevar a cabo este estudio:\n\n-Es necesario que dispongas de un teclado y un ratón.\n\n-Debes utilizar Firefox o Chrome.\n\n-Sólo puedes realizar el experimento en portátil, ordenador de MAC o PC. \n\n-La ventana del experimento se cerrará automáticamente al pulsar "Fin".\n',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.2)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  continuar_5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'continuar_5',
    text: 'Acepto',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.55, (- 0.4)],
    letterHeight: 0.03,
    size: [0.2, 0.2],
    ori: 0.0
    ,
    depth: -2
  });
  continuar_5.clock = new util.Clock();
  
  // Initialize components for Routine "instructions2PAN"
  instructions2PANClock = new util.Clock();
  instructions2PANtext = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions2PANtext',
    text: 'INSTRUCCIONES\n\nTe vamos a preguntar cómo percibes palabras frecuentes usando seis sentidos corporales. No hay respuestas correctas ni incorrectas. La medida es de 0 (nunca lo percibes usando esa sensación corporal) hasta 5 (interactúas mucho usando esa sensación corporal). \n\nHaz clic en el número y cuando ya hayas rellenado las seis sensaciones, pulsa el botón "Siguiente" para empezar la siguiente palabra. Si no reconoces una palabra, pulsa “No sé la palabra" y haz clic en "Siguente" para continuar.\n\nSi quieres saber más sobre el experimento, ponte en contacto con los investigadores principales: Clara Martin (c.martin@bcbl.eu) o Cesar Caballero-Gaudes (c.caballero@bcbl.eu) en BCBL. ',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  next2PANinstr = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next2PANinstr',
    text: 'Siguiente',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.55, (- 0.4)],
    letterHeight: 0.03,
    size: [0.2, 0.2],
    ori: 0.0
    ,
    depth: -1
  });
  next2PANinstr.clock = new util.Clock();
  
  // Initialize components for Routine "SentirES_psychopy"
  SentirES_psychopyClock = new util.Clock();
  pregunta = new visual.TextStim({
    win: psychoJS.window,
    name: 'pregunta',
    text: 'Cómo percibes',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.4), 0.4], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  stimuli = new visual.TextStim({
    win: psychoJS.window,
    name: 'stimuli',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.4), 0.3], draggable: false, height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('White'),  opacity: 1.0,
    depth: -1.0 
  });
  
  audition = new visual.TextStim({
    win: psychoJS.window,
    name: 'audition',
    text: 'usando audición',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.52), 0.2], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  taste = new visual.TextStim({
    win: psychoJS.window,
    name: 'taste',
    text: 'usando sabor',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.52), 0.1], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -3.0 
  });
  
  haptic = new visual.TextStim({
    win: psychoJS.window,
    name: 'haptic',
    text: 'usando tacto',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.52), 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -4.0 
  });
  
  olfaction = new visual.TextStim({
    win: psychoJS.window,
    name: 'olfaction',
    text: 'usando olor',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.52), (- 0.1)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -5.0 
  });
  
  vision = new visual.TextStim({
    win: psychoJS.window,
    name: 'vision',
    text: 'usando visión',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.52), (- 0.2)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('White'),  opacity: 1.0,
    depth: -6.0 
  });
  
  interoception = new visual.TextStim({
    win: psychoJS.window,
    name: 'interoception',
    text: 'usando sensaciones \nintracorporales',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.52), (- 0.3)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('White'),  opacity: 1.0,
    depth: -7.0 
  });
  
  auditionslider = new visual.Slider({
    win: psychoJS.window, name: 'auditionslider',
    startValue: 0,
    size: [0.7, 0.05], pos: [0, 0.2], ori: 0.0, units: 'height',
    labels: ["nada", "totalmente"], fontSize: 0.02, ticks: [0, 1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: 1.0, fontFamily: 'Arial', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  tasteslider = new visual.Slider({
    win: psychoJS.window, name: 'tasteslider',
    startValue: undefined,
    size: [0.7, 0.05], pos: [0, 0.1], ori: 0.0, units: 'height',
    labels: ["nada", "totalmente"], fontSize: 0.02, ticks: [0, 1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: 1.0, fontFamily: 'Arial', bold: true, italic: false, depth: -9, 
    flip: false,
  });
  
  hapticslider = new visual.Slider({
    win: psychoJS.window, name: 'hapticslider',
    startValue: undefined,
    size: [0.7, 0.05], pos: [0, 0], ori: 0.0, units: 'height',
    labels: ["nada", "totalmente"], fontSize: 0.02, ticks: [0, 1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: 1.0, fontFamily: 'Arial', bold: true, italic: false, depth: -10, 
    flip: false,
  });
  
  olfactionslider = new visual.Slider({
    win: psychoJS.window, name: 'olfactionslider',
    startValue: undefined,
    size: [0.7, 0.05], pos: [0, (- 0.1)], ori: 0.0, units: 'height',
    labels: ["nada", "totalmente"], fontSize: 0.02, ticks: [0, 1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: 1.0, fontFamily: 'Arial', bold: true, italic: false, depth: -11, 
    flip: false,
  });
  
  visionslider = new visual.Slider({
    win: psychoJS.window, name: 'visionslider',
    startValue: undefined,
    size: [0.7, 0.05], pos: [0, (- 0.2)], ori: 0.0, units: 'height',
    labels: ["nada", "totalmente"], fontSize: 0.02, ticks: [0, 1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -12, 
    flip: false,
  });
  
  interoceptionsslider = new visual.Slider({
    win: psychoJS.window, name: 'interoceptionsslider',
    startValue: undefined,
    size: [0.7, 0.05], pos: [0, (- 0.3)], ori: 0.0, units: 'height',
    labels: ["nada", "totalmente"], fontSize: 0.02, ticks: [0, 1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -13, 
    flip: false,
  });
  
  next2PANstim = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next2PANstim',
    text: 'Siguiente',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.55, (- 0.4)],
    letterHeight: 0.03,
    size: [0.2, 0.2],
    ori: 0.0
    ,
    depth: -14
  });
  next2PANstim.clock = new util.Clock();
  
  nose2PAN = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'nose2PAN',
    text: 'no sé esta palabra',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.55, 0.3],
    letterHeight: 0.03,
    size: [0.4, 0.2],
    ori: 0.0
    ,
    depth: -15
  });
  nose2PAN.clock = new util.Clock();
  
  // Initialize components for Routine "catch2PAN1"
  catch2PAN1Clock = new util.Clock();
  catch2PANanimal = new visual.TextStim({
    win: psychoJS.window,
    name: 'catch2PANanimal',
    text: 'Elije el animal que vuela.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.3], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  Oso = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Oso',
    text: 'Oso',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.5), 0],
    letterHeight: 0.04,
    size: [0.3, 0.3],
    ori: 0.0
    ,
    depth: -1
  });
  Oso.clock = new util.Clock();
  
  Pez = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Pez',
    text: 'Pez',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, 0],
    letterHeight: 0.04,
    size: [0.3, 0.3],
    ori: 0.0
    ,
    depth: -2
  });
  Pez.clock = new util.Clock();
  
  Ave = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Ave',
    text: 'Ave',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.5, 0],
    letterHeight: 0.04,
    size: [0.3, 0.3],
    ori: 0.0
    ,
    depth: -3
  });
  Ave.clock = new util.Clock();
  
  // Initialize components for Routine "catch2SPAN2"
  catch2SPAN2Clock = new util.Clock();
  catch2PANmates = new visual.TextStim({
    win: psychoJS.window,
    name: 'catch2PANmates',
    text: '¿Qué es 5 x 3?',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.3], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  quinze = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'quinze',
    text: '15',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.5), 0],
    letterHeight: 0.04,
    size: [0.3, 0.3],
    ori: 0.0
    ,
    depth: -1
  });
  quinze.clock = new util.Clock();
  
  setentaydos = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'setentaydos',
    text: '72',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, 0],
    letterHeight: 0.04,
    size: [0.3, 0.3],
    ori: 0.0
    ,
    depth: -2
  });
  setentaydos.clock = new util.Clock();
  
  cien = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'cien',
    text: '100',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.5, 0],
    letterHeight: 0.04,
    size: [0.3, 0.3],
    ori: 0.0
    ,
    depth: -3
  });
  cien.clock = new util.Clock();
  
  // Initialize components for Routine "break2PAN"
  break2PANClock = new util.Clock();
  SentirESbreak = new visual.TextStim({
    win: psychoJS.window,
    name: 'SentirESbreak',
    text: 'Si lo deseas, tómate un pequeño descanso.\nPulsa "Siguente" para continuar con el experimento.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  next2PANbreak = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next2PANbreak',
    text: 'Siguiente',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.03,
    size: [0.2, 0.2],
    ori: 0.0
    ,
    depth: -1
  });
  next2PANbreak.clock = new util.Clock();
  
  // Initialize components for Routine "catch2PAN3"
  catch2PAN3Clock = new util.Clock();
  catch2PANfruta = new visual.TextStim({
    win: psychoJS.window,
    name: 'catch2PANfruta',
    text: 'Elije la fruta',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.3], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  bocadillo = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'bocadillo',
    text: 'bocadillo',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.5), 0],
    letterHeight: 0.04,
    size: [0.3, 0.3],
    ori: 0.0
    ,
    depth: -1
  });
  bocadillo.clock = new util.Clock();
  
  coliflor = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'coliflor',
    text: 'coliflor',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, 0],
    letterHeight: 0.04,
    size: [0.3, 0.3],
    ori: 0.0
    ,
    depth: -2
  });
  coliflor.clock = new util.Clock();
  
  manzana = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'manzana',
    text: 'manzana',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.5, 0],
    letterHeight: 0.04,
    size: [0.3, 0.3],
    ori: 0.0
    ,
    depth: -3
  });
  manzana.clock = new util.Clock();
  
  // Initialize components for Routine "debriefing_2"
  debriefing_2Clock = new util.Clock();
  debriefing_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'debriefing_3',
    text: 'Este estudio trata de investigar las diferencias en cómo los hablantes monolingües y nativos de español e inglés reaccionan corporalmente con el lenguaje cotidiano. A nivel intercultural, nuestros idiomas dan forma a nuestro entorno y viceversa. Esto aún no se ha investigado entre dos idiomas.\n\nNuestra hipótesis es que encontraremos diferencias entre la forma en que los hablantes monolingües nativos del español e inglés marquen las palabras en la encuesta. La encuesta que acabas de completar nos ayudará a formar una representación de estas dos culturas e idiomas.\n\nEn un mundo en constante evolución de la tecnología y la inteligencia artificial, este estudio ayuda a los investigadores a fundamentar la manera en que el lenguaje evoca respuestas sensoriales en nuestros cuerpos.\n',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.25], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  contact = new visual.TextStim({
    win: psychoJS.window,
    name: 'contact',
    text: 'Si quieres saber más sobre el centro que ha diseñado este experimento, BCBL (Basque Center on Cognition, Brain and Language), visita nuestra web (www.bcbl.eu) y síguenos en redes sociales como Facebook (@bcbl.eu), Instagram (bcbl_basque_center), Twitter (@bcbl_) y YouTube (BCBL) para enterarte de todas las novedades del BCBL y del área de la neurociencia cognitiva.',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.1)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  next = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next',
    text: 'Siguiente',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.55, (- 0.4)],
    letterHeight: 0.03,
    size: [0.2, 0.2],
    ori: 0.0
    ,
    depth: -2
  });
  next.clock = new util.Clock();
  
  // Initialize components for Routine "fin"
  finClock = new util.Clock();
  fin_y = new visual.TextStim({
    win: psychoJS.window,
    name: 'fin_y',
    text: "Gracias por tu participación.\nPulsa 'fin' para finalizar este estudio.",
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  fin2PAN = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'fin2PAN',
    text: 'fin',
    fillColor: [(- 1.0), 0.0902, 0.0902],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    ori: 0.0
    ,
    depth: -1
  });
  fin2PAN.clock = new util.Clock();
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var BCBLMaxDurationReached;
var BCBLMaxDuration;
var BCBLComponents;
function BCBLRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BCBL' ---
    t = 0;
    BCBLClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    BCBLMaxDurationReached = false;
    // update component parameters for each repeat
    // reset Acpeto to account for continued clicks & clear times on/off
    Acpeto.reset()
    psychoJS.experiment.addData('BCBL.started', globalClock.getTime());
    BCBLMaxDuration = null
    // keep track of which components have finished
    BCBLComponents = [];
    BCBLComponents.push(presentation);
    BCBLComponents.push(Acpeto);
    BCBLComponents.push(bcbl);
    
    for (const thisComponent of BCBLComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BCBLRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BCBL' ---
    // get current time
    t = BCBLClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *presentation* updates
    if (t >= 0.0 && presentation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      presentation.tStart = t;  // (not accounting for frame time here)
      presentation.frameNStart = frameN;  // exact frame index
      
      presentation.setAutoDraw(true);
    }
    
    
    // *Acpeto* updates
    if (t >= 0 && Acpeto.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Acpeto.tStart = t;  // (not accounting for frame time here)
      Acpeto.frameNStart = frameN;  // exact frame index
      
      Acpeto.setAutoDraw(true);
    }
    
    if (Acpeto.status === PsychoJS.Status.STARTED) {
      // check whether Acpeto has been pressed
      if (Acpeto.isClicked) {
        if (!Acpeto.wasClicked) {
          // store time of first click
          Acpeto.timesOn.push(Acpeto.clock.getTime());
          // store time clicked until
          Acpeto.timesOff.push(Acpeto.clock.getTime());
        } else {
          // update time clicked until;
          Acpeto.timesOff[Acpeto.timesOff.length - 1] = Acpeto.clock.getTime();
        }
        if (!Acpeto.wasClicked) {
          // end routine when Acpeto is clicked
          continueRoutine = false;
          
        }
        // if Acpeto is still clicked next frame, it is not a new click
        Acpeto.wasClicked = true;
      } else {
        // if Acpeto is clicked next frame, it is a new click
        Acpeto.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Acpeto hasn't started / has finished
      Acpeto.clock.reset();
      // if Acpeto is clicked next frame, it is a new click
      Acpeto.wasClicked = false;
    }
    
    // *bcbl* updates
    if (t >= 0.0 && bcbl.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bcbl.tStart = t;  // (not accounting for frame time here)
      bcbl.frameNStart = frameN;  // exact frame index
      
      bcbl.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BCBLComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BCBLRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BCBL' ---
    for (const thisComponent of BCBLComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('BCBL.stopped', globalClock.getTime());
    psychoJS.experiment.addData('Acpeto.numClicks', Acpeto.numClicks);
    psychoJS.experiment.addData('Acpeto.timesOn', Acpeto.timesOn);
    psychoJS.experiment.addData('Acpeto.timesOff', Acpeto.timesOff);
    // the Routine "BCBL" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consent_1MaxDurationReached;
var consent_1MaxDuration;
var consent_1Components;
function consent_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_1' ---
    t = 0;
    consent_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    consent_1MaxDurationReached = false;
    // update component parameters for each repeat
    yesno.reset()
    yesno_2.reset()
    yesno_3.reset()
    yesno_4.reset()
    // reset Continuar to account for continued clicks & clear times on/off
    Continuar.reset()
    psychoJS.experiment.addData('consent_1.started', globalClock.getTime());
    consent_1MaxDuration = null
    // keep track of which components have finished
    consent_1Components = [];
    consent_1Components.push(personaldata);
    consent_1Components.push(personaldata_2);
    consent_1Components.push(personaldata_3);
    consent_1Components.push(personaldata_4);
    consent_1Components.push(yesno);
    consent_1Components.push(yesno_2);
    consent_1Components.push(yesno_3);
    consent_1Components.push(yesno_4);
    consent_1Components.push(Continuar);
    
    for (const thisComponent of consent_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consent_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_1' ---
    // get current time
    t = consent_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *personaldata* updates
    if (t >= 0.0 && personaldata.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      personaldata.tStart = t;  // (not accounting for frame time here)
      personaldata.frameNStart = frameN;  // exact frame index
      
      personaldata.setAutoDraw(true);
    }
    
    
    // *personaldata_2* updates
    if (t >= 0.0 && personaldata_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      personaldata_2.tStart = t;  // (not accounting for frame time here)
      personaldata_2.frameNStart = frameN;  // exact frame index
      
      personaldata_2.setAutoDraw(true);
    }
    
    
    // *personaldata_3* updates
    if (t >= 0.0 && personaldata_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      personaldata_3.tStart = t;  // (not accounting for frame time here)
      personaldata_3.frameNStart = frameN;  // exact frame index
      
      personaldata_3.setAutoDraw(true);
    }
    
    
    // *personaldata_4* updates
    if (t >= 0.0 && personaldata_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      personaldata_4.tStart = t;  // (not accounting for frame time here)
      personaldata_4.frameNStart = frameN;  // exact frame index
      
      personaldata_4.setAutoDraw(true);
    }
    
    
    // *yesno* updates
    if (t >= 0.0 && yesno.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yesno.tStart = t;  // (not accounting for frame time here)
      yesno.frameNStart = frameN;  // exact frame index
      
      yesno.setAutoDraw(true);
    }
    
    
    // *yesno_2* updates
    if (t >= 0.0 && yesno_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yesno_2.tStart = t;  // (not accounting for frame time here)
      yesno_2.frameNStart = frameN;  // exact frame index
      
      yesno_2.setAutoDraw(true);
    }
    
    
    // *yesno_3* updates
    if (t >= 0.0 && yesno_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yesno_3.tStart = t;  // (not accounting for frame time here)
      yesno_3.frameNStart = frameN;  // exact frame index
      
      yesno_3.setAutoDraw(true);
    }
    
    
    // *yesno_4* updates
    if (t >= 0.0 && yesno_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yesno_4.tStart = t;  // (not accounting for frame time here)
      yesno_4.frameNStart = frameN;  // exact frame index
      
      yesno_4.setAutoDraw(true);
    }
    
    
    // *Continuar* updates
    if (t >= 0 && Continuar.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Continuar.tStart = t;  // (not accounting for frame time here)
      Continuar.frameNStart = frameN;  // exact frame index
      
      Continuar.setAutoDraw(true);
    }
    
    if (Continuar.status === PsychoJS.Status.STARTED) {
      // check whether Continuar has been pressed
      if (Continuar.isClicked) {
        if (!Continuar.wasClicked) {
          // store time of first click
          Continuar.timesOn.push(Continuar.clock.getTime());
          // store time clicked until
          Continuar.timesOff.push(Continuar.clock.getTime());
        } else {
          // update time clicked until;
          Continuar.timesOff[Continuar.timesOff.length - 1] = Continuar.clock.getTime();
        }
        if (!Continuar.wasClicked) {
          // end routine when Continuar is clicked
          continueRoutine = false;
          
        }
        // if Continuar is still clicked next frame, it is not a new click
        Continuar.wasClicked = true;
      } else {
        // if Continuar is clicked next frame, it is a new click
        Continuar.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Continuar hasn't started / has finished
      Continuar.clock.reset();
      // if Continuar is clicked next frame, it is a new click
      Continuar.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_1' ---
    for (const thisComponent of consent_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent_1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('yesno.response', yesno.getRating());
    psychoJS.experiment.addData('yesno.rt', yesno.getRT());
    psychoJS.experiment.addData('yesno_2.response', yesno_2.getRating());
    psychoJS.experiment.addData('yesno_2.rt', yesno_2.getRT());
    psychoJS.experiment.addData('yesno_3.response', yesno_3.getRating());
    psychoJS.experiment.addData('yesno_3.rt', yesno_3.getRT());
    psychoJS.experiment.addData('yesno_4.response', yesno_4.getRating());
    psychoJS.experiment.addData('yesno_4.rt', yesno_4.getRT());
    psychoJS.experiment.addData('Continuar.numClicks', Continuar.numClicks);
    psychoJS.experiment.addData('Continuar.timesOn', Continuar.timesOn);
    psychoJS.experiment.addData('Continuar.timesOff', Continuar.timesOff);
    // the Routine "consent_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var concent_2MaxDurationReached;
var concent_2MaxDuration;
var concent_2Components;
function concent_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'concent_2' ---
    t = 0;
    concent_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    concent_2MaxDurationReached = false;
    // update component parameters for each repeat
    yesno_5.reset()
    // reset continuar_2 to account for continued clicks & clear times on/off
    continuar_2.reset()
    psychoJS.experiment.addData('concent_2.started', globalClock.getTime());
    concent_2MaxDuration = null
    // keep track of which components have finished
    concent_2Components = [];
    concent_2Components.push(personaldata_5);
    concent_2Components.push(personaldata_6);
    concent_2Components.push(personaldata_7);
    concent_2Components.push(personaldata_8);
    concent_2Components.push(yesno_5);
    concent_2Components.push(continuar_2);
    
    for (const thisComponent of concent_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function concent_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'concent_2' ---
    // get current time
    t = concent_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *personaldata_5* updates
    if (t >= 0.0 && personaldata_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      personaldata_5.tStart = t;  // (not accounting for frame time here)
      personaldata_5.frameNStart = frameN;  // exact frame index
      
      personaldata_5.setAutoDraw(true);
    }
    
    
    // *personaldata_6* updates
    if (t >= 0.0 && personaldata_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      personaldata_6.tStart = t;  // (not accounting for frame time here)
      personaldata_6.frameNStart = frameN;  // exact frame index
      
      personaldata_6.setAutoDraw(true);
    }
    
    
    // *personaldata_7* updates
    if (t >= 0.0 && personaldata_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      personaldata_7.tStart = t;  // (not accounting for frame time here)
      personaldata_7.frameNStart = frameN;  // exact frame index
      
      personaldata_7.setAutoDraw(true);
    }
    
    
    // *personaldata_8* updates
    if (t >= 0.0 && personaldata_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      personaldata_8.tStart = t;  // (not accounting for frame time here)
      personaldata_8.frameNStart = frameN;  // exact frame index
      
      personaldata_8.setAutoDraw(true);
    }
    
    
    // *yesno_5* updates
    if (t >= 0.0 && yesno_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yesno_5.tStart = t;  // (not accounting for frame time here)
      yesno_5.frameNStart = frameN;  // exact frame index
      
      yesno_5.setAutoDraw(true);
    }
    
    
    // *continuar_2* updates
    if (t >= 0 && continuar_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continuar_2.tStart = t;  // (not accounting for frame time here)
      continuar_2.frameNStart = frameN;  // exact frame index
      
      continuar_2.setAutoDraw(true);
    }
    
    if (continuar_2.status === PsychoJS.Status.STARTED) {
      // check whether continuar_2 has been pressed
      if (continuar_2.isClicked) {
        if (!continuar_2.wasClicked) {
          // store time of first click
          continuar_2.timesOn.push(continuar_2.clock.getTime());
          // store time clicked until
          continuar_2.timesOff.push(continuar_2.clock.getTime());
        } else {
          // update time clicked until;
          continuar_2.timesOff[continuar_2.timesOff.length - 1] = continuar_2.clock.getTime();
        }
        if (!continuar_2.wasClicked) {
          // end routine when continuar_2 is clicked
          continueRoutine = false;
          
        }
        // if continuar_2 is still clicked next frame, it is not a new click
        continuar_2.wasClicked = true;
      } else {
        // if continuar_2 is clicked next frame, it is a new click
        continuar_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if continuar_2 hasn't started / has finished
      continuar_2.clock.reset();
      // if continuar_2 is clicked next frame, it is a new click
      continuar_2.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of concent_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function concent_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'concent_2' ---
    for (const thisComponent of concent_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('concent_2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('yesno_5.response', yesno_5.getRating());
    psychoJS.experiment.addData('yesno_5.rt', yesno_5.getRT());
    psychoJS.experiment.addData('continuar_2.numClicks', continuar_2.numClicks);
    psychoJS.experiment.addData('continuar_2.timesOn', continuar_2.timesOn);
    psychoJS.experiment.addData('continuar_2.timesOff', continuar_2.timesOff);
    // the Routine "concent_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consent_3MaxDurationReached;
var consent_3MaxDuration;
var consent_3Components;
function consent_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_3' ---
    t = 0;
    consent_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    consent_3MaxDurationReached = false;
    // update component parameters for each repeat
    // reset continuar_3 to account for continued clicks & clear times on/off
    continuar_3.reset()
    psychoJS.experiment.addData('consent_3.started', globalClock.getTime());
    consent_3MaxDuration = null
    // keep track of which components have finished
    consent_3Components = [];
    consent_3Components.push(perdonaldata_9);
    consent_3Components.push(personaldata_10);
    consent_3Components.push(personaldata_11);
    consent_3Components.push(personaldata_12);
    consent_3Components.push(continuar_3);
    
    for (const thisComponent of consent_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consent_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_3' ---
    // get current time
    t = consent_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *perdonaldata_9* updates
    if (t >= 0.0 && perdonaldata_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      perdonaldata_9.tStart = t;  // (not accounting for frame time here)
      perdonaldata_9.frameNStart = frameN;  // exact frame index
      
      perdonaldata_9.setAutoDraw(true);
    }
    
    
    // *personaldata_10* updates
    if (t >= 0.0 && personaldata_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      personaldata_10.tStart = t;  // (not accounting for frame time here)
      personaldata_10.frameNStart = frameN;  // exact frame index
      
      personaldata_10.setAutoDraw(true);
    }
    
    
    // *personaldata_11* updates
    if (t >= 0.0 && personaldata_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      personaldata_11.tStart = t;  // (not accounting for frame time here)
      personaldata_11.frameNStart = frameN;  // exact frame index
      
      personaldata_11.setAutoDraw(true);
    }
    
    
    // *personaldata_12* updates
    if (t >= 0.0 && personaldata_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      personaldata_12.tStart = t;  // (not accounting for frame time here)
      personaldata_12.frameNStart = frameN;  // exact frame index
      
      personaldata_12.setAutoDraw(true);
    }
    
    
    // *continuar_3* updates
    if (t >= 0 && continuar_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continuar_3.tStart = t;  // (not accounting for frame time here)
      continuar_3.frameNStart = frameN;  // exact frame index
      
      continuar_3.setAutoDraw(true);
    }
    
    if (continuar_3.status === PsychoJS.Status.STARTED) {
      // check whether continuar_3 has been pressed
      if (continuar_3.isClicked) {
        if (!continuar_3.wasClicked) {
          // store time of first click
          continuar_3.timesOn.push(continuar_3.clock.getTime());
          // store time clicked until
          continuar_3.timesOff.push(continuar_3.clock.getTime());
        } else {
          // update time clicked until;
          continuar_3.timesOff[continuar_3.timesOff.length - 1] = continuar_3.clock.getTime();
        }
        if (!continuar_3.wasClicked) {
          // end routine when continuar_3 is clicked
          continueRoutine = false;
          
        }
        // if continuar_3 is still clicked next frame, it is not a new click
        continuar_3.wasClicked = true;
      } else {
        // if continuar_3 is clicked next frame, it is a new click
        continuar_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if continuar_3 hasn't started / has finished
      continuar_3.clock.reset();
      // if continuar_3 is clicked next frame, it is a new click
      continuar_3.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_3' ---
    for (const thisComponent of consent_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent_3.stopped', globalClock.getTime());
    psychoJS.experiment.addData('continuar_3.numClicks', continuar_3.numClicks);
    psychoJS.experiment.addData('continuar_3.timesOn', continuar_3.timesOn);
    psychoJS.experiment.addData('continuar_3.timesOff', continuar_3.timesOff);
    // the Routine "consent_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var aut_personaldataMaxDurationReached;
var aut_personaldataMaxDuration;
var aut_personaldataComponents;
function aut_personaldataRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'aut_personaldata' ---
    t = 0;
    aut_personaldataClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    aut_personaldataMaxDurationReached = false;
    // update component parameters for each repeat
    // reset Iaccept to account for continued clicks & clear times on/off
    Iaccept.reset()
    // reset idonotaccept to account for continued clicks & clear times on/off
    idonotaccept.reset()
    psychoJS.experiment.addData('aut_personaldata.started', globalClock.getTime());
    aut_personaldataMaxDuration = null
    // keep track of which components have finished
    aut_personaldataComponents = [];
    aut_personaldataComponents.push(infomored);
    aut_personaldataComponents.push(informed_2);
    aut_personaldataComponents.push(Iaccept);
    aut_personaldataComponents.push(idonotaccept);
    
    for (const thisComponent of aut_personaldataComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function aut_personaldataRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'aut_personaldata' ---
    // get current time
    t = aut_personaldataClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *infomored* updates
    if (t >= 0.0 && infomored.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      infomored.tStart = t;  // (not accounting for frame time here)
      infomored.frameNStart = frameN;  // exact frame index
      
      infomored.setAutoDraw(true);
    }
    
    
    // *informed_2* updates
    if (t >= 0.0 && informed_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      informed_2.tStart = t;  // (not accounting for frame time here)
      informed_2.frameNStart = frameN;  // exact frame index
      
      informed_2.setAutoDraw(true);
    }
    
    
    // *Iaccept* updates
    if (t >= 0 && Iaccept.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Iaccept.tStart = t;  // (not accounting for frame time here)
      Iaccept.frameNStart = frameN;  // exact frame index
      
      Iaccept.setAutoDraw(true);
    }
    
    if (Iaccept.status === PsychoJS.Status.STARTED) {
      // check whether Iaccept has been pressed
      if (Iaccept.isClicked) {
        if (!Iaccept.wasClicked) {
          // store time of first click
          Iaccept.timesOn.push(Iaccept.clock.getTime());
          // store time clicked until
          Iaccept.timesOff.push(Iaccept.clock.getTime());
        } else {
          // update time clicked until;
          Iaccept.timesOff[Iaccept.timesOff.length - 1] = Iaccept.clock.getTime();
        }
        if (!Iaccept.wasClicked) {
          // end routine when Iaccept is clicked
          continueRoutine = false;
          
        }
        // if Iaccept is still clicked next frame, it is not a new click
        Iaccept.wasClicked = true;
      } else {
        // if Iaccept is clicked next frame, it is a new click
        Iaccept.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Iaccept hasn't started / has finished
      Iaccept.clock.reset();
      // if Iaccept is clicked next frame, it is a new click
      Iaccept.wasClicked = false;
    }
    
    // *idonotaccept* updates
    if (t >= 0 && idonotaccept.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      idonotaccept.tStart = t;  // (not accounting for frame time here)
      idonotaccept.frameNStart = frameN;  // exact frame index
      
      idonotaccept.setAutoDraw(true);
    }
    
    if (idonotaccept.status === PsychoJS.Status.STARTED) {
      // check whether idonotaccept has been pressed
      if (idonotaccept.isClicked) {
        if (!idonotaccept.wasClicked) {
          // store time of first click
          idonotaccept.timesOn.push(idonotaccept.clock.getTime());
          // store time clicked until
          idonotaccept.timesOff.push(idonotaccept.clock.getTime());
        } else {
          // update time clicked until;
          idonotaccept.timesOff[idonotaccept.timesOff.length - 1] = idonotaccept.clock.getTime();
        }
        if (!idonotaccept.wasClicked) {
          
        }
        // if idonotaccept is still clicked next frame, it is not a new click
        idonotaccept.wasClicked = true;
      } else {
        // if idonotaccept is clicked next frame, it is a new click
        idonotaccept.wasClicked = false;
      }
    } else {
      // keep clock at 0 if idonotaccept hasn't started / has finished
      idonotaccept.clock.reset();
      // if idonotaccept is clicked next frame, it is a new click
      idonotaccept.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of aut_personaldataComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function aut_personaldataRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'aut_personaldata' ---
    for (const thisComponent of aut_personaldataComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('aut_personaldata.stopped', globalClock.getTime());
    psychoJS.experiment.addData('Iaccept.numClicks', Iaccept.numClicks);
    psychoJS.experiment.addData('Iaccept.timesOn', Iaccept.timesOn);
    psychoJS.experiment.addData('Iaccept.timesOff', Iaccept.timesOff);
    psychoJS.experiment.addData('idonotaccept.numClicks', idonotaccept.numClicks);
    psychoJS.experiment.addData('idonotaccept.timesOn', idonotaccept.timesOn);
    psychoJS.experiment.addData('idonotaccept.timesOff', idonotaccept.timesOff);
    // the Routine "aut_personaldata" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fine_printMaxDurationReached;
var fine_printMaxDuration;
var fine_printComponents;
function fine_printRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fine_print' ---
    t = 0;
    fine_printClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    fine_printMaxDurationReached = false;
    // update component parameters for each repeat
    // reset Iaccept_2 to account for continued clicks & clear times on/off
    Iaccept_2.reset()
    // reset idontaccept_2 to account for continued clicks & clear times on/off
    idontaccept_2.reset()
    psychoJS.experiment.addData('fine_print.started', globalClock.getTime());
    fine_printMaxDuration = null
    // keep track of which components have finished
    fine_printComponents = [];
    fine_printComponents.push(fine_print_consent);
    fine_printComponents.push(Iaccept_2);
    fine_printComponents.push(idontaccept_2);
    
    for (const thisComponent of fine_printComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fine_printRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fine_print' ---
    // get current time
    t = fine_printClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fine_print_consent* updates
    if (t >= 0.0 && fine_print_consent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fine_print_consent.tStart = t;  // (not accounting for frame time here)
      fine_print_consent.frameNStart = frameN;  // exact frame index
      
      fine_print_consent.setAutoDraw(true);
    }
    
    
    // *Iaccept_2* updates
    if (t >= 0 && Iaccept_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Iaccept_2.tStart = t;  // (not accounting for frame time here)
      Iaccept_2.frameNStart = frameN;  // exact frame index
      
      Iaccept_2.setAutoDraw(true);
    }
    
    if (Iaccept_2.status === PsychoJS.Status.STARTED) {
      // check whether Iaccept_2 has been pressed
      if (Iaccept_2.isClicked) {
        if (!Iaccept_2.wasClicked) {
          // store time of first click
          Iaccept_2.timesOn.push(Iaccept_2.clock.getTime());
          // store time clicked until
          Iaccept_2.timesOff.push(Iaccept_2.clock.getTime());
        } else {
          // update time clicked until;
          Iaccept_2.timesOff[Iaccept_2.timesOff.length - 1] = Iaccept_2.clock.getTime();
        }
        if (!Iaccept_2.wasClicked) {
          // end routine when Iaccept_2 is clicked
          continueRoutine = false;
          
        }
        // if Iaccept_2 is still clicked next frame, it is not a new click
        Iaccept_2.wasClicked = true;
      } else {
        // if Iaccept_2 is clicked next frame, it is a new click
        Iaccept_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Iaccept_2 hasn't started / has finished
      Iaccept_2.clock.reset();
      // if Iaccept_2 is clicked next frame, it is a new click
      Iaccept_2.wasClicked = false;
    }
    
    // *idontaccept_2* updates
    if (t >= 0 && idontaccept_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      idontaccept_2.tStart = t;  // (not accounting for frame time here)
      idontaccept_2.frameNStart = frameN;  // exact frame index
      
      idontaccept_2.setAutoDraw(true);
    }
    
    if (idontaccept_2.status === PsychoJS.Status.STARTED) {
      // check whether idontaccept_2 has been pressed
      if (idontaccept_2.isClicked) {
        if (!idontaccept_2.wasClicked) {
          // store time of first click
          idontaccept_2.timesOn.push(idontaccept_2.clock.getTime());
          // store time clicked until
          idontaccept_2.timesOff.push(idontaccept_2.clock.getTime());
        } else {
          // update time clicked until;
          idontaccept_2.timesOff[idontaccept_2.timesOff.length - 1] = idontaccept_2.clock.getTime();
        }
        if (!idontaccept_2.wasClicked) {
          
        }
        // if idontaccept_2 is still clicked next frame, it is not a new click
        idontaccept_2.wasClicked = true;
      } else {
        // if idontaccept_2 is clicked next frame, it is a new click
        idontaccept_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if idontaccept_2 hasn't started / has finished
      idontaccept_2.clock.reset();
      // if idontaccept_2 is clicked next frame, it is a new click
      idontaccept_2.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fine_printComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fine_printRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fine_print' ---
    for (const thisComponent of fine_printComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fine_print.stopped', globalClock.getTime());
    psychoJS.experiment.addData('Iaccept_2.numClicks', Iaccept_2.numClicks);
    psychoJS.experiment.addData('Iaccept_2.timesOn', Iaccept_2.timesOn);
    psychoJS.experiment.addData('Iaccept_2.timesOff', Iaccept_2.timesOff);
    psychoJS.experiment.addData('idontaccept_2.numClicks', idontaccept_2.numClicks);
    psychoJS.experiment.addData('idontaccept_2.timesOn', idontaccept_2.timesOn);
    psychoJS.experiment.addData('idontaccept_2.timesOff', idontaccept_2.timesOff);
    // the Routine "fine_print" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var breif_descriptionMaxDurationReached;
var breif_descriptionMaxDuration;
var breif_descriptionComponents;
function breif_descriptionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'breif_description' ---
    t = 0;
    breif_descriptionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    breif_descriptionMaxDurationReached = false;
    // update component parameters for each repeat
    // reset continuar_4 to account for continued clicks & clear times on/off
    continuar_4.reset()
    psychoJS.experiment.addData('breif_description.started', globalClock.getTime());
    breif_descriptionMaxDuration = null
    // keep track of which components have finished
    breif_descriptionComponents = [];
    breif_descriptionComponents.push(text);
    breif_descriptionComponents.push(continuar_4);
    
    for (const thisComponent of breif_descriptionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function breif_descriptionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'breif_description' ---
    // get current time
    t = breif_descriptionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *continuar_4* updates
    if (t >= 0 && continuar_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continuar_4.tStart = t;  // (not accounting for frame time here)
      continuar_4.frameNStart = frameN;  // exact frame index
      
      continuar_4.setAutoDraw(true);
    }
    
    if (continuar_4.status === PsychoJS.Status.STARTED) {
      // check whether continuar_4 has been pressed
      if (continuar_4.isClicked) {
        if (!continuar_4.wasClicked) {
          // store time of first click
          continuar_4.timesOn.push(continuar_4.clock.getTime());
          // store time clicked until
          continuar_4.timesOff.push(continuar_4.clock.getTime());
        } else {
          // update time clicked until;
          continuar_4.timesOff[continuar_4.timesOff.length - 1] = continuar_4.clock.getTime();
        }
        if (!continuar_4.wasClicked) {
          // end routine when continuar_4 is clicked
          continueRoutine = false;
          
        }
        // if continuar_4 is still clicked next frame, it is not a new click
        continuar_4.wasClicked = true;
      } else {
        // if continuar_4 is clicked next frame, it is a new click
        continuar_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if continuar_4 hasn't started / has finished
      continuar_4.clock.reset();
      // if continuar_4 is clicked next frame, it is a new click
      continuar_4.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of breif_descriptionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function breif_descriptionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'breif_description' ---
    for (const thisComponent of breif_descriptionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('breif_description.stopped', globalClock.getTime());
    psychoJS.experiment.addData('continuar_4.numClicks', continuar_4.numClicks);
    psychoJS.experiment.addData('continuar_4.timesOn', continuar_4.timesOn);
    psychoJS.experiment.addData('continuar_4.timesOff', continuar_4.timesOff);
    // the Routine "breif_description" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var experimentoMaxDurationReached;
var experimentoMaxDuration;
var experimentoComponents;
function experimentoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'experimento' ---
    t = 0;
    experimentoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    experimentoMaxDurationReached = false;
    // update component parameters for each repeat
    // reset continuar_5 to account for continued clicks & clear times on/off
    continuar_5.reset()
    psychoJS.experiment.addData('experimento.started', globalClock.getTime());
    experimentoMaxDuration = null
    // keep track of which components have finished
    experimentoComponents = [];
    experimentoComponents.push(text_2);
    experimentoComponents.push(text_3);
    experimentoComponents.push(continuar_5);
    
    for (const thisComponent of experimentoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function experimentoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'experimento' ---
    // get current time
    t = experimentoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *continuar_5* updates
    if (t >= 0 && continuar_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continuar_5.tStart = t;  // (not accounting for frame time here)
      continuar_5.frameNStart = frameN;  // exact frame index
      
      continuar_5.setAutoDraw(true);
    }
    
    if (continuar_5.status === PsychoJS.Status.STARTED) {
      // check whether continuar_5 has been pressed
      if (continuar_5.isClicked) {
        if (!continuar_5.wasClicked) {
          // store time of first click
          continuar_5.timesOn.push(continuar_5.clock.getTime());
          // store time clicked until
          continuar_5.timesOff.push(continuar_5.clock.getTime());
        } else {
          // update time clicked until;
          continuar_5.timesOff[continuar_5.timesOff.length - 1] = continuar_5.clock.getTime();
        }
        if (!continuar_5.wasClicked) {
          // end routine when continuar_5 is clicked
          continueRoutine = false;
          
        }
        // if continuar_5 is still clicked next frame, it is not a new click
        continuar_5.wasClicked = true;
      } else {
        // if continuar_5 is clicked next frame, it is a new click
        continuar_5.wasClicked = false;
      }
    } else {
      // keep clock at 0 if continuar_5 hasn't started / has finished
      continuar_5.clock.reset();
      // if continuar_5 is clicked next frame, it is a new click
      continuar_5.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of experimentoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function experimentoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'experimento' ---
    for (const thisComponent of experimentoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('experimento.stopped', globalClock.getTime());
    psychoJS.experiment.addData('continuar_5.numClicks', continuar_5.numClicks);
    psychoJS.experiment.addData('continuar_5.timesOn', continuar_5.timesOn);
    psychoJS.experiment.addData('continuar_5.timesOff', continuar_5.timesOff);
    // the Routine "experimento" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions2PANMaxDurationReached;
var instructions2PANMaxDuration;
var instructions2PANComponents;
function instructions2PANRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions2PAN' ---
    t = 0;
    instructions2PANClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions2PANMaxDurationReached = false;
    // update component parameters for each repeat
    // reset next2PANinstr to account for continued clicks & clear times on/off
    next2PANinstr.reset()
    psychoJS.experiment.addData('instructions2PAN.started', globalClock.getTime());
    instructions2PANMaxDuration = null
    // keep track of which components have finished
    instructions2PANComponents = [];
    instructions2PANComponents.push(instructions2PANtext);
    instructions2PANComponents.push(next2PANinstr);
    
    for (const thisComponent of instructions2PANComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions2PANRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions2PAN' ---
    // get current time
    t = instructions2PANClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions2PANtext* updates
    if (t >= 0.0 && instructions2PANtext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions2PANtext.tStart = t;  // (not accounting for frame time here)
      instructions2PANtext.frameNStart = frameN;  // exact frame index
      
      instructions2PANtext.setAutoDraw(true);
    }
    
    
    // *next2PANinstr* updates
    if (t >= 0 && next2PANinstr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next2PANinstr.tStart = t;  // (not accounting for frame time here)
      next2PANinstr.frameNStart = frameN;  // exact frame index
      
      next2PANinstr.setAutoDraw(true);
    }
    
    if (next2PANinstr.status === PsychoJS.Status.STARTED) {
      // check whether next2PANinstr has been pressed
      if (next2PANinstr.isClicked) {
        if (!next2PANinstr.wasClicked) {
          // store time of first click
          next2PANinstr.timesOn.push(next2PANinstr.clock.getTime());
          // store time clicked until
          next2PANinstr.timesOff.push(next2PANinstr.clock.getTime());
        } else {
          // update time clicked until;
          next2PANinstr.timesOff[next2PANinstr.timesOff.length - 1] = next2PANinstr.clock.getTime();
        }
        if (!next2PANinstr.wasClicked) {
          // end routine when next2PANinstr is clicked
          continueRoutine = false;
          
        }
        // if next2PANinstr is still clicked next frame, it is not a new click
        next2PANinstr.wasClicked = true;
      } else {
        // if next2PANinstr is clicked next frame, it is a new click
        next2PANinstr.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next2PANinstr hasn't started / has finished
      next2PANinstr.clock.reset();
      // if next2PANinstr is clicked next frame, it is a new click
      next2PANinstr.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions2PANComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions2PANRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions2PAN' ---
    for (const thisComponent of instructions2PANComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions2PAN.stopped', globalClock.getTime());
    psychoJS.experiment.addData('next2PANinstr.numClicks', next2PANinstr.numClicks);
    psychoJS.experiment.addData('next2PANinstr.timesOn', next2PANinstr.timesOn);
    psychoJS.experiment.addData('next2PANinstr.timesOff', next2PANinstr.timesOff);
    // the Routine "instructions2PAN" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var SentirES2PAN19;
function SentirES2PAN19LoopBegin(SentirES2PAN19LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    SentirES2PAN19 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimSPAN/Stimuli2PAN19.csv',
      seed: undefined, name: 'SentirES2PAN19'
    });
    psychoJS.experiment.addLoop(SentirES2PAN19); // add the loop to the experiment
    currentLoop = SentirES2PAN19;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSentirES2PAN19 of SentirES2PAN19) {
      snapshot = SentirES2PAN19.getSnapshot();
      SentirES2PAN19LoopScheduler.add(importConditions(snapshot));
      SentirES2PAN19LoopScheduler.add(SentirES_psychopyRoutineBegin(snapshot));
      SentirES2PAN19LoopScheduler.add(SentirES_psychopyRoutineEachFrame());
      SentirES2PAN19LoopScheduler.add(SentirES_psychopyRoutineEnd(snapshot));
      SentirES2PAN19LoopScheduler.add(SentirES2PAN19LoopEndIteration(SentirES2PAN19LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function SentirES2PAN19LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(SentirES2PAN19);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function SentirES2PAN19LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var SentirES2SPAN45;
function SentirES2SPAN45LoopBegin(SentirES2SPAN45LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    SentirES2SPAN45 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimSPAN/Stimuli2PAN45.csv',
      seed: undefined, name: 'SentirES2SPAN45'
    });
    psychoJS.experiment.addLoop(SentirES2SPAN45); // add the loop to the experiment
    currentLoop = SentirES2SPAN45;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSentirES2SPAN45 of SentirES2SPAN45) {
      snapshot = SentirES2SPAN45.getSnapshot();
      SentirES2SPAN45LoopScheduler.add(importConditions(snapshot));
      SentirES2SPAN45LoopScheduler.add(SentirES_psychopyRoutineBegin(snapshot));
      SentirES2SPAN45LoopScheduler.add(SentirES_psychopyRoutineEachFrame());
      SentirES2SPAN45LoopScheduler.add(SentirES_psychopyRoutineEnd(snapshot));
      SentirES2SPAN45LoopScheduler.add(SentirES2SPAN45LoopEndIteration(SentirES2SPAN45LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function SentirES2SPAN45LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(SentirES2SPAN45);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function SentirES2SPAN45LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var SentirES2SPAN78;
function SentirES2SPAN78LoopBegin(SentirES2SPAN78LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    SentirES2SPAN78 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimSPAN/Stimuli2PAN78.csv',
      seed: undefined, name: 'SentirES2SPAN78'
    });
    psychoJS.experiment.addLoop(SentirES2SPAN78); // add the loop to the experiment
    currentLoop = SentirES2SPAN78;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSentirES2SPAN78 of SentirES2SPAN78) {
      snapshot = SentirES2SPAN78.getSnapshot();
      SentirES2SPAN78LoopScheduler.add(importConditions(snapshot));
      SentirES2SPAN78LoopScheduler.add(SentirES_psychopyRoutineBegin(snapshot));
      SentirES2SPAN78LoopScheduler.add(SentirES_psychopyRoutineEachFrame());
      SentirES2SPAN78LoopScheduler.add(SentirES_psychopyRoutineEnd(snapshot));
      SentirES2SPAN78LoopScheduler.add(SentirES2SPAN78LoopEndIteration(SentirES2SPAN78LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function SentirES2SPAN78LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(SentirES2SPAN78);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function SentirES2SPAN78LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var SentirES2SPAN80;
function SentirES2SPAN80LoopBegin(SentirES2SPAN80LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    SentirES2SPAN80 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimSPAN/Stimuli2PAN80.csv',
      seed: undefined, name: 'SentirES2SPAN80'
    });
    psychoJS.experiment.addLoop(SentirES2SPAN80); // add the loop to the experiment
    currentLoop = SentirES2SPAN80;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSentirES2SPAN80 of SentirES2SPAN80) {
      snapshot = SentirES2SPAN80.getSnapshot();
      SentirES2SPAN80LoopScheduler.add(importConditions(snapshot));
      SentirES2SPAN80LoopScheduler.add(SentirES_psychopyRoutineBegin(snapshot));
      SentirES2SPAN80LoopScheduler.add(SentirES_psychopyRoutineEachFrame());
      SentirES2SPAN80LoopScheduler.add(SentirES_psychopyRoutineEnd(snapshot));
      SentirES2SPAN80LoopScheduler.add(SentirES2SPAN80LoopEndIteration(SentirES2SPAN80LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function SentirES2SPAN80LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(SentirES2SPAN80);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function SentirES2SPAN80LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var SentirES_psychopyMaxDurationReached;
var SentirES_psychopyMaxDuration;
var SentirES_psychopyComponents;
function SentirES_psychopyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SentirES_psychopy' ---
    t = 0;
    SentirES_psychopyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    SentirES_psychopyMaxDurationReached = false;
    // update component parameters for each repeat
    stimuli.setText(Word);
    auditionslider.reset()
    tasteslider.reset()
    hapticslider.reset()
    olfactionslider.reset()
    visionslider.reset()
    interoceptionsslider.reset()
    // reset next2PANstim to account for continued clicks & clear times on/off
    next2PANstim.reset()
    // reset nose2PAN to account for continued clicks & clear times on/off
    nose2PAN.reset()
    psychoJS.experiment.addData('SentirES_psychopy.started', globalClock.getTime());
    SentirES_psychopyMaxDuration = null
    // keep track of which components have finished
    SentirES_psychopyComponents = [];
    SentirES_psychopyComponents.push(pregunta);
    SentirES_psychopyComponents.push(stimuli);
    SentirES_psychopyComponents.push(audition);
    SentirES_psychopyComponents.push(taste);
    SentirES_psychopyComponents.push(haptic);
    SentirES_psychopyComponents.push(olfaction);
    SentirES_psychopyComponents.push(vision);
    SentirES_psychopyComponents.push(interoception);
    SentirES_psychopyComponents.push(auditionslider);
    SentirES_psychopyComponents.push(tasteslider);
    SentirES_psychopyComponents.push(hapticslider);
    SentirES_psychopyComponents.push(olfactionslider);
    SentirES_psychopyComponents.push(visionslider);
    SentirES_psychopyComponents.push(interoceptionsslider);
    SentirES_psychopyComponents.push(next2PANstim);
    SentirES_psychopyComponents.push(nose2PAN);
    
    for (const thisComponent of SentirES_psychopyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function SentirES_psychopyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SentirES_psychopy' ---
    // get current time
    t = SentirES_psychopyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pregunta* updates
    if (t >= 0.0 && pregunta.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pregunta.tStart = t;  // (not accounting for frame time here)
      pregunta.frameNStart = frameN;  // exact frame index
      
      pregunta.setAutoDraw(true);
    }
    
    
    // *stimuli* updates
    if (t >= 0.0 && stimuli.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimuli.tStart = t;  // (not accounting for frame time here)
      stimuli.frameNStart = frameN;  // exact frame index
      
      stimuli.setAutoDraw(true);
    }
    
    
    // *audition* updates
    if (t >= 0.0 && audition.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      audition.tStart = t;  // (not accounting for frame time here)
      audition.frameNStart = frameN;  // exact frame index
      
      audition.setAutoDraw(true);
    }
    
    
    // *taste* updates
    if (t >= 0.0 && taste.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      taste.tStart = t;  // (not accounting for frame time here)
      taste.frameNStart = frameN;  // exact frame index
      
      taste.setAutoDraw(true);
    }
    
    
    // *haptic* updates
    if (t >= 0.0 && haptic.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      haptic.tStart = t;  // (not accounting for frame time here)
      haptic.frameNStart = frameN;  // exact frame index
      
      haptic.setAutoDraw(true);
    }
    
    
    // *olfaction* updates
    if (t >= 0.0 && olfaction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      olfaction.tStart = t;  // (not accounting for frame time here)
      olfaction.frameNStart = frameN;  // exact frame index
      
      olfaction.setAutoDraw(true);
    }
    
    
    // *vision* updates
    if (t >= 0.0 && vision.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vision.tStart = t;  // (not accounting for frame time here)
      vision.frameNStart = frameN;  // exact frame index
      
      vision.setAutoDraw(true);
    }
    
    
    // *interoception* updates
    if (t >= 0.0 && interoception.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      interoception.tStart = t;  // (not accounting for frame time here)
      interoception.frameNStart = frameN;  // exact frame index
      
      interoception.setAutoDraw(true);
    }
    
    
    // *auditionslider* updates
    if (t >= 0.0 && auditionslider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      auditionslider.tStart = t;  // (not accounting for frame time here)
      auditionslider.frameNStart = frameN;  // exact frame index
      
      auditionslider.setAutoDraw(true);
    }
    
    
    // *tasteslider* updates
    if (t >= 0.0 && tasteslider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tasteslider.tStart = t;  // (not accounting for frame time here)
      tasteslider.frameNStart = frameN;  // exact frame index
      
      tasteslider.setAutoDraw(true);
    }
    
    
    // *hapticslider* updates
    if (t >= 0.0 && hapticslider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hapticslider.tStart = t;  // (not accounting for frame time here)
      hapticslider.frameNStart = frameN;  // exact frame index
      
      hapticslider.setAutoDraw(true);
    }
    
    
    // *olfactionslider* updates
    if (t >= 0.0 && olfactionslider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      olfactionslider.tStart = t;  // (not accounting for frame time here)
      olfactionslider.frameNStart = frameN;  // exact frame index
      
      olfactionslider.setAutoDraw(true);
    }
    
    
    // *visionslider* updates
    if (t >= 0.0 && visionslider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      visionslider.tStart = t;  // (not accounting for frame time here)
      visionslider.frameNStart = frameN;  // exact frame index
      
      visionslider.setAutoDraw(true);
    }
    
    
    // *interoceptionsslider* updates
    if (t >= 0.0 && interoceptionsslider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      interoceptionsslider.tStart = t;  // (not accounting for frame time here)
      interoceptionsslider.frameNStart = frameN;  // exact frame index
      
      interoceptionsslider.setAutoDraw(true);
    }
    
    
    // *next2PANstim* updates
    if (t >= 0 && next2PANstim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next2PANstim.tStart = t;  // (not accounting for frame time here)
      next2PANstim.frameNStart = frameN;  // exact frame index
      
      next2PANstim.setAutoDraw(true);
    }
    
    if (next2PANstim.status === PsychoJS.Status.STARTED) {
      // check whether next2PANstim has been pressed
      if (next2PANstim.isClicked) {
        if (!next2PANstim.wasClicked) {
          // store time of first click
          next2PANstim.timesOn.push(next2PANstim.clock.getTime());
          // store time clicked until
          next2PANstim.timesOff.push(next2PANstim.clock.getTime());
        } else {
          // update time clicked until;
          next2PANstim.timesOff[next2PANstim.timesOff.length - 1] = next2PANstim.clock.getTime();
        }
        if (!next2PANstim.wasClicked) {
          // end routine when next2PANstim is clicked
          continueRoutine = false;
          
        }
        // if next2PANstim is still clicked next frame, it is not a new click
        next2PANstim.wasClicked = true;
      } else {
        // if next2PANstim is clicked next frame, it is a new click
        next2PANstim.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next2PANstim hasn't started / has finished
      next2PANstim.clock.reset();
      // if next2PANstim is clicked next frame, it is a new click
      next2PANstim.wasClicked = false;
    }
    
    // *nose2PAN* updates
    if (t >= 0 && nose2PAN.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nose2PAN.tStart = t;  // (not accounting for frame time here)
      nose2PAN.frameNStart = frameN;  // exact frame index
      
      nose2PAN.setAutoDraw(true);
    }
    
    if (nose2PAN.status === PsychoJS.Status.STARTED) {
      // check whether nose2PAN has been pressed
      if (nose2PAN.isClicked) {
        if (!nose2PAN.wasClicked) {
          // store time of first click
          nose2PAN.timesOn.push(nose2PAN.clock.getTime());
          // store time clicked until
          nose2PAN.timesOff.push(nose2PAN.clock.getTime());
        } else {
          // update time clicked until;
          nose2PAN.timesOff[nose2PAN.timesOff.length - 1] = nose2PAN.clock.getTime();
        }
        if (!nose2PAN.wasClicked) {
          // end routine when nose2PAN is clicked
          continueRoutine = false;
          
        }
        // if nose2PAN is still clicked next frame, it is not a new click
        nose2PAN.wasClicked = true;
      } else {
        // if nose2PAN is clicked next frame, it is a new click
        nose2PAN.wasClicked = false;
      }
    } else {
      // keep clock at 0 if nose2PAN hasn't started / has finished
      nose2PAN.clock.reset();
      // if nose2PAN is clicked next frame, it is a new click
      nose2PAN.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SentirES_psychopyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SentirES_psychopyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SentirES_psychopy' ---
    for (const thisComponent of SentirES_psychopyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('SentirES_psychopy.stopped', globalClock.getTime());
    psychoJS.experiment.addData('auditionslider.response', auditionslider.getRating());
    psychoJS.experiment.addData('auditionslider.rt', auditionslider.getRT());
    psychoJS.experiment.addData('tasteslider.response', tasteslider.getRating());
    psychoJS.experiment.addData('tasteslider.rt', tasteslider.getRT());
    psychoJS.experiment.addData('hapticslider.response', hapticslider.getRating());
    psychoJS.experiment.addData('hapticslider.rt', hapticslider.getRT());
    psychoJS.experiment.addData('olfactionslider.response', olfactionslider.getRating());
    psychoJS.experiment.addData('olfactionslider.rt', olfactionslider.getRT());
    psychoJS.experiment.addData('visionslider.response', visionslider.getRating());
    psychoJS.experiment.addData('visionslider.rt', visionslider.getRT());
    psychoJS.experiment.addData('interoceptionsslider.response', interoceptionsslider.getRating());
    psychoJS.experiment.addData('interoceptionsslider.rt', interoceptionsslider.getRT());
    psychoJS.experiment.addData('next2PANstim.numClicks', next2PANstim.numClicks);
    psychoJS.experiment.addData('next2PANstim.timesOn', next2PANstim.timesOn);
    psychoJS.experiment.addData('next2PANstim.timesOff', next2PANstim.timesOff);
    psychoJS.experiment.addData('nose2PAN.numClicks', nose2PAN.numClicks);
    psychoJS.experiment.addData('nose2PAN.timesOn', nose2PAN.timesOn);
    psychoJS.experiment.addData('nose2PAN.timesOff', nose2PAN.timesOff);
    // the Routine "SentirES_psychopy" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var catch2PAN1MaxDurationReached;
var catch2PAN1MaxDuration;
var catch2PAN1Components;
function catch2PAN1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'catch2PAN1' ---
    t = 0;
    catch2PAN1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    catch2PAN1MaxDurationReached = false;
    // update component parameters for each repeat
    // reset Oso to account for continued clicks & clear times on/off
    Oso.reset()
    // reset Pez to account for continued clicks & clear times on/off
    Pez.reset()
    // reset Ave to account for continued clicks & clear times on/off
    Ave.reset()
    psychoJS.experiment.addData('catch2PAN1.started', globalClock.getTime());
    catch2PAN1MaxDuration = null
    // keep track of which components have finished
    catch2PAN1Components = [];
    catch2PAN1Components.push(catch2PANanimal);
    catch2PAN1Components.push(Oso);
    catch2PAN1Components.push(Pez);
    catch2PAN1Components.push(Ave);
    
    for (const thisComponent of catch2PAN1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function catch2PAN1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'catch2PAN1' ---
    // get current time
    t = catch2PAN1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *catch2PANanimal* updates
    if (t >= 0.0 && catch2PANanimal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      catch2PANanimal.tStart = t;  // (not accounting for frame time here)
      catch2PANanimal.frameNStart = frameN;  // exact frame index
      
      catch2PANanimal.setAutoDraw(true);
    }
    
    
    // *Oso* updates
    if (t >= 0 && Oso.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Oso.tStart = t;  // (not accounting for frame time here)
      Oso.frameNStart = frameN;  // exact frame index
      
      Oso.setAutoDraw(true);
    }
    
    if (Oso.status === PsychoJS.Status.STARTED) {
      // check whether Oso has been pressed
      if (Oso.isClicked) {
        if (!Oso.wasClicked) {
          // store time of first click
          Oso.timesOn.push(Oso.clock.getTime());
          // store time clicked until
          Oso.timesOff.push(Oso.clock.getTime());
        } else {
          // update time clicked until;
          Oso.timesOff[Oso.timesOff.length - 1] = Oso.clock.getTime();
        }
        if (!Oso.wasClicked) {
          // end routine when Oso is clicked
          continueRoutine = false;
          
        }
        // if Oso is still clicked next frame, it is not a new click
        Oso.wasClicked = true;
      } else {
        // if Oso is clicked next frame, it is a new click
        Oso.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Oso hasn't started / has finished
      Oso.clock.reset();
      // if Oso is clicked next frame, it is a new click
      Oso.wasClicked = false;
    }
    
    // *Pez* updates
    if (t >= 0 && Pez.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pez.tStart = t;  // (not accounting for frame time here)
      Pez.frameNStart = frameN;  // exact frame index
      
      Pez.setAutoDraw(true);
    }
    
    if (Pez.status === PsychoJS.Status.STARTED) {
      // check whether Pez has been pressed
      if (Pez.isClicked) {
        if (!Pez.wasClicked) {
          // store time of first click
          Pez.timesOn.push(Pez.clock.getTime());
          // store time clicked until
          Pez.timesOff.push(Pez.clock.getTime());
        } else {
          // update time clicked until;
          Pez.timesOff[Pez.timesOff.length - 1] = Pez.clock.getTime();
        }
        if (!Pez.wasClicked) {
          // end routine when Pez is clicked
          continueRoutine = false;
          
        }
        // if Pez is still clicked next frame, it is not a new click
        Pez.wasClicked = true;
      } else {
        // if Pez is clicked next frame, it is a new click
        Pez.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Pez hasn't started / has finished
      Pez.clock.reset();
      // if Pez is clicked next frame, it is a new click
      Pez.wasClicked = false;
    }
    
    // *Ave* updates
    if (t >= 0 && Ave.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ave.tStart = t;  // (not accounting for frame time here)
      Ave.frameNStart = frameN;  // exact frame index
      
      Ave.setAutoDraw(true);
    }
    
    if (Ave.status === PsychoJS.Status.STARTED) {
      // check whether Ave has been pressed
      if (Ave.isClicked) {
        if (!Ave.wasClicked) {
          // store time of first click
          Ave.timesOn.push(Ave.clock.getTime());
          // store time clicked until
          Ave.timesOff.push(Ave.clock.getTime());
        } else {
          // update time clicked until;
          Ave.timesOff[Ave.timesOff.length - 1] = Ave.clock.getTime();
        }
        if (!Ave.wasClicked) {
          // end routine when Ave is clicked
          continueRoutine = false;
          
        }
        // if Ave is still clicked next frame, it is not a new click
        Ave.wasClicked = true;
      } else {
        // if Ave is clicked next frame, it is a new click
        Ave.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Ave hasn't started / has finished
      Ave.clock.reset();
      // if Ave is clicked next frame, it is a new click
      Ave.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of catch2PAN1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function catch2PAN1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'catch2PAN1' ---
    for (const thisComponent of catch2PAN1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('catch2PAN1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('Oso.numClicks', Oso.numClicks);
    psychoJS.experiment.addData('Oso.timesOn', Oso.timesOn);
    psychoJS.experiment.addData('Oso.timesOff', Oso.timesOff);
    psychoJS.experiment.addData('Pez.numClicks', Pez.numClicks);
    psychoJS.experiment.addData('Pez.timesOn', Pez.timesOn);
    psychoJS.experiment.addData('Pez.timesOff', Pez.timesOff);
    psychoJS.experiment.addData('Ave.numClicks', Ave.numClicks);
    psychoJS.experiment.addData('Ave.timesOn', Ave.timesOn);
    psychoJS.experiment.addData('Ave.timesOff', Ave.timesOff);
    // the Routine "catch2PAN1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var catch2SPAN2MaxDurationReached;
var catch2SPAN2MaxDuration;
var catch2SPAN2Components;
function catch2SPAN2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'catch2SPAN2' ---
    t = 0;
    catch2SPAN2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    catch2SPAN2MaxDurationReached = false;
    // update component parameters for each repeat
    // reset quinze to account for continued clicks & clear times on/off
    quinze.reset()
    // reset setentaydos to account for continued clicks & clear times on/off
    setentaydos.reset()
    // reset cien to account for continued clicks & clear times on/off
    cien.reset()
    psychoJS.experiment.addData('catch2SPAN2.started', globalClock.getTime());
    catch2SPAN2MaxDuration = null
    // keep track of which components have finished
    catch2SPAN2Components = [];
    catch2SPAN2Components.push(catch2PANmates);
    catch2SPAN2Components.push(quinze);
    catch2SPAN2Components.push(setentaydos);
    catch2SPAN2Components.push(cien);
    
    for (const thisComponent of catch2SPAN2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function catch2SPAN2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'catch2SPAN2' ---
    // get current time
    t = catch2SPAN2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *catch2PANmates* updates
    if (t >= 0.0 && catch2PANmates.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      catch2PANmates.tStart = t;  // (not accounting for frame time here)
      catch2PANmates.frameNStart = frameN;  // exact frame index
      
      catch2PANmates.setAutoDraw(true);
    }
    
    
    // *quinze* updates
    if (t >= 0 && quinze.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      quinze.tStart = t;  // (not accounting for frame time here)
      quinze.frameNStart = frameN;  // exact frame index
      
      quinze.setAutoDraw(true);
    }
    
    if (quinze.status === PsychoJS.Status.STARTED) {
      // check whether quinze has been pressed
      if (quinze.isClicked) {
        if (!quinze.wasClicked) {
          // store time of first click
          quinze.timesOn.push(quinze.clock.getTime());
          // store time clicked until
          quinze.timesOff.push(quinze.clock.getTime());
        } else {
          // update time clicked until;
          quinze.timesOff[quinze.timesOff.length - 1] = quinze.clock.getTime();
        }
        if (!quinze.wasClicked) {
          // end routine when quinze is clicked
          continueRoutine = false;
          
        }
        // if quinze is still clicked next frame, it is not a new click
        quinze.wasClicked = true;
      } else {
        // if quinze is clicked next frame, it is a new click
        quinze.wasClicked = false;
      }
    } else {
      // keep clock at 0 if quinze hasn't started / has finished
      quinze.clock.reset();
      // if quinze is clicked next frame, it is a new click
      quinze.wasClicked = false;
    }
    
    // *setentaydos* updates
    if (t >= 0 && setentaydos.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      setentaydos.tStart = t;  // (not accounting for frame time here)
      setentaydos.frameNStart = frameN;  // exact frame index
      
      setentaydos.setAutoDraw(true);
    }
    
    if (setentaydos.status === PsychoJS.Status.STARTED) {
      // check whether setentaydos has been pressed
      if (setentaydos.isClicked) {
        if (!setentaydos.wasClicked) {
          // store time of first click
          setentaydos.timesOn.push(setentaydos.clock.getTime());
          // store time clicked until
          setentaydos.timesOff.push(setentaydos.clock.getTime());
        } else {
          // update time clicked until;
          setentaydos.timesOff[setentaydos.timesOff.length - 1] = setentaydos.clock.getTime();
        }
        if (!setentaydos.wasClicked) {
          // end routine when setentaydos is clicked
          continueRoutine = false;
          
        }
        // if setentaydos is still clicked next frame, it is not a new click
        setentaydos.wasClicked = true;
      } else {
        // if setentaydos is clicked next frame, it is a new click
        setentaydos.wasClicked = false;
      }
    } else {
      // keep clock at 0 if setentaydos hasn't started / has finished
      setentaydos.clock.reset();
      // if setentaydos is clicked next frame, it is a new click
      setentaydos.wasClicked = false;
    }
    
    // *cien* updates
    if (t >= 0 && cien.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cien.tStart = t;  // (not accounting for frame time here)
      cien.frameNStart = frameN;  // exact frame index
      
      cien.setAutoDraw(true);
    }
    
    if (cien.status === PsychoJS.Status.STARTED) {
      // check whether cien has been pressed
      if (cien.isClicked) {
        if (!cien.wasClicked) {
          // store time of first click
          cien.timesOn.push(cien.clock.getTime());
          // store time clicked until
          cien.timesOff.push(cien.clock.getTime());
        } else {
          // update time clicked until;
          cien.timesOff[cien.timesOff.length - 1] = cien.clock.getTime();
        }
        if (!cien.wasClicked) {
          // end routine when cien is clicked
          continueRoutine = false;
          
        }
        // if cien is still clicked next frame, it is not a new click
        cien.wasClicked = true;
      } else {
        // if cien is clicked next frame, it is a new click
        cien.wasClicked = false;
      }
    } else {
      // keep clock at 0 if cien hasn't started / has finished
      cien.clock.reset();
      // if cien is clicked next frame, it is a new click
      cien.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of catch2SPAN2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function catch2SPAN2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'catch2SPAN2' ---
    for (const thisComponent of catch2SPAN2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('catch2SPAN2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('quinze.numClicks', quinze.numClicks);
    psychoJS.experiment.addData('quinze.timesOn', quinze.timesOn);
    psychoJS.experiment.addData('quinze.timesOff', quinze.timesOff);
    psychoJS.experiment.addData('setentaydos.numClicks', setentaydos.numClicks);
    psychoJS.experiment.addData('setentaydos.timesOn', setentaydos.timesOn);
    psychoJS.experiment.addData('setentaydos.timesOff', setentaydos.timesOff);
    psychoJS.experiment.addData('cien.numClicks', cien.numClicks);
    psychoJS.experiment.addData('cien.timesOn', cien.timesOn);
    psychoJS.experiment.addData('cien.timesOff', cien.timesOff);
    // the Routine "catch2SPAN2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var break2PANMaxDurationReached;
var break2PANMaxDuration;
var break2PANComponents;
function break2PANRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'break2PAN' ---
    t = 0;
    break2PANClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    break2PANMaxDurationReached = false;
    // update component parameters for each repeat
    // reset next2PANbreak to account for continued clicks & clear times on/off
    next2PANbreak.reset()
    psychoJS.experiment.addData('break2PAN.started', globalClock.getTime());
    break2PANMaxDuration = null
    // keep track of which components have finished
    break2PANComponents = [];
    break2PANComponents.push(SentirESbreak);
    break2PANComponents.push(next2PANbreak);
    
    for (const thisComponent of break2PANComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function break2PANRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'break2PAN' ---
    // get current time
    t = break2PANClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *SentirESbreak* updates
    if (t >= 0.0 && SentirESbreak.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SentirESbreak.tStart = t;  // (not accounting for frame time here)
      SentirESbreak.frameNStart = frameN;  // exact frame index
      
      SentirESbreak.setAutoDraw(true);
    }
    
    
    // *next2PANbreak* updates
    if (t >= 0 && next2PANbreak.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next2PANbreak.tStart = t;  // (not accounting for frame time here)
      next2PANbreak.frameNStart = frameN;  // exact frame index
      
      next2PANbreak.setAutoDraw(true);
    }
    
    if (next2PANbreak.status === PsychoJS.Status.STARTED) {
      // check whether next2PANbreak has been pressed
      if (next2PANbreak.isClicked) {
        if (!next2PANbreak.wasClicked) {
          // store time of first click
          next2PANbreak.timesOn.push(next2PANbreak.clock.getTime());
          // store time clicked until
          next2PANbreak.timesOff.push(next2PANbreak.clock.getTime());
        } else {
          // update time clicked until;
          next2PANbreak.timesOff[next2PANbreak.timesOff.length - 1] = next2PANbreak.clock.getTime();
        }
        if (!next2PANbreak.wasClicked) {
          // end routine when next2PANbreak is clicked
          continueRoutine = false;
          
        }
        // if next2PANbreak is still clicked next frame, it is not a new click
        next2PANbreak.wasClicked = true;
      } else {
        // if next2PANbreak is clicked next frame, it is a new click
        next2PANbreak.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next2PANbreak hasn't started / has finished
      next2PANbreak.clock.reset();
      // if next2PANbreak is clicked next frame, it is a new click
      next2PANbreak.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of break2PANComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break2PANRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'break2PAN' ---
    for (const thisComponent of break2PANComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('break2PAN.stopped', globalClock.getTime());
    psychoJS.experiment.addData('next2PANbreak.numClicks', next2PANbreak.numClicks);
    psychoJS.experiment.addData('next2PANbreak.timesOn', next2PANbreak.timesOn);
    psychoJS.experiment.addData('next2PANbreak.timesOff', next2PANbreak.timesOff);
    // the Routine "break2PAN" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var catch2PAN3MaxDurationReached;
var catch2PAN3MaxDuration;
var catch2PAN3Components;
function catch2PAN3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'catch2PAN3' ---
    t = 0;
    catch2PAN3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    catch2PAN3MaxDurationReached = false;
    // update component parameters for each repeat
    // reset bocadillo to account for continued clicks & clear times on/off
    bocadillo.reset()
    // reset coliflor to account for continued clicks & clear times on/off
    coliflor.reset()
    // reset manzana to account for continued clicks & clear times on/off
    manzana.reset()
    psychoJS.experiment.addData('catch2PAN3.started', globalClock.getTime());
    catch2PAN3MaxDuration = null
    // keep track of which components have finished
    catch2PAN3Components = [];
    catch2PAN3Components.push(catch2PANfruta);
    catch2PAN3Components.push(bocadillo);
    catch2PAN3Components.push(coliflor);
    catch2PAN3Components.push(manzana);
    
    for (const thisComponent of catch2PAN3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function catch2PAN3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'catch2PAN3' ---
    // get current time
    t = catch2PAN3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *catch2PANfruta* updates
    if (t >= 0.0 && catch2PANfruta.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      catch2PANfruta.tStart = t;  // (not accounting for frame time here)
      catch2PANfruta.frameNStart = frameN;  // exact frame index
      
      catch2PANfruta.setAutoDraw(true);
    }
    
    
    // *bocadillo* updates
    if (t >= 0 && bocadillo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bocadillo.tStart = t;  // (not accounting for frame time here)
      bocadillo.frameNStart = frameN;  // exact frame index
      
      bocadillo.setAutoDraw(true);
    }
    
    if (bocadillo.status === PsychoJS.Status.STARTED) {
      // check whether bocadillo has been pressed
      if (bocadillo.isClicked) {
        if (!bocadillo.wasClicked) {
          // store time of first click
          bocadillo.timesOn.push(bocadillo.clock.getTime());
          // store time clicked until
          bocadillo.timesOff.push(bocadillo.clock.getTime());
        } else {
          // update time clicked until;
          bocadillo.timesOff[bocadillo.timesOff.length - 1] = bocadillo.clock.getTime();
        }
        if (!bocadillo.wasClicked) {
          // end routine when bocadillo is clicked
          continueRoutine = false;
          
        }
        // if bocadillo is still clicked next frame, it is not a new click
        bocadillo.wasClicked = true;
      } else {
        // if bocadillo is clicked next frame, it is a new click
        bocadillo.wasClicked = false;
      }
    } else {
      // keep clock at 0 if bocadillo hasn't started / has finished
      bocadillo.clock.reset();
      // if bocadillo is clicked next frame, it is a new click
      bocadillo.wasClicked = false;
    }
    
    // *coliflor* updates
    if (t >= 0 && coliflor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      coliflor.tStart = t;  // (not accounting for frame time here)
      coliflor.frameNStart = frameN;  // exact frame index
      
      coliflor.setAutoDraw(true);
    }
    
    if (coliflor.status === PsychoJS.Status.STARTED) {
      // check whether coliflor has been pressed
      if (coliflor.isClicked) {
        if (!coliflor.wasClicked) {
          // store time of first click
          coliflor.timesOn.push(coliflor.clock.getTime());
          // store time clicked until
          coliflor.timesOff.push(coliflor.clock.getTime());
        } else {
          // update time clicked until;
          coliflor.timesOff[coliflor.timesOff.length - 1] = coliflor.clock.getTime();
        }
        if (!coliflor.wasClicked) {
          // end routine when coliflor is clicked
          continueRoutine = false;
          
        }
        // if coliflor is still clicked next frame, it is not a new click
        coliflor.wasClicked = true;
      } else {
        // if coliflor is clicked next frame, it is a new click
        coliflor.wasClicked = false;
      }
    } else {
      // keep clock at 0 if coliflor hasn't started / has finished
      coliflor.clock.reset();
      // if coliflor is clicked next frame, it is a new click
      coliflor.wasClicked = false;
    }
    
    // *manzana* updates
    if (t >= 0 && manzana.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      manzana.tStart = t;  // (not accounting for frame time here)
      manzana.frameNStart = frameN;  // exact frame index
      
      manzana.setAutoDraw(true);
    }
    
    if (manzana.status === PsychoJS.Status.STARTED) {
      // check whether manzana has been pressed
      if (manzana.isClicked) {
        if (!manzana.wasClicked) {
          // store time of first click
          manzana.timesOn.push(manzana.clock.getTime());
          // store time clicked until
          manzana.timesOff.push(manzana.clock.getTime());
        } else {
          // update time clicked until;
          manzana.timesOff[manzana.timesOff.length - 1] = manzana.clock.getTime();
        }
        if (!manzana.wasClicked) {
          // end routine when manzana is clicked
          continueRoutine = false;
          
        }
        // if manzana is still clicked next frame, it is not a new click
        manzana.wasClicked = true;
      } else {
        // if manzana is clicked next frame, it is a new click
        manzana.wasClicked = false;
      }
    } else {
      // keep clock at 0 if manzana hasn't started / has finished
      manzana.clock.reset();
      // if manzana is clicked next frame, it is a new click
      manzana.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of catch2PAN3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function catch2PAN3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'catch2PAN3' ---
    for (const thisComponent of catch2PAN3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('catch2PAN3.stopped', globalClock.getTime());
    psychoJS.experiment.addData('bocadillo.numClicks', bocadillo.numClicks);
    psychoJS.experiment.addData('bocadillo.timesOn', bocadillo.timesOn);
    psychoJS.experiment.addData('bocadillo.timesOff', bocadillo.timesOff);
    psychoJS.experiment.addData('coliflor.numClicks', coliflor.numClicks);
    psychoJS.experiment.addData('coliflor.timesOn', coliflor.timesOn);
    psychoJS.experiment.addData('coliflor.timesOff', coliflor.timesOff);
    psychoJS.experiment.addData('manzana.numClicks', manzana.numClicks);
    psychoJS.experiment.addData('manzana.timesOn', manzana.timesOn);
    psychoJS.experiment.addData('manzana.timesOff', manzana.timesOff);
    // the Routine "catch2PAN3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var debriefing_2MaxDurationReached;
var debriefing_2MaxDuration;
var debriefing_2Components;
function debriefing_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'debriefing_2' ---
    t = 0;
    debriefing_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    debriefing_2MaxDurationReached = false;
    // update component parameters for each repeat
    // reset next to account for continued clicks & clear times on/off
    next.reset()
    psychoJS.experiment.addData('debriefing_2.started', globalClock.getTime());
    debriefing_2MaxDuration = null
    // keep track of which components have finished
    debriefing_2Components = [];
    debriefing_2Components.push(debriefing_3);
    debriefing_2Components.push(contact);
    debriefing_2Components.push(next);
    
    for (const thisComponent of debriefing_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function debriefing_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'debriefing_2' ---
    // get current time
    t = debriefing_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *debriefing_3* updates
    if (t >= 0.0 && debriefing_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debriefing_3.tStart = t;  // (not accounting for frame time here)
      debriefing_3.frameNStart = frameN;  // exact frame index
      
      debriefing_3.setAutoDraw(true);
    }
    
    
    // *contact* updates
    if (t >= 0.0 && contact.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contact.tStart = t;  // (not accounting for frame time here)
      contact.frameNStart = frameN;  // exact frame index
      
      contact.setAutoDraw(true);
    }
    
    
    // *next* updates
    if (t >= 0 && next.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next.tStart = t;  // (not accounting for frame time here)
      next.frameNStart = frameN;  // exact frame index
      
      next.setAutoDraw(true);
    }
    
    if (next.status === PsychoJS.Status.STARTED) {
      // check whether next has been pressed
      if (next.isClicked) {
        if (!next.wasClicked) {
          // store time of first click
          next.timesOn.push(next.clock.getTime());
          // store time clicked until
          next.timesOff.push(next.clock.getTime());
        } else {
          // update time clicked until;
          next.timesOff[next.timesOff.length - 1] = next.clock.getTime();
        }
        if (!next.wasClicked) {
          // end routine when next is clicked
          continueRoutine = false;
          
        }
        // if next is still clicked next frame, it is not a new click
        next.wasClicked = true;
      } else {
        // if next is clicked next frame, it is a new click
        next.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next hasn't started / has finished
      next.clock.reset();
      // if next is clicked next frame, it is a new click
      next.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of debriefing_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function debriefing_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'debriefing_2' ---
    for (const thisComponent of debriefing_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('debriefing_2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('next.numClicks', next.numClicks);
    psychoJS.experiment.addData('next.timesOn', next.timesOn);
    psychoJS.experiment.addData('next.timesOff', next.timesOff);
    // the Routine "debriefing_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var finMaxDurationReached;
var finMaxDuration;
var finComponents;
function finRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fin' ---
    t = 0;
    finClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    finMaxDurationReached = false;
    // update component parameters for each repeat
    // reset fin2PAN to account for continued clicks & clear times on/off
    fin2PAN.reset()
    psychoJS.experiment.addData('fin.started', globalClock.getTime());
    finMaxDuration = null
    // keep track of which components have finished
    finComponents = [];
    finComponents.push(fin_y);
    finComponents.push(fin2PAN);
    
    for (const thisComponent of finComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function finRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fin' ---
    // get current time
    t = finClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fin_y* updates
    if (t >= 0.0 && fin_y.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fin_y.tStart = t;  // (not accounting for frame time here)
      fin_y.frameNStart = frameN;  // exact frame index
      
      fin_y.setAutoDraw(true);
    }
    
    
    // *fin2PAN* updates
    if (t >= 0 && fin2PAN.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fin2PAN.tStart = t;  // (not accounting for frame time here)
      fin2PAN.frameNStart = frameN;  // exact frame index
      
      fin2PAN.setAutoDraw(true);
    }
    
    if (fin2PAN.status === PsychoJS.Status.STARTED) {
      // check whether fin2PAN has been pressed
      if (fin2PAN.isClicked) {
        if (!fin2PAN.wasClicked) {
          // store time of first click
          fin2PAN.timesOn.push(fin2PAN.clock.getTime());
          // store time clicked until
          fin2PAN.timesOff.push(fin2PAN.clock.getTime());
        } else {
          // update time clicked until;
          fin2PAN.timesOff[fin2PAN.timesOff.length - 1] = fin2PAN.clock.getTime();
        }
        if (!fin2PAN.wasClicked) {
          // end routine when fin2PAN is clicked
          continueRoutine = false;
          
        }
        // if fin2PAN is still clicked next frame, it is not a new click
        fin2PAN.wasClicked = true;
      } else {
        // if fin2PAN is clicked next frame, it is a new click
        fin2PAN.wasClicked = false;
      }
    } else {
      // keep clock at 0 if fin2PAN hasn't started / has finished
      fin2PAN.clock.reset();
      // if fin2PAN is clicked next frame, it is a new click
      fin2PAN.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of finComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fin' ---
    for (const thisComponent of finComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fin.stopped', globalClock.getTime());
    psychoJS.experiment.addData('fin2PAN.numClicks', fin2PAN.numClicks);
    psychoJS.experiment.addData('fin2PAN.timesOn', fin2PAN.timesOn);
    psychoJS.experiment.addData('fin2PAN.timesOff', fin2PAN.timesOff);
    // the Routine "fin" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
