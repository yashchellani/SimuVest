(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-navbar{\r\n    top:0;\r\n    color:white;\r\n    padding:10px;\r\n    padding-top:20px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"navbar\" class=\"custom-navbar\" *ngIf=\"this.router.url!='/Login' && this.router.url!='/Register'&& this.router.url!= '' \" align=\"right\">\n        <span class=\"pr-5\"><a routerLink=\"/Dashboard\" style=\"color:white;text-transform: uppercase;letter-spacing: 2px;\">Home</a></span>\n        <span class=\"pr-5\"><a routerLink=\"/Dashboard\" style=\"color:white;text-transform: uppercase;letter-spacing: 2px;\">Start investing</a></span>\n        <span class=\"pr-5\"><a routerLink=\"/Dashboard\" style=\"color:white;text-transform: uppercase;letter-spacing: 2px;\">My Account</a></span>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'hackathon-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _investment_strategies_investment_strategies_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./investment-strategies/investment-strategies.component */ "./src/app/investment-strategies/investment-strategies.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Angular material modules

// import {ClipboardModule} from '@angular/cdk/clipboard';
// import {DragDropModule} from '@angular/cdk/drag-drop';

// import {ScrollingModule} from '@angular/cdk/scrolling';










































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_47__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_48__["RegisterComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_49__["DashboardComponent"],
                _investment_strategies_investment_strategies_component__WEBPACK_IMPORTED_MODULE_50__["InvestmentStrategiesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["routing"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_37__["MatSliderModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__["CdkTreeModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_35__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_36__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_37__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_40__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_41__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_42__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_43__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_44__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_45__["MatTreeModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_46__["OverlayModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _investment_strategies_investment_strategies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./investment-strategies/investment-strategies.component */ "./src/app/investment-strategies/investment-strategies.component.ts");





// import { TestIntegrationComponent } from './test-integration/test-integration.component';
var appRoutes = [
    { path: 'Login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'Register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'Dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'Investment-Strategies', component: _investment_strategies_investment_strategies_component__WEBPACK_IMPORTED_MODULE_4__["InvestmentStrategiesComponent"] },
    //code to redirect to "COMPONENT" on page load
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], pathMatch: 'full' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-card{\r\n    background-color:white;\r\n    padding:30px;\r\n    border-radius: 10px;\r\n    box-shadow:0 0 5px rgba(0,0,0,0.4);\r\n    cursor: pointer;\r\n    margin:0px 65px;\r\n    padding-top:80px;\r\n    height:350px;\r\n    width:300px;\r\n    max-width:100%;\r\n    margin:0;\r\n    margin-bottom:20px;\r\n    border : 5px solid white;\r\n}\r\n\r\n.a:hover{\r\n    border:5px solid #fec54f;\r\n}\r\n\r\n.b:hover{\r\n    border:5px solid #3dea37;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top:100px;\">\n  <div class=\"row\" align=\"center\">\n    <div class=\"col-12 col-md-6\">\n      <div class=\"custom-card a\">\n        <img src=\"https://media.discordapp.net/attachments/212893004740952065/751845120285999154/stocks.png\" style=\"width:120px;margin-bottom:20px\">\n        <p style=\"text-transform: uppercase;font-size:18px;color:rgb(0,0,80)\">Stocks</p>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-6\">\n      <div class=\"custom-card b\" routerLink=\"/Investment-Strategies\">\n        <img src=\"https://cdn.discordapp.com/attachments/212893004740952065/751845122429288498/start.png\" style=\"width:120px;margin-bottom:20px\">\n        <p style=\"text-transform: uppercase;font-size:18px;color:rgb(0,0,80)\">Investment Strategies</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/investment-strategies/investment-strategies.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/investment-strategies/investment-strategies.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-card{\r\n    margin-bottom:40px;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/investment-strategies/investment-strategies.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/investment-strategies/investment-strategies.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top:100px;\">\n  <h3 style=\"color:white;border-bottom:1px solid white;margin-bottom:40px\">Investment Strategies</h3>\n  <div class=\"row\" align=\"center\">\n    <div class=\"col-12 col-md-6\">\n      <mat-card class=\"custom-card\"  data-toggle=\"modal\" data-target=\"#modal1\">\n        Dollar Cost Averaging\n      </mat-card>\n    </div>\n    <div class=\"col-12 col-md-6\">\n      <mat-card class=\"custom-card\" data-toggle=\"modal\" data-target=\"#modal2\">\n        Asset allocation\n      </mat-card>\n    </div>\n    <div class=\"col-12 col-md-6\">\n      <mat-card class=\"custom-card\" data-toggle=\"modal\" data-target=\"#modal3\">\n        Portfolio rebalancing\n      </mat-card>\n    </div>\n    <div class=\"col-12 col-md-6\">\n      <mat-card class=\"custom-card\" data-toggle=\"modal\" data-target=\"#modal4\">\n        Staying invested\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade \" id=\"modal1\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <mat-card-title>Dollar Cost Averaging</mat-card-title><hr>\n        <ul>\n          <li>Dollar Cost Averaging (DCA) is a disciplined, unemotional and balanced approach to making an investment, and involves spreading out your stocks/funds purchases.\n          </li>\n          <li>You are essentially investing roughly the same amount of money at regular intervals (e.g every month), regardless of the price when you buy. By doing so, you are lowering investment risks associated with a bear market, which is a market with declining prices, and reducing impact of market volatility.</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade \" id=\"modal2\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n         <mat-card-title>Asset allocation</mat-card-title><hr>\n        <ul>\n          <li>an investment strategy that aims to balance risks and rewards by diversifying your resources amongst different types of investments. This will help to limit losses and reduce the fluctuations of investment returns without sacrificing too much potential gain in the long run.\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade \" id=\"modal3\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n         <mat-card-title>Portfolio rebalancing</mat-card-title><hr>\n        <ul>\n          <li>Rebalancing is the process of realigning the weightings of a portfolio of assets.\n          </li>\n          <li>It involves periodically buying or selling assets in a portfolio to maintain an original or desired level of asset allocation or risk.</li>\n          <li>For example, say an original target asset allocation was 50% stocks and 50% bonds. If the stocks performed well during the period, it could have increased the stock weighting of the portfolio to 70%. Since stocks carry a greater risk, the investor may then decide to sell some stocks and buy bonds to get the portfolio back to the original target allocation of 50/50.</li>\n          <li>‘Sell high, buy low’</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade \" id=\"modal4\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n         <mat-card-title>Staying invested</mat-card-title><hr>\n        <ul>\n          <li>Staying invested to capture long-term market return is key to a successful investing experience.\n\n          </li>\n          <li>Investors may make poor decisions when emotions take over, tending to buy out of excitement when the market is going up and sell out of fear when the market is falling. Markets ultimately do stabilize, and when they do, those who stay invested may benefit more than those who don't.</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/investment-strategies/investment-strategies.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/investment-strategies/investment-strategies.component.ts ***!
  \**************************************************************************/
/*! exports provided: InvestmentStrategiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentStrategiesComponent", function() { return InvestmentStrategiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvestmentStrategiesComponent = /** @class */ (function () {
    function InvestmentStrategiesComponent() {
    }
    InvestmentStrategiesComponent.prototype.ngOnInit = function () {
    };
    InvestmentStrategiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-investment-strategies',
            template: __webpack_require__(/*! ./investment-strategies.component.html */ "./src/app/investment-strategies/investment-strategies.component.html"),
            styles: [__webpack_require__(/*! ./investment-strategies.component.css */ "./src/app/investment-strategies/investment-strategies.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InvestmentStrategiesComponent);
    return InvestmentStrategiesComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container{\r\n    background-color:white;max-width:450px;padding:40px 20px;border-radius:10px;box-shadow: 0 0 5px rgba(0,0,0,0.3);\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top:100px;\" align=\"center\">\n  <div class=\"login-container\">\n    <h3 class=\"mb-4\">Login</h3>\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"standard\">\n        <mat-label>Email</mat-label>\n        <input matInput>\n        <mat-icon matSuffix style=\"margin-left:8px;margin-right:8px;\">email</mat-icon>\n      </mat-form-field>\n    </div>\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"standard\">\n        <mat-label>Password</mat-label>\n        <input matInput [type]=\"hide ? 'password' : 'text'\">\n        <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n          [attr.aria-pressed]=\"hide\">\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </button>\n      </mat-form-field>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-yellow\" style=\"width:244px;\" (click)=\"login()\">Login</button>\n    </div>\n    <a routerLink=\"/Register\" class=\"btn btn-outline-navy\" style=\"width:244px;\">Register</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.router.navigateByUrl("Dashboard");
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-card{\r\n    padding:10px;\r\n    box-shadow:0 0 4px rgba(0,0,0,0.3);\r\n    background-color:white;\r\n    cursor: pointer;\r\n    margin-bottom:15px;\r\n}\r\n\r\n.custom-card.active{\r\n   background-color:  rgb(22,44,83)!important;\r\n   color:white!important;\r\n}\r\n\r\n.register-container{\r\n    box-shadow:0 0 5px rgba(0,0,0,0.3);max-width:800px;border-radius:10px;margin-bottom:50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n  {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n</button> -->\n\n<div align=\"center\" class=\"container\" style=\"padding-top:100px;\">\n\n  <mat-vertical-stepper [linear]=\"isLinear\" *ngIf=\"!desktop\" #stepper class=\"register-container\">\n    <mat-step [stepControl]=\"firstFormGroup\">\n      <form [formGroup]=\"firstFormGroup\">\n        <ng-template matStepLabel>Register an Account</ng-template>\n        <div class=\"form-group\">\n          <mat-form-field appearance=\"standard\">\n            <mat-label>E-mail</mat-label>\n            <input matInput formControlName=\"email\">\n            <mat-icon matSuffix style=\"margin: 0px 8px;\"></mat-icon>\n          </mat-form-field>\n          <div class=\"text-danger validation-text-margin\"\n            *ngIf=\"firstFormGroup.controls.email.invalid && (firstFormGroup.controls.email.dirty && firstFormGroup.controls.email.touched)\">\n            <div *ngIf=\"firstFormGroup.controls.email.errors.email\">\n              <small>Please enter a valid email</small>\n            </div>\n            <div *ngIf=\"firstFormGroup.controls.email.errors.required\">\n              <small>This field is required</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <mat-form-field appearance=\"standard\">\n            <mat-label>Full Name</mat-label>\n            <input matInput formControlName=\"name\">\n            <mat-icon matSuffix style=\"margin: 0px 8px;\"></mat-icon>\n          </mat-form-field>\n          <div\n            *ngIf=\"firstFormGroup.controls.name.invalid && (firstFormGroup.controls.name.dirty && firstFormGroup.controls.name.touched)\">\n            <div *ngIf=\"this.firstFormGroup.controls.name.errors.required\">\n              <small>This field is required</small>\n            </div>\n          </div>\n        </div>\n        <div formGroupName=\"pwSet\">\n          <div class=\"form-group\">\n            <mat-form-field appearance=\"standard\">\n              <mat-label>Password</mat-label>\n              <input formControlName=\"pw\" matInput [type]=\"hide ? 'password' : 'text'\">\n              <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n                [attr.aria-pressed]=\"hide\">\n                <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n              </button>\n            </mat-form-field>\n            <div class=\"text-danger\"\n              *ngIf=\"firstFormGroup.controls.pwSet['controls'].pw.invalid && (firstFormGroup.controls.pwSet['controls'].pw.dirty && firstFormGroup.controls.pwSet['controls'].pw.touched)\">\n              <small>Password must be at least 6 letters</small>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <mat-form-field appearance=\"standard\">\n              <mat-label>Confirm Password</mat-label>\n              <input formControlName=\"cfmPw\" matInput [type]=\"hide2 ? 'password' : 'text'\">\n              <button mat-icon-button matSuffix (click)=\"hide2 = !hide2\" [attr.aria-label]=\"'Hide password'\"\n                [attr.aria-pressed]=\"hide\">\n                <mat-icon>{{hide2 ? 'visibility_off' : 'visibility'}}</mat-icon>\n              </button>\n            </mat-form-field>\n            <div class=\"text-danger\"\n              *ngIf=\"firstFormGroup.controls.pwSet.hasError('notmatch') && (firstFormGroup.controls.pwSet['controls'].cfmPw.dirty && firstFormGroup.controls.pwSet['controls'].cfmPw.touched)\">\n              <small *ngIf=\"firstFormGroup.controls.pwSet.hasError('notmatch')\">\n                Passwords do not match!\n              </small>\n            </div>\n          </div>\n        </div>\n        <div>\n          <button mat-button (click)=\"register(stepper)\">Register</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- #docregion label -->\n    <mat-step [stepControl]=\"secondFormGroup\" label=\"Set your user profile\">\n      <!-- #enddocregion label -->\n      <form [formGroup]=\"secondFormGroup\">\n        <div class=\"form-group\">\n          <mat-form-field appearance=\"standard\" style=\"width:100%;max-width:300px;\">\n            <mat-label>Age</mat-label>\n            <mat-select>\n              <mat-option *ngFor=\"let a of age\" value=\"{{a}}\">{{a}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"form-group\">\n          <mat-form-field appearance=\"standard\" style=\"width:100%;max-width:300px;\">\n            <mat-label>Purpose of investment</mat-label>\n            <mat-select>\n              <mat-option *ngFor=\"let investment of purposeOfInvestment\" value=\"{{investment}}\">{{investment}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"form-group\">\n          <mat-form-field appearance=\"standard\" style=\"width:100%;max-width:300px\">\n            <mat-label>Amount</mat-label>\n            <input matInput type=\"number\" class=\"example-right-align\">\n            <span matPrefix>$&nbsp;</span>\n            <span matSuffix>.00</span>\n          </mat-form-field>\n        \n        </div>\n        <div class=\"form-group\">\n          <label>Preferred industries to invest in</label>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-4\" *ngFor=\"let industry of preferredIndustry; let i = index\" align=\"center\">\n                <div class=\"custom-card\" id=\"preferred-industry-{{i}}\" (click)=\"selectIndustry(i, industry)\">\n                  {{industry}}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div>\n          <button mat-button (click)=\"saveProfile(stepper)\">Next</button>\n          <button mat-button matStepperNext>Skip</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step>\n      <ng-template matStepLabel>Done</ng-template>\n      <p>Registration Complete!</p>\n      <div>\n        <button mat-button routerLink=\"/Dashboard\">Continue to Dashboard</button>\n      </div>\n    </mat-step>\n  </mat-vertical-stepper>\n\n  <mat-horizontal-stepper [linear]=\"isLinear\" *ngIf=\"desktop\"  #stepper class=\"register-container\">\n    <mat-step [stepControl]=\"firstFormGroup\">\n      <form [formGroup]=\"firstFormGroup\">\n        <ng-template matStepLabel>Register an Account</ng-template>\n        <div class=\"form-group\">\n          <mat-form-field appearance=\"standard\">\n            <mat-label>E-mail</mat-label>\n            <input matInput formControlName=\"email\">\n            <mat-icon matSuffix style=\"margin: 0px 8px;\"></mat-icon>\n          </mat-form-field>\n          <div class=\"text-danger validation-text-margin\"\n            *ngIf=\"firstFormGroup.controls.email.invalid && (firstFormGroup.controls.email.dirty && firstFormGroup.controls.email.touched)\">\n            <div *ngIf=\"firstFormGroup.controls.email.errors.email\">\n              <small>Please enter a valid email</small>\n            </div>\n            <div *ngIf=\"firstFormGroup.controls.email.errors.required\">\n              <small>This field is required</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <mat-form-field appearance=\"standard\">\n            <mat-label>Full Name</mat-label>\n            <input matInput formControlName=\"name\">\n            <mat-icon matSuffix style=\"margin: 0px 8px;\"></mat-icon>\n          </mat-form-field>\n          <div\n            *ngIf=\"firstFormGroup.controls.name.invalid && (firstFormGroup.controls.name.dirty && firstFormGroup.controls.name.touched)\">\n            <div *ngIf=\"this.firstFormGroup.controls.name.errors.required\">\n              <small>This field is required</small>\n            </div>\n          </div>\n        </div>\n        <div formGroupName=\"pwSet\">\n          <div class=\"form-group\">\n            <mat-form-field appearance=\"standard\">\n              <mat-label>Password</mat-label>\n              <input formControlName=\"pw\" matInput [type]=\"hide ? 'password' : 'text'\">\n              <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n                [attr.aria-pressed]=\"hide\">\n                <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n              </button>\n            </mat-form-field>\n            <div class=\"text-danger\"\n              *ngIf=\"firstFormGroup.controls.pwSet['controls'].pw.invalid && (firstFormGroup.controls.pwSet['controls'].pw.dirty && firstFormGroup.controls.pwSet['controls'].pw.touched)\">\n              <small>Password must be at least 6 letters</small>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <mat-form-field appearance=\"standard\">\n              <mat-label>Confirm Password</mat-label>\n              <input formControlName=\"cfmPw\" matInput [type]=\"hide2 ? 'password' : 'text'\">\n              <button mat-icon-button matSuffix (click)=\"hide2 = !hide2\" [attr.aria-label]=\"'Hide password'\"\n                [attr.aria-pressed]=\"hide\">\n                <mat-icon>{{hide2 ? 'visibility_off' : 'visibility'}}</mat-icon>\n              </button>\n            </mat-form-field>\n            <div class=\"text-danger\"\n              *ngIf=\"firstFormGroup.controls.pwSet.hasError('notmatch') && (firstFormGroup.controls.pwSet['controls'].cfmPw.dirty && firstFormGroup.controls.pwSet['controls'].cfmPw.touched)\">\n              <small *ngIf=\"firstFormGroup.controls.pwSet.hasError('notmatch')\">\n                Passwords do not match!\n              </small>\n            </div>\n          </div>\n        </div>\n        <div>\n          <button mat-button (click)=\"register(stepper)\">Register</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- #docregion label -->\n    <mat-step [stepControl]=\"secondFormGroup\" label=\"Set your user profile\">\n      <!-- #enddocregion label -->\n      <form [formGroup]=\"secondFormGroup\">\n        <div class=\"form-group\">\n          <mat-form-field appearance=\"standard\" style=\"width:100%;max-width:300px;\">\n            <mat-label>Age</mat-label>\n            <mat-select>\n              <mat-option *ngFor=\"let a of age\" value=\"{{a}}\">{{a}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"form-group\">\n          <mat-form-field appearance=\"standard\" style=\"width:100%;max-width:300px;\">\n            <mat-label>Purpose of investment</mat-label>\n            <mat-select>\n              <mat-option *ngFor=\"let investment of purposeOfInvestment\" value=\"{{investment}}\">{{investment}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"form-group\">\n          <mat-form-field appearance=\"standard\" style=\"width:100%;max-width:300px\">\n            <mat-label>Amount</mat-label>\n            <input matInput type=\"number\" class=\"example-right-align\">\n            <span matPrefix>$&nbsp;</span>\n            <span matSuffix>.00</span>\n          </mat-form-field>\n        \n        </div>\n        <div class=\"form-group\">\n          <label>Preferred industries to invest in</label>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-4\" *ngFor=\"let industry of preferredIndustry; let i = index\" align=\"center\">\n                <div class=\"custom-card\" id=\"preferred-industry-{{i}}\" (click)=\"selectIndustry(i, industry)\">\n                  {{industry}}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div>\n          <button mat-button (click)=\"saveProfile(stepper)\">Next</button>\n          <button mat-button matStepperNext>Skip</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step>\n      <ng-template matStepLabel>Done</ng-template>\n      <p>Registration Complete!</p>\n      <div>\n        <button mat-button routerLink=\"/Dashboard\">Continue to Dashboard</button>\n      </div>\n    </mat-step>\n  </mat-horizontal-stepper>\n</div>\n\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.isLinear = false;
        this.hide = true;
        this.hide2 = true;
        this.age = [];
        this.preferredIndustry = ["Technology", "Real Estate", "Finance"];
        this.purposeOfInvestment = ["Build wealth", "Retirement", "Reach financial goals", "Start business", "Support others"];
        this.selectedIndustries = [];
        this.desktop = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (window.innerWidth < 700) {
            this.desktop = false;
        }
        this.firstFormGroup = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pwSet: this.formBuilder.group({
                pw: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
                cfmPw: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            }, { validator: this.passwordMatchValidator }),
        });
        this.secondFormGroup = this.formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        for (var i = 12; i < 120; i++) {
            this.age.push(i + 1);
        }
    };
    RegisterComponent.prototype.passwordMatchValidator = function (myForm) {
        var userpassword = myForm.controls.pw.value;
        var confirmpassword = myForm.controls.cfmPw.value;
        if (!(userpassword === confirmpassword))
            return { 'notmatch': true };
        return null;
    };
    RegisterComponent.prototype.register = function (stepper) {
        console.log("test");
        stepper.next();
    };
    RegisterComponent.prototype.saveProfile = function (stepper) {
        stepper.next();
    };
    RegisterComponent.prototype.selectIndustry = function (i, industry) {
        if (this.selectedIndustries.includes(industry)) {
            this.selectedIndustries.splice(this.selectedIndustries.indexOf(industry), 1);
            document.getElementById("preferred-industry-" + i).classList.remove("active");
        }
        else {
            this.selectedIndustries.push(industry);
            document.getElementById("preferred-industry-" + i).classList.add("active");
        }
        console.log(this.selectedIndustries);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Khye Chun\angular-apps\hackathon-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map