webpackHotUpdate("static\\development\\pages\\doc\\[id]\\[chapter].js",{

/***/ "./pages/doc/[id]/[chapter].js":
/*!*************************************!*\
  !*** ./pages/doc/[id]/[chapter].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chapter; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_12__);














var Chapter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Chapter, _React$Component);

  function Chapter(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Chapter);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Chapter).call(this, props));
    _this.state = {
      prechap: '',
      nextchap: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Chapter, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.props.novelchapter !== prevProps.novelchapter) {
        fetch("http://3.1.203.88:8001/novel?id=".concat(this.props.novelchapter.idnovels)).then(function (r) {
          return r.json();
        }).then(function (data) {
          if (data.chapterlist.length === 1) {
            _this2.state({
              prechap: '',
              nextchap: ''
            });
          } else {
            for (var i = 0; i < data.chapterlist.length; i++) {
              if (_this2.props.novelchapter.idchapter === data.chapterlist[i].idchapter) {
                if (i === 0) {
                  _this2.setState({
                    prechap: '',
                    nextchap: data.chapterlist[i + 1].idchapter
                  }); // return { novelchapter: json, prechap: '', nextchap: json1.chapterlist[i + 1].idchapter }

                }

                if (i > 0 && i < data.chapterlist.length - 1) {
                  _this2.setState({
                    prechap: data.chapterlist[i - 1].idchapter,
                    nextchap: data.chapterlist[i + 1].idchapter
                  }); // return { novelchapter: json, prechap: json1.chapterlist[i - 1].idchapter, nextchap: json1.chapterlist[i + 1].idchapter }

                }

                if (i === data.chapterlist.length - 1) {
                  _this2.setState({
                    prechap: data.chapterlist[i - 1].idchapter,
                    nextchap: ''
                  }); // return { novelchapter: json, prechap: json1.chapterlist[i - 1].idchapter, nextchap: '' }

                }
              }
            }
          }
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      fetch("http://3.1.203.88:8001/novel?id=".concat(this.props.novelchapter.idnovels)).then(function (r) {
        return r.json();
      }).then(function (data) {
        if (data.chapterlist.length === 1) {
          _this3.state({
            prechap: '',
            nextchap: ''
          });
        } else {
          for (var i = 0; i < data.chapterlist.length; i++) {
            if (_this3.props.novelchapter.idchapter === data.chapterlist[i].idchapter) {
              if (i === 0) {
                _this3.setState({
                  prechap: '',
                  nextchap: data.chapterlist[i + 1].idchapter
                }); // return { novelchapter: json, prechap: '', nextchap: json1.chapterlist[i + 1].idchapter }

              }

              if (i > 0 && i < data.chapterlist.length - 1) {
                _this3.setState({
                  prechap: data.chapterlist[i - 1].idchapter,
                  nextchap: data.chapterlist[i + 1].idchapter
                }); // return { novelchapter: json, prechap: json1.chapterlist[i - 1].idchapter, nextchap: json1.chapterlist[i + 1].idchapter }

              }

              if (i === data.chapterlist.length - 1) {
                _this3.setState({
                  prechap: data.chapterlist[i - 1].idchapter,
                  nextchap: ''
                }); // return { novelchapter: json, prechap: json1.chapterlist[i - 1].idchapter, nextchap: '' }

              }
            }
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props);
      console.log(this.state);
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_12__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("title", null, "\u0110\u1ECDc ".concat(this.props.novelchapter.chaptername), " - YYtruyen"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        name: "description",
        content: "\u0110\u1ECDc truy\u1EC7n ".concat(this.props.novelchapter.chaptername, " online free t\u1EA1i yytruyen.com, c\u1EADp nh\u1EADt c\xE1c ch\u01B0\u01A1ng m\u1EDBi nh\u1EA5t c\u1EE7a truy\u1EC7n n\xE0y t\u1EA1i \u0111\xE2y nh\xE9")
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        name: "theme-color",
        content: "#008f68"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        name: "keywords",
        content: "\u0111\u1ECDc truy\u1EC7n online, truy\u1EC7n online, truy\u1EC7n ng\xF4n t\xECnh, truy\u1EC7n ki\u1EBFm hi\u1EC7p, truy\u1EC7n ng\u01B0\u1EE3c, s\u1EE7ng"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "breadcrumb breadcrumbs breadcrumbs_doc"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "rdfa-breadcrumb"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "breadcrumbs-title"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "home",
        title: "\u0110\u1ECDc truy\u1EC7n online"
      }, "\u0110\u1ECDc truy\u1EC7n online"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "separator"
      }, "\xBB"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        as: "/truyen/".concat(this.props.novelchapter.idnovels),
        href: "/truyen/[id]"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "home"
      }, this.props.novelchapter.novelsname))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "separator"
      }, "\xBB"), " ", this.props.novelchapter.chaptername)))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "menu_doc",
        style: {
          flexDirection: 'row',
          padding: 10
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        as: "/truyen/".concat(this.props.novelchapter.idnovels),
        href: "/truyen?id=".concat(this.props.novelchapter.idnovels)
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        style: {
          color: 'white'
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        color: "primary",
        style: {
          margin: 5
        }
      }, "Danh s\xE1ch ch\u01B0\u01A1ng"))), this.state.prechap !== "" && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a // className="btn_theodoi btn_doc"
      , {
        as: "/doc/".concat(this.props.novelchapter.idnovels, "/").concat(this.state.prechap),
        href: "/doc/[id]/[chapter]"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        rel: "nofollow",
        style: {
          color: 'white'
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        style: {
          margin: 5
        }
      }, "Ch\u01B0\u01A1ng tr\u01B0\u1EDBc"))), this.state.nextchap !== "" && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a // className="btn_theodoi btn_doc"
      , {
        as: "/doc/".concat(this.props.novelchapter.idnovels, "/").concat(this.state.nextchap),
        href: "/doc/[id]/[chapter]"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        rel: "nofollow",
        style: {
          color: 'white'
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        color: "primary",
        style: {
          margin: 5
        }
      }, "Ch\u01B0\u01A1ng sau")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "hentry"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        className: "name_chapter entry-title"
      }, this.props.novelchapter.chaptername), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "entry-content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "vung_doc",
        className: "vung_doc"
      }, this.props.novelchapter.content !== undefined ? react_html_parser__WEBPACK_IMPORTED_MODULE_11___default()(this.props.novelchapter.content) : null)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "menu_doc",
        style: {
          flexDirection: 'row',
          padding: 10
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        as: "/truyen/".concat(this.props.novelchapter.idnovels),
        href: "/truyen/[id]"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        style: {
          color: 'white'
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        color: "primary",
        style: {
          margin: 5
        }
      }, "Danh s\xE1ch ch\u01B0\u01A1ng"))), this.state.prechap !== "" && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a // className="btn_theodoi btn_doc"
      , {
        as: "/doc/".concat(this.props.novelchapter.idnovels, "/").concat(this.state.prechap),
        href: "/doc/[id]/[chapter]"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        rel: "nofollow",
        style: {
          color: 'white'
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        color: "primary",
        style: {
          margin: 5
        }
      }, "Ch\u01B0\u01A1ng tr\u01B0\u1EDBc"))), this.state.nextchap !== "" && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a // className="btn_theodoi btn_doc"
      , {
        as: "/doc/".concat(this.props.novelchapter.idnovels, "/").concat(this.state.nextchap),
        href: "/doc/[id]/[chapter]"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        rel: "nofollow",
        style: {
          color: 'white'
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        color: "primary",
        style: {
          margin: 5
        }
      }, "Ch\u01B0\u01A1ng sau"))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var _context$query, id, chapter, res, json;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // eslint-disable-next-line no-undef
                _context$query = context.query, id = _context$query.id, chapter = _context$query.chapter;
                _context.next = 3;
                return fetch("http://3.1.203.88:8001/chapter?novelid=".concat(id, "&chapterid=").concat(chapter));

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                json = _context.sent;
                return _context.abrupt("return", {
                  novelchapter: json
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Chapter;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=[chapter].js.a4742cf414b9ab6cc636.hot-update.js.map