<template>
    <q-page padding>
        <section-link class="q-py-md" :label="$t('projects.title')" hash="#projects" />
        <div class="row q-col-gutter-sm">
            <div v-for="project in $tm('projects.list')" :key="project.name" class="col-md-6 col-xs-12">
                <q-card class="my-card overflow-hidden" bordered flat>
                    <q-card-section class="q-pa-none">
                        <q-img :src="project.image" :ratio="16/9" fit="cover" />
                    </q-card-section>
                    <q-card-section class="q-py-sm">
                        <div class="text-h6">
                            {{ project.title }}
                        </div>
                        <div class="text-subtitle2">
                            {{ project.subtitle }}
                        </div>
                    </q-card-section>
                    <q-card-section class="q-py-none">
                        {{ project.body }}
                    </q-card-section>
                    <q-card-actions align="left">
                        <q-btn
                            flat
                            :href="project.github"
                            exact
                            icon="fa-brands fa-github"
                            target="_blank"
                        />
                        <q-btn
                            v-if="project.crates"
                            flat
                            icon="img:/cv/crates-io.png"
                            target="_blank"
                            :href="project.crates"
                        />
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script setup lang="ts">
// const { tm } = useI18n()

// const PROJECTS = tm('projects.list')

// const cvImage = ref()
// const body = document.querySelector('body')
// if (body) {
//     const screenshot = await html2canvas(body)
//     cvImage.value = screenshot
// }

</script>

<style lang="scss" scoped>
</style>
