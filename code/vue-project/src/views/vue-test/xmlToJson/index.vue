<template>
  <div>

  </div>
</template>

<script>
// import parse from 'xml2json'
// var parser = require('xml2json')
// console.log(parser, 9999)
import axios from 'axios'
import xmlJs from 'xml-js'
import ObjTree from 'xml-objtree'
export default {
  name: 'xmToJson',
  data () {
    return {
      xml: '<foo attr="value">bar</foo>'
    }
  },
  created () {
    axios({
      url: '/feed/news/feed',
      method: 'get'
    }).then(res => {
      const xml = res.data
      const json = xmlJs.xml2js(xml)
      const newObjTree = new ObjTree()
      const objTreeJson = newObjTree.parseXML(xml)
      console.log(json, '=======', objTreeJson)
      const result = json.elements[0].elements[0].elements
      // console.log(result)
      const items = result.filter(item => item.name === 'item')
      console.log(items)
    }).catch(err => {
      console.error(err, 2)
    })
    // const json = xml.xml2js('https://www.sinnet-cloud.cn/news/feed')

    // console.log(json)
  }
}
</script>
