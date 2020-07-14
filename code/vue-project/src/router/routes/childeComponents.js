export default {
  path: '/child',
  name: 'child',
  component: () => import('@/views/childComponents/ChildContainer.vue'),
  meta: {
    title: 'ChildContainer',
    icon: 'ios-calendar',
  },
  children: [
    {
      path: 'one',
      name: 'one',
      component: () => import('@/views/childComponents/ChildContainerOne.vue'),
      meta: {
        title: 'Child',
        icon: 'md-calendar',
      },
    },
  ],
}
