<template>
    <NuxtLink
        tag="div"
        class="section-link text-h5 row items-center"
        :to="hash"
        exact-active-class="active"
    >
        <q-icon name="tag" class="tag-icon col-auto q-pr-sm" />
        {{ label }}
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
    hash: `#${string}`,
    label: string
}>()
</script>

<style scoped lang="scss">
.section-link {
    text-decoration: none;
    cursor: pointer;
    color: #111;

    &.active > .tag-icon {
        opacity: 0.5;
    }

    &:hover > .tag-icon {
        opacity: 1;
    }

    .tag-icon {
        opacity: 0;
        color: #444;
        transition: opacity .2s ease;
    }
}
</style>
