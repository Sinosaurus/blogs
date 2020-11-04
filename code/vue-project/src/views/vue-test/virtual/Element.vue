<template>
        <RecycleScroller
          ref="scroller"
          class="scroller"
          :items="list"
          :item-size="itemHeight"
          :buffer="buffer"
          key-field="id"
          size-field="height"
        >
          <!-- @visible="onVisible"
          @hidden="onHidden" -->
          <template v-slot="props">
            <Person
              v-if="props.item.type === 'person'"
              :item="props.item"
              :index="props.index"
            />
          </template>
        </RecycleScroller>
</template>

<script>
import { getData, addItem } from './data'
import RecycleScroller from './virtual'
import Person from './Person.vue'

export default {
  components: {
    RecycleScroller,
    Person
  },

  data: () => ({
    items: [],
    count: 10000,
    renderScroller: true,
    showScroller: true,
    scopedSlots: false,
    buffer: 200,
    poolSize: 2000,
    enableLetters: true,
    pageMode: false,
    pageModeFullPage: true,
  }),

  computed: {

    itemHeight () {
      return this.enableLetters ? null : 50
    },

    list () {
      return this.items.map(
        item => Object.assign({}, {
          random: Math.random(),
        }, item),
      )
    },
  },

  watch: {
    // count () {
    //   this.generateItems()
    // },
    // enableLetters () {
    //   this.generateItems()
    // },
  },

  mounted () {
    this.$nextTick(this.generateItems)
    // window.scroller = this.$refs.scroller
  },
 
  methods: {
    generateItems () {
      console.log('Generating ' + this.count + ' items...')
      let time = Date.now()
      const items = getData(this.count, this.enableLetters)
      console.log(items,  'Generated ' + items.length + ' in ' + (Date.now() - time) + 'ms')
      this._dirty = true
      this.items = items
    },

    // addItem () {
    //   addItem(this.items)
    // },

    // onUpdate (startIndex, endIndex) {
    //   this.updateCount++
    // },

    // onVisible () {
    //   console.log('visible')
    // },

    // onHidden () {
    //   console.log('hidden')
    // },

    // update (e) {
    //   this.$refs.scroller.handleScroll()
    // },
  },
}
</script>

<style scoped>
.content {
  height: 100%;
  flex: 100% 1 1;
  border: solid 1px #42b983;
  position: relative;
}

.content .wrapper {
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.scroller {
  width: 100%;
  height: 100%;
}

/* .letter {
  text-transform: uppercase;
  color: grey;
  font-weight: bold;
}

.letter .td {
  padding: 12px;
}

.letter.big {
  font-weight: normal;
  height: 200px;
}

.letter.big .value {
  font-size: 120px;
} */
</style>
