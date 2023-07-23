<template>
    <section class="text-white overflow-x-clip pt-[119px] pb-[84px] sm:pt-[219px] sm:pb-[184px]">
        <div ref="contentContainer" class="max-w-[68.5rem] mx-auto  items-center flex lg:justify-between relative px-4 sm:px-16 lg:px-16
         lg:gap-x-[90px] xl:px-0">
            <!-- section img -->
            <div class="shrink-0 image-container" id="card1">
                <img class="h-[600px] w-full max-w-[300px] sm:max-w-[422px]" src="/images/home/kisshiim_Boba_Fett_in_free_fall_red_neon_tones_style_of_Malika__2.svg" alt="" srcset="">
            </div>
            <!-- section content -->
            <div class=" absolute top-1/2 -translate-y-1/2 left-16 sm:left-36 max-w-[18rem] sm:max-w-lg lg:relative lg:top-0 lg:left-0 flex
                lg:translate-y-0 xl:max-w-md">
                <!-- content -->
                <div class="content z-10 flex flex-col font-medium">
                    <div class="text-[2.25rem] sm:text-[3.75rem]">
                        <Title text="Early Access"/>
                    </div>
                    <h2 class="text-lg sm:text-3xl mt-1 leading-loose xl:leading-normal">Details about early access benefits can be found here</h2> 
                    <button class="w-fit mt-6 xl:mt-8 flex items-center justify-center px-9 py-3 text-lg sm:text-3xl bg-white text-primary rounded-lg font-semibold
                        hover:bg-primary hover:text-white transition-colors duration-100 ease-linear">
                        Buy now
                    </button>
                </div>

                <!-- blur group -->
                <div class="blur-group w-[451px] h-[477px] absolute -left-24 -top-14 sm:top-0 sm:left-0   overflow-hidden blur-[50px] sm:overflow-visible sm:blur-none">
                    <div class="absolute top-0 left-0">
                        <BlurUnit class="blur-[100px]"/>
                    </div>
                    <div class="absolute top-[77px] left-[113px]">
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


const contentContainer = ref(null)
const maxOffsetContent = ref(80)
const maxOffsetBlur = ref(200)
const offsetContent = ref(0)
const offsetBlur = ref(0)

const getContentOffset = computed(()=> `-${offsetContent.value}px`)
const getBlurOffset = computed(()=> `${offsetBlur.value}px`)

function setOffset() {
    //animation 1
    offsetContent.value = ( (contentContainer.value.getBoundingClientRect().bottom - contentContainer.value.offsetHeight - 100)/ contentContainer.value.offsetHeight ) * maxOffsetContent.value
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
    window.addEventListener('scroll',setOffset)
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