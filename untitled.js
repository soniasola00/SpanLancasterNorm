/***************** 
 * Untitled *
 *****************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'untitled';  // from the Builder filename that created this script
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
flowScheduler.add(consent_2RoutineBegin());
flowScheduler.add(consent_2RoutineEachFrame());
flowScheduler.add(consent_2RoutineEnd());
flowScheduler.add(consent_3RoutineBegin());
flowScheduler.add(consent_3RoutineEachFrame());
flowScheduler.add(consent_3RoutineEnd());
flowScheduler.add(consent_acceptRoutineBegin());
flowScheduler.add(consent_acceptRoutineEachFrame());
flowScheduler.add(consent_acceptRoutineEnd());
flowScheduler.add(fine_printRoutineBegin());
flowScheduler.add(fine_printRoutineEachFrame());
flowScheduler.add(fine_printRoutineEnd());
flowScheduler.add(brief_descriptionRoutineBegin());
flowScheduler.add(brief_descriptionRoutineEachFrame());
flowScheduler.add(brief_descriptionRoutineEnd());
flowScheduler.add(experimentRoutineBegin());
flowScheduler.add(experimentRoutineEachFrame());
flowScheduler.add(experimentRoutineEnd());
flowScheduler.add(instructions3NGRoutineBegin());
flowScheduler.add(instructions3NGRoutineEachFrame());
flowScheduler.add(instructions3NGRoutineEnd());
const SentirENG19LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(SentirENG19LoopBegin(SentirENG19LoopScheduler));
flowScheduler.add(SentirENG19LoopScheduler);
flowScheduler.add(SentirENG19LoopEnd);


flowScheduler.add(catch3NG1RoutineBegin());
flowScheduler.add(catch3NG1RoutineEachFrame());
flowScheduler.add(catch3NG1RoutineEnd());
const SentirENG45LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(SentirENG45LoopBegin(SentirENG45LoopScheduler));
flowScheduler.add(SentirENG45LoopScheduler);
flowScheduler.add(SentirENG45LoopEnd);


flowScheduler.add(catch3NG2RoutineBegin());
flowScheduler.add(catch3NG2RoutineEachFrame());
flowScheduler.add(catch3NG2RoutineEnd());
flowScheduler.add(break3NGRoutineBegin());
flowScheduler.add(break3NGRoutineEachFrame());
flowScheduler.add(break3NGRoutineEnd());
const SentirENG78LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(SentirENG78LoopBegin(SentirENG78LoopScheduler));
flowScheduler.add(SentirENG78LoopScheduler);
flowScheduler.add(SentirENG78LoopEnd);


flowScheduler.add(catch3NG3RoutineBegin());
flowScheduler.add(catch3NG3RoutineEachFrame());
flowScheduler.add(catch3NG3RoutineEnd());
const SentirENG80LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(SentirENG80LoopBegin(SentirENG80LoopScheduler));
flowScheduler.add(SentirENG80LoopScheduler);
flowScheduler.add(SentirENG80LoopEnd);


flowScheduler.add(debriefing_2RoutineBegin());
flowScheduler.add(debriefing_2RoutineEachFrame());
flowScheduler.add(debriefing_2RoutineEnd());
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'stimENG/Stimuli3ENG19.csv', 'path': 'stimENG/Stimuli3ENG19.csv'},
    {'name': 'stimENG/Stimuli3ENG45.csv', 'path': 'stimENG/Stimuli3ENG45.csv'},
    {'name': 'stimENG/Stimuli3ENG78.csv', 'path': 'stimENG/Stimuli3ENG78.csv'},
    {'name': 'stimENG/Stimuli3ENG80.csv', 'path': 'stimENG/Stimuli3ENG80.csv'},
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
  psychoJS.setRedirectUrls('https://app.prolific.com/submissions/complete?cc=C1HAIZYE', '');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var BCBLClock;
var presentation;
var Accept;
var BCBL_2;
var consent_1Clock;
var personaldata;
var personaldata_2;
var personaldata_3;
var personaldata_4;
var yesno;
var yesno_2;
var yesno_3;
var yesno_4;
var Continue;
var consent_2Clock;
var personaldata_5;
var personaldata_6;
var personaldata_7;
var personaldata_8;
var yesno_5;
var continue_2;
var consent_3Clock;
var personaldata_9;
var personaldata_10;
var personaldata_11;
var personaldata_12;
var continue_3;
var consent_acceptClock;
var infromed;
var infromed_2;
var accept;
var dontaccept;
var fine_printClock;
var fine_print_consent;
var iaccept_2;
var idontaccept_2;
var brief_descriptionClock;
var brief;
var continue_4;
var experimentClock;
var experiment_2;
var experiment_3;
var continue_5;
var instructions3NGClock;
var instructions3NGtext;
var next3NGintr;
var SentiENG_psychopyClock;
var question;
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
var interoceptionslider;
var nect3NGstim;
var donotknow3NG;
var catch3NG1Clock;
var catch3NGanimals;
var Bear;
var Fish;
var Bird;
var catch3NG2Clock;
var catch3NGmath;
var fifthteen;
var seventytwo;
var onehundred;
var break3NGClock;
var break3NG_2;
var next3NGbreak;
var catch3NG3Clock;
var catch3NGfruit;
var sandwich;
var cauliflower;
var apple;
var debriefing_2Clock;
var debriefing_4;
var contact;
var next;
var endClock;
var end_y;
var end3NG;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "BCBL"
  BCBLClock = new util.Clock();
  presentation = new visual.TextStim({
    win: psychoJS.window,
    name: 'presentation',
    text: 'Thank you for participating in the SentirENG.\n\nThe Basque Center on Cognition, Brain and Language is a world class interdisciplinary research center for the study of cognition, brain and language. Visit our website (www.bcbl.eu) and follow us on social media such as Facebook (@bcbl.eu), Instagram (bcbl_basque_center), Twitter (@bcbl_) and YouTube (BCBL) to keep up with all the news of our center as well as of the field of cognitive neuroscience.\n',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  Accept = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Accept',
    text: 'Accept',
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
  Accept.clock = new util.Clock();
  
  BCBL_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'BCBL_2', units : undefined, 
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
    text: 'If the participant consents to participate in this study, the participant will be compensated through Prolific.\n',
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
    text: 'Following the rules and regulations of Prolific, once the participant’s responses are approved by the experimenter, the participant will be paid the amount indicated in the listing. Approval is granted if the participant follows the instructions and responds within the time-frame specified for the experiment.',
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
    text: 'The experiment in this study involves one session that will last approximately 40 minutes. The length of time that the participant spends in this study will depend on the number of sessions, the length of the waiting period, and the rate at which the participant completes the tasks.',
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
    text: 'The participation in this study is voluntary. It can be stopped at any time by closing the survey browser window. Failing to complete this study, does not prevent the participant from participating in future studies we may offer, but the participant will not be compensated for the participation in the current study.',
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
    labels: ["Accept", "Don't Accept"], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  yesno_2 = new visual.Slider({
    win: psychoJS.window, name: 'yesno_2',
    startValue: undefined,
    size: [0.1, 0.03], pos: [(- 0.7), 0.2], ori: 0.0, units: 'height',
    labels: ["Accept", "Don't Accept"], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  yesno_3 = new visual.Slider({
    win: psychoJS.window, name: 'yesno_3',
    startValue: undefined,
    size: [0.1, 0.03], pos: [(- 0.7), (- 0.1)], ori: 0.0, units: 'height',
    labels: ["Accept", "Don't Accept"], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  yesno_4 = new visual.Slider({
    win: psychoJS.window, name: 'yesno_4',
    startValue: undefined,
    size: [0.1, 0.03], pos: [(- 0.7), (- 0.3)], ori: 0.0, units: 'height',
    labels: ["Accept", "Don't Accept"], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -7, 
    flip: false,
  });
  
  Continue = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Continue',
    text: 'Accept',
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
  Continue.clock = new util.Clock();
  
  // Initialize components for Routine "consent_2"
  consent_2Clock = new util.Clock();
  personaldata_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'personaldata_5',
    text: 'This research study is being conducted by The Basque Center on Cognition Brain and Language (www.bcbl.eu) and has been approved by the BCBL ethics committee. By clicking “Accept”, the participant consents to the information above and agrees to participate in the research study.',
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
    text: 'The participant allows BCBL to use the data obtained in scientific articles and presentations at conferences, based on this study or external publications derived from it, as well as to be disseminated in open access repositories, always in full confidentiality, to ensure the reproducibility of the study. See below (further information about open access repositories):',
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
    text: 'We will keep the participant’s personal data (name, contact information etc.) in a secure location.',
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
    text: 'The data shared with the general public will not have the participant’s name on it, only a code number, any other information that the centre considers might make the participant identifiable will not be shared.',
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
    labels: ["Accept", "Don't Accept"], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  continue_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'continue_2',
    text: 'Accept',
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
  continue_2.clock = new util.Clock();
  
  // Initialize components for Routine "consent_3"
  consent_3Clock = new util.Clock();
  personaldata_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'personaldata_9',
    text: 'The data and samples from this study could be used for other future research projects and shared with researchers from other international institutions, in addition to the study you are currently participating in. Such future projects could focus on any other topic unrelated to the objectives of this study.',
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
    text: 'Access to the data collected in this study, including images and voice recordings, will be made available through public domain repositories.',
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
    text: 'Any data or research results that have already been shared with other researchers or in the public domain may not be destroyed or removed.',
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
    text: 'Also, the risk of a security breach (cyber attack) that could cause someone to relate the participant with the data is very low, as the data is stored in a secure database, and the information is codified and stored separately.',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.3)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -3.0 
  });
  
  continue_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'continue_3',
    text: 'Accept',
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
  continue_3.clock = new util.Clock();
  
  // Initialize components for Routine "consent_accept"
  consent_acceptClock = new util.Clock();
  infromed = new visual.TextStim({
    win: psychoJS.window,
    name: 'infromed',
    text: 'In case of any questions, please contact the study researcher Dr. Clara Martin by email  cmartin@bcbl.eu. Thank you for participating in this survey.\n',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.4], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  infromed_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'infromed_2',
    text: 'I have read the above and I acknowledge that I have been informed in detail through an ADDITIONAL INFORMATION SHEET about the study I will participate in on a voluntary basis, I have understood its aim as well as what the technique/s used in this experiments involve, and I have had the opportunity to address any questions I have about the study.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  accept = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'accept',
    text: 'Accept',
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
  accept.clock = new util.Clock();
  
  dontaccept = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'dontaccept',
    text: "Don't Accept",
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.4, (- 0.4)],
    letterHeight: 0.03,
    size: [0.3, 0.2],
    ori: 0.0
    ,
    depth: -3
  });
  dontaccept.clock = new util.Clock();
  
  // Initialize components for Routine "fine_print"
  fine_printClock = new util.Clock();
  fine_print_consent = new visual.TextStim({
    win: psychoJS.window,
    name: 'fine_print_consent',
    text: 'We inform you that your personal data, or the data of the person you represent, will be processed and incorporated into files owned by the BCBL, for their use in the management and administration of the center and in studies on cognition, brain and language, as well as for sending information on the previous purposes by any means. The consent of the person concerned will legitimize the proces sing of data. These data will be kept indefinitely and may be granted, anonymously, to institutions or individuals with similar purposes, except for the legally established provisions.\n\nWe inform you that you have the right to access, amend, delete or port your data, limit their processing, revoke your consent or not to be subject to decisions based on automated processing, in accordance with the (EU) 2016/679 Regulation and the Organic Act 3/2018 of December 5 on the Protection of Personal Data and Guarantee of Digital Rights by sending an e-mail to info@bcbl.eu or by writing to the Personal Data Processing Representative to the following address, Paseo Mikeletegi, 69 – 2o - 20009 SAN SEBASTIAN, enclosing a copy of your ID.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  iaccept_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'iaccept_2',
    text: 'Accept',
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
  iaccept_2.clock = new util.Clock();
  
  idontaccept_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'idontaccept_2',
    text: "Don't Accept",
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.4, (- 0.4)],
    letterHeight: 0.03,
    size: [0.3, 0.2],
    ori: 0.0
    ,
    depth: -2
  });
  idontaccept_2.clock = new util.Clock();
  
  // Initialize components for Routine "brief_description"
  brief_descriptionClock = new util.Clock();
  brief = new visual.TextStim({
    win: psychoJS.window,
    name: 'brief',
    text: 'SentirES: Thank you for participating in this project! Please, read carefully the information below and do not hesitate to ask if you have any questions. Thank you very much!\n\nThis study is concerned with  the differences in how native Spanish and English speakers corperaly engage with  commonly used language. Cross-culturally our languages shape our environment and vice-versa. This has yet to be investigated between two languages. \n\nIf you would like to know more about this study or have any concerns please reach out to the primary invigilators: Clara Martin or Cesar Caballero-Gaudes at the BCBL. \n\n',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  continue_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'continue_4',
    text: 'Accept',
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
  continue_4.clock = new util.Clock();
  
  // Initialize components for Routine "experiment"
  experimentClock = new util.Clock();
  experiment_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'experiment_2',
    text: 'You will now begin the study, which will last approximately 40 minutes and the compensation will be of 6 pounds. Please, once the test has started, it is important to carry out the study all the way through and avoid distractions (mobile phone, noise, getting up, etc.). As a way to ensure that the online task has been performed adequately, you might be asked to answer some questions unrelated to the current research. These UNRELATED questions will help researchers know if you are paying enough attention and performing the online experiment in the appropriate way. Once the task is completed, a committee of researchers will check the reliability of the data and, in case of suspicion of fraudulent performance (i.e., UNRELATED questions are not consistently responded to accurately), this could lead to your exclusion from the study as well as the cancellation of financial compensation.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  experiment_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'experiment_3',
    text: '\nBefore doing the experiment, YOU SHOULD TAKE INTO ACCOUNT:\n- You need to have a keyboard and a mouse. \n- You should use Firefox or Chrome.\n-You have to do the task using a computer, Mac or PC.',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.2)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  continue_5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'continue_5',
    text: 'Accept',
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
  continue_5.clock = new util.Clock();
  
  // Initialize components for Routine "instructions3NG"
  instructions3NGClock = new util.Clock();
  instructions3NGtext = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions3NGtext',
    text: 'INSTRUCTIONS\nYou will be asked to rate how much you experience everyday concepts using six different perceptual senses. There are no right or wrong answers so please use your own judgement. The rating scale runs from 0 (not experienced at all with that sense) to 5 (experienced greatly with that sense). Click on a number to select a rating for each scale, then click on the Next button to move on the next item.\n\nIf you do not know the meaning of a word, just check the “Don’t know the meaning of this word" box and click "NEXT" to move onto the next item.\n\nIf you want to know more about this study please contact the principle researchers: Clara Martin o Cesar Caballero-Gaudes in the BCBL. \n',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  next3NGintr = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next3NGintr',
    text: 'Next',
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
  next3NGintr.clock = new util.Clock();
  
  // Initialize components for Routine "SentiENG_psychopy"
  SentiENG_psychopyClock = new util.Clock();
  question = new visual.TextStim({
    win: psychoJS.window,
    name: 'question',
    text: 'To what extent do you experience',
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
    text: 'by hearing',
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
    text: 'by tasting',
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
    text: 'by feeling through touch',
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
    text: 'by smelling',
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
    text: 'by seeing',
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
    text: 'by internal bodidly\nsensations',
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
    labels: ["nothing", "totally"], fontSize: 0.02, ticks: [0, 1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: 1.0, fontFamily: 'Arial', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  tasteslider = new visual.Slider({
    win: psychoJS.window, name: 'tasteslider',
    startValue: undefined,
    size: [0.7, 0.05], pos: [0, 0.1], ori: 0.0, units: 'height',
    labels: ["nothing", "totally"], fontSize: 0.02, ticks: [0, 1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: 1.0, fontFamily: 'Arial', bold: true, italic: false, depth: -9, 
    flip: false,
  });
  
  hapticslider = new visual.Slider({
    win: psychoJS.window, name: 'hapticslider',
    startValue: undefined,
    size: [0.7, 0.05], pos: [0, 0], ori: 0.0, units: 'height',
    labels: ["nothing", "totally"], fontSize: 0.02, ticks: [0, 1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: 1.0, fontFamily: 'Arial', bold: true, italic: false, depth: -10, 
    flip: false,
  });
  
  olfactionslider = new visual.Slider({
    win: psychoJS.window, name: 'olfactionslider',
    startValue: undefined,
    size: [0.7, 0.05], pos: [0, (- 0.1)], ori: 0.0, units: 'height',
    labels: ["nothing", "totally"], fontSize: 0.02, ticks: [0, 1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: 1.0, fontFamily: 'Arial', bold: true, italic: false, depth: -11, 
    flip: false,
  });
  
  visionslider = new visual.Slider({
    win: psychoJS.window, name: 'visionslider',
    startValue: undefined,
    size: [0.7, 0.05], pos: [0, (- 0.2)], ori: 0.0, units: 'height',
    labels: ["nothing", "totally"], fontSize: 0.02, ticks: [0, 1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -12, 
    flip: false,
  });
  
  interoceptionslider = new visual.Slider({
    win: psychoJS.window, name: 'interoceptionslider',
    startValue: undefined,
    size: [0.7, 0.05], pos: [0, (- 0.3)], ori: 0.0, units: 'height',
    labels: ["nothing", "totally"], fontSize: 0.02, ticks: [0, 1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -13, 
    flip: false,
  });
  
  nect3NGstim = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'nect3NGstim',
    text: 'Next',
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
  nect3NGstim.clock = new util.Clock();
  
  donotknow3NG = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'donotknow3NG',
    text: 'do not know this word',
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
  donotknow3NG.clock = new util.Clock();
  
  // Initialize components for Routine "catch3NG1"
  catch3NG1Clock = new util.Clock();
  catch3NGanimals = new visual.TextStim({
    win: psychoJS.window,
    name: 'catch3NGanimals',
    text: 'Click on the animal that flies.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.3], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  Bear = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Bear',
    text: 'Bear',
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
  Bear.clock = new util.Clock();
  
  Fish = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Fish',
    text: 'Fish',
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
  Fish.clock = new util.Clock();
  
  Bird = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Bird',
    text: 'Bird',
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
  Bird.clock = new util.Clock();
  
  // Initialize components for Routine "catch3NG2"
  catch3NG2Clock = new util.Clock();
  catch3NGmath = new visual.TextStim({
    win: psychoJS.window,
    name: 'catch3NGmath',
    text: 'What is 5 x 3?',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.3], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  fifthteen = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'fifthteen',
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
  fifthteen.clock = new util.Clock();
  
  seventytwo = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'seventytwo',
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
  seventytwo.clock = new util.Clock();
  
  onehundred = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'onehundred',
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
  onehundred.clock = new util.Clock();
  
  // Initialize components for Routine "break3NG"
  break3NGClock = new util.Clock();
  break3NG_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'break3NG_2',
    text: 'If you need, you can take a short break now. Push "Next" to continue the experiment.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  next3NGbreak = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next3NGbreak',
    text: 'Next',
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
  next3NGbreak.clock = new util.Clock();
  
  // Initialize components for Routine "catch3NG3"
  catch3NG3Clock = new util.Clock();
  catch3NGfruit = new visual.TextStim({
    win: psychoJS.window,
    name: 'catch3NGfruit',
    text: 'Which of these is a fruit?',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.3], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  sandwich = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'sandwich',
    text: 'sandwich',
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
  sandwich.clock = new util.Clock();
  
  cauliflower = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'cauliflower',
    text: 'cauliflower',
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
  cauliflower.clock = new util.Clock();
  
  apple = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'apple',
    text: 'apple',
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
  apple.clock = new util.Clock();
  
  // Initialize components for Routine "debriefing_2"
  debriefing_2Clock = new util.Clock();
  debriefing_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'debriefing_4',
    text: 'This study is concerned with  the differences in how native Spanish and English speakers corperaly engage with  commonly used language. Cross-culturally our languages shape our environment and vice-versa. This has yet to be investigated between two languages. \nOur hypothesis is that we will find differences in the way monolingual native Spanish and English speakers rate the words in the survey. The survey you have just completed will help us form a representation of these two cultures.\nIn a constantly evolving world of technology and artificial intelligence, this study helps researchers ground the way language re-enacts sensations in our bodies. \nIf you would like to know more about this study or have any concerns please reach out to the primary invigilators: Clara Martin or Cesar Caballero-Gaudes at the BCBL. ',
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
    text: 'If you want to know more about the center that has designed this experiment, BCBL (Basque Center on Cognition, Brain and Language), visit our website (www.bcbl.eu) and follow us on social media such as Facebook (@bcbl.eu), Instagram (bcbl_basque_center), Twitter (@bcbl_) and YouTube (BCBL) to keep up with all the news of our center as well as of the field of cognitive neuroscience.',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.2)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  next = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next',
    text: 'Next',
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
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_y = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_y',
    text: 'Thank you for your participation! To finish the experiment click end. ',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  end3NG = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'end3NG',
    text: 'end',
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
  end3NG.clock = new util.Clock();
  
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
    // reset Accept to account for continued clicks & clear times on/off
    Accept.reset()
    psychoJS.experiment.addData('BCBL.started', globalClock.getTime());
    BCBLMaxDuration = null
    // keep track of which components have finished
    BCBLComponents = [];
    BCBLComponents.push(presentation);
    BCBLComponents.push(Accept);
    BCBLComponents.push(BCBL_2);
    
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
    
    
    // *Accept* updates
    if (t >= 0 && Accept.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Accept.tStart = t;  // (not accounting for frame time here)
      Accept.frameNStart = frameN;  // exact frame index
      
      Accept.setAutoDraw(true);
    }
    
    if (Accept.status === PsychoJS.Status.STARTED) {
      // check whether Accept has been pressed
      if (Accept.isClicked) {
        if (!Accept.wasClicked) {
          // store time of first click
          Accept.timesOn.push(Accept.clock.getTime());
          // store time clicked until
          Accept.timesOff.push(Accept.clock.getTime());
        } else {
          // update time clicked until;
          Accept.timesOff[Accept.timesOff.length - 1] = Accept.clock.getTime();
        }
        if (!Accept.wasClicked) {
          // end routine when Accept is clicked
          continueRoutine = false;
          
        }
        // if Accept is still clicked next frame, it is not a new click
        Accept.wasClicked = true;
      } else {
        // if Accept is clicked next frame, it is a new click
        Accept.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Accept hasn't started / has finished
      Accept.clock.reset();
      // if Accept is clicked next frame, it is a new click
      Accept.wasClicked = false;
    }
    
    // *BCBL_2* updates
    if (t >= 0.0 && BCBL_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BCBL_2.tStart = t;  // (not accounting for frame time here)
      BCBL_2.frameNStart = frameN;  // exact frame index
      
      BCBL_2.setAutoDraw(true);
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
    psychoJS.experiment.addData('Accept.numClicks', Accept.numClicks);
    psychoJS.experiment.addData('Accept.timesOn', Accept.timesOn);
    psychoJS.experiment.addData('Accept.timesOff', Accept.timesOff);
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
    // reset Continue to account for continued clicks & clear times on/off
    Continue.reset()
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
    consent_1Components.push(Continue);
    
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
    
    
    // *Continue* updates
    if (t >= 0 && Continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Continue.tStart = t;  // (not accounting for frame time here)
      Continue.frameNStart = frameN;  // exact frame index
      
      Continue.setAutoDraw(true);
    }
    
    if (Continue.status === PsychoJS.Status.STARTED) {
      // check whether Continue has been pressed
      if (Continue.isClicked) {
        if (!Continue.wasClicked) {
          // store time of first click
          Continue.timesOn.push(Continue.clock.getTime());
          // store time clicked until
          Continue.timesOff.push(Continue.clock.getTime());
        } else {
          // update time clicked until;
          Continue.timesOff[Continue.timesOff.length - 1] = Continue.clock.getTime();
        }
        if (!Continue.wasClicked) {
          // end routine when Continue is clicked
          continueRoutine = false;
          
        }
        // if Continue is still clicked next frame, it is not a new click
        Continue.wasClicked = true;
      } else {
        // if Continue is clicked next frame, it is a new click
        Continue.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Continue hasn't started / has finished
      Continue.clock.reset();
      // if Continue is clicked next frame, it is a new click
      Continue.wasClicked = false;
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
    psychoJS.experiment.addData('Continue.numClicks', Continue.numClicks);
    psychoJS.experiment.addData('Continue.timesOn', Continue.timesOn);
    psychoJS.experiment.addData('Continue.timesOff', Continue.timesOff);
    // the Routine "consent_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consent_2MaxDurationReached;
var consent_2MaxDuration;
var consent_2Components;
function consent_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_2' ---
    t = 0;
    consent_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    consent_2MaxDurationReached = false;
    // update component parameters for each repeat
    yesno_5.reset()
    // reset continue_2 to account for continued clicks & clear times on/off
    continue_2.reset()
    psychoJS.experiment.addData('consent_2.started', globalClock.getTime());
    consent_2MaxDuration = null
    // keep track of which components have finished
    consent_2Components = [];
    consent_2Components.push(personaldata_5);
    consent_2Components.push(personaldata_6);
    consent_2Components.push(personaldata_7);
    consent_2Components.push(personaldata_8);
    consent_2Components.push(yesno_5);
    consent_2Components.push(continue_2);
    
    for (const thisComponent of consent_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consent_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_2' ---
    // get current time
    t = consent_2Clock.getTime();
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
    
    
    // *continue_2* updates
    if (t >= 0 && continue_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_2.tStart = t;  // (not accounting for frame time here)
      continue_2.frameNStart = frameN;  // exact frame index
      
      continue_2.setAutoDraw(true);
    }
    
    if (continue_2.status === PsychoJS.Status.STARTED) {
      // check whether continue_2 has been pressed
      if (continue_2.isClicked) {
        if (!continue_2.wasClicked) {
          // store time of first click
          continue_2.timesOn.push(continue_2.clock.getTime());
          // store time clicked until
          continue_2.timesOff.push(continue_2.clock.getTime());
        } else {
          // update time clicked until;
          continue_2.timesOff[continue_2.timesOff.length - 1] = continue_2.clock.getTime();
        }
        if (!continue_2.wasClicked) {
          // end routine when continue_2 is clicked
          continueRoutine = false;
          
        }
        // if continue_2 is still clicked next frame, it is not a new click
        continue_2.wasClicked = true;
      } else {
        // if continue_2 is clicked next frame, it is a new click
        continue_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if continue_2 hasn't started / has finished
      continue_2.clock.reset();
      // if continue_2 is clicked next frame, it is a new click
      continue_2.wasClicked = false;
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
    for (const thisComponent of consent_2Components)
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


function consent_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_2' ---
    for (const thisComponent of consent_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent_2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('yesno_5.response', yesno_5.getRating());
    psychoJS.experiment.addData('yesno_5.rt', yesno_5.getRT());
    psychoJS.experiment.addData('continue_2.numClicks', continue_2.numClicks);
    psychoJS.experiment.addData('continue_2.timesOn', continue_2.timesOn);
    psychoJS.experiment.addData('continue_2.timesOff', continue_2.timesOff);
    // the Routine "consent_2" was not non-slip safe, so reset the non-slip timer
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
    // reset continue_3 to account for continued clicks & clear times on/off
    continue_3.reset()
    psychoJS.experiment.addData('consent_3.started', globalClock.getTime());
    consent_3MaxDuration = null
    // keep track of which components have finished
    consent_3Components = [];
    consent_3Components.push(personaldata_9);
    consent_3Components.push(personaldata_10);
    consent_3Components.push(personaldata_11);
    consent_3Components.push(personaldata_12);
    consent_3Components.push(continue_3);
    
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
    
    // *personaldata_9* updates
    if (t >= 0.0 && personaldata_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      personaldata_9.tStart = t;  // (not accounting for frame time here)
      personaldata_9.frameNStart = frameN;  // exact frame index
      
      personaldata_9.setAutoDraw(true);
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
    
    
    // *continue_3* updates
    if (t >= 0 && continue_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_3.tStart = t;  // (not accounting for frame time here)
      continue_3.frameNStart = frameN;  // exact frame index
      
      continue_3.setAutoDraw(true);
    }
    
    if (continue_3.status === PsychoJS.Status.STARTED) {
      // check whether continue_3 has been pressed
      if (continue_3.isClicked) {
        if (!continue_3.wasClicked) {
          // store time of first click
          continue_3.timesOn.push(continue_3.clock.getTime());
          // store time clicked until
          continue_3.timesOff.push(continue_3.clock.getTime());
        } else {
          // update time clicked until;
          continue_3.timesOff[continue_3.timesOff.length - 1] = continue_3.clock.getTime();
        }
        if (!continue_3.wasClicked) {
          // end routine when continue_3 is clicked
          continueRoutine = false;
          
        }
        // if continue_3 is still clicked next frame, it is not a new click
        continue_3.wasClicked = true;
      } else {
        // if continue_3 is clicked next frame, it is a new click
        continue_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if continue_3 hasn't started / has finished
      continue_3.clock.reset();
      // if continue_3 is clicked next frame, it is a new click
      continue_3.wasClicked = false;
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
    psychoJS.experiment.addData('continue_3.numClicks', continue_3.numClicks);
    psychoJS.experiment.addData('continue_3.timesOn', continue_3.timesOn);
    psychoJS.experiment.addData('continue_3.timesOff', continue_3.timesOff);
    // the Routine "consent_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consent_acceptMaxDurationReached;
var consent_acceptMaxDuration;
var consent_acceptComponents;
function consent_acceptRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_accept' ---
    t = 0;
    consent_acceptClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    consent_acceptMaxDurationReached = false;
    // update component parameters for each repeat
    // reset accept to account for continued clicks & clear times on/off
    accept.reset()
    // reset dontaccept to account for continued clicks & clear times on/off
    dontaccept.reset()
    psychoJS.experiment.addData('consent_accept.started', globalClock.getTime());
    consent_acceptMaxDuration = null
    // keep track of which components have finished
    consent_acceptComponents = [];
    consent_acceptComponents.push(infromed);
    consent_acceptComponents.push(infromed_2);
    consent_acceptComponents.push(accept);
    consent_acceptComponents.push(dontaccept);
    
    for (const thisComponent of consent_acceptComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consent_acceptRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_accept' ---
    // get current time
    t = consent_acceptClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *infromed* updates
    if (t >= 0.0 && infromed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      infromed.tStart = t;  // (not accounting for frame time here)
      infromed.frameNStart = frameN;  // exact frame index
      
      infromed.setAutoDraw(true);
    }
    
    
    // *infromed_2* updates
    if (t >= 0.0 && infromed_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      infromed_2.tStart = t;  // (not accounting for frame time here)
      infromed_2.frameNStart = frameN;  // exact frame index
      
      infromed_2.setAutoDraw(true);
    }
    
    
    // *accept* updates
    if (t >= 0 && accept.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      accept.tStart = t;  // (not accounting for frame time here)
      accept.frameNStart = frameN;  // exact frame index
      
      accept.setAutoDraw(true);
    }
    
    if (accept.status === PsychoJS.Status.STARTED) {
      // check whether accept has been pressed
      if (accept.isClicked) {
        if (!accept.wasClicked) {
          // store time of first click
          accept.timesOn.push(accept.clock.getTime());
          // store time clicked until
          accept.timesOff.push(accept.clock.getTime());
        } else {
          // update time clicked until;
          accept.timesOff[accept.timesOff.length - 1] = accept.clock.getTime();
        }
        if (!accept.wasClicked) {
          // end routine when accept is clicked
          continueRoutine = false;
          
        }
        // if accept is still clicked next frame, it is not a new click
        accept.wasClicked = true;
      } else {
        // if accept is clicked next frame, it is a new click
        accept.wasClicked = false;
      }
    } else {
      // keep clock at 0 if accept hasn't started / has finished
      accept.clock.reset();
      // if accept is clicked next frame, it is a new click
      accept.wasClicked = false;
    }
    
    // *dontaccept* updates
    if (t >= 0 && dontaccept.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dontaccept.tStart = t;  // (not accounting for frame time here)
      dontaccept.frameNStart = frameN;  // exact frame index
      
      dontaccept.setAutoDraw(true);
    }
    
    if (dontaccept.status === PsychoJS.Status.STARTED) {
      // check whether dontaccept has been pressed
      if (dontaccept.isClicked) {
        if (!dontaccept.wasClicked) {
          // store time of first click
          dontaccept.timesOn.push(dontaccept.clock.getTime());
          // store time clicked until
          dontaccept.timesOff.push(dontaccept.clock.getTime());
        } else {
          // update time clicked until;
          dontaccept.timesOff[dontaccept.timesOff.length - 1] = dontaccept.clock.getTime();
        }
        if (!dontaccept.wasClicked) {
          
        }
        // if dontaccept is still clicked next frame, it is not a new click
        dontaccept.wasClicked = true;
      } else {
        // if dontaccept is clicked next frame, it is a new click
        dontaccept.wasClicked = false;
      }
    } else {
      // keep clock at 0 if dontaccept hasn't started / has finished
      dontaccept.clock.reset();
      // if dontaccept is clicked next frame, it is a new click
      dontaccept.wasClicked = false;
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
    for (const thisComponent of consent_acceptComponents)
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


function consent_acceptRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_accept' ---
    for (const thisComponent of consent_acceptComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent_accept.stopped', globalClock.getTime());
    psychoJS.experiment.addData('accept.numClicks', accept.numClicks);
    psychoJS.experiment.addData('accept.timesOn', accept.timesOn);
    psychoJS.experiment.addData('accept.timesOff', accept.timesOff);
    psychoJS.experiment.addData('dontaccept.numClicks', dontaccept.numClicks);
    psychoJS.experiment.addData('dontaccept.timesOn', dontaccept.timesOn);
    psychoJS.experiment.addData('dontaccept.timesOff', dontaccept.timesOff);
    // the Routine "consent_accept" was not non-slip safe, so reset the non-slip timer
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
    // reset iaccept_2 to account for continued clicks & clear times on/off
    iaccept_2.reset()
    // reset idontaccept_2 to account for continued clicks & clear times on/off
    idontaccept_2.reset()
    psychoJS.experiment.addData('fine_print.started', globalClock.getTime());
    fine_printMaxDuration = null
    // keep track of which components have finished
    fine_printComponents = [];
    fine_printComponents.push(fine_print_consent);
    fine_printComponents.push(iaccept_2);
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
    
    
    // *iaccept_2* updates
    if (t >= 0 && iaccept_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      iaccept_2.tStart = t;  // (not accounting for frame time here)
      iaccept_2.frameNStart = frameN;  // exact frame index
      
      iaccept_2.setAutoDraw(true);
    }
    
    if (iaccept_2.status === PsychoJS.Status.STARTED) {
      // check whether iaccept_2 has been pressed
      if (iaccept_2.isClicked) {
        if (!iaccept_2.wasClicked) {
          // store time of first click
          iaccept_2.timesOn.push(iaccept_2.clock.getTime());
          // store time clicked until
          iaccept_2.timesOff.push(iaccept_2.clock.getTime());
        } else {
          // update time clicked until;
          iaccept_2.timesOff[iaccept_2.timesOff.length - 1] = iaccept_2.clock.getTime();
        }
        if (!iaccept_2.wasClicked) {
          // end routine when iaccept_2 is clicked
          continueRoutine = false;
          
        }
        // if iaccept_2 is still clicked next frame, it is not a new click
        iaccept_2.wasClicked = true;
      } else {
        // if iaccept_2 is clicked next frame, it is a new click
        iaccept_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if iaccept_2 hasn't started / has finished
      iaccept_2.clock.reset();
      // if iaccept_2 is clicked next frame, it is a new click
      iaccept_2.wasClicked = false;
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
    psychoJS.experiment.addData('iaccept_2.numClicks', iaccept_2.numClicks);
    psychoJS.experiment.addData('iaccept_2.timesOn', iaccept_2.timesOn);
    psychoJS.experiment.addData('iaccept_2.timesOff', iaccept_2.timesOff);
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


var brief_descriptionMaxDurationReached;
var brief_descriptionMaxDuration;
var brief_descriptionComponents;
function brief_descriptionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'brief_description' ---
    t = 0;
    brief_descriptionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    brief_descriptionMaxDurationReached = false;
    // update component parameters for each repeat
    // reset continue_4 to account for continued clicks & clear times on/off
    continue_4.reset()
    psychoJS.experiment.addData('brief_description.started', globalClock.getTime());
    brief_descriptionMaxDuration = null
    // keep track of which components have finished
    brief_descriptionComponents = [];
    brief_descriptionComponents.push(brief);
    brief_descriptionComponents.push(continue_4);
    
    for (const thisComponent of brief_descriptionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function brief_descriptionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'brief_description' ---
    // get current time
    t = brief_descriptionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *brief* updates
    if (t >= 0.0 && brief.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      brief.tStart = t;  // (not accounting for frame time here)
      brief.frameNStart = frameN;  // exact frame index
      
      brief.setAutoDraw(true);
    }
    
    
    // *continue_4* updates
    if (t >= 0 && continue_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_4.tStart = t;  // (not accounting for frame time here)
      continue_4.frameNStart = frameN;  // exact frame index
      
      continue_4.setAutoDraw(true);
    }
    
    if (continue_4.status === PsychoJS.Status.STARTED) {
      // check whether continue_4 has been pressed
      if (continue_4.isClicked) {
        if (!continue_4.wasClicked) {
          // store time of first click
          continue_4.timesOn.push(continue_4.clock.getTime());
          // store time clicked until
          continue_4.timesOff.push(continue_4.clock.getTime());
        } else {
          // update time clicked until;
          continue_4.timesOff[continue_4.timesOff.length - 1] = continue_4.clock.getTime();
        }
        if (!continue_4.wasClicked) {
          // end routine when continue_4 is clicked
          continueRoutine = false;
          
        }
        // if continue_4 is still clicked next frame, it is not a new click
        continue_4.wasClicked = true;
      } else {
        // if continue_4 is clicked next frame, it is a new click
        continue_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if continue_4 hasn't started / has finished
      continue_4.clock.reset();
      // if continue_4 is clicked next frame, it is a new click
      continue_4.wasClicked = false;
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
    for (const thisComponent of brief_descriptionComponents)
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


function brief_descriptionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'brief_description' ---
    for (const thisComponent of brief_descriptionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('brief_description.stopped', globalClock.getTime());
    psychoJS.experiment.addData('continue_4.numClicks', continue_4.numClicks);
    psychoJS.experiment.addData('continue_4.timesOn', continue_4.timesOn);
    psychoJS.experiment.addData('continue_4.timesOff', continue_4.timesOff);
    // the Routine "brief_description" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var experimentMaxDurationReached;
var experimentMaxDuration;
var experimentComponents;
function experimentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'experiment' ---
    t = 0;
    experimentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    experimentMaxDurationReached = false;
    // update component parameters for each repeat
    // reset continue_5 to account for continued clicks & clear times on/off
    continue_5.reset()
    psychoJS.experiment.addData('experiment.started', globalClock.getTime());
    experimentMaxDuration = null
    // keep track of which components have finished
    experimentComponents = [];
    experimentComponents.push(experiment_2);
    experimentComponents.push(experiment_3);
    experimentComponents.push(continue_5);
    
    for (const thisComponent of experimentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function experimentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'experiment' ---
    // get current time
    t = experimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *experiment_2* updates
    if (t >= 0.0 && experiment_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      experiment_2.tStart = t;  // (not accounting for frame time here)
      experiment_2.frameNStart = frameN;  // exact frame index
      
      experiment_2.setAutoDraw(true);
    }
    
    
    // *experiment_3* updates
    if (t >= 0.0 && experiment_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      experiment_3.tStart = t;  // (not accounting for frame time here)
      experiment_3.frameNStart = frameN;  // exact frame index
      
      experiment_3.setAutoDraw(true);
    }
    
    
    // *continue_5* updates
    if (t >= 0 && continue_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_5.tStart = t;  // (not accounting for frame time here)
      continue_5.frameNStart = frameN;  // exact frame index
      
      continue_5.setAutoDraw(true);
    }
    
    if (continue_5.status === PsychoJS.Status.STARTED) {
      // check whether continue_5 has been pressed
      if (continue_5.isClicked) {
        if (!continue_5.wasClicked) {
          // store time of first click
          continue_5.timesOn.push(continue_5.clock.getTime());
          // store time clicked until
          continue_5.timesOff.push(continue_5.clock.getTime());
        } else {
          // update time clicked until;
          continue_5.timesOff[continue_5.timesOff.length - 1] = continue_5.clock.getTime();
        }
        if (!continue_5.wasClicked) {
          // end routine when continue_5 is clicked
          continueRoutine = false;
          
        }
        // if continue_5 is still clicked next frame, it is not a new click
        continue_5.wasClicked = true;
      } else {
        // if continue_5 is clicked next frame, it is a new click
        continue_5.wasClicked = false;
      }
    } else {
      // keep clock at 0 if continue_5 hasn't started / has finished
      continue_5.clock.reset();
      // if continue_5 is clicked next frame, it is a new click
      continue_5.wasClicked = false;
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
    for (const thisComponent of experimentComponents)
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


function experimentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'experiment' ---
    for (const thisComponent of experimentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('experiment.stopped', globalClock.getTime());
    psychoJS.experiment.addData('continue_5.numClicks', continue_5.numClicks);
    psychoJS.experiment.addData('continue_5.timesOn', continue_5.timesOn);
    psychoJS.experiment.addData('continue_5.timesOff', continue_5.timesOff);
    // the Routine "experiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions3NGMaxDurationReached;
var instructions3NGMaxDuration;
var instructions3NGComponents;
function instructions3NGRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions3NG' ---
    t = 0;
    instructions3NGClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions3NGMaxDurationReached = false;
    // update component parameters for each repeat
    // reset next3NGintr to account for continued clicks & clear times on/off
    next3NGintr.reset()
    psychoJS.experiment.addData('instructions3NG.started', globalClock.getTime());
    instructions3NGMaxDuration = null
    // keep track of which components have finished
    instructions3NGComponents = [];
    instructions3NGComponents.push(instructions3NGtext);
    instructions3NGComponents.push(next3NGintr);
    
    for (const thisComponent of instructions3NGComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions3NGRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions3NG' ---
    // get current time
    t = instructions3NGClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions3NGtext* updates
    if (t >= 0.0 && instructions3NGtext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions3NGtext.tStart = t;  // (not accounting for frame time here)
      instructions3NGtext.frameNStart = frameN;  // exact frame index
      
      instructions3NGtext.setAutoDraw(true);
    }
    
    
    // *next3NGintr* updates
    if (t >= 0 && next3NGintr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next3NGintr.tStart = t;  // (not accounting for frame time here)
      next3NGintr.frameNStart = frameN;  // exact frame index
      
      next3NGintr.setAutoDraw(true);
    }
    
    if (next3NGintr.status === PsychoJS.Status.STARTED) {
      // check whether next3NGintr has been pressed
      if (next3NGintr.isClicked) {
        if (!next3NGintr.wasClicked) {
          // store time of first click
          next3NGintr.timesOn.push(next3NGintr.clock.getTime());
          // store time clicked until
          next3NGintr.timesOff.push(next3NGintr.clock.getTime());
        } else {
          // update time clicked until;
          next3NGintr.timesOff[next3NGintr.timesOff.length - 1] = next3NGintr.clock.getTime();
        }
        if (!next3NGintr.wasClicked) {
          // end routine when next3NGintr is clicked
          continueRoutine = false;
          
        }
        // if next3NGintr is still clicked next frame, it is not a new click
        next3NGintr.wasClicked = true;
      } else {
        // if next3NGintr is clicked next frame, it is a new click
        next3NGintr.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next3NGintr hasn't started / has finished
      next3NGintr.clock.reset();
      // if next3NGintr is clicked next frame, it is a new click
      next3NGintr.wasClicked = false;
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
    for (const thisComponent of instructions3NGComponents)
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


function instructions3NGRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions3NG' ---
    for (const thisComponent of instructions3NGComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions3NG.stopped', globalClock.getTime());
    psychoJS.experiment.addData('next3NGintr.numClicks', next3NGintr.numClicks);
    psychoJS.experiment.addData('next3NGintr.timesOn', next3NGintr.timesOn);
    psychoJS.experiment.addData('next3NGintr.timesOff', next3NGintr.timesOff);
    // the Routine "instructions3NG" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var SentirENG19;
function SentirENG19LoopBegin(SentirENG19LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    SentirENG19 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimENG/Stimuli3ENG19.csv',
      seed: undefined, name: 'SentirENG19'
    });
    psychoJS.experiment.addLoop(SentirENG19); // add the loop to the experiment
    currentLoop = SentirENG19;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSentirENG19 of SentirENG19) {
      snapshot = SentirENG19.getSnapshot();
      SentirENG19LoopScheduler.add(importConditions(snapshot));
      SentirENG19LoopScheduler.add(SentiENG_psychopyRoutineBegin(snapshot));
      SentirENG19LoopScheduler.add(SentiENG_psychopyRoutineEachFrame());
      SentirENG19LoopScheduler.add(SentiENG_psychopyRoutineEnd(snapshot));
      SentirENG19LoopScheduler.add(SentirENG19LoopEndIteration(SentirENG19LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function SentirENG19LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(SentirENG19);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function SentirENG19LoopEndIteration(scheduler, snapshot) {
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


var SentirENG45;
function SentirENG45LoopBegin(SentirENG45LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    SentirENG45 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimENG/Stimuli3ENG45.csv',
      seed: undefined, name: 'SentirENG45'
    });
    psychoJS.experiment.addLoop(SentirENG45); // add the loop to the experiment
    currentLoop = SentirENG45;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSentirENG45 of SentirENG45) {
      snapshot = SentirENG45.getSnapshot();
      SentirENG45LoopScheduler.add(importConditions(snapshot));
      SentirENG45LoopScheduler.add(SentiENG_psychopyRoutineBegin(snapshot));
      SentirENG45LoopScheduler.add(SentiENG_psychopyRoutineEachFrame());
      SentirENG45LoopScheduler.add(SentiENG_psychopyRoutineEnd(snapshot));
      SentirENG45LoopScheduler.add(SentirENG45LoopEndIteration(SentirENG45LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function SentirENG45LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(SentirENG45);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function SentirENG45LoopEndIteration(scheduler, snapshot) {
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


var SentirENG78;
function SentirENG78LoopBegin(SentirENG78LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    SentirENG78 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimENG/Stimuli3ENG78.csv',
      seed: undefined, name: 'SentirENG78'
    });
    psychoJS.experiment.addLoop(SentirENG78); // add the loop to the experiment
    currentLoop = SentirENG78;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSentirENG78 of SentirENG78) {
      snapshot = SentirENG78.getSnapshot();
      SentirENG78LoopScheduler.add(importConditions(snapshot));
      SentirENG78LoopScheduler.add(SentiENG_psychopyRoutineBegin(snapshot));
      SentirENG78LoopScheduler.add(SentiENG_psychopyRoutineEachFrame());
      SentirENG78LoopScheduler.add(SentiENG_psychopyRoutineEnd(snapshot));
      SentirENG78LoopScheduler.add(SentirENG78LoopEndIteration(SentirENG78LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function SentirENG78LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(SentirENG78);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function SentirENG78LoopEndIteration(scheduler, snapshot) {
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


var SentirENG80;
function SentirENG80LoopBegin(SentirENG80LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    SentirENG80 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimENG/Stimuli3ENG80.csv',
      seed: undefined, name: 'SentirENG80'
    });
    psychoJS.experiment.addLoop(SentirENG80); // add the loop to the experiment
    currentLoop = SentirENG80;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSentirENG80 of SentirENG80) {
      snapshot = SentirENG80.getSnapshot();
      SentirENG80LoopScheduler.add(importConditions(snapshot));
      SentirENG80LoopScheduler.add(SentiENG_psychopyRoutineBegin(snapshot));
      SentirENG80LoopScheduler.add(SentiENG_psychopyRoutineEachFrame());
      SentirENG80LoopScheduler.add(SentiENG_psychopyRoutineEnd(snapshot));
      SentirENG80LoopScheduler.add(SentirENG80LoopEndIteration(SentirENG80LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function SentirENG80LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(SentirENG80);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function SentirENG80LoopEndIteration(scheduler, snapshot) {
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
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var SentiENG_psychopyMaxDurationReached;
var SentiENG_psychopyMaxDuration;
var SentiENG_psychopyComponents;
function SentiENG_psychopyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SentiENG_psychopy' ---
    t = 0;
    SentiENG_psychopyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    SentiENG_psychopyMaxDurationReached = false;
    // update component parameters for each repeat
    stimuli.setText(Word);
    auditionslider.reset()
    tasteslider.reset()
    hapticslider.reset()
    olfactionslider.reset()
    visionslider.reset()
    interoceptionslider.reset()
    // reset nect3NGstim to account for continued clicks & clear times on/off
    nect3NGstim.reset()
    // reset donotknow3NG to account for continued clicks & clear times on/off
    donotknow3NG.reset()
    psychoJS.experiment.addData('SentiENG_psychopy.started', globalClock.getTime());
    SentiENG_psychopyMaxDuration = null
    // keep track of which components have finished
    SentiENG_psychopyComponents = [];
    SentiENG_psychopyComponents.push(question);
    SentiENG_psychopyComponents.push(stimuli);
    SentiENG_psychopyComponents.push(audition);
    SentiENG_psychopyComponents.push(taste);
    SentiENG_psychopyComponents.push(haptic);
    SentiENG_psychopyComponents.push(olfaction);
    SentiENG_psychopyComponents.push(vision);
    SentiENG_psychopyComponents.push(interoception);
    SentiENG_psychopyComponents.push(auditionslider);
    SentiENG_psychopyComponents.push(tasteslider);
    SentiENG_psychopyComponents.push(hapticslider);
    SentiENG_psychopyComponents.push(olfactionslider);
    SentiENG_psychopyComponents.push(visionslider);
    SentiENG_psychopyComponents.push(interoceptionslider);
    SentiENG_psychopyComponents.push(nect3NGstim);
    SentiENG_psychopyComponents.push(donotknow3NG);
    
    for (const thisComponent of SentiENG_psychopyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function SentiENG_psychopyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SentiENG_psychopy' ---
    // get current time
    t = SentiENG_psychopyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *question* updates
    if (t >= 0.0 && question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question.tStart = t;  // (not accounting for frame time here)
      question.frameNStart = frameN;  // exact frame index
      
      question.setAutoDraw(true);
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
    
    
    // *interoceptionslider* updates
    if (t >= 0.0 && interoceptionslider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      interoceptionslider.tStart = t;  // (not accounting for frame time here)
      interoceptionslider.frameNStart = frameN;  // exact frame index
      
      interoceptionslider.setAutoDraw(true);
    }
    
    
    // *nect3NGstim* updates
    if (t >= 0 && nect3NGstim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nect3NGstim.tStart = t;  // (not accounting for frame time here)
      nect3NGstim.frameNStart = frameN;  // exact frame index
      
      nect3NGstim.setAutoDraw(true);
    }
    
    if (nect3NGstim.status === PsychoJS.Status.STARTED) {
      // check whether nect3NGstim has been pressed
      if (nect3NGstim.isClicked) {
        if (!nect3NGstim.wasClicked) {
          // store time of first click
          nect3NGstim.timesOn.push(nect3NGstim.clock.getTime());
          // store time clicked until
          nect3NGstim.timesOff.push(nect3NGstim.clock.getTime());
        } else {
          // update time clicked until;
          nect3NGstim.timesOff[nect3NGstim.timesOff.length - 1] = nect3NGstim.clock.getTime();
        }
        if (!nect3NGstim.wasClicked) {
          // end routine when nect3NGstim is clicked
          continueRoutine = false;
          
        }
        // if nect3NGstim is still clicked next frame, it is not a new click
        nect3NGstim.wasClicked = true;
      } else {
        // if nect3NGstim is clicked next frame, it is a new click
        nect3NGstim.wasClicked = false;
      }
    } else {
      // keep clock at 0 if nect3NGstim hasn't started / has finished
      nect3NGstim.clock.reset();
      // if nect3NGstim is clicked next frame, it is a new click
      nect3NGstim.wasClicked = false;
    }
    
    // *donotknow3NG* updates
    if (t >= 0 && donotknow3NG.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      donotknow3NG.tStart = t;  // (not accounting for frame time here)
      donotknow3NG.frameNStart = frameN;  // exact frame index
      
      donotknow3NG.setAutoDraw(true);
    }
    
    if (donotknow3NG.status === PsychoJS.Status.STARTED) {
      // check whether donotknow3NG has been pressed
      if (donotknow3NG.isClicked) {
        if (!donotknow3NG.wasClicked) {
          // store time of first click
          donotknow3NG.timesOn.push(donotknow3NG.clock.getTime());
          // store time clicked until
          donotknow3NG.timesOff.push(donotknow3NG.clock.getTime());
        } else {
          // update time clicked until;
          donotknow3NG.timesOff[donotknow3NG.timesOff.length - 1] = donotknow3NG.clock.getTime();
        }
        if (!donotknow3NG.wasClicked) {
          // end routine when donotknow3NG is clicked
          continueRoutine = false;
          
        }
        // if donotknow3NG is still clicked next frame, it is not a new click
        donotknow3NG.wasClicked = true;
      } else {
        // if donotknow3NG is clicked next frame, it is a new click
        donotknow3NG.wasClicked = false;
      }
    } else {
      // keep clock at 0 if donotknow3NG hasn't started / has finished
      donotknow3NG.clock.reset();
      // if donotknow3NG is clicked next frame, it is a new click
      donotknow3NG.wasClicked = false;
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
    for (const thisComponent of SentiENG_psychopyComponents)
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


function SentiENG_psychopyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SentiENG_psychopy' ---
    for (const thisComponent of SentiENG_psychopyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('SentiENG_psychopy.stopped', globalClock.getTime());
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
    psychoJS.experiment.addData('interoceptionslider.response', interoceptionslider.getRating());
    psychoJS.experiment.addData('interoceptionslider.rt', interoceptionslider.getRT());
    psychoJS.experiment.addData('nect3NGstim.numClicks', nect3NGstim.numClicks);
    psychoJS.experiment.addData('nect3NGstim.timesOn', nect3NGstim.timesOn);
    psychoJS.experiment.addData('nect3NGstim.timesOff', nect3NGstim.timesOff);
    psychoJS.experiment.addData('donotknow3NG.numClicks', donotknow3NG.numClicks);
    psychoJS.experiment.addData('donotknow3NG.timesOn', donotknow3NG.timesOn);
    psychoJS.experiment.addData('donotknow3NG.timesOff', donotknow3NG.timesOff);
    // the Routine "SentiENG_psychopy" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var catch3NG1MaxDurationReached;
var catch3NG1MaxDuration;
var catch3NG1Components;
function catch3NG1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'catch3NG1' ---
    t = 0;
    catch3NG1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    catch3NG1MaxDurationReached = false;
    // update component parameters for each repeat
    // reset Bear to account for continued clicks & clear times on/off
    Bear.reset()
    // reset Fish to account for continued clicks & clear times on/off
    Fish.reset()
    // reset Bird to account for continued clicks & clear times on/off
    Bird.reset()
    psychoJS.experiment.addData('catch3NG1.started', globalClock.getTime());
    catch3NG1MaxDuration = null
    // keep track of which components have finished
    catch3NG1Components = [];
    catch3NG1Components.push(catch3NGanimals);
    catch3NG1Components.push(Bear);
    catch3NG1Components.push(Fish);
    catch3NG1Components.push(Bird);
    
    for (const thisComponent of catch3NG1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function catch3NG1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'catch3NG1' ---
    // get current time
    t = catch3NG1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *catch3NGanimals* updates
    if (t >= 0.0 && catch3NGanimals.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      catch3NGanimals.tStart = t;  // (not accounting for frame time here)
      catch3NGanimals.frameNStart = frameN;  // exact frame index
      
      catch3NGanimals.setAutoDraw(true);
    }
    
    
    // *Bear* updates
    if (t >= 0 && Bear.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Bear.tStart = t;  // (not accounting for frame time here)
      Bear.frameNStart = frameN;  // exact frame index
      
      Bear.setAutoDraw(true);
    }
    
    if (Bear.status === PsychoJS.Status.STARTED) {
      // check whether Bear has been pressed
      if (Bear.isClicked) {
        if (!Bear.wasClicked) {
          // store time of first click
          Bear.timesOn.push(Bear.clock.getTime());
          // store time clicked until
          Bear.timesOff.push(Bear.clock.getTime());
        } else {
          // update time clicked until;
          Bear.timesOff[Bear.timesOff.length - 1] = Bear.clock.getTime();
        }
        if (!Bear.wasClicked) {
          // end routine when Bear is clicked
          continueRoutine = false;
          
        }
        // if Bear is still clicked next frame, it is not a new click
        Bear.wasClicked = true;
      } else {
        // if Bear is clicked next frame, it is a new click
        Bear.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Bear hasn't started / has finished
      Bear.clock.reset();
      // if Bear is clicked next frame, it is a new click
      Bear.wasClicked = false;
    }
    
    // *Fish* updates
    if (t >= 0 && Fish.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Fish.tStart = t;  // (not accounting for frame time here)
      Fish.frameNStart = frameN;  // exact frame index
      
      Fish.setAutoDraw(true);
    }
    
    if (Fish.status === PsychoJS.Status.STARTED) {
      // check whether Fish has been pressed
      if (Fish.isClicked) {
        if (!Fish.wasClicked) {
          // store time of first click
          Fish.timesOn.push(Fish.clock.getTime());
          // store time clicked until
          Fish.timesOff.push(Fish.clock.getTime());
        } else {
          // update time clicked until;
          Fish.timesOff[Fish.timesOff.length - 1] = Fish.clock.getTime();
        }
        if (!Fish.wasClicked) {
          // end routine when Fish is clicked
          continueRoutine = false;
          
        }
        // if Fish is still clicked next frame, it is not a new click
        Fish.wasClicked = true;
      } else {
        // if Fish is clicked next frame, it is a new click
        Fish.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Fish hasn't started / has finished
      Fish.clock.reset();
      // if Fish is clicked next frame, it is a new click
      Fish.wasClicked = false;
    }
    
    // *Bird* updates
    if (t >= 0 && Bird.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Bird.tStart = t;  // (not accounting for frame time here)
      Bird.frameNStart = frameN;  // exact frame index
      
      Bird.setAutoDraw(true);
    }
    
    if (Bird.status === PsychoJS.Status.STARTED) {
      // check whether Bird has been pressed
      if (Bird.isClicked) {
        if (!Bird.wasClicked) {
          // store time of first click
          Bird.timesOn.push(Bird.clock.getTime());
          // store time clicked until
          Bird.timesOff.push(Bird.clock.getTime());
        } else {
          // update time clicked until;
          Bird.timesOff[Bird.timesOff.length - 1] = Bird.clock.getTime();
        }
        if (!Bird.wasClicked) {
          // end routine when Bird is clicked
          continueRoutine = false;
          
        }
        // if Bird is still clicked next frame, it is not a new click
        Bird.wasClicked = true;
      } else {
        // if Bird is clicked next frame, it is a new click
        Bird.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Bird hasn't started / has finished
      Bird.clock.reset();
      // if Bird is clicked next frame, it is a new click
      Bird.wasClicked = false;
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
    for (const thisComponent of catch3NG1Components)
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


function catch3NG1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'catch3NG1' ---
    for (const thisComponent of catch3NG1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('catch3NG1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('Bear.numClicks', Bear.numClicks);
    psychoJS.experiment.addData('Bear.timesOn', Bear.timesOn);
    psychoJS.experiment.addData('Bear.timesOff', Bear.timesOff);
    psychoJS.experiment.addData('Fish.numClicks', Fish.numClicks);
    psychoJS.experiment.addData('Fish.timesOn', Fish.timesOn);
    psychoJS.experiment.addData('Fish.timesOff', Fish.timesOff);
    psychoJS.experiment.addData('Bird.numClicks', Bird.numClicks);
    psychoJS.experiment.addData('Bird.timesOn', Bird.timesOn);
    psychoJS.experiment.addData('Bird.timesOff', Bird.timesOff);
    // the Routine "catch3NG1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var catch3NG2MaxDurationReached;
var catch3NG2MaxDuration;
var catch3NG2Components;
function catch3NG2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'catch3NG2' ---
    t = 0;
    catch3NG2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    catch3NG2MaxDurationReached = false;
    // update component parameters for each repeat
    // reset fifthteen to account for continued clicks & clear times on/off
    fifthteen.reset()
    // reset seventytwo to account for continued clicks & clear times on/off
    seventytwo.reset()
    // reset onehundred to account for continued clicks & clear times on/off
    onehundred.reset()
    psychoJS.experiment.addData('catch3NG2.started', globalClock.getTime());
    catch3NG2MaxDuration = null
    // keep track of which components have finished
    catch3NG2Components = [];
    catch3NG2Components.push(catch3NGmath);
    catch3NG2Components.push(fifthteen);
    catch3NG2Components.push(seventytwo);
    catch3NG2Components.push(onehundred);
    
    for (const thisComponent of catch3NG2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function catch3NG2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'catch3NG2' ---
    // get current time
    t = catch3NG2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *catch3NGmath* updates
    if (t >= 0.0 && catch3NGmath.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      catch3NGmath.tStart = t;  // (not accounting for frame time here)
      catch3NGmath.frameNStart = frameN;  // exact frame index
      
      catch3NGmath.setAutoDraw(true);
    }
    
    
    // *fifthteen* updates
    if (t >= 0 && fifthteen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fifthteen.tStart = t;  // (not accounting for frame time here)
      fifthteen.frameNStart = frameN;  // exact frame index
      
      fifthteen.setAutoDraw(true);
    }
    
    if (fifthteen.status === PsychoJS.Status.STARTED) {
      // check whether fifthteen has been pressed
      if (fifthteen.isClicked) {
        if (!fifthteen.wasClicked) {
          // store time of first click
          fifthteen.timesOn.push(fifthteen.clock.getTime());
          // store time clicked until
          fifthteen.timesOff.push(fifthteen.clock.getTime());
        } else {
          // update time clicked until;
          fifthteen.timesOff[fifthteen.timesOff.length - 1] = fifthteen.clock.getTime();
        }
        if (!fifthteen.wasClicked) {
          // end routine when fifthteen is clicked
          continueRoutine = false;
          
        }
        // if fifthteen is still clicked next frame, it is not a new click
        fifthteen.wasClicked = true;
      } else {
        // if fifthteen is clicked next frame, it is a new click
        fifthteen.wasClicked = false;
      }
    } else {
      // keep clock at 0 if fifthteen hasn't started / has finished
      fifthteen.clock.reset();
      // if fifthteen is clicked next frame, it is a new click
      fifthteen.wasClicked = false;
    }
    
    // *seventytwo* updates
    if (t >= 0 && seventytwo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      seventytwo.tStart = t;  // (not accounting for frame time here)
      seventytwo.frameNStart = frameN;  // exact frame index
      
      seventytwo.setAutoDraw(true);
    }
    
    if (seventytwo.status === PsychoJS.Status.STARTED) {
      // check whether seventytwo has been pressed
      if (seventytwo.isClicked) {
        if (!seventytwo.wasClicked) {
          // store time of first click
          seventytwo.timesOn.push(seventytwo.clock.getTime());
          // store time clicked until
          seventytwo.timesOff.push(seventytwo.clock.getTime());
        } else {
          // update time clicked until;
          seventytwo.timesOff[seventytwo.timesOff.length - 1] = seventytwo.clock.getTime();
        }
        if (!seventytwo.wasClicked) {
          // end routine when seventytwo is clicked
          continueRoutine = false;
          
        }
        // if seventytwo is still clicked next frame, it is not a new click
        seventytwo.wasClicked = true;
      } else {
        // if seventytwo is clicked next frame, it is a new click
        seventytwo.wasClicked = false;
      }
    } else {
      // keep clock at 0 if seventytwo hasn't started / has finished
      seventytwo.clock.reset();
      // if seventytwo is clicked next frame, it is a new click
      seventytwo.wasClicked = false;
    }
    
    // *onehundred* updates
    if (t >= 0 && onehundred.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      onehundred.tStart = t;  // (not accounting for frame time here)
      onehundred.frameNStart = frameN;  // exact frame index
      
      onehundred.setAutoDraw(true);
    }
    
    if (onehundred.status === PsychoJS.Status.STARTED) {
      // check whether onehundred has been pressed
      if (onehundred.isClicked) {
        if (!onehundred.wasClicked) {
          // store time of first click
          onehundred.timesOn.push(onehundred.clock.getTime());
          // store time clicked until
          onehundred.timesOff.push(onehundred.clock.getTime());
        } else {
          // update time clicked until;
          onehundred.timesOff[onehundred.timesOff.length - 1] = onehundred.clock.getTime();
        }
        if (!onehundred.wasClicked) {
          // end routine when onehundred is clicked
          continueRoutine = false;
          
        }
        // if onehundred is still clicked next frame, it is not a new click
        onehundred.wasClicked = true;
      } else {
        // if onehundred is clicked next frame, it is a new click
        onehundred.wasClicked = false;
      }
    } else {
      // keep clock at 0 if onehundred hasn't started / has finished
      onehundred.clock.reset();
      // if onehundred is clicked next frame, it is a new click
      onehundred.wasClicked = false;
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
    for (const thisComponent of catch3NG2Components)
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


function catch3NG2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'catch3NG2' ---
    for (const thisComponent of catch3NG2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('catch3NG2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('fifthteen.numClicks', fifthteen.numClicks);
    psychoJS.experiment.addData('fifthteen.timesOn', fifthteen.timesOn);
    psychoJS.experiment.addData('fifthteen.timesOff', fifthteen.timesOff);
    psychoJS.experiment.addData('seventytwo.numClicks', seventytwo.numClicks);
    psychoJS.experiment.addData('seventytwo.timesOn', seventytwo.timesOn);
    psychoJS.experiment.addData('seventytwo.timesOff', seventytwo.timesOff);
    psychoJS.experiment.addData('onehundred.numClicks', onehundred.numClicks);
    psychoJS.experiment.addData('onehundred.timesOn', onehundred.timesOn);
    psychoJS.experiment.addData('onehundred.timesOff', onehundred.timesOff);
    // the Routine "catch3NG2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var break3NGMaxDurationReached;
var break3NGMaxDuration;
var break3NGComponents;
function break3NGRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'break3NG' ---
    t = 0;
    break3NGClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    break3NGMaxDurationReached = false;
    // update component parameters for each repeat
    // reset next3NGbreak to account for continued clicks & clear times on/off
    next3NGbreak.reset()
    psychoJS.experiment.addData('break3NG.started', globalClock.getTime());
    break3NGMaxDuration = null
    // keep track of which components have finished
    break3NGComponents = [];
    break3NGComponents.push(break3NG_2);
    break3NGComponents.push(next3NGbreak);
    
    for (const thisComponent of break3NGComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function break3NGRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'break3NG' ---
    // get current time
    t = break3NGClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *break3NG_2* updates
    if (t >= 0.0 && break3NG_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break3NG_2.tStart = t;  // (not accounting for frame time here)
      break3NG_2.frameNStart = frameN;  // exact frame index
      
      break3NG_2.setAutoDraw(true);
    }
    
    
    // *next3NGbreak* updates
    if (t >= 0 && next3NGbreak.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next3NGbreak.tStart = t;  // (not accounting for frame time here)
      next3NGbreak.frameNStart = frameN;  // exact frame index
      
      next3NGbreak.setAutoDraw(true);
    }
    
    if (next3NGbreak.status === PsychoJS.Status.STARTED) {
      // check whether next3NGbreak has been pressed
      if (next3NGbreak.isClicked) {
        if (!next3NGbreak.wasClicked) {
          // store time of first click
          next3NGbreak.timesOn.push(next3NGbreak.clock.getTime());
          // store time clicked until
          next3NGbreak.timesOff.push(next3NGbreak.clock.getTime());
        } else {
          // update time clicked until;
          next3NGbreak.timesOff[next3NGbreak.timesOff.length - 1] = next3NGbreak.clock.getTime();
        }
        if (!next3NGbreak.wasClicked) {
          // end routine when next3NGbreak is clicked
          continueRoutine = false;
          
        }
        // if next3NGbreak is still clicked next frame, it is not a new click
        next3NGbreak.wasClicked = true;
      } else {
        // if next3NGbreak is clicked next frame, it is a new click
        next3NGbreak.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next3NGbreak hasn't started / has finished
      next3NGbreak.clock.reset();
      // if next3NGbreak is clicked next frame, it is a new click
      next3NGbreak.wasClicked = false;
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
    for (const thisComponent of break3NGComponents)
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


function break3NGRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'break3NG' ---
    for (const thisComponent of break3NGComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('break3NG.stopped', globalClock.getTime());
    psychoJS.experiment.addData('next3NGbreak.numClicks', next3NGbreak.numClicks);
    psychoJS.experiment.addData('next3NGbreak.timesOn', next3NGbreak.timesOn);
    psychoJS.experiment.addData('next3NGbreak.timesOff', next3NGbreak.timesOff);
    // the Routine "break3NG" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var catch3NG3MaxDurationReached;
var catch3NG3MaxDuration;
var catch3NG3Components;
function catch3NG3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'catch3NG3' ---
    t = 0;
    catch3NG3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    catch3NG3MaxDurationReached = false;
    // update component parameters for each repeat
    // reset sandwich to account for continued clicks & clear times on/off
    sandwich.reset()
    // reset cauliflower to account for continued clicks & clear times on/off
    cauliflower.reset()
    // reset apple to account for continued clicks & clear times on/off
    apple.reset()
    psychoJS.experiment.addData('catch3NG3.started', globalClock.getTime());
    catch3NG3MaxDuration = null
    // keep track of which components have finished
    catch3NG3Components = [];
    catch3NG3Components.push(catch3NGfruit);
    catch3NG3Components.push(sandwich);
    catch3NG3Components.push(cauliflower);
    catch3NG3Components.push(apple);
    
    for (const thisComponent of catch3NG3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function catch3NG3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'catch3NG3' ---
    // get current time
    t = catch3NG3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *catch3NGfruit* updates
    if (t >= 0.0 && catch3NGfruit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      catch3NGfruit.tStart = t;  // (not accounting for frame time here)
      catch3NGfruit.frameNStart = frameN;  // exact frame index
      
      catch3NGfruit.setAutoDraw(true);
    }
    
    
    // *sandwich* updates
    if (t >= 0 && sandwich.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sandwich.tStart = t;  // (not accounting for frame time here)
      sandwich.frameNStart = frameN;  // exact frame index
      
      sandwich.setAutoDraw(true);
    }
    
    if (sandwich.status === PsychoJS.Status.STARTED) {
      // check whether sandwich has been pressed
      if (sandwich.isClicked) {
        if (!sandwich.wasClicked) {
          // store time of first click
          sandwich.timesOn.push(sandwich.clock.getTime());
          // store time clicked until
          sandwich.timesOff.push(sandwich.clock.getTime());
        } else {
          // update time clicked until;
          sandwich.timesOff[sandwich.timesOff.length - 1] = sandwich.clock.getTime();
        }
        if (!sandwich.wasClicked) {
          // end routine when sandwich is clicked
          continueRoutine = false;
          
        }
        // if sandwich is still clicked next frame, it is not a new click
        sandwich.wasClicked = true;
      } else {
        // if sandwich is clicked next frame, it is a new click
        sandwich.wasClicked = false;
      }
    } else {
      // keep clock at 0 if sandwich hasn't started / has finished
      sandwich.clock.reset();
      // if sandwich is clicked next frame, it is a new click
      sandwich.wasClicked = false;
    }
    
    // *cauliflower* updates
    if (t >= 0 && cauliflower.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cauliflower.tStart = t;  // (not accounting for frame time here)
      cauliflower.frameNStart = frameN;  // exact frame index
      
      cauliflower.setAutoDraw(true);
    }
    
    if (cauliflower.status === PsychoJS.Status.STARTED) {
      // check whether cauliflower has been pressed
      if (cauliflower.isClicked) {
        if (!cauliflower.wasClicked) {
          // store time of first click
          cauliflower.timesOn.push(cauliflower.clock.getTime());
          // store time clicked until
          cauliflower.timesOff.push(cauliflower.clock.getTime());
        } else {
          // update time clicked until;
          cauliflower.timesOff[cauliflower.timesOff.length - 1] = cauliflower.clock.getTime();
        }
        if (!cauliflower.wasClicked) {
          // end routine when cauliflower is clicked
          continueRoutine = false;
          
        }
        // if cauliflower is still clicked next frame, it is not a new click
        cauliflower.wasClicked = true;
      } else {
        // if cauliflower is clicked next frame, it is a new click
        cauliflower.wasClicked = false;
      }
    } else {
      // keep clock at 0 if cauliflower hasn't started / has finished
      cauliflower.clock.reset();
      // if cauliflower is clicked next frame, it is a new click
      cauliflower.wasClicked = false;
    }
    
    // *apple* updates
    if (t >= 0 && apple.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      apple.tStart = t;  // (not accounting for frame time here)
      apple.frameNStart = frameN;  // exact frame index
      
      apple.setAutoDraw(true);
    }
    
    if (apple.status === PsychoJS.Status.STARTED) {
      // check whether apple has been pressed
      if (apple.isClicked) {
        if (!apple.wasClicked) {
          // store time of first click
          apple.timesOn.push(apple.clock.getTime());
          // store time clicked until
          apple.timesOff.push(apple.clock.getTime());
        } else {
          // update time clicked until;
          apple.timesOff[apple.timesOff.length - 1] = apple.clock.getTime();
        }
        if (!apple.wasClicked) {
          // end routine when apple is clicked
          continueRoutine = false;
          
        }
        // if apple is still clicked next frame, it is not a new click
        apple.wasClicked = true;
      } else {
        // if apple is clicked next frame, it is a new click
        apple.wasClicked = false;
      }
    } else {
      // keep clock at 0 if apple hasn't started / has finished
      apple.clock.reset();
      // if apple is clicked next frame, it is a new click
      apple.wasClicked = false;
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
    for (const thisComponent of catch3NG3Components)
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


function catch3NG3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'catch3NG3' ---
    for (const thisComponent of catch3NG3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('catch3NG3.stopped', globalClock.getTime());
    psychoJS.experiment.addData('sandwich.numClicks', sandwich.numClicks);
    psychoJS.experiment.addData('sandwich.timesOn', sandwich.timesOn);
    psychoJS.experiment.addData('sandwich.timesOff', sandwich.timesOff);
    psychoJS.experiment.addData('cauliflower.numClicks', cauliflower.numClicks);
    psychoJS.experiment.addData('cauliflower.timesOn', cauliflower.timesOn);
    psychoJS.experiment.addData('cauliflower.timesOff', cauliflower.timesOff);
    psychoJS.experiment.addData('apple.numClicks', apple.numClicks);
    psychoJS.experiment.addData('apple.timesOn', apple.timesOn);
    psychoJS.experiment.addData('apple.timesOff', apple.timesOff);
    // the Routine "catch3NG3" was not non-slip safe, so reset the non-slip timer
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
    debriefing_2Components.push(debriefing_4);
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
    
    // *debriefing_4* updates
    if (t >= 0.0 && debriefing_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debriefing_4.tStart = t;  // (not accounting for frame time here)
      debriefing_4.frameNStart = frameN;  // exact frame index
      
      debriefing_4.setAutoDraw(true);
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


var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    endMaxDurationReached = false;
    // update component parameters for each repeat
    // reset end3NG to account for continued clicks & clear times on/off
    end3NG.reset()
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_y);
    endComponents.push(end3NG);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_y* updates
    if (t >= 0.0 && end_y.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_y.tStart = t;  // (not accounting for frame time here)
      end_y.frameNStart = frameN;  // exact frame index
      
      end_y.setAutoDraw(true);
    }
    
    
    // *end3NG* updates
    if (t >= 0 && end3NG.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end3NG.tStart = t;  // (not accounting for frame time here)
      end3NG.frameNStart = frameN;  // exact frame index
      
      end3NG.setAutoDraw(true);
    }
    
    if (end3NG.status === PsychoJS.Status.STARTED) {
      // check whether end3NG has been pressed
      if (end3NG.isClicked) {
        if (!end3NG.wasClicked) {
          // store time of first click
          end3NG.timesOn.push(end3NG.clock.getTime());
          // store time clicked until
          end3NG.timesOff.push(end3NG.clock.getTime());
        } else {
          // update time clicked until;
          end3NG.timesOff[end3NG.timesOff.length - 1] = end3NG.clock.getTime();
        }
        if (!end3NG.wasClicked) {
          // end routine when end3NG is clicked
          continueRoutine = false;
          
        }
        // if end3NG is still clicked next frame, it is not a new click
        end3NG.wasClicked = true;
      } else {
        // if end3NG is clicked next frame, it is a new click
        end3NG.wasClicked = false;
      }
    } else {
      // keep clock at 0 if end3NG hasn't started / has finished
      end3NG.clock.reset();
      // if end3NG is clicked next frame, it is a new click
      end3NG.wasClicked = false;
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
    for (const thisComponent of endComponents)
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


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    psychoJS.experiment.addData('end3NG.numClicks', end3NG.numClicks);
    psychoJS.experiment.addData('end3NG.timesOn', end3NG.timesOn);
    psychoJS.experiment.addData('end3NG.timesOff', end3NG.timesOff);
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
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
