import { GaodeMap, Scene, SelectControl } from '@antv/l7';
import { FunctionComponent, useEffect } from 'react';

class SelectDemo extends SelectControl {
  protected isMultiple = false;
}

const Demo: FunctionComponent = () => {
  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new GaodeMap({
        style: 'dark',
        center: [120, 30],
        pitch: 0,
        zoom: 6.45,
      }),
      // logoVisible: false,
    });

    scene.on('loaded', () => {
      // const layer = new RasterLayer({}).source(
      //   'http://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
      //   {
      //     parser: {
      //       type: 'rasterTile',
      //       tileSize: 256,
      //
      //       zoomOffset: 0,
      //       updateStrategy: 'overlap',
      //     },
      //   },
      // );
      //
      // scene.addLayer(layer);
      const newControl = new SelectDemo({
        position: 'topcenter',
        popperTrigger: 'hover',
        options: [
          {
            img:
              'https://gw.alipayobjects.com/mdn/rms_58ab56/afts/img/A*vky9QKrWjlwAAAAAAAAAAAAAARQnAQ',
            value: 'normal',
            text: 'normal',
          },
          {
            img:
              'https://gw.alipayobjects.com/mdn/rms_58ab56/afts/img/A*UlP0Qp9Zwx0AAAAAAAAAAAAAARQnAQ',
            value: 'light',
            text: 'light',
          },
          {
            img:
              'https://gw.alipayobjects.com/mdn/rms_58ab56/afts/img/A*UitzS5mxpSwAAAAAAAAAAAAAARQnAQ',
            value: 'dark',
            text: 'dark',
          },
          {
            img:
              'https://gw.alipayobjects.com/mdn/rms_58ab56/afts/img/A*UitzS5mxpSwAAAAAAAAAAAAAARQnAQ',
            value: 'dark1',
            text: 'dark1',
          },
        ],
        //   .map((item) => {
        //   const { img, ...option } = item;
        //   return option;
        // })
        defaultValue: 'normal',
      });

      newControl.on('selectChange', (e) => {
        console.log(e);
      });

      scene.addControl(newControl);
    });
  }, []);
  return (
    <div
      id="map"
      style={{
        height: '500px',
        position: 'relative',
      }}
    />
  );
};

export default Demo;
