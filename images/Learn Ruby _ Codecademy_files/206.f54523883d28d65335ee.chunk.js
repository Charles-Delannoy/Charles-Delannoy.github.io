(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[206],{DcZj:function(e,t,n){"use strict";var r=n("90R5"),o=n("q1tI"),i=n.n(o),a=n("/MKj"),l=n("8d5b"),s=n("bZTw"),c=n("+mBx"),p=n("UCeZ"),f=n.n(p);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function LeTrialBanner(){var e,t;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,LeTrialBanner);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(LeTrialBanner)).call.apply(e,[this].concat(o)))).state={hidden:!0},t.closeExpiryBanner=function(e){e.stopPropagation(),e.preventDefault();var n="".concat((new Date).getTime());localStorage.setItem("leTrialExpiryBannerClosedTime",n),t.setState({leTrialExpiryBannerClosedTime:n}),t.trackLeExpiryBannerClosed()},t.trackLeExpiryBannerClosed=function(){Object(r.b)("user","click",{target:"le_trialexpirationcard_close"})},t.isExpiryBannerClosed=function(){return!!t.state.leTrialExpiryBannerClosedTime},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(LeTrialBanner,o["Component"]),function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(LeTrialBanner,[{key:"componentDidMount",value:function componentDidMount(){this.setState({leTrialExpiryBannerClosedTime:localStorage.getItem("leTrialExpiryBannerClosedTime"),hidden:!1})}},{key:"render",value:function render(){var e=this.props,t=e.isExpired,n=e.daysLeft,r=e.location,o=e.showPaidTrialCTA,a=!t,l=this.isExpiryBannerClosed();return this.state.hidden?null:i.a.createElement("div",{className:f.a.leTrialBanner},i.a.createElement("div",{className:f.a.leTrialBannerRelative},i.a.createElement(c.a,{location:r,isExpired:t,daysLeft:n,showCloseButton:a,expiryBannerClosed:l,closeExpiryBanner:this.closeExpiryBanner,trackingSource:"learningEnvironment",showPaidTrialCTA:o})))}}]),LeTrialBanner}();t.a=Object(a.connect)(function mapStateToProps(e){var t=Object(l.w)(e),n=Object(l.h)(e),r=Object(l.A)(e);return{isExpired:t,daysLeft:n,location:Object(s.f)(e),showPaidTrialCTA:r}})(u)},UCeZ:function(e,t,n){e.exports={leTrialBanner:"leTrialBanner__3VOkodnhfWeF-L5t7tA6KV",leTrialBannerRelative:"leTrialBannerRelative__3mIq5_XeADd_mE-8hSnMet"}}}]);
//# sourceMappingURL=206.f54523883d28d65335ee.chunk.js.map