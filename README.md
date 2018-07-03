# vue-strict-input
`vue-strict-input` 是一个限制输入类型的输入框组件，基于vue实现

## 组件由来

由于注意细节的测试人员在测试当中经常提出限制输入的bug，开发人员不能专注于业务功能开发。所以有了 `vue-strict-input` 

## 使用方法

在vue的创建实例的js文件中，加入
```js
import VueStrictInput from 'vue-strict-input'
Vue.use(VueStrictInput)
```

然后在需要组件的地方使用即可，例如
```html
<vue-strict-input />
```

## 注意事项
初版组件，注意事项颇多
- 目前支持number、email、idcard(大陆身份证)
- 目前支持onInput、onFocus、onBlur等方法，其他方法迭代

其它问题正在挖掘


