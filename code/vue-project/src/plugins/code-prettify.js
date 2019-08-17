import 'code-prettify/styles/sunburst.css'
import prettyPrint from 'code-prettify'
import Vue from 'vue'

// npm i git://github.com/google/code-prettify#master -- save
// https://github.com/google/code-prettify/issues/578
Vue.prototype.$prettyPrint = prettyPrint
