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
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\na {\n  text-decoration: none;\n}\n.article-container {\n  background-color: #fff;\n  font-family: \"Lato\";\n  width: 50%;\n  margin-top: 5%;\n  margin-left: 30%;\n  font: normal normal normal 14px/1 FontAwesome;\n}\n.article-category-first {\n  background-color: #50b6d0;\n  width: 10%;\n  padding: 4%;\n}\n.article-category-first::before {\n  content: \"\";\n  margin-right: 10%;\n  margin-left: 0;\n}\n.article-category-second {\n  background-color: #fe886d;\n  width: 10%;\n  padding: 4%;\n}\n.article-category-second::before {\n  content: \"\";\n  margin-right: 10%;\n  margin-left: 0;\n}\n.article-category-first a {\n  color: #ffffff;\n}\n.article-category-second a {\n  color: #ffffff;\n}\n.article-category::before {\n  content: \"\";\n  display: block;\n  border-left: 60px solid #50b6d0;\n}\n.article-title {\n  font-weight: 900;\n  padding-left: 3%;\n}\n.article-title a {\n  text-decoration: none;\n  color: #000000;\n}\n.article-meta {\n  padding-left: 3%;\n}\n.postedBy-icon::before {\n  content: \"\";\n  margin-right: 2%;\n}\n.postedBy-span {\n  color: #9d9d9d;\n  margin-right: 2%;\n}\n.postedBy-span a {\n  color: #9d9d9d;\n}\n.postedDate-icon::before {\n  content: \"\";\n  margin-right: 2%;\n}\n.postedDate-span {\n  color: #9d9d9d;\n  margin-right: 2%;\n}\n.postedDate-span a {\n  color: #9d9d9d;\n}\n.article-content {\n  margin-top: 5%;\n  line-height: 2;\n  padding-left: 3%;\n  padding-right: 3%;\n}\n.moretag a {\n  color: #ff7f66;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hcnRpY2xlLWxpc3QtZWxlbWVudC9hcnRpY2xlLWxpc3QtZWxlbWVudC5jb21wb25lbnQuc2FzcyIsIi9ob21lL29udXIvUHJvamVjdHMvYW5ndWxhci9vbnVya2FyYWR1bWFuLmNvbS9zcmMvYXBwL2hvbWUvYXJ0aWNsZS1saXN0LWVsZW1lbnQvYXJ0aWNsZS1saXN0LWVsZW1lbnQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR2hCO0VBQ0kscUJBQUE7QURESjtBQ0dBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtBREFKO0FDRUE7RUFDSSx5QkFmaUI7RUFnQmpCLFVBQUE7RUFDQSxXQUFBO0FEQ0o7QUNDQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURFSjtBQ0NBO0VBQ0kseUJBekJpQjtFQTBCakIsVUFBQTtFQUNBLFdBQUE7QURFSjtBQ0FBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBREdKO0FDREE7RUFDSSxjQUFBO0FESUo7QUNGQTtFQUNJLGNBQUE7QURLSjtBQ0hBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBRE1KO0FDSkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FET0o7QUNMQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBRFFKO0FDTkE7RUFDSSxnQkFBQTtBRFNKO0FDUEE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QURVSjtBQ1JBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FEV0o7QUNUQTtFQUNJLGNBQUE7QURZSjtBQ1ZBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FEYUo7QUNYQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBRGNKO0FDWkE7RUFDSSxjQUFBO0FEZUo7QUNiQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRGdCSjtBQ2RBO0VBQ0ksY0FBQTtBRGlCSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXJ0aWNsZS1saXN0LWVsZW1lbnQvYXJ0aWNsZS1saXN0LWVsZW1lbnQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYXJ0aWNsZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XG59XG5cbi5hcnRpY2xlLWNhdGVnb3J5LWZpcnN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwYjZkMDtcbiAgd2lkdGg6IDEwJTtcbiAgcGFkZGluZzogNCU7XG59XG5cbi5hcnRpY2xlLWNhdGVnb3J5LWZpcnN0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+Aq1wiO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5hcnRpY2xlLWNhdGVnb3J5LXNlY29uZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTg4NmQ7XG4gIHdpZHRoOiAxMCU7XG4gIHBhZGRpbmc6IDQlO1xufVxuXG4uYXJ0aWNsZS1jYXRlZ29yeS1zZWNvbmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74CrXCI7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmFydGljbGUtY2F0ZWdvcnktZmlyc3QgYSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYXJ0aWNsZS1jYXRlZ29yeS1zZWNvbmQgYSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYXJ0aWNsZS1jYXRlZ29yeTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1sZWZ0OiA2MHB4IHNvbGlkICM1MGI2ZDA7XG59XG5cbi5hcnRpY2xlLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgcGFkZGluZy1sZWZ0OiAzJTtcbn1cblxuLmFydGljbGUtdGl0bGUgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5hcnRpY2xlLW1ldGEge1xuICBwYWRkaW5nLWxlZnQ6IDMlO1xufVxuXG4ucG9zdGVkQnktaWNvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgIdcIjtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cblxuLnBvc3RlZEJ5LXNwYW4ge1xuICBjb2xvcjogIzlkOWQ5ZDtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cblxuLnBvc3RlZEJ5LXNwYW4gYSB7XG4gIGNvbG9yOiAjOWQ5ZDlkO1xufVxuXG4ucG9zdGVkRGF0ZS1pY29uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+Bs1wiO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xufVxuXG4ucG9zdGVkRGF0ZS1zcGFuIHtcbiAgY29sb3I6ICM5ZDlkOWQ7XG4gIG1hcmdpbi1yaWdodDogMiU7XG59XG5cbi5wb3N0ZWREYXRlLXNwYW4gYSB7XG4gIGNvbG9yOiAjOWQ5ZDlkO1xufVxuXG4uYXJ0aWNsZS1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBwYWRkaW5nLWxlZnQ6IDMlO1xuICBwYWRkaW5nLXJpZ2h0OiAzJTtcbn1cblxuLm1vcmV0YWcgYSB7XG4gIGNvbG9yOiAjZmY3ZjY2O1xufSIsIiRjYXRlZ29yeS1iZy1jb2xvcjE6ICM1MGI2ZDBcbiRjYXRlZ29yeS1iZy1jb2xvcjI6ICNmZTg4NmRcblxuYVxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxuXG4uYXJ0aWNsZS1jb250YWluZXJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJ1xuICAgIHdpZHRoOiA1MCVcbiAgICBtYXJnaW4tdG9wOiA1JVxuICAgIG1hcmdpbi1sZWZ0OiAzMCVcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWVcblxuLmFydGljbGUtY2F0ZWdvcnktZmlyc3RcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2F0ZWdvcnktYmctY29sb3IxXG4gICAgd2lkdGg6IDEwJVxuICAgIHBhZGRpbmc6IDQlXG5cbi5hcnRpY2xlLWNhdGVnb3J5LWZpcnN0OjpiZWZvcmVcbiAgICBjb250ZW50OiBcIlxcZjAyYlwiXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCVcbiAgICBtYXJnaW4tbGVmdDogMFxuXG4gICAgLy8gXCJcXGYwNzNcIlxuLmFydGljbGUtY2F0ZWdvcnktc2Vjb25kXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhdGVnb3J5LWJnLWNvbG9yMlxuICAgIHdpZHRoOiAxMCVcbiAgICBwYWRkaW5nOiA0JVxuXG4uYXJ0aWNsZS1jYXRlZ29yeS1zZWNvbmQ6OmJlZm9yZVxuICAgIGNvbnRlbnQ6IFwiXFxmMDJiXCJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJVxuICAgIG1hcmdpbi1sZWZ0OiAwXG5cbi5hcnRpY2xlLWNhdGVnb3J5LWZpcnN0IGFcbiAgICBjb2xvcjogI2ZmZmZmZlxuXG4uYXJ0aWNsZS1jYXRlZ29yeS1zZWNvbmQgYVxuICAgIGNvbG9yOiAjZmZmZmZmXG5cbi5hcnRpY2xlLWNhdGVnb3J5OjpiZWZvcmVcbiAgICBjb250ZW50OiBcIlwiXG4gICAgZGlzcGxheTogYmxvY2tcbiAgICBib3JkZXItbGVmdDogNjBweCBzb2xpZCAjNTBiNmQwXG5cbi5hcnRpY2xlLXRpdGxlXG4gICAgZm9udC13ZWlnaHQ6IDkwMFxuICAgIHBhZGRpbmctbGVmdDogMyVcblxuLmFydGljbGUtdGl0bGUgYVxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxuICAgIGNvbG9yOiAjMDAwMDAwXG5cbi5hcnRpY2xlLW1ldGFcbiAgICBwYWRkaW5nLWxlZnQ6IDMlXG5cbi5wb3N0ZWRCeS1pY29uOjpiZWZvcmVcbiAgICBjb250ZW50OiBcIlxcZjAwN1wiXG4gICAgbWFyZ2luLXJpZ2h0OiAyJVxuXG4ucG9zdGVkQnktc3BhblxuICAgIGNvbG9yOiAjOWQ5ZDlkXG4gICAgbWFyZ2luLXJpZ2h0OiAyJVxuXG4ucG9zdGVkQnktc3BhbiBhXG4gICAgY29sb3I6ICM5ZDlkOWRcblxuLnBvc3RlZERhdGUtaWNvbjo6YmVmb3JlXG4gICAgY29udGVudDogXCJcXGYwNzNcIlxuICAgIG1hcmdpbi1yaWdodDogMiVcblxuLnBvc3RlZERhdGUtc3BhblxuICAgIGNvbG9yOiAjOWQ5ZDlkXG4gICAgbWFyZ2luLXJpZ2h0OiAyJVxuXG4ucG9zdGVkRGF0ZS1zcGFuIGFcbiAgICBjb2xvcjogIzlkOWQ5ZFxuICAgIFxuLmFydGljbGUtY29udGVudFxuICAgIG1hcmdpbi10b3A6IDUlXG4gICAgbGluZS1oZWlnaHQ6IDJcbiAgICBwYWRkaW5nLWxlZnQ6IDMlXG4gICAgcGFkZGluZy1yaWdodDogMyVcblxuLm1vcmV0YWcgYVxuICAgIGNvbG9yOiAjZmY3ZjY2Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".article-pages {\n  margin-left: 27%;\n  margin-top: 3%;\n}\n\nul#page li {\n  display: inline;\n  margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29udXIvUHJvamVjdHMvYW5ndWxhci9vbnVya2FyYWR1bWFuLmNvbS9zcmMvYXBwL2hvbWUvYXJ0aWNsZS1saXN0L2FydGljbGUtbGlzdC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvaG9tZS9hcnRpY2xlLWxpc3QvYXJ0aWNsZS1saXN0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hcnRpY2xlLWxpc3QvYXJ0aWNsZS1saXN0LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydGljbGUtcGFnZXNcbiAgICBtYXJnaW4tbGVmdDogMjclXG4gICAgbWFyZ2luLXRvcDogMyVcbnVsI3BhZ2UgbGlcbiAgZGlzcGxheTogaW5saW5lXG4gIG1hcmdpbi1sZWZ0OiAyJVxuICAgICIsIi5hcnRpY2xlLXBhZ2VzIHtcbiAgbWFyZ2luLWxlZnQ6IDI3JTtcbiAgbWFyZ2luLXRvcDogMyU7XG59XG5cbnVsI3BhZ2UgbGkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn0iXX0= */");

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
        this.DEFAULT_SUMMARY_CHARS = 500;
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
                let summaryChars = this.DEFAULT_SUMMARY_CHARS;
                if (article.summaryCharacters) {
                    summaryChars = article.summaryCharacters;
                }
                article.content = content.toString().slice(0, summaryChars);
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
/* harmony default export */ __webpack_exports__["default"] = (".home-container {\n  margin-right: auto;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29udXIvUHJvamVjdHMvYW5ndWxhci9vbnVya2FyYWR1bWFuLmNvbS9zcmMvYXBwL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9ob21lL2hvbWUvaG9tZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtY29udGFpbmVyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8iLCIuaG9tZS1jb250YWluZXIge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSJdfQ== */");

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
            let filteredArticles = articles;
            for (let [key, value] of this.filter) {
                filteredArticles = filteredArticles.filter(a => a[key] === value);
            }
            filteredArticles.sort((a, b) => {
                let date1 = new Date(a.date);
                let date2 = new Date(b.date);
                // sort by desc
                return date2.getTime() - date1.getTime();
            });
            this.articles = filteredArticles;
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