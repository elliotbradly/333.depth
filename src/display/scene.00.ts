import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'

import * as ActEng from '../../333.depth/01.engine.unit/engine.action'
import * as ActScn from '../../333.depth/02.scene.unit/scene.action'

export type HelloWorld = string | number

export const mount = async (value: HelloWorld) => {
  console.log('sampleFunc:: ', value)

  const instance = getCurrentInstance();
  const DEPTH = inject('DEPTH')

  var bit = await DEPTH['hunt'](ActEng.INIT_ENGINE, {});

  var bit = await DEPTH['hunt'](ActScn.WRITE_SCENE,  {idx:'scn00', src:'playCanvas'});
  var bit = await DEPTH['hunt'](ActScn.WRITE_SCENE,  {idx:'scn01', src:'interactiveCanvas'});
  
  instance?.proxy?.$forceUpdate();

  return value
}

export const update = async (value: HelloWorld) => {
  console.log('sampleFunc:: ', value)

  return value
}

export const unmount = async (value: HelloWorld) => {

  return value
}

export type Shade<Type> = {
  hunt: Function;
} & Type

