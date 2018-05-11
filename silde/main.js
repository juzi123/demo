initialize()
var n = 1;

setInterval(function () {
    makeLeave(getImage(n))
        .one('transitionend', function (e) {
            makeReady($(e.currentTarget))
        })
    makeActive(getImage(n + 1))
    n += 1
}, 3000)

function initialize() {
    $('.images > img:nth-child(1)').addClass('active')
    $('.images > img:nth-child(2)').addClass('ready')
    $('.images > img:nth-child(3)').addClass('ready')
}
function getImage(n) {
    return $(`.images > img:nth-child(${setN(n)})`)
}
function makeActive($node) {
    return $node.removeClass('leave ready').addClass('active')
}
function makeLeave($node) {
    return $node.removeClass('active ready').addClass('leave')
}
function makeReady($node) {
    return $node.removeClass('leave active').addClass('ready')
}
function setN(n) {
    if (n > 3) {
        n = n % 3
        if (n === 0) {
            n = 3
        }
    }
    return n
}