<template>
    <section class="text-white overflow-x-clip pb-[119px] pt-[84px] sm:pb-[219px] sm:pt-[184px]">
        <div ref="contentContainer" class="max-w-[68.5rem] mx-auto  items-center flex justify-end lg:justify-between relative px-4 sm:px-16 lg:px-16
          xl:px-0">
            
            <!-- section content -->
            <div class="absolute z-10 top-1/2 -translate-y-1/2 right-16  flex justify-end w-fit max-w-lg sm:right-48 lg:relative lg:top-0 lg:right-0 
                lg:translate-y-0 xl:max-w-md">
                <!-- content -->
                <div class="content z-10 flex flex-col font-medium w-fit items-end text-end lg:text-start lg:items-start lg:text-white text-white sm:text-gray-100">
                    <div class="text-[2.25rem] sm:text-[3.75rem]">
                        <Title text="V.I.P rewards"/>
                    </div>
                    <h2 class="text-lg sm:text-3xl mt-1 leading-loose xl:leading-normal">Details about the V.I.P</h2> 
                    <h2 class="text-lg sm:text-3xl mt-1 leading-loose xl:leading-normal">rewards can be found here</h2> 
                    <button class="w-fit mt-6 xl:mt-8 flex items-center justify-center px-9 py-3 text-3xl bg-white text-primary rounded-lg font-semibold
                            hover:bg-primary hover:text-white transition-colors duration-100 ease-linear">
                        Buy now
                    </button>
                </div>

                <!-- blur group  -->
                <div v-if="width > 1023" class="blur-group absolute top-0 -left-8 sm:left-[88px] z-0 ">
                    <div class="absolute top-0 left-0">
                        <BlurUnit class="blur-[80px]"/>
                    </div>
                </div>
                    
            </div>
            <!-- section img -->
            <div class="shrink-0 image-container z-0" id="card2">
                <img class="h-[600px] w-full max-w-[300px]  sm:max-w-[422px]" src="/images/home/kisshiim_Boba_Fett_in_free_fall_red_neon_tones_style_of_Malika.svg" alt="" srcset="">
            </div>
            
        </div>
    </section>
</template>

<script setup>
import BlurUnit from "@/components/UI/BlurUnitRotated.vue"; 
import Title from "@/components/UI/Title.vue";
const contentContainer = ref(null)
const maxOffsetContent = ref(80)
const maxOffsetBlur = ref(200)
const offsetContent = ref(0)
const offsetBlur = ref(0)

const width = ref(null)

const getContentOffset = computed(()=> `-${offsetContent.value}px`)
const getBlurOffset = computed(()=> `${offsetBlur.value}px`)

function setOffset() {
    //animation 1
    offsetContent.value = ( (contentContainer.value.getBoundingClientRect().bottom - contentContainer.value.offsetHeight - 100)/ contentContainer.value.offsetHeight ) * maxOffsetContent.value
    if(width.value > 1023)
    offsetBlur.value = ( (contentContainer.value.getBoundingClientRect().bottom - contentContainer.value.offsetHeight - 100)/ contentContainer.value.offsetHeight ) * maxOffsetBlur.value
    
    
    if(offsetContent.value > maxOffsetContent.value){
        offsetContent.value = maxOffsetContent.value
    }
    else if(offsetContent.value < 0){
        offsetContent.value = 0
    }

    if(offsetBlur.value > maxOffsetBlur.value){
        offsetBlur.value = maxOffsetBlur.value
    }
    else if(offsetBlur.value < 0){
        offsetBlur.value = 0
    }
   
}
onMounted(() => {
    width.value = window.innerWidth
    window.addEventListener('resize', () => {
        width.value = window.innerWidth
    })
    window.addEventListener('scroll',setOffset)
    //observer for card animation
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("side-from-right");
            observer.unobserve(entry.target);
        }
     });
    });
    observer.observe(document.querySelector("#card2"));
});
onUnmounted(()=>{
    window.removeEventListener('scroll',setOffset)
})
</script>
<style scoped>
.content{
    transform: translateY(v-bind(getContentOffset));
    transition: transform 200ms ease;
}
.blur-group{
    transform: translateY(v-bind(getBlurOffset));
    transition: transform 200ms ease;
}
</style>