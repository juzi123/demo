clickMe.addEventListener('click', function (e) {
    popover.style.display = 'block'
})
wrapper.addEventListener('click', function (e) {
    e.stopPropagation() //阻止事件在起泡阶段继续传播
})
document.addEventListener('click', function () {
    popover.style.display = 'none'
})