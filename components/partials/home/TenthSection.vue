<template>
    <section class="flex justify-center pt-[226px] sm:pt-[496px] sm:pb-[362px] px-4 overflow-x-clip">
        <div class="relative flex">
            <div class="flex rounded-3xl overflow-hidden h-[144px] bg-black relative w-[512px] z-10">
                <div class=" text-white pb-[17px] h-full pr-4 relative w-[313px]">
                    <img class="" src="/images/home/certic-logo.svg" alt="" srcset="">
                    <div class="text-[32px] font-bold leading-snug absolute bottom-[17px] left-1/2 -translate-x-1/2 w-max">Secruity Audit</div>
                </div>
                <div class="rounded-full bg-[#D9D9D9] pb-[17px] w-[252px] h-[252px] absolute -right-[68px] top-1/2 -translate-y-1/2">
                    <div class="bg-primary text-white py-1 px-2 text-[12px] rounded-md absolute bottom-[76px] left-[49px]">View Full Report</div>
                </div>
            </div>

            <!-- blur group 2 lg-->
            <div class=" lg:block absolute -top-[280px] -left-[110px] z-0 w-[631px] h-[703px] ">
                <div class="absolute top-0 left-[88px] ">
                    <div class="absolute top-0 left-0">
                        <BlurUnit class="blur-[60px]"/>
                    </div>
                    <div class="absolute top-[3px] left-[83px]">
                        <BlurUnit class="blur-[60px]"/>
                    </div>
                </div>
                <div class="absolute top-[135px] left-[130px] ">
                    <div class="absolute top-0 left-0">
                        <BlurUnit class="blur-[60px]"/>
                    </div>
                    <div class="absolute top-[82px] left-[32px]">
                        <BlurUnit class="blur-[60px]"/>
                    </div>
                </div>  
                
            </div>
        </div>
        
        
    </section>
</template>
<script setup>
import BlurUnit from "@/components/UI/BlurUnit.vue"; 

</script>