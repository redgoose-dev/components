const items = [
  {
    category: 'media',
    path: 'media-source',
    name: 'Media Source',
    description: '이미지와 비디오를 불러오는 역할을 하는 컴포넌트입니다.',
  },
];

// index
export const index = items.reduce((map, obj) => {
  map.set(obj.path, {
    category: obj.category,
    path: obj.path,
    name: obj.name,
    description: obj.description,
  });
  return map;
}, new Map);

// categories
export const categories = new Map([
  [ 'typography', 'Typography' ],
  [ 'media', 'Media' ],
]);
