# vuejs_hello_world
    Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。
    与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。
    Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。
    另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动

> A Vue.js project

## Create Setup

    1、确定已安装nodejs 、npm ,查看是否安装的命令
    node -v
    npm -v
    
    2、修改npm的全局路径(windows)
    在CMD窗口执行以下两条命令：
    
    npm config set prefix "D:\ProgramFiles\nodejs\node_global"
    npm config set cache "D:\ProgramFiles\nodejs\node_cache"
    
    或者在nodejs的安装目录中找到node_modules\npm\.npmrc文件，修改如下：
    prefix =D:\ProgramFiles\nodejs\node_global
    cache = D:\ProgramFiles\nodejs\node_cache
    
    把D:\ProgramFiles\nodejs\node_global 加入到环境变量中
    
    
    3、安装vue,vue-cli
    npm install -g vue
    npm install -g vue-cli
    
    4、创建vue项目
    vue init webpack "项目名称xxx"
  
  


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 参考文档
[Vue.js官方网站](https://vuejs.org/)

[Vue.js官方源码地址](https://github.com/vuejs/vuejs.org)

[Vue.js中文官方网站](https://cn.vuejs.org/)

[Vue.js中文官方源码地址](https://github.com/vuejs/cn.vuejs.org)

[Vue.js——60分钟快速入门](https://www.cnblogs.com/keepfool/p/5619070.html)

[Vue.js——60分钟组件快速入门（上篇）](https://www.cnblogs.com/keepfool/p/5625583.html)

[Vue.js——60分钟组件快速入门（下篇）](https://www.cnblogs.com/alinaxia/p/6395824.html)

[Vue.js——60分钟webpack项目模板快速入门](https://www.cnblogs.com/alinaxia/p/6395810.html)
