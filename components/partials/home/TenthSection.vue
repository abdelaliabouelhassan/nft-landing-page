<template>
    <section class="flex justify-center pt-[226px] sm:pt-[496px] sm:pb-[362px] px-4 overflow-x-clip">
        <div class="relative flex justify-center w-full  mx-auto px-4 sm:px-16 lg:px-16 lg:justify-normal lg:w-full lg:max-w-[68.5rem]">
            <div class="flex rounded-3xl overflow-hidden h-[144px] bg-black relative w-full max-w-[512px] z-10 lg:hidden">
                <div class=" text-white pb-[17px] h-full pr-4 relative w-[313px]">
                    <img class="" src="/images/home/certic-logo.svg" alt="" srcset="">
                    <div class="text-[32px] font-bold leading-snug absolute bottom-[17px] left-1/2 -translate-x-1/2 w-max">Secruity Audit</div>
                </div>
                <div class="rounded-full bg-[#D9D9D9] pb-[17px] w-[252px] h-[252px] absolute -right-[68px] top-1/2 -translate-y-1/2">
                    <div class="absolute bottom-[95px] left-[49px] font-bold">
                        <span class="text-[70px]">9</span>
                        <span class="text-[40px]">/</span>
                        <span class="text-[21px]">10</span>
                    </div>
                    <div class="bg-primary text-white py-1 px-2 text-[12px] rounded-md absolute bottom-[76px] left-[49px]">View Full Report</div>
                </div>
            </div>

            <div class="hidden w-full grow lg:flex items-center justify-between z-10 gap-x-10">
                <div class="shrink-0">
                    <img src="/images/home/security-audit.svg" alt="" srcset="">
                </div>
                <div class="w-full max-w-[440px] xl:max-w-[450px]">
                    <h1 class="text-[3.75rem] font-bold ">Secruity Audit</h1>
                    <div class="text-3xl font-bold leading-loose">Rising Legends ranked 78th this year for security Protocol.</div>
                    <button class="bg-primary text-white py-2 px-3 rounded-md font-bold mt-6">View Report</button>
                </div>
            </div>

            <!-- blur group 2 lg-->
            <div class=" lg:block absolute -top-[200px]  left-[10%] z-0 lg:top-10 lg:left-8">
                <div class="absolute top-0 left-[88px] ">
                    <div class="absolute top-0 left-0">
                        <BlurUnit class="blur-[60px]"/>
                    </div>
                    <div class="absolute top-[3px] left-[83px]">
                        <BlurUnit class="blur-[60px]"/>
                    </div>
                </div>
                <div class="absolute top-[135px] left-[135px] ">
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
import BlurUnit from "@/components/UI/BlurUnitRotated.vue"; 

</script>