import Map from '@change/amap-rc';

export default () => {
  const map = Map.useMap();


  const onReady = () => {
    console.log('ready')
    const mapInstance = map.getMap()
    console.log(mapInstance)
    map.add(AMap.Circle, {
      center: [116.433322, 39.900255],
      radius: 1000, //半径
      id: 'circle'
    })
    map.setFitView('circle');
  }



  return (
    <Map
      map={map}
      onReady={onReady}
      style={{
        width: '1000px',
        height: '600px'
      }}
      config={{
        loader: {
          key: 'b413ab2e8c86d324fb45d15dfe5b7cc3',
          version: "2.0"
        }
      }}
    />
  )
}