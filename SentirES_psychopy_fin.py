#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2024.2.1),
    on Thu Sep 12 16:08:08 2024
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2024.2.1'
expName = 'SentirES_psychopy_fin'  # from the Builder filename that created this script
# information about this experiment
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = [1680, 1050]
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='/Users/soniasimon/Documents/thesis/SentirES_fin/SentirES_psychopy_fin.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('info')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height', 
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.mouseVisible = True
    win.hideMessage()
    # show a visual indicator if we're in piloting mode
    if PILOTING and prefs.piloting['showPilotingIndicator']:
        win.showPilotingIndicator()
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    ioSession = ioServer = eyetracker = None
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='event'
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='Pyglet',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='Pyglet'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "BCBL" ---
    presentation = visual.TextStim(win=win, name='presentation',
        text='Gracias por participar en SENTIRES de BCBL. \n\nBasque Center on Cognition, Brain and Language es un centro internacional de investigación interdisciplinar para el estudio de la cognición, el cerebro y el lenguaje. Visita nuestra página web (www.bcbl.eu) y síguenos en redes sociales como Facebook (@bcbl.eu), Instagram (bcbl_basque_center), Twitter (@bcbl_) y YouTube (BCBL) para conocer todas las novedades de nuestro centro así como del campo de la neurociencia cognitiva.\n\n',
        font='Arial',
        units='height', pos=(0, 0), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    Acpeto = visual.ButtonStim(win, 
        text='Acepto', font='Arial',
        pos=(0.55, -0.4),units='height',
        letterHeight=0.03,
        size=(0.2, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='Acpeto',
        depth=-1
    )
    Acpeto.buttonClock = core.Clock()
    bcbl = visual.ImageStim(
        win=win,
        name='bcbl', 
        image='bcbl.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.4), draggable=False, size=(0.2,0.2),
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    
    # --- Initialize components for Routine "consent_1" ---
    personaldata = visual.TextStim(win=win, name='personaldata',
        text='Si el participante consiente participar en este estudio, recibirá la compensación por parte de Prolific.',
        font='Arial',
        units='height', pos=(0,0.4), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    personaldata_2 = visual.TextStim(win=win, name='personaldata_2',
        text='El participante debe seguir las normas y reglamentos de Prolific, y, una vez que el investigador haya aprobado tu respuestas, se abonará la cantidad indicada en el anuncio. Es necesario que el participante siga las instrucciones y responda dentro del tiempo específico permitido para completar el experimento.',
        font='Arial',
        units='height', pos=(0, 0.2), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-1.0);
    personaldata_3 = visual.TextStim(win=win, name='personaldata_3',
        text='Este experimento consta de una sesión que durará aproximadamente 40 minutos. El tiempo que el/la participante invierta en este experimento dependerá del número de sesiones, los descansos y la velocidad a la que se complete la tarea.',
        font='Arial',
        units='height', pos=(0, -0.1), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-2.0);
    personaldata_4 = visual.TextStim(win=win, name='personaldata_4',
        text='La participación es totalmente voluntaria. Puedes detenerte en cualquier momento cerrando la ventana del navegador. No completar el estudio no impedirá que el/la participante pueda participar en futuros estudios que ofrezcamos pero no se compensará por la participación en este experimento.',
        font='Arial',
        units='height', pos=(0, -0.3), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-3.0);
    yesno = visual.Slider(win=win, name='yesno',
        startValue=None, size=(0.1,0.03), pos=(-0.7,0.4), units='height',
        labels=["Acepto", "No Acepto"],ticks=None, granularity=1,
        style='radio', styleTweaks=(), opacity=1.0,
        labelColor='LightGray', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Open Sans', labelHeight=0.015,
        flip=False, ori=0.0, depth=-4, readOnly=False)
    yesno_2 = visual.Slider(win=win, name='yesno_2',
        startValue=None, size=(0.1,0.03), pos=(-0.7,0.2), units='height',
        labels=["Acepto", "No Acepto"],ticks=None, granularity=1,
        style='radio', styleTweaks=(), opacity=1.0,
        labelColor='LightGray', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Open Sans', labelHeight=0.015,
        flip=False, ori=0.0, depth=-5, readOnly=False)
    yesno_3 = visual.Slider(win=win, name='yesno_3',
        startValue=None, size=(0.1,0.03), pos=(-0.7,-0.1), units='height',
        labels=["Acepto", "No Acepto"],ticks=None, granularity=1,
        style='radio', styleTweaks=(), opacity=1.0,
        labelColor='LightGray', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Open Sans', labelHeight=0.015,
        flip=False, ori=0.0, depth=-6, readOnly=False)
    yesno_4 = visual.Slider(win=win, name='yesno_4',
        startValue=None, size=(0.1,0.03), pos=(-0.7,-0.3), units='height',
        labels=["Acepto", "No Acepto"],ticks=None, granularity=1,
        style='radio', styleTweaks=(), opacity=1.0,
        labelColor='LightGray', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Open Sans', labelHeight=0.015,
        flip=False, ori=0.0, depth=-7, readOnly=False)
    Continuar = visual.ButtonStim(win, 
        text='Acepto', font='Arial',
        pos=(0.55, -0.4),units='height',
        letterHeight=0.03,
        size=(0.2, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='Continuar',
        depth=-8
    )
    Continuar.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "concent_2" ---
    personaldata_5 = visual.TextStim(win=win, name='personaldata_5',
        text='Este estudio de investigación pertenece al centro Basque Center on Cognition, Brain and Language (www.bcbl.eu) y ha sido aprobado por el comité ético del centro. Al hacer clic en “Acepto”, el/la participante consiente la información anterior y acepta participar en el estudio.',
        font='Arial',
        units='height', pos=(0,0.35), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    personaldata_6 = visual.TextStim(win=win, name='personaldata_6',
        text='El participante autoriza a BCBL a gestionar los datos obtenidos durante su participación en este estudio para su utilización en artículos científicos y congresos, basados en este estudio o publicaciones externas derivadas de él, así como para su diseminación en repositorios científicos públicos, siempre de forma totalmente anónima, para garantizar su reproducibilidad. En los siguientes puntos se informa sobre los repositorios de acceso público:',
        font='Arial',
        units='height', pos=(0, 0.1), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-1.0);
    personaldata_7 = visual.TextStim(win=win, name='personaldata_7',
        text='Se mantendrá la parte privada de los datos del/de la participante (nombre, información de contacto, etc.) en un lugar seguro.',
        font='Arial',
        units='height', pos=(0, -0.1), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-2.0);
    personaldata_8 = visual.TextStim(win=win, name='personaldata_8',
        text='Los datos que se compartan no contendrán el nombre del participante y estarán anonimizados mediante un código, y no se compartirá ninguna otra información que el centro crea que pudiera identificar al participante.',
        font='Arial',
        units='height', pos=(0, -0.3), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-3.0);
    yesno_5 = visual.Slider(win=win, name='yesno_5',
        startValue=None, size=(0.1,0.03), pos=(-0.7,0.4), units='height',
        labels=["Acepto", "No Acepto"],ticks=None, granularity=1,
        style='radio', styleTweaks=(), opacity=1.0,
        labelColor='LightGray', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Open Sans', labelHeight=0.015,
        flip=False, ori=0.0, depth=-4, readOnly=False)
    continuar_2 = visual.ButtonStim(win, 
        text='Acepto', font='Arial',
        pos=(0.55, -0.4),units='height',
        letterHeight=0.03,
        size=(0.2, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='continuar_2',
        depth=-5
    )
    continuar_2.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "consent_3" ---
    perdonaldata_9 = visual.TextStim(win=win, name='perdonaldata_9',
        text='Los datos y las muestras de este estudio podrían utilizarse para otros futuros proyectos de investigación y ser compartidos con otros investigadores de otras instituciones internacionales, además del estudio en que se esté participando actualmente. Esos futuros proyectos podrían estar enfocados a cualquier otra temática no relacionada con los objetivos de este estudio.',
        font='Arial',
        units='height', pos=(0,0.4), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    personaldata_10 = visual.TextStim(win=win, name='personaldata_10',
        text='Se podrá dar acceso a los datos que se recogen en este estudio, incluidas las imágenes y las grabaciones de voz, a través de bases de datos de dominio público.',
        font='Arial',
        units='height', pos=(0,0.1), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-1.0);
    personaldata_11 = visual.TextStim(win=win, name='personaldata_11',
        text='Cualquier dato o resultados de investigación que ya hayan sido compartidos con otros investigadores o el dominio público no podrán ser destruidos o retirados.',
        font='Arial',
        units='height', pos=(0, -0.1), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-2.0);
    personaldata_12 = visual.TextStim(win=win, name='personaldata_12',
        text='Asimismo, el riesgo de que se produzca una violación de seguridad (ataque cibernético) que pudiera hacer que alguien asociase al participante con sus datos es muy bajo, ya que los datos están guardados en una base de datos segura, y la información está guardada por separado, relacionados mediante un solo código.',
        font='Arial',
        units='height', pos=(0, -0.3), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-3.0);
    continuar_3 = visual.ButtonStim(win, 
        text='Acepto', font='Arial',
        pos=(0.55, -0.4),units='height',
        letterHeight=0.03,
        size=(0.2, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='continuar_3',
        depth=-4
    )
    continuar_3.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "aut_personaldata" ---
    infomored = visual.TextStim(win=win, name='infomored',
        text='Ante cualquier pregunta, por favor contacta con la coordinadora del estudio, Dra. Clara Martin y Dr. Cesar Caballero-Gaudes, en la dirección de email c.martin@bcbl.eu, c.caballero@bcbl.eu\n\nGracias por participar en este estudio.\n',
        font='Arial',
        units='height', pos=(0, 0.4), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    informed_2 = visual.TextStim(win=win, name='informed_2',
        text='Tras la lectura de lo anterior, DECLARO que he sido convenientemente informado/a mediante de los detalles del estudio en el que voy a participar voluntariamente, entiendo tanto su propósito y lo que implica como la/s técnica/s que se van a utilizar durante el estudio y he tenido la posibilidad de resolver cualquier duda concerniente al estudio.',
        font='Arial',
        units='height', pos=(0, 0), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-1.0);
    Iaccept = visual.ButtonStim(win, 
        text='Acepto', font='Arial',
        pos=(-0.2, -0.4),units='height',
        letterHeight=0.03,
        size=(0.2, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='Iaccept',
        depth=-2
    )
    Iaccept.buttonClock = core.Clock()
    idonotaccept = visual.ButtonStim(win, 
        text='No Acepto', font='Arial',
        pos=(0.4, -0.4),units='height',
        letterHeight=0.03,
        size=(0.2, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='idonotaccept',
        depth=-3
    )
    idonotaccept.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "fine_print" ---
    fine_print_consent = visual.TextStim(win=win, name='fine_print_consent',
        text='Tus datos de carácter personal, o de la persona a la que representas, serán tratados y se incorporarán a ficheros de los que es responsable el BCBL y que tienen como finalidad la gestión y la administración del centro, la realización de estudios sobre la cognición, el cerebro y el lenguaje y el envío de comunicaciones relacionadas con estos fines por cualquier medio. La legitimación para el tratamiento es el consentimiento de la persona interesada. Estos datos, que se conservarán de forma indefinida, solo podrán ser cedidos, anonimizados, a instituciones o personas dedicadas a fines análogos, salvo las cesiones legalmente establecidas.\n\nPodras ejercitar los derechos de acceso, rectificación, supresión, portabilidad, limitación de tratamiento, revocar el consentimiento o no ser objeto de decisiones basadas únicamente en el tratamiento automatizado de sus datos, de conformidad al Reglamento (UE) 2016/679 y a la ley Orgánica 3/2018 de 5 de diciembre de protección de datos personales y garantía de los derechos digitales dirigiendo un correo electrónico a info@bcbl.eu o bien mediante escrito dirigido al Delegado de Protección de Datos a la dirección Paseo Mikeletegi, 69 – 2o - 20009 SAN SEBASTIÁN, acompañando fotocopia de su DNI.',
        font='Arial',
        units='height', pos=(0, 0), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    Iaccept_2 = visual.ButtonStim(win, 
        text='Acepto', font='Arial',
        pos=(-0.2, -0.4),units='height',
        letterHeight=0.03,
        size=(0.2, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='Iaccept_2',
        depth=-1
    )
    Iaccept_2.buttonClock = core.Clock()
    idontaccept_2 = visual.ButtonStim(win, 
        text='No Acepto', font='Arial',
        pos=(0.4, -0.4),units='height',
        letterHeight=0.03,
        size=(0.2, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='idontaccept_2',
        depth=-2
    )
    idontaccept_2.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "breif_description" ---
    text = visual.TextStim(win=win, name='text',
        text='¡Gracias por participar en este estudio! Por favor, lee detenidamente la siguiente información y no dudes en preguntarnos si precisas alguna aclaración adicional. Muchas gracias.\n\nEste estudio trata de investigar las diferencias en cómo los hablantes monolingües y nativos de español e inglés reaccionan corporalmente con el lenguaje cotidiano. A nivel intercultural, nuestros idiomas dan forma a nuestro entorno y viceversa. Esto aún no se ha investigado entre dos idiomas.\n',
        font='Arial',
        units='height', pos=(0, 0), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    continuar_4 = visual.ButtonStim(win, 
        text='Acepto', font='Arial',
        pos=(0.55, -0.4),units='height',
        letterHeight=0.03,
        size=(0.2, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='continuar_4',
        depth=-1
    )
    continuar_4.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "experimento" ---
    text_2 = visual.TextStim(win=win, name='text_2',
        text='Ahora, comenzarás el estudio, que durará aproximadamente 40 minutos y la compensación será de 7 euros. Por favor, una vez comenzado el test, es importante que realices el estudio todo seguido hasta el final y evitando distracciones (móvil, ruidos, levantarse, etc.). Con el objetivo de asegurarnos de que la tarea se hace adecuadamente, deberás contestar algunas preguntas no relacionadas con el estudio. Estas preguntas NO RELACIONADAS con el estudio le servirán al investigador responsable para saber si estás prestando la atención necesaria y haciendo el experimento online adecuadamente. Una vez completada la tarea, un comité de investigadores chequeará la fiabilidad de los datos y, en caso de sospecha de fraudulencia (p. ej., si las preguntas NO RELACIONADAS con el estudio no se responden correctamente a menudo), esto podría llevar a tu exclusión del estudio o a no compensarte económicamente.',
        font='Arial',
        pos=(0, 0.2), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    text_3 = visual.TextStim(win=win, name='text_3',
        text='TEN EN CUENTA QUE para llevar a cabo este estudio:\n\n-Es necesario que dispongas de un teclado y un ratón.\n\n-Debes utilizar Firefox o Chrome.\n\n-Sólo puedes realizar el experimento en portátil, ordenador de MAC o PC. \n\n-La ventana del experimento se cerrará automáticamente al pulsar "Fin".\n',
        font='Arial',
        units='height', pos=(0, -0.2), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-1.0);
    continuar_5 = visual.ButtonStim(win, 
        text='Acepto', font='Arial',
        pos=(0.55, -0.4),units='height',
        letterHeight=0.03,
        size=(0.2, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='continuar_5',
        depth=-2
    )
    continuar_5.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "instructions2PAN" ---
    instructions2PANtext = visual.TextStim(win=win, name='instructions2PANtext',
        text='INSTRUCCIONES\n\nTe vamos a preguntar cómo percibes palabras frecuentes usando seis sentidos corporales. No hay respuestas correctas ni incorrectas. La medida es de 0 (nunca lo percibes usando esa sensación corporal) hasta 5 (interactúas mucho usando esa sensación corporal). \n\nHaz clic en el número y cuando ya hayas rellenado las seis sensaciones, pulsa el botón "Siguiente" para empezar la siguiente palabra. Si no reconoces una palabra, pulsa “No sé la palabra" y haz clic en "Siguente" para continuar.\n\nSi quieres saber más sobre el experimento, ponte en contacto con los investigadores principales: Clara Martin (c.martin@bcbl.eu) o Cesar Caballero-Gaudes (c.caballero@bcbl.eu) en BCBL. ',
        font='Arial',
        units='height', pos=(0, 0), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    next2PANinstr = visual.ButtonStim(win, 
        text='Siguiente', font='Arial',
        pos=(0.55, -0.4),units='height',
        letterHeight=0.03,
        size=(0.2, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='next2PANinstr',
        depth=-1
    )
    next2PANinstr.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "SentirES_psychopy" ---
    pregunta = visual.TextStim(win=win, name='pregunta',
        text='Cómo percibes',
        font='Arial',
        units='height', pos=(-0.4,0.4), draggable=False, height=0.04, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    stimuli = visual.TextStim(win=win, name='stimuli',
        text='',
        font='Arial',
        units='height', pos=(-0.4,0.3), draggable=False, height=0.045, wrapWidth=None, ori=0.0, 
        color='White', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-1.0);
    audition = visual.TextStim(win=win, name='audition',
        text='usando audición',
        font='Arial',
        units='height', pos=(-0.52,0.2), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-2.0);
    taste = visual.TextStim(win=win, name='taste',
        text='usando sabor',
        font='Arial',
        units='height', pos=(-0.52,0.1), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-3.0);
    haptic = visual.TextStim(win=win, name='haptic',
        text='usando tacto',
        font='Arial',
        units='height', pos=(-0.52,0), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-4.0);
    olfaction = visual.TextStim(win=win, name='olfaction',
        text='usando olor',
        font='Arial',
        units='height', pos=(-0.52,-0.1), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-5.0);
    vision = visual.TextStim(win=win, name='vision',
        text='usando visión',
        font='Arial',
        units='height', pos=(-0.52,-0.2), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='White', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-6.0);
    interoception = visual.TextStim(win=win, name='interoception',
        text='usando sensaciones \nintracorporales',
        font='Arial',
        units='height', pos=(-0.52,-0.3), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='White', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-7.0);
    auditionslider = visual.Slider(win=win, name='auditionslider',
        startValue=0, size=(0.7, 0.05), pos=(0,0.2), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=1.0,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-8, readOnly=False)
    tasteslider = visual.Slider(win=win, name='tasteslider',
        startValue=None, size=(0.7, 0.05), pos=(0, 0.1), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=1.0,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-9, readOnly=False)
    hapticslider = visual.Slider(win=win, name='hapticslider',
        startValue=None, size=(0.7, 0.05), pos=(0,0), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=1.0,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-10, readOnly=False)
    olfactionslider = visual.Slider(win=win, name='olfactionslider',
        startValue=None, size=(0.7, 0.05), pos=(0,-0.1), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=1.0,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-11, readOnly=False)
    visionslider = visual.Slider(win=win, name='visionslider',
        startValue=None, size=(0.7, 0.05), pos=(0,-0.2), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=None,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-12, readOnly=False)
    interoceptionsslider = visual.Slider(win=win, name='interoceptionsslider',
        startValue=None, size=(0.7, 0.05), pos=(0,-0.3), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=None,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-13, readOnly=False)
    next2PANstim = visual.ButtonStim(win, 
        text='Siguiente', font='Arial',
        pos=(0.55, -0.4),units='height',
        letterHeight=0.03,
        size=(0.2, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='next2PANstim',
        depth=-14
    )
    next2PANstim.buttonClock = core.Clock()
    nose2PAN = visual.ButtonStim(win, 
        text='no sé esta palabra', font='Arial',
        pos=(0.55, 0.3),units='height',
        letterHeight=0.03,
        size=(0.4, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=1.0,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='nose2PAN',
        depth=-15
    )
    nose2PAN.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "catch2PAN1" ---
    catch2PANanimal = visual.TextStim(win=win, name='catch2PANanimal',
        text='Elije el animal que vuela.',
        font='Arial',
        units='height', pos=(0, 0.3), draggable=False, height=0.06, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    Oso = visual.ButtonStim(win, 
        text='Oso', font='Arvo',
        pos=(-0.5, 0),units='height',
        letterHeight=0.04,
        size=(0.3, 0.3), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=1.0,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='Oso',
        depth=-1
    )
    Oso.buttonClock = core.Clock()
    Pez = visual.ButtonStim(win, 
        text='Pez', font='Arvo',
        pos=(0, 0),units='height',
        letterHeight=0.04,
        size=(0.3, 0.3), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=1.0,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='Pez',
        depth=-2
    )
    Pez.buttonClock = core.Clock()
    Ave = visual.ButtonStim(win, 
        text='Ave', font='Arvo',
        pos=(0.5,0),units='height',
        letterHeight=0.04,
        size=(0.3, 0.3), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=1.0,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='Ave',
        depth=-3
    )
    Ave.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "SentirES_psychopy" ---
    pregunta = visual.TextStim(win=win, name='pregunta',
        text='Cómo percibes',
        font='Arial',
        units='height', pos=(-0.4,0.4), draggable=False, height=0.04, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    stimuli = visual.TextStim(win=win, name='stimuli',
        text='',
        font='Arial',
        units='height', pos=(-0.4,0.3), draggable=False, height=0.045, wrapWidth=None, ori=0.0, 
        color='White', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-1.0);
    audition = visual.TextStim(win=win, name='audition',
        text='usando audición',
        font='Arial',
        units='height', pos=(-0.52,0.2), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-2.0);
    taste = visual.TextStim(win=win, name='taste',
        text='usando sabor',
        font='Arial',
        units='height', pos=(-0.52,0.1), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-3.0);
    haptic = visual.TextStim(win=win, name='haptic',
        text='usando tacto',
        font='Arial',
        units='height', pos=(-0.52,0), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-4.0);
    olfaction = visual.TextStim(win=win, name='olfaction',
        text='usando olor',
        font='Arial',
        units='height', pos=(-0.52,-0.1), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-5.0);
    vision = visual.TextStim(win=win, name='vision',
        text='usando visión',
        font='Arial',
        units='height', pos=(-0.52,-0.2), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='White', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-6.0);
    interoception = visual.TextStim(win=win, name='interoception',
        text='usando sensaciones \nintracorporales',
        font='Arial',
        units='height', pos=(-0.52,-0.3), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='White', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-7.0);
    auditionslider = visual.Slider(win=win, name='auditionslider',
        startValue=0, size=(0.7, 0.05), pos=(0,0.2), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=1.0,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-8, readOnly=False)
    tasteslider = visual.Slider(win=win, name='tasteslider',
        startValue=None, size=(0.7, 0.05), pos=(0, 0.1), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=1.0,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-9, readOnly=False)
    hapticslider = visual.Slider(win=win, name='hapticslider',
        startValue=None, size=(0.7, 0.05), pos=(0,0), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=1.0,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-10, readOnly=False)
    olfactionslider = visual.Slider(win=win, name='olfactionslider',
        startValue=None, size=(0.7, 0.05), pos=(0,-0.1), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=1.0,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-11, readOnly=False)
    visionslider = visual.Slider(win=win, name='visionslider',
        startValue=None, size=(0.7, 0.05), pos=(0,-0.2), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=None,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-12, readOnly=False)
    interoceptionsslider = visual.Slider(win=win, name='interoceptionsslider',
        startValue=None, size=(0.7, 0.05), pos=(0,-0.3), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=None,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-13, readOnly=False)
    next2PANstim = visual.ButtonStim(win, 
        text='Siguiente', font='Arial',
        pos=(0.55, -0.4),units='height',
        letterHeight=0.03,
        size=(0.2, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='next2PANstim',
        depth=-14
    )
    next2PANstim.buttonClock = core.Clock()
    nose2PAN = visual.ButtonStim(win, 
        text='no sé esta palabra', font='Arial',
        pos=(0.55, 0.3),units='height',
        letterHeight=0.03,
        size=(0.4, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=1.0,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='nose2PAN',
        depth=-15
    )
    nose2PAN.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "catch2SPAN2" ---
    catch2PANmates = visual.TextStim(win=win, name='catch2PANmates',
        text='¿Qué es 5 x 3?',
        font='Arial',
        units='height', pos=(0, 0.3), draggable=False, height=0.06, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    quinze = visual.ButtonStim(win, 
        text='15', font='Arvo',
        pos=(-0.5, 0),units='height',
        letterHeight=0.04,
        size=(0.3, 0.3), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=1.0,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='quinze',
        depth=-1
    )
    quinze.buttonClock = core.Clock()
    setentaydos = visual.ButtonStim(win, 
        text='72', font='Arvo',
        pos=(0, 0),units='height',
        letterHeight=0.04,
        size=(0.3, 0.3), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=1.0,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='setentaydos',
        depth=-2
    )
    setentaydos.buttonClock = core.Clock()
    cien = visual.ButtonStim(win, 
        text='100', font='Arvo',
        pos=(0.5,0),units='height',
        letterHeight=0.04,
        size=(0.3, 0.3), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=1.0,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='cien',
        depth=-3
    )
    cien.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "break2PAN" ---
    SentirESbreak = visual.TextStim(win=win, name='SentirESbreak',
        text='Si lo deseas, tómate un pequeño descanso.\nPulsa "Siguente" para continuar con el experimento.',
        font='Arial',
        units='height', pos=(0, 0.3), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    next2PANbreak = visual.ButtonStim(win, 
        text='Siguiente', font='Arial',
        pos=(0, -0.4),units='height',
        letterHeight=0.03,
        size=(0.2, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='next2PANbreak',
        depth=-1
    )
    next2PANbreak.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "SentirES_psychopy" ---
    pregunta = visual.TextStim(win=win, name='pregunta',
        text='Cómo percibes',
        font='Arial',
        units='height', pos=(-0.4,0.4), draggable=False, height=0.04, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    stimuli = visual.TextStim(win=win, name='stimuli',
        text='',
        font='Arial',
        units='height', pos=(-0.4,0.3), draggable=False, height=0.045, wrapWidth=None, ori=0.0, 
        color='White', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-1.0);
    audition = visual.TextStim(win=win, name='audition',
        text='usando audición',
        font='Arial',
        units='height', pos=(-0.52,0.2), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-2.0);
    taste = visual.TextStim(win=win, name='taste',
        text='usando sabor',
        font='Arial',
        units='height', pos=(-0.52,0.1), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-3.0);
    haptic = visual.TextStim(win=win, name='haptic',
        text='usando tacto',
        font='Arial',
        units='height', pos=(-0.52,0), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-4.0);
    olfaction = visual.TextStim(win=win, name='olfaction',
        text='usando olor',
        font='Arial',
        units='height', pos=(-0.52,-0.1), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-5.0);
    vision = visual.TextStim(win=win, name='vision',
        text='usando visión',
        font='Arial',
        units='height', pos=(-0.52,-0.2), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='White', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-6.0);
    interoception = visual.TextStim(win=win, name='interoception',
        text='usando sensaciones \nintracorporales',
        font='Arial',
        units='height', pos=(-0.52,-0.3), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='White', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-7.0);
    auditionslider = visual.Slider(win=win, name='auditionslider',
        startValue=0, size=(0.7, 0.05), pos=(0,0.2), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=1.0,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-8, readOnly=False)
    tasteslider = visual.Slider(win=win, name='tasteslider',
        startValue=None, size=(0.7, 0.05), pos=(0, 0.1), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=1.0,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-9, readOnly=False)
    hapticslider = visual.Slider(win=win, name='hapticslider',
        startValue=None, size=(0.7, 0.05), pos=(0,0), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=1.0,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-10, readOnly=False)
    olfactionslider = visual.Slider(win=win, name='olfactionslider',
        startValue=None, size=(0.7, 0.05), pos=(0,-0.1), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=1.0,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-11, readOnly=False)
    visionslider = visual.Slider(win=win, name='visionslider',
        startValue=None, size=(0.7, 0.05), pos=(0,-0.2), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=None,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-12, readOnly=False)
    interoceptionsslider = visual.Slider(win=win, name='interoceptionsslider',
        startValue=None, size=(0.7, 0.05), pos=(0,-0.3), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=None,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-13, readOnly=False)
    next2PANstim = visual.ButtonStim(win, 
        text='Siguiente', font='Arial',
        pos=(0.55, -0.4),units='height',
        letterHeight=0.03,
        size=(0.2, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='next2PANstim',
        depth=-14
    )
    next2PANstim.buttonClock = core.Clock()
    nose2PAN = visual.ButtonStim(win, 
        text='no sé esta palabra', font='Arial',
        pos=(0.55, 0.3),units='height',
        letterHeight=0.03,
        size=(0.4, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=1.0,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='nose2PAN',
        depth=-15
    )
    nose2PAN.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "catch2PAN3" ---
    catch2PANfruta = visual.TextStim(win=win, name='catch2PANfruta',
        text='Elije la fruta',
        font='Arial',
        units='height', pos=(0, 0.3), draggable=False, height=0.06, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    bocadillo = visual.ButtonStim(win, 
        text='bocadillo', font='Arvo',
        pos=(-0.5, 0),units='height',
        letterHeight=0.04,
        size=(0.3, 0.3), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=1.0,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='bocadillo',
        depth=-1
    )
    bocadillo.buttonClock = core.Clock()
    coliflor = visual.ButtonStim(win, 
        text='coliflor', font='Arvo',
        pos=(0, 0),units='height',
        letterHeight=0.04,
        size=(0.3, 0.3), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=1.0,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='coliflor',
        depth=-2
    )
    coliflor.buttonClock = core.Clock()
    manzana = visual.ButtonStim(win, 
        text='manzana', font='Arvo',
        pos=(0.5,0),units='height',
        letterHeight=0.04,
        size=(0.3, 0.3), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=1.0,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='manzana',
        depth=-3
    )
    manzana.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "SentirES_psychopy" ---
    pregunta = visual.TextStim(win=win, name='pregunta',
        text='Cómo percibes',
        font='Arial',
        units='height', pos=(-0.4,0.4), draggable=False, height=0.04, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    stimuli = visual.TextStim(win=win, name='stimuli',
        text='',
        font='Arial',
        units='height', pos=(-0.4,0.3), draggable=False, height=0.045, wrapWidth=None, ori=0.0, 
        color='White', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-1.0);
    audition = visual.TextStim(win=win, name='audition',
        text='usando audición',
        font='Arial',
        units='height', pos=(-0.52,0.2), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-2.0);
    taste = visual.TextStim(win=win, name='taste',
        text='usando sabor',
        font='Arial',
        units='height', pos=(-0.52,0.1), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-3.0);
    haptic = visual.TextStim(win=win, name='haptic',
        text='usando tacto',
        font='Arial',
        units='height', pos=(-0.52,0), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-4.0);
    olfaction = visual.TextStim(win=win, name='olfaction',
        text='usando olor',
        font='Arial',
        units='height', pos=(-0.52,-0.1), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-5.0);
    vision = visual.TextStim(win=win, name='vision',
        text='usando visión',
        font='Arial',
        units='height', pos=(-0.52,-0.2), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='White', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-6.0);
    interoception = visual.TextStim(win=win, name='interoception',
        text='usando sensaciones \nintracorporales',
        font='Arial',
        units='height', pos=(-0.52,-0.3), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color='White', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-7.0);
    auditionslider = visual.Slider(win=win, name='auditionslider',
        startValue=0, size=(0.7, 0.05), pos=(0,0.2), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=1.0,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-8, readOnly=False)
    tasteslider = visual.Slider(win=win, name='tasteslider',
        startValue=None, size=(0.7, 0.05), pos=(0, 0.1), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=1.0,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-9, readOnly=False)
    hapticslider = visual.Slider(win=win, name='hapticslider',
        startValue=None, size=(0.7, 0.05), pos=(0,0), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=1.0,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-10, readOnly=False)
    olfactionslider = visual.Slider(win=win, name='olfactionslider',
        startValue=None, size=(0.7, 0.05), pos=(0,-0.1), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=1.0,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-11, readOnly=False)
    visionslider = visual.Slider(win=win, name='visionslider',
        startValue=None, size=(0.7, 0.05), pos=(0,-0.2), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=None,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-12, readOnly=False)
    interoceptionsslider = visual.Slider(win=win, name='interoceptionsslider',
        startValue=None, size=(0.7, 0.05), pos=(0,-0.3), units='height',
        labels=["nada","totalmente"], ticks=(0,1, 2, 3, 4, 5), granularity=1.0,
        style='rating', styleTweaks=(), opacity=None,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Arial', labelHeight=0.02,
        flip=False, ori=0.0, depth=-13, readOnly=False)
    next2PANstim = visual.ButtonStim(win, 
        text='Siguiente', font='Arial',
        pos=(0.55, -0.4),units='height',
        letterHeight=0.03,
        size=(0.2, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='next2PANstim',
        depth=-14
    )
    next2PANstim.buttonClock = core.Clock()
    nose2PAN = visual.ButtonStim(win, 
        text='no sé esta palabra', font='Arial',
        pos=(0.55, 0.3),units='height',
        letterHeight=0.03,
        size=(0.4, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=1.0,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='nose2PAN',
        depth=-15
    )
    nose2PAN.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "debriefing_2" ---
    debriefing_3 = visual.TextStim(win=win, name='debriefing_3',
        text='Este estudio trata de investigar las diferencias en cómo los hablantes monolingües y nativos de español e inglés reaccionan corporalmente con el lenguaje cotidiano. A nivel intercultural, nuestros idiomas dan forma a nuestro entorno y viceversa. Esto aún no se ha investigado entre dos idiomas.\n\nNuestra hipótesis es que encontraremos diferencias entre la forma en que los hablantes monolingües nativos del español e inglés marquen las palabras en la encuesta. La encuesta que acabas de completar nos ayudará a formar una representación de estas dos culturas e idiomas.\n\nEn un mundo en constante evolución de la tecnología y la inteligencia artificial, este estudio ayuda a los investigadores a fundamentar la manera en que el lenguaje evoca respuestas sensoriales en nuestros cuerpos.\n',
        font='Arial',
        units='height', pos=(0, 0.25), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    contact = visual.TextStim(win=win, name='contact',
        text='Si quieres saber más sobre el centro que ha diseñado este experimento, BCBL (Basque Center on Cognition, Brain and Language), visita nuestra web (www.bcbl.eu) y síguenos en redes sociales como Facebook (@bcbl.eu), Instagram (bcbl_basque_center), Twitter (@bcbl_) y YouTube (BCBL) para enterarte de todas las novedades del BCBL y del área de la neurociencia cognitiva.',
        font='Arial',
        units='height', pos=(0, -0.1), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-1.0);
    next = visual.ButtonStim(win, 
        text='Siguiente', font='Arial',
        pos=(0.55, -0.4),units='height',
        letterHeight=0.03,
        size=(0.2, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='next',
        depth=-2
    )
    next.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "fin" ---
    fin_y = visual.TextStim(win=win, name='fin_y',
        text="Gracias por tu participación.\nPulsa 'fin' para finalizar este estudio.",
        font='Arial',
        units='height', pos=(0, -0.2), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    fin2PAN = visual.ButtonStim(win, 
        text='fin', font='Arial',
        pos=(0, -0.4),units='height',
        letterHeight=0.05,
        size=(0.5, 0.5), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor=[-1.0000, 0.0902, 0.0902], borderColor=None,
        color='white', colorSpace='rgb',
        opacity=1.0,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='fin2PAN',
        depth=-1
    )
    fin2PAN.buttonClock = core.Clock()
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "BCBL" ---
    # create an object to store info about Routine BCBL
    BCBL = data.Routine(
        name='BCBL',
        components=[presentation, Acpeto, bcbl],
    )
    BCBL.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # reset Acpeto to account for continued clicks & clear times on/off
    Acpeto.reset()
    # store start times for BCBL
    BCBL.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    BCBL.tStart = globalClock.getTime(format='float')
    BCBL.status = STARTED
    thisExp.addData('BCBL.started', BCBL.tStart)
    BCBL.maxDuration = None
    # keep track of which components have finished
    BCBLComponents = BCBL.components
    for thisComponent in BCBL.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "BCBL" ---
    BCBL.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *presentation* updates
        
        # if presentation is starting this frame...
        if presentation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            presentation.frameNStart = frameN  # exact frame index
            presentation.tStart = t  # local t and not account for scr refresh
            presentation.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(presentation, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'presentation.started')
            # update status
            presentation.status = STARTED
            presentation.setAutoDraw(True)
        
        # if presentation is active this frame...
        if presentation.status == STARTED:
            # update params
            pass
        # *Acpeto* updates
        
        # if Acpeto is starting this frame...
        if Acpeto.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            Acpeto.frameNStart = frameN  # exact frame index
            Acpeto.tStart = t  # local t and not account for scr refresh
            Acpeto.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Acpeto, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Acpeto.started')
            # update status
            Acpeto.status = STARTED
            win.callOnFlip(Acpeto.buttonClock.reset)
            Acpeto.setAutoDraw(True)
        
        # if Acpeto is active this frame...
        if Acpeto.status == STARTED:
            # update params
            pass
            # check whether Acpeto has been pressed
            if Acpeto.isClicked:
                if not Acpeto.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    Acpeto.timesOn.append(Acpeto.buttonClock.getTime())
                    Acpeto.timesOff.append(Acpeto.buttonClock.getTime())
                elif len(Acpeto.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    Acpeto.timesOff[-1] = Acpeto.buttonClock.getTime()
                if not Acpeto.wasClicked:
                    # end routine when Acpeto is clicked
                    continueRoutine = False
                if not Acpeto.wasClicked:
                    # run callback code when Acpeto is clicked
                    pass
        # take note of whether Acpeto was clicked, so that next frame we know if clicks are new
        Acpeto.wasClicked = Acpeto.isClicked and Acpeto.status == STARTED
        
        # *bcbl* updates
        
        # if bcbl is starting this frame...
        if bcbl.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            bcbl.frameNStart = frameN  # exact frame index
            bcbl.tStart = t  # local t and not account for scr refresh
            bcbl.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(bcbl, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'bcbl.started')
            # update status
            bcbl.status = STARTED
            bcbl.setAutoDraw(True)
        
        # if bcbl is active this frame...
        if bcbl.status == STARTED:
            # update params
            pass
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            BCBL.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in BCBL.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "BCBL" ---
    for thisComponent in BCBL.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for BCBL
    BCBL.tStop = globalClock.getTime(format='float')
    BCBL.tStopRefresh = tThisFlipGlobal
    thisExp.addData('BCBL.stopped', BCBL.tStop)
    thisExp.addData('Acpeto.numClicks', Acpeto.numClicks)
    if Acpeto.numClicks:
       thisExp.addData('Acpeto.timesOn', Acpeto.timesOn)
       thisExp.addData('Acpeto.timesOff', Acpeto.timesOff)
    else:
       thisExp.addData('Acpeto.timesOn', "")
       thisExp.addData('Acpeto.timesOff', "")
    thisExp.nextEntry()
    # the Routine "BCBL" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "consent_1" ---
    # create an object to store info about Routine consent_1
    consent_1 = data.Routine(
        name='consent_1',
        components=[personaldata, personaldata_2, personaldata_3, personaldata_4, yesno, yesno_2, yesno_3, yesno_4, Continuar],
    )
    consent_1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    yesno.reset()
    yesno_2.reset()
    yesno_3.reset()
    yesno_4.reset()
    # reset Continuar to account for continued clicks & clear times on/off
    Continuar.reset()
    # store start times for consent_1
    consent_1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    consent_1.tStart = globalClock.getTime(format='float')
    consent_1.status = STARTED
    thisExp.addData('consent_1.started', consent_1.tStart)
    consent_1.maxDuration = None
    # keep track of which components have finished
    consent_1Components = consent_1.components
    for thisComponent in consent_1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "consent_1" ---
    consent_1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *personaldata* updates
        
        # if personaldata is starting this frame...
        if personaldata.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            personaldata.frameNStart = frameN  # exact frame index
            personaldata.tStart = t  # local t and not account for scr refresh
            personaldata.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(personaldata, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'personaldata.started')
            # update status
            personaldata.status = STARTED
            personaldata.setAutoDraw(True)
        
        # if personaldata is active this frame...
        if personaldata.status == STARTED:
            # update params
            pass
        
        # *personaldata_2* updates
        
        # if personaldata_2 is starting this frame...
        if personaldata_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            personaldata_2.frameNStart = frameN  # exact frame index
            personaldata_2.tStart = t  # local t and not account for scr refresh
            personaldata_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(personaldata_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'personaldata_2.started')
            # update status
            personaldata_2.status = STARTED
            personaldata_2.setAutoDraw(True)
        
        # if personaldata_2 is active this frame...
        if personaldata_2.status == STARTED:
            # update params
            pass
        
        # *personaldata_3* updates
        
        # if personaldata_3 is starting this frame...
        if personaldata_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            personaldata_3.frameNStart = frameN  # exact frame index
            personaldata_3.tStart = t  # local t and not account for scr refresh
            personaldata_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(personaldata_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'personaldata_3.started')
            # update status
            personaldata_3.status = STARTED
            personaldata_3.setAutoDraw(True)
        
        # if personaldata_3 is active this frame...
        if personaldata_3.status == STARTED:
            # update params
            pass
        
        # *personaldata_4* updates
        
        # if personaldata_4 is starting this frame...
        if personaldata_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            personaldata_4.frameNStart = frameN  # exact frame index
            personaldata_4.tStart = t  # local t and not account for scr refresh
            personaldata_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(personaldata_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'personaldata_4.started')
            # update status
            personaldata_4.status = STARTED
            personaldata_4.setAutoDraw(True)
        
        # if personaldata_4 is active this frame...
        if personaldata_4.status == STARTED:
            # update params
            pass
        
        # *yesno* updates
        
        # if yesno is starting this frame...
        if yesno.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            yesno.frameNStart = frameN  # exact frame index
            yesno.tStart = t  # local t and not account for scr refresh
            yesno.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(yesno, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'yesno.started')
            # update status
            yesno.status = STARTED
            yesno.setAutoDraw(True)
        
        # if yesno is active this frame...
        if yesno.status == STARTED:
            # update params
            pass
        
        # *yesno_2* updates
        
        # if yesno_2 is starting this frame...
        if yesno_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            yesno_2.frameNStart = frameN  # exact frame index
            yesno_2.tStart = t  # local t and not account for scr refresh
            yesno_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(yesno_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'yesno_2.started')
            # update status
            yesno_2.status = STARTED
            yesno_2.setAutoDraw(True)
        
        # if yesno_2 is active this frame...
        if yesno_2.status == STARTED:
            # update params
            pass
        
        # *yesno_3* updates
        
        # if yesno_3 is starting this frame...
        if yesno_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            yesno_3.frameNStart = frameN  # exact frame index
            yesno_3.tStart = t  # local t and not account for scr refresh
            yesno_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(yesno_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'yesno_3.started')
            # update status
            yesno_3.status = STARTED
            yesno_3.setAutoDraw(True)
        
        # if yesno_3 is active this frame...
        if yesno_3.status == STARTED:
            # update params
            pass
        
        # *yesno_4* updates
        
        # if yesno_4 is starting this frame...
        if yesno_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            yesno_4.frameNStart = frameN  # exact frame index
            yesno_4.tStart = t  # local t and not account for scr refresh
            yesno_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(yesno_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'yesno_4.started')
            # update status
            yesno_4.status = STARTED
            yesno_4.setAutoDraw(True)
        
        # if yesno_4 is active this frame...
        if yesno_4.status == STARTED:
            # update params
            pass
        # *Continuar* updates
        
        # if Continuar is starting this frame...
        if Continuar.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            Continuar.frameNStart = frameN  # exact frame index
            Continuar.tStart = t  # local t and not account for scr refresh
            Continuar.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Continuar, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Continuar.started')
            # update status
            Continuar.status = STARTED
            win.callOnFlip(Continuar.buttonClock.reset)
            Continuar.setAutoDraw(True)
        
        # if Continuar is active this frame...
        if Continuar.status == STARTED:
            # update params
            pass
            # check whether Continuar has been pressed
            if Continuar.isClicked:
                if not Continuar.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    Continuar.timesOn.append(Continuar.buttonClock.getTime())
                    Continuar.timesOff.append(Continuar.buttonClock.getTime())
                elif len(Continuar.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    Continuar.timesOff[-1] = Continuar.buttonClock.getTime()
                if not Continuar.wasClicked:
                    # end routine when Continuar is clicked
                    continueRoutine = False
                if not Continuar.wasClicked:
                    # run callback code when Continuar is clicked
                    pass
        # take note of whether Continuar was clicked, so that next frame we know if clicks are new
        Continuar.wasClicked = Continuar.isClicked and Continuar.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            consent_1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in consent_1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "consent_1" ---
    for thisComponent in consent_1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for consent_1
    consent_1.tStop = globalClock.getTime(format='float')
    consent_1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('consent_1.stopped', consent_1.tStop)
    thisExp.addData('yesno.response', yesno.getRating())
    thisExp.addData('yesno.rt', yesno.getRT())
    thisExp.addData('yesno_2.response', yesno_2.getRating())
    thisExp.addData('yesno_2.rt', yesno_2.getRT())
    thisExp.addData('yesno_3.response', yesno_3.getRating())
    thisExp.addData('yesno_3.rt', yesno_3.getRT())
    thisExp.addData('yesno_4.response', yesno_4.getRating())
    thisExp.addData('yesno_4.rt', yesno_4.getRT())
    thisExp.addData('Continuar.numClicks', Continuar.numClicks)
    if Continuar.numClicks:
       thisExp.addData('Continuar.timesOn', Continuar.timesOn)
       thisExp.addData('Continuar.timesOff', Continuar.timesOff)
    else:
       thisExp.addData('Continuar.timesOn', "")
       thisExp.addData('Continuar.timesOff', "")
    thisExp.nextEntry()
    # the Routine "consent_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "concent_2" ---
    # create an object to store info about Routine concent_2
    concent_2 = data.Routine(
        name='concent_2',
        components=[personaldata_5, personaldata_6, personaldata_7, personaldata_8, yesno_5, continuar_2],
    )
    concent_2.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    yesno_5.reset()
    # reset continuar_2 to account for continued clicks & clear times on/off
    continuar_2.reset()
    # store start times for concent_2
    concent_2.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    concent_2.tStart = globalClock.getTime(format='float')
    concent_2.status = STARTED
    thisExp.addData('concent_2.started', concent_2.tStart)
    concent_2.maxDuration = None
    # keep track of which components have finished
    concent_2Components = concent_2.components
    for thisComponent in concent_2.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "concent_2" ---
    concent_2.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *personaldata_5* updates
        
        # if personaldata_5 is starting this frame...
        if personaldata_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            personaldata_5.frameNStart = frameN  # exact frame index
            personaldata_5.tStart = t  # local t and not account for scr refresh
            personaldata_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(personaldata_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'personaldata_5.started')
            # update status
            personaldata_5.status = STARTED
            personaldata_5.setAutoDraw(True)
        
        # if personaldata_5 is active this frame...
        if personaldata_5.status == STARTED:
            # update params
            pass
        
        # *personaldata_6* updates
        
        # if personaldata_6 is starting this frame...
        if personaldata_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            personaldata_6.frameNStart = frameN  # exact frame index
            personaldata_6.tStart = t  # local t and not account for scr refresh
            personaldata_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(personaldata_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'personaldata_6.started')
            # update status
            personaldata_6.status = STARTED
            personaldata_6.setAutoDraw(True)
        
        # if personaldata_6 is active this frame...
        if personaldata_6.status == STARTED:
            # update params
            pass
        
        # *personaldata_7* updates
        
        # if personaldata_7 is starting this frame...
        if personaldata_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            personaldata_7.frameNStart = frameN  # exact frame index
            personaldata_7.tStart = t  # local t and not account for scr refresh
            personaldata_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(personaldata_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'personaldata_7.started')
            # update status
            personaldata_7.status = STARTED
            personaldata_7.setAutoDraw(True)
        
        # if personaldata_7 is active this frame...
        if personaldata_7.status == STARTED:
            # update params
            pass
        
        # *personaldata_8* updates
        
        # if personaldata_8 is starting this frame...
        if personaldata_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            personaldata_8.frameNStart = frameN  # exact frame index
            personaldata_8.tStart = t  # local t and not account for scr refresh
            personaldata_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(personaldata_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'personaldata_8.started')
            # update status
            personaldata_8.status = STARTED
            personaldata_8.setAutoDraw(True)
        
        # if personaldata_8 is active this frame...
        if personaldata_8.status == STARTED:
            # update params
            pass
        
        # *yesno_5* updates
        
        # if yesno_5 is starting this frame...
        if yesno_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            yesno_5.frameNStart = frameN  # exact frame index
            yesno_5.tStart = t  # local t and not account for scr refresh
            yesno_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(yesno_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'yesno_5.started')
            # update status
            yesno_5.status = STARTED
            yesno_5.setAutoDraw(True)
        
        # if yesno_5 is active this frame...
        if yesno_5.status == STARTED:
            # update params
            pass
        # *continuar_2* updates
        
        # if continuar_2 is starting this frame...
        if continuar_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            continuar_2.frameNStart = frameN  # exact frame index
            continuar_2.tStart = t  # local t and not account for scr refresh
            continuar_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(continuar_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'continuar_2.started')
            # update status
            continuar_2.status = STARTED
            win.callOnFlip(continuar_2.buttonClock.reset)
            continuar_2.setAutoDraw(True)
        
        # if continuar_2 is active this frame...
        if continuar_2.status == STARTED:
            # update params
            pass
            # check whether continuar_2 has been pressed
            if continuar_2.isClicked:
                if not continuar_2.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    continuar_2.timesOn.append(continuar_2.buttonClock.getTime())
                    continuar_2.timesOff.append(continuar_2.buttonClock.getTime())
                elif len(continuar_2.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    continuar_2.timesOff[-1] = continuar_2.buttonClock.getTime()
                if not continuar_2.wasClicked:
                    # end routine when continuar_2 is clicked
                    continueRoutine = False
                if not continuar_2.wasClicked:
                    # run callback code when continuar_2 is clicked
                    pass
        # take note of whether continuar_2 was clicked, so that next frame we know if clicks are new
        continuar_2.wasClicked = continuar_2.isClicked and continuar_2.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            concent_2.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in concent_2.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "concent_2" ---
    for thisComponent in concent_2.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for concent_2
    concent_2.tStop = globalClock.getTime(format='float')
    concent_2.tStopRefresh = tThisFlipGlobal
    thisExp.addData('concent_2.stopped', concent_2.tStop)
    thisExp.addData('yesno_5.response', yesno_5.getRating())
    thisExp.addData('yesno_5.rt', yesno_5.getRT())
    thisExp.addData('continuar_2.numClicks', continuar_2.numClicks)
    if continuar_2.numClicks:
       thisExp.addData('continuar_2.timesOn', continuar_2.timesOn)
       thisExp.addData('continuar_2.timesOff', continuar_2.timesOff)
    else:
       thisExp.addData('continuar_2.timesOn', "")
       thisExp.addData('continuar_2.timesOff', "")
    thisExp.nextEntry()
    # the Routine "concent_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "consent_3" ---
    # create an object to store info about Routine consent_3
    consent_3 = data.Routine(
        name='consent_3',
        components=[perdonaldata_9, personaldata_10, personaldata_11, personaldata_12, continuar_3],
    )
    consent_3.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # reset continuar_3 to account for continued clicks & clear times on/off
    continuar_3.reset()
    # store start times for consent_3
    consent_3.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    consent_3.tStart = globalClock.getTime(format='float')
    consent_3.status = STARTED
    thisExp.addData('consent_3.started', consent_3.tStart)
    consent_3.maxDuration = None
    # keep track of which components have finished
    consent_3Components = consent_3.components
    for thisComponent in consent_3.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "consent_3" ---
    consent_3.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *perdonaldata_9* updates
        
        # if perdonaldata_9 is starting this frame...
        if perdonaldata_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            perdonaldata_9.frameNStart = frameN  # exact frame index
            perdonaldata_9.tStart = t  # local t and not account for scr refresh
            perdonaldata_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(perdonaldata_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'perdonaldata_9.started')
            # update status
            perdonaldata_9.status = STARTED
            perdonaldata_9.setAutoDraw(True)
        
        # if perdonaldata_9 is active this frame...
        if perdonaldata_9.status == STARTED:
            # update params
            pass
        
        # *personaldata_10* updates
        
        # if personaldata_10 is starting this frame...
        if personaldata_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            personaldata_10.frameNStart = frameN  # exact frame index
            personaldata_10.tStart = t  # local t and not account for scr refresh
            personaldata_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(personaldata_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'personaldata_10.started')
            # update status
            personaldata_10.status = STARTED
            personaldata_10.setAutoDraw(True)
        
        # if personaldata_10 is active this frame...
        if personaldata_10.status == STARTED:
            # update params
            pass
        
        # *personaldata_11* updates
        
        # if personaldata_11 is starting this frame...
        if personaldata_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            personaldata_11.frameNStart = frameN  # exact frame index
            personaldata_11.tStart = t  # local t and not account for scr refresh
            personaldata_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(personaldata_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'personaldata_11.started')
            # update status
            personaldata_11.status = STARTED
            personaldata_11.setAutoDraw(True)
        
        # if personaldata_11 is active this frame...
        if personaldata_11.status == STARTED:
            # update params
            pass
        
        # *personaldata_12* updates
        
        # if personaldata_12 is starting this frame...
        if personaldata_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            personaldata_12.frameNStart = frameN  # exact frame index
            personaldata_12.tStart = t  # local t and not account for scr refresh
            personaldata_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(personaldata_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'personaldata_12.started')
            # update status
            personaldata_12.status = STARTED
            personaldata_12.setAutoDraw(True)
        
        # if personaldata_12 is active this frame...
        if personaldata_12.status == STARTED:
            # update params
            pass
        # *continuar_3* updates
        
        # if continuar_3 is starting this frame...
        if continuar_3.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            continuar_3.frameNStart = frameN  # exact frame index
            continuar_3.tStart = t  # local t and not account for scr refresh
            continuar_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(continuar_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'continuar_3.started')
            # update status
            continuar_3.status = STARTED
            win.callOnFlip(continuar_3.buttonClock.reset)
            continuar_3.setAutoDraw(True)
        
        # if continuar_3 is active this frame...
        if continuar_3.status == STARTED:
            # update params
            pass
            # check whether continuar_3 has been pressed
            if continuar_3.isClicked:
                if not continuar_3.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    continuar_3.timesOn.append(continuar_3.buttonClock.getTime())
                    continuar_3.timesOff.append(continuar_3.buttonClock.getTime())
                elif len(continuar_3.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    continuar_3.timesOff[-1] = continuar_3.buttonClock.getTime()
                if not continuar_3.wasClicked:
                    # end routine when continuar_3 is clicked
                    continueRoutine = False
                if not continuar_3.wasClicked:
                    # run callback code when continuar_3 is clicked
                    pass
        # take note of whether continuar_3 was clicked, so that next frame we know if clicks are new
        continuar_3.wasClicked = continuar_3.isClicked and continuar_3.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            consent_3.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in consent_3.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "consent_3" ---
    for thisComponent in consent_3.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for consent_3
    consent_3.tStop = globalClock.getTime(format='float')
    consent_3.tStopRefresh = tThisFlipGlobal
    thisExp.addData('consent_3.stopped', consent_3.tStop)
    thisExp.addData('continuar_3.numClicks', continuar_3.numClicks)
    if continuar_3.numClicks:
       thisExp.addData('continuar_3.timesOn', continuar_3.timesOn)
       thisExp.addData('continuar_3.timesOff', continuar_3.timesOff)
    else:
       thisExp.addData('continuar_3.timesOn', "")
       thisExp.addData('continuar_3.timesOff', "")
    thisExp.nextEntry()
    # the Routine "consent_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "aut_personaldata" ---
    # create an object to store info about Routine aut_personaldata
    aut_personaldata = data.Routine(
        name='aut_personaldata',
        components=[infomored, informed_2, Iaccept, idonotaccept],
    )
    aut_personaldata.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # reset Iaccept to account for continued clicks & clear times on/off
    Iaccept.reset()
    # reset idonotaccept to account for continued clicks & clear times on/off
    idonotaccept.reset()
    # store start times for aut_personaldata
    aut_personaldata.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    aut_personaldata.tStart = globalClock.getTime(format='float')
    aut_personaldata.status = STARTED
    thisExp.addData('aut_personaldata.started', aut_personaldata.tStart)
    aut_personaldata.maxDuration = None
    # keep track of which components have finished
    aut_personaldataComponents = aut_personaldata.components
    for thisComponent in aut_personaldata.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "aut_personaldata" ---
    aut_personaldata.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *infomored* updates
        
        # if infomored is starting this frame...
        if infomored.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            infomored.frameNStart = frameN  # exact frame index
            infomored.tStart = t  # local t and not account for scr refresh
            infomored.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(infomored, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'infomored.started')
            # update status
            infomored.status = STARTED
            infomored.setAutoDraw(True)
        
        # if infomored is active this frame...
        if infomored.status == STARTED:
            # update params
            pass
        
        # *informed_2* updates
        
        # if informed_2 is starting this frame...
        if informed_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            informed_2.frameNStart = frameN  # exact frame index
            informed_2.tStart = t  # local t and not account for scr refresh
            informed_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(informed_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'informed_2.started')
            # update status
            informed_2.status = STARTED
            informed_2.setAutoDraw(True)
        
        # if informed_2 is active this frame...
        if informed_2.status == STARTED:
            # update params
            pass
        # *Iaccept* updates
        
        # if Iaccept is starting this frame...
        if Iaccept.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            Iaccept.frameNStart = frameN  # exact frame index
            Iaccept.tStart = t  # local t and not account for scr refresh
            Iaccept.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Iaccept, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Iaccept.started')
            # update status
            Iaccept.status = STARTED
            win.callOnFlip(Iaccept.buttonClock.reset)
            Iaccept.setAutoDraw(True)
        
        # if Iaccept is active this frame...
        if Iaccept.status == STARTED:
            # update params
            pass
            # check whether Iaccept has been pressed
            if Iaccept.isClicked:
                if not Iaccept.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    Iaccept.timesOn.append(Iaccept.buttonClock.getTime())
                    Iaccept.timesOff.append(Iaccept.buttonClock.getTime())
                elif len(Iaccept.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    Iaccept.timesOff[-1] = Iaccept.buttonClock.getTime()
                if not Iaccept.wasClicked:
                    # end routine when Iaccept is clicked
                    continueRoutine = False
                if not Iaccept.wasClicked:
                    # run callback code when Iaccept is clicked
                    pass
        # take note of whether Iaccept was clicked, so that next frame we know if clicks are new
        Iaccept.wasClicked = Iaccept.isClicked and Iaccept.status == STARTED
        # *idonotaccept* updates
        
        # if idonotaccept is starting this frame...
        if idonotaccept.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            idonotaccept.frameNStart = frameN  # exact frame index
            idonotaccept.tStart = t  # local t and not account for scr refresh
            idonotaccept.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(idonotaccept, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'idonotaccept.started')
            # update status
            idonotaccept.status = STARTED
            win.callOnFlip(idonotaccept.buttonClock.reset)
            idonotaccept.setAutoDraw(True)
        
        # if idonotaccept is active this frame...
        if idonotaccept.status == STARTED:
            # update params
            pass
            # check whether idonotaccept has been pressed
            if idonotaccept.isClicked:
                if not idonotaccept.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    idonotaccept.timesOn.append(idonotaccept.buttonClock.getTime())
                    idonotaccept.timesOff.append(idonotaccept.buttonClock.getTime())
                elif len(idonotaccept.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    idonotaccept.timesOff[-1] = idonotaccept.buttonClock.getTime()
                if not idonotaccept.wasClicked:
                    # run callback code when idonotaccept is clicked
                    pass
        # take note of whether idonotaccept was clicked, so that next frame we know if clicks are new
        idonotaccept.wasClicked = idonotaccept.isClicked and idonotaccept.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            aut_personaldata.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in aut_personaldata.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "aut_personaldata" ---
    for thisComponent in aut_personaldata.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for aut_personaldata
    aut_personaldata.tStop = globalClock.getTime(format='float')
    aut_personaldata.tStopRefresh = tThisFlipGlobal
    thisExp.addData('aut_personaldata.stopped', aut_personaldata.tStop)
    thisExp.addData('Iaccept.numClicks', Iaccept.numClicks)
    if Iaccept.numClicks:
       thisExp.addData('Iaccept.timesOn', Iaccept.timesOn)
       thisExp.addData('Iaccept.timesOff', Iaccept.timesOff)
    else:
       thisExp.addData('Iaccept.timesOn', "")
       thisExp.addData('Iaccept.timesOff', "")
    thisExp.addData('idonotaccept.numClicks', idonotaccept.numClicks)
    if idonotaccept.numClicks:
       thisExp.addData('idonotaccept.timesOn', idonotaccept.timesOn)
       thisExp.addData('idonotaccept.timesOff', idonotaccept.timesOff)
    else:
       thisExp.addData('idonotaccept.timesOn', "")
       thisExp.addData('idonotaccept.timesOff', "")
    thisExp.nextEntry()
    # the Routine "aut_personaldata" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "fine_print" ---
    # create an object to store info about Routine fine_print
    fine_print = data.Routine(
        name='fine_print',
        components=[fine_print_consent, Iaccept_2, idontaccept_2],
    )
    fine_print.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # reset Iaccept_2 to account for continued clicks & clear times on/off
    Iaccept_2.reset()
    # reset idontaccept_2 to account for continued clicks & clear times on/off
    idontaccept_2.reset()
    # store start times for fine_print
    fine_print.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    fine_print.tStart = globalClock.getTime(format='float')
    fine_print.status = STARTED
    thisExp.addData('fine_print.started', fine_print.tStart)
    fine_print.maxDuration = None
    # keep track of which components have finished
    fine_printComponents = fine_print.components
    for thisComponent in fine_print.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "fine_print" ---
    fine_print.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fine_print_consent* updates
        
        # if fine_print_consent is starting this frame...
        if fine_print_consent.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fine_print_consent.frameNStart = frameN  # exact frame index
            fine_print_consent.tStart = t  # local t and not account for scr refresh
            fine_print_consent.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fine_print_consent, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'fine_print_consent.started')
            # update status
            fine_print_consent.status = STARTED
            fine_print_consent.setAutoDraw(True)
        
        # if fine_print_consent is active this frame...
        if fine_print_consent.status == STARTED:
            # update params
            pass
        # *Iaccept_2* updates
        
        # if Iaccept_2 is starting this frame...
        if Iaccept_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            Iaccept_2.frameNStart = frameN  # exact frame index
            Iaccept_2.tStart = t  # local t and not account for scr refresh
            Iaccept_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Iaccept_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Iaccept_2.started')
            # update status
            Iaccept_2.status = STARTED
            win.callOnFlip(Iaccept_2.buttonClock.reset)
            Iaccept_2.setAutoDraw(True)
        
        # if Iaccept_2 is active this frame...
        if Iaccept_2.status == STARTED:
            # update params
            pass
            # check whether Iaccept_2 has been pressed
            if Iaccept_2.isClicked:
                if not Iaccept_2.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    Iaccept_2.timesOn.append(Iaccept_2.buttonClock.getTime())
                    Iaccept_2.timesOff.append(Iaccept_2.buttonClock.getTime())
                elif len(Iaccept_2.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    Iaccept_2.timesOff[-1] = Iaccept_2.buttonClock.getTime()
                if not Iaccept_2.wasClicked:
                    # end routine when Iaccept_2 is clicked
                    continueRoutine = False
                if not Iaccept_2.wasClicked:
                    # run callback code when Iaccept_2 is clicked
                    pass
        # take note of whether Iaccept_2 was clicked, so that next frame we know if clicks are new
        Iaccept_2.wasClicked = Iaccept_2.isClicked and Iaccept_2.status == STARTED
        # *idontaccept_2* updates
        
        # if idontaccept_2 is starting this frame...
        if idontaccept_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            idontaccept_2.frameNStart = frameN  # exact frame index
            idontaccept_2.tStart = t  # local t and not account for scr refresh
            idontaccept_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(idontaccept_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'idontaccept_2.started')
            # update status
            idontaccept_2.status = STARTED
            win.callOnFlip(idontaccept_2.buttonClock.reset)
            idontaccept_2.setAutoDraw(True)
        
        # if idontaccept_2 is active this frame...
        if idontaccept_2.status == STARTED:
            # update params
            pass
            # check whether idontaccept_2 has been pressed
            if idontaccept_2.isClicked:
                if not idontaccept_2.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    idontaccept_2.timesOn.append(idontaccept_2.buttonClock.getTime())
                    idontaccept_2.timesOff.append(idontaccept_2.buttonClock.getTime())
                elif len(idontaccept_2.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    idontaccept_2.timesOff[-1] = idontaccept_2.buttonClock.getTime()
                if not idontaccept_2.wasClicked:
                    # run callback code when idontaccept_2 is clicked
                    pass
        # take note of whether idontaccept_2 was clicked, so that next frame we know if clicks are new
        idontaccept_2.wasClicked = idontaccept_2.isClicked and idontaccept_2.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            fine_print.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fine_print.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "fine_print" ---
    for thisComponent in fine_print.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for fine_print
    fine_print.tStop = globalClock.getTime(format='float')
    fine_print.tStopRefresh = tThisFlipGlobal
    thisExp.addData('fine_print.stopped', fine_print.tStop)
    thisExp.addData('Iaccept_2.numClicks', Iaccept_2.numClicks)
    if Iaccept_2.numClicks:
       thisExp.addData('Iaccept_2.timesOn', Iaccept_2.timesOn)
       thisExp.addData('Iaccept_2.timesOff', Iaccept_2.timesOff)
    else:
       thisExp.addData('Iaccept_2.timesOn', "")
       thisExp.addData('Iaccept_2.timesOff', "")
    thisExp.addData('idontaccept_2.numClicks', idontaccept_2.numClicks)
    if idontaccept_2.numClicks:
       thisExp.addData('idontaccept_2.timesOn', idontaccept_2.timesOn)
       thisExp.addData('idontaccept_2.timesOff', idontaccept_2.timesOff)
    else:
       thisExp.addData('idontaccept_2.timesOn', "")
       thisExp.addData('idontaccept_2.timesOff', "")
    thisExp.nextEntry()
    # the Routine "fine_print" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "breif_description" ---
    # create an object to store info about Routine breif_description
    breif_description = data.Routine(
        name='breif_description',
        components=[text, continuar_4],
    )
    breif_description.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # reset continuar_4 to account for continued clicks & clear times on/off
    continuar_4.reset()
    # store start times for breif_description
    breif_description.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    breif_description.tStart = globalClock.getTime(format='float')
    breif_description.status = STARTED
    thisExp.addData('breif_description.started', breif_description.tStart)
    breif_description.maxDuration = None
    # keep track of which components have finished
    breif_descriptionComponents = breif_description.components
    for thisComponent in breif_description.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "breif_description" ---
    breif_description.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        
        # if text is starting this frame...
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text.started')
            # update status
            text.status = STARTED
            text.setAutoDraw(True)
        
        # if text is active this frame...
        if text.status == STARTED:
            # update params
            pass
        # *continuar_4* updates
        
        # if continuar_4 is starting this frame...
        if continuar_4.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            continuar_4.frameNStart = frameN  # exact frame index
            continuar_4.tStart = t  # local t and not account for scr refresh
            continuar_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(continuar_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'continuar_4.started')
            # update status
            continuar_4.status = STARTED
            win.callOnFlip(continuar_4.buttonClock.reset)
            continuar_4.setAutoDraw(True)
        
        # if continuar_4 is active this frame...
        if continuar_4.status == STARTED:
            # update params
            pass
            # check whether continuar_4 has been pressed
            if continuar_4.isClicked:
                if not continuar_4.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    continuar_4.timesOn.append(continuar_4.buttonClock.getTime())
                    continuar_4.timesOff.append(continuar_4.buttonClock.getTime())
                elif len(continuar_4.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    continuar_4.timesOff[-1] = continuar_4.buttonClock.getTime()
                if not continuar_4.wasClicked:
                    # end routine when continuar_4 is clicked
                    continueRoutine = False
                if not continuar_4.wasClicked:
                    # run callback code when continuar_4 is clicked
                    pass
        # take note of whether continuar_4 was clicked, so that next frame we know if clicks are new
        continuar_4.wasClicked = continuar_4.isClicked and continuar_4.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            breif_description.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in breif_description.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "breif_description" ---
    for thisComponent in breif_description.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for breif_description
    breif_description.tStop = globalClock.getTime(format='float')
    breif_description.tStopRefresh = tThisFlipGlobal
    thisExp.addData('breif_description.stopped', breif_description.tStop)
    thisExp.addData('continuar_4.numClicks', continuar_4.numClicks)
    if continuar_4.numClicks:
       thisExp.addData('continuar_4.timesOn', continuar_4.timesOn)
       thisExp.addData('continuar_4.timesOff', continuar_4.timesOff)
    else:
       thisExp.addData('continuar_4.timesOn', "")
       thisExp.addData('continuar_4.timesOff', "")
    thisExp.nextEntry()
    # the Routine "breif_description" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "experimento" ---
    # create an object to store info about Routine experimento
    experimento = data.Routine(
        name='experimento',
        components=[text_2, text_3, continuar_5],
    )
    experimento.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # reset continuar_5 to account for continued clicks & clear times on/off
    continuar_5.reset()
    # store start times for experimento
    experimento.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    experimento.tStart = globalClock.getTime(format='float')
    experimento.status = STARTED
    thisExp.addData('experimento.started', experimento.tStart)
    experimento.maxDuration = None
    # keep track of which components have finished
    experimentoComponents = experimento.components
    for thisComponent in experimento.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "experimento" ---
    experimento.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_2* updates
        
        # if text_2 is starting this frame...
        if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_2.started')
            # update status
            text_2.status = STARTED
            text_2.setAutoDraw(True)
        
        # if text_2 is active this frame...
        if text_2.status == STARTED:
            # update params
            pass
        
        # *text_3* updates
        
        # if text_3 is starting this frame...
        if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_3.frameNStart = frameN  # exact frame index
            text_3.tStart = t  # local t and not account for scr refresh
            text_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_3.started')
            # update status
            text_3.status = STARTED
            text_3.setAutoDraw(True)
        
        # if text_3 is active this frame...
        if text_3.status == STARTED:
            # update params
            pass
        # *continuar_5* updates
        
        # if continuar_5 is starting this frame...
        if continuar_5.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            continuar_5.frameNStart = frameN  # exact frame index
            continuar_5.tStart = t  # local t and not account for scr refresh
            continuar_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(continuar_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'continuar_5.started')
            # update status
            continuar_5.status = STARTED
            win.callOnFlip(continuar_5.buttonClock.reset)
            continuar_5.setAutoDraw(True)
        
        # if continuar_5 is active this frame...
        if continuar_5.status == STARTED:
            # update params
            pass
            # check whether continuar_5 has been pressed
            if continuar_5.isClicked:
                if not continuar_5.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    continuar_5.timesOn.append(continuar_5.buttonClock.getTime())
                    continuar_5.timesOff.append(continuar_5.buttonClock.getTime())
                elif len(continuar_5.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    continuar_5.timesOff[-1] = continuar_5.buttonClock.getTime()
                if not continuar_5.wasClicked:
                    # end routine when continuar_5 is clicked
                    continueRoutine = False
                if not continuar_5.wasClicked:
                    # run callback code when continuar_5 is clicked
                    pass
        # take note of whether continuar_5 was clicked, so that next frame we know if clicks are new
        continuar_5.wasClicked = continuar_5.isClicked and continuar_5.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            experimento.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in experimento.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "experimento" ---
    for thisComponent in experimento.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for experimento
    experimento.tStop = globalClock.getTime(format='float')
    experimento.tStopRefresh = tThisFlipGlobal
    thisExp.addData('experimento.stopped', experimento.tStop)
    thisExp.addData('continuar_5.numClicks', continuar_5.numClicks)
    if continuar_5.numClicks:
       thisExp.addData('continuar_5.timesOn', continuar_5.timesOn)
       thisExp.addData('continuar_5.timesOff', continuar_5.timesOff)
    else:
       thisExp.addData('continuar_5.timesOn', "")
       thisExp.addData('continuar_5.timesOff', "")
    thisExp.nextEntry()
    # the Routine "experimento" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "instructions2PAN" ---
    # create an object to store info about Routine instructions2PAN
    instructions2PAN = data.Routine(
        name='instructions2PAN',
        components=[instructions2PANtext, next2PANinstr],
    )
    instructions2PAN.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # reset next2PANinstr to account for continued clicks & clear times on/off
    next2PANinstr.reset()
    # store start times for instructions2PAN
    instructions2PAN.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    instructions2PAN.tStart = globalClock.getTime(format='float')
    instructions2PAN.status = STARTED
    thisExp.addData('instructions2PAN.started', instructions2PAN.tStart)
    instructions2PAN.maxDuration = None
    # keep track of which components have finished
    instructions2PANComponents = instructions2PAN.components
    for thisComponent in instructions2PAN.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instructions2PAN" ---
    instructions2PAN.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instructions2PANtext* updates
        
        # if instructions2PANtext is starting this frame...
        if instructions2PANtext.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instructions2PANtext.frameNStart = frameN  # exact frame index
            instructions2PANtext.tStart = t  # local t and not account for scr refresh
            instructions2PANtext.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instructions2PANtext, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instructions2PANtext.started')
            # update status
            instructions2PANtext.status = STARTED
            instructions2PANtext.setAutoDraw(True)
        
        # if instructions2PANtext is active this frame...
        if instructions2PANtext.status == STARTED:
            # update params
            pass
        # *next2PANinstr* updates
        
        # if next2PANinstr is starting this frame...
        if next2PANinstr.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            next2PANinstr.frameNStart = frameN  # exact frame index
            next2PANinstr.tStart = t  # local t and not account for scr refresh
            next2PANinstr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(next2PANinstr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'next2PANinstr.started')
            # update status
            next2PANinstr.status = STARTED
            win.callOnFlip(next2PANinstr.buttonClock.reset)
            next2PANinstr.setAutoDraw(True)
        
        # if next2PANinstr is active this frame...
        if next2PANinstr.status == STARTED:
            # update params
            pass
            # check whether next2PANinstr has been pressed
            if next2PANinstr.isClicked:
                if not next2PANinstr.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    next2PANinstr.timesOn.append(next2PANinstr.buttonClock.getTime())
                    next2PANinstr.timesOff.append(next2PANinstr.buttonClock.getTime())
                elif len(next2PANinstr.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    next2PANinstr.timesOff[-1] = next2PANinstr.buttonClock.getTime()
                if not next2PANinstr.wasClicked:
                    # end routine when next2PANinstr is clicked
                    continueRoutine = False
                if not next2PANinstr.wasClicked:
                    # run callback code when next2PANinstr is clicked
                    pass
        # take note of whether next2PANinstr was clicked, so that next frame we know if clicks are new
        next2PANinstr.wasClicked = next2PANinstr.isClicked and next2PANinstr.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            instructions2PAN.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instructions2PAN.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instructions2PAN" ---
    for thisComponent in instructions2PAN.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for instructions2PAN
    instructions2PAN.tStop = globalClock.getTime(format='float')
    instructions2PAN.tStopRefresh = tThisFlipGlobal
    thisExp.addData('instructions2PAN.stopped', instructions2PAN.tStop)
    thisExp.addData('next2PANinstr.numClicks', next2PANinstr.numClicks)
    if next2PANinstr.numClicks:
       thisExp.addData('next2PANinstr.timesOn', next2PANinstr.timesOn)
       thisExp.addData('next2PANinstr.timesOff', next2PANinstr.timesOff)
    else:
       thisExp.addData('next2PANinstr.timesOn', "")
       thisExp.addData('next2PANinstr.timesOff', "")
    thisExp.nextEntry()
    # the Routine "instructions2PAN" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    SentirES2PAN19 = data.TrialHandler2(
        name='SentirES2PAN19',
        nReps=1.0, 
        method='sequential', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('stimSPAN/Stimuli2PAN19.csv'), 
        seed=None, 
    )
    thisExp.addLoop(SentirES2PAN19)  # add the loop to the experiment
    thisSentirES2PAN19 = SentirES2PAN19.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisSentirES2PAN19.rgb)
    if thisSentirES2PAN19 != None:
        for paramName in thisSentirES2PAN19:
            globals()[paramName] = thisSentirES2PAN19[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisSentirES2PAN19 in SentirES2PAN19:
        currentLoop = SentirES2PAN19
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisSentirES2PAN19.rgb)
        if thisSentirES2PAN19 != None:
            for paramName in thisSentirES2PAN19:
                globals()[paramName] = thisSentirES2PAN19[paramName]
        
        # --- Prepare to start Routine "SentirES_psychopy" ---
        # create an object to store info about Routine SentirES_psychopy
        SentirES_psychopy = data.Routine(
            name='SentirES_psychopy',
            components=[pregunta, stimuli, audition, taste, haptic, olfaction, vision, interoception, auditionslider, tasteslider, hapticslider, olfactionslider, visionslider, interoceptionsslider, next2PANstim, nose2PAN],
        )
        SentirES_psychopy.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        stimuli.setText(Word)
        auditionslider.reset()
        tasteslider.reset()
        hapticslider.reset()
        olfactionslider.reset()
        visionslider.reset()
        interoceptionsslider.reset()
        # reset next2PANstim to account for continued clicks & clear times on/off
        next2PANstim.reset()
        # reset nose2PAN to account for continued clicks & clear times on/off
        nose2PAN.reset()
        # store start times for SentirES_psychopy
        SentirES_psychopy.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        SentirES_psychopy.tStart = globalClock.getTime(format='float')
        SentirES_psychopy.status = STARTED
        thisExp.addData('SentirES_psychopy.started', SentirES_psychopy.tStart)
        SentirES_psychopy.maxDuration = None
        # keep track of which components have finished
        SentirES_psychopyComponents = SentirES_psychopy.components
        for thisComponent in SentirES_psychopy.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "SentirES_psychopy" ---
        # if trial has changed, end Routine now
        if isinstance(SentirES2PAN19, data.TrialHandler2) and thisSentirES2PAN19.thisN != SentirES2PAN19.thisTrial.thisN:
            continueRoutine = False
        SentirES_psychopy.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *pregunta* updates
            
            # if pregunta is starting this frame...
            if pregunta.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                pregunta.frameNStart = frameN  # exact frame index
                pregunta.tStart = t  # local t and not account for scr refresh
                pregunta.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(pregunta, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'pregunta.started')
                # update status
                pregunta.status = STARTED
                pregunta.setAutoDraw(True)
            
            # if pregunta is active this frame...
            if pregunta.status == STARTED:
                # update params
                pass
            
            # *stimuli* updates
            
            # if stimuli is starting this frame...
            if stimuli.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                stimuli.frameNStart = frameN  # exact frame index
                stimuli.tStart = t  # local t and not account for scr refresh
                stimuli.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stimuli, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'stimuli.started')
                # update status
                stimuli.status = STARTED
                stimuli.setAutoDraw(True)
            
            # if stimuli is active this frame...
            if stimuli.status == STARTED:
                # update params
                pass
            
            # *audition* updates
            
            # if audition is starting this frame...
            if audition.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                audition.frameNStart = frameN  # exact frame index
                audition.tStart = t  # local t and not account for scr refresh
                audition.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(audition, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'audition.started')
                # update status
                audition.status = STARTED
                audition.setAutoDraw(True)
            
            # if audition is active this frame...
            if audition.status == STARTED:
                # update params
                pass
            
            # *taste* updates
            
            # if taste is starting this frame...
            if taste.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                taste.frameNStart = frameN  # exact frame index
                taste.tStart = t  # local t and not account for scr refresh
                taste.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(taste, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'taste.started')
                # update status
                taste.status = STARTED
                taste.setAutoDraw(True)
            
            # if taste is active this frame...
            if taste.status == STARTED:
                # update params
                pass
            
            # *haptic* updates
            
            # if haptic is starting this frame...
            if haptic.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                haptic.frameNStart = frameN  # exact frame index
                haptic.tStart = t  # local t and not account for scr refresh
                haptic.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(haptic, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'haptic.started')
                # update status
                haptic.status = STARTED
                haptic.setAutoDraw(True)
            
            # if haptic is active this frame...
            if haptic.status == STARTED:
                # update params
                pass
            
            # *olfaction* updates
            
            # if olfaction is starting this frame...
            if olfaction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                olfaction.frameNStart = frameN  # exact frame index
                olfaction.tStart = t  # local t and not account for scr refresh
                olfaction.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(olfaction, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'olfaction.started')
                # update status
                olfaction.status = STARTED
                olfaction.setAutoDraw(True)
            
            # if olfaction is active this frame...
            if olfaction.status == STARTED:
                # update params
                pass
            
            # *vision* updates
            
            # if vision is starting this frame...
            if vision.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                vision.frameNStart = frameN  # exact frame index
                vision.tStart = t  # local t and not account for scr refresh
                vision.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(vision, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'vision.started')
                # update status
                vision.status = STARTED
                vision.setAutoDraw(True)
            
            # if vision is active this frame...
            if vision.status == STARTED:
                # update params
                pass
            
            # *interoception* updates
            
            # if interoception is starting this frame...
            if interoception.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                interoception.frameNStart = frameN  # exact frame index
                interoception.tStart = t  # local t and not account for scr refresh
                interoception.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(interoception, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'interoception.started')
                # update status
                interoception.status = STARTED
                interoception.setAutoDraw(True)
            
            # if interoception is active this frame...
            if interoception.status == STARTED:
                # update params
                pass
            
            # *auditionslider* updates
            
            # if auditionslider is starting this frame...
            if auditionslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                auditionslider.frameNStart = frameN  # exact frame index
                auditionslider.tStart = t  # local t and not account for scr refresh
                auditionslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(auditionslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'auditionslider.started')
                # update status
                auditionslider.status = STARTED
                auditionslider.setAutoDraw(True)
            
            # if auditionslider is active this frame...
            if auditionslider.status == STARTED:
                # update params
                pass
            
            # *tasteslider* updates
            
            # if tasteslider is starting this frame...
            if tasteslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                tasteslider.frameNStart = frameN  # exact frame index
                tasteslider.tStart = t  # local t and not account for scr refresh
                tasteslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(tasteslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'tasteslider.started')
                # update status
                tasteslider.status = STARTED
                tasteslider.setAutoDraw(True)
            
            # if tasteslider is active this frame...
            if tasteslider.status == STARTED:
                # update params
                pass
            
            # *hapticslider* updates
            
            # if hapticslider is starting this frame...
            if hapticslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                hapticslider.frameNStart = frameN  # exact frame index
                hapticslider.tStart = t  # local t and not account for scr refresh
                hapticslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(hapticslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'hapticslider.started')
                # update status
                hapticslider.status = STARTED
                hapticslider.setAutoDraw(True)
            
            # if hapticslider is active this frame...
            if hapticslider.status == STARTED:
                # update params
                pass
            
            # *olfactionslider* updates
            
            # if olfactionslider is starting this frame...
            if olfactionslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                olfactionslider.frameNStart = frameN  # exact frame index
                olfactionslider.tStart = t  # local t and not account for scr refresh
                olfactionslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(olfactionslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'olfactionslider.started')
                # update status
                olfactionslider.status = STARTED
                olfactionslider.setAutoDraw(True)
            
            # if olfactionslider is active this frame...
            if olfactionslider.status == STARTED:
                # update params
                pass
            
            # *visionslider* updates
            
            # if visionslider is starting this frame...
            if visionslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                visionslider.frameNStart = frameN  # exact frame index
                visionslider.tStart = t  # local t and not account for scr refresh
                visionslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(visionslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'visionslider.started')
                # update status
                visionslider.status = STARTED
                visionslider.setAutoDraw(True)
            
            # if visionslider is active this frame...
            if visionslider.status == STARTED:
                # update params
                pass
            
            # *interoceptionsslider* updates
            
            # if interoceptionsslider is starting this frame...
            if interoceptionsslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                interoceptionsslider.frameNStart = frameN  # exact frame index
                interoceptionsslider.tStart = t  # local t and not account for scr refresh
                interoceptionsslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(interoceptionsslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'interoceptionsslider.started')
                # update status
                interoceptionsslider.status = STARTED
                interoceptionsslider.setAutoDraw(True)
            
            # if interoceptionsslider is active this frame...
            if interoceptionsslider.status == STARTED:
                # update params
                pass
            # *next2PANstim* updates
            
            # if next2PANstim is starting this frame...
            if next2PANstim.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                next2PANstim.frameNStart = frameN  # exact frame index
                next2PANstim.tStart = t  # local t and not account for scr refresh
                next2PANstim.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(next2PANstim, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'next2PANstim.started')
                # update status
                next2PANstim.status = STARTED
                win.callOnFlip(next2PANstim.buttonClock.reset)
                next2PANstim.setAutoDraw(True)
            
            # if next2PANstim is active this frame...
            if next2PANstim.status == STARTED:
                # update params
                pass
                # check whether next2PANstim has been pressed
                if next2PANstim.isClicked:
                    if not next2PANstim.wasClicked:
                        # if this is a new click, store time of first click and clicked until
                        next2PANstim.timesOn.append(next2PANstim.buttonClock.getTime())
                        next2PANstim.timesOff.append(next2PANstim.buttonClock.getTime())
                    elif len(next2PANstim.timesOff):
                        # if click is continuing from last frame, update time of clicked until
                        next2PANstim.timesOff[-1] = next2PANstim.buttonClock.getTime()
                    if not next2PANstim.wasClicked:
                        # end routine when next2PANstim is clicked
                        continueRoutine = False
                    if not next2PANstim.wasClicked:
                        # run callback code when next2PANstim is clicked
                        pass
            # take note of whether next2PANstim was clicked, so that next frame we know if clicks are new
            next2PANstim.wasClicked = next2PANstim.isClicked and next2PANstim.status == STARTED
            # *nose2PAN* updates
            
            # if nose2PAN is starting this frame...
            if nose2PAN.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                nose2PAN.frameNStart = frameN  # exact frame index
                nose2PAN.tStart = t  # local t and not account for scr refresh
                nose2PAN.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(nose2PAN, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'nose2PAN.started')
                # update status
                nose2PAN.status = STARTED
                win.callOnFlip(nose2PAN.buttonClock.reset)
                nose2PAN.setAutoDraw(True)
            
            # if nose2PAN is active this frame...
            if nose2PAN.status == STARTED:
                # update params
                pass
                # check whether nose2PAN has been pressed
                if nose2PAN.isClicked:
                    if not nose2PAN.wasClicked:
                        # if this is a new click, store time of first click and clicked until
                        nose2PAN.timesOn.append(nose2PAN.buttonClock.getTime())
                        nose2PAN.timesOff.append(nose2PAN.buttonClock.getTime())
                    elif len(nose2PAN.timesOff):
                        # if click is continuing from last frame, update time of clicked until
                        nose2PAN.timesOff[-1] = nose2PAN.buttonClock.getTime()
                    if not nose2PAN.wasClicked:
                        # end routine when nose2PAN is clicked
                        continueRoutine = False
                    if not nose2PAN.wasClicked:
                        # run callback code when nose2PAN is clicked
                        pass
            # take note of whether nose2PAN was clicked, so that next frame we know if clicks are new
            nose2PAN.wasClicked = nose2PAN.isClicked and nose2PAN.status == STARTED
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                SentirES_psychopy.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in SentirES_psychopy.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "SentirES_psychopy" ---
        for thisComponent in SentirES_psychopy.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for SentirES_psychopy
        SentirES_psychopy.tStop = globalClock.getTime(format='float')
        SentirES_psychopy.tStopRefresh = tThisFlipGlobal
        thisExp.addData('SentirES_psychopy.stopped', SentirES_psychopy.tStop)
        SentirES2PAN19.addData('auditionslider.response', auditionslider.getRating())
        SentirES2PAN19.addData('auditionslider.rt', auditionslider.getRT())
        SentirES2PAN19.addData('tasteslider.response', tasteslider.getRating())
        SentirES2PAN19.addData('tasteslider.rt', tasteslider.getRT())
        SentirES2PAN19.addData('hapticslider.response', hapticslider.getRating())
        SentirES2PAN19.addData('hapticslider.rt', hapticslider.getRT())
        SentirES2PAN19.addData('olfactionslider.response', olfactionslider.getRating())
        SentirES2PAN19.addData('olfactionslider.rt', olfactionslider.getRT())
        SentirES2PAN19.addData('visionslider.response', visionslider.getRating())
        SentirES2PAN19.addData('visionslider.rt', visionslider.getRT())
        SentirES2PAN19.addData('interoceptionsslider.response', interoceptionsslider.getRating())
        SentirES2PAN19.addData('interoceptionsslider.rt', interoceptionsslider.getRT())
        SentirES2PAN19.addData('next2PANstim.numClicks', next2PANstim.numClicks)
        if next2PANstim.numClicks:
           SentirES2PAN19.addData('next2PANstim.timesOn', next2PANstim.timesOn)
           SentirES2PAN19.addData('next2PANstim.timesOff', next2PANstim.timesOff)
        else:
           SentirES2PAN19.addData('next2PANstim.timesOn', "")
           SentirES2PAN19.addData('next2PANstim.timesOff', "")
        SentirES2PAN19.addData('nose2PAN.numClicks', nose2PAN.numClicks)
        if nose2PAN.numClicks:
           SentirES2PAN19.addData('nose2PAN.timesOn', nose2PAN.timesOn)
           SentirES2PAN19.addData('nose2PAN.timesOff', nose2PAN.timesOff)
        else:
           SentirES2PAN19.addData('nose2PAN.timesOn', "")
           SentirES2PAN19.addData('nose2PAN.timesOff', "")
        # the Routine "SentirES_psychopy" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'SentirES2PAN19'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "catch2PAN1" ---
    # create an object to store info about Routine catch2PAN1
    catch2PAN1 = data.Routine(
        name='catch2PAN1',
        components=[catch2PANanimal, Oso, Pez, Ave],
    )
    catch2PAN1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # reset Oso to account for continued clicks & clear times on/off
    Oso.reset()
    # reset Pez to account for continued clicks & clear times on/off
    Pez.reset()
    # reset Ave to account for continued clicks & clear times on/off
    Ave.reset()
    # store start times for catch2PAN1
    catch2PAN1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    catch2PAN1.tStart = globalClock.getTime(format='float')
    catch2PAN1.status = STARTED
    thisExp.addData('catch2PAN1.started', catch2PAN1.tStart)
    catch2PAN1.maxDuration = None
    # keep track of which components have finished
    catch2PAN1Components = catch2PAN1.components
    for thisComponent in catch2PAN1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "catch2PAN1" ---
    catch2PAN1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *catch2PANanimal* updates
        
        # if catch2PANanimal is starting this frame...
        if catch2PANanimal.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            catch2PANanimal.frameNStart = frameN  # exact frame index
            catch2PANanimal.tStart = t  # local t and not account for scr refresh
            catch2PANanimal.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(catch2PANanimal, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'catch2PANanimal.started')
            # update status
            catch2PANanimal.status = STARTED
            catch2PANanimal.setAutoDraw(True)
        
        # if catch2PANanimal is active this frame...
        if catch2PANanimal.status == STARTED:
            # update params
            pass
        # *Oso* updates
        
        # if Oso is starting this frame...
        if Oso.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            Oso.frameNStart = frameN  # exact frame index
            Oso.tStart = t  # local t and not account for scr refresh
            Oso.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Oso, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Oso.started')
            # update status
            Oso.status = STARTED
            win.callOnFlip(Oso.buttonClock.reset)
            Oso.setAutoDraw(True)
        
        # if Oso is active this frame...
        if Oso.status == STARTED:
            # update params
            pass
            # check whether Oso has been pressed
            if Oso.isClicked:
                if not Oso.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    Oso.timesOn.append(Oso.buttonClock.getTime())
                    Oso.timesOff.append(Oso.buttonClock.getTime())
                elif len(Oso.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    Oso.timesOff[-1] = Oso.buttonClock.getTime()
                if not Oso.wasClicked:
                    # end routine when Oso is clicked
                    continueRoutine = False
                if not Oso.wasClicked:
                    # run callback code when Oso is clicked
                    pass
        # take note of whether Oso was clicked, so that next frame we know if clicks are new
        Oso.wasClicked = Oso.isClicked and Oso.status == STARTED
        # *Pez* updates
        
        # if Pez is starting this frame...
        if Pez.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            Pez.frameNStart = frameN  # exact frame index
            Pez.tStart = t  # local t and not account for scr refresh
            Pez.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Pez, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Pez.started')
            # update status
            Pez.status = STARTED
            win.callOnFlip(Pez.buttonClock.reset)
            Pez.setAutoDraw(True)
        
        # if Pez is active this frame...
        if Pez.status == STARTED:
            # update params
            pass
            # check whether Pez has been pressed
            if Pez.isClicked:
                if not Pez.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    Pez.timesOn.append(Pez.buttonClock.getTime())
                    Pez.timesOff.append(Pez.buttonClock.getTime())
                elif len(Pez.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    Pez.timesOff[-1] = Pez.buttonClock.getTime()
                if not Pez.wasClicked:
                    # end routine when Pez is clicked
                    continueRoutine = False
                if not Pez.wasClicked:
                    # run callback code when Pez is clicked
                    pass
        # take note of whether Pez was clicked, so that next frame we know if clicks are new
        Pez.wasClicked = Pez.isClicked and Pez.status == STARTED
        # *Ave* updates
        
        # if Ave is starting this frame...
        if Ave.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            Ave.frameNStart = frameN  # exact frame index
            Ave.tStart = t  # local t and not account for scr refresh
            Ave.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Ave, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Ave.started')
            # update status
            Ave.status = STARTED
            win.callOnFlip(Ave.buttonClock.reset)
            Ave.setAutoDraw(True)
        
        # if Ave is active this frame...
        if Ave.status == STARTED:
            # update params
            pass
            # check whether Ave has been pressed
            if Ave.isClicked:
                if not Ave.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    Ave.timesOn.append(Ave.buttonClock.getTime())
                    Ave.timesOff.append(Ave.buttonClock.getTime())
                elif len(Ave.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    Ave.timesOff[-1] = Ave.buttonClock.getTime()
                if not Ave.wasClicked:
                    # end routine when Ave is clicked
                    continueRoutine = False
                if not Ave.wasClicked:
                    # run callback code when Ave is clicked
                    pass
        # take note of whether Ave was clicked, so that next frame we know if clicks are new
        Ave.wasClicked = Ave.isClicked and Ave.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            catch2PAN1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in catch2PAN1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "catch2PAN1" ---
    for thisComponent in catch2PAN1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for catch2PAN1
    catch2PAN1.tStop = globalClock.getTime(format='float')
    catch2PAN1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('catch2PAN1.stopped', catch2PAN1.tStop)
    thisExp.addData('Oso.numClicks', Oso.numClicks)
    if Oso.numClicks:
       thisExp.addData('Oso.timesOn', Oso.timesOn)
       thisExp.addData('Oso.timesOff', Oso.timesOff)
    else:
       thisExp.addData('Oso.timesOn', "")
       thisExp.addData('Oso.timesOff', "")
    thisExp.addData('Pez.numClicks', Pez.numClicks)
    if Pez.numClicks:
       thisExp.addData('Pez.timesOn', Pez.timesOn)
       thisExp.addData('Pez.timesOff', Pez.timesOff)
    else:
       thisExp.addData('Pez.timesOn', "")
       thisExp.addData('Pez.timesOff', "")
    thisExp.addData('Ave.numClicks', Ave.numClicks)
    if Ave.numClicks:
       thisExp.addData('Ave.timesOn', Ave.timesOn)
       thisExp.addData('Ave.timesOff', Ave.timesOff)
    else:
       thisExp.addData('Ave.timesOn', "")
       thisExp.addData('Ave.timesOff', "")
    thisExp.nextEntry()
    # the Routine "catch2PAN1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    SentirES2SPAN45 = data.TrialHandler2(
        name='SentirES2SPAN45',
        nReps=1.0, 
        method='sequential', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('stimSPAN/Stimuli2PAN45.csv'), 
        seed=None, 
    )
    thisExp.addLoop(SentirES2SPAN45)  # add the loop to the experiment
    thisSentirES2SPAN45 = SentirES2SPAN45.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisSentirES2SPAN45.rgb)
    if thisSentirES2SPAN45 != None:
        for paramName in thisSentirES2SPAN45:
            globals()[paramName] = thisSentirES2SPAN45[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisSentirES2SPAN45 in SentirES2SPAN45:
        currentLoop = SentirES2SPAN45
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisSentirES2SPAN45.rgb)
        if thisSentirES2SPAN45 != None:
            for paramName in thisSentirES2SPAN45:
                globals()[paramName] = thisSentirES2SPAN45[paramName]
        
        # --- Prepare to start Routine "SentirES_psychopy" ---
        # create an object to store info about Routine SentirES_psychopy
        SentirES_psychopy = data.Routine(
            name='SentirES_psychopy',
            components=[pregunta, stimuli, audition, taste, haptic, olfaction, vision, interoception, auditionslider, tasteslider, hapticslider, olfactionslider, visionslider, interoceptionsslider, next2PANstim, nose2PAN],
        )
        SentirES_psychopy.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        stimuli.setText(Word)
        auditionslider.reset()
        tasteslider.reset()
        hapticslider.reset()
        olfactionslider.reset()
        visionslider.reset()
        interoceptionsslider.reset()
        # reset next2PANstim to account for continued clicks & clear times on/off
        next2PANstim.reset()
        # reset nose2PAN to account for continued clicks & clear times on/off
        nose2PAN.reset()
        # store start times for SentirES_psychopy
        SentirES_psychopy.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        SentirES_psychopy.tStart = globalClock.getTime(format='float')
        SentirES_psychopy.status = STARTED
        thisExp.addData('SentirES_psychopy.started', SentirES_psychopy.tStart)
        SentirES_psychopy.maxDuration = None
        # keep track of which components have finished
        SentirES_psychopyComponents = SentirES_psychopy.components
        for thisComponent in SentirES_psychopy.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "SentirES_psychopy" ---
        # if trial has changed, end Routine now
        if isinstance(SentirES2SPAN45, data.TrialHandler2) and thisSentirES2SPAN45.thisN != SentirES2SPAN45.thisTrial.thisN:
            continueRoutine = False
        SentirES_psychopy.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *pregunta* updates
            
            # if pregunta is starting this frame...
            if pregunta.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                pregunta.frameNStart = frameN  # exact frame index
                pregunta.tStart = t  # local t and not account for scr refresh
                pregunta.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(pregunta, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'pregunta.started')
                # update status
                pregunta.status = STARTED
                pregunta.setAutoDraw(True)
            
            # if pregunta is active this frame...
            if pregunta.status == STARTED:
                # update params
                pass
            
            # *stimuli* updates
            
            # if stimuli is starting this frame...
            if stimuli.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                stimuli.frameNStart = frameN  # exact frame index
                stimuli.tStart = t  # local t and not account for scr refresh
                stimuli.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stimuli, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'stimuli.started')
                # update status
                stimuli.status = STARTED
                stimuli.setAutoDraw(True)
            
            # if stimuli is active this frame...
            if stimuli.status == STARTED:
                # update params
                pass
            
            # *audition* updates
            
            # if audition is starting this frame...
            if audition.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                audition.frameNStart = frameN  # exact frame index
                audition.tStart = t  # local t and not account for scr refresh
                audition.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(audition, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'audition.started')
                # update status
                audition.status = STARTED
                audition.setAutoDraw(True)
            
            # if audition is active this frame...
            if audition.status == STARTED:
                # update params
                pass
            
            # *taste* updates
            
            # if taste is starting this frame...
            if taste.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                taste.frameNStart = frameN  # exact frame index
                taste.tStart = t  # local t and not account for scr refresh
                taste.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(taste, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'taste.started')
                # update status
                taste.status = STARTED
                taste.setAutoDraw(True)
            
            # if taste is active this frame...
            if taste.status == STARTED:
                # update params
                pass
            
            # *haptic* updates
            
            # if haptic is starting this frame...
            if haptic.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                haptic.frameNStart = frameN  # exact frame index
                haptic.tStart = t  # local t and not account for scr refresh
                haptic.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(haptic, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'haptic.started')
                # update status
                haptic.status = STARTED
                haptic.setAutoDraw(True)
            
            # if haptic is active this frame...
            if haptic.status == STARTED:
                # update params
                pass
            
            # *olfaction* updates
            
            # if olfaction is starting this frame...
            if olfaction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                olfaction.frameNStart = frameN  # exact frame index
                olfaction.tStart = t  # local t and not account for scr refresh
                olfaction.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(olfaction, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'olfaction.started')
                # update status
                olfaction.status = STARTED
                olfaction.setAutoDraw(True)
            
            # if olfaction is active this frame...
            if olfaction.status == STARTED:
                # update params
                pass
            
            # *vision* updates
            
            # if vision is starting this frame...
            if vision.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                vision.frameNStart = frameN  # exact frame index
                vision.tStart = t  # local t and not account for scr refresh
                vision.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(vision, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'vision.started')
                # update status
                vision.status = STARTED
                vision.setAutoDraw(True)
            
            # if vision is active this frame...
            if vision.status == STARTED:
                # update params
                pass
            
            # *interoception* updates
            
            # if interoception is starting this frame...
            if interoception.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                interoception.frameNStart = frameN  # exact frame index
                interoception.tStart = t  # local t and not account for scr refresh
                interoception.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(interoception, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'interoception.started')
                # update status
                interoception.status = STARTED
                interoception.setAutoDraw(True)
            
            # if interoception is active this frame...
            if interoception.status == STARTED:
                # update params
                pass
            
            # *auditionslider* updates
            
            # if auditionslider is starting this frame...
            if auditionslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                auditionslider.frameNStart = frameN  # exact frame index
                auditionslider.tStart = t  # local t and not account for scr refresh
                auditionslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(auditionslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'auditionslider.started')
                # update status
                auditionslider.status = STARTED
                auditionslider.setAutoDraw(True)
            
            # if auditionslider is active this frame...
            if auditionslider.status == STARTED:
                # update params
                pass
            
            # *tasteslider* updates
            
            # if tasteslider is starting this frame...
            if tasteslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                tasteslider.frameNStart = frameN  # exact frame index
                tasteslider.tStart = t  # local t and not account for scr refresh
                tasteslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(tasteslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'tasteslider.started')
                # update status
                tasteslider.status = STARTED
                tasteslider.setAutoDraw(True)
            
            # if tasteslider is active this frame...
            if tasteslider.status == STARTED:
                # update params
                pass
            
            # *hapticslider* updates
            
            # if hapticslider is starting this frame...
            if hapticslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                hapticslider.frameNStart = frameN  # exact frame index
                hapticslider.tStart = t  # local t and not account for scr refresh
                hapticslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(hapticslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'hapticslider.started')
                # update status
                hapticslider.status = STARTED
                hapticslider.setAutoDraw(True)
            
            # if hapticslider is active this frame...
            if hapticslider.status == STARTED:
                # update params
                pass
            
            # *olfactionslider* updates
            
            # if olfactionslider is starting this frame...
            if olfactionslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                olfactionslider.frameNStart = frameN  # exact frame index
                olfactionslider.tStart = t  # local t and not account for scr refresh
                olfactionslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(olfactionslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'olfactionslider.started')
                # update status
                olfactionslider.status = STARTED
                olfactionslider.setAutoDraw(True)
            
            # if olfactionslider is active this frame...
            if olfactionslider.status == STARTED:
                # update params
                pass
            
            # *visionslider* updates
            
            # if visionslider is starting this frame...
            if visionslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                visionslider.frameNStart = frameN  # exact frame index
                visionslider.tStart = t  # local t and not account for scr refresh
                visionslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(visionslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'visionslider.started')
                # update status
                visionslider.status = STARTED
                visionslider.setAutoDraw(True)
            
            # if visionslider is active this frame...
            if visionslider.status == STARTED:
                # update params
                pass
            
            # *interoceptionsslider* updates
            
            # if interoceptionsslider is starting this frame...
            if interoceptionsslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                interoceptionsslider.frameNStart = frameN  # exact frame index
                interoceptionsslider.tStart = t  # local t and not account for scr refresh
                interoceptionsslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(interoceptionsslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'interoceptionsslider.started')
                # update status
                interoceptionsslider.status = STARTED
                interoceptionsslider.setAutoDraw(True)
            
            # if interoceptionsslider is active this frame...
            if interoceptionsslider.status == STARTED:
                # update params
                pass
            # *next2PANstim* updates
            
            # if next2PANstim is starting this frame...
            if next2PANstim.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                next2PANstim.frameNStart = frameN  # exact frame index
                next2PANstim.tStart = t  # local t and not account for scr refresh
                next2PANstim.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(next2PANstim, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'next2PANstim.started')
                # update status
                next2PANstim.status = STARTED
                win.callOnFlip(next2PANstim.buttonClock.reset)
                next2PANstim.setAutoDraw(True)
            
            # if next2PANstim is active this frame...
            if next2PANstim.status == STARTED:
                # update params
                pass
                # check whether next2PANstim has been pressed
                if next2PANstim.isClicked:
                    if not next2PANstim.wasClicked:
                        # if this is a new click, store time of first click and clicked until
                        next2PANstim.timesOn.append(next2PANstim.buttonClock.getTime())
                        next2PANstim.timesOff.append(next2PANstim.buttonClock.getTime())
                    elif len(next2PANstim.timesOff):
                        # if click is continuing from last frame, update time of clicked until
                        next2PANstim.timesOff[-1] = next2PANstim.buttonClock.getTime()
                    if not next2PANstim.wasClicked:
                        # end routine when next2PANstim is clicked
                        continueRoutine = False
                    if not next2PANstim.wasClicked:
                        # run callback code when next2PANstim is clicked
                        pass
            # take note of whether next2PANstim was clicked, so that next frame we know if clicks are new
            next2PANstim.wasClicked = next2PANstim.isClicked and next2PANstim.status == STARTED
            # *nose2PAN* updates
            
            # if nose2PAN is starting this frame...
            if nose2PAN.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                nose2PAN.frameNStart = frameN  # exact frame index
                nose2PAN.tStart = t  # local t and not account for scr refresh
                nose2PAN.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(nose2PAN, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'nose2PAN.started')
                # update status
                nose2PAN.status = STARTED
                win.callOnFlip(nose2PAN.buttonClock.reset)
                nose2PAN.setAutoDraw(True)
            
            # if nose2PAN is active this frame...
            if nose2PAN.status == STARTED:
                # update params
                pass
                # check whether nose2PAN has been pressed
                if nose2PAN.isClicked:
                    if not nose2PAN.wasClicked:
                        # if this is a new click, store time of first click and clicked until
                        nose2PAN.timesOn.append(nose2PAN.buttonClock.getTime())
                        nose2PAN.timesOff.append(nose2PAN.buttonClock.getTime())
                    elif len(nose2PAN.timesOff):
                        # if click is continuing from last frame, update time of clicked until
                        nose2PAN.timesOff[-1] = nose2PAN.buttonClock.getTime()
                    if not nose2PAN.wasClicked:
                        # end routine when nose2PAN is clicked
                        continueRoutine = False
                    if not nose2PAN.wasClicked:
                        # run callback code when nose2PAN is clicked
                        pass
            # take note of whether nose2PAN was clicked, so that next frame we know if clicks are new
            nose2PAN.wasClicked = nose2PAN.isClicked and nose2PAN.status == STARTED
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                SentirES_psychopy.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in SentirES_psychopy.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "SentirES_psychopy" ---
        for thisComponent in SentirES_psychopy.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for SentirES_psychopy
        SentirES_psychopy.tStop = globalClock.getTime(format='float')
        SentirES_psychopy.tStopRefresh = tThisFlipGlobal
        thisExp.addData('SentirES_psychopy.stopped', SentirES_psychopy.tStop)
        SentirES2SPAN45.addData('auditionslider.response', auditionslider.getRating())
        SentirES2SPAN45.addData('auditionslider.rt', auditionslider.getRT())
        SentirES2SPAN45.addData('tasteslider.response', tasteslider.getRating())
        SentirES2SPAN45.addData('tasteslider.rt', tasteslider.getRT())
        SentirES2SPAN45.addData('hapticslider.response', hapticslider.getRating())
        SentirES2SPAN45.addData('hapticslider.rt', hapticslider.getRT())
        SentirES2SPAN45.addData('olfactionslider.response', olfactionslider.getRating())
        SentirES2SPAN45.addData('olfactionslider.rt', olfactionslider.getRT())
        SentirES2SPAN45.addData('visionslider.response', visionslider.getRating())
        SentirES2SPAN45.addData('visionslider.rt', visionslider.getRT())
        SentirES2SPAN45.addData('interoceptionsslider.response', interoceptionsslider.getRating())
        SentirES2SPAN45.addData('interoceptionsslider.rt', interoceptionsslider.getRT())
        SentirES2SPAN45.addData('next2PANstim.numClicks', next2PANstim.numClicks)
        if next2PANstim.numClicks:
           SentirES2SPAN45.addData('next2PANstim.timesOn', next2PANstim.timesOn)
           SentirES2SPAN45.addData('next2PANstim.timesOff', next2PANstim.timesOff)
        else:
           SentirES2SPAN45.addData('next2PANstim.timesOn', "")
           SentirES2SPAN45.addData('next2PANstim.timesOff', "")
        SentirES2SPAN45.addData('nose2PAN.numClicks', nose2PAN.numClicks)
        if nose2PAN.numClicks:
           SentirES2SPAN45.addData('nose2PAN.timesOn', nose2PAN.timesOn)
           SentirES2SPAN45.addData('nose2PAN.timesOff', nose2PAN.timesOff)
        else:
           SentirES2SPAN45.addData('nose2PAN.timesOn', "")
           SentirES2SPAN45.addData('nose2PAN.timesOff', "")
        # the Routine "SentirES_psychopy" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'SentirES2SPAN45'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "catch2SPAN2" ---
    # create an object to store info about Routine catch2SPAN2
    catch2SPAN2 = data.Routine(
        name='catch2SPAN2',
        components=[catch2PANmates, quinze, setentaydos, cien],
    )
    catch2SPAN2.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # reset quinze to account for continued clicks & clear times on/off
    quinze.reset()
    # reset setentaydos to account for continued clicks & clear times on/off
    setentaydos.reset()
    # reset cien to account for continued clicks & clear times on/off
    cien.reset()
    # store start times for catch2SPAN2
    catch2SPAN2.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    catch2SPAN2.tStart = globalClock.getTime(format='float')
    catch2SPAN2.status = STARTED
    thisExp.addData('catch2SPAN2.started', catch2SPAN2.tStart)
    catch2SPAN2.maxDuration = None
    # keep track of which components have finished
    catch2SPAN2Components = catch2SPAN2.components
    for thisComponent in catch2SPAN2.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "catch2SPAN2" ---
    catch2SPAN2.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *catch2PANmates* updates
        
        # if catch2PANmates is starting this frame...
        if catch2PANmates.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            catch2PANmates.frameNStart = frameN  # exact frame index
            catch2PANmates.tStart = t  # local t and not account for scr refresh
            catch2PANmates.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(catch2PANmates, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'catch2PANmates.started')
            # update status
            catch2PANmates.status = STARTED
            catch2PANmates.setAutoDraw(True)
        
        # if catch2PANmates is active this frame...
        if catch2PANmates.status == STARTED:
            # update params
            pass
        # *quinze* updates
        
        # if quinze is starting this frame...
        if quinze.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            quinze.frameNStart = frameN  # exact frame index
            quinze.tStart = t  # local t and not account for scr refresh
            quinze.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(quinze, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'quinze.started')
            # update status
            quinze.status = STARTED
            win.callOnFlip(quinze.buttonClock.reset)
            quinze.setAutoDraw(True)
        
        # if quinze is active this frame...
        if quinze.status == STARTED:
            # update params
            pass
            # check whether quinze has been pressed
            if quinze.isClicked:
                if not quinze.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    quinze.timesOn.append(quinze.buttonClock.getTime())
                    quinze.timesOff.append(quinze.buttonClock.getTime())
                elif len(quinze.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    quinze.timesOff[-1] = quinze.buttonClock.getTime()
                if not quinze.wasClicked:
                    # end routine when quinze is clicked
                    continueRoutine = False
                if not quinze.wasClicked:
                    # run callback code when quinze is clicked
                    pass
        # take note of whether quinze was clicked, so that next frame we know if clicks are new
        quinze.wasClicked = quinze.isClicked and quinze.status == STARTED
        # *setentaydos* updates
        
        # if setentaydos is starting this frame...
        if setentaydos.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            setentaydos.frameNStart = frameN  # exact frame index
            setentaydos.tStart = t  # local t and not account for scr refresh
            setentaydos.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(setentaydos, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'setentaydos.started')
            # update status
            setentaydos.status = STARTED
            win.callOnFlip(setentaydos.buttonClock.reset)
            setentaydos.setAutoDraw(True)
        
        # if setentaydos is active this frame...
        if setentaydos.status == STARTED:
            # update params
            pass
            # check whether setentaydos has been pressed
            if setentaydos.isClicked:
                if not setentaydos.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    setentaydos.timesOn.append(setentaydos.buttonClock.getTime())
                    setentaydos.timesOff.append(setentaydos.buttonClock.getTime())
                elif len(setentaydos.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    setentaydos.timesOff[-1] = setentaydos.buttonClock.getTime()
                if not setentaydos.wasClicked:
                    # end routine when setentaydos is clicked
                    continueRoutine = False
                if not setentaydos.wasClicked:
                    # run callback code when setentaydos is clicked
                    pass
        # take note of whether setentaydos was clicked, so that next frame we know if clicks are new
        setentaydos.wasClicked = setentaydos.isClicked and setentaydos.status == STARTED
        # *cien* updates
        
        # if cien is starting this frame...
        if cien.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            cien.frameNStart = frameN  # exact frame index
            cien.tStart = t  # local t and not account for scr refresh
            cien.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cien, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'cien.started')
            # update status
            cien.status = STARTED
            win.callOnFlip(cien.buttonClock.reset)
            cien.setAutoDraw(True)
        
        # if cien is active this frame...
        if cien.status == STARTED:
            # update params
            pass
            # check whether cien has been pressed
            if cien.isClicked:
                if not cien.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    cien.timesOn.append(cien.buttonClock.getTime())
                    cien.timesOff.append(cien.buttonClock.getTime())
                elif len(cien.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    cien.timesOff[-1] = cien.buttonClock.getTime()
                if not cien.wasClicked:
                    # end routine when cien is clicked
                    continueRoutine = False
                if not cien.wasClicked:
                    # run callback code when cien is clicked
                    pass
        # take note of whether cien was clicked, so that next frame we know if clicks are new
        cien.wasClicked = cien.isClicked and cien.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            catch2SPAN2.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in catch2SPAN2.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "catch2SPAN2" ---
    for thisComponent in catch2SPAN2.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for catch2SPAN2
    catch2SPAN2.tStop = globalClock.getTime(format='float')
    catch2SPAN2.tStopRefresh = tThisFlipGlobal
    thisExp.addData('catch2SPAN2.stopped', catch2SPAN2.tStop)
    thisExp.addData('quinze.numClicks', quinze.numClicks)
    if quinze.numClicks:
       thisExp.addData('quinze.timesOn', quinze.timesOn)
       thisExp.addData('quinze.timesOff', quinze.timesOff)
    else:
       thisExp.addData('quinze.timesOn', "")
       thisExp.addData('quinze.timesOff', "")
    thisExp.addData('setentaydos.numClicks', setentaydos.numClicks)
    if setentaydos.numClicks:
       thisExp.addData('setentaydos.timesOn', setentaydos.timesOn)
       thisExp.addData('setentaydos.timesOff', setentaydos.timesOff)
    else:
       thisExp.addData('setentaydos.timesOn', "")
       thisExp.addData('setentaydos.timesOff', "")
    thisExp.addData('cien.numClicks', cien.numClicks)
    if cien.numClicks:
       thisExp.addData('cien.timesOn', cien.timesOn)
       thisExp.addData('cien.timesOff', cien.timesOff)
    else:
       thisExp.addData('cien.timesOn', "")
       thisExp.addData('cien.timesOff', "")
    thisExp.nextEntry()
    # the Routine "catch2SPAN2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "break2PAN" ---
    # create an object to store info about Routine break2PAN
    break2PAN = data.Routine(
        name='break2PAN',
        components=[SentirESbreak, next2PANbreak],
    )
    break2PAN.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # reset next2PANbreak to account for continued clicks & clear times on/off
    next2PANbreak.reset()
    # store start times for break2PAN
    break2PAN.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    break2PAN.tStart = globalClock.getTime(format='float')
    break2PAN.status = STARTED
    thisExp.addData('break2PAN.started', break2PAN.tStart)
    break2PAN.maxDuration = None
    # keep track of which components have finished
    break2PANComponents = break2PAN.components
    for thisComponent in break2PAN.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "break2PAN" ---
    break2PAN.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *SentirESbreak* updates
        
        # if SentirESbreak is starting this frame...
        if SentirESbreak.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            SentirESbreak.frameNStart = frameN  # exact frame index
            SentirESbreak.tStart = t  # local t and not account for scr refresh
            SentirESbreak.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(SentirESbreak, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'SentirESbreak.started')
            # update status
            SentirESbreak.status = STARTED
            SentirESbreak.setAutoDraw(True)
        
        # if SentirESbreak is active this frame...
        if SentirESbreak.status == STARTED:
            # update params
            pass
        # *next2PANbreak* updates
        
        # if next2PANbreak is starting this frame...
        if next2PANbreak.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            next2PANbreak.frameNStart = frameN  # exact frame index
            next2PANbreak.tStart = t  # local t and not account for scr refresh
            next2PANbreak.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(next2PANbreak, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'next2PANbreak.started')
            # update status
            next2PANbreak.status = STARTED
            win.callOnFlip(next2PANbreak.buttonClock.reset)
            next2PANbreak.setAutoDraw(True)
        
        # if next2PANbreak is active this frame...
        if next2PANbreak.status == STARTED:
            # update params
            pass
            # check whether next2PANbreak has been pressed
            if next2PANbreak.isClicked:
                if not next2PANbreak.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    next2PANbreak.timesOn.append(next2PANbreak.buttonClock.getTime())
                    next2PANbreak.timesOff.append(next2PANbreak.buttonClock.getTime())
                elif len(next2PANbreak.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    next2PANbreak.timesOff[-1] = next2PANbreak.buttonClock.getTime()
                if not next2PANbreak.wasClicked:
                    # end routine when next2PANbreak is clicked
                    continueRoutine = False
                if not next2PANbreak.wasClicked:
                    # run callback code when next2PANbreak is clicked
                    pass
        # take note of whether next2PANbreak was clicked, so that next frame we know if clicks are new
        next2PANbreak.wasClicked = next2PANbreak.isClicked and next2PANbreak.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break2PAN.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in break2PAN.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "break2PAN" ---
    for thisComponent in break2PAN.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for break2PAN
    break2PAN.tStop = globalClock.getTime(format='float')
    break2PAN.tStopRefresh = tThisFlipGlobal
    thisExp.addData('break2PAN.stopped', break2PAN.tStop)
    thisExp.addData('next2PANbreak.numClicks', next2PANbreak.numClicks)
    if next2PANbreak.numClicks:
       thisExp.addData('next2PANbreak.timesOn', next2PANbreak.timesOn)
       thisExp.addData('next2PANbreak.timesOff', next2PANbreak.timesOff)
    else:
       thisExp.addData('next2PANbreak.timesOn', "")
       thisExp.addData('next2PANbreak.timesOff', "")
    thisExp.nextEntry()
    # the Routine "break2PAN" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    SentirES2SPAN78 = data.TrialHandler2(
        name='SentirES2SPAN78',
        nReps=1.0, 
        method='sequential', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('stimSPAN/Stimuli2PAN78.csv'), 
        seed=None, 
    )
    thisExp.addLoop(SentirES2SPAN78)  # add the loop to the experiment
    thisSentirES2SPAN78 = SentirES2SPAN78.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisSentirES2SPAN78.rgb)
    if thisSentirES2SPAN78 != None:
        for paramName in thisSentirES2SPAN78:
            globals()[paramName] = thisSentirES2SPAN78[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisSentirES2SPAN78 in SentirES2SPAN78:
        currentLoop = SentirES2SPAN78
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisSentirES2SPAN78.rgb)
        if thisSentirES2SPAN78 != None:
            for paramName in thisSentirES2SPAN78:
                globals()[paramName] = thisSentirES2SPAN78[paramName]
        
        # --- Prepare to start Routine "SentirES_psychopy" ---
        # create an object to store info about Routine SentirES_psychopy
        SentirES_psychopy = data.Routine(
            name='SentirES_psychopy',
            components=[pregunta, stimuli, audition, taste, haptic, olfaction, vision, interoception, auditionslider, tasteslider, hapticslider, olfactionslider, visionslider, interoceptionsslider, next2PANstim, nose2PAN],
        )
        SentirES_psychopy.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        stimuli.setText(Word)
        auditionslider.reset()
        tasteslider.reset()
        hapticslider.reset()
        olfactionslider.reset()
        visionslider.reset()
        interoceptionsslider.reset()
        # reset next2PANstim to account for continued clicks & clear times on/off
        next2PANstim.reset()
        # reset nose2PAN to account for continued clicks & clear times on/off
        nose2PAN.reset()
        # store start times for SentirES_psychopy
        SentirES_psychopy.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        SentirES_psychopy.tStart = globalClock.getTime(format='float')
        SentirES_psychopy.status = STARTED
        thisExp.addData('SentirES_psychopy.started', SentirES_psychopy.tStart)
        SentirES_psychopy.maxDuration = None
        # keep track of which components have finished
        SentirES_psychopyComponents = SentirES_psychopy.components
        for thisComponent in SentirES_psychopy.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "SentirES_psychopy" ---
        # if trial has changed, end Routine now
        if isinstance(SentirES2SPAN78, data.TrialHandler2) and thisSentirES2SPAN78.thisN != SentirES2SPAN78.thisTrial.thisN:
            continueRoutine = False
        SentirES_psychopy.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *pregunta* updates
            
            # if pregunta is starting this frame...
            if pregunta.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                pregunta.frameNStart = frameN  # exact frame index
                pregunta.tStart = t  # local t and not account for scr refresh
                pregunta.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(pregunta, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'pregunta.started')
                # update status
                pregunta.status = STARTED
                pregunta.setAutoDraw(True)
            
            # if pregunta is active this frame...
            if pregunta.status == STARTED:
                # update params
                pass
            
            # *stimuli* updates
            
            # if stimuli is starting this frame...
            if stimuli.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                stimuli.frameNStart = frameN  # exact frame index
                stimuli.tStart = t  # local t and not account for scr refresh
                stimuli.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stimuli, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'stimuli.started')
                # update status
                stimuli.status = STARTED
                stimuli.setAutoDraw(True)
            
            # if stimuli is active this frame...
            if stimuli.status == STARTED:
                # update params
                pass
            
            # *audition* updates
            
            # if audition is starting this frame...
            if audition.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                audition.frameNStart = frameN  # exact frame index
                audition.tStart = t  # local t and not account for scr refresh
                audition.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(audition, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'audition.started')
                # update status
                audition.status = STARTED
                audition.setAutoDraw(True)
            
            # if audition is active this frame...
            if audition.status == STARTED:
                # update params
                pass
            
            # *taste* updates
            
            # if taste is starting this frame...
            if taste.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                taste.frameNStart = frameN  # exact frame index
                taste.tStart = t  # local t and not account for scr refresh
                taste.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(taste, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'taste.started')
                # update status
                taste.status = STARTED
                taste.setAutoDraw(True)
            
            # if taste is active this frame...
            if taste.status == STARTED:
                # update params
                pass
            
            # *haptic* updates
            
            # if haptic is starting this frame...
            if haptic.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                haptic.frameNStart = frameN  # exact frame index
                haptic.tStart = t  # local t and not account for scr refresh
                haptic.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(haptic, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'haptic.started')
                # update status
                haptic.status = STARTED
                haptic.setAutoDraw(True)
            
            # if haptic is active this frame...
            if haptic.status == STARTED:
                # update params
                pass
            
            # *olfaction* updates
            
            # if olfaction is starting this frame...
            if olfaction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                olfaction.frameNStart = frameN  # exact frame index
                olfaction.tStart = t  # local t and not account for scr refresh
                olfaction.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(olfaction, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'olfaction.started')
                # update status
                olfaction.status = STARTED
                olfaction.setAutoDraw(True)
            
            # if olfaction is active this frame...
            if olfaction.status == STARTED:
                # update params
                pass
            
            # *vision* updates
            
            # if vision is starting this frame...
            if vision.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                vision.frameNStart = frameN  # exact frame index
                vision.tStart = t  # local t and not account for scr refresh
                vision.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(vision, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'vision.started')
                # update status
                vision.status = STARTED
                vision.setAutoDraw(True)
            
            # if vision is active this frame...
            if vision.status == STARTED:
                # update params
                pass
            
            # *interoception* updates
            
            # if interoception is starting this frame...
            if interoception.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                interoception.frameNStart = frameN  # exact frame index
                interoception.tStart = t  # local t and not account for scr refresh
                interoception.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(interoception, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'interoception.started')
                # update status
                interoception.status = STARTED
                interoception.setAutoDraw(True)
            
            # if interoception is active this frame...
            if interoception.status == STARTED:
                # update params
                pass
            
            # *auditionslider* updates
            
            # if auditionslider is starting this frame...
            if auditionslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                auditionslider.frameNStart = frameN  # exact frame index
                auditionslider.tStart = t  # local t and not account for scr refresh
                auditionslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(auditionslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'auditionslider.started')
                # update status
                auditionslider.status = STARTED
                auditionslider.setAutoDraw(True)
            
            # if auditionslider is active this frame...
            if auditionslider.status == STARTED:
                # update params
                pass
            
            # *tasteslider* updates
            
            # if tasteslider is starting this frame...
            if tasteslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                tasteslider.frameNStart = frameN  # exact frame index
                tasteslider.tStart = t  # local t and not account for scr refresh
                tasteslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(tasteslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'tasteslider.started')
                # update status
                tasteslider.status = STARTED
                tasteslider.setAutoDraw(True)
            
            # if tasteslider is active this frame...
            if tasteslider.status == STARTED:
                # update params
                pass
            
            # *hapticslider* updates
            
            # if hapticslider is starting this frame...
            if hapticslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                hapticslider.frameNStart = frameN  # exact frame index
                hapticslider.tStart = t  # local t and not account for scr refresh
                hapticslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(hapticslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'hapticslider.started')
                # update status
                hapticslider.status = STARTED
                hapticslider.setAutoDraw(True)
            
            # if hapticslider is active this frame...
            if hapticslider.status == STARTED:
                # update params
                pass
            
            # *olfactionslider* updates
            
            # if olfactionslider is starting this frame...
            if olfactionslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                olfactionslider.frameNStart = frameN  # exact frame index
                olfactionslider.tStart = t  # local t and not account for scr refresh
                olfactionslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(olfactionslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'olfactionslider.started')
                # update status
                olfactionslider.status = STARTED
                olfactionslider.setAutoDraw(True)
            
            # if olfactionslider is active this frame...
            if olfactionslider.status == STARTED:
                # update params
                pass
            
            # *visionslider* updates
            
            # if visionslider is starting this frame...
            if visionslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                visionslider.frameNStart = frameN  # exact frame index
                visionslider.tStart = t  # local t and not account for scr refresh
                visionslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(visionslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'visionslider.started')
                # update status
                visionslider.status = STARTED
                visionslider.setAutoDraw(True)
            
            # if visionslider is active this frame...
            if visionslider.status == STARTED:
                # update params
                pass
            
            # *interoceptionsslider* updates
            
            # if interoceptionsslider is starting this frame...
            if interoceptionsslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                interoceptionsslider.frameNStart = frameN  # exact frame index
                interoceptionsslider.tStart = t  # local t and not account for scr refresh
                interoceptionsslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(interoceptionsslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'interoceptionsslider.started')
                # update status
                interoceptionsslider.status = STARTED
                interoceptionsslider.setAutoDraw(True)
            
            # if interoceptionsslider is active this frame...
            if interoceptionsslider.status == STARTED:
                # update params
                pass
            # *next2PANstim* updates
            
            # if next2PANstim is starting this frame...
            if next2PANstim.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                next2PANstim.frameNStart = frameN  # exact frame index
                next2PANstim.tStart = t  # local t and not account for scr refresh
                next2PANstim.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(next2PANstim, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'next2PANstim.started')
                # update status
                next2PANstim.status = STARTED
                win.callOnFlip(next2PANstim.buttonClock.reset)
                next2PANstim.setAutoDraw(True)
            
            # if next2PANstim is active this frame...
            if next2PANstim.status == STARTED:
                # update params
                pass
                # check whether next2PANstim has been pressed
                if next2PANstim.isClicked:
                    if not next2PANstim.wasClicked:
                        # if this is a new click, store time of first click and clicked until
                        next2PANstim.timesOn.append(next2PANstim.buttonClock.getTime())
                        next2PANstim.timesOff.append(next2PANstim.buttonClock.getTime())
                    elif len(next2PANstim.timesOff):
                        # if click is continuing from last frame, update time of clicked until
                        next2PANstim.timesOff[-1] = next2PANstim.buttonClock.getTime()
                    if not next2PANstim.wasClicked:
                        # end routine when next2PANstim is clicked
                        continueRoutine = False
                    if not next2PANstim.wasClicked:
                        # run callback code when next2PANstim is clicked
                        pass
            # take note of whether next2PANstim was clicked, so that next frame we know if clicks are new
            next2PANstim.wasClicked = next2PANstim.isClicked and next2PANstim.status == STARTED
            # *nose2PAN* updates
            
            # if nose2PAN is starting this frame...
            if nose2PAN.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                nose2PAN.frameNStart = frameN  # exact frame index
                nose2PAN.tStart = t  # local t and not account for scr refresh
                nose2PAN.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(nose2PAN, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'nose2PAN.started')
                # update status
                nose2PAN.status = STARTED
                win.callOnFlip(nose2PAN.buttonClock.reset)
                nose2PAN.setAutoDraw(True)
            
            # if nose2PAN is active this frame...
            if nose2PAN.status == STARTED:
                # update params
                pass
                # check whether nose2PAN has been pressed
                if nose2PAN.isClicked:
                    if not nose2PAN.wasClicked:
                        # if this is a new click, store time of first click and clicked until
                        nose2PAN.timesOn.append(nose2PAN.buttonClock.getTime())
                        nose2PAN.timesOff.append(nose2PAN.buttonClock.getTime())
                    elif len(nose2PAN.timesOff):
                        # if click is continuing from last frame, update time of clicked until
                        nose2PAN.timesOff[-1] = nose2PAN.buttonClock.getTime()
                    if not nose2PAN.wasClicked:
                        # end routine when nose2PAN is clicked
                        continueRoutine = False
                    if not nose2PAN.wasClicked:
                        # run callback code when nose2PAN is clicked
                        pass
            # take note of whether nose2PAN was clicked, so that next frame we know if clicks are new
            nose2PAN.wasClicked = nose2PAN.isClicked and nose2PAN.status == STARTED
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                SentirES_psychopy.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in SentirES_psychopy.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "SentirES_psychopy" ---
        for thisComponent in SentirES_psychopy.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for SentirES_psychopy
        SentirES_psychopy.tStop = globalClock.getTime(format='float')
        SentirES_psychopy.tStopRefresh = tThisFlipGlobal
        thisExp.addData('SentirES_psychopy.stopped', SentirES_psychopy.tStop)
        SentirES2SPAN78.addData('auditionslider.response', auditionslider.getRating())
        SentirES2SPAN78.addData('auditionslider.rt', auditionslider.getRT())
        SentirES2SPAN78.addData('tasteslider.response', tasteslider.getRating())
        SentirES2SPAN78.addData('tasteslider.rt', tasteslider.getRT())
        SentirES2SPAN78.addData('hapticslider.response', hapticslider.getRating())
        SentirES2SPAN78.addData('hapticslider.rt', hapticslider.getRT())
        SentirES2SPAN78.addData('olfactionslider.response', olfactionslider.getRating())
        SentirES2SPAN78.addData('olfactionslider.rt', olfactionslider.getRT())
        SentirES2SPAN78.addData('visionslider.response', visionslider.getRating())
        SentirES2SPAN78.addData('visionslider.rt', visionslider.getRT())
        SentirES2SPAN78.addData('interoceptionsslider.response', interoceptionsslider.getRating())
        SentirES2SPAN78.addData('interoceptionsslider.rt', interoceptionsslider.getRT())
        SentirES2SPAN78.addData('next2PANstim.numClicks', next2PANstim.numClicks)
        if next2PANstim.numClicks:
           SentirES2SPAN78.addData('next2PANstim.timesOn', next2PANstim.timesOn)
           SentirES2SPAN78.addData('next2PANstim.timesOff', next2PANstim.timesOff)
        else:
           SentirES2SPAN78.addData('next2PANstim.timesOn', "")
           SentirES2SPAN78.addData('next2PANstim.timesOff', "")
        SentirES2SPAN78.addData('nose2PAN.numClicks', nose2PAN.numClicks)
        if nose2PAN.numClicks:
           SentirES2SPAN78.addData('nose2PAN.timesOn', nose2PAN.timesOn)
           SentirES2SPAN78.addData('nose2PAN.timesOff', nose2PAN.timesOff)
        else:
           SentirES2SPAN78.addData('nose2PAN.timesOn', "")
           SentirES2SPAN78.addData('nose2PAN.timesOff', "")
        # the Routine "SentirES_psychopy" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'SentirES2SPAN78'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "catch2PAN3" ---
    # create an object to store info about Routine catch2PAN3
    catch2PAN3 = data.Routine(
        name='catch2PAN3',
        components=[catch2PANfruta, bocadillo, coliflor, manzana],
    )
    catch2PAN3.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # reset bocadillo to account for continued clicks & clear times on/off
    bocadillo.reset()
    # reset coliflor to account for continued clicks & clear times on/off
    coliflor.reset()
    # reset manzana to account for continued clicks & clear times on/off
    manzana.reset()
    # store start times for catch2PAN3
    catch2PAN3.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    catch2PAN3.tStart = globalClock.getTime(format='float')
    catch2PAN3.status = STARTED
    thisExp.addData('catch2PAN3.started', catch2PAN3.tStart)
    catch2PAN3.maxDuration = None
    # keep track of which components have finished
    catch2PAN3Components = catch2PAN3.components
    for thisComponent in catch2PAN3.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "catch2PAN3" ---
    catch2PAN3.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *catch2PANfruta* updates
        
        # if catch2PANfruta is starting this frame...
        if catch2PANfruta.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            catch2PANfruta.frameNStart = frameN  # exact frame index
            catch2PANfruta.tStart = t  # local t and not account for scr refresh
            catch2PANfruta.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(catch2PANfruta, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'catch2PANfruta.started')
            # update status
            catch2PANfruta.status = STARTED
            catch2PANfruta.setAutoDraw(True)
        
        # if catch2PANfruta is active this frame...
        if catch2PANfruta.status == STARTED:
            # update params
            pass
        # *bocadillo* updates
        
        # if bocadillo is starting this frame...
        if bocadillo.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            bocadillo.frameNStart = frameN  # exact frame index
            bocadillo.tStart = t  # local t and not account for scr refresh
            bocadillo.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(bocadillo, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'bocadillo.started')
            # update status
            bocadillo.status = STARTED
            win.callOnFlip(bocadillo.buttonClock.reset)
            bocadillo.setAutoDraw(True)
        
        # if bocadillo is active this frame...
        if bocadillo.status == STARTED:
            # update params
            pass
            # check whether bocadillo has been pressed
            if bocadillo.isClicked:
                if not bocadillo.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    bocadillo.timesOn.append(bocadillo.buttonClock.getTime())
                    bocadillo.timesOff.append(bocadillo.buttonClock.getTime())
                elif len(bocadillo.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    bocadillo.timesOff[-1] = bocadillo.buttonClock.getTime()
                if not bocadillo.wasClicked:
                    # end routine when bocadillo is clicked
                    continueRoutine = False
                if not bocadillo.wasClicked:
                    # run callback code when bocadillo is clicked
                    pass
        # take note of whether bocadillo was clicked, so that next frame we know if clicks are new
        bocadillo.wasClicked = bocadillo.isClicked and bocadillo.status == STARTED
        # *coliflor* updates
        
        # if coliflor is starting this frame...
        if coliflor.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            coliflor.frameNStart = frameN  # exact frame index
            coliflor.tStart = t  # local t and not account for scr refresh
            coliflor.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(coliflor, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'coliflor.started')
            # update status
            coliflor.status = STARTED
            win.callOnFlip(coliflor.buttonClock.reset)
            coliflor.setAutoDraw(True)
        
        # if coliflor is active this frame...
        if coliflor.status == STARTED:
            # update params
            pass
            # check whether coliflor has been pressed
            if coliflor.isClicked:
                if not coliflor.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    coliflor.timesOn.append(coliflor.buttonClock.getTime())
                    coliflor.timesOff.append(coliflor.buttonClock.getTime())
                elif len(coliflor.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    coliflor.timesOff[-1] = coliflor.buttonClock.getTime()
                if not coliflor.wasClicked:
                    # end routine when coliflor is clicked
                    continueRoutine = False
                if not coliflor.wasClicked:
                    # run callback code when coliflor is clicked
                    pass
        # take note of whether coliflor was clicked, so that next frame we know if clicks are new
        coliflor.wasClicked = coliflor.isClicked and coliflor.status == STARTED
        # *manzana* updates
        
        # if manzana is starting this frame...
        if manzana.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            manzana.frameNStart = frameN  # exact frame index
            manzana.tStart = t  # local t and not account for scr refresh
            manzana.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(manzana, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'manzana.started')
            # update status
            manzana.status = STARTED
            win.callOnFlip(manzana.buttonClock.reset)
            manzana.setAutoDraw(True)
        
        # if manzana is active this frame...
        if manzana.status == STARTED:
            # update params
            pass
            # check whether manzana has been pressed
            if manzana.isClicked:
                if not manzana.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    manzana.timesOn.append(manzana.buttonClock.getTime())
                    manzana.timesOff.append(manzana.buttonClock.getTime())
                elif len(manzana.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    manzana.timesOff[-1] = manzana.buttonClock.getTime()
                if not manzana.wasClicked:
                    # end routine when manzana is clicked
                    continueRoutine = False
                if not manzana.wasClicked:
                    # run callback code when manzana is clicked
                    pass
        # take note of whether manzana was clicked, so that next frame we know if clicks are new
        manzana.wasClicked = manzana.isClicked and manzana.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            catch2PAN3.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in catch2PAN3.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "catch2PAN3" ---
    for thisComponent in catch2PAN3.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for catch2PAN3
    catch2PAN3.tStop = globalClock.getTime(format='float')
    catch2PAN3.tStopRefresh = tThisFlipGlobal
    thisExp.addData('catch2PAN3.stopped', catch2PAN3.tStop)
    thisExp.addData('bocadillo.numClicks', bocadillo.numClicks)
    if bocadillo.numClicks:
       thisExp.addData('bocadillo.timesOn', bocadillo.timesOn)
       thisExp.addData('bocadillo.timesOff', bocadillo.timesOff)
    else:
       thisExp.addData('bocadillo.timesOn', "")
       thisExp.addData('bocadillo.timesOff', "")
    thisExp.addData('coliflor.numClicks', coliflor.numClicks)
    if coliflor.numClicks:
       thisExp.addData('coliflor.timesOn', coliflor.timesOn)
       thisExp.addData('coliflor.timesOff', coliflor.timesOff)
    else:
       thisExp.addData('coliflor.timesOn', "")
       thisExp.addData('coliflor.timesOff', "")
    thisExp.addData('manzana.numClicks', manzana.numClicks)
    if manzana.numClicks:
       thisExp.addData('manzana.timesOn', manzana.timesOn)
       thisExp.addData('manzana.timesOff', manzana.timesOff)
    else:
       thisExp.addData('manzana.timesOn', "")
       thisExp.addData('manzana.timesOff', "")
    thisExp.nextEntry()
    # the Routine "catch2PAN3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    SentirES2SPAN80 = data.TrialHandler2(
        name='SentirES2SPAN80',
        nReps=1.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('stimSPAN/Stimuli2PAN80.csv'), 
        seed=None, 
    )
    thisExp.addLoop(SentirES2SPAN80)  # add the loop to the experiment
    thisSentirES2SPAN80 = SentirES2SPAN80.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisSentirES2SPAN80.rgb)
    if thisSentirES2SPAN80 != None:
        for paramName in thisSentirES2SPAN80:
            globals()[paramName] = thisSentirES2SPAN80[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisSentirES2SPAN80 in SentirES2SPAN80:
        currentLoop = SentirES2SPAN80
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisSentirES2SPAN80.rgb)
        if thisSentirES2SPAN80 != None:
            for paramName in thisSentirES2SPAN80:
                globals()[paramName] = thisSentirES2SPAN80[paramName]
        
        # --- Prepare to start Routine "SentirES_psychopy" ---
        # create an object to store info about Routine SentirES_psychopy
        SentirES_psychopy = data.Routine(
            name='SentirES_psychopy',
            components=[pregunta, stimuli, audition, taste, haptic, olfaction, vision, interoception, auditionslider, tasteslider, hapticslider, olfactionslider, visionslider, interoceptionsslider, next2PANstim, nose2PAN],
        )
        SentirES_psychopy.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        stimuli.setText(Word)
        auditionslider.reset()
        tasteslider.reset()
        hapticslider.reset()
        olfactionslider.reset()
        visionslider.reset()
        interoceptionsslider.reset()
        # reset next2PANstim to account for continued clicks & clear times on/off
        next2PANstim.reset()
        # reset nose2PAN to account for continued clicks & clear times on/off
        nose2PAN.reset()
        # store start times for SentirES_psychopy
        SentirES_psychopy.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        SentirES_psychopy.tStart = globalClock.getTime(format='float')
        SentirES_psychopy.status = STARTED
        thisExp.addData('SentirES_psychopy.started', SentirES_psychopy.tStart)
        SentirES_psychopy.maxDuration = None
        # keep track of which components have finished
        SentirES_psychopyComponents = SentirES_psychopy.components
        for thisComponent in SentirES_psychopy.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "SentirES_psychopy" ---
        # if trial has changed, end Routine now
        if isinstance(SentirES2SPAN80, data.TrialHandler2) and thisSentirES2SPAN80.thisN != SentirES2SPAN80.thisTrial.thisN:
            continueRoutine = False
        SentirES_psychopy.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *pregunta* updates
            
            # if pregunta is starting this frame...
            if pregunta.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                pregunta.frameNStart = frameN  # exact frame index
                pregunta.tStart = t  # local t and not account for scr refresh
                pregunta.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(pregunta, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'pregunta.started')
                # update status
                pregunta.status = STARTED
                pregunta.setAutoDraw(True)
            
            # if pregunta is active this frame...
            if pregunta.status == STARTED:
                # update params
                pass
            
            # *stimuli* updates
            
            # if stimuli is starting this frame...
            if stimuli.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                stimuli.frameNStart = frameN  # exact frame index
                stimuli.tStart = t  # local t and not account for scr refresh
                stimuli.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stimuli, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'stimuli.started')
                # update status
                stimuli.status = STARTED
                stimuli.setAutoDraw(True)
            
            # if stimuli is active this frame...
            if stimuli.status == STARTED:
                # update params
                pass
            
            # *audition* updates
            
            # if audition is starting this frame...
            if audition.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                audition.frameNStart = frameN  # exact frame index
                audition.tStart = t  # local t and not account for scr refresh
                audition.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(audition, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'audition.started')
                # update status
                audition.status = STARTED
                audition.setAutoDraw(True)
            
            # if audition is active this frame...
            if audition.status == STARTED:
                # update params
                pass
            
            # *taste* updates
            
            # if taste is starting this frame...
            if taste.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                taste.frameNStart = frameN  # exact frame index
                taste.tStart = t  # local t and not account for scr refresh
                taste.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(taste, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'taste.started')
                # update status
                taste.status = STARTED
                taste.setAutoDraw(True)
            
            # if taste is active this frame...
            if taste.status == STARTED:
                # update params
                pass
            
            # *haptic* updates
            
            # if haptic is starting this frame...
            if haptic.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                haptic.frameNStart = frameN  # exact frame index
                haptic.tStart = t  # local t and not account for scr refresh
                haptic.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(haptic, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'haptic.started')
                # update status
                haptic.status = STARTED
                haptic.setAutoDraw(True)
            
            # if haptic is active this frame...
            if haptic.status == STARTED:
                # update params
                pass
            
            # *olfaction* updates
            
            # if olfaction is starting this frame...
            if olfaction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                olfaction.frameNStart = frameN  # exact frame index
                olfaction.tStart = t  # local t and not account for scr refresh
                olfaction.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(olfaction, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'olfaction.started')
                # update status
                olfaction.status = STARTED
                olfaction.setAutoDraw(True)
            
            # if olfaction is active this frame...
            if olfaction.status == STARTED:
                # update params
                pass
            
            # *vision* updates
            
            # if vision is starting this frame...
            if vision.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                vision.frameNStart = frameN  # exact frame index
                vision.tStart = t  # local t and not account for scr refresh
                vision.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(vision, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'vision.started')
                # update status
                vision.status = STARTED
                vision.setAutoDraw(True)
            
            # if vision is active this frame...
            if vision.status == STARTED:
                # update params
                pass
            
            # *interoception* updates
            
            # if interoception is starting this frame...
            if interoception.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                interoception.frameNStart = frameN  # exact frame index
                interoception.tStart = t  # local t and not account for scr refresh
                interoception.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(interoception, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'interoception.started')
                # update status
                interoception.status = STARTED
                interoception.setAutoDraw(True)
            
            # if interoception is active this frame...
            if interoception.status == STARTED:
                # update params
                pass
            
            # *auditionslider* updates
            
            # if auditionslider is starting this frame...
            if auditionslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                auditionslider.frameNStart = frameN  # exact frame index
                auditionslider.tStart = t  # local t and not account for scr refresh
                auditionslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(auditionslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'auditionslider.started')
                # update status
                auditionslider.status = STARTED
                auditionslider.setAutoDraw(True)
            
            # if auditionslider is active this frame...
            if auditionslider.status == STARTED:
                # update params
                pass
            
            # *tasteslider* updates
            
            # if tasteslider is starting this frame...
            if tasteslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                tasteslider.frameNStart = frameN  # exact frame index
                tasteslider.tStart = t  # local t and not account for scr refresh
                tasteslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(tasteslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'tasteslider.started')
                # update status
                tasteslider.status = STARTED
                tasteslider.setAutoDraw(True)
            
            # if tasteslider is active this frame...
            if tasteslider.status == STARTED:
                # update params
                pass
            
            # *hapticslider* updates
            
            # if hapticslider is starting this frame...
            if hapticslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                hapticslider.frameNStart = frameN  # exact frame index
                hapticslider.tStart = t  # local t and not account for scr refresh
                hapticslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(hapticslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'hapticslider.started')
                # update status
                hapticslider.status = STARTED
                hapticslider.setAutoDraw(True)
            
            # if hapticslider is active this frame...
            if hapticslider.status == STARTED:
                # update params
                pass
            
            # *olfactionslider* updates
            
            # if olfactionslider is starting this frame...
            if olfactionslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                olfactionslider.frameNStart = frameN  # exact frame index
                olfactionslider.tStart = t  # local t and not account for scr refresh
                olfactionslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(olfactionslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'olfactionslider.started')
                # update status
                olfactionslider.status = STARTED
                olfactionslider.setAutoDraw(True)
            
            # if olfactionslider is active this frame...
            if olfactionslider.status == STARTED:
                # update params
                pass
            
            # *visionslider* updates
            
            # if visionslider is starting this frame...
            if visionslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                visionslider.frameNStart = frameN  # exact frame index
                visionslider.tStart = t  # local t and not account for scr refresh
                visionslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(visionslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'visionslider.started')
                # update status
                visionslider.status = STARTED
                visionslider.setAutoDraw(True)
            
            # if visionslider is active this frame...
            if visionslider.status == STARTED:
                # update params
                pass
            
            # *interoceptionsslider* updates
            
            # if interoceptionsslider is starting this frame...
            if interoceptionsslider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                interoceptionsslider.frameNStart = frameN  # exact frame index
                interoceptionsslider.tStart = t  # local t and not account for scr refresh
                interoceptionsslider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(interoceptionsslider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'interoceptionsslider.started')
                # update status
                interoceptionsslider.status = STARTED
                interoceptionsslider.setAutoDraw(True)
            
            # if interoceptionsslider is active this frame...
            if interoceptionsslider.status == STARTED:
                # update params
                pass
            # *next2PANstim* updates
            
            # if next2PANstim is starting this frame...
            if next2PANstim.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                next2PANstim.frameNStart = frameN  # exact frame index
                next2PANstim.tStart = t  # local t and not account for scr refresh
                next2PANstim.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(next2PANstim, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'next2PANstim.started')
                # update status
                next2PANstim.status = STARTED
                win.callOnFlip(next2PANstim.buttonClock.reset)
                next2PANstim.setAutoDraw(True)
            
            # if next2PANstim is active this frame...
            if next2PANstim.status == STARTED:
                # update params
                pass
                # check whether next2PANstim has been pressed
                if next2PANstim.isClicked:
                    if not next2PANstim.wasClicked:
                        # if this is a new click, store time of first click and clicked until
                        next2PANstim.timesOn.append(next2PANstim.buttonClock.getTime())
                        next2PANstim.timesOff.append(next2PANstim.buttonClock.getTime())
                    elif len(next2PANstim.timesOff):
                        # if click is continuing from last frame, update time of clicked until
                        next2PANstim.timesOff[-1] = next2PANstim.buttonClock.getTime()
                    if not next2PANstim.wasClicked:
                        # end routine when next2PANstim is clicked
                        continueRoutine = False
                    if not next2PANstim.wasClicked:
                        # run callback code when next2PANstim is clicked
                        pass
            # take note of whether next2PANstim was clicked, so that next frame we know if clicks are new
            next2PANstim.wasClicked = next2PANstim.isClicked and next2PANstim.status == STARTED
            # *nose2PAN* updates
            
            # if nose2PAN is starting this frame...
            if nose2PAN.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                nose2PAN.frameNStart = frameN  # exact frame index
                nose2PAN.tStart = t  # local t and not account for scr refresh
                nose2PAN.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(nose2PAN, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'nose2PAN.started')
                # update status
                nose2PAN.status = STARTED
                win.callOnFlip(nose2PAN.buttonClock.reset)
                nose2PAN.setAutoDraw(True)
            
            # if nose2PAN is active this frame...
            if nose2PAN.status == STARTED:
                # update params
                pass
                # check whether nose2PAN has been pressed
                if nose2PAN.isClicked:
                    if not nose2PAN.wasClicked:
                        # if this is a new click, store time of first click and clicked until
                        nose2PAN.timesOn.append(nose2PAN.buttonClock.getTime())
                        nose2PAN.timesOff.append(nose2PAN.buttonClock.getTime())
                    elif len(nose2PAN.timesOff):
                        # if click is continuing from last frame, update time of clicked until
                        nose2PAN.timesOff[-1] = nose2PAN.buttonClock.getTime()
                    if not nose2PAN.wasClicked:
                        # end routine when nose2PAN is clicked
                        continueRoutine = False
                    if not nose2PAN.wasClicked:
                        # run callback code when nose2PAN is clicked
                        pass
            # take note of whether nose2PAN was clicked, so that next frame we know if clicks are new
            nose2PAN.wasClicked = nose2PAN.isClicked and nose2PAN.status == STARTED
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                SentirES_psychopy.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in SentirES_psychopy.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "SentirES_psychopy" ---
        for thisComponent in SentirES_psychopy.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for SentirES_psychopy
        SentirES_psychopy.tStop = globalClock.getTime(format='float')
        SentirES_psychopy.tStopRefresh = tThisFlipGlobal
        thisExp.addData('SentirES_psychopy.stopped', SentirES_psychopy.tStop)
        SentirES2SPAN80.addData('auditionslider.response', auditionslider.getRating())
        SentirES2SPAN80.addData('auditionslider.rt', auditionslider.getRT())
        SentirES2SPAN80.addData('tasteslider.response', tasteslider.getRating())
        SentirES2SPAN80.addData('tasteslider.rt', tasteslider.getRT())
        SentirES2SPAN80.addData('hapticslider.response', hapticslider.getRating())
        SentirES2SPAN80.addData('hapticslider.rt', hapticslider.getRT())
        SentirES2SPAN80.addData('olfactionslider.response', olfactionslider.getRating())
        SentirES2SPAN80.addData('olfactionslider.rt', olfactionslider.getRT())
        SentirES2SPAN80.addData('visionslider.response', visionslider.getRating())
        SentirES2SPAN80.addData('visionslider.rt', visionslider.getRT())
        SentirES2SPAN80.addData('interoceptionsslider.response', interoceptionsslider.getRating())
        SentirES2SPAN80.addData('interoceptionsslider.rt', interoceptionsslider.getRT())
        SentirES2SPAN80.addData('next2PANstim.numClicks', next2PANstim.numClicks)
        if next2PANstim.numClicks:
           SentirES2SPAN80.addData('next2PANstim.timesOn', next2PANstim.timesOn)
           SentirES2SPAN80.addData('next2PANstim.timesOff', next2PANstim.timesOff)
        else:
           SentirES2SPAN80.addData('next2PANstim.timesOn', "")
           SentirES2SPAN80.addData('next2PANstim.timesOff', "")
        SentirES2SPAN80.addData('nose2PAN.numClicks', nose2PAN.numClicks)
        if nose2PAN.numClicks:
           SentirES2SPAN80.addData('nose2PAN.timesOn', nose2PAN.timesOn)
           SentirES2SPAN80.addData('nose2PAN.timesOff', nose2PAN.timesOff)
        else:
           SentirES2SPAN80.addData('nose2PAN.timesOn', "")
           SentirES2SPAN80.addData('nose2PAN.timesOff', "")
        # the Routine "SentirES_psychopy" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'SentirES2SPAN80'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "debriefing_2" ---
    # create an object to store info about Routine debriefing_2
    debriefing_2 = data.Routine(
        name='debriefing_2',
        components=[debriefing_3, contact, next],
    )
    debriefing_2.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # reset next to account for continued clicks & clear times on/off
    next.reset()
    # store start times for debriefing_2
    debriefing_2.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    debriefing_2.tStart = globalClock.getTime(format='float')
    debriefing_2.status = STARTED
    thisExp.addData('debriefing_2.started', debriefing_2.tStart)
    debriefing_2.maxDuration = None
    # keep track of which components have finished
    debriefing_2Components = debriefing_2.components
    for thisComponent in debriefing_2.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "debriefing_2" ---
    debriefing_2.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *debriefing_3* updates
        
        # if debriefing_3 is starting this frame...
        if debriefing_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            debriefing_3.frameNStart = frameN  # exact frame index
            debriefing_3.tStart = t  # local t and not account for scr refresh
            debriefing_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(debriefing_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'debriefing_3.started')
            # update status
            debriefing_3.status = STARTED
            debriefing_3.setAutoDraw(True)
        
        # if debriefing_3 is active this frame...
        if debriefing_3.status == STARTED:
            # update params
            pass
        
        # *contact* updates
        
        # if contact is starting this frame...
        if contact.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            contact.frameNStart = frameN  # exact frame index
            contact.tStart = t  # local t and not account for scr refresh
            contact.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(contact, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'contact.started')
            # update status
            contact.status = STARTED
            contact.setAutoDraw(True)
        
        # if contact is active this frame...
        if contact.status == STARTED:
            # update params
            pass
        # *next* updates
        
        # if next is starting this frame...
        if next.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            next.frameNStart = frameN  # exact frame index
            next.tStart = t  # local t and not account for scr refresh
            next.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(next, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'next.started')
            # update status
            next.status = STARTED
            win.callOnFlip(next.buttonClock.reset)
            next.setAutoDraw(True)
        
        # if next is active this frame...
        if next.status == STARTED:
            # update params
            pass
            # check whether next has been pressed
            if next.isClicked:
                if not next.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    next.timesOn.append(next.buttonClock.getTime())
                    next.timesOff.append(next.buttonClock.getTime())
                elif len(next.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    next.timesOff[-1] = next.buttonClock.getTime()
                if not next.wasClicked:
                    # end routine when next is clicked
                    continueRoutine = False
                if not next.wasClicked:
                    # run callback code when next is clicked
                    pass
        # take note of whether next was clicked, so that next frame we know if clicks are new
        next.wasClicked = next.isClicked and next.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            debriefing_2.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in debriefing_2.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "debriefing_2" ---
    for thisComponent in debriefing_2.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for debriefing_2
    debriefing_2.tStop = globalClock.getTime(format='float')
    debriefing_2.tStopRefresh = tThisFlipGlobal
    thisExp.addData('debriefing_2.stopped', debriefing_2.tStop)
    thisExp.addData('next.numClicks', next.numClicks)
    if next.numClicks:
       thisExp.addData('next.timesOn', next.timesOn)
       thisExp.addData('next.timesOff', next.timesOff)
    else:
       thisExp.addData('next.timesOn', "")
       thisExp.addData('next.timesOff', "")
    thisExp.nextEntry()
    # the Routine "debriefing_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "fin" ---
    # create an object to store info about Routine fin
    fin = data.Routine(
        name='fin',
        components=[fin_y, fin2PAN],
    )
    fin.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # reset fin2PAN to account for continued clicks & clear times on/off
    fin2PAN.reset()
    # store start times for fin
    fin.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    fin.tStart = globalClock.getTime(format='float')
    fin.status = STARTED
    thisExp.addData('fin.started', fin.tStart)
    fin.maxDuration = None
    # keep track of which components have finished
    finComponents = fin.components
    for thisComponent in fin.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "fin" ---
    fin.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fin_y* updates
        
        # if fin_y is starting this frame...
        if fin_y.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fin_y.frameNStart = frameN  # exact frame index
            fin_y.tStart = t  # local t and not account for scr refresh
            fin_y.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fin_y, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'fin_y.started')
            # update status
            fin_y.status = STARTED
            fin_y.setAutoDraw(True)
        
        # if fin_y is active this frame...
        if fin_y.status == STARTED:
            # update params
            pass
        # *fin2PAN* updates
        
        # if fin2PAN is starting this frame...
        if fin2PAN.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            fin2PAN.frameNStart = frameN  # exact frame index
            fin2PAN.tStart = t  # local t and not account for scr refresh
            fin2PAN.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fin2PAN, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'fin2PAN.started')
            # update status
            fin2PAN.status = STARTED
            win.callOnFlip(fin2PAN.buttonClock.reset)
            fin2PAN.setAutoDraw(True)
        
        # if fin2PAN is active this frame...
        if fin2PAN.status == STARTED:
            # update params
            pass
            # check whether fin2PAN has been pressed
            if fin2PAN.isClicked:
                if not fin2PAN.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    fin2PAN.timesOn.append(fin2PAN.buttonClock.getTime())
                    fin2PAN.timesOff.append(fin2PAN.buttonClock.getTime())
                elif len(fin2PAN.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    fin2PAN.timesOff[-1] = fin2PAN.buttonClock.getTime()
                if not fin2PAN.wasClicked:
                    # end routine when fin2PAN is clicked
                    continueRoutine = False
                if not fin2PAN.wasClicked:
                    # run callback code when fin2PAN is clicked
                    pass
        # take note of whether fin2PAN was clicked, so that next frame we know if clicks are new
        fin2PAN.wasClicked = fin2PAN.isClicked and fin2PAN.status == STARTED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            fin.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fin.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "fin" ---
    for thisComponent in fin.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for fin
    fin.tStop = globalClock.getTime(format='float')
    fin.tStopRefresh = tThisFlipGlobal
    thisExp.addData('fin.stopped', fin.tStop)
    thisExp.addData('fin2PAN.numClicks', fin2PAN.numClicks)
    if fin2PAN.numClicks:
       thisExp.addData('fin2PAN.timesOn', fin2PAN.timesOn)
       thisExp.addData('fin2PAN.timesOff', fin2PAN.timesOff)
    else:
       thisExp.addData('fin2PAN.timesOn', "")
       thisExp.addData('fin2PAN.timesOff', "")
    thisExp.nextEntry()
    # the Routine "fin" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
