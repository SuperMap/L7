import { Mapbox, Scene, MapTheme, GaodeMapV2, GaodeMap } from '@antv/l7';
import React, { useState } from 'react';
// tslint:disable-next-line:no-duplicate-imports
import { FunctionComponent, useEffect } from 'react';

const Demo: FunctionComponent = () => {
  const [scene, setScene] = useState<Scene | undefined>();

  useEffect(() => {
    const newScene = new Scene({
      id: 'map',
      map: new Mapbox({
        center: [120, 30],
        pitch: 0,
        zoom: 6.45,
      }),
      // map: new GaodeMapV2({
      //   style: 'dark',
      //   center: [120, 30],
      //   pitch: 0,
      //   zoom: 6.45,
      // }),
      // map: new GaodeMap({
      //   style: 'dark',
      //   center: [120, 30],
      //   pitch: 0,
      //   zoom: 6.45,
      // }),
    });

    newScene.on('loaded', () => {
      const newControl = new MapTheme({});
      newScene.addControl(newControl);
    });
  }, []);

  return (
    <>
      <div
        id="map"
        style={{
          height: '500px',
          position: 'relative',
        }}
      />
    </>
  );
};

export default Demo;
