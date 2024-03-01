export const MapTheme: {
  [key: string]: any;
} = {
  light: 'maplibre://styles/zcxduo/ck2ypyb1r3q9o1co1766dex29',
  dark: 'maplibre://styles/zcxduo/ck241p6413s0b1cpayzldv7x7',
  normal: 'maplibre://styles/maplibre/streets-v11',
  blank: {
    version: 8,
    // sprite: 'https://lzxue.github.io/font-glyphs/sprite/sprite',
    // glyphs:
    //   'https://gw.alipayobjects.com/os/antvdemo/assets/maplibre/glyphs/{fontstack}/{range}.pbf',
    sources: {},
    layers: [
      {
        id: 'background',
        type: 'background',
        layout: {
          visibility: 'none',
        },
      },
    ],
  },
};
