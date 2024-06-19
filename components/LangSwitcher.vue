<template>
    <!-- <q-select
        v-model="lang"
        :options="locales"
        :label="$t('language')"
        dense
        outlined
        hide-bottom-space
        color="purple"
    /> -->
    <div class="row items-center justify-center">
        <q-tabs
            v-model="locale"
            class="col"
            active-color="purple"
        >
            <q-tab name="ru" label="RU" class="col q-px-sm" />
            <q-tab name="en" label="EN" class="col q-px-sm" />
        </q-tabs>
    </div>
</template>

<script setup lang="ts">
const { getLocaleCookie, setLocale } = useI18n()

const locale = computed({
    get () {
        return getLocaleCookie()
    },
    set (val) {
        setLocale(val ?? 'ru')
    },
})
</script>
