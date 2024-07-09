<!-- <template>
    <canvas id="cvs" ref="cvs" />
</template>

<script lang="ts" setup>
const cvs = ref<HTMLCanvasElement>()

onMounted(() => {
    if (!cvs.value) {
        return
    }

    cvs.value.width = window.innerWidth
    cvs.value.height = window.innerHeight

    const ctx = cvs.value.getContext('2d')
})

class Animation {
    private width: number
    private height: number
    private ctx: CanvasRenderingContext2D

    constructor (private cvs: HTMLCanvasElement) {
        this.width = cvs.width
        this.height = cvs.height
        this.ctx = cvs.getContext('2d')!
    }

    loop () {
        window.requestAnimationFrame(this.loop.bind(this))

        const points = []
        for (let x = 0; x < this.width; x = x + this.width / 20) {
            for (let y = 0; y < this.height; y = y + this.height / 20) {
                const px = x + Math.random() * this.width / 20
                const py = y + Math.random() * this.height / 20
                const p = { x: px, originX: px, y: py, originY: py }
                points.push(p)
            }
        }

        // for each point find the 5 closest points
        for (let i = 0; i < points.length; i++) {
            const closest = []
            const p1 = points[i]
            for (let j = 0; j < points.length; j++) {
                const p2 = points[j]
                if (p1 !== p2) {
                    let placed = false
                    for (let k = 0; k < 5; k++) {
                        if (!placed) {
                            if (closest[k] === undefined) {
                                closest[k] = p2
                                placed = true
                            }
                        }
                    }

                    for (let k = 0; k < 5; k++) {
                        if (!placed) {
                            if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2
                                placed = true
                            }
                        }
                    }
                }
            }
            p1.closest = closest
        }

        // assign a circle to each point
        for (const i in points) {
            const c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)')
            points[i].circle = c
        }
    }
}
</script> -->
