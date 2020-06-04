```
const moduleA = {
    state: { ... },
    mutations: { ... },
    actions: { ... },
    getters: { ... }
}

const moduleB = {
    state: { ... },
    mutations: { ... },
    actions: { ... },
    getters: { ... }
}

const store = new Vuex.Store({
    modules:  {
        a: moduleA,
        b: moduleB
    }
})
```
