<template>
    <h1 class="randomtext">{{text}}</h1>
</template>

<script setup>
 const props = defineProps(
    {
        text: {
            type: String,
            required: true,
        },
    }
 )
</script>


<style scoped>
h1 {
     @apply text-[3.75rem];
}
</style>