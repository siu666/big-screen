<template>
  <div class="outer">
   
    <adaptWrap>
      <p class="text">123</p>
    </adaptWrap>
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
  width: 100vw;
  min-height: 100%;
  max-height: 100vh;
  overflow: hidden;
  .text{
    font-size: 16px;
  }
}
</style>
