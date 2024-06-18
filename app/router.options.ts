import type { RouterOptions } from '@nuxt/schema'

export default <RouterOptions> {
    scrollBehavior (to, from, savedPosition) {
        console.log(to, from, savedPosition)

        const elId = to.hash
        const el = document.querySelector(elId)

        if (savedPosition) {
            return savedPosition
        }

        return {
            top: el?.offsetTop ?? 0,
            behavior: 'smooth',
        }
    },
}
