<template>
    <a :href="href" :target="target" class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        props: {
            href: {
                href: String,
                default: '',
            },
            target: {
                target: String,
                default: '',
            }
        }
    }
</script>
