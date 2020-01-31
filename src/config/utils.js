/** 升序 */
export const sortNumber = function (a, b) {
  return a - b;
}
/**
 * 数组对象排序
 */
export const ArrayObjSortByKey = function (array, key) {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  })
}
