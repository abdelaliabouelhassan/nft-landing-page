<template>
    <section class="text-white overflow-hidden py-[150px] sm:py-[200px] lg:pt-[177px] lg:pb-[226px]" >
        <div ref="contentContainer" class="max-w-[68.5rem]  mx-auto items-center flex lg:justify-between relative px-4 sm:px-16 lg:px-16
         xl:px-0">
            <!-- section content -->
            <div class=" absolute top-1/2 -translate-y-1/2 left-16 mr-4 max-w-xs sm:left-28 sm:max-w-lg lg:relative lg:top-0 lg:left-0 flex
                lg:translate-y-0 xl:max-w-xl z-10">
                <!-- content -->
                <div class=" content z-10 flex flex-col font-medium  ">
                    <div class="text-[2.25rem] sm:text-[3.75rem]">
                        <Title  text="Earn More DeGa" />
                    </div>
                    <h2 class=" text-lg sm:text-3xl mt-1 leading-loose xl:leading-normal">Unleash the power of our Utility based NFT’s collection</h2> 
                    <button class="w-fit mt-6 xl:mt-8 flex items-center justify-center px-9 py-3 text-lg sm:text-3xl bg-white text-primary rounded-lg font-semibold
                            hover:bg-primary hover:text-white transition-colors duration-100 ease-linear">
                        Buy now
                    </button>
                </div>

                <!-- blur group 1 overflow-hidden w-[471px] h-[454px]-->
                <div class="blur-group lg:hidden absolute -top-14 -left-28 blur-[60px] sm:blur-0 sm:-top-12 sm:-left-10 z-0 overflow-hidden w-[471px] h-[454px] sm:overflow-visible ">
                    <!-- blur circle -->
                    <BlurUnit class="absolute -top-[70px] left-0  " />
                        
                    <!-- blur circle -->
                    <BlurUnit class="absolute -top-[38px] left-[109px] " />
                    
                </div>
                
                <!-- blur group 2 lg-->
                <div class="blur-group hidden lg:block absolute -top-[175px] -left-[56px]  z-0">
                    <!-- blur circle -->
                    <BlurUnit class="absolute top-0" />
                        
                    <!-- blur circle -->
                    <BlurUnit class="absolute top-[134px] left-[98px]" />
                        
                    <!-- blur circle -->
                    <BlurUnit class="absolute top-[152px] left-[248px]" />
                        
                </div>
            </div>
            <!-- section img -->
            <div class="shrink-0 image-container" id="card">
                <img class="h-[600px] w-full max-w-[300px] sm:max-w-[422px]" src="/images/home/kisshiim_Boba_Fett_in_free_fall_red_neon_tones_style_of_Malika.svg" alt="" srcset="">
            </div>
        </div>
    </section>
</template>

<script setup>
import BlurUnit from "@/components/UI/BlurUnit.vue"; 
import Title from "@/components/UI/Title.vue";

const contentContainer = ref(null)
const maxOffsetContent = ref(60)
const maxOffsetBlur = ref(120)
const offsetContent = ref(0)
const offsetBlur = ref(0)

const getContentOffset = computed(()=> `-${offsetContent.value}px`)
const getBlurOffset = computed(()=> `${offsetBlur.value}px`)

function setOffset() {
    //animation 1
    offsetContent.value = ( (contentContainer.value.getBoundingClientRect().bottom - contentContainer.value.offsetHeight - 100)/ contentContainer.value.offsetHeight ) * maxOffsetContent.value
    offsetBlur.value = ( (contentContainer.value.getBoundingClientRect().bottom - contentContainer.value.offsetHeight - 100)/ contentContainer.value.offsetHeight ) * maxOffsetBlur.value
    //animation 2
    // offset.value = ( -(contentContainer.value.getBoundingClientRect().top - contentContainer.value.offsetHeight)/ contentContainer.value.offsetHeight ) * maxOffset.value
    
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

    //observer for card animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("side-from-right");
                observer.unobserve(entry.target);
            }
        });
    });
    observer.observe(document.querySelector("#card"));
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