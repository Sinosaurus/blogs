// 三种状态
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
    let _this = this_this.currentState = PENDING
    _this.value = undefined

    _this.resolvedCallbacks = []
    _this.rejectedCallbacks = []

    _this.resolve = value => {
        if (value instanceof MyPromise) 
    }
}