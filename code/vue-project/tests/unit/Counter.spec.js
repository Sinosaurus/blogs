import { shallowMount } from '@vue/test-utils'
import Counter from '@/views/test/Counter.vue'

describe('Counter.vue', () => {
  it('点击自增按钮', () => {
    const wrapper = shallowMount(Counter)
    wrapper.find('button').trigger('click')
    expect(wrapper.find('div').text()).to.satisfy(num => {
      num = num.replace('自增', '')
      return num > 0
    })
  })
})
