<template>
    <q-page padding>
        <section-link class="q-py-md" :label="$t('interests.title')" hash="#interests" />

        <div class="row items-stretch q-col-gutter-md">
            <div v-for="interest in INTERESTS" :key="interest.title" class="col-md-6 col-xs-12">
                <q-card class="interest-card col-6" :class="interest.name" bordered>
                    <q-card-section class="q-pb-sm">
                        <div class="text-h6 row">
                            <span class="col">{{ interest.title }}</span>
                            <q-icon size="md" :name="interest.icon" />
                        </div>
                        <div class="text-subtitle2">
                            {{ interest.subtitle }}
                        </div>
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        {{ interest.body }}
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script lang="ts" setup>
const { tm } = useI18n()

const INTERESTS = tm('interests.interests')
console.log(INTERESTS)
</script>

<style lang="scss" scoped>
.interest-card {
    // max-width: 350px;
    // margin: 0 5px 5px 0;

    .text-subtitle2 {
        color: #777;
    }

    &.embedded {
        $color: #218380;
        box-shadow: 0 0 0 2px $color;

        .text-h6 > .q-icon {
            color: $color;
        }
    }

    &.music {
        $color: #D81159;
        box-shadow: 0 0 0 2px $color;

        .text-h6 > .q-icon {
            color: $color;
        }
    }

    &.compiler {
        $color: #FFBC42;
        box-shadow: 0 0 0 2px $color;

        .text-h6 > .q-icon {
            color: $color;
        }
    }

    &.electronics {
        $color: #C3979F;
        box-shadow: 0 0 0 2px $color;

        .text-h6 > .q-icon {
            color: $color;
        }
    }
}
</style>
