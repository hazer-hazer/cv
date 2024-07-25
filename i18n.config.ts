export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    pluralRules: {
        ru: (choice, choicesLength) => {
            if (choice === 0) {
                return 0
            }

            const teen = choice > 10 && choice < 20
            const endsWithOne = choice % 10 === 1

            if (choicesLength < 4) {
                return (!teen && endsWithOne) ? 1 : 2
            }
            if (!teen && endsWithOne) {
                return 1
            }
            if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
                return 2
            }

            return (choicesLength < 4) ? 2 : 3
        },
    },
    messages: {
        en: {
            tasks: 'Some tasks',
            language: 'Language',
            developer: 'Developer',
            myName: 'Ivan Gordeev',
            aboutMe: {
                title: 'About Me',
                age: '{age} years old',
                body: 'Hi, Gordeev Ivan, I\'m {age} years old developer and this is my CV.',
            },
            year: '{n} year | {n} years',
            month: '{n} month | {n} months',
            finalWord: 'That\'s all for now, good luck 👋',
            nodeJsDeveloper: 'Node.JS Developer',
            experience: {
                title: 'Experience',
                freelance: {
                    title: 'Freelance',
                    body: 'Worked part-time doing small WEB tasks.',
                    date: '2018',
                },
                betboom: {
                    title: 'BetBoom',
                    body: 'Integrated tens of payment providers for PayHub.Global (sub-project) and BetBoom.com, developed payment systems orchestration solutions for BetBoom.com. Worked on common functionalities in BetBoom.com.',
                    date: '6 August, 2020',
                    tasks: [
                        'Create new payment provider services',
                        'Was responsible for payment systems in betboom.com project',
                        'Developing core functionalities of betboom.com',
                    ],
                },
                detmir: {
                    title: 'DetMir (DM-tech)',
                    body: 'Developed core functionality for marketplace, specialized on delivery and checkout.',
                    date: '29 August, 2023',
                    tasks: [
                        'Order checkout logic development',
                        '"Favorite categories bonuses" project',
                        'Orders admin panel',
                        'Yandex Maps API',
                    ],
                },
            },
            skills: {
                title: 'Skills',
                professionally: 'Professionally',
                pgLabel: 'PostgreSQL and relational databases in common',
            },
            now: {
                title: 'now',
            },
            interests: {
                title: 'My interests',
                list: [{
                    name: 'embedded',
                    title: 'Embedded systems',
                    subtitle: 'Getting in touch with software you create',
                    body: 'This is the area I started learning programming as a child: using Arduino. But now I am creating music-related projects such as synthesizers and samplers using Rust and STM32, RP2040 and ESP32.',
                    icon: 'memory',
                }, {
                    name: 'music',
                    title: 'Music',
                    subtitle: 'Playing. Composing. Listening.',
                    body: 'Music was always with me, I played drums in ensemble, rock groups. Self-taught piano and guitar, and now making music already for 6 years. Like music overlaps with my other interests.',
                    icon: 'music_note',
                }, {
                    name: 'compiler',
                    title: 'Programming Language Theory',
                    subtitle: 'Sometimes you just want to reinvent the wheel',
                    body: 'For a long time I was attracted by theory of programming languages, the math behind compilers, type theory, parsing and everything that makes such complex systems I use everyday. There\'re tons of unpopular interesting programming languages with smart solutions inside. Though I didn\'t become professional compiler developer, I learned a lot about programming designing my languages and diving into sources of big projects.',
                    icon: 'data_object',
                }, {
                    name: 'electronics',
                    title: 'Electronics',
                    subtitle: 'What a pleasure to make something by your hands',
                    body: 'Since I was a child, I have always been fascinated by the world of electronics. The ability to create something from scratch, to bring circuits to life, has always filled me with a sense of wonder. Now, as I delve into the world of analog synthesizers, I find myself drawn to the marriage of technology and music.',
                    icon: 'handyman',
                }],
            },
            projects: {
                title: 'Pet projects',
                list: [{
                    name: 'inventory',
                    image: '/cv/inventory.png',
                    title: 'Inventory',
                    subtitle: 'Empowering organization',
                    body: 'This app was made for personal use as an alternative to available solutions which are not powerful enough and pricey. It is ideal for electronic components as initially was developed with that in mind but parameters are super flexible so it may fit even for kitchen or clothes.',
                    github: 'https://github.com/hazer-hazer/graymatter',
                }, {
                    name: 'impact',
                    image: '/cv/impact.png',
                    title: 'Impact',
                    subtitle: 'My last self-educational programming language',
                    body: 'Impact is a always-WIP programming language sandbox created to practice and learn new compiler-related topics including algebraic effects, data flow analysis and refinement types',
                    github: 'https://github.com/hazer-hazer/impact',
                }, {
                    name: 'embedded-ui',
                    image: '/cv/embedded-ui.png',
                    title: 'Rust embedded-ui',
                    subtitle: 'GUI library for embedded rust',
                    body: 'Simple, but powerful universal GUI library inspired on Elm (iced) architecture. Packs most common component kinds such as Button, Scrollable, etc. Works with any type of display, even monochrome. Fully input-agnostic: developed with usage of single encoder in mind.',
                    github: 'https://github.com/hazer-hazer/embedded-ui',
                    crates: 'https://crates.io/crates/embedded-ui',
                }, {
                    name: 'paw1',
                    image: '/cv/paw1.png',
                    title: 'Paw1',
                    subtitle: 'First iteration of my Pocket Audio Workstation',
                    body: 'Currently in work project PAW1 is a sandbox for my much more bigger project Pocket Audio Workstation. The idea is to create compact handy instrument to create music wherever you are. Paw1 is a wavetable synthesizer with tiny display and three encoders, featuring simple audio effects.',
                    github: 'https://github.com/paw-music/paw-one',
                }, {
                    name: 'cv',
                    image: '/cv/cv.png',
                    title: 'This website',
                    subtitle: 'ha-ha',
                    github: 'https://github.com/hazer-hazer/cv',
                }],
            },
        },
        ru: {
            tasks: 'Некоторые задачи',
            language: 'Язык',
            developer: 'Разработчик',
            myName: 'Иван Гордеев',
            aboutMe: {
                title: 'Обо Мне',
                body: 'Привет, я Гордеев Иван, мне {age} и это моё резюме.',
            },
            year: '0 лет | {n} год | {n} года | {n} лет',
            month: '0 months | {n} месяц | {n} месяца | {n} месяцев',
            finalWord: 'Пока это всё, удачи 👋',
            nodeJsDeveloper: 'Node.JS Developer',
            experience: {
                title: 'Опыт работы',
                freelance: {
                    title: 'Фриланс',
                    body: 'Немного подрабатывал, занимаясь небольшими задачами по вебу.',
                    date: '2018',
                },
                betboom: {
                    title: 'BetBoom',
                    body: 'Интегрировал десятки платежных систем в проекте MultiHub.global и BetBoom.com, занимался бизнес логикой платежных систем в BetBoom.com. Разрабатывал основную функиональность сайта.',
                    date: '6 August, 2020',
                    tasks: [
                        'Создание новых сервисов под платежных провайдеров',
                        'Был ответственнен за платежные системы в betboom.com',
                        'Developing core functionalities of betboom.com',
                    ],
                },
                detmir: {
                    title: 'Детский Мир',
                    body: 'Занимался основной логикой маркетплейса, специализировался на оформлении и получении.',
                    date: '29 August, 2023',
                    tasks: [
                        'Проект "Бонусы на Любимые Категории" (как в банках)',
                        'Внутренняя система работы с заказами для техпо',
                        'Работа с Yandex Maps',
                    ],
                },
            },
            skills: {
                title: 'Знания',
                professionally: 'Профессионально',
                pgLabel: 'PostgreSQL и реляционные базы данных в общем',
            },
            now: {
                title: 'сейчас',
            },
            interests: {
                title: 'Мои интересы',
                list: [{
                    name: 'embedded',
                    title: 'Микроконтроллеры',
                    subtitle: 'Оживлять железо',
                    body: 'Это сфера, с которой я начал свой путь программирования ребенком: программирование Arduino. Теперь же я создаю проекты, связанные со звуком: синтезаторы и семплеры на Rust под STM32, RP2040 и ESP32',
                    icon: 'memory',
                }, {
                    name: 'music',
                    title: 'Музыка',
                    subtitle: 'Играть. Писать. Слушать.',
                    body: 'Музыка всегда была моим увлечением, в детстве я играл на ударных в ансамбле, позже в рок группах. Научился играть на фортепиано и гитаре, и вот уже 6 лет пишу свою музыку. Интересно, когда музыка пересекается с другими моими интересами',
                    icon: 'music_note',
                }, {
                    name: 'compiler',
                    title: 'Теория языков программирования',
                    subtitle: 'Порой хочется переизобрести велосипед',
                    body: 'Долгое время меня тянет к теории языков программирования, математикой за ними, теории типов, парсингу и всему, что стоит за сложными системами, которые я использую каждый день. Существует множество непопулярных языков программирования с интересными решениями внутри, в которых было интересно покопаться. Хоть я и не стал профессиональным разработчиком компиляторов, я выучил много нового о программировании в целом благодаря изучению внутренностей компиляторов крупных языков.',
                    icon: 'data_object',
                }, {
                    name: 'electronics',
                    title: 'Электроника',
                    subtitle: 'Как приятно делать что-то своими руками',
                    body: 'С раннего детства мне было интересно копаться в железе, сейчас, когда интерес сдвинулся в сторону музыкального оборудования, я стал изучать физику аналоговых синтезаторов.',
                    icon: 'handyman',
                }],
            },
            projects: {
                title: 'Pet-проекты',
                list: [{
                    name: 'inventory',
                    image: '/cv/inventory.png',
                    title: 'Инвентарь',
                    subtitle: 'Упрощение организации вещей',
                    body: 'Это приложение было созданно для персонльного использования в замену доступным решениям, которые либо дорогие или же недостаточно мощные. Первоначально задумывалось с мыслями об организации электронных компонентов, но параметры инвентаря достаточно гибкие, чтобы использовать для продуктов или одежды',
                    github: 'https://github.com/hazer-hazer/graymatter',
                }, {
                    name: 'impact',
                    image: '/cv/impact.png',
                    title: 'Impact',
                    subtitle: 'Мой последний проект языка программирования для самообучения',
                    body: 'Impact это язык песочница, созданный для практики в темах разработки компиляторов, таких как: уточняющие типы, алгебраические эффеты и анализ потоков данных',
                    github: 'https://github.com/hazer-hazer/impact',
                }, {
                    name: 'embedded-ui',
                    image: '/cv/embedded-ui.png',
                    title: 'Rust embedded-ui',
                    subtitle: 'Rust GUI библиотека для встроенных систем',
                    body: 'Простая, но мощная универсальная GUI библиотека вдохновленная Elm (iced) архитектурой. Включает стандартные типы компонентов, такие как Button, Scrollable и т.д. Работает с любым типом дисплеев, даже одноцветным. Поддерживает любые способы управления: разрабатывалась под возможность управления одним энкодером.',
                    github: 'https://github.com/hazer-hazer/embedded-ui',
                    crates: 'https://crates.io/crates/embedded-ui',
                }, {
                    name: 'paw1',
                    image: '/cv/paw1.png',
                    title: 'Paw1',
                    subtitle: 'Первая итерация моей карманной DAW',
                    body: 'В данный момент я активно изучаю тему работы с цифровыми сигналами и разрабатываю первую модель, являющуюя частью более крупного проекта карманной аудио станции. Идея в том, чтобы иметь возможность в любом месте записывать музыку, как это делают в DAW на компьютере. Paw1 это wavetable синтезатор с 3 энкодерами, маленьким OLED дисплеем и простыми аудио эффектами',
                    github: 'https://github.com/paw-music/paw-one',
                }, {
                    name: 'cv',
                    image: '/cv/cv.png',
                    title: 'Этот сайт',
                    subtitle: 'хаха',
                    github: 'https://github.com/hazer-hazer/cv',
                }],
            },
        },
    },
}))
