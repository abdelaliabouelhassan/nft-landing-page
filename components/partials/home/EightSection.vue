<template>
    <section class="max-w-[96rem] mx-auto 2xl:mt-8 pt-[58px] pb-[363px]">
        <BaseCarousel class="flex pr-4 sm:pr-12 lg:pr-16">
            <div class="carousel-container flex overflow-hidden   mx-0 py-0 cursor-grab" ref="carouselContainer" >
                <div class="carousel flex items-center flex-nowrap gap-x-5">
                    <TeamCard class="shrink-0 w-[200px] sm:w-[262px] h-full">
                        <template #image>
                            <img class="w-full max-w-[120px] sm:max-w-[160px] pointer-events-none" src="/images/home/team-member.svg" alt="" srcset="">
                        </template>
                        <template #name>
                            Enrico Giancaterina
                        </template>
                        <template #role>
                            Managing Director
                        </template>
                    </TeamCard>
                    
                    <TeamCard class="shrink-0 w-[200px] sm:w-[262px] h-full">
                        <template #image>
                            <img class="w-full max-w-[120px] sm:max-w-[160px] pointer-events-none" src="/images/home/team-member.svg" alt="" srcset="">
                        </template>
                        <template #name>
                            Enrico Giancaterina
                        </template>
                        <template #role>
                            Managing Director
                        </template>
                    </TeamCard>
                    
                    <TeamCard class="shrink-0 w-[200px] sm:w-[262px] h-full">
                        <template #image>
                            <img class="w-full max-w-[120px] sm:max-w-[160px] pointer-events-none" src="/images/home/team-member.svg" alt="" srcset="">
                        </template>
                        <template #name>
                            Enrico Giancaterina
                        </template>
                        <template #role>
                            Managing Director
                        </template>
                    </TeamCard>

                    <TeamCard class="shrink-0 w-[200px] sm:w-[262px] h-full">
                        <template #image>
                            <img class="w-full max-w-[120px] sm:max-w-[160px] pointer-events-none" src="/images/home/team-member.svg" alt="" srcset="">
                        </template>
                        <template #name>
                            Enrico Giancaterina
                        </template>
                        <template #role>
                            Managing Director
                        </template>
                    </TeamCard>

                    <TeamCard class="shrink-0 w-[200px] sm:w-[262px] h-full">
                        <template #image>
                            <img class="w-full max-w-[120px] sm:max-w-[160px] pointer-events-none" src="/images/home/team-member.svg" alt="" srcset="">
                        </template>
                        <template #name>
                            Enrico Giancaterina
                        </template>
                        <template #role>
                            Managing Director
                        </template>
                    </TeamCard>
                </div>
            </div>
            <div class="flex flex-col items-end max-w-[180px] sm:max-w-[310px] shrink-0">
                 <div class="text-[2.25rem] sm:text-[3.75rem] text-end font-semibold">
                        <Title  text="Meet the Team" />
                </div>
                <div class="flex items-center mt-6">
                    <!-- left arrow -->
                    <button class="left-arrow w-[60px] h-[60px] sm:w-[87px] sm:h-[87px] group">
                        <svg class="w-full h-full text-black duration-300 group-hover:text-[#BC3689] fill-current" xmlns="http://www.w3.org/2000/svg" width="87" height="87" viewBox="0 0 87 87" fill="none">
                            <g clip-path="url(#clip0_12_2021)">
                            <path d="M72.5 43.5C72.5 59.4863 59.4863 72.5 43.5 72.5C27.5138 72.5 14.5 59.4863 14.5 43.5C14.5 27.5138 27.5138 14.5 43.5 14.5C59.4863 14.5 72.5 27.5138 72.5 43.5ZM79.75 43.5C79.75 23.49 63.51 7.25 43.5 7.25C23.49 7.25 7.25 23.49 7.25 43.5C7.25 63.51 23.49 79.75 43.5 79.75C63.51 79.75 79.75 63.51 79.75 43.5ZM43.5 47.125L58 47.125L58 39.875L43.5 39.875L43.5 29L29 43.5L43.5 58L43.5 47.125Z" />
                            </g>
                            <defs>
                            <clipPath id="clip0_12_2021">
                            <rect width="87" height="87" fill="white" transform="translate(0 87) rotate(-90)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <!-- right arrow -->
                    <button class="right-arrow w-[60px] h-[60px] sm:w-[87px] sm:h-[87px] group">
                        <svg class="w-full h-full text-black duration-300 group-hover:text-[#BC3689] fill-current" xmlns="http://www.w3.org/2000/svg" width="87" height="87" viewBox="0 0 87 87" fill="none">
                            <g clip-path="url(#clip0_14_2134)">
                            <path d="M14.5 43.5C14.5 27.5137 27.5137 14.5 43.5 14.5C59.4862 14.5 72.5 27.5137 72.5 43.5C72.5 59.4862 59.4862 72.5 43.5 72.5C27.5137 72.5 14.5 59.4862 14.5 43.5ZM7.24999 43.5C7.24999 63.51 23.49 79.75 43.5 79.75C63.51 79.75 79.75 63.51 79.75 43.5C79.75 23.49 63.51 7.25 43.5 7.25C23.49 7.25 7.24999 23.49 7.24999 43.5ZM43.5 39.875L29 39.875L29 47.125L43.5 47.125L43.5 58L58 43.5L43.5 29L43.5 39.875Z" />
                            </g>
                            <defs>
                            <clipPath id="clip0_14_2134">
                            <rect width="87" height="87" fill="white" transform="translate(87) rotate(90)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
        
        </BaseCarousel>
        
    </section>
</template>
<script setup>
import BaseCarousel from "@/components/UI/BaseCarousel.vue";
import TeamCard from "@/components/UI/TeamCard.vue";
import Title from "@/components/UI/Title.vue";

const carouselContainer = ref(null)

onMounted(()=>{
    carouselContainer.value.scrollLeft=  carouselContainer.value.scrollWidth
})
</script>