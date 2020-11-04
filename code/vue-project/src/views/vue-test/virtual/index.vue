<template>
  <div>
    <h3>virtual</h3>
    <el-row>
      <el-col :span="8">
        <!-- <el-select v-model="select1" v-infinite-scroll="load"> -->
          <!-- <virtual-list
        root-tag="el-select"
        item-tag="el-option"
        data-key="value"
        :data-sources="list"
      >

      </virtual-list> -->
          <!-- <el-option
            v-for="(item, key) in list"
            :value="item.value"
            :label="item.label"
            :key="key"
          ></el-option>
        </el-select> -->
      </el-col>
      <el-col :span="8">
        <!-- <el-select v-model="select">
          <el-option
            v-for="(item, key) in list"
            :value="item.value"
            :label="item.label"
            :key="key"
          ></el-option> </el-select
      > -->
      </el-col>
      <el-col :span="8">
        <Select v-model="select" filterable :list="list"></Select>
      </el-col>
    </el-row>
    <!-- <SElement /> -->
  </div>
</template>

<script>
// http://taro-docs.jd.com/taro/docs/virtual-list/
// https://github.com/dwqs/blog/issues/70
// https://github.com/niexias/niexias.github.io/issues/42
// https://github.com/tangbc/vue-virtual-scroll-list
import VirtualList from 'vue-virtual-scroll-list'
import MyOption from './options'
import SElement from './Element'
import Select from './select'
export default {
  name: 'virtual-text',
  components: {
    VirtualList,
    SElement,
    Select
  },
  data() {
    return {
      select: '',
      select1: '',
      component: MyOption,
    }
  },
  computed: {
    list() {
      const list = []
      for (let i = 0; i < 50000; i++) {
        list.push({
          label: `第${i}个`,
          value: `第${i}个`,
          size: 50,
        })
      }
      return list
    },
  },
  methods: {
    load() {
      console.log(111111111)
    },
  },
}
</script>

<style lang="scss" scoped></style>
