<template>
  <view @click="showSys">hi</view>
  <navigator url="/pages/about/index">
    <button>about</button>
  </navigator>
</template>
<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
// import { hasInjectionContext } from 'vue-demi'

// defineOptions({
//   name: 'pageIndex'
// })
const showSys = async () => {
  const res = await uni.getSystemInfo()
  console.log(res)
}
onLoad(() => {
  console.log('23onLoad')
})
</script>

<style></style>
