Array.prototype.removeDuplicatesAsync = function (arr) {
    return this.filter(function (item, index, self) {
        return self.indexOf(item) == index;
    });
}

console.log("start");
setTimeout(function () { console.log([4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync()); }, 2000);
console.log("End");