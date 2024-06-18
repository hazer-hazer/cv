<template>
    <q-layout view="hHh Lpr lff">
        <q-drawer
            v-model="leftDrawerOpen"
            side="left"
            bordered
            class="column justify-start"
        >
            <div class="avatar-container col-auto row justify-center">
                <q-avatar size="250px" color="purple">
                    <q-img
                        src="/me.png"
                        position="20% 40%"
                        img-class="avatar"
                        ratio="1"
                    />
                </q-avatar>
                <div class="column q-pt-md items-center">
                    <div class="col text-h6">
                        {{ $t('myName') }}
                    </div>
                    <div class="col text-caption">
                        {{ $t('developer') }}
                    </div>
                </div>
            </div>
            <q-tabs
                vertical
                class="col-auto"
                dense
                no-caps
                switch-indicator
                indicator-color="purple"
            >
                <q-route-tab
                    :label="$t('aboutMe.title')"
                    :to="{path: '/', hash: '#about'}"
                    class="tab"
                    exact
                    replace
                />
                <q-route-tab
                    :label="$t('experience')"
                    :to="{path: '/', hash: '#experience'}"
                    class="tab"
                    exact
                    replace
                />
                <q-route-tab
                    :label="$t('interests.title')"
                    :to="{path: '/', hash: '#interests'}"
                    class="tab"
                    exact
                    replace
                />
                <q-route-tab
                    :label="$t('projects.title')"
                    :to="{path: '/', hash: '#projects'}"
                    class="tab"
                    exact
                    replace
                />
            </q-tabs>

            <q-space />

            <q-list dense padding class="contact-links">
                <q-item v-ripple clickable href="https://github.com/hazer-hazer">
                    <q-item-section avatar>
                        <q-icon class="github-logo" name="fa-brands fa-github" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>
                            GitHub
                        </q-item-label>
                    </q-item-section>
                </q-item>
                <q-item v-ripple clickable href="https://t.me/hazer_hazer">
                    <q-item-section avatar>
                        <q-icon class="telegram-logo" name="telegram" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>
                            Telegram
                        </q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>

            <q-separator />

            <div class="row items-center">
                <LangSwitcher class="col-12" />
            </div>

            <!-- <q-fab icon="keyboard_arrow_up" direction="up">
                <q-fab-action>
                    <q-rating
                        v-model="rateCv"
                        size="1.5em"
                        icon="star"
                    />
                </q-fab-action>
            </q-fab> -->
        </q-drawer>

        <q-page-container>
            <div class="q-px-sm">
                <AboutMePage id="about" />
                <q-separator inset />
                <ExperiencePage id="experience" />
                <q-separator inset />
                <InterestsPage id="interests" />
                <q-separator inset />
                <ProjectsPage id="projects" />
            </div>
        </q-page-container>
    </q-layout>
</template>

<script lang="ts" setup>
const leftDrawerOpen = ref(true)

useHead({
    title: 'Ivan Gordeev CV',
})
</script>

<style lang="scss" scoped>
.q-page {
    min-height: max-content !important;
}

.tab {
    transition: padding-left 0.3s ease;
    border-radius: 0 10px 10px 0;

    &:hover {
        padding-left: 50px;

        &::before {
            width: 110px;
        }
    }

    &::before {
        content: '';
        position: absolute;
        left: 0; top: 50%;
        width: 90px;
        height: 1px;
        background-color: #800080;
        transition: width 0.3s ease;
    }
}

.avatar-container {
    padding: 100px 0 20px 0;

    .q-avatar {
        box-shadow: 0 0 1px 4px #80008066;
    }
}

.telegram-logo {
    color: #24a1de;
}

.github-logo {
    color: #171515;
}

.contact-links {
    .q-item {
        border-radius: 0 10px 10px 0;
    }
}

</style>
