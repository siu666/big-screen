<template>
    <div class="screenAdapt" :style="style">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent,ref,onMounted,computed,Ref } from 'vue'
interface styleDec{
   width:string,
   height:string,
   transform:string
}
export default defineComponent({
    components:{
    },
    props:{
        width:{default:1920},
        height:{default:1080}
    },
    setup(props) {
        onMounted(()=>{
           window.onresize=Debounce(setStyle,1000)
        })
      
        const Debounce= (fn:any, t:number):any =>{
      const delay = t || 500
      let timer:any=null
      return function() {
        const args = arguments
        if (timer) {
          clearTimeout(timer)
        }
        const context:any = this
        timer = setTimeout(() => {
          timer = null
          fn.apply(context, args)
        }, delay)
      }
    }
        const getScale=()=>{
            const w = window.innerWidth / props.width
      const h = window.innerHeight / props.height
      return w < h ? w : h
        }
        const style:Ref<styleDec>=ref({
             width:props.width+'px',
             height:props.height+'px',
             transform:`scale(1) translate(-50%,-50%)`
        })
        const setStyle=()=>{
                  style.value.transform = 'scale(' + getScale + ') translate(-50%, -50%)'

        }
        return {
            style,
            getScale,
            setStyle
        }
        // const style=ref({
        //     width:
        // })
        // return
    },
})
</script>
<style lang="less" scoped>
   .screenAdapt{
        transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.3s;
  background: red;
   }
</style>