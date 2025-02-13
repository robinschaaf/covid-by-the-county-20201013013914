(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/@ionic-super-tabs/core/dist/esm/utils-640d2cf5.js":
    /*!************************************************************************!*\
      !*** ./node_modules/@ionic-super-tabs/core/dist/esm/utils-640d2cf5.js ***!
      \************************************************************************/

    /*! exports provided: D, a, c, d, g, p, s */

    /***/
    function node_modulesIonicSuperTabsCoreDistEsmUtils640d2cf5Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "D", function () {
        return DEFAULT_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return getTs;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return checkGesture;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return debugLog;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getNormalizedScrollX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p", function () {
        return pointerCoord;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return scrollEl;
      });

      var DEFAULT_CONFIG = {
        dragThreshold: 20,
        allowElementScroll: false,
        maxDragAngle: 40,
        sideMenuThreshold: 50,
        transitionDuration: 150,
        shortSwipeDuration: 300,
        debug: false,
        avoidElements: false
      };

      function pointerCoord(ev) {
        // get X coordinates for either a mouse click
        // or a touch depending on the given event
        if (ev) {
          var changedTouches = ev.changedTouches;

          if (changedTouches && changedTouches.length > 0) {
            var touch = changedTouches[0];
            return {
              x: touch.clientX,
              y: touch.clientY
            };
          }

          if (ev.pageX !== undefined) {
            return {
              x: ev.pageX,
              y: ev.pageY
            };
          }
        }

        return {
          x: 0,
          y: 0
        };
      }

      var nativeScrollAvailable = ('scrollBehavior' in document.documentElement.style);

      var _getTs;

      if (window.performance && window.performance.now) {
        _getTs = window.performance.now.bind(window.performance);
      } else {
        _getTs = Date.now.bind(Date);
      }

      var getTs = _getTs;

      var easeInOutCubic = function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      function getScrollCoord(start, dest, startTime, currentTime, duration) {
        var time = Math.min(1, (currentTime - startTime) / duration);
        var timeFn = easeInOutCubic(time);
        return Math.ceil(timeFn * (dest - start) + start);
      }

      function scroll(el, startX, x, y, startTime, duration) {
        var currentTime = getTs();
        var scrollX = startX === x ? x : getScrollCoord(startX, x, startTime, currentTime, duration);
        el.scrollTo(scrollX, y);

        if (currentTime - startTime >= duration) {
          return;
        }

        requestAnimationFrame(function () {
          scroll(el, startX, x, y, startTime, duration);
        });
      }

      var scrollEl = function scrollEl(el, x) {
        var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        var _native = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        var duration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 300;

        if (duration <= 0) {
          requestAnimationFrame(function () {
            el.scrollTo(x, y);
          });
          return;
        }

        if (_native && nativeScrollAvailable) {
          el.scrollTo({
            left: x,
            top: y,
            behavior: 'smooth'
          });
          return;
        }

        requestAnimationFrame(function () {
          scroll(el, el.scrollLeft, x, y, getTs(), duration);
        });
      };

      function checkGesture(newCoords, initialCoords, config) {
        if (!initialCoords) {
          return false;
        }

        var radians = config.maxDragAngle * (Math.PI / 180);
        var maxCosine = Math.cos(radians);
        var deltaX = newCoords.x - initialCoords.x;
        var deltaY = newCoords.y - initialCoords.y;
        var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance >= config.dragThreshold) {
          // swipe is long enough
          // lets check the angle
          var angle = Math.atan2(deltaY, deltaX);
          var cosine = Math.cos(angle);
          return Math.abs(cosine) > maxCosine;
        }

        return false;
      }

      function getNormalizedScrollX(el, width) {
        var delta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        return Math.max(0, Math.min(el.scrollWidth - width, el.scrollLeft + delta));
      }

      var debugStyle1 = 'background: linear-gradient(135deg,#4150b2,#f71947); border: 1px solid #9a9a9a; color: #ffffff; border-bottom-left-radius: 2px; border-top-left-radius: 2px; padding: 2px 0 2px 4px;';
      var debugStyle2 = 'background: #252b3e; border: 1px solid #9a9a9a; border-top-right-radius: 2px; border-bottom-right-radius: 2px; margin-left: -2px; padding: 2px 4px; color: white;';

      function debugLog(config, tag, vals) {
        var _console;

        if (!config || !config.debug) {
          return;
        } // Some gorgeous logging, because apparently I have lots of free time to style console logs and write this comment


        (_console = console).log.apply(_console, ["%csuper-tabs %c%s", debugStyle1, debugStyle2, ' '.repeat(10 - tag.length) + tag].concat(_toConsumableArray(vals)));
      }
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function node_modulesIonicCoreDistEsmButtonActive5da929d4Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-92848855.js */
      "./node_modules/@ionic/core/dist/esm/index-92848855.js");
      /* harmony import */


      var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-eea61379.js */
      "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
      /* harmony import */


      var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-7b8ba70a.js */
      "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context.abrupt("return", el);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function node_modulesIonicCoreDistEsmHaptic7b8ba70aJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm/theme-5641d27f.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function node_modulesIonicCoreDistEsmTheme5641d27fJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "./src/app/services/spinner-service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/spinner-service.ts ***!
      \*********************************************/

    /*! exports provided: SpinnerService */

    /***/
    function srcAppServicesSpinnerServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerService", function () {
        return SpinnerService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var SpinnerService = /*#__PURE__*/function () {
        function SpinnerService(loadingService) {
          var _this = this;

          _classCallCheck(this, SpinnerService);

          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Spinners';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'spinner/0',
              'title': 'Default Svg Icons',
              'theme': 'native'
            }, {
              'url': 'spinner/1',
              'title': 'Custom Svg Icons',
              'theme': 'custom'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForCustom = function () {
            return [{
              'icon': 'audio',
              'name': 'Audio'
            }, {
              'icon': 'ball-triangle',
              'name': 'Ball-triangle'
            }, {
              'icon': 'bars',
              'name': 'Bars'
            }, {
              'icon': 'grid',
              'name': 'Grid'
            }, {
              'icon': 'hearts',
              'name': 'Hearts'
            }, {
              'icon': 'oval',
              'name': 'Oval'
            }, {
              'icon': 'puff',
              'name': 'Puff'
            }, {
              'icon': 'three-dots',
              'name': 'Three-dots'
            }];
          }; //* Data Set for page 2


          this.getDataForNative = function () {
            return [{
              'icon': 'lines',
              'name': 'Lines'
            }, {
              'icon': 'lines-small',
              'name': 'Lines-small'
            }, {
              'icon': 'dots',
              'name': 'Dots'
            }, {
              'icon': 'bubbles',
              'name': 'Bubbles'
            }, {
              'icon': 'circles',
              'name': 'Circles'
            }];
          };
        }

        _createClass(SpinnerService, [{
          key: "load",
          value: function load(item) {
            var _this2 = this;

            this.loadingService.show();
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this2.loadingService.hide();

              observer.next(_this2.getDataForTheme(item));
              observer.complete();
            });
          }
        }]);

        return SpinnerService;
      }();

      SpinnerService.ctorParameters = function () {
        return [{
          type: _loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
        }];
      };

      SpinnerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]])], SpinnerService);
      /***/
    },

    /***/
    "./src/app/services/splash-screen-service.ts":
    /*!***************************************************!*\
      !*** ./src/app/services/splash-screen-service.ts ***!
      \***************************************************/

    /*! exports provided: SplashScreenService */

    /***/
    function srcAppServicesSplashScreenServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashScreenService", function () {
        return SplashScreenService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var SplashScreenService = /*#__PURE__*/function () {
        function SplashScreenService(loadingService) {
          var _this3 = this;

          _classCallCheck(this, SplashScreenService);

          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Splash screens';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'splash-screens/0',
              'title': 'Fade in + Ken Burns 1',
              'theme': 'layout1'
            }, {
              'url': 'splash-screens/1',
              'title': 'Down + fade in',
              'theme': 'layout2'
            }, {
              'url': 'splash-screens/2',
              'title': 'Down + Ken Burns',
              'theme': 'layout3'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this3['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'headerTitle': 'Fade in + Ken Burns 1',
              "duration": 10000,
              "backgroundImage": "assets/imgs/background/39.jpg",
              "logo": "assets/imgs/logo/2.png",
              "title": ""
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'headerTitle': 'Down + fade in + Ken Burns',
              "duration": 10000,
              "backgroundImage": "assets/imgs/background/28.jpg",
              "logo": "assets/imgs/logo/2.png",
              "title": "Welcome to the moon"
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'headerTitle': 'Down + Ken Burns',
              "duration": 10000,
              "backgroundImage": "assets/imgs/background/29.jpg",
              "logo": "assets/imgs/logo/2.png",
              "title": ""
            };
          };
        }

        _createClass(SplashScreenService, [{
          key: "load",
          value: function load(item) {
            var _this4 = this;

            this.loadingService.show();
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this4.loadingService.hide();

              observer.next(_this4.getDataForTheme(item));
              observer.complete();
            });
          }
        }]);

        return SplashScreenService;
      }();

      SplashScreenService.ctorParameters = function () {
        return [{
          type: _loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
        }];
      };

      SplashScreenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]])], SplashScreenService);
      /***/
    },

    /***/
    "./src/app/services/text-view-service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/text-view-service.ts ***!
      \***********************************************/

    /*! exports provided: TextViewService */

    /***/
    function srcAppServicesTextViewServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextViewService", function () {
        return TextViewService;
      });

      var TextViewService = /*#__PURE__*/function () {
        function TextViewService() {
          var _this5 = this;

          _classCallCheck(this, TextViewService);

          this.getId = function () {
            return 'textViews';
          };

          this.getTitle = function () {
            return 'Typo + small components';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'textview',
              'title': 'All',
              'theme': 'all'
            }];
          };

          this.getEventsForTheme = function (menuItem) {
            return {};
          };

          this.prepareParams = function (item) {
            return {
              title: _this5.getTitle(),
              data: [],
              events: _this5.getEventsForTheme(item)
            };
          };
        }

        _createClass(TextViewService, [{
          key: "load",
          value: function load(url) {
            return null;
          }
        }]);

        return TextViewService;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map