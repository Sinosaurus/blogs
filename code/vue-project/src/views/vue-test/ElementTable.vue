
<template>
  <div class="sin-table">
    <div v-html="title"></div>
    <el-button @click="clearAll">清除</el-button>
    <el-table
      ref="tb"
      :data="tableData"
      style="width: 100%"
      @filter-change="handleFilter"
      @sort-change="handleSort"
      :default-sort="sort"
    >
      <el-table-column
        prop="date"
        label="日期"
        :sortable="'custom'"
        min-width="180"
        column-key="date"
        :filters="dateList"
        :filtered-value="filtersDate"
      >
      </el-table-column>
      <el-table-column
        :sortable="'custom'"
        prop="name"
        label="姓名"
        min-width="180"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="200"
      >
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        min-width="100"
        :filters="flagList"
        :filtered-value="filtersFlag"
        column-key="tag"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions
          >{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      title: `
      <h2>基于element-ui table组件 进行开发</h2> 
      <strong>需求</strong> <br />
      1. 排序 筛选 是对后台整个数据进行操作，而不是对当前页面的数据进行操作 <br />
      2. 若是其关联的下一级页面，（eg：点击查看编辑时，再返回当前页面时，保留之前筛选，或排序条件），否则清空
      `,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        tag: '公司'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        tag: '家'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '公司'
      }]
    }
  },
  methods: {
    ...mapMutations('elTable', [
      'setFilters_date',
      'setSort',
      'setFilters_tag',
      'clear'
    ]),
    handleFilter(filter) {
      // 拿到 key
      /**
       * 命名技巧罢了，只是关联
       */
      const key = Object.keys(filter)[0]
      this['setFilters_' + key](filter[key])
    },
    handleSort(column, prop, order) {
      console.log(column, prop, order)
    },
    clearAll() {
      this.$refs.tb.clearFilter()
      this.$refs.tb.clearSort()
      this.clear()
    }
  },
  computed: mapState('elTable', [
    'flagList',
    'dateList',
    'filtersDate',
    'filtersFlag',
    'sort'
  ])
}
</script>

<style lang="less">
.sin-table {
  display: flex;
  flex-direction: column;
  align-items: center;
  .el-table {
    margin-top: 80px;
    max-width: 1200px;
    border: 1px solid #eee;
    border-radius: 4px;
  }
}
</style>
