<template>
    <section class="text-white overflow-hidden">
        <div class="max-w-[68.5rem] mx-auto py-[200px] items-center flex lg:justify-between relative px-4 sm:px-16 lg:px-16
        lg:pt-[177px] lg:pb-[226px] xl:px-0">
            <!-- text content -->
            <div class="absolute top-1/2 -translate-y-1/2 left-16 sm:left-28 max-w-lg lg:relative lg:top-0 lg:left-0 flex
                lg:translate-y-0 xl:max-w-xl">
                <div class="z-10 flex flex-col font-medium">
                    <h1 class="text-[3.75rem] ">Earn More DeGa</h1>
                    <h2 class="text-3xl mt-1 leading-loose xl:leading-normal">Unleash the power of our Utility based NFT’s collection</h2> 
                    <BaseButton class="w-fit mt-6 xl:mt-8">Buy now</BaseButton>
                </div>

                <!-- blur group 1 -->
                <div class="lg:hidden absolute top-0 -left-0 z-0">
                    <!-- blur circle -->
                    <BlurUnit class="absolute -top-[70px] left-0" />
                        
                    <!-- blur circle -->
                    <BlurUnit class="absolute -top-[38px] left-[109px]" />
                    
                </div>
                
                <!-- blur group 2 lg-->
                <div class="hidden lg:block absolute -top-[175px] -left-[56px]  z-0">
                    <!-- blur circle -->
                    <BlurUnit class="absolute top-0" />
                        
                    <!-- blur circle -->
                    <BlurUnit class="absolute top-[134px] left-[98px]" />
                        
                    <!-- blur circle -->
                    <BlurUnit class="absolute top-[152px] left-[248px]" />
                        
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
import BlurUnit from "@/components/UI/BlurUnit.vue"; 
import BaseButton from "@/components/UI/BaseButton.vue"; 

</script>