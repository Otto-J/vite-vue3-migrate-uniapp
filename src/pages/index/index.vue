<template>
  <view @click="showSys">hi</view>
</template>
<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'

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
