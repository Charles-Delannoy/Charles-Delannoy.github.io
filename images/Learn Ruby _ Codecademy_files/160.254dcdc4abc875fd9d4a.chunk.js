(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[160],{"KI/2":function(e,t,o){e.exports={invalid:"invalid__1vy1txLryf2j4W1prot59J"}},Rlp1:function(e,t,o){"use strict";var n=o("6qam"),r=o.n(n),i=o("TP7S"),s=o.n(i),p=o("q1tI"),a=o.n(p),u=o("i8i4"),l=o.n(u),c=o("TSYQ"),f=o.n(c),h=o("KI/2"),d=o.n(h);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function TextField(){var e,t;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TextField);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(TextField)).call.apply(e,[this].concat(n)))).getInitialValue=function(){return t.getCleanValue(t.props.value)},t.getCleanValue=function(e){return s()(e)||r()(e)?"":e},t.handleFocus=function(e){if(t.setState({isFocused:!0}),t.props.selectOnClick){var o=l.a.findDOMNode(t.refs.input);o&&o.select()}t.props.onFocus&&t.props.onFocus(e)},t.handleBlur=function(e){t.setState({isFocused:!1}),t.props.onBlur&&t.props.onBlur(e)},t.handleChange=function(e){var o=e.target.value;o&&t.props.filterValue&&!t.props.filterValue(o)||(t.setState({value:o}),o.length>=t.props.maxLength&&t.props.onReachMaxLength&&t.props.onReachMaxLength(e,o),t.props.onChange&&t.props.onChange(e,o))},t.handleKeyDown=function(e){switch(e.which){case 13:t.props.onEnter&&t.props.onEnter(e)}},t.focusInput=function(){l.a.findDOMNode(t.refs.input).focus()},t.value=function(){return l.a.findDOMNode(t.refs.input).value},t.state={isFocused:!1,value:t.getInitialValue()},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(TextField,a.a.Component),function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(TextField,[{key:"componentDidMount",value:function componentDidMount(){this.props.shouldAutoFocus&&this.focusInput()}},{key:"UNSAFE_componentWillReceiveProps",value:function UNSAFE_componentWillReceiveProps(e){this.props.value!==e.value&&this.setState({value:this.getCleanValue(e.value)})}},{key:"render",value:function render(){var e=null;if(this.props.icon){var t=f()("field__status-icon icon-".concat(this.props.icon),this.props.iconClass);e=a.a.createElement("div",{className:t})}var o={};this.props.useDefaultStyles&&(o={field:!0,"field--text":!0,"field--error":this.props.error,"field--text--hidden":"hidden"===this.props.type,"field--focused":this.state.isFocused,[d.a.invalid]:this.props.invalid&&!this.state.isFocused});var n=f()(o,this.props.className),r=f()({inspectletIgnore:this.props.sensitive,"input--invalid":this.props.invalid&&!this.state.isFocused});return a.a.createElement("div",{style:{width:this.props.width},className:n,onFocus:this.focusInput},a.a.createElement("input",{ref:"input",type:this.props.type||"text",className:r,name:this.props.name,id:this.props.id,disabled:this.props.disabled,placeholder:this.props.placeholder,onFocus:this.handleFocus,onBlur:this.handleBlur,onChange:this.handleChange,onKeyDown:this.handleKeyDown,maxLength:this.props.maxLength,value:this.state.value,autoComplete:this.props.autoComplete}),e)}}]),TextField}();y.defaultProps={useDefaultStyles:!0,autoComplete:"off"},t.a=y}}]);
//# sourceMappingURL=160.254dcdc4abc875fd9d4a.chunk.js.map