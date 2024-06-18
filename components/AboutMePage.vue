<template>
    <q-page padding>
        <section-link class="q-py-md" :label="$t('aboutMe.title')" hash="#about" />

        <div class="text-body1">
            {{ $t('aboutMe.body', {age}) }}
        </div>
    </q-page>
</template>

<script setup lang="ts">
const age = computed(() => yearDuration(new Date('16 July, 2002')).years)
</script>
