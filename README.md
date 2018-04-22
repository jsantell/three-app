# three-app

[![Build Status](http://img.shields.io/npm/v/@jsantell/three-app.svg?style=flat-square)](https://www.npmjs.org/package/@jsantell/three-app)

Personal generalized app structure for [THREE](https://github.com/mrdoob/three.js) apps. Hosted on [npm](https://npmjs.org) as [@jsantell/three-app](https://www.npmjs.org/package/@jsantell/three-app). ES6-ified for inclusion via module bundler.

Best explanation is probably just to read [the source](ThreeApp.js).

## Installation

`$ npm install --save @jsantell/three-app`

## Usage

```js
import { Mesh, BoxBufferGeometry, MeshBasicMaterial } from 'three';
import ThreeApp from '@jsantell/three-app';

class App extends ThreeApp {
  init() {
    this.box = new Mesh(new BoxBufferGeometry(), new MeshBasicMaterial({color:0xff0000}));
    this.scene.add(this.box);
    this.camera.position.z = 3;
  }

  update(t, delta) {
    this.box.rotation.z += delta * 0.001;
    this.box.rotation.y += delta * 0.001;
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}

window.app = new App();
```

## Build

`$ npm run build`

## Publish

`$ npm run version`

## License

MIT License, Copyright © 2018 Jordan Santell
