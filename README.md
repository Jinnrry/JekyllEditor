# JekyllEditor

> 基于VUE的Jekyll博文编辑器

## DEMO案例
>  我知道你想先看看效果，特意准备了在线DEMO，点进去看看吧

**传送门** ======> [JekyllEditor](http://www.xjiangwei.cn/jekylleditor.html#/)

## 运行实例

``` bash
# 安装依赖
cnpm install

# 开启热更新服务器s在 localhost:4397 （4397为自定义端口，如果需要修改，请前往/config/index.js:26（port:4397）修改）
cnpm run dev

# 打包压缩项目，并输出生产模式文件
cnpm run build

# 打包压缩文件，过程带输出信息
cnpm run build --report
```
## 使用方法
> 使用前必知

本markdown组件采用vue-cli模式开发，适用于此类开发模式，其他模式请自行修改。

> 安装依赖
```bash
# 本组件css采用sass编写，亦可修改为css(请自行修改)，核心依赖marked组件，请务必安装，谢谢
# markdown编译依赖 marked 地址：https://www.npmjs.com/package/marked
# 同步滚动依赖 vue-scroll 地址：https://www.npmjs.com/package/vue-scroll
cnpm i marked vue-scroll --save

cnpm i node-sass sass-loader  --save-dev
```
> 配置要求
```html
<!--本组件使用font-awesome字体图标库，请于index.html提前引入-->
<link href="//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
```
```javascript
// 根据项目修改引入文件的路径（所需文件放在了static目录下）
import Vue from 'vue'
import marked from 'marked'
import scroll from 'vue-scroll'
Vue.use(scroll)
import hljs from '../../static/js/highlight.min.js'
import range from '../../static/js/rangeFn.js'
```
```css
/*根据项目修改引入文件的路径（所需文件放在了static目录下）*/
/*引入reset文件*/
@import "../../static/css/reset";
/*引入github的markdown样式文件*/
@import "../../static/css/github-markdown.css";
/*引入atom的代码高亮样式文件*/
@import "../../static/css/atom-one-dark.min.css";
    
```

> 父组件中

```html
<!--编辑器组件，嵌入到任意父组件中-->
<markdown 
:mdValuesP="msg" 
:fullPageStatusP="false" 
:editStatusP="false" 
:previewStatusP="false"
:navStatusP="false"  
:icoStatusP="true"  
@childevent="childEventHandler">
</markdown>
<!--变量后面的大写P表示是从父组件中传入的参数-->
<!--:mdValuesP="msg" 表示需要初始化传入编辑器的内容-->
<!--:fullPageStatusP="false" 加载时是否全屏（true全屏/false跟随父容器）-->
<!--:editStatusP="false" 加载时是否显示编辑容器（true显示/false不显示）-->
<!--:previewStatusP="false" 加载时是否显示预览容器（true全屏/false不显示）-->
<!--:navStatusP="false" 加载时是否显示顶部快速标签栏（true显示/false不显示）-->
<!--:icoStatusP="false" 加载时是否显示版权标志（true显示/false不显示）,如果取消掉，请勿忘挖井人，谢谢！-->
<!--@childevent="childEventHandler" 监听组件的$.emit()方法传回父组件的值，便于父容器保存获取-->

```
```javascript
// 引入markdown组件
import markdown from '../components/markdown'
export default {
    name: 'index',
    data() {
        return {
            msg: {
                    mdValue:'## Vue-markdownEditor'
                }
            //初始化markdown编辑器的内容，通过props传入子组件
        }
    },
    components: {
        markdown // 声明mardown组件
    },
    methods: {
        // 监听事件，接收子组件传过来的数据
        childEventHandler:function(res){
        // res会传回一个data,包含属性mdValue和htmlValue，具体含义请自行翻译
            this.msg=res;
        }
    }
}
```
## 其他说明

本项目使用的markdown编辑器来自[vue-mdEditor](https://github.com/ovenslove/vue-mdEditor)