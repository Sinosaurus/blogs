const BackToTop = (rate = 2, num = 0, el = document.body) => {

    // const doc = document.body.scrollTop ? document.body : document.documentElement
    const doc = el
    // 距离顶部的值
    let scrollTop = doc.scrollTop
    // 此处不适合使用箭头函数？？？
    const top = function () {
        scrollTop = scrollTop + (num - scrollTop) / (rate || 2);
        // 临界判断，终止动画
        if (scrollTop < (num + 1)) {
            doc.scrollTop = num;
            return;
        }
        doc.scrollTop = scrollTop;
        // 动画gogogo!
        requestAnimationFrame(top);
    };
    top();
}

export default BackToTop