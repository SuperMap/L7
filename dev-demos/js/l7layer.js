var mapboxgl = window.mapboxgl;
var L7 = window.L7;
var data = [
  {
    w: 10,
    t: 24.6,
    s: '海南',
    l: 20,
    m: '东方',
    j: 100,
    h: 61407,
    mag: 8.4,
    capacity: 67200,
    v: 1,
    name: '铁路新村(华池路)',
    icon: 'icon1',
  },
  {
    w: 10.05,
    t: 24.6,
    s: '海南',
    l: 18,
    m: '东方',
    j: 100.05,
    h: 59838,
    v: 2,
    mag: 8.4,
    capacity: 6720,
    name: '金元坊',
    icon: 'icon1',
  },
];

var features = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { length: 10, level: 43, value: -4 },
      geometry: {
        type: 'LineString',
        coordinates: [
          [100, 10],
          [100.05, 10.05],
        ],
      },
    },
  ],
};

const source = {
  type: 'geojson',
  data: features,
};

const source2 = {
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Alabama', h20: 11 },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              [
                [100.06, 10],
                [99.95, 10],
                [100.06, 10.06],
                [100.06, 10],
              ],
            ],
          ],
        },
      },
    ],
  },
};

const pointSource = {
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: [100.05, 10.05],
        },
      },
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: [100, 10],
        },
      },
    ],
  },
};

const layer1 = {
  id: 'line',
  type: 'line',
  source,
  paint: {
    'line-color': 'green',
    'line-width': 20,
  },
};
const layer2 = {
  id: 'fill',
  type: 'fill',
  source: source2,
  paint: {
    'fill-color': 'rgba(255, 255, 0, 1)',
  },
};
const layer3 = {
  id: 'circle',
  type: 'circle',
  source: pointSource,
  paint: {
    'circle-radius': 12,
    'circle-color': 'blue',
    'circle-opacity': 1,
  },
};

export function addBaseLayer() {
  var LineLayer = new mapboxgl.supermap.L7Layer({ type: 'LineLayer' });
  LineLayer.getL7Layer()
    .source(source.data)
    .color('pink')
    .shape('line')
    .size(6);

  var polygonlayer = new mapboxgl.supermap.L7Layer({ type: 'PolygonLayer' });
  var l7Layer3 = polygonlayer.getL7Layer();

  l7Layer3.source(source2.data).color('green').shape('fill');
}

export function createMarker(map, data1 = data) {
  data1.forEach((item) => {
    const { j: lng, w: lat } = item;
    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
  });
  var layer = new mapboxgl.supermap.L7Layer({ type: 'PointLayer' });
  var l7Layer = layer.getL7Layer();
  l7Layer
    .source(data1, {
      parser: {
        type: 'json',
        x: 'j',
        y: 'w',
      },
    })
    .shape('circle')
    .size(10)
    .color('red');
  map.addLayer(layer);
  l7Layer.on('click', (e) => {
    console.log('layer: ', e);
  });
}
export var data2 = [
  {
    w: 30.413064631305545,
    t: 24.6,
    s: '海南',
    l: 20,
    m: '东方',
    j: 120.13967677397139,
    h: 61407,
    mag: 8.4,
    capacity: 67200,
    v: 1,
    name: '铁路新村(华池路)',
    icon: 'icon1',
  },
  {
    w: 30.245638261063814,
    t: 24.6,
    s: '海南',
    l: 20,
    m: '东方',
    j: 120.14548140629962,
    h: 61407,
    mag: 8.4,
    capacity: 67200,
    v: 1,
    name: '铁路新村(华池路)',
    icon: 'icon1',
  },
];

export function createButtons(map) {
  const btns = {
    creatIconPoint: () => creatIconPoint(data, map),
    creaWallLine: () => creaWallLine(source.data, map),
    creatTextPolygon: () => creatTextPolygon(source2.data, map),
    create3DColumnLayer: () => create3DColumnLayer(data, map),
    createAnimatePoint: () => createAnimatePoint(data, map),
    createShpePoint: () => createShpePoint(data, map),
    creatRadarPoint: () => creatRadarPoint(data, map),
    creatTextPoint: () => creatTextPoint(data, map),
    creatImagePoint: () => creatImagePoint(data, map),
    creatPathLine: () => creatPathLine(data, map),
    crea3dArcLine: () => crea3dArcLine(data, map),
    creahighLine: () => creahighLine(source.data, map),
    crea3DExtrude: () => crea3DExtrude(source2.data, map),
    createHeat: () => createHeat(data, map),
    createheatmap3D: () => createheatmap3D(data, map),
    creategrid: () => creategrid(data, map),
    creategrid3D: () => creategrid3D(data, map),
    createMvtLayer: () => createMvtLayer(map),
    createMoreShpePoint: () => createMoreShpePoint(data, map),
    createsandianPoint: () => createsandianPoint(data, map),
    createOcean: () => createOcean(data, map),
    createWater: () => createWater(data, map),
    createCityBuildings: () => createCityBuildings(data, map),
  };
  const parentDom = document.querySelector('#buttons');
  Object.keys(btns).map((key) => {
    const btn = document.createElement('button');
    btn.id = key;
    btn.onclick = btns[key];
    btn.innerHTML = key;
    parentDom.appendChild(btn);
  });
}
export function createCityBuildings(data, map) {
  fetch(
    'https://gw.alipayobjects.com/os/basement_prod/972566c5-a2b9-4a7e-8da1-bae9d0eb0117.json',
  )
    .then((res) => res.json())
    .then((data) => {
      var layer = new mapboxgl.supermap.L7Layer({
        type: 'PolygonLayer',
        options: { autoFit: true },
      });
      var l7Layer = layer.getL7Layer();
      l7Layer
        .source(data)
        .shape('extrude')
        .size(100)
        .color('h20', [
          '#816CAD',
          '#A67FB5',
          '#C997C7',
          '#DEB8D4',
          '#F5D4E6',
          '#FAE4F1',
          '#FFF3FC',
        ]);
      map.addLayer(layer);
    });
}

export function createWater(data, map) {
  fetch(
    'https://gw.alipayobjects.com/os/bmw-prod/67130c6c-7f49-4680-915c-54e69730861d.json',
  )
    .then((data) => data.json())
    .then(({ lakeData }) => {
      var layer = new mapboxgl.supermap.L7Layer({
        type: 'PolygonLayer',
        options: { autoFit: true },
      });
      var l7Layer = layer.getL7Layer();
      l7Layer
        .source(lakeData)
        .shape('water')
        .color('#1E90FF')
        .style({
          speed: 0.4,
          // waterTexture: 'https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*EojwT4VzSiYAAAAAAAAAAAAAARQnAQ'
        })
        .animate(true);
      map.addLayer(layer);
    });
}

export function createOcean(data, map) {
  fetch(
    'https://gw.alipayobjects.com/os/bmw-prod/67130c6c-7f49-4680-915c-54e69730861d.json',
  )
    .then((data) => data.json())
    .then(({ lakeData }) => {
      var layer = new mapboxgl.supermap.L7Layer({
        type: 'PolygonLayer',
        options: { autoFit: true },
      });
      var l7Layer = layer.getL7Layer();
      l7Layer
        .source(lakeData)
        .shape('ocean')
        .color('#1E90FF')
        .style({
          watercolor: '#6D99A8',
          // watercolor: '#0f0',
        })
        .animate(true);
      var layer1 = new mapboxgl.supermap.L7Layer({
        type: 'PolygonLayer',
      });
      var l7Layer1 = layer1.getL7Layer();
      l7Layer1.source(lakeData).shape('fill').color('red').style({});
      // map.addLayer(layer);

      map.addLayer(layer1);
    });
}

export function createsandianPoint(data, map) {
  fetch(
    'https://gw.alipayobjects.com/os/basement_prod/6c4bb5f2-850b-419d-afc4-e46032fc9f94.csv',
  )
    .then((res) => res.text())
    .then((data) => {
      var layer = new mapboxgl.supermap.L7Layer({ type: 'PointLayer' });
      var l7Layer = layer.getL7Layer();
      l7Layer
        .source(data, {
          parser: {
            type: 'csv',
            x: 'Longitude',
            y: 'Latitude',
          },
        })
        .shape('circle')
        .size(4)
        .active(true)
        .color('Magnitude', [
          '#0A3663',
          '#1558AC',
          '#3771D9',
          '#4D89E5',
          '#64A5D3',
          '#72BED6',
          '#83CED6',
          '#A6E1E0',
          '#B8EFE2',
          '#D7F9F0',
        ])
        .style({
          opacity: 0.5,
          strokeWidth: 0,
        });

      map.addLayer(layer);
    });
}

export function createMoreShpePoint(data, map) {
  fetch(
    'https://gw.alipayobjects.com/os/basement_prod/337ddbb7-aa3f-4679-ab60-d64359241955.json',
  )
    .then((res) => res.json())
    .then((data) => {
      data.features = data.features.filter((item) => {
        return item.properties.capacity > 800;
      });
      var layer = new mapboxgl.supermap.L7Layer({ type: 'PointLayer' });
      var l7Layer = layer.getL7Layer();
      l7Layer
        .source(data)
        .shape('circle')
        .size('capacity', [0, 16])
        .color('capacity', [
          '#34B6B7',
          '#4AC5AF',
          '#5FD3A6',
          '#7BE39E',
          '#A1EDB8',
          '#CEF8D6',
        ])
        .active(true)
        .style({
          opacity: 0.5,
          strokeWidth: 0,
        });
      map.addLayer(layer);
    });
}

export function create3DColumnLayer(data, map) {
  var layer = new mapboxgl.supermap.L7Layer({ type: 'PointLayer' });
  var l7Layer = layer.getL7Layer();
  l7Layer
    .source(data, {
      parser: {
        type: 'json',
        x: 'j',
        y: 'w',
      },
    })
    .shape('name', [
      'cylinder',
      'triangleColumn',
      'hexagonColumn',
      'squareColumn',
    ])
    .size('h', (h) => {
      return [6, 6, h / 500];
    })
    .color('name', ['#739DFF', '#61FCBF', '#FFDE74', '#FF896F']);
  map.addLayer(layer);
}

export function createShpePoint(data, map) {
  var layer = new mapboxgl.supermap.L7Layer({ type: 'PointLayer' });
  var l7Layer = layer.getL7Layer();
  l7Layer
    .source(data, {
      parser: {
        type: 'json',
        x: 'j',
        y: 'w',
      },
    })
    .shape('name', [
      'circle',
      'triangle',
      'square',
      'pentagon',
      'hexagon',
      'octogon',
      'hexagram',
      'rhombus',
      'vesica',
    ])
    .size('l', [10, 25])
    .active(true)
    .color('name', ['#5B8FF9', '#5CCEA1', '#5D7092', '#F6BD16', '#E86452'])
    .style({
      opacity: 0.8,
      strokeWidth: 2,
    });
  map.addLayer(layer);
}

export function createAnimatePoint(data, map) {
  var layer = new mapboxgl.supermap.L7Layer({ type: 'PointLayer' });
  var l7Layer = layer.getL7Layer();
  l7Layer
    .source(data, {
      parser: {
        type: 'json',
        x: 'j',
        y: 'w',
      },
    })
    .shape('circle')
    .active(true)
    .animate(true)
    .size(40)
    .color('#ffa842')
    .style({
      // offsets: [ 40, 40 ]
    });
  map.addLayer(layer);
}

export function creatRadarPoint(data, map) {
  var layer = new mapboxgl.supermap.L7Layer({ type: 'PointLayer' });
  var l7Layer = layer.getL7Layer();
  l7Layer
    .source(data, {
      parser: {
        type: 'json',
        x: 'j',
        y: 'w',
      },
    })
    .shape('radar')
    .size(100)
    .color('#d00')
    .style({
      speed: 5,
    })
    .animate(true);
  map.addLayer(layer);
}
export function creatTextPoint(data, map) {
  var layer = new mapboxgl.supermap.L7Layer({ type: 'PointLayer' });
  var l7Layer = layer.getL7Layer();
  l7Layer
    .source(data, {
      parser: {
        type: 'json',
        x: 'j',
        y: 'w',
      },
    })
    .shape('name', 'text')
    .size(10)
    .color('#084081')
    .style({
      textAnchor: 'center', // 文本相对锚点的位置 center|left|right|top|bottom|top-left
      textOffset: [0, 0], // 文本相对锚点的偏移量 [水平, 垂直]
      spacing: 2, // 字符间距
      padding: [1, 1], // 文本包围盒 padding [水平，垂直]，影响碰撞检测结果，避免相邻文本靠的太近
      stroke: '#ffffff', // 描边颜色
      strokeWidth: 2, // 描边宽度
      strokeOpacity: 1.0,
      rotation: 0, // 常量旋转
      // textAllowOverlap: false,
      // rotation:{ // 字段映射旋转
      //   field: 't',
      //   value:[30,270]
      // }
    });
  map.addLayer(layer);
}

export function creatTextPolygon(data, map) {
  var layer = new mapboxgl.supermap.L7Layer({ type: 'PolygonLayer' });
  var l7Layer = layer.getL7Layer();
  l7Layer.source(data).color('blue').shape('name', 'text').size(20).style({
    // textAnchor: 'center', // 文本相对锚点的位置 center|left|right|top|bottom|top-left
    // textOffset: [ 0, 0 ], // 文本相对锚点的偏移量 [水平, 垂直]
    // spacing: 2, // 字符间距
    // padding: [ 1, 1 ], // 文本包围盒 padding [水平，垂直]，影响碰撞检测结果，避免相邻文本靠的太近
    stroke: '#ffffff', // 描边颜色
    strokeWidth: 0.3, // 描边宽度
    strokeOpacity: 1.0,
  });
  map.addLayer(layer);
}

export function creatIconPoint(data, map) {
  map.getL7Scene().then((scene) => {
    const fontFamily = 'iconfont';
    const fontPath =
      '//at.alicdn.com/t/font_2534097_fcae9o2mxbv.woff2?t=1622200439140';
    scene.addFontFace(fontFamily, fontPath);
    scene.addIconFont('icon1', '&#xe6d4;');
    scene.once('fontloaded', () => {
      var layer = new mapboxgl.supermap.L7Layer({ type: 'PointLayer' });
      var l7Layer = layer.getL7Layer();
      l7Layer
        .source(data, {
          parser: {
            type: 'json',
            x: 'j',
            y: 'w',
          },
        })
        .shape('icon', 'text')
        .size(20)
        .color('blue')
        .style({
          textAnchor: 'center', // 文本相对锚点的位置 center|left|right|top|bottom|top-left
          // padding: [ 0, 0 ], // 文本包围盒 padding [水平，垂直]，影响碰撞检测结果，避免相邻文本靠的太近
          stroke: '#ffffff', // 描边颜色
          fontFamily,
          iconfont: true,
          // textAllowOverlap: true
        });
      map.addLayer(layer);
    });
  });
}

export function creatIconTempPoint(data, map) {
  map.getL7Scene().then((scene) => {
    const fontFamily = 'iconfont';
    const fontPath =
      '//at.alicdn.com/t/font_2534097_x6rsov3i1g.woff2?t=1622107341225';
    scene.addIconFont('icon1', '&#xe69e;');
    scene.addFontFace(fontFamily, fontPath);

    const colors = [
      '#87CEFA',
      '#00BFFF',

      '#7FFFAA',
      '#00FF7F',
      '#32CD32',

      '#F0E68C',
      '#FFD700',

      '#FF7F50',
      '#FF6347',
      '#FF0000',
    ];

    scene.once('fontloaded', () => {
      var layer = new mapboxgl.supermap.L7Layer({ type: 'PointLayer' });
      var l7Layer = layer.getL7Layer();
      l7Layer
        .source(data, {
          parser: {
            type: 'json',
            x: 'j',
            y: 'w',
          },
        })
        .shape('icon', 'text')
        .size(25)
        .style({
          textAnchor: 'center', // 文本相对锚点的位置 center|left|right|top|bottom|top-left
          textOffset: [-25, 15],
          padding: [2, 2],
          fontFamily,
          iconfont: true,
          // textAllowOverlap: true
        });
      map.addLayer(layer);
    });
  });
}

export function creatImagePoint(data, map) {
  map.getL7Scene().then((scene) => {
    scene.addImage(
      '00',
      'https://gw.alipayobjects.com/zos/basement_prod/604b5e7f-309e-40db-b95b-4fac746c5153.svg',
    );
    scene.addImage(
      '01',
      'https://gw.alipayobjects.com/zos/basement_prod/30580bc9-506f-4438-8c1a-744e082054ec.svg',
    );
    scene.addImage(
      '02',
      'https://gw.alipayobjects.com/zos/basement_prod/7aa1f460-9f9f-499f-afdf-13424aa26bbf.svg',
    );

    var layer = new mapboxgl.supermap.L7Layer({ type: 'PointLayer' });
    var l7Layer = layer.getL7Layer();
    l7Layer
      .source(data, {
        parser: {
          type: 'json',
          x: 'j',
          y: 'w',
        },
      })
      .shape('name', ['00', '01', '02'])
      .size(10);
    map.addLayer(layer);
  });
}

export function creatPathLine(data, map) {
  var data1 = [
    {
      level: 2,
      number: '902',
      path: [
        [100, 10, 420],
        [100.05, 10.05, 420],
      ],
    },
  ];
  var layer = new mapboxgl.supermap.L7Layer({ type: 'LineLayer' });
  var l7Layer = layer.getL7Layer();
  l7Layer
    .source(data1, {
      parser: {
        type: 'json',
        coordinates: 'path',
      },
    })
    .size([0.8, 1])
    .shape('line')
    // .active(true)
    // .style({heightfixed:true})
    .color('red');
  map.addLayer(layer);
}

export function crea3dArcLine(data, map) {
  var data1 = [
    {
      tripduration: 452,
      starttime: '2017-12-01 00:00:59',
      stoptime: '2017-12-01 00:08:32',
      'start station id': 3183,
      'start station name': 'Exchange Place',
      'start station latitude': 10,
      'start station longitude': 100,
      'end station id': 3199,
      'end station name': 'Newport Pkwy',
      'end station latitude': 10.05,
      'end station longitude': 100.05,
      bikeid: 29607,
      usertype: 'Subscriber',
      'birth year': 1988,
      gender: 1,
    },
  ];
  var layer = new mapboxgl.supermap.L7Layer({
    type: 'LineLayer',
    options: { blend: 'normal' },
  });
  var l7Layer = layer.getL7Layer();
  l7Layer
    .source(data1, {
      parser: {
        type: 'json',
        x: 'start station longitude',
        y: 'start station latitude',
        x1: 'end station longitude',
        y1: 'end station latitude',
      },
    })
    .size(2)
    .shape('arc3d')
    .color('red')
    // .animate({
    //   interval: 0.5,
    //   trailLength: 0.5,
    //   duration: 5
    // })
    .style({
      opacity: 1,
    });
  map.addLayer(layer);
}

export function creahighLine(data, map) {
  var layer = new mapboxgl.supermap.L7Layer({ type: 'LineLayer' });
  var l7Layer = layer.getL7Layer();
  l7Layer
    .source(data)
    .scale('value', {
      type: 'quantile',
    })
    .size('value', [0.5, 100, 1.5, 200])
    .shape('line')
    .color(
      'value',
      [
        '#0A3663',
        '#1558AC',
        '#3771D9',
        '#4D89E5',
        '#64A5D3',
        '#72BED6',
        '#83CED6',
        '#A6E1E0',
        '#B8EFE2',
        '#D7F9F0',
      ].reverse(),
    );
  map.addLayer(layer);
}

export function creaWallLine(data, map) {
  var layer = new mapboxgl.supermap.L7Layer({
    type: 'LineLayer',
    options: { blend: 'normal' },
  });
  var l7Layer = layer.getL7Layer();
  l7Layer.source(data).size(40).shape('wall').style({
    heightfixed: true,
    opacity: 1,
    sourceColor: '#0DCCFF',
    targetColor: 'rbga(255,255,255, 0)',
  });
  map.addLayer(layer);
}

export function crea3DExtrude(data, map) {
  var layer = new mapboxgl.supermap.L7Layer({ type: 'PolygonLayer' });
  var l7Layer = layer.getL7Layer();
  l7Layer.source(data).shape('extrude').size(500).color('red');
  map.addLayer(layer);
}

export function createHeat(data, map) {
  var layer = new mapboxgl.supermap.L7Layer({ type: 'HeatmapLayer' });
  var l7Layer = layer.getL7Layer();
  l7Layer
    .source(data, {
      parser: {
        type: 'json',
        x: 'j',
        y: 'w',
      },
    })
    .shape('heatmap')
    .size('mag', [0, 1.0]) // weight映射通道
    .style({
      intensity: 2,
      radius: 20,
      rampColors: {
        colors: [
          '#FF4818',
          '#F7B74A',
          '#FFF598',
          '#91EABC',
          '#2EA9A1',
          '#206C7C',
        ].reverse(),
        positions: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
      },
    });
  map.addLayer(layer);
}

export function createMvtLayer(map) {
  const url =
    'https://mvt.amap.com/district/CHN2/{z}/{x}/{y}/4096?key=309f07ac6bc48160e80b480ae511e1e9&version=';
  const source = new L7.Source(url, {
    parser: {
      type: 'mvt',
      tileSize: 256,
      warp: false,
    },
  });
  const colors = {};
  const GDPSpeed = {
    520000: 10, //贵州
    540000: 10, //西藏
    530000: 8.5, //云南
    500000: 8.5, //重庆
    360000: 8.5, //江西
    340000: 8.0, //安徽
    510000: 7.5, //四川
    350000: 8.5, //福建
    430000: 8.0, //湖南
    420000: 7.5, //湖北
    410000: 7.5, //河南
    330000: 7.0, //浙江
    640000: 7.5, //宁夏
    650000: 7.0, //新疆
    440000: 7.0, //广东
    370000: 7.0, //山东
    450000: 7.3, //广西
    630000: 7.0, //青海
    320000: 7.0, //江苏
    140000: 6.5, //山西
    460000: 7, // 海南
    310000: 6.5, //上海
    110000: 6.5, // 北京
    130000: 6.5, // 河北
    230000: 6, // 黑龙江
    220000: 6, // 吉林
    210000: 6.5, //辽宁
    150000: 6.5, //内蒙古
    120000: 5, // 天津
    620000: 6, // 甘肃
    610000: 8.5, // 甘肃
    710000: 6.64, //台湾
    810000: 6.0, //香港
    820000: 6.7, //澳门
  };
  const getColorByDGP = function (adcode) {
    if (!colors[adcode]) {
      const gdp = GDPSpeed[adcode];
      if (!gdp) {
        colors[adcode] = 'rgb(227,227,227)';
      } else {
        const rg = 255 - Math.floor(((gdp - 5) / 5) * 255);
        colors[adcode] = 'rgb(' + rg + ',' + rg + ',255)';
      }
    }
    return colors[adcode];
  };
  var fill = new mapboxgl.supermap.L7Layer({
    type: 'PolygonLayer',
    options: { sourceLayer: 'CHN_Cities' },
  });
  fill
    .getL7Layer()
    .source(source)
    .shape('fill')
    .color('adcode_pro', getColorByDGP);

  var line = new mapboxgl.supermap.L7Layer({
    type: 'LineLayer',
    options: { sourceLayer: 'CHN_Cities_L' },
  });
  line.getL7Layer().source(source).shape('line').color('#FFA500');

  var line2 = new mapboxgl.supermap.L7Layer({
    type: 'LineLayer',
    options: { sourceLayer: 'CHN_L' },
  });
  line2.getL7Layer().source(source).shape('line').size(0.6).color('#053061');

  var point = new mapboxgl.supermap.L7Layer({
    type: 'PointLayer',
    options: { sourceLayer: 'CHN_Cities', blend: 'normal' },
  });
  point.getL7Layer().source(source).shape('id', 'text').size(12).color('#000');

  map.addLayer(fill);
  map.addLayer(line);
  map.addLayer(line2);
  map.addLayer(point);
}

export function createheatmap3D(data, map) {
  var layer = new mapboxgl.supermap.L7Layer({ type: 'HeatmapLayer' });
  var l7Layer = layer.getL7Layer();
  l7Layer
    .source(data, {
      parser: {
        type: 'json',
        x: 'j',
        y: 'w',
      },
    })
    .size('capacity', [0, 1])
    .shape('heatmap3D')
    // weight映射通道
    .style({
      intensity: 15,
      radius: 15,
      rampColors: {
        colors: [
          '#2E8AE6',
          '#69D1AB',
          '#DAF291',
          '#FFD591',
          '#FF7A45',
          '#CF1D49',
        ],
        positions: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
      },
    });
  map.addLayer(layer);
}

export function creategrid(data, map) {
  var layer = new mapboxgl.supermap.L7Layer({ type: 'HeatmapLayer' });
  var l7Layer = layer.getL7Layer();
  l7Layer
    .source(data, {
      parser: {
        type: 'json',
        x: 'j',
        y: 'w',
      },
      transforms: [
        {
          type: 'grid',
          size: 200,
          field: 'v',
          method: 'sum',
        },
      ],
    })
    .shape('square')
    .style({
      coverage: 1,
      angle: 0,
    })
    .color('red');
  map.addLayer(layer);
}
export function creategrid3D(data, map) {
  var layer = new mapboxgl.supermap.L7Layer({ type: 'HeatmapLayer' });
  var l7Layer = layer.getL7Layer();
  l7Layer
    .source(data, {
      parser: {
        type: 'json',
        x: 'j',
        y: 'w',
      },
      transforms: [
        {
          type: 'hexagon',
          size: 250,
          field: 'v',
          method: 'sum',
        },
      ],
    })
    .size('sum', [0, 600])
    .shape('hexagonColumn')
    .style({
      coverage: 0.8,
      angle: 0,
    })
    .color('sum', [
      '#094D4A',
      '#146968',
      '#1D7F7E',
      '#289899',
      '#34B6B7',
      '#4AC5AF',
      '#5FD3A6',
      '#7BE39E',
      '#A1EDB8',
      '#C3F9CC',
      '#DEFAC0',
      '#ECFFB1',
    ]);
  map.addLayer(layer);
}
