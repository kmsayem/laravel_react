(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/react/src/App/Admin/Dashboard/index.js":
/*!**********************************************************!*\
  !*** ./resources/react/src/App/Admin/Dashboard/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _settings_basicStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/settings/basicStyle */ "./resources/react/src/settings/basicStyle.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api */ "./resources/react/src/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _api__WEBPACK_IMPORTED_MODULE_3__["default"].get(_api__WEBPACK_IMPORTED_MODULE_3__["endpoints"].user).then(function (res) {
        console.log(res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var rowStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_2__["default"].rowStyle,
          colStyle = _settings_basicStyle__WEBPACK_IMPORTED_MODULE_2__["default"].colStyle;
      var wisgetPageStyle = {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'flex-start',
        overflow: 'hidden'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: wisgetPageStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        style: rowStyle,
        gutter: 0,
        justify: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 16,
        md: 12,
        sm: 24,
        xs: 24,
        style: colStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Dashboard"))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/react/src/App/components/feedback/notification.js":
/*!*********************************************************************!*\
  !*** ./resources/react/src/App/components/feedback/notification.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_0__["notification"]);

/***/ }),

/***/ "./resources/react/src/App/components/notification.js":
/*!************************************************************!*\
  !*** ./resources/react/src/App/components/notification.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feedback_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback/notification */ "./resources/react/src/App/components/feedback/notification.js");


var createNotification = function createNotification(type, message, description) {
  _feedback_notification__WEBPACK_IMPORTED_MODULE_0__["default"][type]({
    message: message,
    description: description
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createNotification);

/***/ }),

/***/ "./resources/react/src/api/Api.js":
/*!****************************************!*\
  !*** ./resources/react/src/api/Api.js ***!
  \****************************************/
/*! exports provided: default, cancelTokenSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelTokenSource", function() { return cancelTokenSource; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_components_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/App/components/notification */ "./resources/react/src/App/components/notification.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ "./resources/react/src/redux/store.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import authActions from "redux/auth/actions";
// import { isObject } from "../lib";

var cancelTokenSource = axios__WEBPACK_IMPORTED_MODULE_1___default.a.CancelToken.source();
var isAlreadyFetchingAccessToken = false;
var subscribers = [];
var instance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  // .. where we make our configurations
  baseURL: 'http://127.0.0.1:8000/api/'
});

var set_token = function set_token() {
  instance.defaults.headers.common["Authorization"] = "bearer ".concat(localStorage.getItem('id_token'));
};

set_token(); // Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common["Content-Type"] = "application/json";
// Also add/ configure interceptors && all the other cool stuff
// instance.interceptors.request...

instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  var config = error.config,
      _error$response = error.response,
      status = _error$response.status,
      data = _error$response.data;
  var originalRequest = config;

  if (status === 401) {
    if (data.detail === "Invalid Token") {
      localStorage.removeItem("auth");
      return window.location.href = "/login";
    } else if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true;
      var auth = JSON.parse(localStorage.getItem("auth"));
      var value = {
        token: auth.token
      };
      delete instance.defaults.headers.common["Authorization"];
      _redux_store__WEBPACK_IMPORTED_MODULE_3__["store"].dispatch(authActions.loginAction(value)).then(function (response) {
        isAlreadyFetchingAccessToken = false;
        var token = response.data.token;
        _redux_store__WEBPACK_IMPORTED_MODULE_3__["store"].dispatch(authActions.login(response.data));
        originalRequest.headers["Authorization"] = "bearer ".concat(response.data.token);
        onAccessTokenFetched(response);
      });
    }

    var retryOriginalRequest = new Promise(function (resolve) {
      addSubscriber(function (access_token) {
        resolve(axios__WEBPACK_IMPORTED_MODULE_1___default()(originalRequest));
      });
    });
    return retryOriginalRequest;
  } else {
    //if(status === 403)
    Promise.reject(_objectSpread({}, error))["catch"](function (error) {
      // let data = error.response.data;
      if (data.detail) {
        Object(_App_components_notification__WEBPACK_IMPORTED_MODULE_2__["default"])("error", data.detail);
      } else if (Array.isArray(data)) {
        Object(_App_components_notification__WEBPACK_IMPORTED_MODULE_2__["default"])("error", data[0]);
      } else if (isObject(data)) {
        Object.keys(data).map(function (key, index) {
          if (typeof data[key][0] == "string") {
            Object(_App_components_notification__WEBPACK_IMPORTED_MODULE_2__["default"])("error", data[key][0]);
          }

          Object.keys(data[key]).map(function (k, i) {
            if (_typeof(data[key][k]) == "object") {
              multipleNotification(data[key][k], status); // notification('error', `status: ${error.response.status}`, data[key][k][0]);
            }
          });
        });
      } else {
        var _error$response2 = error.response,
            _status = _error$response2.status,
            statusText = _error$response2.statusText;
        Object(_App_components_notification__WEBPACK_IMPORTED_MODULE_2__["default"])("error", "Something went wrong! Please notify us!");
      }
    });
  }

  return Promise.reject(_objectSpread({}, error));
});

var multipleNotification = function multipleNotification(data, status) {
  for (var index = 0; index < data.length; index++) {
    var element = data[index];

    if (typeof element == "string") {
      Object(_App_components_notification__WEBPACK_IMPORTED_MODULE_2__["default"])("error", element);
    }
  }
};

function onAccessTokenFetched(response) {
  subscribers = subscribers.filter(function (callback) {
    return callback(response);
  });
}

function addSubscriber(callback) {
  subscribers.push(callback);
}

/* harmony default export */ __webpack_exports__["default"] = (instance);


/***/ }),

/***/ "./resources/react/src/api/endpoint.js":
/*!*********************************************!*\
  !*** ./resources/react/src/api/endpoint.js ***!
  \*********************************************/
/*! exports provided: endpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
var endpoint = {
  auth: 'auth-token/',
  user: 'user/'
};

/***/ }),

/***/ "./resources/react/src/api/index.js":
/*!******************************************!*\
  !*** ./resources/react/src/api/index.js ***!
  \******************************************/
/*! exports provided: default, endpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoints", function() { return endpoints; });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/react/src/api/Api.js");
/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpoint */ "./resources/react/src/api/endpoint.js");


/* harmony default export */ __webpack_exports__["default"] = (_Api__WEBPACK_IMPORTED_MODULE_0__["default"]);
var endpoints = _endpoint__WEBPACK_IMPORTED_MODULE_1__["endpoint"];

/***/ }),

/***/ "./resources/react/src/settings/basicStyle.js":
/*!****************************************************!*\
  !*** ./resources/react/src/settings/basicStyle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var rowStyle = {
  width: '100%',
  display: 'flex',
  flexFlow: 'row wrap'
};
var colStyle = {
  marginBottom: '16px'
};
var gutter = 16;
var basicStyle = {
  rowStyle: rowStyle,
  colStyle: colStyle,
  gutter: gutter
};
/* harmony default export */ __webpack_exports__["default"] = (basicStyle);

/***/ })

}]);