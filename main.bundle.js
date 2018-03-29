webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 100%;\n  height: 100%;\n  margin: 20px auto 0px;\n}\n\n#side-content {\n  float: left;\n  width: 328px;\n}\n\n#notation-component {\n  float: right;\n  width: 800px;\n  height: 392px;\n  background:#fff;\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  margin: 0 0 20px 0;\n}\n\n#keyboard-component {\n  clear: both;\n  width: 560px;\n  margin: 0 auto;\n}\n\n#appDetails {\n  text-align: left;\n  direction: rtl;\n  color: white;\n  font-size: 12px;\n  padding-top: 30px;\n}\n\n#appDetails .inner {\n  background-color: rgba(0,0,0,0.3);\n  padding: 10px 5px;\n}\n\n#appDetails a {\n  color: white;\n}\n\n#appDetails a:hover {\n  text-decoration: none;\n}\n\n.panel {\n  height: 186px;\n  padding: 0px;\n  margin: 0 20px 20px 0;\n  background:#FFFFF2;\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.bingo {\n  font-size: 10vw;\n  height: 100%;\n  background-color: blue;\n  color: yellow;\n  direction: rtl;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-pack: center!important;\n      -ms-flex-pack: center!important;\n          justify-content: center!important;\n  -webkit-box-align: center!important;\n      -ms-flex-align: center!important;\n          align-items: center!important;\n\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div *ngIf=\"!bingo\" id=\"keyboard-component\">\n    <keyboard (keyPlayed)=\"handleKeyPlayed($event)\"></keyboard>\n  </div>\n  <div *ngIf=\"bingo\" class=\"bingo\">\n    <span>אפיקומן!!!</span>\n  </div>\n  <p id=\"appDetails\">\n    <span class=\"inner\">\n      <span>נבנה בפרך על ידי </span>\n      <a href=\"http://idancohen.com\">עידן כהן</a>\n      <span> בהשראת </span>\n      <a href=\"http://deanmalone.net/\" target=\"_blank\">Dean Malone</a>\n      <span> קוד מקור </span>\n      <a href=\"https://github.com/IdanCo/PianoPlay/\" target=\"_blank\">GitHub</a>\n    </span>\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_piano_service__ = __webpack_require__("./src/app/core/piano.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_sound_service__ = __webpack_require__("./src/app/core/sound.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(pianoService, soundService) {
        var _this = this;
        this.pianoService = pianoService;
        this.soundService = soundService;
        this.song = ['c', 'f', 'f', 'g', 'e', 'f', 'e', 'd', 'c', 'c', 'd', 'd', 'e', 'c', 'f', 'a', 'g'];
        // song = ['c', 'f', 'f'];
        this.tune = [];
        this.bingo = false;
        this.subscription = pianoService.notePlayed$.subscribe(function (note) { return _this.handleNotePlayed(note); });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.soundService.initialize();
    };
    AppComponent.prototype.handleKeyPlayed = function (keyId) {
        this.pianoService.playNoteByKeyId(keyId);
    };
    AppComponent.prototype.handleNotePlayed = function (note) {
        var _this = this;
        this.soundService.playNote(note.keyId);
        console.info('note name', note.name);
        console.info('tune:', this.tune);
        if (this.song[this.tune.length] === note.name) {
            this.tune.push(note.name);
        }
        else {
            this.tune = [];
        }
        if (this.song.length === this.tune.length && this.song.every(function (v, i) { return v === _this.tune[i]; })) {
            console.info('bingo!!!!');
            this.bingo = true;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_piano_service__["a" /* PianoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_piano_service__["a" /* PianoService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_sound_service__["a" /* SoundService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__core_sound_service__["a" /* SoundService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/idancohen/projects/PianoPlay/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__keyboard_keyboard_component__ = __webpack_require__("./src/app/keyboard/keyboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notation_notation_component__ = __webpack_require__("./src/app/notation/notation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__play_control_play_control_component__ = __webpack_require__("./src/app/play-control/play-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__note_info_note_info_component__ = __webpack_require__("./src/app/note-info/note-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__quiz_info_quiz_info_component__ = __webpack_require__("./src/app/quiz-info/quiz-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_piano_service__ = __webpack_require__("./src/app/core/piano.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_quiz_service__ = __webpack_require__("./src/app/core/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_sound_service__ = __webpack_require__("./src/app/core/sound.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__notation_notation_service__ = __webpack_require__("./src/app/notation/notation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_safe_pipe__ = __webpack_require__("./src/app/shared/safe.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__keyboard_keyboard_component__["a" /* KeyboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__notation_notation_component__["a" /* NotationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__play_control_play_control_component__["a" /* PlayControlComponent */],
                __WEBPACK_IMPORTED_MODULE_9__note_info_note_info_component__["a" /* NoteInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__quiz_info_quiz_info_component__["a" /* QuizInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__shared_safe_pipe__["a" /* SafePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* CommonModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__core_piano_service__["a" /* PianoService */],
                __WEBPACK_IMPORTED_MODULE_13__core_sound_service__["a" /* SoundService */],
                __WEBPACK_IMPORTED_MODULE_14__notation_notation_service__["a" /* NotationService */],
                __WEBPACK_IMPORTED_MODULE_12__core_quiz_service__["a" /* QuizService */]
            ],
            exports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/idancohen/projects/PianoPlay/src/app.module.js.map

/***/ }),

/***/ "./src/app/core/piano-mode.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PianoMode; });
var PianoMode;
(function (PianoMode) {
    PianoMode[PianoMode["Play"] = 0] = "Play";
    PianoMode[PianoMode["Quiz"] = 1] = "Quiz";
})(PianoMode || (PianoMode = {}));
//# sourceMappingURL=/Users/idancohen/projects/PianoPlay/src/piano-mode.enum.js.map

/***/ }),

/***/ "./src/app/core/piano-note.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PianoNote; });
var PianoNote = (function () {
    function PianoNote(keyId, noteId) {
        this.keyId = keyId;
        this.noteId = noteId;
        if (keyId < 16 || keyId > 64) {
            throw new RangeError("Invalid keyId. The valid range of keyId is 16 to 64.");
        }
        if (noteId.length < 2 || noteId.length > 3) {
            throw new RangeError("noteId is invalid");
        }
        this.name = noteId[0].toLowerCase();
        this.octave = parseInt(noteId[1]);
        var accidentalSymbol = "";
        if (noteId.length == 3) {
            this.accidental = noteId[2];
            if (this.accidental == "s") {
                accidentalSymbol = '\u266F';
            }
            else if (this.accidental == "f") {
                accidentalSymbol = '\u266D';
            }
        }
        this.fullname = this.name.toUpperCase() + accidentalSymbol;
    }
    return PianoNote;
}());
//# sourceMappingURL=/Users/idancohen/projects/PianoPlay/src/piano-note.js.map

/***/ }),

/***/ "./src/app/core/piano.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PianoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__piano_note__ = __webpack_require__("./src/app/core/piano-note.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PianoService = (function () {
    function PianoService() {
        var _this = this;
        this.pianoKeyMap = {};
        this.pianoNoteMap = {};
        // Observable sources
        this.pianoNotePlayedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        // Observable streams
        this.notePlayed$ = this.pianoNotePlayedSource.asObservable();
        this.pianoKeyMap = {
            16: ["c2"],
            17: ["c2s", "d2f"],
            18: ["d2"],
            19: ["d2s", "e2f"],
            20: ["e2"],
            21: ["f2"],
            22: ["f2s", "g2f"],
            23: ["g2"],
            24: ["g2s", "a2f"],
            25: ["a2"],
            26: ["a2s", "b2f"],
            27: ["b2"],
            28: ["c3"],
            29: ["c3s", "d3f"],
            30: ["d3"],
            31: ["d3s", "e3f"],
            32: ["e3"],
            33: ["f3"],
            34: ["f3s", "g3f"],
            35: ["g3"],
            36: ["g3s", "a3f"],
            37: ["a3"],
            38: ["a3s", "b3f"],
            39: ["b3"],
            40: ["c4"],
            41: ["c4s", "d4f"],
            42: ["d4"],
            43: ["d4s", "e4f"],
            44: ["e4"],
            45: ["f4"],
            46: ["f4s", "g4f"],
            47: ["g4"],
            48: ["g4s", "a4f"],
            49: ["a4"],
            50: ["a4s", "b4f"],
            51: ["b4"],
            52: ["c5"],
            53: ["c5s", "d5f"],
            54: ["d5"],
            55: ["d5s", "e5f"],
            56: ["e5"],
            57: ["f5"],
            58: ["f5s", "g5f"],
            59: ["g5"],
            60: ["g5s", "a5f"],
            61: ["a5"],
            62: ["a5s", "b5f"],
            63: ["b5"],
            64: ["c6"]
        };
        // create pianoNoteMap, mapping noteIds to keyIds.
        Object.keys(this.pianoKeyMap).forEach(function (keyId) { return _this.pianoKeyMap[keyId].forEach(function (note) { return _this.pianoNoteMap[note] = keyId; }); });
    }
    PianoService.prototype.getNote = function (noteId) {
        if (this.pianoNoteMap.hasOwnProperty(noteId)) {
            var keyId = parseInt(this.pianoNoteMap[noteId]);
            return new __WEBPACK_IMPORTED_MODULE_2__piano_note__["a" /* PianoNote */](keyId, noteId);
        }
        else {
            throw new Error("Invalid noteId.");
        }
    };
    PianoService.prototype.getNoteByKeyId = function (keyId) {
        if (this.pianoKeyMap.hasOwnProperty(keyId)) {
            var noteId = this.pianoKeyMap[keyId][0]; // default to first note for keyId
            return new __WEBPACK_IMPORTED_MODULE_2__piano_note__["a" /* PianoNote */](keyId, noteId);
        }
        else {
            throw new Error("Invalid keyId. The valid range of keyId is 16 to 64.");
        }
    };
    PianoService.prototype.playNote = function (noteId) {
        var note = this.getNote(noteId);
        this.pianoNotePlayedSource.next(note);
    };
    PianoService.prototype.playNoteByKeyId = function (keyId) {
        var note = this.getNoteByKeyId(keyId);
        this.pianoNotePlayedSource.next(note);
    };
    PianoService.prototype.getAlternateNote = function (noteId) {
        if (!this.pianoNoteMap.hasOwnProperty(noteId)) {
            throw new Error("Invalid noteId");
        }
        var alternateNote;
        var keyId = parseInt(this.pianoNoteMap[noteId]);
        var notes = this.pianoKeyMap[keyId];
        if (notes.length > 1) {
            if (notes[0] == noteId) {
                alternateNote = new __WEBPACK_IMPORTED_MODULE_2__piano_note__["a" /* PianoNote */](keyId, notes[1]);
            }
            else {
                alternateNote = new __WEBPACK_IMPORTED_MODULE_2__piano_note__["a" /* PianoNote */](keyId, notes[0]);
                ;
            }
        }
        return alternateNote;
    };
    PianoService.prototype.getAllNoteIds = function () {
        return Object.keys(this.pianoNoteMap);
    };
    PianoService.prototype.getAllNaturalNoteIds = function (lowerOctave, upperOctave) {
        if (lowerOctave === void 0) { lowerOctave = 2; }
        if (upperOctave === void 0) { upperOctave = 6; }
        var naturalNotes = [];
        Object.keys(this.pianoNoteMap).forEach(function (note) {
            if (note.length == 2) {
                var n = parseInt(note[1]);
                if (n >= lowerOctave && n <= upperOctave) {
                    naturalNotes.push(note);
                }
            }
        });
        return naturalNotes;
    };
    PianoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], PianoService);
    return PianoService;
}());
//# sourceMappingURL=/Users/idancohen/projects/PianoPlay/src/piano.service.js.map

/***/ }),

/***/ "./src/app/core/quiz-result.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizResult; });
var QuizResult = (function () {
    function QuizResult() {
    }
    return QuizResult;
}());
//# sourceMappingURL=/Users/idancohen/projects/PianoPlay/src/quiz-result.js.map

/***/ }),

/***/ "./src/app/core/quiz-status.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizStatus; });
var QuizStatus;
(function (QuizStatus) {
    QuizStatus[QuizStatus["Starting"] = 0] = "Starting";
    QuizStatus[QuizStatus["InProgress"] = 1] = "InProgress";
    QuizStatus[QuizStatus["Finished"] = 2] = "Finished";
    QuizStatus[QuizStatus["None"] = 3] = "None";
})(QuizStatus || (QuizStatus = {}));
//# sourceMappingURL=/Users/idancohen/projects/PianoPlay/src/quiz-status.enum.js.map

/***/ }),

/***/ "./src/app/core/quiz.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz_result__ = __webpack_require__("./src/app/core/quiz-result.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_status_enum__ = __webpack_require__("./src/app/core/quiz-status.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizService = (function () {
    function QuizService() {
        this.quizLength = 16;
        this.quizNotes = [];
        this.quizResults = [];
        this.quizIndex = 0;
        this.inProgress = false;
        this.correct = 0;
        this.incorrect = 0;
        this.status = __WEBPACK_IMPORTED_MODULE_3__quiz_status_enum__["a" /* QuizStatus */].None;
        // Observable sources
        this.quizResultSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        // Observable streams
        this.quizResult$ = this.quizResultSource.asObservable();
    }
    QuizService.prototype.startQuiz = function (quizLength, availableNotes) {
        this.quizLength = quizLength;
        // clear quiz data
        this.quizNotes.length = 0;
        this.quizResults.length = 0;
        this.inProgress = true;
        this.quizIndex = 0;
        this.correct = 0;
        this.incorrect = 0;
        // generate random notes from the availableNotes array
        for (var i = 0; i < this.quizLength; i++) {
            this.quizNotes.push(availableNotes[Math.floor(Math.random() * availableNotes.length)]);
        }
    };
    QuizService.prototype.getCurrentNoteId = function () {
        return this.quizNotes[this.quizIndex];
    };
    QuizService.prototype.next = function () {
        // check if quiz has finished
        if (this.quizIndex == (this.quizLength - 1)) {
            this.inProgress = false;
            return false;
        }
        // otherwise move on to next quiz note.
        this.quizIndex++;
        return true;
    };
    QuizService.prototype.recordResult = function (selectedKeyId, actualNote) {
        // update score
        if (selectedKeyId == actualNote.keyId) {
            this.correct++;
        }
        else {
            this.incorrect++;
        }
        var result = new __WEBPACK_IMPORTED_MODULE_2__quiz_result__["a" /* QuizResult */]();
        result.selectedKeyId = selectedKeyId;
        result.actualNote = actualNote;
        result.quizNumber = this.quizIndex + 1;
        this.quizResults.push(result);
        this.quizResultSource.next(result);
    };
    QuizService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], QuizService);
    return QuizService;
}());
//# sourceMappingURL=/Users/idancohen/projects/PianoPlay/src/quiz.service.js.map

/***/ }),

/***/ "./src/app/core/sound.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SoundService = (function () {
    function SoundService() {
        this.buffers = {};
    }
    SoundService.prototype.initialize = function () {
        // load wav files for each piano key.
        console.log("initializing audio and loading sounds");
        try {
            // Hack to support AudioContext on iOS
            if (typeof AudioContext !== 'undefined') {
                this.context = new AudioContext();
            }
            else if (typeof window.webkitAudioContext !== 'undefined') {
                this.context = new window.webkitAudioContext();
            }
            this.loadSounds();
        }
        catch (e) {
            alert("Web Audio API is not supported in this browser");
        }
    };
    SoundService.prototype.playNote = function (keyId) {
        if (keyId < 16 || keyId > 64) {
            new RangeError("Invalid keyId. The valid range of keyId is 16 to 64.");
        }
        if (this.buffers.hasOwnProperty(keyId)) {
            console.log("SoundService: playing key=" + keyId);
            var source = this.context.createBufferSource();
            source.buffer = this.buffers[keyId];
            source.connect(this.context.destination);
            source.start(0);
        }
        else {
            console.log("Audio not loaded for key=" + keyId);
        }
    };
    SoundService.prototype.loadSounds = function () {
        // load the wav files for each piano key.
        for (var i = 16; i < 65; i++) {
            var soundPath = "./assets/sounds/" + i + ".wav";
            this.loadBuffer(i.toString(), soundPath);
        }
    };
    SoundService.prototype.loadBuffer = function (name, path) {
        var request = new XMLHttpRequest();
        request.open("GET", path, true);
        request.responseType = "arraybuffer";
        var context = this.context;
        var buffers = this.buffers;
        request.onload = function () {
            context.decodeAudioData(request.response, function (buffer) {
                if (!buffer) {
                    alert('error decoding file data: ' + path);
                    return;
                }
                buffers[name] = buffer;
            }, function (error) {
                console.error('decodeAudioData error', error);
            });
        };
        request.onerror = function () {
            alert('BufferLoader: XHR error');
        };
        request.send();
    };
    SoundService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], SoundService);
    return SoundService;
}());
//# sourceMappingURL=/Users/idancohen/projects/PianoPlay/src/sound.service.js.map

/***/ }),

/***/ "./src/app/keyboard/keyboard.component.css":
/***/ (function(module, exports) {

module.exports = "/**\n * Pure CSS3 Piano by Taufik Nurrohman\n * On: 1 December 2011\n * URL: http://hompimpaalaihumgambreng.blogspot.com/\n * Note: This experiment is under the God Almighty License.\n * Please do not replace or remove the attribution above if you want to save/modify this project legally.\n * Good luck!\n */\n\n#p-wrapper > * {\n    margin:0px;\n    padding:0px;\n    list-style:none;\n}\n\n#p-wrapper {\n    margin-top: 20px;\n    background:#000;\n    background:linear-gradient(-60deg,#000,#333,#000,#666,#333 70%);\n    width: 544px;\n    position:relative;\n    left: 0;\n    padding-left: 10px;\n    padding-top: 5px;\n    -webkit-box-shadow:0 2px 0px #666,0 3px 0px #555,0 4px 0px #444,0 6px 6px #000,inset 0 -1px 1px rgba(255,255,255,0.5),inset 0 -4px 5px #000;\n    box-shadow:0 2px 0px #666,0 3px 0px #555,0 4px 0px #444,0 6px 6px #000,inset 0 -1px 1px rgba(255,255,255,0.5),inset 0 -4px 5px #000;\n    border:2px solid #333;\n    border-radius:0 0 5px 5px;\n    -webkit-animation:taufik 2s;\n    animation:taufik 2s;\n}\n\n/* Tuts */\n\nul#piano {\n  display:block;\n  width:100%;\n  height:380px;\n  border-top:2px solid #222;\n}\n\nul#piano li {\n  list-style:none;\n  float:left;\n  display:inline;\n  background:#aaa;\n  width:76px;\n  position:relative;\n  cursor: pointer;\n}\n\nul#piano li a,ul#piano li div.anchor {\n  display:block;\n  height:340px;\n  background:#fff;\n  background:linear-gradient(-30deg,#f5f5f5,#fff);\n  border:1px solid #ccc;\n  -webkit-box-shadow:inset 0 1px 0px #fff,inset 0 -1px 0px #fff,inset 1px 0px 0px #fff,inset -1px 0px 0px #fff,0 4px 3px rgba(0,0,0,0.7);\n  box-shadow:inset 0 1px 0px #fff,inset 0 -1px 0px #fff,inset 1px 0px 0px #fff,inset -1px 0px 0px #fff,0 4px 3px rgba(0,0,0,0.7);\n  border-radius:0 0 3px 3px;\n}\n\nul#piano li.middlec a,ul#piano li.middlec div.anchor {\n    background: #dddddd;\n}\n\nul#piano li a:active,ul#piano li div.anchor:active {\n  -webkit-box-shadow:0 2px 2px rgba(0,0,0,0.4);\n  box-shadow:0 2px 2px rgba(0,0,0,0.4);\n  position:relative;\n  top:2px;\n  height:332px;\n}\n\nul#piano li a:active:before,ul#piano li div.anchor:active:before {\n  content:\"\";\n  width:0px;\n  height:0px;\n  border-width:216px 5px 0px;\n  border-style:solid;\n  border-color:transparent transparent transparent rgba(0,0,0,0.1);\n  position:absolute;\n  left:0px;\n  top:0px;\n}\n\nul#piano li a:active:after,ul#piano li div.anchor:active:after {\n  content:\"\";\n  width:0px;\n  height:0px;\n  border-width:332px 5px 0px;\n  border-style:solid;\n  border-color:transparent rgba(0,0,0,0.1) transparent transparent;\n  position:absolute;\n  right:0px;\n  top:0px;\n}\n\n/* Black Tuts */\n\nul#piano li span {\n  position:absolute;\n  top:0px;\n  left:-24px;\n  width:40px;\n  height:140px;\n  background:#333;\n  background:linear-gradient(-20deg,#333,#000,#333);\n  z-index:10;\n  border-width:1px 2px 7px;\n  border-style:solid;\n  border-color:#666 #222 #111 #555;\n  -webkit-box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4);\n  box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4);\n  border-radius:0 0 2px 2px;\n}\n\nul#piano li span:active {\n  border-bottom-width:2px;\n  height:146px;\n  -webkit-box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000;\n  box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000;\n}\n\n.white-key {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n\n.white-key .key-name {\n  width: 100%;\n  text-align: center;\n  font-size: 32px;\n}\n\n/* Animation */\n\n@-webkit-keyframes taufik {\n  from {opacity:0;}\n  to {opacity:1;}\n}\n\n@keyframes taufik {\n  from {opacity:0;}\n  to {opacity:1;}\n}\n"

/***/ }),

/***/ "./src/app/keyboard/keyboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"p-wrapper\">\n    <ul id=\"piano\">\n        <li *ngFor=\"let pianoKey of pianoKeys\">\n            <div class=\"anchor white-key\" [style.background]=\"getColor(pianoKey.whiteKeyId)\" (click)=\"keyPress(pianoKey.whiteKeyId)\">\n              <div class=\"key-name\">{{ pianoKey.name }}</div>\n            </div>\n            <span *ngIf=\"pianoKey.blackKeyId\" [style.background]=\"getColor(pianoKey.blackKeyId)\" (click)=\"keyPress(pianoKey.blackKeyId)\"></span>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/keyboard/keyboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_quiz_service__ = __webpack_require__("./src/app/core/quiz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeyboardComponent = (function () {
    function KeyboardComponent(quizService) {
        var _this = this;
        this.quizService = quizService;
        this.keyPlayed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* EventEmitter */]();
        this.highlightedKeyId = 0;
        quizService.quizResult$.subscribe(function (result) { return _this.handleQuizResult(result); });
        this.pianoKeys = [
            { whiteKeyId: 40, name: 1 },
            { whiteKeyId: 42, name: 2, blackKeyId: 41 },
            { whiteKeyId: 44, name: 3, blackKeyId: 43 },
            { whiteKeyId: 45, name: 4 },
            { whiteKeyId: 47, name: 5, blackKeyId: 46 },
            { whiteKeyId: 49, name: 6, blackKeyId: 48 },
            { whiteKeyId: 51, name: 7, blackKeyId: 50 },
        ];
    }
    KeyboardComponent.prototype.ngOnInit = function () {
    };
    KeyboardComponent.prototype.keyPress = function (keyNumber) {
        this.keyPlayed.emit(keyNumber);
    };
    KeyboardComponent.prototype.handleQuizResult = function (result) {
        var _this = this;
        console.log("handleQuizResult: " + result);
        if (result.selectedKeyId != result.actualNote.keyId) {
            this.highlightedKeyId = result.actualNote.keyId;
            setTimeout(function () { return _this.highlightedKeyId = 0; }, 1000);
        }
    };
    KeyboardComponent.prototype.getColor = function (keyId) {
        if (keyId == this.highlightedKeyId) {
            return "#f0e68c";
        }
        else {
            return "";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Output */])(), 
        __metadata('design:type', Object)
    ], KeyboardComponent.prototype, "keyPlayed", void 0);
    KeyboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'keyboard',
            template: __webpack_require__("./src/app/keyboard/keyboard.component.html"),
            styles: [__webpack_require__("./src/app/keyboard/keyboard.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_quiz_service__["a" /* QuizService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_quiz_service__["a" /* QuizService */]) === 'function' && _a) || Object])
    ], KeyboardComponent);
    return KeyboardComponent;
    var _a;
}());
//# sourceMappingURL=/Users/idancohen/projects/PianoPlay/src/keyboard.component.js.map

/***/ }),

/***/ "./src/app/notation/notation.component.css":
/***/ (function(module, exports) {

module.exports = "div {\n   background-color:#ffffff;\n}\n\n/* >>> is alias for /deep/ which will force style down through the child component tree. */\n\n/* match all ids that start with rest and hide them*/\n\n>>> [id^=\"rest\"] {\n   display: none;\n}\n\n>>> g.note {\n  /*fill: #000;*/\n  -webkit-transition: fill 0.3s; /* Safari */\n  transition: fill 0.3s;\n}\n\n>>> g.note:hover {\n  fill: #ff9800;\n  cursor: pointer;\n}\n\n\n"

/***/ }),

/***/ "./src/app/notation/notation.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 0 auto; width:800px;\" [innerHTML]=\"notationAsSVG | safe: 'html'\"></div>\n"

/***/ }),

/***/ "./src/app/notation/notation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notation_service__ = __webpack_require__("./src/app/notation/notation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_piano_service__ = __webpack_require__("./src/app/core/piano.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_quiz_service__ = __webpack_require__("./src/app/core/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_piano_mode_enum__ = __webpack_require__("./src/app/core/piano-mode.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotationComponent = (function () {
    function NotationComponent(pianoService, notationService, quizService) {
        var _this = this;
        this.pianoService = pianoService;
        this.notationService = notationService;
        this.quizService = quizService;
        this.subscription = pianoService.notePlayed$.subscribe(function (note) { return _this.handleNotePlayed(note); });
        quizService.quizResult$.subscribe(function (result) { return _this.handleQuizResult(result); });
    }
    NotationComponent.prototype.ngOnInit = function () {
        // Render the (empty) piano score (will contain hidden notes to ensure staff spans full width)
        this.notationAsSVG = this.notationService.renderNotation();
        this.noteColor = [];
    };
    NotationComponent.prototype.ngAfterViewChecked = function () {
        var self = this;
        $("g.note").off().on('click', function () { self.noteClicked(this.id); });
        for (var i = 0; i < this.noteColor.length; i++) {
            if (this.noteColor[i]) {
                $("#" + i).attr("fill", this.noteColor[i]);
            }
        }
    };
    NotationComponent.prototype.handleNotePlayed = function (note) {
        if (this.mode == __WEBPACK_IMPORTED_MODULE_4__core_piano_mode_enum__["a" /* PianoMode */].Play) {
            this.notationService.addNote(note);
            this.notationAsSVG = this.notationService.renderNotation();
        }
    };
    NotationComponent.prototype.handleQuizResult = function (result) {
        var color = "";
        if (result.selectedKeyId == result.actualNote.keyId) {
            // Correct
            color = "#4CAF50"; // Green
        }
        else {
            // Incorrect
            color = "#f44336"; // Ref
        }
        this.noteColor.push(color);
    };
    NotationComponent.prototype.noteClicked = function (id) {
        //console.log('noteClicked: ' + id);
        this.pianoService.playNote(this.notationService.notes[id].noteId);
    };
    NotationComponent.prototype.clear = function () {
        this.noteColor.length = 0;
        this.notationService.clear();
        this.notationAsSVG = this.notationService.renderNotation();
    };
    NotationComponent.prototype.addNote = function (note) {
        this.notationService.addNote(note);
        this.notationAsSVG = this.notationService.renderNotation();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__core_piano_mode_enum__["a" /* PianoMode */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__core_piano_mode_enum__["a" /* PianoMode */]) === 'function' && _a) || Object)
    ], NotationComponent.prototype, "mode", void 0);
    NotationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'notation',
            template: __webpack_require__("./src/app/notation/notation.component.html"),
            styles: [__webpack_require__("./src/app/notation/notation.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_piano_service__["a" /* PianoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__core_piano_service__["a" /* PianoService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__notation_service__["a" /* NotationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__notation_service__["a" /* NotationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__core_quiz_service__["a" /* QuizService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__core_quiz_service__["a" /* QuizService */]) === 'function' && _d) || Object])
    ], NotationComponent);
    return NotationComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/idancohen/projects/PianoPlay/src/notation.component.js.map

/***/ }),

/***/ "./src/app/notation/notation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotationService = (function () {
    function NotationService() {
        this.maxNotes = 16;
        this.spacingNotesXml = [];
        this.notes = [];
        this.vrvToolkit = new verovio.toolkit();
        // create hidden notes to ensure the staff is drawn full width. Notes are hidden via css.
        for (var i = 0; i < this.maxNotes; i++) {
            this.spacingNotesXml.push("<note xml:id=\"rest-hidden-" + i.toString() + "\" dur=\"4\" oct=\"6\" pname=\"c\" stem.dir=\"up\" />");
        }
    }
    NotationService.prototype.clear = function () {
        this.notes.length = 0;
    };
    NotationService.prototype.addNote = function (note) {
        if (this.notes.length == this.maxNotes) {
            this.notes.length = 0;
        }
        this.notes.push(note);
    };
    NotationService.prototype.renderNotation = function () {
        var trepleNotesXml = [];
        var bassNotesXml = [];
        for (var i = 0; i < this.notes.length; i++) {
            var noteXml = "<note xml:id=\"" + i + "\" dur=\"4\" oct=\"" + this.notes[i].octave + "\" pname=\"" + this.notes[i].name + "\" " + (this.notes[i].accidental ? 'accid="' + this.notes[i].accidental + '"' : '') + " />";
            var restXml = "<rest xml:id=\"rest-" + i + "\" dur=\"4\" oct=\"" + this.notes[i].octave + "\" pname=\"" + this.notes[i].name + "\" " + (this.notes[i].accidental ? 'accid="' + this.notes[i].accidental + '"' : '') + "/>";
            if (this.notes[i].octave > 3) {
                trepleNotesXml.push(noteXml);
                bassNotesXml.push(restXml);
            }
            else {
                trepleNotesXml.push(restXml);
                bassNotesXml.push(noteXml);
            }
        }
        var notationXML = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n    <?xml-model href=\"http://music-encoding.org/schema/3.0.0/mei-all.rng\" type=\"application/xml\" schematypens=\"http://relaxng.org/ns/structure/1.0\"?>\n    <?xml-model href=\"http://music-encoding.org/schema/3.0.0/mei-all.rng\" type=\"application/xml\" schematypens=\"http://purl.oclc.org/dsdl/schematron\"?>\n    <mei xmlns=\"http://www.music-encoding.org/ns/mei\" meiversion=\"3.0.0\">\n      <music>\n          <body>\n                <mdiv>\n                  <score>\n                      <scoreDef>\n                            <staffGrp symbol=\"brace\" label=\"\">\n                              <staffDef clef.shape=\"G\" clef.line=\"2\" n=\"1\" lines=\"5\" />\n                              <staffDef clef.shape=\"F\" clef.line=\"4\" n=\"2\" lines=\"5\" />\n                            </staffGrp>\n                      </scoreDef>\n                      <section>\n                            <measure>\n                              <staff n=\"1\">\n                                  <layer n=\"1\" xml:id=\"layer-treple\">\n                                        " + trepleNotesXml.join("") + "\n                                  </layer>\n                                  <layer xml:id=\"layer-spacing\" n=\"2\">\n                                        " + this.spacingNotesXml.join("") + "\n                                  </layer>\n                              </staff>\n                              <staff n=\"2\">\n                                  <layer xml:id=\"layer-bass\" n=\"1\">\n                                        " + bassNotesXml.join("") + "\n                                  </layer>\n                              </staff>\n                            </measure>\n                      </section>\n                  </score>\n                </mdiv>\n          </body>\n      </music>\n    </mei>";
        var options = {
            // make these options in the notationservice
            pageWidth: 1000,
            border: 25,
            scale: 80,
            adjustPageHeight: 1
        };
        var renderedNotation = this.vrvToolkit.renderData(notationXML, options);
        return renderedNotation;
    };
    NotationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], NotationService);
    return NotationService;
}());
//# sourceMappingURL=/Users/idancohen/projects/PianoPlay/src/notation.service.js.map

/***/ }),

/***/ "./src/app/note-info/note-info.component.css":
/***/ (function(module, exports) {

module.exports = ".content {\n   text-align: center;\n   padding: 10px;\n}\n\n.note-card {\n  display: inline-block;\n  text-align: center;\n  margin: 20px 10px;\n  padding: 0px;\n  width: 90px;\n   background-color: #FFFFF2;\n  color: #0D2534 ;\n  border: 2px solid #435D6D ;\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.note-card:hover {\n   color: #FFFFF2;\n  background-color: #617986;\n  -webkit-box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\n.note-card-or {\n  display: inline-block;\n  text-align: center;\n  font-size: 22px;\n  color: #435D6D;\n  width: 30px;\n  padding-top: 50px;\n  vertical-align: top;\n}\n\n.name {\n  display: block;\n  height: 60px;\n  font-size: 40px;\n  font-weight: bold;\n  padding-top: 8px;\n}\n\n.octave {\n  display: block;\n  font-size: 14px;\n  padding: 4px;\n}\n"

/***/ }),

/***/ "./src/app/note-info/note-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-secondary\">{{title}}</div>\n<div class=\"content\">\n  <div class=\"note-card\" *ngIf=\"currentNote\" (click)=\"playNote(currentNote)\">\n      <span class=\"name\">{{currentNote.fullname}}</span>\n      <span class=\"octave\">OCTAVE {{currentNote.octave}}</span>\n  </div>\n  <div class=\"note-card-or\" *ngIf=\"alternateNote\">\n    <span> OR </span>\n  </div>\n  <div class=\"note-card\" *ngIf=\"alternateNote\" (click)=\"playNote(alternateNote)\">\n    <span class=\"name\">{{alternateNote.fullname}}</span>\n    <span class=\"octave\">OCTAVE {{alternateNote.octave}}</span>\n  </div>\n  <div *ngIf=\"!currentNote\">\n    <div class=\"row\">\n      <span>Press a key on the <b>piano</b> <i>below</i>, </span>\n      <span style=\" white-space: nowrap;\">and see the note appear on the </span>\n      <span><b>piano score</b> to the <i>right.</i></span>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/note-info/note-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_piano_service__ = __webpack_require__("./src/app/core/piano.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteInfoComponent = (function () {
    function NoteInfoComponent(pianoService) {
        var _this = this;
        this.pianoService = pianoService;
        this.title = "Play";
        this.subscription = pianoService.notePlayed$.subscribe(function (pianoNote) {
            _this.title = "Now playing";
            _this.currentNote = pianoNote;
            _this.alternateNote = _this.pianoService.getAlternateNote(pianoNote.noteId);
        });
    }
    NoteInfoComponent.prototype.ngOnInit = function () {
        //console.log("ngOnInit");
    };
    NoteInfoComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    NoteInfoComponent.prototype.playNote = function (note) {
        //console.log(note);
        this.pianoService.playNote(note.noteId);
    };
    NoteInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'note-info',
            template: __webpack_require__("./src/app/note-info/note-info.component.html"),
            styles: [__webpack_require__("./src/app/note-info/note-info.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_piano_service__["a" /* PianoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_piano_service__["a" /* PianoService */]) === 'function' && _a) || Object])
    ], NoteInfoComponent);
    return NoteInfoComponent;
    var _a;
}());
//# sourceMappingURL=/Users/idancohen/projects/PianoPlay/src/note-info.component.js.map

/***/ }),

/***/ "./src/app/play-control/play-control.component.css":
/***/ (function(module, exports) {

module.exports = ".content {\n  padding: 10px;\n  text-align: center;\n}\n\n.selected {\n   background-color: #513410;\n   font-weight: bold;\n}\n\n#play-btn {\n   margin-right: 10px;\n}\n\n\n"

/***/ }),

/***/ "./src/app/play-control/play-control.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\">\n   <div class=\"header\">{{ title }}</div>\n   <div class=\"content\">\n      <div class=\"row\">\n         <span>A simple and fun way for beginners to learn music notation.</span>\n      </div>\n         <div class=\"row\">\n            <button id=\"play-btn\" class=\"btn btn-primary\" [class.selected]=\"mode==PianoMode.Play\" (click)=\"handlePlayBtnClick()\">Play</button>\n            <button id=\"quiz-btn\" class=\"btn btn-primary\" [class.selected]=\"mode==PianoMode.Quiz\" (click)=\"handleQuizBtnClick()\">Quiz</button>\n         </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/play-control/play-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_piano_mode_enum__ = __webpack_require__("./src/app/core/piano-mode.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayControlComponent = (function () {
    function PlayControlComponent() {
        this.PianoMode = __WEBPACK_IMPORTED_MODULE_1__core_piano_mode_enum__["a" /* PianoMode */]; // allows template access to PianoMode enum
        this.modeSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* EventEmitter */]();
    }
    PlayControlComponent.prototype.ngOnInit = function () {
    };
    PlayControlComponent.prototype.handlePlayBtnClick = function () {
        this.modeSelected.emit(__WEBPACK_IMPORTED_MODULE_1__core_piano_mode_enum__["a" /* PianoMode */].Play);
    };
    PlayControlComponent.prototype.handleQuizBtnClick = function () {
        this.modeSelected.emit(__WEBPACK_IMPORTED_MODULE_1__core_piano_mode_enum__["a" /* PianoMode */].Quiz);
    };
    __decorate([
        // allows template access to PianoMode enum
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Input */])(), 
        __metadata('design:type', String)
    ], PlayControlComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_piano_mode_enum__["a" /* PianoMode */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_piano_mode_enum__["a" /* PianoMode */]) === 'function' && _a) || Object)
    ], PlayControlComponent.prototype, "mode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Output */])(), 
        __metadata('design:type', Object)
    ], PlayControlComponent.prototype, "modeSelected", void 0);
    PlayControlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'play-control',
            template: __webpack_require__("./src/app/play-control/play-control.component.html"),
            styles: [__webpack_require__("./src/app/play-control/play-control.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], PlayControlComponent);
    return PlayControlComponent;
    var _a;
}());
//# sourceMappingURL=/Users/idancohen/projects/PianoPlay/src/play-control.component.js.map

/***/ }),

/***/ "./src/app/quiz-info/quiz-info.component.css":
/***/ (function(module, exports) {

module.exports = ".content {\n   text-align: center;\n   padding: 10px;\n}\n\n.dropdown {\n   padding: 5px;\n   margin: 0 0 0 10px;\n   width: 100px;\n   font-size: 16px;\n}\n\n.score-label {\n  display: inline-block;\n  width: 100px;\n  font-size: 18px;\n  padding: 4px;\n  margin: 0;\n  color: #FFFFF2;\n  background-color: #617986;\n  border: 2px solid #617986;\n}\n\n.score {\n  display: inline-block;\n  width: 35px;\n  font-size: 18px;\n  padding: 4px;\n  margin: 0;\n  color: #1C3747;\n  background-color: #FFFFFF;\n  border: 2px solid #617986 ;\n}\n\n.correct {\n  color: #FFFFFF;\n  background-color: #4CAF50;\n  border: 2px solid #4CAF50 ;\n}\n\n.incorrect {\n  color: #FFFFFF;\n  background-color: #f44336;\n  border: 2px solid #f44336 ;\n}\n\n.red { background-color: #f44336; }\n\n.green { background-color: #4CAF50; }\n"

/***/ }),

/***/ "./src/app/quiz-info/quiz-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-secondary\">Quiz</div>\n<div class=\"content\">\n   <div *ngIf=\"status == QuizStatus.Starting\">\n      <div class=\"row\">\n         <span>Select level:</span>\n         <select #level class=\"dropdown\">\n            <option value=\"easy\">Easy</option>\n            <option value=\"medium\">Medium</option>\n            <option value=\"hard\">Hard</option>\n         </select>\n      </div>\n      <div class=\"row\">\n         <button id=\"start-btn\" class=\"btn btn-secondary\"(click)=\"handleStartBtnClick(level.value)\">Start</button>\n      </div>\n   </div>\n   <div *ngIf=\"status == QuizStatus.InProgress\">\n      <div class=\"row\">\n         <span>Press the correct key on the piano.</span>\n      </div>\n      <div class=\"row\">\n         <span class=\"score-label\">Score</span><span class=\"score correct\">{{ correct }}</span><span class=\"score incorrect\">{{ incorrect }}</span>\n      </div>\n      <div class=\"row\">\n         <span>{{ message }}</span>\n      </div>\n   </div>\n   <div *ngIf=\"status == QuizStatus.Finished\">\n      <div class=\"row\">\n         <span>Your score: </span><span><b>{{ correct }}</b> out of {{ total }}</span>\n      </div>\n      <div class=\"row\">\n         <span>{{ description }}</span>\n      </div>\n      <div class=\"row\">\n         <button id=\"tryagain-btn\" class=\"btn btn-secondary\"(click)=\"handleTryAgainBtnClick()\">Try Again?</button>\n      </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/quiz-info/quiz-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_quiz_service__ = __webpack_require__("./src/app/core/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_quiz_status_enum__ = __webpack_require__("./src/app/core/quiz-status.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizInfoComponent = (function () {
    function QuizInfoComponent(quizService) {
        var _this = this;
        this.quizService = quizService;
        this.QuizStatus = __WEBPACK_IMPORTED_MODULE_2__core_quiz_status_enum__["a" /* QuizStatus */]; // allows template access to QuizStatus enum
        this.buttonClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* EventEmitter */]();
        this.subscription = quizService.quizResult$.subscribe(function (result) {
            if (result.selectedKeyId == result.actualNote.keyId) {
                _this.message = "\u2714 Correct, well done!";
            }
            else {
                _this.message = "\u2718 Incorrect";
            }
        });
    }
    QuizInfoComponent.prototype.ngOnInit = function () {
    };
    QuizInfoComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    QuizInfoComponent.prototype.handleStartBtnClick = function (value) {
        this.buttonClicked.emit({ button: 'start', level: value });
    };
    QuizInfoComponent.prototype.handleTryAgainBtnClick = function () {
        this.buttonClicked.emit({ button: 'try-again' });
        this.message = "";
    };
    __decorate([
        // allows template access to QuizStatus enum
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Input */])(), 
        __metadata('design:type', Number)
    ], QuizInfoComponent.prototype, "correct", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Input */])(), 
        __metadata('design:type', Number)
    ], QuizInfoComponent.prototype, "incorrect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Input */])(), 
        __metadata('design:type', Number)
    ], QuizInfoComponent.prototype, "total", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_quiz_status_enum__["a" /* QuizStatus */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__core_quiz_status_enum__["a" /* QuizStatus */]) === 'function' && _a) || Object)
    ], QuizInfoComponent.prototype, "status", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Input */])(), 
        __metadata('design:type', String)
    ], QuizInfoComponent.prototype, "description", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Output */])(), 
        __metadata('design:type', Object)
    ], QuizInfoComponent.prototype, "buttonClicked", void 0);
    QuizInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'quiz-info',
            template: __webpack_require__("./src/app/quiz-info/quiz-info.component.html"),
            styles: [__webpack_require__("./src/app/quiz-info/quiz-info.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core_quiz_service__["a" /* QuizService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_quiz_service__["a" /* QuizService */]) === 'function' && _b) || Object])
    ], QuizInfoComponent);
    return QuizInfoComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/idancohen/projects/PianoPlay/src/quiz-info.component.js.map

/***/ }),

/***/ "./src/app/shared/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
// SafePipe code provided by Kim Biesbjerg
// https://forum.ionicframework.com/t/inserting-html-via-angular-2-use-of-domsanitizationservice-bypasssecuritytrusthtml/62562/5
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        if (type === void 0) { type = 'html'; }
        switch (type) {
            case 'html': return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
            name: 'safe'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === 'function' && _a) || Object])
    ], SafePipe);
    return SafePipe;
    var _a;
}());
//# sourceMappingURL=/Users/idancohen/projects/PianoPlay/src/safe.pipe.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/idancohen/projects/PianoPlay/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("./src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/idancohen/projects/PianoPlay/src/main.js.map

/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("./node_modules/core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("./node_modules/core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("./node_modules/core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("./node_modules/core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("./node_modules/core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("./node_modules/core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("./node_modules/core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("./node_modules/core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("./node_modules/core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("./node_modules/core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("./node_modules/core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("./node_modules/core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("./node_modules/core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("./node_modules/core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/idancohen/projects/PianoPlay/src/polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map