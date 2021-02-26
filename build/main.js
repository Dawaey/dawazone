webpackJsonp([0],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interactions_interactions__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drugs_drugs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(navParams, plt, translate, ts) {
        this.plt = plt;
        this.translate = translate;
        this.ts = ts;
        this.tabs = [
            {
                title: "Drug Search",
                component: __WEBPACK_IMPORTED_MODULE_1__drugs_drugs__["a" /* DrugsPage */],
                icon: "medical",
                url: "search"
            },
            {
                title: "Drug Interactions",
                component: __WEBPACK_IMPORTED_MODULE_0__interactions_interactions__["a" /* InteractionsPage */],
                icon: "finger-print",
                url: "check"
            },
            {
                title: "Settings",
                component: __WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */],
                icon: "cog",
                url: "welcome"
            }
        ];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
        this.isAndroid = this.plt.is("andorid");
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: "page-tabs",template:/*ion-inline-start:"/Users/osama/Documents/GitHub/dawaey/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <!-- Indicates with tabsPage should handle each tab here -->\n  <ion-tab \n  *ngFor="let tab of tabs"\n  [root]="tab.component" \n  [tabTitle]="ts.instant(tab.title)" \n  [tabIcon]="tab.icon"\n  [tabUrlPath]="tab.url">\n  </ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/dawaey/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_drug_drug__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drug_details_drug_details__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pharmacies_pharmacies__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__survey_survey__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_user_user__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_analytics_analytics__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var wait = function (ms) { return new Promise(function (r) { return setTimeout(r, ms); }); };
var DrugsPage = /** @class */ (function () {
    function DrugsPage(keyboard, alertCtrl, navCtrl, navParams, drugProvider, storage, translate, plt, modalCtrl, userDetials, analytics) {
        this.keyboard = keyboard;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.drugProvider = drugProvider;
        this.storage = storage;
        this.translate = translate;
        this.plt = plt;
        this.modalCtrl = modalCtrl;
        this.userDetials = userDetials;
        this.analytics = analytics;
        this.shouldShowDidYouMean = false;
        this.searchResults$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["BehaviorSubject"]([]);
        this.schema = {};
        this.history = [];
        this.searchTerm = "";
        this.searchTerm$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["Subject"]();
        this.chooseToSearchBy = [];
        this.searchBy = "tradename";
        this.segment = "all";
        this.loading = true;
        this.shouldShowAds = true;
        //setting up schema for visual searchby options
        this.schema = {
            id: "Code",
            tradename: "Trade Name",
            activeingredient: "Active Ingredients",
            price: "Price",
            company: "Company",
            group: "Drug Group",
            pamphlet: "Drug Pamphlet",
            dosage: "Drug Dose",
            composition: "Drug Composition"
        };
        //setting up service worker to be sperate search in new thread
        this.searchWorker = new Worker('./assets/workers/search.js');
    }
    //completly removing view
    DrugsPage.prototype.ionViewWillUnload = function () {
        this.storage.set('term', this.searchTerm);
    };
    //is view did enter? just loaded?
    DrugsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //this happens so fast > careful
        this.loading = true;
        //show surveys
        this.userDetials.hasCompletedSurveyOne().then(function (res) {
            //if has completed
            if (res) {
                console.log("Congrats you completed Survey1");
            }
            else {
                console.log("Please complete Survey1");
                //know the user name
                _this.storage.get("user").then(function (user) {
                    var name = user.displayName.split(" ")[0];
                    var alert = _this.alertCtrl.create({
                        title: "Hello, " + name + " \uD83D\uDC4B\uD83D\uDE03",
                        subTitle: 'Please Complete The Following Survey 😍',
                        buttons: [
                            {
                                text: 'Okay',
                                handler: function () {
                                    alert.dismiss().then(function () {
                                        _this.showSurveyModal();
                                    });
                                    return false;
                                }
                            }
                        ]
                    });
                    //after pressing okay
                    alert.present();
                });
            }
        });
        //Initialize Search term observing
        this.initSearch();
        this.loading = false;
        //don't forget to end loading flag
    };
    DrugsPage.prototype.showSurveyModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__survey_survey__["a" /* SurveyPage */]);
        modal.present();
    };
    //is view all elemnts did loaded?
    DrugsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading = true;
        //report analytics
        this.analytics.trackScreen("Main Screen");
        this.drugProvider.displayDrugs().subscribe(function (data) {
            //setting up sample drug of dataset
            _this.sampleDrug = data[0];
            //posting data to worker thread
            _this.searchWorker.postMessage({
                drugs: data
            });
            //initializing search options visuals
            _this.initSearchByOptions();
            _this.loading = false;
            //are you coming from another page?
            _this.handleComingFromOtherPage()
                .then(function () {
                _this.loading = false;
            })
                .catch(function (err) {
                console.log(err);
                _this.loading = false;
            });
        });
        //careful doing something outside this observation
    };
    DrugsPage.prototype.initSearchByOptions = function () {
        var optionArr = [];
        //generate options dynamically from schema and sample input
        for (var prop in this.sampleDrug) {
            if (prop && this.schema[prop]) {
                var myObj = {
                    type: "radio",
                    label: this.schema[prop],
                    value: prop,
                    checked: false
                };
                optionArr.push(myObj);
            }
        }
        this.chooseToSearchBy = optionArr;
    };
    DrugsPage.prototype.initSearch = function () {
        var _this = this;
        //observing search term behaviour subject
        this.searchTerm$.pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["tap"])(function (term) {
            console.log(term);
            _this.loading = true;
            _this.shouldShowAds = true;
        }), 
        //deboucing to left load from search thread
        Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["debounceTime"])(100), Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["distinctUntilChanged"])(), 
        //filter out non terms
        Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["filter"])(function (event) {
            if (typeof event === "undefined") {
                _this.handleBadSearchTerm();
                //false means filter it out and stop here
                return false;
            }
            else {
                //true mean pass it to next operator
                return true;
            }
        }), 
        //trimming white spaces of string prefrals
        Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (term) { return term.trim(); }), 
        //make sure term 3 letters or more?
        Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["filter"])(function (str) {
            //sample drug means data loaded (safe check)
            if (_this.sampleDrug &&
                //make sure at least term is 2 chars
                ((str.length > 2)) ||
                //or search by any price term length
                (_this.searchBy === "price" && str.length > 0)) {
                //true mean pass it to next operator
                return true;
            }
            else {
                _this.handleBadSearchTerm();
                //false means filter it out and stop here
                return false;
            }
        }), 
        //set term string to that term
        Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["tap"])(function (term) { return (_this.searchTerm = term); }), 
        //do the search > todo: move to search provider
        Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["switchMap"])(function (searchTerm$) { return _this.doSearch(searchTerm$); }), 
        //push results
        Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (results) {
            //there's results? push them
            if (results.length >= 1) {
                return results;
            }
            else {
                //else show the nearest drug
                _this.shouldShowDidYouMean = true;
                _this.doApproximate().then(function (result) {
                    _this.approximateValues = result;
                    _this.doYouMean = result[0][_this.searchBy];
                });
                //return empty array just for displaying nothing in UI until user click button
                return [];
            }
        }), Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["tap"])(function (results) {
            _this.searchResults$.next(results);
            _this.shouldShowAds = false;
            _this.loading = false;
        })).subscribe();
        //Don't Forget SUBSCRIBE
    };
    DrugsPage.prototype.handleBadSearchTerm = function () {
        this.searchResults$.next([]);
        //false as it's just bad search term
        this.shouldShowDidYouMean = false;
        this.hideLoading();
    };
    DrugsPage.prototype.hideLoading = function () {
        this.loading = false;
    };
    DrugsPage.prototype.showApproximate = function () {
        this.searchResults$.next(this.approximateValues);
    };
    DrugsPage.prototype.handleComingFromOtherPage = function () {
        var _this = this;
        //did you find parameters coming from other page?
        var foundParams = this.navParams.get("searchBy") && this.navParams.get("inputToSearch");
        return new Promise(function (resolve, rej) {
            if (foundParams) {
                _this.searchBy = _this.navParams.get("searchBy");
                _this.searchTerm$.next(_this.navParams.data.inputToSearch);
                _this.doSearch(_this.navParams.get("inputToSearch"))
                    .then(function (res) {
                    _this.searchResults$.next(res);
                    _this.hideLoading();
                    resolve("handled");
                })
                    .catch(function (err) { return console.log(err); });
            }
        });
    };
    //opens drug page with specific drug
    //TODO: needs optimization
    DrugsPage.prototype.openDrug = function (drug) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__drug_details_drug_details__["a" /* DrugDetails */], {
            id: drug.id,
            drug: drug
        });
        this.addToHistory(drug);
    };
    DrugsPage.prototype.addToHistory = function (drug) {
        var _this = this;
        //TODO: needs refactoring
        console.log("adding to history");
        this.storage
            .get("history")
            .then(function (history) {
            var arr = history || [];
            arr.push(drug);
            _this.drugProvider.saveDrugSearch(drug);
            _this.storage.set("history", arr);
        })
            .catch(function (err) { return console.log(err); });
    };
    DrugsPage.prototype.toggleSegments = function () {
        var _this = this;
        this.remmemberedState = this.searchResults$.getValue();
        if (this.segment === "history") {
            this.storage
                .get("history")
                .then(function (history) {
                _this.searchResults$.next(history || []);
            })
                .catch(function (err) { return console.log(err); });
        }
        else if (this.segment === "all") {
            this.searchResults$.next(this.remmemberedState);
        }
    };
    DrugsPage.prototype.doApproximate = function () {
        var _this = this;
        console.time('Approximate Search Took');
        this.searchWorker.postMessage({
            key: this.searchBy,
            term: this.searchTerm,
            type: "approximate"
        });
        return new Promise(function (resolve, reject) {
            _this.searchWorker.onmessage = function (event) {
                console.timeEnd('Approximate Search Took');
                //render resolved data
                resolve(event.data);
            };
        });
    };
    DrugsPage.prototype.doSearch = function (searchTerm$) {
        var _this = this;
        console.time('Exact Search Took');
        this.searchWorker.postMessage({
            key: this.searchBy,
            term: searchTerm$,
            type: "exact"
        });
        return new Promise(function (resolve, reject) {
            _this.searchWorker.onmessage = function (event) {
                console.timeEnd('Exact Search Took');
                //render resolved data
                resolve(event.data);
            };
        });
    };
    //helper ranking function
    //TODO: need to implement our ranking algorithm
    DrugsPage.prototype.sortInputFirst = function (input, data, key) {
        var first = [];
        var others = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i][key].toLowerCase().startsWith(input.toLowerCase())) {
                first.push(data[i]);
            }
            else {
                others.push(data[i]);
            }
        }
        first.sort();
        others.sort();
        return Promise.resolve(first.concat(others));
    };
    DrugsPage.prototype.showRadio = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle(this.translate.instant('Choose to search by ...'));
        var choices = this.chooseToSearchBy;
        for (var i = 0; i < choices.length; i++) {
            choices[i].checked = choices[i].value === this.searchBy ? true : false;
            choices[i].label = this.translate.instant(choices[i].label);
            alert.addInput(choices[i]);
        }
        alert.addButton("Cancel");
        alert.addButton({
            text: "OK",
            handler: function (value) {
                _this.searchBy = value;
            }
        });
        alert.present();
    };
    //not loaded yet
    DrugsPage.prototype.noDrugsYet = function () {
        return !this.sampleDrug;
    };
    //loaded and sample found
    DrugsPage.prototype.searchReady = function () {
        return !!this.sampleDrug;
    };
    DrugsPage.prototype.shouldShowSearchTextGuide = function () {
        return !this.searchResults$.getValue().length && !this.loading && !this.shouldShowDidYouMean;
    };
    DrugsPage.prototype.showAI = function () {
        return !this.searchResults$.getValue().length && !this.loading && this.shouldShowDidYouMean;
    };
    DrugsPage.prototype.noSearchFound = function () {
        return !this.searchResults$.getValue().length;
    };
    //handle UX
    DrugsPage.prototype.onEnterKey = function () {
        if (this.noSearchFound()) {
            this.showApproximate();
            this.closeKeyboard();
        }
        else {
            this.closeKeyboard();
        }
    };
    DrugsPage.prototype.clear = function () {
        this.searchResults$.next([]);
    };
    DrugsPage.prototype.closeKeyboard = function () {
        this.keyboard.close();
    };
    DrugsPage.prototype.isEmptyHistory = function () {
        return (this.history.length &&
            this.loading !== true &&
            this.segment == "history");
    };
    DrugsPage.prototype.goPharmaciesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pharmacies_pharmacies__["a" /* PharmaciesPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Content */])
    ], DrugsPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_11" /* ViewChild */])("virtualScroll", { read: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* VirtualScroll */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* VirtualScroll */])
    ], DrugsPage.prototype, "virtualScroll", void 0);
    DrugsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({ selector: "page-drugs",template:/*ion-inline-start:"/Users/osama/Documents/GitHub/dawaey/src/pages/drugs/drugs.html"*/'<ion-header>\n  <ion-navbar no-bounce no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon color="light" name="menu"></ion-icon>\n    </button>\n\n    <ion-segment [(ngModel)]="segment" (ionChange)="toggleSegments()">\n      <ion-segment-button value="all">\n        {{\'all\'|translate}}\n      </ion-segment-button>\n      <ion-segment-button value="history">\n        {{\'history\'|translate}}\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showRadio()">\n        <ion-icon color="light" name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title style="display:none">Search Drugs</ion-title>\n\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <!-- todo: ux better showing user what search category he\'s searching in -->\n    <ion-searchbar placeholder="{{\'Search by\'|translate}} {{schema[searchBy] | translate}}" (ionInput)="searchTerm$.next($event.target.value)"\n      (keyup.enter)="onEnterKey()" (ionClear)="clear()">\n    </ion-searchbar>\n\n  </ion-toolbar>\n</ion-header>\n<!-- todo: better ux teaching users how to use basic app features -->\n<ion-content class="drugs-screen">\n  <p *ngIf="noDrugsYet()">{{\'fetching drugs please wait\' | translate}}</p>\n  <h1 *ngIf="shouldShowSearchTextGuide()" class="animate text-center">{{\'You can search now\'|translate}}</h1>\n  <!--todo: report bug when using *ngIf with virtualScroll-->\n  <ion-list [class.hidden]="loading" #virtualScroll [virtualScroll]="searchResults$ | async" approxItemHeight="64px"\n    approxItemWidth="360px" bufferRatio="20">\n    <ion-item *virtualItem="let drug" class="drug" (click)="openDrug(drug)">\n      <ion-avatar item-start>\n        <svg class="svg-logo" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024.000000 1024.000000"\n          preserveAspectRatio="xMidYMid meet">\n          <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)">\n            <path d="M0 5120 l0 -5120 5120 0 5120 0 0 5120 0 5120 -5120 0 -5120 0 0\n         -5120z m5876 3671 c7 -9 18 -12 30 -7 10 4 15 4 11 0 -4 -4 7 -16 25 -27 42\n         -25 81 -40 73 -27 -3 6 1 7 9 4 9 -3 16 -10 16 -16 0 -5 5 -6 10 -3 6 3 10 2\n         10 -3 0 -13 50 -33 62 -26 7 5 8 2 3 -6 -6 -10 -4 -12 8 -7 12 4 14 2 10 -11\n         -5 -13 -3 -14 7 -5 9 8 17 6 32 -9 12 -12 28 -18 39 -15 10 3 17 2 14 -3 -7\n         -11 24 -22 37 -13 7 4 8 1 3 -7 -6 -10 -4 -12 9 -7 11 5 15 3 10 -5 -5 -7 -2\n         -9 9 -5 9 3 18 -1 21 -10 4 -8 13 -13 21 -9 8 3 15 1 15 -4 0 -12 67 -43 78\n         -36 6 3 13 -1 16 -10 3 -9 12 -14 18 -12 7 3 19 -1 26 -9 8 -7 18 -11 23 -8 5\n         4 9 1 9 -5 0 -7 7 -10 15 -6 8 3 15 1 15 -4 0 -13 58 -42 70 -35 6 3 10 2 10\n         -4 0 -10 38 -27 53 -23 4 1 7 -3 7 -9 0 -5 5 -7 10 -4 6 3 10 1 10 -5 0 -7 7\n         -9 16 -6 10 4 13 2 8 -6 -5 -8 -2 -9 10 -5 11 5 15 3 10 -5 -5 -8 -2 -9 9 -5\n         10 3 17 2 17 -4 0 -6 5 -7 10 -4 6 3 10 1 10 -5 0 -7 7 -9 16 -6 8 3 13 2 10\n         -3 -7 -11 22 -23 36 -14 6 3 8 1 5 -4 -7 -12 20 -26 33 -18 4 3 11 -2 14 -11\n         4 -9 13 -14 21 -10 8 3 15 2 15 -3 0 -13 89 -53 101 -45 8 5 9 3 4 -6 -6 -10\n         -4 -12 9 -7 10 4 15 3 11 -3 -3 -6 0 -10 8 -10 19 0 70 -56 63 -69 -4 -6 -2\n         -11 3 -11 6 0 11 -7 11 -16 0 -8 -5 -12 -10 -9 -7 4 -9 -3 -6 -19 3 -18 1 -24\n         -6 -20 -8 5 -9 1 -5 -10 4 -10 3 -15 -3 -11 -9 5 -15 -16 -11 -38 1 -5 -4 -5\n         -10 -1 -9 5 -10 2 -6 -10 5 -13 3 -17 -6 -13 -10 4 -14 -2 -13 -16 1 -12 -4\n         -28 -11 -35 -7 -8 -10 -18 -7 -24 4 -6 2 -8 -4 -4 -13 8 -26 -29 -16 -45 5 -8\n         3 -9 -6 -4 -9 6 -12 4 -8 -7 4 -8 -3 -20 -14 -27 -17 -11 -18 -15 -7 -22 11\n         -7 11 -9 1 -9 -8 0 -10 -5 -6 -12 5 -8 2 -9 -11 -4 -15 5 -16 4 -5 -9 10 -12\n         10 -15 -4 -15 -9 0 -16 -8 -16 -17 0 -15 2 -16 10 -3 7 10 10 11 10 2 0 -7 -7\n         -15 -16 -19 -8 -3 -13 -12 -10 -20 3 -8 1 -11 -4 -8 -9 5 -15 -15 -11 -37 0\n         -4 -5 -5 -12 -2 -7 2 -14 -4 -15 -16 -4 -41 -6 -47 -18 -47 -7 0 -10 5 -7 10\n         4 6 0 8 -10 4 -10 -4 -17 -2 -17 4 0 6 -7 8 -16 5 -8 -3 -13 -2 -10 3 7 11\n         -22 23 -35 15 -5 -3 -9 0 -9 7 0 7 -3 10 -6 6 -4 -3 -14 2 -23 11 -9 10 -12\n         12 -7 5 6 -10 4 -12 -8 -7 -9 3 -16 11 -16 16 0 6 -6 8 -14 5 -8 -3 -17 0 -19\n         7 -5 12 -41 31 -149 81 -21 9 -36 20 -34 24 2 3 -6 7 -17 8 -35 2 -207 85\n         -200 96 3 6 1 7 -6 3 -7 -4 -35 3 -64 17 -29 14 -69 33 -89 42 -21 9 -35 21\n         -32 26 3 5 -1 6 -8 4 -7 -3 -36 5 -63 19 -28 13 -74 34 -102 46 -30 13 -50 27\n         -46 33 3 5 1 7 -4 4 -6 -4 -34 4 -62 16 -41 20 -48 26 -38 37 10 11 8 11 -6 0\n         -16 -12 -20 -12 -28 1 -5 8 -9 11 -9 7 0 -4 -20 2 -45 13 -25 11 -50 17 -57\n         13 -6 -4 -8 -3 -4 4 3 6 2 13 -4 17 -5 3 -10 1 -10 -6 0 -7 -6 -4 -14 7 -8 10\n         -18 16 -21 12 -4 -4 -14 0 -22 8 -8 8 -19 12 -24 9 -5 -4 -9 -1 -9 5 0 7 -6\n         10 -14 7 -8 -3 -17 1 -20 10 -4 8 -12 13 -19 10 -8 -3 -14 1 -14 9 0 7 5 10\n         10 7 6 -4 8 1 4 11 -5 11 -3 15 5 10 8 -5 9 -2 5 10 -4 10 -3 15 3 11 6 -3 10\n         1 10 10 0 10 5 13 12 9 7 -4 8 -3 4 5 -4 6 2 30 13 52 12 22 18 45 15 51 -4 7\n         -2 8 4 4 11 -6 17 12 13 37 0 4 3 7 7 7 14 0 64 109 56 122 -4 7 -3 8 4 4 14\n         -8 36 40 26 56 -4 6 -2 8 3 5 6 -4 14 0 17 9 4 10 2 13 -7 8 -6 -4 -3 2 7 14\n         11 12 16 22 12 22 -4 0 6 14 23 31 17 17 31 34 31 38 0 14 104 7 116 -8z m667\n         -1031 c86 -40 157 -77 157 -82 0 -5 -20 -48 -44 -96 l-44 -87 40 -45 c106\n         -119 217 -316 273 -483 94 -281 95 -604 3 -882 -17 -49 -228 -508 -470 -1020\n         -750 -1585 -685 -1457 -791 -1584 -149 -181 -402 -322 -649 -361 -109 -18\n         -321 -8 -423 18 -105 28 -151 47 -590 252 -215 100 -405 195 -454 227 -264\n         175 -424 435 -467 757 -8 60 -12 128 -10 150 2 23 8 70 11 106 16 149 65 262\n         585 1355 34 72 158 333 275 580 312 661 320 676 386 775 186 278 496 495 830\n         580 104 27 295 51 374 48 l60 -2 47 96 48 96 347 -162 c192 -90 419 -195 506\n         -236z m-4424 -4807 c70 -34 148 -113 189 -190 42 -80 41 -91 -4 -23 -60 92\n         -114 138 -197 169 -25 10 -29 8 -37 -14 -11 -29 -44 -33 -72 -8 -24 21 -23 48\n         2 73 27 27 56 25 119 -7z m6109 11 c24 -17 30 -62 10 -82 -7 -7 -25 -12 -40\n         -12 -21 0 -29 6 -34 25 -5 21 -11 24 -28 19 -78 -24 -168 -99 -205 -172 -22\n         -43 -50 -70 -37 -36 32 86 137 205 220 248 56 30 83 32 114 10z m-1553 -94\n         c119 -38 209 -92 296 -179 137 -138 201 -291 201 -486 1 -194 -63 -348 -201\n         -486 -89 -89 -187 -147 -306 -181 l-80 -23 -1465 0 -1465 0 -80 23 c-119 34\n         -217 92 -306 181 -187 188 -250 445 -170 701 30 96 87 185 171 271 113 114\n         245 179 400 199 36 4 709 7 1495 6 l1430 -1 80 -25z m-4212 -79 c50 -45 80\n         -109 137 -295 28 -93 64 -195 80 -227 37 -73 135 -178 220 -236 36 -25 54 -42\n         40 -38 -76 21 -195 120 -260 215 -20 30 -65 111 -100 179 -35 67 -83 151 -106\n         185 -24 33 -59 85 -80 115 -40 58 -46 97 -18 118 27 20 50 16 87 -16z m5397\n         11 c29 -24 23 -51 -25 -118 -83 -117 -119 -176 -177 -289 -106 -208 -192 -312\n         -308 -374 -82 -44 -95 -38 -21 9 94 61 185 159 225 243 19 40 55 141 80 225\n         53 176 84 243 133 290 39 37 61 40 93 14z m-5772 -102 c158 -44 284 -126 371\n         -241 54 -71 149 -242 185 -334 l15 -40 -32 40 c-137 172 -323 297 -487 327\n         -59 11 -59 11 -85 -20 -33 -39 -119 -82 -165 -82 -68 0 -142 29 -187 75 -40\n         39 -43 46 -43 95 0 132 90 199 270 200 56 0 111 -7 158 -20z m6356 0 c81 -31\n         136 -104 136 -184 0 -30 -39 -90 -75 -115 -107 -73 -213 -67 -305 16 l-52 47\n         -61 -13 c-161 -33 -352 -158 -454 -297 -27 -35 -49 -60 -51 -55 -5 16 105 234\n         156 311 88 131 186 210 331 264 94 36 134 44 233 45 65 1 101 -4 142 -19z\n         m-5563 -113 c21 -14 41 -41 53 -70 20 -47 20 -47 -1 -75 -26 -35 -67 -40 -105\n         -12 l-29 21 -29 -30 c-17 -16 -30 -40 -30 -54 0 -39 25 -111 53 -152 41 -61\n         20 -56 -39 9 -100 109 -131 221 -85 306 41 78 141 105 212 57z m4630 0 c19\n         -12 44 -42 57 -67 43 -83 15 -179 -84 -288 -58 -64 -91 -84 -55 -33 57 80 77\n         174 45 219 -17 25 -56 29 -74 7 -18 -22 -67 -18 -91 6 -34 34 -21 94 30 141\n         35 33 46 38 89 38 34 0 59 -7 83 -23z m-5373 -317 c86 -21 288 -95 297 -109 2\n         -5 -26 -2 -63 6 -91 19 -146 11 -332 -49 -173 -55 -221 -58 -266 -13 -57 57\n         -6 141 106 176 48 14 174 9 258 -11z m860 -6 c28 -18 29 -50 1 -64 -17 -9 -25\n         -8 -41 7 -19 17 -20 17 -39 -6 -25 -30 -24 -52 2 -85 12 -15 19 -29 16 -32\n         -10 -11 -86 68 -92 95 -18 84 74 136 153 85z m4370 -10 c38 -43 25 -95 -38\n         -151 -34 -31 -46 -29 -21 3 25 32 27 71 4 96 -15 17 -17 17 -35 1 -34 -31 -76\n         18 -47 54 33 39 99 38 137 -3z m998 21 c129 -38 158 -159 47 -196 -43 -14 -76\n         -8 -243 46 -162 52 -222 60 -310 41 -36 -8 -66 -13 -68 -11 -5 5 106 54 183\n         81 150 53 296 67 391 39z m-5836 -205 c41 -12 125 -40 185 -63 105 -39 115\n         -41 223 -42 99 0 112 -2 112 -17 0 -25 -35 -31 -148 -26 -84 4 -112 10 -206\n         47 -217 84 -396 106 -531 67 -224 -66 -408 -264 -381 -409 9 -48 57 -102 102\n         -117 91 -30 217 85 158 144 -8 9 -22 16 -30 16 -24 0 -54 -19 -54 -35 0 -18 5\n         -19 30 -3 29 18 44 -1 24 -30 -17 -24 -62 -30 -82 -10 -7 7 -12 27 -12 44 0\n         43 38 74 92 74 88 0 121 -102 56 -176 -56 -63 -138 -89 -205 -63 -38 14 -92\n         67 -109 106 -16 37 -18 120 -4 157 9 25 7 24 -49 -14 -188 -128 -404 -179\n         -637 -151 -192 24 -276 57 -357 139 -90 93 -107 157 -59 226 69 99 202 96 218\n         -5 8 -50 -22 -81 -74 -77 -66 5 -85 87 -23 96 23 4 51 -13 51 -30 0 -5 -10\n         -13 -22 -18 -16 -6 -18 -9 -7 -9 9 -1 22 5 28 13 31 37 -35 74 -86 49 -76 -36\n         -80 -124 -10 -200 91 -98 191 -132 419 -140 177 -7 239 2 360 48 102 40 198\n         104 338 227 128 113 232 173 340 197 87 20 251 13 350 -15z m5515 15 c100 -21\n         217 -82 305 -159 206 -181 286 -234 426 -282 67 -23 101 -28 221 -32 281 -9\n         458 46 534 167 47 73 34 143 -33 177 -24 12 -33 13 -56 2 -30 -15 -39 -62 -12\n         -64 10 -1 10 1 2 3 -7 3 -12 14 -10 26 2 18 10 22 38 22 31 0 35 -3 38 -28 5\n         -38 -23 -67 -63 -67 -64 0 -91 76 -45 125 51 54 136 38 189 -36 40 -54 40 -97\n         1 -166 -82 -142 -247 -206 -540 -206 -140 -1 -163 2 -243 26 -100 31 -190 73\n         -260 124 -27 19 -51 33 -52 31 -2 -2 0 -21 5 -43 24 -107 -46 -222 -146 -241\n         -138 -26 -274 133 -188 220 66 65 198 -6 149 -80 -26 -41 -95 -28 -95 18 0 21\n         36 25 43 6 2 -7 8 -10 12 -6 13 13 -3 37 -30 44 -32 8 -65 -19 -65 -52 0 -32\n         58 -90 106 -104 88 -26 174 49 174 152 0 132 -172 308 -360 368 -59 19 -94 23\n         -179 23 -117 -1 -194 -18 -401 -92 -104 -37 -124 -41 -210 -41 -100 0 -124 7\n         -115 32 5 12 19 14 75 10 89 -6 161 8 297 60 195 73 345 93 488 63z m-6247\n         -208 c-50 -44 -141 -97 -202 -119 -94 -32 -245 -20 -293 25 -30 27 -29 53 1\n         72 33 22 71 4 62 -29 -7 -28 19 -42 93 -52 83 -11 215 33 329 111 50 34 54 31\n         10 -8z m6655 4 c143 -98 296 -133 390 -90 21 9 25 17 21 35 -11 43 68 56 81\n         13 18 -56 -41 -92 -162 -97 -97 -5 -157 12 -253 69 -66 39 -142 98 -127 99 5\n         0 27 -13 50 -29z m-7265 -47 c23 -16 29 -48 12 -59 -20 -12 -9 -24 48 -52 52\n         -26 66 -28 169 -28 79 0 105 -3 90 -9 -12 -6 -74 -10 -137 -10 -106 -1 -120 1\n         -176 27 -56 26 -94 65 -94 96 0 15 37 51 53 51 7 0 23 -7 35 -16z m7920 0 c32\n         -22 28 -60 -9 -95 -63 -59 -235 -87 -351 -56 -46 12 -44 12 65 12 103 0 117 2\n         170 29 40 19 57 33 53 42 -3 8 -9 20 -12 28 -6 16 29 56 49 56 7 0 23 -7 35\n         -16z" />\n            <path d="M5385 7760 c-384 -45 -726 -262 -922 -586 -20 -33 -183 -371 -363\n         -752 l-328 -693 25 -10 c13 -5 30 -9 38 -9 7 0 67 -18 132 -40 256 -84 345\n         -89 518 -28 55 20 153 55 217 77 143 51 225 61 318 37 81 -21 149 -59 321\n         -178 168 -116 221 -141 316 -146 85 -5 122 7 224 73 154 100 223 119 474 136\n         82 5 153 13 157 17 15 15 201 420 223 487 43 128 58 221 58 375 1 326 -110\n         602 -341 852 -153 165 -442 319 -698 372 -89 19 -278 27 -369 16z" />\n            <path d="M5230 2330 l0 -310 35 0 35 0 0 310 0 310 -35 0 -35 0 0 -310z" />\n            <path d="M4550 2432 c-22 -12 -44 -35 -57 -62 -21 -41 -23 -57 -23 -218 l0\n         -173 -159 3 -160 3 -30 29 c-58 55 -53 128 11 189 37 35 39 41 29 63 l-11 25\n         -38 -21 c-125 -70 -130 -245 -9 -323 41 -27 42 -27 233 -27 166 0 193 2 198\n         16 3 9 6 102 6 208 0 188 1 193 23 214 31 29 87 29 113 1 16 -18 20 -42 24\n         -178 l5 -156 158 -3 158 -3 30 30 29 29 0 176 0 176 -30 0 -30 0 0 -159 c0\n         -132 -3 -162 -16 -175 -12 -13 -39 -16 -130 -16 l-114 0 0 134 c0 122 -2 136\n         -23 167 -43 64 -121 85 -187 51z" />\n            <path d="M5515 2431 c-81 -37 -105 -84 -105 -202 0 -87 11 -117 57 -161 40\n         -38 74 -48 164 -48 87 0 92 -5 64 -60 -21 -41 -63 -60 -135 -60 l-60 0 0 -30\n         0 -30 79 0 c88 0 127 18 168 79 22 32 23 43 23 212 0 102 -5 190 -11 206 -23\n         61 -100 113 -169 113 -19 0 -53 -9 -75 -19z m143 -67 c41 -29 52 -66 52 -179\n         l0 -105 -70 0 c-120 0 -170 45 -170 153 0 98 40 147 120 147 25 0 56 -7 68\n         -16z" />\n            <path d="M6000 2441 c-37 -12 -70 -34 -70 -47 0 -6 8 -18 18 -27 15 -13 20\n         -14 42 -2 14 8 47 14 73 15 38 0 53 -5 72 -25 24 -23 25 -31 25 -133 0 -90 -3\n         -112 -17 -123 -11 -10 -54 -15 -140 -17 l-123 -4 0 -30 0 -30 140 4 140 3 32\n         33 33 32 0 129 c0 141 -6 158 -68 205 -29 21 -115 31 -157 17z" />\n          </g>\n        </svg>\n\n      </ion-avatar>\n      <h2 class="lowercase selectable">{{ drug?.tradename }}</h2>\n      <p class="lowercase">{{ drug?.activeingredient }}</p>\n\n      <p *ngIf="searchBy === \'price\'" ion-text color="danger">{{drug?.price}} EGP</p>\n      <p *ngIf="searchBy === \'group\'">{{ drug?.group }}</p>\n      <p *ngIf="searchBy === \'company\'">{{ drug?.company }}</p>\n\n      <ion-icon name="log-in" color="primary" item-end></ion-icon>\n    </ion-item>\n  </ion-list>\n  <div *ngIf="showAI()" text-center>\n    <p *ngIf="searchTerm.length">Oops Sorry, We Didn\'t find\n      <strong>{{searchTerm}}</strong> you can recheck spelling it... <br> or try our <span ion-text color="green">🤖\n        AI (Artificial Intelligence)</span> Search</p>\n    <h3 class="full-width-text" ion-color color="danger">Did You Mean <span ion-text color="success">{{doYouMean}}</span>\n      ?</h3>\n    <p text-center no-margin ion-text color="danger">↓↓↓</p>\n    <button ion-button backgroundColor="primary" round (click)="showApproximate()">Artificial Intelligence search</button>\n    <p>Or Report it to be added</p>\n    <a href="mailto:app@dawaey.com?subject=Report Missing {{searchTerm}}" ion-button backgroundColor="dark">\n      Report Missing\n    </a>\n  </div>\n  <div *ngIf="isEmptyHistory()" text-center>\n    <p>You didn\'t make view any medications yet :)!</p>\n  </div>\n<!--\n  <div *ngIf="shouldShowAds">\n    <ads></ads>\n  </div> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/dawaey/src/pages/drugs/drugs.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_drug_drug__["a" /* DrugProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_11__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_analytics_analytics__["a" /* AnalyticsProvider */]])
    ], DrugsPage);
    return DrugsPage;
}());

//# sourceMappingURL=drugs.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_global__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_firestore__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(12);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DrugProvider = /** @class */ (function () {
    function DrugProvider(http, storage, afs, afd, events, toastCtrl) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.afs = afs;
        this.afd = afd;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.events.subscribe('drugs:update', function () {
            _this.updateDrugs();
            _this.presentToast('Done..');
        });
    }
    DrugProvider.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    DrugProvider.prototype.getDrugs = function (country) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* API */].drugs(country)).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (json) {
            return json["drugs"];
        }));
    };
    DrugProvider.prototype.saveDrugSearch = function (drug) {
        var _this = this;
        var info = {
            id: drug.id,
            tradename: drug.tradename,
            when: new Date()
        };
        this.storage.get('user').then(function (_a) {
            var uid = _a.uid;
            _this.afs.collection('users')
                .doc(uid)
                .collection('history')
                .add(__assign({}, info))
                .then(function (res) {
                console.log(res);
            })
                .catch(function (err) {
                alert(err);
            });
        });
    };
    DrugProvider.prototype.getDrugsByDefaultCountry = function () {
        var _this = this;
        var drugs = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"](function (observer) {
            _this.storage.get("country").then(function (c) {
                console.log("got country " + c + " from storage and getting drugs from server");
                _this.getDrugs(c).subscribe(function (drugs) {
                    observer.next(drugs);
                });
            });
        });
        return drugs;
    };
    DrugProvider.prototype.checkForUpdates = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"](function (observer) {
            //check if there's update
            _this.http.get(__WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* API */].updates).subscribe(function (res) {
                //found update as version is newer
                if (res["data"]["version"] !== __WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* API */].current) {
                    //installing update
                    _this.installNewUpdate().subscribe(function () {
                        console.log('installing new update');
                        observer.next('installing new update');
                        localStorage.dataVersion = res["data"]["version"];
                    });
                }
                else {
                    console.log('you are up to date');
                    observer.next('data is up to date');
                }
            });
        });
    };
    DrugProvider.prototype.installNewUpdate = function () {
        return this.updateDrugs();
    };
    // getAndStoreDrugsByCountry(country): Observable<any> {   const drugs = new
    // Observable(observer => {     this.storage.get('country')       .then(c => {
    //       this.getDrugs(c).subscribe(drugs => {
    // this.storage.set('drugs', drugs)           observer.next(drugs)         })
    //    })   })   return drugs }
    DrugProvider.prototype.getAndStoreDrugsByDefaultCountry = function () {
        var _this = this;
        var drugs = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"](function (observer) {
            _this.storage.get("country").then(function (c) {
                _this.getDrugs(c).subscribe(function (drugs) {
                    _this.storage.set("drugs", drugs);
                    observer.next(drugs);
                });
            });
        });
        return drugs;
    };
    DrugProvider.prototype.displayDrugs = function () {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"](function (observer) {
            _this.storage.get("drugs").then(function (d) {
                //is there data in the storage?
                if (d) {
                    observer.next(d);
                }
                else {
                    //No data in the storage?
                    _this.getAndStoreDrugsByDefaultCountry().subscribe(function (drugs) {
                        observer.next(drugs);
                    });
                }
            });
        });
        return data;
    };
    DrugProvider.prototype.updateDrugs = function () {
        return this.getAndStoreDrugsByDefaultCountry();
    };
    DrugProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["o" /* ToastController */]])
    ], DrugProvider);
    return DrugProvider;
}());

//# sourceMappingURL=drug.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return matColors; });
//API
var SITE_URL = 'https://dawaey.com';
var VER = localStorage.dataVersion || 'v3';
var API = {
    drugs: function (country) { return SITE_URL + "/api/" + VER + "/" + (country || "eg") + "/drugs.json"; },
    partners: function (country) { return SITE_URL + "/api/" + VER + "/" + (country || "eg") + "/partners.json"; },
    sponsors: function (country) { return SITE_URL + "/api/" + VER + "/" + (country || "eg") + "/sponsors.json"; },
    pharmacies: function (country) { return SITE_URL + "/api/" + VER + "/" + (country || "eg") + "/pharmacies.json"; },
    updates: SITE_URL + "/api/current-api-version.json",
    current: "" + VER,
};
var matColors = {
    red: {
        "primary": "#B71C1C",
        "secondary": "#E53935",
    },
    pink: {
        "primary": "#880E4F",
        "secondary": "#D81B60",
    },
    purple: {
        "primary": "#4A148C",
        "secondary": "#8E24AA",
    },
    deepPurple: {
        "primary": "#311B92",
        "secondary": "#5E35B1",
    },
    indigo: {
        "primary": "#1A237E",
        "secondary": "#3949AB",
    },
    blue: {
        "primary": "#0D47A1",
        "secondary": "#1E88E5",
    },
    lightBlue: {
        "primary": "#01579B",
        "secondary": "#039BE5",
    },
    cyan: {
        "primary": "#006064",
        "secondary": "#00ACC1",
    },
    teal: {
        "primary": "#004D40",
        "secondary": "#00897B",
    },
    green: {
        "primary": "#1B5E20",
        "secondary": "#43A047",
    },
    lightGreen: {
        "primary": "#33691E",
        "secondary": "#7CB342",
    },
    lime: {
        "primary": "#827717",
        "secondary": "#C0CA33",
    },
    yello: {
        "primary": "#F57F17",
        "secondary": "#FDD835",
    },
    amber: {
        "primary": "#FF6F00",
        "secondary": "#FFB300",
    },
    orange: {
        "primary": "#E65100",
        "secondary": "#FB8C00",
    },
    deepOrange: {
        "primary": "#BF360C",
        "secondary": "#F4511E",
    },
    brown: {
        "primary": "#3E2723",
        "secondary": "#6D4C41",
    },
    gray: {
        "primary": "#212121",
        "secondary": "#757575",
    },
    blueGray: {
        "primary": "#263238",
        "secondary": "#546E7A",
    }
};
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmaciesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pharmacy_pharmacy__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pharmacy_details_pharmacy_details__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_analytics_analytics__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PharmaciesPage = /** @class */ (function () {
    function PharmaciesPage(navCtrl, navParams, pharmacyProvider, analytics) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pharmacyProvider = pharmacyProvider;
        this.analytics = analytics;
        this.govs = [];
        this.locations = [];
        this.filteredPharmacies = [];
        this.loading = true;
    }
    PharmaciesPage.prototype.govChoosen = function ($event) {
        var _this = this;
        console.log($event);
        var choise = $event;
        for (var i = 0; i < this.pharmacies.length; i++) {
            if (this.pharmacies[i].gov === choise) {
                this.pharmacies[i].locations.forEach(function (element) {
                    _this.locations.push(element.location);
                });
            }
        }
    };
    PharmaciesPage.prototype.locationChoosen = function (location) {
        var _this = this;
        for (var i = 0; i < this.pharmacies.length; i++) {
            if (this.pharmacies[i].gov === this.choosenGov) {
                this.pharmacies[i].locations.forEach(function (loc) {
                    if (loc.location === location) {
                        console.log('found location');
                        _this.filteredPharmacies = loc.pharms;
                    }
                });
            }
        }
        this.shouldShowAds = false;
    };
    PharmaciesPage.prototype.registerNewPharmacy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pharmacy_details_pharmacy_details__["a" /* PharmacyDetailsPage */]);
    };
    PharmaciesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.analytics.trackScreen("Pharmacies Screen");
        this.shouldShowAds = true;
        this.pharmacyProvider.getAll().subscribe(function (res) {
            _this.pharmacies = res;
            _this.loading = false;
            for (var _i = 0, _a = _this.pharmacies; _i < _a.length; _i++) {
                var pharm = _a[_i];
                _this.govs.push(pharm.gov);
            }
            console.log(_this.govs);
        });
    };
    PharmaciesPage.prototype.goAddPharmacyPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pharmacy_details_pharmacy_details__["a" /* PharmacyDetailsPage */]);
    };
    PharmaciesPage.prototype.geoFindMe = function () {
        var output = document.getElementById("out");
        if (!navigator.geolocation) {
            output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
            return;
        }
        function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log(latitude, longitude);
            output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
            var img = new Image();
            img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
            output.appendChild(img);
        }
        function error() {
            output.innerHTML = "Unable to retrieve your location";
        }
        output.innerHTML = "<p>Locating…</p>";
        navigator.geolocation.getCurrentPosition(success, error);
    };
    PharmaciesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pharmacies',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/dawaey/src/pages/pharmacies/pharmacies.html"*/'<ion-header>\n\n  <ion-navbar no-bounce no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon color="light" name="menu"></ion-icon>\n    </button>\n    <ion-title color="light">{{\'Nearby Pharmacies\' | translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p *ngIf="loading">{{\'loading\' | translate}}</p>\n  <ion-list>\n    <ion-item>\n      <ion-label>{{\'Choose Governate\' | translate}}</ion-label>\n      <ion-select [(ngModel)]="choosenGov" (ionChange)="govChoosen($event)">\n        <ion-option *ngFor="let gov of govs" [value]="gov">{{gov}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{\'Choose Location\' | translate}}</ion-label>\n      <ion-select [(ngModel)]="choosenLocation" (ionChange)="locationChoosen($event)">\n        <ion-option *ngFor="let location of locations" [value]="gov">{{location}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <a class="register" (click)="goAddPharmacyPage()" ion-button backgroundColor="success">{{\'Register Now\' | translate}}</a>\n    <ion-list #virtualScroll [virtualScroll]="filteredPharmacies" approxItemHeight="64px" approxItemWidth="360px"\n      bufferRatio="50">\n      <ion-item *virtualItem="let pharmacy" dir="rtl">\n        <ion-avatar item-start>\n          <img src="assets/imgs/pharmacy.png">\n        </ion-avatar>\n        <h2>{{ pharmacy?.name }}</h2>\n        <p>{{ pharmacy?.address }}</p>\n        <a href="tel:{{pharmacy.tel}}">{{\'Call now\' | translate}}</a>\n      </ion-item>\n    </ion-list>\n\n  </ion-list>\n\n  <ads *ngIf="shouldShowAds" (click)="goAddPharmacyPage()"></ads>\n\n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/dawaey/src/pages/pharmacies/pharmacies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_pharmacy_pharmacy__["a" /* PharmacyProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_analytics_analytics__["a" /* AnalyticsProvider */]])
    ], PharmaciesPage);
    return PharmaciesPage;
}());

//# sourceMappingURL=pharmacies.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tutorial_tutorial__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_analytics_analytics__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, storage, toastCtrl, translate, settings, events, analytics) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.settings = settings;
        this.events = events;
        this.analytics = analytics;
        this.languageChoices = [
            { value: "ar", name: 'Arabic' },
            { value: "en", name: 'English' }
        ];
        this.countryChoices = [
            { value: "eg", name: 'Egypt' },
            { value: "kw", name: 'Kuwait' }
        ];
        this.colorChoices = [
            { value: "red", name: 'Red' },
            { value: "pink", name: 'Pink' },
            { value: "deepPurple", name: 'Deep Purple' },
            { value: "indigo", name: 'Indigo' },
            { value: "blue", name: 'Blue' },
            { value: "lightBlue", name: 'Light Blue' },
            { value: "cyan", name: 'Cyan' },
            { value: "teal", name: 'Teal' },
            { value: "green", name: 'Green' },
            { value: "lightGreen", name: 'Light Green' },
            { value: "yello", name: 'Yello' },
            { value: "amber", name: 'Amber' },
            { value: "orange", name: 'Orange' },
            { value: "deepOrange", name: 'Deep Orange' },
            { value: "brown", name: 'Brown' },
            { value: "gray", name: 'Gray' },
            { value: "blueGray", name: 'blueGray' },
        ];
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.analytics.trackScreen("Settings Screen");
        console.log('ionViewDidLoad SettingsPage');
        this.storage.get('country')
            .then(function (c) {
            _this.defaultCountry = c || 'eg';
        });
        this.storage.get('language')
            .then(function (l) {
            _this.defaultLanguage = l || 'en';
        });
        this.storage.get('color')
            .then(function (color) {
            _this.defaultColor = color || 'red';
        });
    };
    SettingsPage.prototype.updateDefaultCountry = function (ev) {
        this.settings.setCountry(ev);
        this.presentToast('You have successfully updated the default country');
    };
    SettingsPage.prototype.updateDefaultLanguage = function (ev) {
        this.translate.use(ev);
        this.defaultLanguage = ev;
        this.storage.set('language', ev);
    };
    SettingsPage.prototype.waitNextVersion = function (ev) {
        this.presentToast('Wait this feature in the next version');
    };
    SettingsPage.prototype.changeColor = function (color) {
        this.settings.setColor(color);
    };
    SettingsPage.prototype.updateDatabase = function () {
        this.presentToast('Updating ...');
        this.events.publish('drugs:update');
    };
    SettingsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    SettingsPage.prototype.resetData = function () {
        this.storage.clear();
    };
    SettingsPage.prototype.showTutorial = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tutorial_tutorial__["a" /* TutorialPage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/dawaey/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon color="light" name="menu"></ion-icon>\n    </button>\n    <ion-title ion-text text-start color="light">{{\'Your Settings\'|translate}} ❤</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>{{\'Language\'| translate}}</ion-label>\n      <ion-select [(ngModel)]="defaultLanguage" (ionChange)="updateDefaultLanguage($event)">\n        <ion-option *ngFor="let choice of languageChoices" [value]="choice.value">\n          {{choice.name}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{\'Customized Country Data\' | translate}}</ion-label>\n      <ion-select [(ngModel)]="defaultCountry" (ionChange)="waitNextVersion($event)">\n        <ion-option *ngFor="let choice of countryChoices" [value]="choice.value">\n          {{choice.name}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{\'Choose App Color\'|translate}}</ion-label>\n      <ion-select [(ngModel)]="defaultColor" (ionChange)="changeColor($event)">\n        <ion-option *ngFor="let choice of colorChoices" [value]="choice.value">\n          {{choice.name}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  \n  <div text-center padding-bottom>\n    <button ion-button large backgroundColor="primary" (click)="updateDatabase()">{{\'Update Application Data\'|translate}}</button>\n  </div>\n  <div text-center>\n      <button ion-button backgroundColor="twitter" (click)="showTutorial()">{{\'Show tutorial again\' | translate}}</button>\n    </div>\n  \n    <!-- <div text-center padding-top>\n        <button ion-button backgroundColor="danger" small (click)="resetData()">{{\'Reset Application\'|translate}}</button>\n\n    </div> -->\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/dawaey/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__providers_analytics_analytics__["a" /* AnalyticsProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TutorialPage = /** @class */ (function () {
    function TutorialPage(navCtrl, menu, storage, translate) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.translate = translate;
        this.showSkip = true;
    }
    TutorialPage_1 = TutorialPage;
    TutorialPage.prototype.changeLanguage = function () {
        this.translate.use('ar');
        this.translate.setDefaultLang('ar');
    };
    TutorialPage.prototype.scrollToFeatures = function () {
        var index = this.slides.getActiveIndex();
        if (index === 1) {
            //TODO:check this
            // window.scrollTo(300,0);
        }
    };
    TutorialPage.prototype.skipToLogin = function () {
        var _this = this;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__auth_auth__["a" /* AuthPage */]).then(function (res) {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
        this.slides.ionSlideDidChange.subscribe(function (res) {
            _this.scrollToFeatures();
        });
    };
    TutorialPage.prototype.showTutorial = function () {
        this.navCtrl.push(TutorialPage_1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], TutorialPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = TutorialPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/dawaey/src/pages/tutorial/tutorial.html"*/'<ion-header no-border class="transparent-bg">\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="skipToLogin()" color="darker">Skip</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n    <ion-slide>\n      <ion-content>\n        <img src="assets/imgs/stars.gif" class="stars" alt="">\n        <img src="assets/imgs/ica-slidebox-img-1.png" class="slide-image" />\n        <h2 class="slide-title" ion-text color="primary">\n          {{ \'Welcome to Dawaey 🎉\' | translate }}\n        </h2>\n        <div>\n          <p text-left>\n            <b ion-text color="primary">Dawaey</b> is a smart medical refrence for healthcare providers that working\n            out of the box 🏄‍♂️.\n          </p>\n          <p text-left>\n            It uses new technologies to assist you and make your life easier 😉\n          </p>\n          <!-- <p text-left>\n                    It\'s <span ion-text color="danger">free</span>  and will remain free with your help and <a href="mailto:sponsor@dawaey.com">support</a> 😇\n                </p> -->\n        </div>\n      </ion-content>\n\n    </ion-slide>\n    <ion-slide>\n      <ion-content>\n        <img src="assets/imgs/stars.gif" class="stars" alt="">\n        <img src="assets/imgs/ica-slidebox-img-2.png" class="slide-image" />\n        <h2 padding-left text-left ion-text color="success" id="features">Explore new features:</h2>\n        <ol text-left padding-bottom>\n          <li>🤖 <span ion-text color="danger">AI</span> (Artificial Intelligence) Assistance</li>\n          <li>🔍 Ability to search medications by</li>\n          <ul>\n            <li>Tradenames</li>\n            <li>Active ingredients</li>\n            <li>Medication <span ion-text color="warning">updated</span> local price </li>\n            <li>Medication company</li>\n            <li>Medication group</li>\n            <li>Verbose pharmacology information</li>\n          </ul>\n          <li>💊 Drug-Drug Interactions</li>\n          <li>📷 View for medication pictures</li>\n          <li>📚 Search linked application information</li>\n          <li>ℹ️ Ablibity to ask Google for more medication information</li>\n          <li>➕ Add <a href="mailto:app@dawaey.com?subject=Adding new drug information (drug name)">new</a> market\n            medications</li>\n          <li>♻️ Update app data via internet</li>\n          <li>🗣 Multi language support</li>\n          <li>🌏 Multiple countries support</li>\n          <li>✔️ Ability to save search histories</li>\n\n        </ol>\n      </ion-content>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/imgs/stars.gif" class="stars" alt="">\n      <img src="assets/imgs/ica-slidebox-img-4.png" class="slide-image" />\n      <h2 class="slide-title" color="primary" (click)="skipToLogin()">Ready to Try? 👍</h2>\n      <a ion-button backgroundColor="whatsapp" (click)="skipToLogin()">Enter</a>\n\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/osama/Documents/GitHub/dawaey/src/pages/tutorial/tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], TutorialPage);
    return TutorialPage;
    var TutorialPage_1;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_plus__ = __webpack_require__(367);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthProvider = /** @class */ (function () {
    //user:firebase.user ;
    function AuthProvider(http, afAuth, events, afs, facebook, storage, google, plt) {
        this.http = http;
        this.afAuth = afAuth;
        this.events = events;
        this.afs = afs;
        this.facebook = facebook;
        this.storage = storage;
        this.google = google;
        this.plt = plt;
        console.log('Hello AuthProvider Provider');
        //this.user= this.afAuth.auth.currentUser
    }
    AuthProvider.prototype.loginGoogle = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.plt.is('cordova')) {
                _this.google.login({
                    'webClientId': '544209182607-c8l29bp6b2aft3cku8i5bp30dr559eb3.apps.googleusercontent.com'
                })
                    .then(function (loginResponse) {
                    var credential = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth.GoogleAuthProvider.credential(loginResponse.idToken);
                    _this.afAuth.auth.signInAndRetrieveDataWithCredential(credential)
                        .then(function (info) {
                        resolve(info);
                        _this.loginJobs().then(function () {
                            resolve(info);
                        });
                    })
                        .catch(function (err) {
                        _this.loginJobs().then(function () {
                            reject(err);
                            alert(err);
                        });
                    });
                })
                    .catch(function (err) {
                    reject(err);
                    alert(err);
                });
            }
            else {
                _this.afAuth.auth
                    .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth.GoogleAuthProvider())
                    .then(function (result) {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = result.credential["accessToken"];
                    _this.loginJobs().then(function () {
                        resolve(result);
                    });
                })
                    .catch(function (err) {
                    reject(err);
                    alert(err);
                });
            }
        });
    };
    AuthProvider.prototype.loginFacebook = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.plt.is('cordova')) {
                _this.facebook.login(["email"])
                    .then(function (loginResponse) {
                    var credential = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
                    _this.afAuth.auth.signInAndRetrieveDataWithCredential(credential)
                        .then(function (info) {
                        _this.loginJobs().then(function () {
                            resolve(info);
                        });
                    })
                        .catch(function (err) {
                        reject(err);
                        alert(err);
                    });
                })
                    .catch(function (err) {
                    reject(err);
                    alert(err);
                });
            }
            else {
                _this.afAuth.auth
                    .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth.FacebookAuthProvider())
                    .then(function (info) {
                    _this.loginJobs().then(function () {
                        resolve(info);
                    });
                })
                    .catch(function (err) {
                    reject(err);
                    alert(err);
                });
            }
        });
    };
    AuthProvider.prototype.loginJobs = function () {
        var _this = this;
        var user = this.afAuth.auth.currentUser;
        var userInfo = {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            logged: true
        };
        return new Promise(function (resolve, reject) {
            _this.afs.
                collection("users")
                .doc(user.uid)
                .set(__assign({}, userInfo))
                .then(function (res) {
                console.log(res);
            }).catch(function (err) {
                alert(err);
            });
            _this.storage.set('user', userInfo).then(function () {
                resolve('done');
                _this.events.publish('user:login', user);
            });
        });
    };
    AuthProvider.prototype.guestLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInAnonymously().then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
                alert(err);
            });
        });
    };
    AuthProvider.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (result) {
                var token = result.credential["accessToken"];
                _this.loginJobs().then(function () {
                    resolve(result);
                });
            })
                .catch(function (error) {
                reject(error);
                alert(error.message);
            });
        });
    };
    // trySilent() {
    //   return new Promise((resolve, reject) => {
    //     if (this.plt.is('cordova')) {
    //       this.google
    //         .trySilentLogin({})
    //         .then(result => {
    //           let token = result.credential["accessToken"];
    //           resolve(result)
    //           this.loginJobs()
    //         })
    //         .catch(function (error) {
    //           reject(error)
    //           alert(error.message)
    //         });
    //     } else {
    //       reject('not cordova')
    //     }
    //   })
    // }
    AuthProvider.prototype.signup = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(function (result) {
                var token = result.credential["accessToken"];
                _this.loginJobs().then(function () {
                    resolve(result);
                });
            })
                .catch(function (error) {
                reject(error);
                alert(error.message);
            });
        });
    };
    AuthProvider.prototype.signOut = function () {
        //this.storage.remove('user')
        this.storage.clear();
        return this.afAuth.auth.signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_analytics_analytics__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, storage, userDetails, analytics) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.userDetails = userDetails;
        this.analytics = analytics;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.analytics.trackScreen("Profile Screen");
                        this.countryCodeNumber = {
                            eg: '+20',
                            kw: '+965'
                        };
                        this.userDetails.getCurrentUserDetails()
                            .then(function (res) {
                            console.log(res);
                            var userDetails = res;
                            if (userDetails) {
                                _this.occupation = userDetails.occupation;
                                var egycode = '+20';
                                var kuwaitcode = '+965';
                                if (userDetails.mobileNumber.toString().startsWith(egycode)) {
                                    _this.countryCode = 'eg';
                                    _this.mobileNumber = userDetails.mobileNumber.toString().split(egycode)[1];
                                }
                                else if (userDetails.mobileNumber.toString().startsWith(kuwaitcode)) {
                                    _this.countryCode = 'kw';
                                    _this.mobileNumber = userDetails.mobileNumber.toString().split(kuwaitcode)[1];
                                }
                            }
                        })
                            .catch(function (err) {
                            console.log(err);
                            //set initial values
                            _this.countryCode = "eg";
                            _this.mobileNumber = "";
                            _this.occupation = "";
                        });
                        _a = this;
                        return [4 /*yield*/, this.storage.get('user')];
                    case 1:
                        _a.user = _b.sent();
                        console.log(this.user);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.submitInfo = function () {
        this.userDetails.saveUserDetails({
            mobileNumber: this.countryCodeNumber[this.countryCode] + this.mobileNumber,
            occupation: this.occupation
        }).then(function (res) {
            alert('success');
        }).catch(function (err) {
            console.log(err);
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/dawaey/src/pages/profile/profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon color="light" name="menu"></ion-icon>\n    </button>\n    <ion-title color="light">Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="user?.photoURL">\n      </ion-avatar>\n      <h2 color="primary">{{user?.displayName}}</h2>\n      <p>{{user?.email}}</p>\n    </ion-item>\n\n    <h1 padding-left padding-right color="primary">Hi, Welcome to Dawaey</h1>\n\n    <ion-card-content>\n      <p>Wait a minute. please complete your profile for the best user experience...</p>\n    </ion-card-content>\n  </ion-card>\n  <h3 color="primary">Mobile Number:</h3>\n  <div class="mobile-number">\n    <ion-item class="third-width">\n      <ion-select class="max-width" [(ngModel)]="countryCode">\n        <ion-option value="eg">+20</ion-option>\n        <ion-option value="kw">+965</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class="two-third-width" [(ngModel)]="mobileNumber">\n      <ion-input type="number" placeholder="Enter your mobile number"></ion-input>\n    </ion-item>\n  </div>\n\n  <h3 color="primary">Job:</h3>\n  <ion-item>\n    <ion-label>Occupation</ion-label>\n    <ion-select [(ngModel)]="occupation">\n      <ion-option value="doctor">Doctor</ion-option>\n      <ion-option value="pharmacist">Pharmacist</ion-option>\n      <ion-option value="other">Other</ion-option>\n    </ion-select>\n  </ion-item>\n  <div text-center padding-top>\n    <a ion-button backgroundColor="primary" (click)="submitInfo()">\n      complete profile\n    </a>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/osama/Documents/GitHub/dawaey/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_analytics_analytics__["a" /* AnalyticsProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 260:
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
webpackEmptyAsyncContext.id = 260;

/***/ }),

/***/ 303:
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
webpackEmptyAsyncContext.id = 303;

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase_analytics__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AnalyticsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AnalyticsProvider = /** @class */ (function () {
    function AnalyticsProvider(platform, firebase) {
        this.platform = platform;
        this.firebase = firebase;
        console.log('Hello AnalyticsProvider Provider');
    }
    AnalyticsProvider.prototype.setup = function () {
        //starting
        if (this.platform.is("cordova")) {
            this.firebase.setEnabled(true);
            //(<any>window).FirebasePlugin.setAnalyticsCollectionEnabled(true);
        }
        else {
            //try to do pwa firebase analytics here
        }
    };
    AnalyticsProvider.prototype.trackScreen = function (screenName) {
        if (this.platform.is("cordova")) {
            this.firebase.setCurrentScreen(screenName);
            //(<any>window).FirebasePlugin.setScreenName(screenName);
        }
        else {
            //try to do pwa firebase analytics here
        }
    };
    AnalyticsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */]])
    ], AnalyticsProvider);
    return AnalyticsProvider;
}());

//# sourceMappingURL=analytics.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthPage = /** @class */ (function () {
    function AuthPage(navCtrl, navParams, auth, menu, afs, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.menu = menu;
        this.afs = afs;
        this.user = user;
        this.email = '';
        this.password = '';
        this.segment = "login";
    }
    AuthPage.prototype.ionViewDidLoad = function () {
        //do nothing
    };
    AuthPage.prototype.loginGoogle = function () {
        var _this = this;
        this.auth.loginGoogle()
            .then(function (res) {
            _this.startApp();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AuthPage.prototype.loginFacebook = function () {
        var _this = this;
        this.auth.loginFacebook()
            .then(function (res) {
            _this.startApp();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    //login by mail
    AuthPage.prototype.login = function () {
        var _this = this;
        this.auth.login(this.email, this.password)
            .then(function (res) {
            _this.startApp();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AuthPage.prototype.signup = function () {
        var _this = this;
        this.auth.signup(this.email, this.password)
            .then(function (res) {
            _this.startApp();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AuthPage.prototype.guestLogin = function () {
        this.startApp();
    };
    AuthPage.prototype.completeProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
    };
    AuthPage.prototype.startApp = function () {
        this.openMainPage();
        // this.user.doUserHaveFullDetails().then(res=>{
        //   if(res === true){
        //     console.log('user have full details');
        //     this.openMainPage();
        //   }else{
        //     console.log('use do not have full details');
        //     this.completeProfile();
        //   }
        // })
    };
    AuthPage.prototype.openMainPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        // enable the root left menu when starting
        this.menu.enable(true);
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/dawaey/src/pages/auth/auth.html"*/'<!--\n  Generated template for the AuthPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title color="snow">{{\'auth\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 text-center color="primary">{{\'Start now\' | translate}}</h1>\n  <ion-list class="auth-wrapper">\n    <div class="continue-with" padding-top>\n      <img (click)="loginGoogle()" src="assets/imgs/google.jpg" alt="">\n      <img (click)="loginFacebook()" padding-top src="assets/imgs/facebook.jpg" alt="">\n    </div>\n    <h1 text-center padding-top color="primary">{{\'Have account?\' | translate}}</h1>\n    <div class="sign-up-form">\n      <ion-segment [(ngModel)]="segment" style="background:#eee">\n        <ion-segment-button value="login" class="segment-button">\n          {{\'Login\' | translate}}\n        </ion-segment-button>\n        <ion-segment-button value="signup" class="segment-button">\n          {{\'Signup\' | translate}}\n        </ion-segment-button>\n      </ion-segment>\n      <ion-item>\n        <ion-label>{{\'email\' | translate}}</ion-label>\n        <ion-input required type="email" [(ngModel)]="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{\'password\' | translate}}</ion-label>\n        <ion-input required type="password" [(ngModel)]="password"></ion-input>\n      </ion-item>\n      <div text-right>\n        <button ion-button icon-end large clear *ngIf="segment === \'signup\'" (click)="signup()">\n          {{\'Signup\' | translate}}\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n        <button ion-button icon-end large clear *ngIf="segment === \'login\'" (click)="login()">\n          {{\'Login\' | translate}}\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n      </div>\n    </div>\n    <p color="dark" text-center padding-top (click)="guestLogin()" style="text-decoration:underline;">{{\'continue as guest\' | translate}}</p>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/dawaey/src/pages/auth/auth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_analytics_analytics__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InteractionsPage = /** @class */ (function () {
    function InteractionsPage(navCtrl, navParams, analytics) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.analytics = analytics;
    }
    InteractionsPage.prototype.ionViewDidLoad = function () {
        this.analytics.trackScreen("Interactions Screen");
    };
    InteractionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-interactions',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/dawaey/src/pages/interactions/interactions.html"*/'<!--\n  Generated template for the Interactions page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon color="light" name="menu"></ion-icon>\n    </button>\n    <ion-title ion-text text-start color="light">Drug Interactions</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <iframe src="https://www.drugs.com/drug_interactions.php" width="100%" height="100%">No Internet Connection</iframe>\n\n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/dawaey/src/pages/interactions/interactions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_analytics_analytics__["a" /* AnalyticsProvider */]])
    ], InteractionsPage);
    return InteractionsPage;
}());

//# sourceMappingURL=interactions.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drugs_drugs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_drug_drug__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_analytics_analytics__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var DrugDetails = /** @class */ (function () {
    function DrugDetails(navCtrl, navParams, drugProvider, storage, analytics) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.drugProvider = drugProvider;
        this.storage = storage;
        this.analytics = analytics;
        this.drugs = [];
        this.activeingredients = [];
        this.showPharma = false;
        this.similars = [];
    }
    DrugDetails_1 = DrugDetails;
    //Setting live cycle event of entering this component
    DrugDetails.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.loading = true;
                        //set view
                        _a = this;
                        return [4 /*yield*/, this.loadDrugDetails()];
                    case 1:
                        //set view
                        _a.drug = _c.sent();
                        this.activeingredients = this.drug.activeingredient.split("+");
                        this.loading = false;
                        //set analytics
                        this.analytics.trackScreen(this.drug.tradename);
                        //load similars
                        _b = this;
                        return [4 /*yield*/, this.loadDrugSimilars()];
                    case 2:
                        //load similars
                        _b.similars = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //load this drug information
    DrugDetails.prototype.loadDrugDetails = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //getting just id from directlink url
            if (_this.navParams.get("drug") == undefined) {
                _this.drugProvider.displayDrugs().subscribe(function (result) {
                    //save array to use later
                    _this.drugs = result;
                    //**you can linear search if you're not certain about id and data**//
                    var drugId = Number(_this.navParams.get("id")) - 1;
                    resolve(_this.drugs[drugId]);
                });
            }
            else {
                //getting details from navigation object
                resolve(_this.navParams.get("drug"));
            }
        });
    };
    //load similar drugs for this current drug in view
    DrugDetails.prototype.loadDrugSimilars = function () {
        var _this = this;
        var similarDrugs = [];
        //function to push similar drugs to class similars array
        var pushSimilars = function () {
            //loop to find which have the save ingredienets;
            for (var i = 0; i < _this.drugs.length; i++) {
                if (_this.drug.activeingredient === _this.drugs[i].activeingredient) {
                    //push if similar -> similar has the same active ingredient
                    similarDrugs.push(_this.drugs[i]);
                }
            }
        };
        var quickRank = function (drugs) {
            var lowestPrice = function (a, b) { return Number(a.price) - Number(b.price); };
            return drugs.sort(lowestPrice);
        };
        //method returns promise of similar drugs...
        return new Promise(function (resolve, reject) {
            //we have data already loaded 
            //usually we have it when we use direct link
            if (_this.drugs.length) {
                pushSimilars();
                quickRank(similarDrugs);
            }
            else {
                //coming from navigation page
                //load the drugs to pick similar 
                //current data is limited to data coming from nav object
                _this.drugProvider.displayDrugs().subscribe(function (result) {
                    _this.drugs = result;
                    pushSimilars();
                    quickRank(similarDrugs);
                });
            }
            resolve(similarDrugs);
        });
    };
    //open link with company search parameter in main screen
    DrugDetails.prototype.viewCompanyProducts = function () {
        var company = this.drug.company;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__drugs_drugs__["a" /* DrugsPage */], {
            searchBy: "company",
            inputToSearch: company
        });
    };
    //open link with active ingredient search parameter in main screen
    DrugDetails.prototype.searchActiveIngredient = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__drugs_drugs__["a" /* DrugsPage */], {
            searchBy: "activeingredient",
            inputToSearch: item
        });
    };
    //open link with drug group search parameter in main screen
    DrugDetails.prototype.viewDrugGroup = function () {
        var group = this.drug.group;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__drugs_drugs__["a" /* DrugsPage */], {
            searchBy: "group",
            inputToSearch: group
        });
    };
    //open link with drug details in another screen and add it to screen
    DrugDetails.prototype.openDrug = function (drug) {
        this.navCtrl.push(DrugDetails_1, {
            id: drug.id,
            drug: drug
        });
        this.addToHistory(drug);
    };
    //toggle showing pharma details and scroll to it
    DrugDetails.prototype.togglePharma = function () {
        this.showPharma = !this.showPharma;
        if (this.showPharma === true) {
            //setting newer id to make new scroll when new view pushes to nav object as id is unique to every element
            this.content.scrollTo(0, document.getElementById("pharma" + this.drug.id).offsetTop, 500);
        }
        else {
            this.content.scrollToTop(500);
        }
    };
    //add to history function
    DrugDetails.prototype.addToHistory = function (drug) {
        var _this = this;
        this.storage
            .get("history")
            .then(function (history) {
            var arr = history || [];
            arr.push(drug);
            _this.drugProvider.saveDrugSearch(drug);
            _this.storage.set("history", arr);
        })
            .catch(function (err) { return console.log(err); });
    };
    //view drug picture externally
    DrugDetails.prototype.viewPicture = function () {
        this.openLinkSystemBrowser("https://www.google.com/search?tbm=isch&q=" + this.drug.tradename
            .split(" ")
            .slice(0, 2)
            .join(" ") + " drug");
    };
    //google more about drug externally
    DrugDetails.prototype.googleMore = function () {
        this.openLinkSystemBrowser("https://www.google.com/search?&q=" + this.drug.tradename
            .split(" ")
            .slice(0, 2)
            .join(" ") + " drug");
    };
    //in app browser open link is system browser
    DrugDetails.prototype.openLinkSystemBrowser = function (link) {
        window.open(link, "_system");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Content */])
    ], DrugDetails.prototype, "content", void 0);
    DrugDetails = DrugDetails_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: "page-drug-details",template:/*ion-inline-start:"/Users/osama/Documents/GitHub/dawaey/src/pages/drug-details/drug-details.html"*/'<!--\n  Generated template for the DrugDetails page.\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title ion-text text-start color="light">\n      {{ drug?.tradename }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="drug-screen">\n  <div [class.none]="!loading" class="spinner-container">\n    <ion-spinner duration="250"></ion-spinner>\n  </div>\n\n  <ion-card *ngIf="!loading">\n    <ion-card-content>\n      <h2 class="title">{{\'Tradename\' | translate}}:</h2>\n      <h1 class="cap" text-center ion-text color="primary">{{drug?.tradename}}</h1>\n      <h2 no-margin class="title" >{{(activeingredients?.length > 1 ? \'Active Ingredient(s)\' : \'Active Ingredient\') | translate}}</h2>\n      <h2 class="detail-item lowercase" *ngFor="let item of activeingredients; let i= index" (click)="searchActiveIngredient(item)">\n        <span color="primary" margin-left>{{ activeingredients?.length > 1 ? i+1+\'-\' :\'\'}}</span>\n        <span class="clickable cap" color="primary">{{item}}</span>\n      </h2>\n      <h3 class="title">\n        {{\'Price\' | translate}}:\n        <span ion-text color="danger">\n          <strong>{{drug?.price}} {{\'EGP\' | translate}}</strong>\n        </span>\n      </h3>\n      <h3 class="title" *ngIf="drug?.group" class="title">{{\'Drug group\' | translate}}:</h3>\n      <div margin-left text-left (click)="viewDrugGroup()">\n        <p class="detail-item clickable" color="primary">\n          {{drug?.group}}\n        </p>\n      </div>\n\n      <h3 class="title" *ngIf="drug?.company">{{\'Company\' | translate}}:</h3>\n      <div id="company" margin-left text-left (click)="viewCompanyProducts()">\n        <p class="detail-item clickable" color="primary">{{drug?.company}}</p>\n      </div>\n\n      <div id="pharma{{drug?.id}}" style="height: 1px"></div>\n\n      <div [hidden]="!showPharma">\n        <div>\n          <h3 class="title" *ngIf="drug?.composition">{{\'Composition\' | translate}}:</h3>\n          <div>\n            <h2 *ngFor="let s of drug?.composition?.split(\'\n\')">\n              <strong padding-left>{{s}}</strong>\n            </h2>\n          </div>\n        </div>\n        <div>\n          <h3 class="title" *ngIf="drug?.pamphlet">{{\'Pharmacology\' | translate}}:</h3>\n          <div padding>\n            <h2 *ngFor="let s of drug?.pamphlet?.split(\'\n\')">\n              <strong>{{s}}</strong>\n            </h2>\n          </div>\n        </div>\n        <div>\n          <h3 class="title" *ngIf="drug?.dosage">{{\'Dose\' | translate}}:</h3>\n          <div padding>\n            <h2 *ngFor="let s of drug?.dosage?.split(\'\n\')">\n              <strong>{{s}}</strong>\n            </h2>\n          </div>\n        </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <a *ngIf="drug" style="color:brown;float:right;padding-right:10px;" href="mailto:app@dawaey.com?subject=Correcting {{drug.tradename}} information">\n    {{\'Report a correction\' | translate}}\n  </a>\n\n  <ion-item-group *ngIf="drug">\n    <ion-item-divider color="light">{{\'More Information\' | translate}}:</ion-item-divider>\n    <ion-card-content text-center>\n      <a ion-button backgroundColor="primary" (click)="togglePharma()">\n        {{(showPharma === true ? \'Hide Detailed Pharma\' : \'View Detailed Pharma\') | translate}}\n      </a>\n      <br />\n      <a ion-button backgroundColor="google" (click)="viewPicture()">{{\'View Picture\' | translate}}</a>\n      <a ion-button backgroundColor="google" (click)="googleMore()">{{\'Google More\' | translate}}</a>\n    </ion-card-content>\n  </ion-item-group>\n\n  <ion-item-group *ngIf="similars.length>0">\n    <ion-item-divider color="light">{{\'Similars\' | translate}}:</ion-item-divider>\n    <ion-item *ngFor="let similar of similars" (click)="openDrug(similar)">\n      {{similar.tradename}} <span class="price" style="float:right;" color="primary">{{similar?.price}} {{\'EGP\' | translate}}</span>\n    </ion-item>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/dawaey/src/pages/drug-details/drug-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_drug_drug__["a" /* DrugProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_analytics_analytics__["a" /* AnalyticsProvider */]])
    ], DrugDetails);
    return DrugDetails;
    var DrugDetails_1;
}());

//# sourceMappingURL=drug-details.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmacyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PharmacyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PharmacyProvider = /** @class */ (function () {
    function PharmacyProvider(http) {
        this.http = http;
        console.log('Hello PharmacyProvider Provider');
    }
    PharmacyProvider.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* API */].pharmacies('eg'));
    };
    PharmacyProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PharmacyProvider);
    return PharmacyProvider;
}());

//# sourceMappingURL=pharmacy.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmacyDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PharmacyDetailsPage = /** @class */ (function () {
    function PharmacyDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PharmacyDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PharmacyDetailsPage');
    };
    PharmacyDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pharmacy-details',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/dawaey/src/pages/pharmacy-details/pharmacy-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title color="light">Register New Pharmacy</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h1 text-center>Call our agent to register your pharmacy to get online orders and increase sales now 😍</h1>\n  <h3 text-center><a href="tel:01063116380">01063116380</a></h3>\n</ion-content>'/*ion-inline-end:"/Users/osama/Documents/GitHub/dawaey/src/pages/pharmacy-details/pharmacy-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PharmacyDetailsPage);
    return PharmacyDetailsPage;
}());

//# sourceMappingURL=pharmacy-details.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__drugs_drugs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_analytics_analytics__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SurveyPage = /** @class */ (function () {
    function SurveyPage(navCtrl, navParams, userDetails, storage, analytics) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userDetails = userDetails;
        this.storage = storage;
        this.analytics = analytics;
        this.showFirst = true;
        this.areYou = "student";
        this.fieldOfStudy = "pharmacy";
    }
    SurveyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurveyPage');
        this.analytics.trackScreen("Survey Screen");
    };
    SurveyPage.prototype.submit = function () {
        var _this = this;
        var info = {
            areYou: this.areYou,
            fieldOfStudy: this.fieldOfStudy
        };
        //save details that he submitted
        this.userDetails.saveUserDetails(info).then(function () {
            //navigate to main page
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__drugs_drugs__["a" /* DrugsPage */]);
        }).catch(function (err) {
            console.log(err);
            alert("Submit was not completed");
        });
    };
    SurveyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-survey',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/dawaey/src/pages/survey/survey.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon color="light" name="menu"></ion-icon>\n    </button>\n    <ion-title ion-text text-start color="light">Survey 💭</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n  <div *ngIf="showFirst">\n      <ion-list radio-group [(ngModel)]="areYou">\n          <ion-list-header >\n            <h2 color="primary">\n                Are you?\n            </h2>\n            \n          </ion-list-header>\n        \n          <ion-item>\n            <ion-label>Student</ion-label>\n            <ion-radio checked="true" value="student"></ion-radio>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>Working</ion-label>\n            <ion-radio value="working"></ion-radio>\n          </ion-item>\n        </ion-list>\n        \n        <ion-list radio-group [(ngModel)]="fieldOfStudy">\n          <ion-list-header>\n            <h2 color="primary">\n                Your field of Study?\n            </h2>   \n          </ion-list-header>\n        \n          <ion-item>\n            <ion-label>Medicine</ion-label>\n            <ion-radio checked="true" value="medicine"></ion-radio>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>Pharmacy</ion-label>\n            <ion-radio value="pharmacy"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Dentistry</ion-label>\n            <ion-radio value="dentistry"></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>Veterinary</ion-label>\n            <ion-radio value="veterinary"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Other</ion-label>\n            <ion-radio value="other"></ion-radio>\n          </ion-item>\n        </ion-list>\n\n  </div>\n\n  <div text-center padding-bottom>\n      <button ion-button large backgroundColor="primary" (click)="submit()">Submit</button>\n    </div>\n  \n  \n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/dawaey/src/pages/survey/survey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_analytics_analytics__["a" /* AnalyticsProvider */]])
    ], SurveyPage);
    return SurveyPage;
}());

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var SettingsProvider = /** @class */ (function () {
    function SettingsProvider(http, storage, events) {
        this.http = http;
        this.storage = storage;
        this.events = events;
        console.log('Hello SettingsProvider Provider');
    }
    SettingsProvider.prototype.setCountry = function (country) {
        var _this = this;
        this.storage.set('country', country)
            .then(function (country) {
            console.log('set storage Country' + country);
            _this.events.publish('country:changed', country);
        });
    };
    SettingsProvider.prototype.setColor = function (color) {
        var _this = this;
        this.storage.set('color', color)
            .then(function (color) {
            console.log('set storage Color ' + color);
            _this.events.publish('color:changed', color);
        });
    };
    SettingsProvider.prototype.getCountry = function () {
    };
    SettingsProvider.prototype.updateDrugs = function () {
        // return this.drugProvider.updateDrugs()
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */]])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvitePage = /** @class */ (function () {
    function InvitePage(navCtrl, navParams, plt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plt = plt;
    }
    InvitePage.prototype.ionViewDidLoad = function () { };
    InvitePage.prototype.openLinkSystemBrowser = function (link) {
        window.open(link, "_system");
    };
    InvitePage.prototype.shareViaFacebook = function () {
        if (this.plt.is("android") || this.plt.is("ios")) {
            this.openLinkSystemBrowser("https://www.facebook.com/sharer/sharer.php?u=https://dawaey.com");
        }
    };
    InvitePage.prototype.shareViaWhatsApp = function () {
        if (this.plt.is("android") || this.plt.is("ios")) {
            this.openLinkSystemBrowser("whatsapp://send?text=Check.. https://dawaey.com");
        }
    };
    InvitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-invite",template:/*ion-inline-start:"/Users/osama/Documents/GitHub/dawaey/src/pages/invite/invite.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon color="light" name="menu"></ion-icon>\n    </button>\n    <ion-title ion-text text-start color="light">Invite Your Frirends ❤</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button icon-start block (click)="shareViaFacebook()" backgroundColor="facebook">\n    <ion-icon name="logo-facebook"></ion-icon> Facebook</button>\n  <button ion-button icon-start block (click)="shareViaWhatsApp()" backgroundColor="whatsapp" margin-top>\n    <ion-icon name="logo-whatsapp"></ion-icon> WhatsApp</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/dawaey/src/pages/invite/invite.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], InvitePage);
    return InvitePage;
}());

//# sourceMappingURL=invite.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_analytics_analytics__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, analytics) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.analytics = analytics;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        this.analytics.trackScreen("Developer Screen");
    };
    AboutPage.prototype.openLink = function (url) {
        window.open(url, "_system");
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/dawaey/src/pages/about/about.html"*/'<!--\n  Generated template for the About page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon color="light" name="menu"></ion-icon>\n    </button>\n    <ion-title ion-text text-start color="light">About us ❤</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-item-divider><span color="primary">Made with ❤ By:</span> </ion-item-divider>\n    <ion-item>\n      <div>\n        <img style="max-width: 500px;display: block;margin: auto;" src="assets/imgs/CureTicket_Logo.png" />\n      </div>\n      <div>\n        <h2 style="text-align: center;margin-top: 10px;"><a href="http://www.CureTicket.com">www.CureTicket.com</a></h2>\n      </div>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item-divider><span color="primary">Contact For</span> 🛠:</ion-item-divider>\n    <ion-item class="text-center" >\n        <a href="mailto:support@dawaey.com" color="primary">Dawaey@CureTicket.com</a>\n    </ion-item>\n  </ion-card>\n\n\n  <span text-center><p>All rights reserved Dawaey© 2020</p></span>\n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/dawaey/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_analytics_analytics__["a" /* AnalyticsProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PartnerProvider = /** @class */ (function () {
    function PartnerProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    PartnerProvider.prototype.getPartners = function (country) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* API */].partners(country));
    };
    PartnerProvider.prototype.getPartnersByDefaultCountry = function () {
        var _this = this;
        var partneres = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observer) {
            _this.storage.get("country").then(function (c) {
                console.log("got country " + c + " from storage and getting partners from server");
                _this.getPartners(c).subscribe(function (partneres) {
                    observer.next(partneres);
                });
            });
        });
        return partneres;
    };
    PartnerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], PartnerProvider);
    return PartnerProvider;
}());

//# sourceMappingURL=partner.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SplashPage = /** @class */ (function () {
    function SplashPage(navCtrl, navParams, splashScreen, viewCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.splashScreen = splashScreen;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
    }
    SplashPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplashPage');
    };
    SplashPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 500);
    };
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/dawaey/src/pages/splash/splash.html"*/'<ion-content>\n  <div> </div>\n</ion-content>'/*ion-inline-end:"/Users/osama/Documents/GitHub/dawaey/src/pages/splash/splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PushProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PushProvider = /** @class */ (function () {
    function PushProvider(http, oneSignal) {
        this.http = http;
        this.oneSignal = oneSignal;
        console.log('Hello PushProvider Provider');
    }
    PushProvider.prototype.init = function () {
        this.oneSignal.startInit('daaa8674-68e2-49a3-aa58-3844d767a9aa', '1061030166084');
    };
    PushProvider.prototype.handleNotificationReceived = function () {
        return this.oneSignal.handleNotificationReceived();
    };
    PushProvider.prototype.handleNotificationOpened = function () {
        return this.oneSignal.handleNotificationOpened();
    };
    PushProvider.prototype.endInit = function () {
        this.oneSignal.endInit();
    };
    PushProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__["a" /* OneSignal */]])
    ], PushProvider);
    return PushProvider;
}());

//# sourceMappingURL=push.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_17" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tutorial_tutorial__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_invite_invite__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_about_about__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_partners_partners__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_sponsors_sponsors__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_interactions_interactions__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_drug_details_drug_details__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_drugs_drugs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_keyboard__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_settings_settings__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_drug_drug__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_partner_partner__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ngx_translate_http_loader__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__directives_directives_module__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_splash_splash__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_fire__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_fire_database__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_fire_auth__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_auth_auth__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__config__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_facebook__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_fire_firestore__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_pharmacies_pharmacies__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_pharmacy_pharmacy__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_pharmacy_details_pharmacy_details__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_push__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_google_plus__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_push_push__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_onesignal__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_analytics_analytics__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_auth_auth__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_components_module__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_profile_profile__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_user_user__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_survey_survey__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_firebase_analytics__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















































// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_24__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', // or whatever path you're using
    '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_12__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_drugs_drugs__["a" /* DrugsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_drug_details_drug_details__["a" /* DrugDetails */],
                __WEBPACK_IMPORTED_MODULE_6__pages_interactions_interactions__["a" /* InteractionsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_sponsors_sponsors__["a" /* SponsorsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_partners_partners__["a" /* PartnersPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_invite_invite__["a" /* InvitePage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_pharmacies_pharmacies__["a" /* PharmaciesPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_pharmacy_details_pharmacy_details__["a" /* PharmacyDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_survey_survey__["a" /* SurveyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_22__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true,
                }, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */], name: 'TabsPage', segment: 'home' },
                        { component: __WEBPACK_IMPORTED_MODULE_8__pages_drugs_drugs__["a" /* DrugsPage */], name: 'DrugsPage', segment: 'drugs' },
                        { component: __WEBPACK_IMPORTED_MODULE_7__pages_drug_details_drug_details__["a" /* DrugDetails */], name: 'DrugDetail', segment: 'drugs/:id' },
                        { component: __WEBPACK_IMPORTED_MODULE_6__pages_interactions_interactions__["a" /* InteractionsPage */], name: 'InteractionsPage', segment: 'interactions' },
                        { component: __WEBPACK_IMPORTED_MODULE_4__pages_partners_partners__["a" /* PartnersPage */], name: 'PartnersPage', segment: 'partners' },
                        { component: __WEBPACK_IMPORTED_MODULE_5__pages_sponsors_sponsors__["a" /* SponsorsPage */], name: 'SponsorsPage', segment: 'sponsors' },
                        { component: __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__["a" /* SettingsPage */], name: 'SettingsPage', segment: 'settings' },
                        { component: __WEBPACK_IMPORTED_MODULE_3__pages_about_about__["a" /* AboutPage */], name: 'AboutPage', segment: 'about' },
                        { component: __WEBPACK_IMPORTED_MODULE_1__pages_invite_invite__["a" /* InvitePage */], name: 'InvitePage', segment: 'invite' },
                        { component: __WEBPACK_IMPORTED_MODULE_0__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'TutorialPage', segment: 'tutorial' },
                        { component: __WEBPACK_IMPORTED_MODULE_34__pages_pharmacies_pharmacies__["a" /* PharmaciesPage */], name: 'PharmaciesPage', segment: 'pharmacies' },
                        { component: __WEBPACK_IMPORTED_MODULE_36__pages_pharmacy_details_pharmacy_details__["a" /* PharmacyDetailsPage */], name: 'PharmaciesPage', segment: 'pharmacies/:id' },
                        { component: __WEBPACK_IMPORTED_MODULE_44__pages_profile_profile__["a" /* ProfilePage */], name: 'ProfilePage', segment: 'profile' },
                        { component: __WEBPACK_IMPORTED_MODULE_46__pages_survey_survey__["a" /* SurveyPage */], name: 'SurveyPage', segment: 'survey' },
                        { component: __WEBPACK_IMPORTED_MODULE_42__pages_auth_auth__["a" /* AuthPage */], name: 'AuthPage', segment: 'auth' }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_21__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__dawaeyapp',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_25__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_43__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_31__config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_33__angular_fire_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_fire_auth__["b" /* AngularFireAuthModule */] // imports firebase/auth, only needed for auth features,
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_drugs_drugs__["a" /* DrugsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_drug_details_drug_details__["a" /* DrugDetails */],
                __WEBPACK_IMPORTED_MODULE_6__pages_interactions_interactions__["a" /* InteractionsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_sponsors_sponsors__["a" /* SponsorsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_partners_partners__["a" /* PartnersPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_invite_invite__["a" /* InvitePage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_pharmacies_pharmacies__["a" /* PharmaciesPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_pharmacy_details_pharmacy_details__["a" /* PharmacyDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_survey_survey__["a" /* SurveyPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_keyboard__["a" /* Keyboard */],
                { provide: __WEBPACK_IMPORTED_MODULE_12__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_settings_settings__["a" /* SettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_19__providers_drug_drug__["a" /* DrugProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_partner_partner__["a" /* PartnerProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_29__angular_fire_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_33__angular_fire_firestore__["a" /* AngularFirestore */],
                __WEBPACK_IMPORTED_MODULE_28__angular_fire_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_35__providers_pharmacy_pharmacy__["a" /* PharmacyProvider */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_39__providers_push_push__["a" /* PushProvider */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_41__providers_analytics_analytics__["a" /* AnalyticsProvider */],
                __WEBPACK_IMPORTED_MODULE_45__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_12__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */],
                __WEBPACK_IMPORTED_MODULE_12__angular_core__["J" /* NO_ERRORS_SCHEMA */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_partner_partner__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_analytics_analytics__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PartnersPage = /** @class */ (function () {
    function PartnersPage(navCtrl, navParams, analytics, partnerProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.analytics = analytics;
        this.partnerProvider = partnerProvider;
        this.partners = [];
    }
    PartnersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.partners = [
            { img: "assets/imgs/osama.jpg", name: "Osama Soliman", since: "The Start", fb: "DrOs96" },
        ];
        this.partnerProvider.getPartnersByDefaultCountry().subscribe(function (partners) {
            if (partners.length >= 1) {
                for (var _i = 0, partners_1 = partners; _i < partners_1.length; _i++) {
                    var p = partners_1[_i];
                    _this.partners.push(p);
                }
            }
        });
        this.analytics.trackScreen("Parteners Screen");
    };
    PartnersPage.prototype.openFacebook = function (username) {
        this.openLinkSystemBrowser("https://www.facebook.com/" + username);
    };
    PartnersPage.prototype.openLinkSystemBrowser = function (link) {
        window.open(link, "_system");
    };
    PartnersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-partners',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/dawaey/src/pages/partners/partners.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon color="light" name="menu"></ion-icon>\n    </button>\n    <ion-title ion-text text-start color="light">Our Parteners ❤</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card *ngFor="let person of partners">\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="person.img" />\n      </ion-avatar>\n      <h2> {{person.name}}</h2>\n      <p> He\'s Our Partener Since {{person.since}} </p>\n      <a (click)="openFacebook(person.fb)" color="primary">Follow him on facebook</a>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n          <svg class="svg-logo" version="1.0" xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 1024.000000 1024.000000"\n           preserveAspectRatio="xMidYMid meet">\n          <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)">\n          <path d="M0 5120 l0 -5120 5120 0 5120 0 0 5120 0 5120 -5120 0 -5120 0 0\n          -5120z m5876 3671 c7 -9 18 -12 30 -7 10 4 15 4 11 0 -4 -4 7 -16 25 -27 42\n          -25 81 -40 73 -27 -3 6 1 7 9 4 9 -3 16 -10 16 -16 0 -5 5 -6 10 -3 6 3 10 2\n          10 -3 0 -13 50 -33 62 -26 7 5 8 2 3 -6 -6 -10 -4 -12 8 -7 12 4 14 2 10 -11\n          -5 -13 -3 -14 7 -5 9 8 17 6 32 -9 12 -12 28 -18 39 -15 10 3 17 2 14 -3 -7\n          -11 24 -22 37 -13 7 4 8 1 3 -7 -6 -10 -4 -12 9 -7 11 5 15 3 10 -5 -5 -7 -2\n          -9 9 -5 9 3 18 -1 21 -10 4 -8 13 -13 21 -9 8 3 15 1 15 -4 0 -12 67 -43 78\n          -36 6 3 13 -1 16 -10 3 -9 12 -14 18 -12 7 3 19 -1 26 -9 8 -7 18 -11 23 -8 5\n          4 9 1 9 -5 0 -7 7 -10 15 -6 8 3 15 1 15 -4 0 -13 58 -42 70 -35 6 3 10 2 10\n          -4 0 -10 38 -27 53 -23 4 1 7 -3 7 -9 0 -5 5 -7 10 -4 6 3 10 1 10 -5 0 -7 7\n          -9 16 -6 10 4 13 2 8 -6 -5 -8 -2 -9 10 -5 11 5 15 3 10 -5 -5 -8 -2 -9 9 -5\n          10 3 17 2 17 -4 0 -6 5 -7 10 -4 6 3 10 1 10 -5 0 -7 7 -9 16 -6 8 3 13 2 10\n          -3 -7 -11 22 -23 36 -14 6 3 8 1 5 -4 -7 -12 20 -26 33 -18 4 3 11 -2 14 -11\n          4 -9 13 -14 21 -10 8 3 15 2 15 -3 0 -13 89 -53 101 -45 8 5 9 3 4 -6 -6 -10\n          -4 -12 9 -7 10 4 15 3 11 -3 -3 -6 0 -10 8 -10 19 0 70 -56 63 -69 -4 -6 -2\n          -11 3 -11 6 0 11 -7 11 -16 0 -8 -5 -12 -10 -9 -7 4 -9 -3 -6 -19 3 -18 1 -24\n          -6 -20 -8 5 -9 1 -5 -10 4 -10 3 -15 -3 -11 -9 5 -15 -16 -11 -38 1 -5 -4 -5\n          -10 -1 -9 5 -10 2 -6 -10 5 -13 3 -17 -6 -13 -10 4 -14 -2 -13 -16 1 -12 -4\n          -28 -11 -35 -7 -8 -10 -18 -7 -24 4 -6 2 -8 -4 -4 -13 8 -26 -29 -16 -45 5 -8\n          3 -9 -6 -4 -9 6 -12 4 -8 -7 4 -8 -3 -20 -14 -27 -17 -11 -18 -15 -7 -22 11\n          -7 11 -9 1 -9 -8 0 -10 -5 -6 -12 5 -8 2 -9 -11 -4 -15 5 -16 4 -5 -9 10 -12\n          10 -15 -4 -15 -9 0 -16 -8 -16 -17 0 -15 2 -16 10 -3 7 10 10 11 10 2 0 -7 -7\n          -15 -16 -19 -8 -3 -13 -12 -10 -20 3 -8 1 -11 -4 -8 -9 5 -15 -15 -11 -37 0\n          -4 -5 -5 -12 -2 -7 2 -14 -4 -15 -16 -4 -41 -6 -47 -18 -47 -7 0 -10 5 -7 10\n          4 6 0 8 -10 4 -10 -4 -17 -2 -17 4 0 6 -7 8 -16 5 -8 -3 -13 -2 -10 3 7 11\n          -22 23 -35 15 -5 -3 -9 0 -9 7 0 7 -3 10 -6 6 -4 -3 -14 2 -23 11 -9 10 -12\n          12 -7 5 6 -10 4 -12 -8 -7 -9 3 -16 11 -16 16 0 6 -6 8 -14 5 -8 -3 -17 0 -19\n          7 -5 12 -41 31 -149 81 -21 9 -36 20 -34 24 2 3 -6 7 -17 8 -35 2 -207 85\n          -200 96 3 6 1 7 -6 3 -7 -4 -35 3 -64 17 -29 14 -69 33 -89 42 -21 9 -35 21\n          -32 26 3 5 -1 6 -8 4 -7 -3 -36 5 -63 19 -28 13 -74 34 -102 46 -30 13 -50 27\n          -46 33 3 5 1 7 -4 4 -6 -4 -34 4 -62 16 -41 20 -48 26 -38 37 10 11 8 11 -6 0\n          -16 -12 -20 -12 -28 1 -5 8 -9 11 -9 7 0 -4 -20 2 -45 13 -25 11 -50 17 -57\n          13 -6 -4 -8 -3 -4 4 3 6 2 13 -4 17 -5 3 -10 1 -10 -6 0 -7 -6 -4 -14 7 -8 10\n          -18 16 -21 12 -4 -4 -14 0 -22 8 -8 8 -19 12 -24 9 -5 -4 -9 -1 -9 5 0 7 -6\n          10 -14 7 -8 -3 -17 1 -20 10 -4 8 -12 13 -19 10 -8 -3 -14 1 -14 9 0 7 5 10\n          10 7 6 -4 8 1 4 11 -5 11 -3 15 5 10 8 -5 9 -2 5 10 -4 10 -3 15 3 11 6 -3 10\n          1 10 10 0 10 5 13 12 9 7 -4 8 -3 4 5 -4 6 2 30 13 52 12 22 18 45 15 51 -4 7\n          -2 8 4 4 11 -6 17 12 13 37 0 4 3 7 7 7 14 0 64 109 56 122 -4 7 -3 8 4 4 14\n          -8 36 40 26 56 -4 6 -2 8 3 5 6 -4 14 0 17 9 4 10 2 13 -7 8 -6 -4 -3 2 7 14\n          11 12 16 22 12 22 -4 0 6 14 23 31 17 17 31 34 31 38 0 14 104 7 116 -8z m667\n          -1031 c86 -40 157 -77 157 -82 0 -5 -20 -48 -44 -96 l-44 -87 40 -45 c106\n          -119 217 -316 273 -483 94 -281 95 -604 3 -882 -17 -49 -228 -508 -470 -1020\n          -750 -1585 -685 -1457 -791 -1584 -149 -181 -402 -322 -649 -361 -109 -18\n          -321 -8 -423 18 -105 28 -151 47 -590 252 -215 100 -405 195 -454 227 -264\n          175 -424 435 -467 757 -8 60 -12 128 -10 150 2 23 8 70 11 106 16 149 65 262\n          585 1355 34 72 158 333 275 580 312 661 320 676 386 775 186 278 496 495 830\n          580 104 27 295 51 374 48 l60 -2 47 96 48 96 347 -162 c192 -90 419 -195 506\n          -236z m-4424 -4807 c70 -34 148 -113 189 -190 42 -80 41 -91 -4 -23 -60 92\n          -114 138 -197 169 -25 10 -29 8 -37 -14 -11 -29 -44 -33 -72 -8 -24 21 -23 48\n          2 73 27 27 56 25 119 -7z m6109 11 c24 -17 30 -62 10 -82 -7 -7 -25 -12 -40\n          -12 -21 0 -29 6 -34 25 -5 21 -11 24 -28 19 -78 -24 -168 -99 -205 -172 -22\n          -43 -50 -70 -37 -36 32 86 137 205 220 248 56 30 83 32 114 10z m-1553 -94\n          c119 -38 209 -92 296 -179 137 -138 201 -291 201 -486 1 -194 -63 -348 -201\n          -486 -89 -89 -187 -147 -306 -181 l-80 -23 -1465 0 -1465 0 -80 23 c-119 34\n          -217 92 -306 181 -187 188 -250 445 -170 701 30 96 87 185 171 271 113 114\n          245 179 400 199 36 4 709 7 1495 6 l1430 -1 80 -25z m-4212 -79 c50 -45 80\n          -109 137 -295 28 -93 64 -195 80 -227 37 -73 135 -178 220 -236 36 -25 54 -42\n          40 -38 -76 21 -195 120 -260 215 -20 30 -65 111 -100 179 -35 67 -83 151 -106\n          185 -24 33 -59 85 -80 115 -40 58 -46 97 -18 118 27 20 50 16 87 -16z m5397\n          11 c29 -24 23 -51 -25 -118 -83 -117 -119 -176 -177 -289 -106 -208 -192 -312\n          -308 -374 -82 -44 -95 -38 -21 9 94 61 185 159 225 243 19 40 55 141 80 225\n          53 176 84 243 133 290 39 37 61 40 93 14z m-5772 -102 c158 -44 284 -126 371\n          -241 54 -71 149 -242 185 -334 l15 -40 -32 40 c-137 172 -323 297 -487 327\n          -59 11 -59 11 -85 -20 -33 -39 -119 -82 -165 -82 -68 0 -142 29 -187 75 -40\n          39 -43 46 -43 95 0 132 90 199 270 200 56 0 111 -7 158 -20z m6356 0 c81 -31\n          136 -104 136 -184 0 -30 -39 -90 -75 -115 -107 -73 -213 -67 -305 16 l-52 47\n          -61 -13 c-161 -33 -352 -158 -454 -297 -27 -35 -49 -60 -51 -55 -5 16 105 234\n          156 311 88 131 186 210 331 264 94 36 134 44 233 45 65 1 101 -4 142 -19z\n          m-5563 -113 c21 -14 41 -41 53 -70 20 -47 20 -47 -1 -75 -26 -35 -67 -40 -105\n          -12 l-29 21 -29 -30 c-17 -16 -30 -40 -30 -54 0 -39 25 -111 53 -152 41 -61\n          20 -56 -39 9 -100 109 -131 221 -85 306 41 78 141 105 212 57z m4630 0 c19\n          -12 44 -42 57 -67 43 -83 15 -179 -84 -288 -58 -64 -91 -84 -55 -33 57 80 77\n          174 45 219 -17 25 -56 29 -74 7 -18 -22 -67 -18 -91 6 -34 34 -21 94 30 141\n          35 33 46 38 89 38 34 0 59 -7 83 -23z m-5373 -317 c86 -21 288 -95 297 -109 2\n          -5 -26 -2 -63 6 -91 19 -146 11 -332 -49 -173 -55 -221 -58 -266 -13 -57 57\n          -6 141 106 176 48 14 174 9 258 -11z m860 -6 c28 -18 29 -50 1 -64 -17 -9 -25\n          -8 -41 7 -19 17 -20 17 -39 -6 -25 -30 -24 -52 2 -85 12 -15 19 -29 16 -32\n          -10 -11 -86 68 -92 95 -18 84 74 136 153 85z m4370 -10 c38 -43 25 -95 -38\n          -151 -34 -31 -46 -29 -21 3 25 32 27 71 4 96 -15 17 -17 17 -35 1 -34 -31 -76\n          18 -47 54 33 39 99 38 137 -3z m998 21 c129 -38 158 -159 47 -196 -43 -14 -76\n          -8 -243 46 -162 52 -222 60 -310 41 -36 -8 -66 -13 -68 -11 -5 5 106 54 183\n          81 150 53 296 67 391 39z m-5836 -205 c41 -12 125 -40 185 -63 105 -39 115\n          -41 223 -42 99 0 112 -2 112 -17 0 -25 -35 -31 -148 -26 -84 4 -112 10 -206\n          47 -217 84 -396 106 -531 67 -224 -66 -408 -264 -381 -409 9 -48 57 -102 102\n          -117 91 -30 217 85 158 144 -8 9 -22 16 -30 16 -24 0 -54 -19 -54 -35 0 -18 5\n          -19 30 -3 29 18 44 -1 24 -30 -17 -24 -62 -30 -82 -10 -7 7 -12 27 -12 44 0\n          43 38 74 92 74 88 0 121 -102 56 -176 -56 -63 -138 -89 -205 -63 -38 14 -92\n          67 -109 106 -16 37 -18 120 -4 157 9 25 7 24 -49 -14 -188 -128 -404 -179\n          -637 -151 -192 24 -276 57 -357 139 -90 93 -107 157 -59 226 69 99 202 96 218\n          -5 8 -50 -22 -81 -74 -77 -66 5 -85 87 -23 96 23 4 51 -13 51 -30 0 -5 -10\n          -13 -22 -18 -16 -6 -18 -9 -7 -9 9 -1 22 5 28 13 31 37 -35 74 -86 49 -76 -36\n          -80 -124 -10 -200 91 -98 191 -132 419 -140 177 -7 239 2 360 48 102 40 198\n          104 338 227 128 113 232 173 340 197 87 20 251 13 350 -15z m5515 15 c100 -21\n          217 -82 305 -159 206 -181 286 -234 426 -282 67 -23 101 -28 221 -32 281 -9\n          458 46 534 167 47 73 34 143 -33 177 -24 12 -33 13 -56 2 -30 -15 -39 -62 -12\n          -64 10 -1 10 1 2 3 -7 3 -12 14 -10 26 2 18 10 22 38 22 31 0 35 -3 38 -28 5\n          -38 -23 -67 -63 -67 -64 0 -91 76 -45 125 51 54 136 38 189 -36 40 -54 40 -97\n          1 -166 -82 -142 -247 -206 -540 -206 -140 -1 -163 2 -243 26 -100 31 -190 73\n          -260 124 -27 19 -51 33 -52 31 -2 -2 0 -21 5 -43 24 -107 -46 -222 -146 -241\n          -138 -26 -274 133 -188 220 66 65 198 -6 149 -80 -26 -41 -95 -28 -95 18 0 21\n          36 25 43 6 2 -7 8 -10 12 -6 13 13 -3 37 -30 44 -32 8 -65 -19 -65 -52 0 -32\n          58 -90 106 -104 88 -26 174 49 174 152 0 132 -172 308 -360 368 -59 19 -94 23\n          -179 23 -117 -1 -194 -18 -401 -92 -104 -37 -124 -41 -210 -41 -100 0 -124 7\n          -115 32 5 12 19 14 75 10 89 -6 161 8 297 60 195 73 345 93 488 63z m-6247\n          -208 c-50 -44 -141 -97 -202 -119 -94 -32 -245 -20 -293 25 -30 27 -29 53 1\n          72 33 22 71 4 62 -29 -7 -28 19 -42 93 -52 83 -11 215 33 329 111 50 34 54 31\n          10 -8z m6655 4 c143 -98 296 -133 390 -90 21 9 25 17 21 35 -11 43 68 56 81\n          13 18 -56 -41 -92 -162 -97 -97 -5 -157 12 -253 69 -66 39 -142 98 -127 99 5\n          0 27 -13 50 -29z m-7265 -47 c23 -16 29 -48 12 -59 -20 -12 -9 -24 48 -52 52\n          -26 66 -28 169 -28 79 0 105 -3 90 -9 -12 -6 -74 -10 -137 -10 -106 -1 -120 1\n          -176 27 -56 26 -94 65 -94 96 0 15 37 51 53 51 7 0 23 -7 35 -16z m7920 0 c32\n          -22 28 -60 -9 -95 -63 -59 -235 -87 -351 -56 -46 12 -44 12 65 12 103 0 117 2\n          170 29 40 19 57 33 53 42 -3 8 -9 20 -12 28 -6 16 29 56 49 56 7 0 23 -7 35\n          -16z"/>\n          <path d="M5385 7760 c-384 -45 -726 -262 -922 -586 -20 -33 -183 -371 -363\n          -752 l-328 -693 25 -10 c13 -5 30 -9 38 -9 7 0 67 -18 132 -40 256 -84 345\n          -89 518 -28 55 20 153 55 217 77 143 51 225 61 318 37 81 -21 149 -59 321\n          -178 168 -116 221 -141 316 -146 85 -5 122 7 224 73 154 100 223 119 474 136\n          82 5 153 13 157 17 15 15 201 420 223 487 43 128 58 221 58 375 1 326 -110\n          602 -341 852 -153 165 -442 319 -698 372 -89 19 -278 27 -369 16z"/>\n          <path d="M5230 2330 l0 -310 35 0 35 0 0 310 0 310 -35 0 -35 0 0 -310z"/>\n          <path d="M4550 2432 c-22 -12 -44 -35 -57 -62 -21 -41 -23 -57 -23 -218 l0\n          -173 -159 3 -160 3 -30 29 c-58 55 -53 128 11 189 37 35 39 41 29 63 l-11 25\n          -38 -21 c-125 -70 -130 -245 -9 -323 41 -27 42 -27 233 -27 166 0 193 2 198\n          16 3 9 6 102 6 208 0 188 1 193 23 214 31 29 87 29 113 1 16 -18 20 -42 24\n          -178 l5 -156 158 -3 158 -3 30 30 29 29 0 176 0 176 -30 0 -30 0 0 -159 c0\n          -132 -3 -162 -16 -175 -12 -13 -39 -16 -130 -16 l-114 0 0 134 c0 122 -2 136\n          -23 167 -43 64 -121 85 -187 51z"/>\n          <path d="M5515 2431 c-81 -37 -105 -84 -105 -202 0 -87 11 -117 57 -161 40\n          -38 74 -48 164 -48 87 0 92 -5 64 -60 -21 -41 -63 -60 -135 -60 l-60 0 0 -30\n          0 -30 79 0 c88 0 127 18 168 79 22 32 23 43 23 212 0 102 -5 190 -11 206 -23\n          61 -100 113 -169 113 -19 0 -53 -9 -75 -19z m143 -67 c41 -29 52 -66 52 -179\n          l0 -105 -70 0 c-120 0 -170 45 -170 153 0 98 40 147 120 147 25 0 56 -7 68\n          -16z"/>\n          <path d="M6000 2441 c-37 -12 -70 -34 -70 -47 0 -6 8 -18 18 -27 15 -13 20\n          -14 42 -2 14 8 47 14 73 15 38 0 53 -5 72 -25 24 -23 25 -31 25 -133 0 -90 -3\n          -112 -17 -123 -11 -10 -54 -15 -140 -17 l-123 -4 0 -30 0 -30 140 4 140 3 32\n          33 33 32 0 129 c0 141 -6 158 -68 205 -29 21 -115 31 -157 17z"/>\n          </g>\n          </svg>\n      </ion-avatar>\n      <h2> You! Your Name </h2>\n      <p> Become our partner now! </p>\n      <a href="mailto:app@dawaey.com">Contact us on Email</a>\n    </ion-item>\n  </ion-card>\n  <!-- TODO: add contributor hall of fame -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/dawaey/src/pages/partners/partners.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_analytics_analytics__["a" /* AnalyticsProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_partner_partner__["a" /* PartnerProvider */]])
    ], PartnersPage);
    return PartnersPage;
}());

//# sourceMappingURL=partners.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_analytics_analytics__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SponsorsPage = /** @class */ (function () {
    function SponsorsPage(navCtrl, navParams, analytics) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.analytics = analytics;
        this.sponsors = [];
        this.sponsors = [
            {
                img: "assets/imgs/angular.png",
                name: "Google Angular",
                since: "7 Jan 2018",
                link: "https://angular.io"
            },
            {
                img: "assets/imgs/ionic.png",
                name: "Ionic Team",
                since: "9 Dec 2017",
                link: "https://ionicframework.com"
            }
        ];
    }
    SponsorsPage.prototype.ionViewDidLoad = function () {
        this.analytics.trackScreen("Sponsors Screen");
    };
    SponsorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sponsors',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/dawaey/src/pages/sponsors/sponsors.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon color="light" name="menu"></ion-icon>\n    </button>\n    <ion-title ion-text text-start color="light">{{\'Our Sponsors\'|translate}} 👍</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding text-center>\n  <h2 padding-left text-left>{{\'Gold Sponsors\' | translate}}: </h2>\n  <ion-card *ngFor="let company of sponsors" class="gold-frame">\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="company.img" />\n      </ion-avatar>\n      <h2> {{company.name}}</h2>\n      <p> {{"They\'re our sponsor since" | translate}} {{company.since}} </p>\n    </ion-item>\n  </ion-card>\n  <div text-right padding-right>\n    <a href="mailto:sponsor@dawaey.com" color="primary">{{\'Become sponsor\'|translate}}</a>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/osama/Documents/GitHub/dawaey/src/pages/sponsors/sponsors.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_analytics_analytics__["a" /* AnalyticsProvider */]])
    ], SponsorsPage);
    return SponsorsPage;
}());

//# sourceMappingURL=sponsors.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__native_override__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tutorial_tutorial__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_drug_drug__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_analytics_analytics__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_push_push__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_fire_auth__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__global__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sidemenu__ = __webpack_require__(692);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//mess with browser please 😂

//import native please



//import pages please



//import providers




//import ionic angular

//import angular stuff please


//import angular libs

//import globals please


// get root
var root = document.documentElement;
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, drugProvider, events, storage, modalCtrl, alertCtrl, translate, actionCtrl, authProvider, afAuth, analytics, push) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.drugProvider = drugProvider;
        this.events = events;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.actionCtrl = actionCtrl;
        this.authProvider = authProvider;
        this.afAuth = afAuth;
        this.analytics = analytics;
        this.push = push;
        this.menuPages = []; //this can't be anything but array
        this.matColors = __WEBPACK_IMPORTED_MODULE_15__global__["b" /* matColors */];
        // Caution: DONING ANYTHING ABOVE THIS LINE IS DANGEROUS ⚠️
        this.platformReady();
        this.menuPages = __WEBPACK_IMPORTED_MODULE_16__sidemenu__["a" /* sideMenuPages */];
    }
    // Is platform ready? all browser things are loaded?
    MyApp.prototype.platformReady = function () {
        var _this = this;
        this.platform.ready().then(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //is this cordova platform? give me native plugins please
                        if (this.platform.is("cordova")) {
                            this.doNativeStuff();
                        }
                        else {
                            this.doPWAStuff();
                        }
                        //give me your memory please
                        return [4 /*yield*/, this.recoverRememberedState()];
                    case 1:
                        //give me your memory please
                        _a.sent();
                        //Listen to app events
                        this.listenToEvents();
                        //Start app background intelligent jobs
                        this.startBackgroundJobs();
                        //mess normal browser behaviors
                        Object(__WEBPACK_IMPORTED_MODULE_0__native_override__["a" /* messNative */])(this.alertCtrl);
                        return [2 /*return*/];
                }
            });
        }); });
        //Caution: careful doing something before ready
    };
    //do native stuff while you have power to
    MyApp.prototype.doNativeStuff = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    //hide splash
                    _this.splashScreen.hide();
                }, 500);
                ;
                //change status bar color if it's android platform
                if (this.platform.is("android")) {
                    this.rememberAndroidStatusColor();
                }
                //google analytics
                this.startAnalytics();
                //fcm
                this.startPushService();
                return [2 /*return*/];
            });
        });
    };
    //is it browser with limited native power?
    MyApp.prototype.doPWAStuff = function () {
        //PWA splash
        var splash = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__["a" /* SplashPage */], undefined, { cssClass: "modal-fullscreen" });
        splash.present();
    };
    MyApp.prototype.rememberAndroidStatusColor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var savedColor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //set statusbar color to match theme
                        this.statusBar.backgroundColorByHexString("#7b1fa2");
                        return [4 /*yield*/, this.storage.get("color")
                            //remember saved color
                        ];
                    case 1:
                        savedColor = _a.sent();
                        //remember saved color
                        if (savedColor) {
                            this.statusBar.backgroundColorByHexString(this.matColors[savedColor].primary);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //recover app state in newer usages
    MyApp.prototype.recoverRememberedState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rememberSavedUser()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.rememberSavedColor()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.rememberSavedLanguage()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //do you remember the user?
    MyApp.prototype.rememberSavedUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var savedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('user')];
                    case 1:
                        savedUser = _a.sent();
                        if (savedUser && savedUser.logged === true) {
                            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
                            this.user = savedUser;
                        }
                        else {
                            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tutorial_tutorial__["a" /* TutorialPage */];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //do you remember user color choise?
    MyApp.prototype.rememberSavedColor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var savedColor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("color")];
                    case 1:
                        savedColor = _a.sent();
                        if (savedColor && savedColor.length) {
                            root.style.setProperty("--color-primary", this.matColors[savedColor].primary);
                            root.style.setProperty("--color-secondary", this.matColors[savedColor].secondary);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //do you remember use language?
    MyApp.prototype.rememberSavedLanguage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var savedLanguage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('language')];
                    case 1:
                        savedLanguage = _a.sent();
                        if (savedLanguage && savedLanguage.length) {
                            this.translate.use(savedLanguage);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //logout please
    MyApp.prototype.logOut = function () {
        this.authProvider.signOut()
            .then(function () {
            window.location.reload();
        })
            .catch(function (err) {
            alert(err);
        });
    };
    //Starts intelligent backgroud jobs for better user experince
    MyApp.prototype.startBackgroundJobs = function () {
        //load data at first time app launch
        //not has seen tutorial === first time
        if (localStorage.hasSeenTutorial !== "true") {
            //load default data //TODO:get user country and langauge
            this.drugProvider.getAndStoreDrugsByDefaultCountry().subscribe();
        }
        else {
            this.startCheckingForUpdates();
        }
    };
    //Starts behaviour analytics jobs
    MyApp.prototype.startAnalytics = function () {
        this.analytics.setup();
    };
    //Starts push notification services
    MyApp.prototype.startPushService = function () {
        this.push.init();
        this.push.handleNotificationOpened()
            .subscribe(function (res) {
            alert(res.notification.data);
        }, function (err) {
            alert(err);
        });
        this.push.handleNotificationReceived()
            .subscribe(function (res) {
            alert(res.payload.body);
        }, function (err) {
            alert(err);
        });
        //important end init
        this.push.endInit();
    };
    //Check for app new updates?
    MyApp.prototype.startCheckingForUpdates = function () {
        this.drugProvider.checkForUpdates().subscribe();
        //TODO listen for newer pharmacy added
    };
    //Listen to App Events
    MyApp.prototype.listenToEvents = function () {
        var _this = this;
        /*************country change event*************/
        this.events.subscribe("country:changed", function () {
            _this.drugProvider.getAndStoreDrugsByDefaultCountry().subscribe();
        });
        /***************user login event****************/
        this.events.subscribe("user:login", function (user) {
            if (user) {
                _this.user = _this.afAuth.auth.currentUser;
            }
            else {
                _this.storage.get('user').then(function (res) {
                    _this.user = res;
                });
            }
        });
        /**************app color change event***************/
        this.events.subscribe("color:changed", function (color) {
            root.style.setProperty("--color-primary", _this.matColors[color].primary);
            root.style.setProperty("--color-secondary", _this.matColors[color].secondary);
            _this.statusBar.backgroundColorByHexString(_this.matColors[color].primary);
        });
    };
    //menu view method
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_13__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_11_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_13__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/osama/Documents/GitHub/dawaey/src/app/app.html"*/'<ion-split-pane when="md">\n  <ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title ion-text text-start color="light">\n          {{\'Menu\'|translate}}\n        </ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n\n        <div class="user">\n          <h2 text-center padding-top no-margin color="primary">{{user?.displayName}}</h2>\n          <p text-center no-margin color="primary">Hi, Welcome to Dawaey 👋😃</p>\n          <img *ngIf="user?.photoURL"  src="{{user?.photoURL}}" alt="">\n\n        </div>\n\n\n\n\n        <button menuClose ion-item *ngFor="let p of menuPages" (click)="openPage(p)" icon-start>\n          <ion-icon name="{{p.icon}}"></ion-icon>\n          <span ion-text color="primary">{{p.title | translate}}</span>\n        </button>\n        <button menuClose ion-item (click)="logOut()" icon-start>\n            <ion-icon name="swap"></ion-icon>\n          <span ion-text color="primary">Logout</span>\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"/Users/osama/Documents/GitHub/dawaey/src/app/app.html"*/
        })
        //App Entry Class //This is JavaScript in C# flavor.. this is TypeScript https://www.typescriptlang.org/
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_drug_drug__["a" /* DrugProvider */],
            __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_12__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_9__providers_analytics_analytics__["a" /* AnalyticsProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_push_push__["a" /* PushProvider */]])
    ], MyApp);
    return MyApp;
}());

//TODO: add user rating intellegience and feedback
//TODO: better market MEO
//TODO: app upload automation
//TODO: cross-walk support for lower api than 19 > second apk than normal one
//TODO: handle user segments
//TODO: add the ability to write prescription and scan drugs
//TODO: add the ability to enter drug by camera or voice
//TODO: active-user counting implementation
//TODO: Charge ppl outside egypt
//TODO: add share ability
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return messNative; });
var messNative = function (alertCtrl) {
    window.alert = null;
    window.alert = function (msg) {
        console.warn(msg);
        if (!msg || msg.length === 0)
            return;
        var alert = alertCtrl.create({
            title: 'Info!',
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
};
//# sourceMappingURL=native-override.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sideMenuPages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_about_about__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_profile_profile__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_pharmacies_pharmacies__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_invite_invite__ = __webpack_require__(383);






var sideMenuPages = [
    {
        title: "Home",
        component: __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */],
        icon: "home"
    },
    {
        title: "Nearby Pharmaacies",
        component: __WEBPACK_IMPORTED_MODULE_3__pages_pharmacies_pharmacies__["a" /* PharmaciesPage */],
        icon: "medkit"
    },
    {
        title: "Settings",
        component: __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings__["a" /* SettingsPage */],
        icon: "cog"
    },
    {
        title: "Invite Your Friends",
        component: __WEBPACK_IMPORTED_MODULE_5__pages_invite_invite__["a" /* InvitePage */],
        icon: "share"
    },
    {
        title: "About",
        component: __WEBPACK_IMPORTED_MODULE_0__pages_about_about__["a" /* AboutPage */],
        icon: "information-circle"
    },
    {
        title: "Profile",
        component: __WEBPACK_IMPORTED_MODULE_1__pages_profile_profile__["a" /* ProfilePage */],
        icon: "person"
    }
];
//# sourceMappingURL=sidemenu.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_color__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__background_color_background_color__ = __webpack_require__(698);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__color_color__["a" /* ColorDirective */],
                __WEBPACK_IMPORTED_MODULE_2__background_color_background_color__["a" /* BackgroundColorDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__color_color__["a" /* ColorDirective */],
                __WEBPACK_IMPORTED_MODULE_2__background_color_background_color__["a" /* BackgroundColorDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ColorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var ColorDirective = /** @class */ (function () {
    function ColorDirective(el, platform) {
        this.el = el;
        this.platform = platform;
    }
    ColorDirective.prototype.ngOnInit = function () {
        //console.dir(this.el.nativeElement.attributes);
        if (this.color === 'light' && this.platform.is('ios')) {
            this.color = 'primary';
            this.el.nativeElement.style.color = "var(--color-" + this.color + ")";
        }
        else {
            this.el.nativeElement.style.color = "var(--color-" + this.color + ")";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('color'),
        __metadata("design:type", String)
    ], ColorDirective.prototype, "color", void 0);
    ColorDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[color]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], ColorDirective);
    return ColorDirective;
}());

//# sourceMappingURL=color.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundColorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the BackgroundColorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var BackgroundColorDirective = /** @class */ (function () {
    function BackgroundColorDirective(el) {
        this.el = el;
        console.log('Hello BackgroundColorDirective Directive');
    }
    BackgroundColorDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.style.backgroundColor = "var(--color-" + this.backgroundColor + ")";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], BackgroundColorDirective.prototype, "backgroundColor", void 0);
    BackgroundColorDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[backgroundColor]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], BackgroundColorDirective);
    return BackgroundColorDirective;
}());

//# sourceMappingURL=background-color.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyA7pdWwt1FyPQ6lGLrivNcHKKzq8Re4h-Q",
    authDomain: "dawaey-app.firebaseapp.com",
    databaseURL: "https://dawaey-app.firebaseio.com",
    projectId: "dawaey-app",
    storageBucket: "dawaey-app.appspot.com",
    messagingSenderId: "544209182607",
    appId: "1:544209182607:web:93266fab55b8517847f5fa",
    measurementId: "G-2Z43BETMK6"
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ads_ads__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__ads_ads__["a" /* AdsComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__ads_ads__["a" /* AdsComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_settings_settings__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_pharmacies_pharmacies__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdsComponent = /** @class */ (function () {
    function AdsComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.shouldShowAds = true;
    }
    AdsComponent.prototype.hide = function () {
        this.shouldShowAds = false;
    };
    AdsComponent.prototype.goPharmaciesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_pharmacies_pharmacies__["a" /* PharmaciesPage */]);
    };
    AdsComponent.prototype.goSettingsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__pages_settings_settings__["a" /* SettingsPage */]);
    };
    AdsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'ads',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/dawaey/src/components/ads/ads.html"*/'<div class="ads" ion-fixed *ngIf="shouldShowAds" >\n  <div class="buttons zoomInDown">\n    <div class="hide-button" (click)="hide()">⌽ hide</div>\n    <a (click)="goPharmaciesPage()"  ion-button backgroundColor="google">Register Your Pharmacy To Get Online Orders\n      For Free Now</a>\n    <!-- <a (click)="goSettingsPage()"  ion-button backgroundColor="google">You can Change App Color Now\n      For Free Now</a> -->\n  </div>\n</div>'/*ion-inline-end:"/Users/osama/Documents/GitHub/dawaey/src/components/ads/ads.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */]])
    ], AdsComponent);
    return AdsComponent;
}());

//# sourceMappingURL=ads.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(http, afs, storage) {
        this.http = http;
        this.afs = afs;
        this.storage = storage;
        console.log('Hello UserProvider Provider');
    }
    UserProvider.prototype.getUserDetails = function (uid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afs.collection('users')
                .doc(uid)
                .collection('userDetails')
                .doc("details")
                .valueChanges()
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserProvider.prototype.getCurrentUserDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('user')];
                    case 1:
                        currentUser = _a.sent();
                        console.log(currentUser);
                        return [2 /*return*/, this.getUserDetails(currentUser['uid'])];
                }
            });
        });
    };
    UserProvider.prototype.hasCompletedSurveyOne = function () {
        return __awaiter(this, void 0, void 0, function () {
            var didComplete, details;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("Survey1")];
                    case 1:
                        didComplete = _a.sent();
                        if (!didComplete) return [3 /*break*/, 2];
                        //has completed survey 1
                        return [2 /*return*/, true];
                    case 2: return [4 /*yield*/, this.getCurrentUserDetails()];
                    case 3:
                        details = _a.sent();
                        if (details && details.areYou && details.fieldOfStudy) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserProvider.prototype.doUserHaveFullDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUserDetails()];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        if (res[0] && res[0].mobileNumber && res[0].occupation) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserProvider.prototype.saveUserDetails = function (infoToAdd) {
        return __awaiter(this, void 0, void 0, function () {
            var user, userDetails;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('user')];
                    case 1:
                        user = _a.sent();
                        userDetails = this.afs.collection('users').doc(user.uid).collection("userDetails").doc("details");
                        userDetails.set(infoToAdd, { merge: true }).then(function (res) {
                            console.log(res);
                        }).catch(function (err) {
                            alert(err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ })

},[390]);
//# sourceMappingURL=main.js.map