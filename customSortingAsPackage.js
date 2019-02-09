var list = [];
var sortArr = function(arr){
  arr.sort(function(a,b) {
    return a - b ;
  });
  return arr;
}

module.exports = {
  addNumberToList: function(num) {
    list.push(num);
  },
  getSortedList: function(){
    return sortArr(list);
  },
};
