//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const INPUT_TYPE = ['number', 'email'];

// 匹配数字
const MATCH_NOT_NUMBER = (inputValue) => {
  return /\D/.test(inputValue)
};

// 汉字字符
const NOT_ASCII = /[\u4e00-\u9fa5]/ig;

// 匹配规则
const REGEXP_MATCH = {
  number: MATCH_NOT_NUMBER,
  email: (inputValue) => NOT_ASCII.test(inputValue)
};

var script = {
  name: 'valid-change-input',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: 'valid-change-input'
    },
    alt: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number,
      default: 255
    },
    readonly: {
      type: Boolean,
      default: false
    },
    inputType: {
      default: '',
      validator (inputType) {
        return INPUT_TYPE.indexOf(inputType) !== -1
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    // 验证输入类型
    inputTypeValidator (inputType = this.inputType) {
      return INPUT_TYPE.indexOf(inputType) !== -1
    },
    // 获得焦点
    onFocus (e) {
      this.$emit('focus', e);
    },
    // 失去焦点
    onBlur (e) {
      this.$emit('blur', e);
    },
    // change 失去焦点后触发
    onChange (e) {
      this.$emit('change', e);
    },
    // 获得焦点change时触发
    onInput (e) {
      // 处理检测正确结果
      const matchedCallback = (e) => {
        e.target.value = this.value;
      };
      // 处理检测错误结果
      const dismatchCallback = (e) => {
        this.$emit('input', e.target.value);
      };

      // 检测是否存在输入限制
      if (this.inputType && this.inputTypeValidator()) {
        // 进行匹配校验
        const matchResult = REGEXP_MATCH[this.inputType] && REGEXP_MATCH[this.inputType](e.target.value);
        matchResult ? matchedCallback(e) : dismatchCallback(e);
        return
      }

      // 如果不存在检验或者检验不匹配
      this.$emit('input', e.target.value);
    }
  }
}

/* script */
            const __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("input", {
    staticClass: "reset-input",
    attrs: {
      type: _vm.type,
      name: _vm.name,
      alt: _vm.alt,
      autofocus: _vm.autofocus,
      disabled: _vm.disabled,
      placeholder: _vm.placeholder,
      maxlength: _vm.maxlength
    },
    domProps: { checked: _vm.checked },
    on: {
      focus: _vm.onFocus,
      blur: _vm.onBlur,
      change: _vm.onChange,
      input: _vm.onInput
    }
  })
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-65424236_0", { source: "\n.reset-input[data-v-65424236] {\n  outline: none;\n}\n", map: {"version":3,"sources":["/Users/ppgee/project/vue-strict-input/src/valid-strict-input.vue"],"names":[],"mappings":";AAmIA;EACA,cAAA;CACA","file":"valid-strict-input.vue","sourcesContent":["<template>\n  <input :type=\"type\" \n    class=\"reset-input\"\n    :name=\"name\"\n    :alt=\"alt\"\n    :autofocus=\"autofocus\"\n    :checked=\"checked\"\n    :disabled=\"disabled\"\n    :placeholder=\"placeholder\"\n    :maxlength=\"maxlength\"\n    @focus=\"onFocus\"\n    @blur=\"onBlur\"\n    @change=\"onChange\"\n    @input=\"onInput\"\n  />\n</template>\n\n<script>\nconst INPUT_TYPE = ['number', 'email']\n\n// 匹配数字\nconst MATCH_NOT_NUMBER = (inputValue) => {\n  return /\\D/.test(inputValue)\n}\n\n// 汉字字符\nconst NOT_ASCII = /[\\u4e00-\\u9fa5]/ig\n\n// 匹配规则\nconst REGEXP_MATCH = {\n  number: MATCH_NOT_NUMBER,\n  email: (inputValue) => NOT_ASCII.test(inputValue)\n}\n\nexport default {\n  name: 'valid-change-input',\n  props: {\n    value: {\n      type: [String, Number],\n      default: ''\n    },\n    type: {\n      type: String,\n      default: 'text'\n    },\n    name: {\n      type: String,\n      default: 'valid-change-input'\n    },\n    alt: {\n      type: String,\n      default: ''\n    },\n    autofocus: {\n      type: Boolean,\n      default: false\n    },\n    checked: {\n      type: Boolean,\n      default: false\n    },\n    disabled: {\n      type: Boolean,\n      default: false\n    },\n    placeholder: {\n      type: String,\n      default: ''\n    },\n    maxlength: {\n      type: Number,\n      default: 255\n    },\n    readonly: {\n      type: Boolean,\n      default: false\n    },\n    inputType: {\n      default: '',\n      validator (inputType) {\n        return INPUT_TYPE.indexOf(inputType) !== -1\n      }\n    }\n  },\n  data () {\n    return {}\n  },\n  methods: {\n    // 验证输入类型\n    inputTypeValidator (inputType = this.inputType) {\n      return INPUT_TYPE.indexOf(inputType) !== -1\n    },\n    // 获得焦点\n    onFocus (e) {\n      this.$emit('focus', e)\n    },\n    // 失去焦点\n    onBlur (e) {\n      this.$emit('blur', e)\n    },\n    // change 失去焦点后触发\n    onChange (e) {\n      this.$emit('change', e)\n    },\n    // 获得焦点change时触发\n    onInput (e) {\n      // 处理检测正确结果\n      const matchedCallback = (e) => {\n        e.target.value = this.value\n      }\n      // 处理检测错误结果\n      const dismatchCallback = (e) => {\n        this.$emit('input', e.target.value)\n      }\n\n      // 检测是否存在输入限制\n      if (this.inputType && this.inputTypeValidator()) {\n        // 进行匹配校验\n        const matchResult = REGEXP_MATCH[this.inputType] && REGEXP_MATCH[this.inputType](e.target.value)\n        matchResult ? matchedCallback(e) : dismatchCallback(e)\n        return\n      }\n\n      // 如果不存在检验或者检验不匹配\n      this.$emit('input', e.target.value)\n    }\n  }\n}\n</script>\n\n<style scoped>\n.reset-input {\n  outline: none;\n}\n</style>\n\n\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-65424236";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    {
      component.__file = "/Users/ppgee/project/vue-strict-input/src/valid-strict-input.vue";
    }

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var ValidStrictInput = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  )

const install = function (Vue) {
  if (install.installed) return

  Vue.component ('valid-strict-input', ValidStrictInput);
};

if (typeof window !== 'undefined' && window.Vue) {
  install (window.Vue);
}

var main = {
  install
}

export default main;
