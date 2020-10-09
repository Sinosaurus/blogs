<template>
  <components class="sti-sortable" :is="tag" ref="drag" @sortupdate="update">
    <slot />
  </components>
</template>

<script>
import sortable from 'html5sortable/dist/html5sortable.es'
export default {
  name: 'sortable',
  props: {
    tag: {
      default: 'div',
      type: String,
    },
    value: {
      required: true,
    },
    placeholderClass: {
      default: 'ph-class',
      type: String,
    },
    hoverClass: {
      default: 'hv-class',
      type: String,
    },
    draggingClass: {
      default: 'dragging-class',
      type: String,
    },
  },
  data() {
    return {
      instance: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.instance = sortable(this.$refs.drag, {
        forcePlaceholderSize: true,
        placeholderClass: this.placeholderClass,
        hoverClass: this.hoverClass,
        draggingClass: this.draggingClass,
      })[0]
    })
  },
  beforeDestroy() {
    sortable.destroy(this.instance)
  },
  methods: {
    update(e) {
      const { origin, destination } = e.detail
      const oldIndex = origin.index
      const newIndex = destination.index
      this.$emit('input', this.handleModelValue(oldIndex, newIndex))
      this.$nextTick(() => {
        this.$emit('update', {
          oldIndex,
          newIndex
        })
      })
    },
    handleModelValue(oldIndex, newIndex) {
      const newList = [...this.value]
      newList.splice(newIndex, 0, newList.splice(oldIndex, 1)[0])
      return newList
    },
  },
}
</script>

