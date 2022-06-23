<template>
  <div class="outer">
   
    <adaptWrap>123</adaptWrap>
  </div>
</template>

<script lang="ts">
import adaptWrap from '@/components/adaptWrap.vue'
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
    adaptWrap
  },
})
export default class HomeView extends Vue {}
</script>
<style lang="less" scoped>
.outer{
  width: 100%;
  overflow: hidden;
  height: 100vh;
}
</style>
