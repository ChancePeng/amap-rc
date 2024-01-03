import MapInstance from './map';
import useMap from './useMap';

type MapType = typeof MapInstance;

interface MapProps extends MapType {
  useMap: typeof useMap
}

const Map = MapInstance as MapProps;

Map.useMap = useMap;

export default Map;