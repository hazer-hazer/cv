<template>
    <q-badge
        :class="`${logo}-logo logo`"
        :label="label"
    />
</template>

<script lang="ts" setup>
// const LOGOS = {
//     ts: 'https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white',
//     node: 'https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white',
//     php: 'https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white',
// }

const LOGOS = {
    js: {
        label: 'JavaScript',
    },
    html_css: {
        label: 'HTML/CSS',
    },
    ts: {
        label: 'TypeScript',
    },
    node: {
        label: 'Node.JS',
    },
    php: {
        label: 'PHP',
    },
    pg: {
        label: 'PostgreSQL',
    },
    redis: {
        label: 'Redis',
    },
    rmq: {
        label: 'RabbitMQ',
    },
    kafka: {
        label: 'kafka',
    },
    k8s: {
        label: 'Kubernetes & Docker',
    },
    jenkins: {
        label: 'Jenkins',
    },
}

const props = defineProps<{
    logo: string
}>()
const logo = props.logo
const { label } = LOGOS[props.logo as keyof typeof LOGOS]
</script>

<style lang="scss" scoped>
.logo {
    height: 20px;
    width: max-content;
    padding: 2px 10px;
    font-size: 14px !important;
    font-weight: bold;
    color: white;
    background-color: grey;
}

.html_css-logo {
    background-color: #e34d26;
}
.redis-logo {
    background-color: #dc372c;
}
.js-logo {
    background-color: #f0db4f;
    color: #323330;
}
.ts-logo {
    background-color: #3178c6;
}
.node-logo {
    background-color: #3c873a;
}
.php-logo {
    background-color: #474a8a;
}
.pg-logo {
    background-color: #336790;
}
.rmq-logo {
    background-color: #ff6600;
}
.kafka-logo {
    background-color: black;
    color: white;
}
.k8s-logo {
    background-color: #3970e5;
    color: white;
}
.jenkins-logo {
    background-color: #395565;
    color: white;
}
</style>
