<template>
    <canvas id="cvs" ref="cvs" />
</template>

<script setup lang="ts">
// const cvs = ref<HTMLCanvasElement>()

// onMounted(() => {
//     if (!cvs.value) {
//         return
//     }
//     cvs.value.width = 250
//     cvs.value.height = 250
//     const ctx = cvs.value.getContext('2d')
//     ctx?.fillRect(0, 0, 100, 100)
// })

// class Animation {
//     private ctx: CanvasRenderingContext2D
//     private width: number
//     private height: number

//     constructor (private cvs: HTMLCanvasElement) {
//         this.width = cvs.width
//         this.height = cvs.height
//         this.ctx = cvs.getContext('2d')!
//     }

//     loop () {
//         window.requestAnimationFrame(this.loop.bind(this))

//         this.ctx.globalCompositeOperation = 'source-over'
//         this.ctx.shadowBlur = 0
//         this.ctx.fillStyle = 'rgba(0,0,0,alp)'.replace('alp', '0.04')
//         this.ctx.fillRect(0, 0, this.width, this.height)
//         this.ctx.globalCompositeOperation = 'lighter'
//     }
// }
</script>

<style scoped lang="scss">
#cvs {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
