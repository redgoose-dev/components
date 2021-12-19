const categories = new Map([
  [ 'typography', 'Typography' ],
  [ 'media', 'Media' ],
]);

const items = [
  {
    key: 'mediaSource',
    category: 'media',
    path: 'media-source',
    tag: 'media-source',
  },
];

const tree = items.reduce((map, obj) => {
  map.set(obj.key, {
    category: obj.category,
    path: obj.path,
    tag: obj.tag,
  });
  return map;
}, new Map);

export {
  tree,
  categories,
};
