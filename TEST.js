Array.prototype.myForeach = function (callback) {
    console.log('this', this);
}

[1, 2, 3].myForeach();