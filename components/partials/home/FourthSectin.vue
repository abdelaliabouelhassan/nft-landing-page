<template>
    <section class="py-[298px]">
        <div class="flex relative w-full max-w-[512px] mx-auto">
            <!-- content -->
            <div class="flex flex-col items-center gap-y-11 w-full  mx-auto z-10 ">
                <div class="bg-white flex flex-col items-center gap-y-10 overflow-hidden rounded-2xl py-10 w-full  relative border ">
                    <div class="bg-primary text-white py-2 px-6 absolute top-0 right-0"> comming soon</div>
                    <div class="text-[26px] font-bold"> stake your NFT’s and earn DeGa </div>
                    <div class="font-bold">Staking coming soon</div>
                    <div class="h-[40px] w-[166px] bg-[#ACABAB] rounded-md"></div>
                </div>
                <h1 class="text-[3.75rem] font-bold text-center max-w-[400px] text-white ">Staking Coming soon</h1>
            </div>

            <!-- blurs -->
            <div class="absolute top-[162px] left-1/2 -translate-x-1/2 z-0 w-full max-w-[497px]">
                <div class="absolute top-[-132px] right-0 z-0 w-full max-w-[333px]  h-[335px]  blur-[100px]">
                    <BlurUnit class="absolute top-[81px] left-0 w-[304px] h-[254px] rotate-[-120deg] blur-[100px] "/>
                    <BlurUnit class="absolute -top-0 right-0  w-[304px] h-[254px] rotate-[-120deg] blur-[100px]"/>
                </div>
                <div class="absolute top-[-132px] left-0 z-0 w-full max-w-[333px]  h-[335px]  blur-[100px]">
                    <BlurUnit class="absolute top-[81px] left-0 w-[304px] h-[254px] rotate-[-120deg] blur-[100px] "/>
                    <BlurUnit class="absolute -top-0 right-0  w-[304px] h-[254px] rotate-[-120deg] blur-[100px]"/>
                </div>

                <div class="absolute top-[226px] left-0 z-0 w-full max-w-[333px]  h-[335px]  blur-[100px]">
                    <BlurUnit class="absolute top-[81px] left-0 w-[304px] h-[254px] rotate-[-120deg] blur-[100px] "/>
                    <BlurUnit class="absolute -top-0 right-0  w-[304px] h-[254px] rotate-[-120deg] blur-[100px]"/>
                </div>
                <!-- <div class="absolute top-[-132px] left-0 z-0 w-[505px]  h-[536px]  ">
                    <BlurUnit class="absolute -top-0 left-[45px] rotate-[-120deg] blur-[100px] w-[319px] h-[253px]"/>
                    <BlurUnit class="absolute -top-0 left-0 rotate-[-120deg] blur-[100px] w-[319px] h-[253px]"/>
                </div> -->
            </div>
        </div>
        
    </section>
</template>

<script setup>
import BlurUnit from "@/components/UI/BlurUnit.vue"; 

</script>