import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'

export type HelloWorld = string | number

export const mount = async (value: HelloWorld) => {
  console.log('sampleFunc:: ', value)

  const instance = getCurrentInstance();
  const DEPTH = inject('DEPTH')

  //var bit = await DEPTH['hunt'](ActEng.INIT_ENGINE, {});

  //var bit = await DEPTH['hunt'](ActScn.WRITE_SCENE,  {idx:'scn00', src:'playCanvas'});
  //var bit = await DEPTH['hunt'](ActScn.WRITE_SCENE,  {idx:'scn01', src:'interactiveCanvas'});

  const ws = new WebSocket('ws://localhost:1000')

  ws.onopen = () => {
    //alert('ws opened on browser')
    ws.send('hello world')
  }

  ws.onmessage = (message) => {
    console.log(`message received`, message.data)
  }

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

