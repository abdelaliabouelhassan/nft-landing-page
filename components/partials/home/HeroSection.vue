<template>
    <section v-if="width != null" class="  sectionbg w-full h-[calc(100vh-5.5rem)] sm:h-[calc(100vh-3.75rem)] max-h-[57rem] ">
    <!-- /videos/space.webm  -->
     <video v-if="width > 1200" autoplay muted loop class="w-full h-full object-cover object-center">
        <source src="/videos/space.webm" type="video/webm">
        Your browser does not support the video tag.
    </video>
     <video v-else autoplay muted loop class="w-full h-full object-cover object-center">
        <source src="/videos/mobile_space.webm" type="video/webm">
        Your browser does not support the video tag.
    </video>

    </section>
</template>

<script setup>
 const width = ref(null)

 onMounted(() => {
    width.value = window.innerWidth
    window.addEventListener('resize', () => {
        width.value = window.innerWidth
    })
 })
</script>


<style scoped>
.sectionbg{
    background: linear-gradient(180deg, #BC3689 0%, #C73585 33.33%, #C53072 59.38%, #713393 94.27%), #C62F6F;

}
</style>