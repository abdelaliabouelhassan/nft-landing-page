<template>
    <section class="text-white overflow-x-clip">
        <div class="max-w-[68.5rem] mx-auto pt-[219px] pb-[184px] items-center flex justify-end lg:justify-between relative px-4 sm:px-16 lg:px-16
          xl:px-0">
            
            <!-- text content -->
            <div class="absolute top-1/2 -translate-y-1/2 right-36 flex justify-end w-fit max-w-lg sm:right-48 lg:relative lg:top-0 lg:right-0 
                lg:translate-y-0 xl:max-w-md">
                <div class="z-10 flex flex-col font-medium w-fit items-end text-end lg:text-start lg:items-start">
                    <h1 class="text-[3.75rem] ">V.I.P rewards</h1>
                    <h2 class="text-3xl mt-1 leading-loose xl:leading-normal">Details about the V.I.P</h2> 
                    <h2 class="text-3xl mt-1 leading-loose xl:leading-normal">rewards can be found here</h2> 
                    <BaseButton class="w-fit mt-6 xl:mt-8">Buy now</BaseButton>
                </div>

                <!-- blur group  -->
                <div class="absolute top-0 left-[88px] ">
                    <div class="absolute top-0 left-0">
                        <BlurUnit class="blur-[80px]"/>
                    </div>
                </div>
                    
            </div>
            <!-- section img -->
            <div class="shrink-0">
                <img class="h-[600px] w-[422px]" src="/images/home/kisshiim_Boba_Fett_in_free_fall_red_neon_tones_style_of_Malika.svg" alt="" srcset="">
            </div>
            
        </div>
    </section>
</template>

<script setup>
import BlurUnit from "@/components/UI/BlurUnitRotated.vue"; 
import BaseButton from "@/components/UI/BaseButton.vue"; 

</script>