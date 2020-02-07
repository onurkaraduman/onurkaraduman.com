(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/article-list-element/article-list-element.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/article-list-element/article-list-element.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"article\" class=\"article-container\">\n    <div [ngClass]=\"{'article-category-first': orderNumber%2 !== 0, 'article-category-second': orderNumber%2 === 0}\">\n        <a routerLink=\"/home/filter\" [queryParams]=\"{category:article.category}\"\n            rel=\"category tag\">{{article.category}}</a>\n    </div>\n    <div class=\"article-inner\">\n        <header class=\"article-header\">\n            <div class=\"article-title\">\n                <h1><a [routerLink]=\"['/article/',article.fileName]\">{{article.title}}</a></h1>\n            </div>\n            <div class=\"article-meta\">\n                <span class=\"postedBy-span\">\n                    <i class=\"postedBy-icon\"></i>\n                    <a routerLink=\"/home/filter\" [queryParams]=\"{postedBy:article.postedBy}\">{{article.postedBy}} </a>\n                </span>\n                <span class=\"postedDate-span\">\n                    <i class=\"postedDate-icon\"></i>\n                    <a routerLink=\"/home/filter\" [queryParams]=\"{date:article.date}\" rel=\"bookmark\">\n                        <time class=\"entry-date published\">{{article.date}}</time>\n                    </a>\n                </span>\n            </div>\n        </header>\n        <div class=\"article-content\">\n            <div>\n                <p>\n                    {{article.content}}\n                </p>\n            </div>\n            <div class=\"moretag\">\n                <a [routerLink]=\"['/article/',article.fileName]\">\n                    Read more&nbsp;→&nbsp;\n                </a>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/article-list/article-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/article-list/article-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"articles\" class=\"articles-container\">\n    <app-article-list-element *ngFor=\"let article of activeArticles; let i = index\" [article]=\"article\" [orderNumber]=\"i\">\n    </app-article-list-element>\n    <div class=\"article-pages\">\n        <ul id=\"page\">\n            <li *ngFor='let pageNumber of pageList'><a [routerLink]=\"['/home/page',pageNumber]\">{{pageNumber}}</a></li>\n        </ul>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home/home.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home/home.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-container\">\n    <app-article-list [articles]=\"articles\" [articlePerPage]=\"articlePerPage\"></app-article-list>\n</div>");

/***/ }),

/***/ "./src/app/home/article-list-element/article-list-element.component.sass":
/*!*******************************************************************************!*\
  !*** ./src/app/home/article-list-element/article-list-element.component.sass ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\na {\n  text-decoration: none;\n}\n.article-container {\n  background-color: #fff;\n  font-family: \"Lato\";\n  width: 50%;\n  margin-top: 5%;\n  margin-left: 30%;\n  font: normal normal normal 14px/1 FontAwesome;\n}\n.article-category-first {\n  background-color: #50b6d0;\n  width: 10%;\n  padding: 4%;\n}\n.article-category-first::before {\n  content: \"\";\n  margin-right: 10%;\n  margin-left: 0;\n}\n.article-category-second {\n  background-color: #fe886d;\n  width: 10%;\n  padding: 4%;\n}\n.article-category-second::before {\n  content: \"\";\n  margin-right: 10%;\n  margin-left: 0;\n}\n.article-category-first a {\n  color: #ffffff;\n}\n.article-category-second a {\n  color: #ffffff;\n}\n.article-category::before {\n  content: \"\";\n  display: block;\n  border-left: 60px solid #50b6d0;\n}\n.article-title {\n  font-weight: 900;\n  padding-left: 3%;\n}\n.article-title a {\n  text-decoration: none;\n  color: #000000;\n}\n.article-meta {\n  padding-left: 3%;\n}\n.postedBy-icon::before {\n  content: \"\";\n  margin-right: 2%;\n}\n.postedBy-span {\n  color: #9d9d9d;\n  margin-right: 2%;\n}\n.postedBy-span a {\n  color: #9d9d9d;\n}\n.postedDate-icon::before {\n  content: \"\";\n  margin-right: 2%;\n}\n.postedDate-span {\n  color: #9d9d9d;\n  margin-right: 2%;\n}\n.postedDate-span a {\n  color: #9d9d9d;\n}\n.article-content {\n  margin-top: 5%;\n  line-height: 2;\n  padding-left: 3%;\n  padding-right: 3%;\n}\n.moretag a {\n  color: #ff7f66;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hcnRpY2xlLWxpc3QtZWxlbWVudC9hcnRpY2xlLWxpc3QtZWxlbWVudC5jb21wb25lbnQuc2FzcyIsIi9ob21lL29udXIvUHJvamVjdHMvYW5ndWxhci9vbnVya2FyYWR1bWFuLmNvbS9vbnVya2FyYWR1bWFuY29tLWFuZ3VsYXIvc3JjL2FwcC9ob21lL2FydGljbGUtbGlzdC1lbGVtZW50L2FydGljbGUtbGlzdC1lbGVtZW50LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0doQjtFQUNJLHFCQUFBO0FEREo7QUNHQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkNBQUE7QURBSjtBQ0VBO0VBQ0kseUJBZmlCO0VBZ0JqQixVQUFBO0VBQ0EsV0FBQTtBRENKO0FDQ0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FERUo7QUNDQTtFQUNJLHlCQXpCaUI7RUEwQmpCLFVBQUE7RUFDQSxXQUFBO0FERUo7QUNBQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURHSjtBQ0RBO0VBQ0ksY0FBQTtBRElKO0FDRkE7RUFDSSxjQUFBO0FES0o7QUNIQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7QURNSjtBQ0pBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBRE9KO0FDTEE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QURRSjtBQ05BO0VBQ0ksZ0JBQUE7QURTSjtBQ1BBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FEVUo7QUNSQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBRFdKO0FDVEE7RUFDSSxjQUFBO0FEWUo7QUNWQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBRGFKO0FDWEE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QURjSjtBQ1pBO0VBQ0ksY0FBQTtBRGVKO0FDYkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURnQko7QUNkQTtFQUNJLGNBQUE7QURpQkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FydGljbGUtbGlzdC1lbGVtZW50L2FydGljbGUtbGlzdC1lbGVtZW50LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmFydGljbGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xufVxuXG4uYXJ0aWNsZS1jYXRlZ29yeS1maXJzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MGI2ZDA7XG4gIHdpZHRoOiAxMCU7XG4gIHBhZGRpbmc6IDQlO1xufVxuXG4uYXJ0aWNsZS1jYXRlZ29yeS1maXJzdDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgKtcIjtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uYXJ0aWNsZS1jYXRlZ29yeS1zZWNvbmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU4ODZkO1xuICB3aWR0aDogMTAlO1xuICBwYWRkaW5nOiA0JTtcbn1cblxuLmFydGljbGUtY2F0ZWdvcnktc2Vjb25kOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+Aq1wiO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5hcnRpY2xlLWNhdGVnb3J5LWZpcnN0IGEge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmFydGljbGUtY2F0ZWdvcnktc2Vjb25kIGEge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmFydGljbGUtY2F0ZWdvcnk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItbGVmdDogNjBweCBzb2xpZCAjNTBiNmQwO1xufVxuXG4uYXJ0aWNsZS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHBhZGRpbmctbGVmdDogMyU7XG59XG5cbi5hcnRpY2xlLXRpdGxlIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uYXJ0aWNsZS1tZXRhIHtcbiAgcGFkZGluZy1sZWZ0OiAzJTtcbn1cblxuLnBvc3RlZEJ5LWljb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74CHXCI7XG4gIG1hcmdpbi1yaWdodDogMiU7XG59XG5cbi5wb3N0ZWRCeS1zcGFuIHtcbiAgY29sb3I6ICM5ZDlkOWQ7XG4gIG1hcmdpbi1yaWdodDogMiU7XG59XG5cbi5wb3N0ZWRCeS1zcGFuIGEge1xuICBjb2xvcjogIzlkOWQ5ZDtcbn1cblxuLnBvc3RlZERhdGUtaWNvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgbNcIjtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cblxuLnBvc3RlZERhdGUtc3BhbiB7XG4gIGNvbG9yOiAjOWQ5ZDlkO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xufVxuXG4ucG9zdGVkRGF0ZS1zcGFuIGEge1xuICBjb2xvcjogIzlkOWQ5ZDtcbn1cblxuLmFydGljbGUtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBsaW5lLWhlaWdodDogMjtcbiAgcGFkZGluZy1sZWZ0OiAzJTtcbiAgcGFkZGluZy1yaWdodDogMyU7XG59XG5cbi5tb3JldGFnIGEge1xuICBjb2xvcjogI2ZmN2Y2Njtcbn0iLCIkY2F0ZWdvcnktYmctY29sb3IxOiAjNTBiNmQwXG4kY2F0ZWdvcnktYmctY29sb3IyOiAjZmU4ODZkXG5cbmFcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcblxuLmFydGljbGUtY29udGFpbmVyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bydcbiAgICB3aWR0aDogNTAlXG4gICAgbWFyZ2luLXRvcDogNSVcbiAgICBtYXJnaW4tbGVmdDogMzAlXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lXG5cbi5hcnRpY2xlLWNhdGVnb3J5LWZpcnN0XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhdGVnb3J5LWJnLWNvbG9yMVxuICAgIHdpZHRoOiAxMCVcbiAgICBwYWRkaW5nOiA0JVxuXG4uYXJ0aWNsZS1jYXRlZ29yeS1maXJzdDo6YmVmb3JlXG4gICAgY29udGVudDogXCJcXGYwMmJcIlxuICAgIG1hcmdpbi1yaWdodDogMTAlXG4gICAgbWFyZ2luLWxlZnQ6IDBcblxuICAgIC8vIFwiXFxmMDczXCJcbi5hcnRpY2xlLWNhdGVnb3J5LXNlY29uZFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXRlZ29yeS1iZy1jb2xvcjJcbiAgICB3aWR0aDogMTAlXG4gICAgcGFkZGluZzogNCVcblxuLmFydGljbGUtY2F0ZWdvcnktc2Vjb25kOjpiZWZvcmVcbiAgICBjb250ZW50OiBcIlxcZjAyYlwiXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCVcbiAgICBtYXJnaW4tbGVmdDogMFxuXG4uYXJ0aWNsZS1jYXRlZ29yeS1maXJzdCBhXG4gICAgY29sb3I6ICNmZmZmZmZcblxuLmFydGljbGUtY2F0ZWdvcnktc2Vjb25kIGFcbiAgICBjb2xvcjogI2ZmZmZmZlxuXG4uYXJ0aWNsZS1jYXRlZ29yeTo6YmVmb3JlXG4gICAgY29udGVudDogXCJcIlxuICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgYm9yZGVyLWxlZnQ6IDYwcHggc29saWQgIzUwYjZkMFxuXG4uYXJ0aWNsZS10aXRsZVxuICAgIGZvbnQtd2VpZ2h0OiA5MDBcbiAgICBwYWRkaW5nLWxlZnQ6IDMlXG5cbi5hcnRpY2xlLXRpdGxlIGFcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbiAgICBjb2xvcjogIzAwMDAwMFxuXG4uYXJ0aWNsZS1tZXRhXG4gICAgcGFkZGluZy1sZWZ0OiAzJVxuXG4ucG9zdGVkQnktaWNvbjo6YmVmb3JlXG4gICAgY29udGVudDogXCJcXGYwMDdcIlxuICAgIG1hcmdpbi1yaWdodDogMiVcblxuLnBvc3RlZEJ5LXNwYW5cbiAgICBjb2xvcjogIzlkOWQ5ZFxuICAgIG1hcmdpbi1yaWdodDogMiVcblxuLnBvc3RlZEJ5LXNwYW4gYVxuICAgIGNvbG9yOiAjOWQ5ZDlkXG5cbi5wb3N0ZWREYXRlLWljb246OmJlZm9yZVxuICAgIGNvbnRlbnQ6IFwiXFxmMDczXCJcbiAgICBtYXJnaW4tcmlnaHQ6IDIlXG5cbi5wb3N0ZWREYXRlLXNwYW5cbiAgICBjb2xvcjogIzlkOWQ5ZFxuICAgIG1hcmdpbi1yaWdodDogMiVcblxuLnBvc3RlZERhdGUtc3BhbiBhXG4gICAgY29sb3I6ICM5ZDlkOWRcbiAgICBcbi5hcnRpY2xlLWNvbnRlbnRcbiAgICBtYXJnaW4tdG9wOiA1JVxuICAgIGxpbmUtaGVpZ2h0OiAyXG4gICAgcGFkZGluZy1sZWZ0OiAzJVxuICAgIHBhZGRpbmctcmlnaHQ6IDMlXG5cbi5tb3JldGFnIGFcbiAgICBjb2xvcjogI2ZmN2Y2NiJdfQ== */");

/***/ }),

/***/ "./src/app/home/article-list-element/article-list-element.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/article-list-element/article-list-element.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ArticleListElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListElementComponent", function() { return ArticleListElementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArticleListElementComponent = class ArticleListElementComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArticleListElementComponent.prototype, "article", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArticleListElementComponent.prototype, "orderNumber", void 0);
ArticleListElementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article-list-element',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./article-list-element.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/article-list-element/article-list-element.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./article-list-element.component.sass */ "./src/app/home/article-list-element/article-list-element.component.sass")).default]
    })
], ArticleListElementComponent);



/***/ }),

/***/ "./src/app/home/article-list/article-list.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/home/article-list/article-list.component.sass ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".article-pages {\n  margin-left: 27%;\n  margin-top: 3%;\n}\n\nul#page li {\n  display: inline;\n  margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29udXIvUHJvamVjdHMvYW5ndWxhci9vbnVya2FyYWR1bWFuLmNvbS9vbnVya2FyYWR1bWFuY29tLWFuZ3VsYXIvc3JjL2FwcC9ob21lL2FydGljbGUtbGlzdC9hcnRpY2xlLWxpc3QuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2hvbWUvYXJ0aWNsZS1saXN0L2FydGljbGUtbGlzdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREFBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXJ0aWNsZS1saXN0L2FydGljbGUtbGlzdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnRpY2xlLXBhZ2VzXG4gICAgbWFyZ2luLWxlZnQ6IDI3JVxuICAgIG1hcmdpbi10b3A6IDMlXG51bCNwYWdlIGxpXG4gIGRpc3BsYXk6IGlubGluZVxuICBtYXJnaW4tbGVmdDogMiVcbiAgICAiLCIuYXJ0aWNsZS1wYWdlcyB7XG4gIG1hcmdpbi1sZWZ0OiAyNyU7XG4gIG1hcmdpbi10b3A6IDMlO1xufVxuXG51bCNwYWdlIGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tbGVmdDogMiU7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/article-list/article-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/article-list/article-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/article.service */ "./src/app/core/services/article.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ArticleListComponent = class ArticleListComponent {
    constructor(articleService, activatedRoute) {
        this.articleService = articleService;
        this.activatedRoute = activatedRoute;
        this.pageList = [];
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.currentPage = params["pageId"];
            this.updateActiveArticles();
        });
    }
    ngOnChanges() {
        if (this.articles) {
            let totalPage = this.articles.length / this.articlePerPage;
            for (let index = 1; index <= totalPage; index++) {
                this.pageList.push(index);
            }
            this.updateActiveArticles();
            this.updateActiveArticlesContent();
        }
    }
    updateActiveArticles() {
        if (this.articles) {
            if (this.currentPage) {
                this.activeArticles = this.articles.slice((this.currentPage - 1) * this.articlePerPage, this.currentPage * this.articlePerPage);
            }
            else {
                this.activeArticles = this.articles.slice(0, this.articlePerPage);
            }
        }
    }
    updateActiveArticlesContent() {
        for (let index = 0; index < this.activeArticles.length; index++) {
            let article = this.articles[index];
            this.articleService.getArticleContent(article.fileName, article.category).subscribe(content => {
                article.content = content.toString().slice(0, article.summaryCharacters);
            });
        }
        this.cleanUpNonDisplayedArticlesContent();
    }
    cleanUpNonDisplayedArticlesContent() {
        for (let index = 0; index < this.articles.length; index++) {
            let article = this.articles[index];
            if (!this.activeArticles.includes(article)) {
                article.content = "";
            }
        }
    }
};
ArticleListComponent.ctorParameters = () => [
    { type: src_app_core_services_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArticleListComponent.prototype, "articles", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArticleListComponent.prototype, "articlePerPage", void 0);
ArticleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./article-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/article-list/article-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./article-list.component.sass */ "./src/app/home/article-list/article-list.component.sass")).default]
    })
], ArticleListComponent);



/***/ }),

/***/ "./src/app/home/home-routing-module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing-module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home/home.component.ts");




const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'filter',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'home/page/:pageId',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing-module */ "./src/app/home/home-routing-module.ts");
/* harmony import */ var _article_list_element_article_list_element_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article-list-element/article-list-element.component */ "./src/app/home/article-list-element/article-list-element.component.ts");
/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article-list/article-list.component */ "./src/app/home/article-list/article-list.component.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");








let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _article_list_element_article_list_element_component__WEBPACK_IMPORTED_MODULE_5__["ArticleListElementComponent"], _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_6__["ArticleListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"].forRoot()
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/home/home/home.component.sass":
/*!***********************************************!*\
  !*** ./src/app/home/home/home.component.sass ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home-container {\n  margin-right: auto;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29udXIvUHJvamVjdHMvYW5ndWxhci9vbnVya2FyYWR1bWFuLmNvbS9vbnVya2FyYWR1bWFuY29tLWFuZ3VsYXIvc3JjL2FwcC9ob21lL2hvbWUvaG9tZS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUvaG9tZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWNvbnRhaW5lclxuICAgIG1hcmdpbi1yaWdodDogYXV0b1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvIiwiLmhvbWUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/article.service */ "./src/app/core/services/article.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_blogconfig_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/blogconfig.service */ "./src/app/core/services/blogconfig.service.ts");





let HomeComponent = class HomeComponent {
    constructor(articleService, blogConfigService, activatedRoute) {
        this.articleService = articleService;
        this.blogConfigService = blogConfigService;
        this.activatedRoute = activatedRoute;
        this.filter = new Map();
    }
    ngOnInit() {
        let params = this.activatedRoute.snapshot.queryParams;
        if (params) {
            let key = Object.keys(params)[0];
            let value = params[key];
            this.filter.set(key, value);
        }
        this.initArticlePerPage();
        this.initArticles();
    }
    initArticlePerPage() {
        this.blogConfigService.getBlogConfig().subscribe(config => {
            this.articlePerPage = config.articleConfig.articlePerPage;
        });
    }
    initArticles() {
        this.articleService.getArticleList().subscribe(articles => {
            if (this.filter.size) {
                let filteredArticles = articles;
                for (let [key, value] of this.filter) {
                    filteredArticles = filteredArticles.filter(a => a[key] === value);
                }
                this.articles = filteredArticles;
            }
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_core_services_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] },
    { type: src_app_core_services_blogconfig_service__WEBPACK_IMPORTED_MODULE_4__["BlogconfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.sass */ "./src/app/home/home/home.component.sass")).default]
    })
], HomeComponent);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map