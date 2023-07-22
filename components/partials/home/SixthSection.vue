<template>
    <section class="text-white overflow-x-clip">
        <div class="max-w-[68.5rem] mx-auto pt-[219px] pb-[184px] items-center flex lg:justify-between relative px-4 sm:px-16 lg:px-16
         lg:gap-x-[90px] xl:px-0">
            <!-- section img -->
            <div class="shrink-0 image-container" id="card1">
                <img class="h-[600px] w-[422px]" src="/images/home/kisshiim_Boba_Fett_in_free_fall_red_neon_tones_style_of_Malika__2.svg" alt="" srcset="">
            </div>
            <!-- text content -->
            <div class="absolute top-1/2 -translate-y-1/2 left-28 sm:left-36 max-w-lg lg:relative lg:top-0 lg:left-0 flex
                lg:translate-y-0 xl:max-w-md">
                <div class="z-10 flex flex-col font-medium">
                  <div class="text-[3.75rem]">
                    <Title text="Early Access"/>
                  </div>
                    <h2 class="text-3xl mt-1 leading-loose xl:leading-normal">Details about early access benefits can be found here</h2> 
                    <button class="w-fit mt-6 xl:mt-8 flex items-center justify-center px-9 py-3 text-3xl bg-white text-primary rounded-lg font-semibold">
                        Buy now
                    </button>
                </div>

                <!-- blur group -->
                <div class="absolute top-0 left-[88px] ">
                    <div class="absolute top-0 left-0">
                        <BlurUnit class="blur-[100px]"/>
                    </div>
                    <div class="absolute top-[77px] left-[113]">
                        <BlurUnit class="blur-[100px]"/>
                    </div>
                </div>
                    
                
               
            </div>
            
        </div>
    </section>
</template>

<script setup>
import BlurUnit from "@/components/UI/BlurUnitRotated.vue"; 
import Title from "@/components/UI/Title.vue";
onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("side-from-left");
            observer.unobserve(entry.target);
        }
     });
    });
    observer.observe(document.querySelector("#card1"));
});
</script>