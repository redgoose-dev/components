const items = [
  {
    key: 'mediaSource',
    category: 'media',
    path: 'media-source',
  },
];

export default items.reduce((map, obj) => {
  map.set(obj.key, {
    category: obj.category,
    path: obj.path,
  });
  return map;
}, new Map);
