<template>
  <div>
    <Sortable
      v-model="list"
      tag="ul"
      class="drag__container"
      placeholderClass="drag__ph"
      hoverClass="hv__ph"
      @update="handleUpdate"
    >
      <!-- key 必须使用item的key -->
      <li class="li" v-for="item in list" :key="item.key">
        {{ item.key }} === {{ item.value }}
      </li>
    </Sortable>
  </div>
</template>

<script>
import Sortable from './components/Sortable.vue'
export default {
  name: 'drag',
  components: {
    Sortable,
  },
  data() {
    return {
      list: [
        {
          status: true,
          key: 'id',
          title: 'id',
          value:
            'https://codesandbox.io/s/vue-shopify-draggable-forked-ojn9x?file=/src/components/SortableList.vue:746-755',
        },
        {
          status: true,
          key: 'address',
          title: '地址',
          value: 'https://github.com/ajitid/vue-shopify-draggable-sortable',
        },
        {
          status: true,
          key: 'name',
          title: '姓名',
          value:
            'https://github.com/dam1r89/vue-shopify-draggable-components/tree/master/src/components',
        },
        {
          status: true,
          key: 'date',
          title: '日期',
          value: 'http://lukasoppermann.github.io/html5sortable/index.html',
        },
      ],
    }
  },
  methods: {
    handleUpdate({ newIndex }) {
      console.log(newIndex)
    },
  },
}
</script>

<style lang="less">
.drag__container {
  display: flex;
  flex-wrap: wrap;
  .hv__ph {
    background-color: blue;
  }
  .drag__ph {
    background-color: red;
  }
  .li {
    width: 28%;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    min-height: 65px;
    margin: 10px;
  }
}
</style>
