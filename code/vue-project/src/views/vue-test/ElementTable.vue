<template>
  <div class="sin-table">
    <div v-html="title"></div>
    <el-button @click="clearAll">清除</el-button>
    <el-button @click="triggerUpdate">触发update</el-button>
    <el-table
      v-if="isShow"
      ref="tb"
      :data="tableData"
      style="width: 100%;"
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
      <el-table-column prop="address" label="地址" min-width="200">
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
            >{{ scope.row.tag }}</el-tag
          >
        </template>
      </el-table-column>
    </el-table>

    <div>
      <el-button
        v-for="item in btnList"
        :key="item.id"
        :loading="!!load[item.id]"
        @click="handleBTN(item.id)"
        >点击</el-button
      >

      data () { return { btnList: [ { id: '1' }, { id: '2' } ], load: { }, } }
      /** * TODO: 值什么时候回来，写在那里即可 */ created (){
      this.btnList.forEach(item => { this.$set(this.load, item.id, false) }) },
      methods: { handleBTN (id) { this.$set(this.load, id, 1)
      console.log(this.load) }, }
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      btnList: [
        {
          id: '1',
        },
        {
          id: '2',
        },
      ],
      load: {},
      isShow: true,
      title: `
      <h2>基于element-ui table组件 进行开发</h2> 
      <strong>需求</strong> <br />
      1. 排序 筛选 是对后台整个数据进行操作，而不是对当前页面的数据进行操作 <br />
      2. 若是其关联的下一级页面，（eg：点击查看编辑时，再返回当前页面时，保留之前筛选，或排序条件），否则清空
      `,
      tableData1: [],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司',
        },
      ],
    }
  },
  beforeUpdate() {
    // console.log(this.tableData,11111111111)
  },
  updated() {
    // console.log(345678)
    // if (this.tableData.length) {
    //   this.isShow = true
    // }
  },
  created() {
    this.btnList.forEach((item) => {
      this.$set(this.load, item.id, false)
    })
  },
  methods: {
    ...mapMutations('elTable', [
      'setFilters_date',
      'setSort',
      'setFilters_tag',
      'clear',
    ]),
    handleBTN(id) {
      this.$set(this.load, id, 1)
      // console.log(this.load)
    },
    triggerUpdate() {
      this.isShow = !this.isShow
      if (this.isShow) {
        this.$nextTick(() => {
          this.clearAll()
        })
      }
      this.tableData1.forEach((item) => {
        this.tableData.push(item)
      })
    },
    handleFilter(filter) {
      // 拿到 key
      /**
       * 命名技巧罢了，只是关联
       */
      const key = Object.keys(filter)[0]
      this['setFilters_' + key](filter[key])
    },
    handleSort(column, prop, order) {
      // console.log(column, prop, order)
    },
    clearAll() {
      this.isShow = false
      this.$refs.tb.clearFilter()
      this.$refs.tb.clearSort()
      this.clear()
      this.$nextTick(() => {
        this.isShow = true
      })
      // this._table()
    },
    _table() {
      const COLUMNS_LIST = this.$refs.tb.columns
      COLUMNS_LIST.forEach((item) => {
        if (item.filteredValue && item.filteredValue.length) {
          // console.log(item)
          this.$refs.tb.store.commit('filterChange', {
            column: item,
            values: [],
          })
          this.$refs.tb.store.updateAllSelected()
        }
      })
    },
  },
  computed: {
    ...mapState('elTable', [
      'flagList',
      'dateList',
      'filtersDate',
      'filtersFlag',
      'sort',
    ]),
  },
  watch: {
    tableData: {
      handler() {
        // console.log(this.tableData)
        // console.log(this.isShow)
      },
      immediate: true,
    },
    load: {
      handler() {
        // console.log(this.load, 22222)
      },
      deep: true,
    },
  },
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
