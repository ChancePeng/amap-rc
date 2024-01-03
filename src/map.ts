import React from 'react';
import useMap from './useMap';
import { load } from '@amap/amap-jsapi-loader';
import type { MapInstance } from '@change/amap-core'
import type { LoadOption } from './typing';

interface MapProps {
  map?: MapInstance,
  style?: React.CSSProperties,
  className?: string,
  id?: string,
  config: {
    loader: LoadOption,
    map?: AMap.MapOptions
  },
  theme?: Record<string, any>,
  onReady?: () => void,
  onError?: (error: any) => void
}

const Map: React.ForwardRefRenderFunction<MapInstance, MapProps> = (props, ref) => {
  const {
    id = 'change-map',
    className,
    map,
    config,
    style,
    theme,
    onError,
    onReady
  } = props;

  const wrapMap = useMap(map);

  React.useEffect(() => {
    const { loader, map: mapOptions } = config;
    load(loader).then((AMap: Window['AMap']) => {
      const instance = new AMap.Map(id, mapOptions)
      wrapMap.setMap(instance)
      onReady?.()
    }).catch(error => {
      onError?.(error)
    })
  }, [])

  React.useEffect(() => {
    if (theme) {
      Object.keys(theme).forEach(key => {
        wrapMap.setTheme(key, theme[key])
      })
    }
  }, [theme])

  React.useImperativeHandle(ref, () => wrapMap)

  return React.createElement('div', {
    id,
    className,
    style,
  })
}

export default React.forwardRef(Map);