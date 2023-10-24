// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/script.js":[function(require,module,exports) {
'use strict';

// prettier-ignore
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var form = document.querySelector('.act-form');
var type = document.querySelector('.type');
var distance = document.querySelector('.distances');
var duration = document.querySelector('.duration');
var candence = document.querySelector('.candence');
var elevationGain = document.querySelector('.Elev');
var container = document.querySelector('.act-box');
var Workout = /*#__PURE__*/function () {
  function Workout(coords, distance, duration) {
    _classCallCheck(this, Workout);
    _defineProperty(this, "date", new Date());
    _defineProperty(this, "id", Date.now + ''.slice(-10));
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
  _createClass(Workout, [{
    key: "_getDescription",
    value: function _getDescription() {
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      this.description = "".concat(this.types[0].toUpperCase()).concat(this.types.slice(1), " on\n          ").concat(months[this.date.getMonth()], " ").concat(this.date.getDate());
    }
  }]);
  return Workout;
}();
;
var Running = /*#__PURE__*/function (_Workout) {
  _inherits(Running, _Workout);
  var _super = _createSuper(Running);
  function Running(coords, distance, duration, candence) {
    var _this;
    _classCallCheck(this, Running);
    _this = _super.call(this, coords, distance, duration);
    _defineProperty(_assertThisInitialized(_this), "types", 'running');
    _this.candence = candence;
    _this._getDescription();
    _this.calcPace();
    return _this;
  }
  _createClass(Running, [{
    key: "calcPace",
    value: function calcPace() {
      this.pace = (this.duration / this.distance).toFixed(1);
      return this.pace;
    }
  }]);
  return Running;
}(Workout);
;
var Cycling = /*#__PURE__*/function (_Workout2) {
  _inherits(Cycling, _Workout2);
  var _super2 = _createSuper(Cycling);
  function Cycling(coords, distance, duration, elevationGain) {
    var _this2;
    _classCallCheck(this, Cycling);
    _this2 = _super2.call(this, coords, distance, duration);
    _defineProperty(_assertThisInitialized(_this2), "types", 'cycling');
    _this2.elevationGain = elevationGain;
    _this2._getDescription();
    _this2.calcSpeed();
    return _this2;
  }
  _createClass(Cycling, [{
    key: "calcSpeed",
    value: function calcSpeed() {
      this.speed = (this.distance / (this.duration / 60)).toFixed(1);
      return this.speed;
    }
  }]);
  return Cycling;
}(Workout);
;

// Application architecture
var _map = /*#__PURE__*/new WeakMap();
var _mapZoomLevel = /*#__PURE__*/new WeakMap();
var _mapEvents = /*#__PURE__*/new WeakMap();
var _workouts = /*#__PURE__*/new WeakMap();
var _clicks = /*#__PURE__*/new WeakMap();
var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
    _classPrivateFieldInitSpec(this, _map, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _mapZoomLevel, {
      writable: true,
      value: 13
    });
    _classPrivateFieldInitSpec(this, _mapEvents, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _workouts, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _clicks, {
      writable: true,
      value: 0
    });
    this._getPosition();
    this._getLocalStorage();
    form.addEventListener('submit', this._newWorkout.bind(this));
    type.addEventListener('change', this._toggleElevation.bind(this));
    container.addEventListener('click', this._moveToPopUp.bind(this));
  }
  _createClass(App, [{
    key: "_getPosition",
    value: function _getPosition() {
      if (navigator.geolocation) navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
        alert("it couldn't access your location");
      });
    }
  }, {
    key: "_loadMap",
    value: function _loadMap(position) {
      var _this3 = this;
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var coord = [latitude, longitude];
      _classPrivateFieldSet(this, _map, L.map('map').setView(coord, _classPrivateFieldGet(this, _mapZoomLevel)));
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(_classPrivateFieldGet(this, _map));

      //handling click on map
      _classPrivateFieldGet(this, _map).on('click', this._showForm.bind(this));
      _classPrivateFieldGet(this, _workouts).forEach(function (work) {
        _this3._renderWorkOutMarker(work);
      });
    }
  }, {
    key: "_showForm",
    value: function _showForm(mapE) {
      _classPrivateFieldSet(this, _mapEvents, mapE);
      form.classList.remove('hidden');
      distance.focus();
    }
  }, {
    key: "_hideForm",
    value: function _hideForm() {
      distance.value = duration.value = candence.value = elevationGain.value = '';
      form.classList.add('hidden');
    }
  }, {
    key: "_toggleElevation",
    value: function _toggleElevation() {
      elevationGain.closest('.act-box-row').classList.toggle('hidden-toggle');
      candence.closest('.act-box-row').classList.toggle('hidden-toggle');
    }
  }, {
    key: "_newWorkout",
    value: function _newWorkout(e) {
      var validInput = function validInput() {
        for (var _len = arguments.length, input = new Array(_len), _key = 0; _key < _len; _key++) {
          input[_key] = arguments[_key];
        }
        return input.every(function (inp) {
          return Number.isFinite(inp);
        });
      };
      var allPositive = function allPositive() {
        for (var _len2 = arguments.length, input = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          input[_key2] = arguments[_key2];
        }
        return input.every(function (inp) {
          return inp > 0;
        });
      };
      e.preventDefault();
      var _classPrivateFieldGet2 = _classPrivateFieldGet(this, _mapEvents).latlng,
        lat = _classPrivateFieldGet2.lat,
        lng = _classPrivateFieldGet2.lng;
      var typeval = type.value;
      var distval = +distance.value;
      var durVal = +duration.value;
      var canVal = +candence.value;
      var elevVal = +elevationGain.value;
      var workout;
      // validation of inputs
      if (typeval === 'running') {
        if (!validInput(distval, durVal, canVal) || !allPositive(distval, durVal, canVal)) return alert('The inputs are not valid');
        workout = new Running([lat, lng], distval, durVal, canVal);
      }
      if (typeval === 'cycling') {
        if (!validInput(distval, durVal, elevVal) || !allPositive(distval, durVal)) return alert('The inputs are not valid');
        workout = new Cycling([lat, lng], distval, durVal, elevVal);
      }
      _classPrivateFieldGet(this, _workouts).push(workout);
      this._renderWorkOutMarker(workout);
      this._renderWorkout(workout);
      this._hideForm();
      this._setLocalStorage();

      // display marker
    }
  }, {
    key: "_clicks",
    value: function (_clicks2) {
      function _clicks() {
        return _clicks2.apply(this, arguments);
      }
      _clicks.toString = function () {
        return _clicks2.toString();
      };
      return _clicks;
    }(function () {
      var _this$clicks, _this$clicks2;
      _classPrivateFieldSet(this, _clicks, (_this$clicks = _classPrivateFieldGet(this, _clicks), _this$clicks2 = _this$clicks++, _this$clicks)), _this$clicks2;
    })
  }, {
    key: "_renderWorkOutMarker",
    value: function _renderWorkOutMarker(workout) {
      L.marker(workout.coords).addTo(_classPrivateFieldGet(this, _map)).bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        closeOnClick: false,
        autoClose: false,
        className: "".concat(workout.types, "-popup")
      })).setPopupContent("".concat(workout.description)).openPopup();
    }
  }, {
    key: "_renderWorkout",
    value: function _renderWorkout(workout) {
      var html = "\n    <li class=\"workout workout--".concat(workout.types, "\" data-id = \"").concat(workout.id, "\">\n    <h2 class=\"workout__title\">").concat(workout.description, "</h2>\n    <div class=\"workout__details\">\n        <span class=\"workout__value\">").concat(workout.distance, "</span>\n        <span class=\"workout__unit\">km</span>\n    </div>\n    <div class=\"workout__details\">\n        <span class=\"workout__value\">").concat(workout.duration, "</span>\n        <span class=\"workout__unit\">min</span>\n    </div>\n");
      if (workout.types === 'running') {
        html += "\n    <div class=\"workout__details\">\n        <span class=\"workout__value\">".concat(workout.pace, "</span>\n        <span class=\"workout__unit\">min/km</span>\n    </div>\n    <div class=\"workout__details\">\n        <span class=\"workout__value\">").concat(workout.candence, "</span>\n        <span class=\"workout__unit\">km/min</span>\n</div>\n</li>");
      }
      if (workout.types === 'cycling') {
        html += "\n    <div class=\"workout__details\">\n        <span class=\"workout__value\">".concat(workout.speed, "</span>\n        <span class=\"workout__unit\">km/min</span>\n    </div>\n    <div class=\"workout__details\">\n        <span class=\"workout__value\">").concat(workout.elevationGain, "</span>\n        <span class=\"workout__unit\">km/min</span>\n</div>\n</li> ");
      }
      form.insertAdjacentHTML('afterend', html);
    }
  }, {
    key: "_moveToPopUp",
    value: function _moveToPopUp(e) {
      var workOutEL = e.target.closest('.workout');
      if (!workOutEL) return;
      var workout1 = _classPrivateFieldGet(this, _workouts).find(function (work) {
        return work.id === workOutEL.dataset.id;
      });
      _classPrivateFieldGet(this, _map).setView(workout1.coords, _classPrivateFieldGet(this, _mapZoomLevel), {
        animate: true,
        pan: {
          duration: 1
        }
      });
      workout1._clicks();
    }
  }, {
    key: "_setLocalStorage",
    value: function _setLocalStorage() {
      localStorage.setItem('workouts', JSON.stringify(_classPrivateFieldGet(this, _workouts)));
    }
  }, {
    key: "_getLocalStorage",
    value: function _getLocalStorage() {
      var _this4 = this;
      var data = JSON.parse(localStorage.getItem('workouts'));
      if (!data) return;
      _classPrivateFieldSet(this, _workouts, data);
      _classPrivateFieldGet(this, _workouts).forEach(function (work) {
        _this4._renderWorkout(work);
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      localStorage.removeItem('workouts');
      location.reload();
    }
  }]);
  return App;
}();
var app = new App();
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55604" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.js.map