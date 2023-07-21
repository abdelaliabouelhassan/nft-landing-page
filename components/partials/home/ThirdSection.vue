<template>
    <section class="">
        <div class="pt-[52px] flex flex-col px-4 pb-[210px] sm:px-16 lg:px-16 lg:flex-row lg:items-center lg:gap-x-14 justify-between
        max-w-[68.5rem] mx-auto xl:px-0 lg:pt-[200px]">
            <div class="relative flex text-white self-end lg:self-auto ">
                <h1 class="text-[3.75rem] max-w-xs text-end z-10 font-medium lg:text-start">Utility Functions</h1>
                <!-- blur 1 -->
                <div class="w-[344px] h-[310px] absolute -top-[40px] -right-4 blur-[40px] overflow-hidden z-0 lg:hidden">
                    <BlurUnit class="w-[344px] h-[310px] absolute -top-0 right-0  -rotate-[120deg] blur-[100px]"/>
                </div>
                <!-- blur 2 -->
                <div class="hidden absolute top-12 -left-16 z-0 lg:block w-[319px]   ">
                    <BlurUnit class="absolute -top-0 left-[45px] rotate-[-120deg] blur-[100px] w-[319px] h-[253px]"/>
                    <BlurUnit class="absolute -top-0 left-0 rotate-[-120deg] blur-[100px] w-[319px] h-[253px]"/>
                </div>
            </div>
            <div class="flex flex-col gap-y-8">
                <div class="flex items-center gap-x-10 list-element cursor-default">
                    <div class="h-[100px] w-[100px] rounded-full flex items-center justify-center 
                    list-element-gradient text-white text-4xl">1</div>
                    <div class="text-[26px]">Utility 1 is this thing that does 12</div>
                </div>
                <div class="flex items-center gap-x-10 list-element cursor-default">
                    <div class="h-[100px] w-[100px] rounded-full flex items-center justify-center 
                    list-element-gradient text-white text-4xl">2</div>
                    <div class="text-[26px]">Utility 2</div>
                </div>
                <div class="flex items-center gap-x-10 list-element cursor-default">
                    <div class="h-[100px] w-[100px] rounded-full flex items-center justify-center 
                    list-element-gradient text-white text-4xl">3</div>
                    <div class="text-[26px]">Utility 3</div>
                </div>
                <div class="flex items-center gap-x-10 list-element cursor-default">
                    <div class="h-[100px] w-[100px] rounded-full flex items-center justify-center 
                    list-element-gradient text-white text-4xl">4</div>
                    <div class="text-[26px]">Utility 4</div>
                </div>
                <div class="flex items-center gap-x-10 list-element cursor-default">
                    <div class="h-[100px] w-[100px] rounded-full flex items-center justify-center 
                    list-element-gradient text-white text-4xl">5</div>
                    <div class="text-[26px]">Utility 5</div>
                </div>
                <div class="flex items-center gap-x-10 list-element cursor-default">
                    <div class="h-[100px] w-[100px] rounded-full flex items-center justify-center 
                    list-element-gradient text-white text-4xl">6</div>
                    <div class="text-[26px]">Utility 6</div>
                </div>
            </div>

        </div>
    </section>
</template>
<script setup>
import BlurUnit from "@/components/UI/BlurUnit.vue"; 

</script>
<style scoped>
.list-element .list-element-gradient {
    transition: background 200ms ease;
    background: linear-gradient(180deg, #000000 , #000000 );
}
 .list-element:hover .list-element-gradient {
    background: linear-gradient(180deg, #BC3689 0%, #C73585 33.33%, #C53072 59.38%, #713393 94.27%);
 }
</style>