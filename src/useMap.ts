import React from "react";
import MapStore, { type MapInstance } from '@change/amap-core'


const useMap = (map?: any): MapInstance => {
  const mapRef = React.useRef<MapInstance>()
  if (!mapRef.current) {
    if (map) {
      mapRef.current = map;
    } else {
      mapRef.current = (new MapStore()).getMap()
    }
  }
  return mapRef.current as MapInstance
}

export default useMap;