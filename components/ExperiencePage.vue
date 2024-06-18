<template>
    <q-page padding>
        <q-timeline color="purple" layout="dense">
            <q-timeline-entry heading tag="h6">
                <section-link :label="$t('experience')" hash="#experience" class="q-pa-none" />
            </q-timeline-entry>
            <q-timeline-entry
                :title="$t('freelance.title')"
                subtitle="2018"
                color="teal-6"
                icon="groups_3"
            >
                <div>
                    {{ $t('freelance.body') }}

                    <div class="stack col row q-gutter-xs justify-start">
                        <LogoBadge v-for="logo in ['php', 'html_css', 'js', 'ts', 'node']" :key="logo" class="col-shrink" :logo="logo" />
                        <!-- <q-badge class="
                            php-logo"
                        >
                            <q-icon name="php" />
                            </q-badge>
                            <q-badge class="js-logo">
                                <q-icon name="javascript" />
                            </q-badge>
                            <q-badge class="html-logo">
                                <q-icon name="html" />
                            </q-badge> -->
                    </div>
                </div>
            </q-timeline-entry>
            <q-timeline-entry
                :title="$t('betboom.title')"
                subtitle="6 August, 2020"
                color="red-8"
                avatar="/cv/betboom.png"
            >
                <div>
                    {{ $t('betboom.body') }}

                    <div class="stack col row q-gutter-xs justify-start">
                        <LogoBadge v-for="logo in ['ts', 'node', 'js', 'pg', 'redis', 'rmq']" :key="logo" class="col-shrink" :logo="logo" />
                    </div>
                </div>
            </q-timeline-entry>
            <q-timeline-entry
                :title="$t('detmir.title')"
                subtitle="29 August, 2023"
                avatar="/cv/detmir.png"
                color="blue-14"
            >
                <div>
                    {{ $t('detmir.body') }}

                    <div class="stack col row q-gutter-xs justify-start">
                        <LogoBadge v-for="logo in ['node', 'js', 'ts', 'pg']" :key="logo" class="col-shrink" :logo="logo" />
                    </div>
                </div>
            </q-timeline-entry>
            <q-timeline-entry color="purple" :title="$t('now.title')" :subtitle="experienceTotal" />
        </q-timeline>

        <q-separator spaced />

        <div class="column">
            <section-link class="q-py-md" :label="$t('skills.title')" hash="#experience" />

            <div v-for="xp in XP" :key="xp.label" class="tech-xp q-pb-sm">
                <span class=" text-subtitle1">{{ xp.label }}</span>
                <div class="row items-center">
                    <q-linear-progress
                        class="col"
                        size="10px"
                        :value="xp.xp"
                        rounded
                        :color="xp.color"
                    />
                    <div v-if="xp.professionally" class="col-auto text-caption q-px-md">
                        {{ $t('skills.professionally') }}
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script lang="ts" setup>
const { t } = useI18n()
console.log(useI18n())
const experienceTotal = computed(() => {
    const { years, months } = yearDuration(new Date('6 august, 2020'))

    return `${t('year', Math.floor(years))}, ${t('month', months)}`
})

const XP = [{
    label: 'Node.JS',
    xp: 0.9,
    color: 'node',
    professionally: true,
}, {
    label: 'TypeScript',
    xp: 0.96,
    color: 'ts',
    professionally: true,
}, {
    label: 'JavaScript',
    xp: 0.95,
    color: 'js',
    professionally: true,
}, {
    label: t('skills.pgLabel'),
    xp: 0.69,
    color: 'pg',
    professionally: true,
}, {
    label: 'Vue + Nuxt',
    xp: 0.7,
    color: 'vue',
}, {
    label: 'Rust',
    xp: 0.81,
    color: 'rust',
}, {
    label: 'C++',
    xp: 0.67,
    color: 'cpp',
}]
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap');

.normal-p {
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 3rem;
  color: mix(white, purple, 90%);
  text-shadow: -1px 1px 1px purple, 1px -1px 1px purple;
}

.text {
  display: block;
  position: relative;
  width: 100%;
  height: max-content;
  padding: 10px 50px;
  text-align: center;
}

.stack {
  padding-top: 10px;
}

.text-rust {
    color: #f64c01;
}

.text-cpp {
    color: #014381;
}

.text-vue {
    color: #41b883;
}

.text-ts {
    color: #3178c6;
}

.text-js {
    color: #f0db4f;
}

.text-pg {
    color: #336790;
}

.text-node {
    color: #3c873a;
}

</style>
