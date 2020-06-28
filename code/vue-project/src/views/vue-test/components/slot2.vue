<template>
  <div class="slot-2">
    <h3>slot2</h3>
    <slotCom>
      <ul class="ul">
        <li v-for="item in ulList" :key="item.id">{{ item.name }}</li>
      </ul>
    </slotCom>
  </div>
</template>

<script>
import slotCom from './SlotCommon'
export default {
  components: {
    slotCom,
  },
  data() {
    return {
      test: '1234567890-',
      ulList: [
        {
          id: 0,
          name: 'Sinosaurus',
        },
        {
          id: 1,
          name: 'zhen',
        },
        {
          id: 2,
          name: 'jim',
        },
      ],
    }
  },
}
</script>

<style lang="less">
.slot-2 {
  background-color: #bae637;
  border-radius: 0 0 4px 4px;
  box-shadow: 1px 4px 2px 0 rgba(0, 0, 0, 0.3);
  .ul {
    li {
      padding: 10px;
      font-weight: 700;
      font-family: medium-content-sans-serif-font, 'Lucida Grande',
        'Lucida Sans Unicode', 'Lucida Sans', Geneva, Arial, sans-serif;
    }
  }
}
</style>
