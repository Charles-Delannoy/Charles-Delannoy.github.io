(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[59],{NVhl:function(e,t,r){e.exports={tab:"tab__119sfuRLo2Ktqqrb5EzLQm",active:"active__etP0N4qhd86-Hef1PiwXW"}},Zmyp:function(e,t,r){"use strict";var n=r("/MKj"),o=r("8d5b"),a=r("UTZF"),i=r("q1tI"),s=r.n(i),c=r("fQuZ"),p=r("TSYQ"),l=r.n(p),u=r("zB0+"),f=r("xJk8"),d=r("BiHH"),h=r("FD1T"),_=r("/MNd"),y=r("QqFe"),b=r("vNSK"),m=r("90R5"),g=r("gHZ8"),O=r("YDNT"),v=r("TVOw"),P=r("0q/0"),k=r("YwsU"),j=r("wbo1"),w=r.n(j);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var T=function(e){function Title(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Title),_possibleConstructorReturn(this,_getPrototypeOf(Title).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Title,s.a.Component),function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(Title,[{key:"render",value:function render(){var e={className:l()({[w.a.headerTitle]:!0,[w.a.headerTitleLink]:!!this.props.url})},t=l()("new-cc-icon","icon-badge",w.a.privateBanner);return this.props.url&&(e.href=this.props.url),s.a.createElement("a",_extends({},e,{"data-testid":"header-title"}),s.a.createElement("i",{className:"".concat(w.a.navIcon," fcn-icon fcn-icon-arrowPrev")}),this.props.title,this.props.private?s.a.createElement("span",{className:t}," ","PRIVATE ",this.props.contentType.toUpperCase()):null)}}]),Title}();T.defaultProps={contentType:""};var E=T,H=r("h9bJ");function Header_typeof(e){return(Header_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Header_extends(){return(Header_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Header_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Header_possibleConstructorReturn(e,t){return!t||"object"!==Header_typeof(t)&&"function"!=typeof t?function Header_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Header_getPrototypeOf(e){return(Header_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Header_setPrototypeOf(e,t){return(Header_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var C=function trackClick(e){return function(){Object(m.b)("user","click",{target:e})}},N=function wrapWithPaddedLi(e){return e?e.filter(function(e){return e}).map(function(e){return s.a.createElement("div",{className:w.a.headerListItem,key:e.key},e)}):e},S=function(e){function Header(){var e,t;!function Header_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Header);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=Header_possibleConstructorReturn(this,(e=Header_getPrototypeOf(Header)).call.apply(e,[this].concat(n)))).flag=function(e){var r=t.props.flags;return(void 0===r?{}:r)[e]},t.renderTitle=function(){if(!t.props.title)return null;var e=t.props.exitPaths||{};return s.a.createElement(E,{title:t.props.title,url:e.back||t.props.titleRoute,private:t.props.private,contentType:t.props.contentType})},t.getButtonStyleProps=function(){return"dark"===t.props.theme?{outline:!0,theme:"white"}:{theme:"brand-purple"}},t.getUpgradeButtonText=function(){return t.props.showPaidProTrialCTA?P.tryProForFree:P.upgradePro},t.getUpgradeButtonHref=function(){var e=t.props,r=e.location,n=e.isProTrialActive,o=e.showPaidProTrialCTA;return n?Object(v.N)({redirectUrl:Object(g.e)(r)}):o?Object(v.O)({redirectUrl:Object(g.e)(r)}):v.Q},t.renderUpgradeButton=function(){var e=t.props,r=e.isPro,n=e.isProPaused;if(r||n)return!1;var o=l()({[w.a.navLink]:!0,[w.a.hideOnMobile]:!0},w.a.proAd),a={ad_name:"upgrade_cta_topnav_v1"};return s.a.createElement(c.a,{payload:a},s.a.createElement(y.a,Header_extends({},t.getButtonStyleProps(),{round:!0,href:t.getUpgradeButtonHref(),className:l()(o,w.a.marginRight),onClick:function onClick(){Object(m.b)("ad","click",a)},"data-testid":"upgrade-link","data-cxlid":"upgrade-link",target:t.flag("openUpgradeLinkInNewTab")?"_blank":"_self",rel:"noopener noreferrer"}),t.getUpgradeButtonText()))},t.renderUnpauseButton=function(){if(!t.props.isProPaused)return!1;var e=l()({[w.a.navLink]:!0},w.a.proAd);return s.a.createElement(y.a,Header_extends({},t.getButtonStyleProps(),{round:!0,href:Object(v.d)(),className:e,"data-testid":"unpause-link",onClick:C("header_unpause")}),P.unpauseNow)},t}return function Header_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Header_setPrototypeOf(e,t)}(Header,i["Component"]),function Header_createClass(e,t,r){return t&&Header_defineProperties(e.prototype,t),r&&Header_defineProperties(e,r),e}(Header,[{key:"render",value:function render(){var e=O.a.isAnon(),t=[],r=this.renderUpgradeButton();r&&t.push(s.a.createElement("div",{className:w.a.headerListItem,key:"upgrade"},r));var n=this.renderUnpauseButton();if(n&&t.push(s.a.createElement("div",{className:w.a.headerListItem,key:"unpause"},n)),this.props.statusDisplay&&t.push(s.a.createElement("div",{className:w.a.headerListItem,key:"status"},s.a.createElement(H.a,{className:w.a.hideOnMobile},this.props.statusDisplay))),e){if(!this.props.ad){this.props.hideLoginButton||t.push(s.a.createElement("div",null,s.a.createElement(H.a,null,s.a.createElement(y.a,Header_extends({onClick:C("topnav_login"),href:Object(g.c)("/login")},{theme:"brand-dark-blue",flat:!0,id:"header__sign-in",round:!0},{className:w.a.loginButton}),k.logIn)))),this.props.hideRegisterButton||t.push(s.a.createElement("div",null,s.a.createElement(H.a,{className:w.a.registerButtonTab},s.a.createElement(y.a,Header_extends({href:Object(g.c)("/register"),onClick:C("topnav_signup")},{theme:"brand-dark-blue",round:!0,outline:!0,id:"header__sign-up"}),P.signUp))))}}else{var o="light"===this.props.theme?"dark":"light";t.push(s.a.createElement("div",{className:w.a.headerListItem,key:"notifications"},s.a.createElement(H.a,null,s.a.createElement(d.a,{theme:o})))),t.push(s.a.createElement("div",{className:w.a.headerListItem,key:"me"},s.a.createElement(H.a,{onClick:C("topnav_profile")},s.a.createElement(u.a,{showNavItems:!0,profileImage:this.props.profileImage,showProAds:!!this.props.showProAds}))))}var a=this.props,i=a.className,c=a.theme,p=a.compact,b=l()({[w.a.headerCompact]:p},w.a.header,i),m=l()({[w.a.sticky]:this.props.sticky},w.a.appBar,w.a["".concat(this.props.theme)]),v="light"===c?"dark-blue":"white",j=this.props.ad||this.props.isPro?"pro":"default";return s.a.createElement("header",{"data-react-header":!0,className:b},s.a.createElement(h.b,{className:m,wide:this.props.wide},s.a.createElement(_.a,{key:"header-app-bar-section-left",position:"left"},s.a.createElement("div",{className:w.a.headerList},s.a.createElement("div",{className:w.a.headerListItem},s.a.createElement("a",{href:this.props.logoRoute,className:w.a.logo,onClick:C("topnav_logo")},s.a.createElement(f.a,{type:j,color:v}))))),s.a.createElement(_.a,{position:"center",className:w.a.centerSection},this.props.center||this.renderTitle()),s.a.createElement(_.a,{key:"header-app-bar-section-right",position:"right"},s.a.createElement("div",{className:w.a.headerList},N(this.props.tabsLeft),t,N(this.props.tabsRight)))))}}]),Header}();S.defaultProps={logoRoute:"/",private:!1,theme:"dark",flags:{}};var L=Object(b.a)(S);t.a=Object(n.connect)(function mapStateToProps(e){return{isPro:Object(o.s)(e),isProTrialActive:Object(o.v)(e),isAdmin:Object(o.k)(e),isCustomerService:Object(o.m)(e),showProAds:Object(o.B)(e),isProPaused:Object(a.h)(e),showPaidProTrialCTA:Object(o.A)(e),profileImage:Object(o.b)(e).profileImage}})(L)},h9bJ:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("c3k/"),i=r("TSYQ"),s=r.n(i),c=r("NVhl"),p=r.n(c);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function HeaderTab(){var e,t;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,HeaderTab);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(HeaderTab)).call.apply(e,[this].concat(n)))).handleClick=function(e){t.props.onClick&&t.props.onClick(e,t.props.params)},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(HeaderTab,n["Component"]),function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(HeaderTab,[{key:"render",value:function render(){var e=this.props.component,t=this.props,r=t.className,n=t.children,i=t.active,c=_objectWithoutProperties(t,["className","children","active"]);e||(e=this.props.href?"a":"div");var l=s()({[p.a.active]:i},p.a.tab,r);return o.a.createElement(e,function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){_defineProperty(e,t,r[t])})}return e}({},Object(a.a)(["component"],c),{onClick:this.handleClick,className:l}),n)}}]),HeaderTab}();t.a=l},wbo1:function(e,t,r){e.exports={header:"header__3euGuEK-zGDdjgRiSCbQQV",headerCompact:"headerCompact__3u9epnnQbLRqW598wk9peo",logo:"logo__1-a_TiXBS6TEV02nagx3gR",sticky:"sticky__3figFpydYyJciM9VYg5I3Y",showOnMobile:"showOnMobile__iBm4ItXh4qQvZbvjDrnj5",hideOnMobile:"hideOnMobile__1LKS1Q5xklAgO_55U-L1_H",centerSection:"centerSection__1R92W4oxyC1LUfW_4FNc67",headerTitle:"headerTitle__1bRoKIR3KRa2TlI9HR21Mj",dark:"dark__1H0rVIavg36V_klNVxSmzc",light:"light__12NAwryIsaYQ2Wn6s5PyT-",privateBanner:"privateBanner__1yywBMiy8h58EpUglc1CDk",navIcon:"navIcon__3M55p2SvBJC0K_1uGxIPnu",headerTitleLink:"headerTitleLink__1sy_LMLslPabMutyHlvFIp",darkAlt:"darkAlt__1rIEvUnOfh1fnmZ7DfgbB2",navLinkWrapper:"navLinkWrapper__33hvMoQ07NyxWSsNsM-ukz",navLink:"navLink__3qaqkBWYB1sV8M7QNglfmH",proAd:"proAd__MMbYN3AVFhpNpklHrOZ_2",headerList:"headerList__25012JV_DODdKWfuRIKAHy",headerListItem:"headerListItem__278StlyfBjnBdiAY9dQUbg",registerButtonTab:"registerButtonTab__1RfCpd_Cm7xgaSJOQbVh33",loginButton:"loginButton__2Gi6DVYv9io8ti56hRuHaL",marginRight:"marginRight__2aVn2bFjjEBu4NDspObDT9"}}}]);
//# sourceMappingURL=59.ace593427dc78935296d.chunk.js.map