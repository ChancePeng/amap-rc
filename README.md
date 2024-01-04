# @change/amap-rc

[![NPM version](https://img.shields.io/npm/v/@change/amap-rc.svg?style=flat)](https://npmjs.org/package/@change/amap-rc)
[![NPM downloads](http://img.shields.io/npm/dm/@change/amap-rc.svg?style=flat)](https://npmjs.org/package/@change/amap-rc)

A react library developed with dumi

基于 [amap-core](https://github.com/ChancePeng/amap-core) 封装的 React 组件

## INSTALL

### 设置镜像源：

`http://47.93.163.104:4873/`

推荐使用 `nrm` 管理源地址

全局安装 `nrm`

```shell
npm install nrm -g
```

添加源:

```shell
nrm add change http://47.93.163.104:4873/
```

使用源：

```shell
nrm use change
```

### 安装

```shell
npm install @change/amap-rc
```

or

```shell
yarn add @change/amap-rc
```

## DOCS

[link to doc](https://chancepeng.github.io/amap-rc/api)

[API DOCUMENT](https://chancepeng.github.io/amap-core/api)

## 使用

```tsx
import Map from '@change/amap-rc';

export default () => {
  const map = Map.useMap();

  const onReady = () => {
    map.add(AMap.Polygon, {
      path: [],
      id: 'polygon',
    });

    map.get('polygon');
  };

  return <Map map={map} onReady={onReady} />;
};
```

## LICENSE

MIT
