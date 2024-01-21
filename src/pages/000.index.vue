<template>
   
   <button>HI</button>
   <br>

    <canvas id="indexCanvas"> </canvas>

    <br>

    <button>HI</button>

    <br>

    <canvas id="index0Canvas"> </canvas>

</template>

<script setup>
import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import * as ActShd from '../110.shade/00.shade.unit/shade.action'
import * as ActVsg from '../110.shade/01.visage.unit/visage.action'
import * as ActCan from '../110.shade/03.container.unit/container.action'

import {mount, update, unmount } from "../display/scene.00"
//import {mount, update, unmount } from "../composables/tiny-screen"

const router = useRouter()
const route = useRoute()

const instance = getCurrentInstance();
const SHADE = inject('SHADE')

onMounted(async () => {

  
  //change the locaton

  //window.location.replace("./grid");

  mount('on')
  
  //alert(window.electron.store.get('foo'));
})

onUpdated(async () => {
  // text content should be the same as current `count.value`

  update('on')


})

onUnmounted(async () => {

  //unmount('on')


})


</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GamePlay'
})
</script>
