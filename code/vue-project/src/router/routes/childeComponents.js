export default [
  {
    path: '/child',
    name: 'child',
    component: () => import('@/views/childComponents/ChildContainer.vue'),
    meta: {
      title: 'child'
    },
    children: [
      {
        path: '/child/one',
        name: 'one',
        component: () => import('@/views/childComponents/ChildContainerOne.vue')
      }
    ]
  }
]
