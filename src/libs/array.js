/**
 * group by array
 *
 * @param {Array} arr
 * @param {string} key
 * @return {Map}
 */
export function groupBy(arr, key)
{
  return arr.reduce((entryMap, e) => entryMap.set(e[key], [...entryMap.get(e[key])||[], e]), new Map());
}
