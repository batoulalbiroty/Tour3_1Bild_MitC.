(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"data":{"textToSpeechConfig":{"speechOnInfoWindow":false,"pitch":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"volume":1,"stopBackgroundAudio":false,"rate":1},"defaultLocale":"de","history":{},"locales":{"de":"locale/de.txt"},"name":"Player507"},"backgroundColorRatios":[0],"scrollBarMargin":2,"gap":10,"start":"this.init()","layout":"absolute","scripts":{"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"initAnalytics":TDV.Tour.Script.initAnalytics,"showPopupImage":TDV.Tour.Script.showPopupImage,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"historyGoForward":TDV.Tour.Script.historyGoForward,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPixels":TDV.Tour.Script.getPixels,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setValue":TDV.Tour.Script.setValue,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"isPanorama":TDV.Tour.Script.isPanorama,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"initQuiz":TDV.Tour.Script.initQuiz,"translate":TDV.Tour.Script.translate,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getComponentByName":TDV.Tour.Script.getComponentByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"clone":TDV.Tour.Script.clone,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"historyGoBack":TDV.Tour.Script.historyGoBack,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"init":TDV.Tour.Script.init,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"textToSpeech":TDV.Tour.Script.textToSpeech,"downloadFile":TDV.Tour.Script.downloadFile,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setLocale":TDV.Tour.Script.setLocale,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"showWindow":TDV.Tour.Script.showWindow,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"playAudioList":TDV.Tour.Script.playAudioList,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"createTween":TDV.Tour.Script.createTween,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getMediaByName":TDV.Tour.Script.getMediaByName,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"cloneBindings":TDV.Tour.Script.cloneBindings,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"shareSocial":TDV.Tour.Script.shareSocial,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"mixObject":TDV.Tour.Script.mixObject,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"registerKey":TDV.Tour.Script.registerKey,"existsKey":TDV.Tour.Script.existsKey,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getOverlays":TDV.Tour.Script.getOverlays,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"openLink":TDV.Tour.Script.openLink,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizStart":TDV.Tour.Script.quizStart,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getKey":TDV.Tour.Script.getKey,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"executeJS":TDV.Tour.Script.executeJS,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"startMeasurement":TDV.Tour.Script.startMeasurement,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty},"height":"100%","defaultMenu":["fullscreen","mute","rotation"],"children":["this.MainViewer","this.Container_DE0B190F_C9EF_274F_41E3_CF51CE2FFE12"],"width":"100%","hash": "3c39a305344e0be87eea3e43156e9e5bd455eb75c9462be14bd72cee11b0b197", "definitions": [{"minWidth":100,"firstTransitionDuration":0,"playbackBarBackgroundOpacity":1,"playbackBarProgressBorderRadius":0,"progressBarBorderSize":0,"playbackBarBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"progressBarBackgroundColorDirection":"horizontal","playbackBarProgressBorderColor":"#000000","toolTipFontFamily":"Arial","subtitlesFontColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"progressBorderRadius":2,"height":"100%","playbackBarHeadShadowOpacity":0.7,"width":"100%","playbackBarHeadBorderSize":0,"playbackBarHeadBorderColor":"#000000","toolTipFontSize":"1.11vmin","playbackBarBorderSize":0,"progressBottom":10,"playbackBarBottom":5,"subtitlesBottom":50,"playbackBarHeadShadow":true,"subtitlesTextShadowHorizontalLength":1,"toolTipBorderColor":"#767676","playbackBarHeadShadowBlurRadius":3,"toolTipTextShadowColor":"#000000","class":"ViewerArea","progressBackgroundColor":["#000000"],"id":"MainViewer","subtitlesTop":0,"toolTipPaddingLeft":6,"toolTipShadowColor":"#333138","toolTipPaddingTop":4,"subtitlesTextShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"progressBorderSize":0,"surfaceReticleColor":"#FFFFFF","progressHeight":2,"playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBackgroundOpacity":0.2,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"toolTipFontColor":"#606060","subtitlesFontSize":"3vmin","toolTipPaddingRight":6,"propagateClick":false,"vrPointerSelectionColor":"#FF6600","subtitlesBorderColor":"#FFFFFF","progressOpacity":0.7,"vrPointerColor":"#FFFFFF","playbackBarHeadWidth":6,"toolTipPaddingBottom":4,"playbackBarBorderColor":"#FFFFFF","vrPointerSelectionTime":2000,"progressBarBorderRadius":2,"subtitlesFontFamily":"Arial","playbackBarBackgroundColorDirection":"vertical","playbackBarLeft":0,"progressRight":"33%","progressBackgroundColorRatios":[0],"toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBorderSize":0,"progressLeft":"33%","progressBorderColor":"#000000","subtitlesBackgroundColor":"#000000","progressBarBackgroundColor":["#3399FF"],"progressBarBorderColor":"#000000","minHeight":50,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadShadowColor":"#000000","subtitlesGap":0,"playbackBarRight":0},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935","camera":"this.panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935_camera","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"label":trans('panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935.label'),"hfovMax":130,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935_0/{face}/0/{row}_{column}.jpg","rowCount":8,"width":24576,"colCount":48,"tags":"ondemand","height":4096},{"class":"TiledImageResourceLevel","url":"media/panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935_0/{face}/1/{row}_{column}.jpg","rowCount":4,"width":12288,"colCount":24,"tags":"ondemand","height":2048},{"class":"TiledImageResourceLevel","url":"media/panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935_0/{face}/2/{row}_{column}.jpg","rowCount":2,"width":6144,"colCount":12,"tags":"ondemand","height":1024},{"class":"TiledImageResourceLevel","url":"media/panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935_0/{face}/3/{row}_{column}.jpg","rowCount":1,"width":3072,"colCount":6,"tags":["ondemand","preload"],"height":512},{"class":"TiledImageResourceLevel","url":"media/panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935_0/{face}/vr2gen/0.jpg","rowCount":1,"width":12288,"colCount":6,"tags":"mobilevr2gen","height":2048}]}}],"class":"Panorama","overlays":["this.overlay_D2FC67EF_C7B9_3A10_41D4_753B0694FA43"],"id":"panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935","hfov":360,"thumbnailUrl":"media/panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935_t.jpg","vfov":180,"data":{"label":"0001"}},{"mouseControlMode":"drag_rotation","displayPlaybackBar":true,"arrowKeysAction":"translate","class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer","aaEnabled":true,"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation"},{"class":"PanoramaCamera","enterPointingToHorizon":true,"id":"panorama_A9E56F83_B8AA_0D74_41E6_C5127E2C0935_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0}},{"right":"9.52%","backgroundColorRatios":[0,1],"scrollBarMargin":2,"gap":10,"layout":"absolute","backgroundOpacity":0.3,"data":{"name":"Container2234"},"height":"34.724%","overflow":"scroll","width":"31.049%","propagateClick":false,"scrollBarColor":"#000000","backgroundColor":["#FFFFFF","#FFFFFF"],"class":"Container","top":"22.12%","minHeight":20,"minWidth":20,"id":"Container_DE0B190F_C9EF_274F_41E3_CF51CE2FFE12"},{"enabledInCardboard":true,"maps":[],"data":{"label":"Text"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":["this.HotspotPanoramaOverlayTextImage_D35347E6_C7B9_3A10_41E3_DB93512125C6"],"areas":["this.HotspotPanoramaOverlayArea_D209284C_C7B9_3610_41E3_5764936C0BF4"],"id":"overlay_D2FC67EF_C7B9_3A10_41D4_753B0694FA43"},{"vfov":10.5,"distance":50,"data":{"label":"Text"},"image":{"class":"ImageResource","levels":["this.imlevel_DF87CC71_C7B9_EEF0_41E1_2E6F07125F45"]},"yaw":-4.94,"pitch":25.28,"id":"HotspotPanoramaOverlayTextImage_D35347E6_C7B9_3A10_41E3_DB93512125C6","hfov":10.5,"class":"HotspotPanoramaOverlayImage"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_D209284C_C7B9_3610_41E3_5764936C0BF4","displayTooltipInTouchScreens":true},{"class":"ImageResourceLevel","height":700,"id":"imlevel_DF87CC71_C7B9_EEF0_41E1_2E6F07125F45","width":700,"url":trans('imlevel_DF87CC71_C7B9_EEF0_41E1_2E6F07125F45.url')}],"propagateClick":false,"scrollBarColor":"#000000","backgroundColor":["#FFFFFF"],"class":"Player","id":"rootPlayer","minHeight":0,"minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.1.17.js.map
})();
//Generated with v2023.1.17, Mon Nov 13 2023