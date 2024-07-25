<template>
    <q-layout view="Lhr lpR fFf">
        <q-drawer
            v-model="leftDrawerOpen"
            side="left"
            bordered
            class="column justify-start"
        >
            <!-- <template #mini>
                <div class="column items-center">
                    <q-avatar class="col-auto q-mt-xs" size="50px" color="purple">
                        <q-img
                            src="/cv/me.png"
                            img-class="avatar"
                            ratio="1"
                        />
                    </q-avatar>
                    <q-tabs
                        vertical
                        class="col-auto q-mt-lg"
                        style="width: 100%"
                        indicator-color="purple"
                        switch-indicator
                        no-caps
                    >
                        <q-route-tab :to="{hash: '#about'}" icon="info" />
                        <q-route-tab icon="work" :to="{hash: '#experience'}" />
                        <q-route-tab icon="interests" :to="{hash: '#interests'}" />
                        <q-route-tab icon="design_services" :to="{hash: '#projects'}" />
                    </q-tabs>
                </div>
            </template> -->

            <div class="avatar-container col-auto row justify-center">
                <q-avatar size="250px" color="purple">
                    <q-img
                        src="/cv/me.png"
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
                inline-label
                indicator-color="purple"
            >
                <q-route-tab
                    :label="$t('aboutMe.title')"
                    :to="localePath({path: '/', hash: '#about'})"
                    class="tab"
                    exact
                    replace
                />
                <q-route-tab
                    :label="$t('experience.title')"
                    :to="localePath({path: '/', hash: '#experience'})"
                    class="tab"
                    exact
                    replace
                />
                <q-route-tab
                    :label="$t('interests.title')"
                    :to="localePath({path: '/', hash: '#interests'})"
                    class="tab"
                    exact
                    replace
                />
                <q-route-tab
                    :label="$t('projects.title')"
                    :to="localePath({path: '/', hash: '#projects'})"
                    class="tab"
                    exact
                    replace
                />
            </q-tabs>

            <q-space />

            <div class="col-auto column">
                <q-list padding class="contact-links">
                    <q-item v-ripple clickable href="https://github.com/hazer-hazer" target="_blank">
                        <q-item-section avatar>
                            <q-icon class="github-logo social-icon" name="fa-brands fa-github" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>
                                GitHub
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item v-ripple clickable href="https://t.me/hazer_hazer" target="_blank">
                        <q-item-section avatar>
                            <q-icon class="telegram-logo social-icon" name="telegram" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>
                                Telegram
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item v-ripple clickable href="https://hh.ru/resume/91d74636ff05823a120039ed1f776d4d465875" target="_blank">
                        <q-item-section avatar>
                            <q-avatar size="26px">
                                <q-img
                                    src="/cv/hh.png"
                                    :ratio="1"
                                />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>
                                HeadHunter
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item v-ripple clickable href="https://stackoverflow.com/users/10563181/hazer-hazer" target="_blank">
                        <q-item-section avatar>
                            <q-avatar size="26px">
                                <q-img
                                    src="/cv/stackoverflow.png"
                                    :ratio="1"
                                />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>
                                stack<b style="padding-left: 1px;">overflow</b>
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>

                <q-separator />

                <div class="row col q-my-sm justify-center">
                    <q-btn
                        ref="toggleThemeBtn"
                        class="col-auto"
                        flat
                        :icon="themeIcon"
                        @click="toggleTheme"
                    />
                </div>

                <q-separator />

                <div class="row items-center">
                    <LangSwitcher class="col-12" />
                </div>
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
                <q-separator inset />
                <q-page padding>
                    <p class="text-h4 text-center q-pb-lg">
                        {{ $t('finalWord') }}
                    </p>
                </q-page>
            </div>
        </q-page-container>

        <q-footer v-if="mobileView" v-model="mobileView" reveal style="height: max-content;">
            <a v-for="url in hitCounterUrls" :key="url" style="display: none;" href="https://hits.seeyoufarm.com"><img :src="url"></a>
            <q-toolbar
                class="row q-pa-none"
                :class="$q.dark.isActive ?
                    ['bg-dark', 'text-white'] : ['bg-white', 'text-dark']"
            >
                <q-tabs
                    class="col q-ma-none"
                    indicator-color="purple"
                    no-caps
                    switch-indicator
                >
                    <q-route-tab :to="{hash: '#about'}">
                        <q-avatar class="col-auto" size="35px" color="purple">
                            <q-img
                                src="/cv/me.png"
                                img-class="avatar"
                                ratio="1"
                            />
                        </q-avatar>
                    </q-route-tab>
                    <q-route-tab icon="work" :to="{hash: '#experience'}" />
                    <q-route-tab icon="interests" :to="{hash: '#interests'}" />
                    <q-route-tab icon="design_services" :to="{hash: '#projects'}" />
                    <q-btn
                        class="col-2"
                        style="height: 100%;"
                        flat
                        dense
                        :label="locale"
                        @click="changeLocale"
                    />
                    <q-btn
                        ref="toggleThemeBtn"
                        :icon="themeIcon"
                        class="col"
                        flat
                        size="sm"
                        style="height: 100%;"
                        dense
                        @click="toggleTheme"
                    />
                </q-tabs>
            </q-toolbar>
        </q-footer>
    </q-layout>
</template>

<script lang="ts" setup>
import type { QToggle } from 'quasar'

const { getLocaleCookie, setLocale, locales } = useI18n()
const localePath = useLocalePath()
const $q = useQuasar()
// const leftDrawerMiniBreakpoint = 700
const footerBreakpoint = 700
const mobileView = computed(() => $q.screen.width < footerBreakpoint)
const leftDrawerOpen = computed(() => $q.screen.width >= footerBreakpoint)

// const leftDrawerMini = computed(() => $q.screen.width < leftDrawerMiniBreakpoint)

useHead({
    title: 'Ivan Gordeev CV',
})

const locale = computed(() => getLocaleCookie())
const changeLocale = () => {
    setLocale(locale.value === 'ru' ? 'en' : 'ru')
}

const toggleThemeBtn = ref<InstanceType<typeof QToggle> | null>(null)
const themeIcon = computed(() => $q.dark.isActive ? 'dark_mode' : 'light_mode')
const toggleTheme = async () => {
    if (!toggleThemeBtn.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        $q.dark.toggle()
        return
    }

    await document.startViewTransition?.(() => {
        $q.dark.toggle()
        watch(() => $q.dark.isActive, (value) => {
            $q.dark.set(value)
        }, { once: true, flush: 'sync' })
        // watchSyncEffect(() => {
        // }, {
        // })
    }).ready

    const { top, left, width, height } = toggleThemeBtn.value.$el.getBoundingClientRect()

    const x = left + width / 2
    const y = top + height / 2
    const right = window.innerWidth - left
    const bottom = window.innerHeight - top
    const maxRadius = Math.hypot(
        Math.max(left, right),
        Math.max(top, bottom),
    )

    document.documentElement.animate({
        clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
    }, {
        duration: 500,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
    })
}

const hitCounterUrls = computed(() => [
    '',
    ...locales.value,
].map(locale => `https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fhazer-hazer.github.io%2Fcv%2F${locale}&count_bg=%23B266FF&title_bg=%2345007C&icon=pagekit.svg&icon_color=%23F0E7FF&title=HITS&edge_flat=false`))

</script>

<style lang="scss">
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
    padding: 20px 0 0 0;

    // .q-avatar {
    //     box-shadow: 0 0 1px 4px #80008066;
    // }
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

.social-icon {
    background-color: white;
    border-radius: 50%;
    padding: 1px;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

</style>
