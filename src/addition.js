module.exports = {
    syncSum: function (a, b) {
        console.log(a, b);
    },
    asyncSum: function (a, b) {
        setTimeout(() => {
            console.log(a + b);
        }, 5000)
    }

}