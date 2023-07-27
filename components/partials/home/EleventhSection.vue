<template>
    <section class="flex flex-col items-center text-center px-4 w-full max-w-[54.125rem] mx-auto pt-[243px] pb-[322px]  lg:pb-[393px]">
        <div class="text-[2.25rem] sm:text-[3.75rem] font-bold">
            <Title  text="Subscribe for updates" />
         </div>
        <div class="text-lg sm:text-xl lg:text-[1.5rem] leading-[202.3%] ">
            Join our mailing list for Exclusive news, updates and opportunities to be part of our growing community. Never miss a utility NFT drop and be the first to know what is happening!
        </div>
        <form class="mt-8 lg:mt-4 rounded-md overflow-hidden bg-[#8F8F8F] flex justify-between gap-x-8 pl-2 pr-1.5 py-1.5  w-full max-w-[30rem] sm:max-w-[40.25rem]">
            <input class="bg-[#8F8F8F] text-white border-none outline-0 text-2xl sm:text-3xl font-bold w-full
            placeholder:text-white" type="email" placeholder="Example@gmail.com">
            <button class="bg-primary px-6 py-2  hover:bg-white hover:text-black hover:shadow-xl duration-200 text-white font-medium rounded-md text-2xl sm:text-3xl shrink-0"> Subscribe</button>
        </form>
    </section>
</template>


<script setup>
import Title from "@/components/UI/Title.vue";
</script>