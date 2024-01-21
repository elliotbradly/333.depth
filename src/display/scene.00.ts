import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'

import * as ActEng from '../../333.depth/01.engine.unit/engine.action'

export type HelloWorld = string | number

export const mount = async (value: HelloWorld) => {
  console.log('sampleFunc:: ', value)

  const instance = getCurrentInstance();
  const DEPTH = inject('DEPTH')

  var bit = await DEPTH['hunt'](ActEng.INIT_ENGINE, {});
  
  
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

