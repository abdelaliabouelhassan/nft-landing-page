<template>
    <section ref="contentContainer" class="flex justify-center px-4 overflow-x-clip pt-[226px] xs:pb-[243px] sm:pt-[496px] sm:pb-[362px]  
    lg:pt-[209px] lg:pb-[255px]">
        <div  class="relative flex justify-center w-full  mx-auto px-4 sm:px-16 lg:px-16 lg:justify-normal lg:w-full lg:max-w-[68.5rem]">
            <!-- small screen content -->
            <div class="flex rounded-2xl overflow-hidden h-[110px] sm:h-[144px] bg-black relative w-full max-w-[360px] sm:max-w-[512px] z-10 lg:hidden">
                <div class=" text-white pb-[17px] h-full pl-4 sm:pr-4 relative w-[313px]">
                    <img class="w-[160px] sm:w-[300px] mt-2 sm:mt-0" src="/images/home/certic-logo.svg" alt="" srcset="">
                    <div class="text-lg sm:text-[32px] font-bold leading-snug absolute bottom-[17px] left-9 sm:left-1/2 sm:-translate-x-1/2 w-max">
                        <Title  text="Secruity Audit" />
                    </div>
                </div>
                <div class="rounded-full bg-[#D9D9D9] pb-[17px] w-[200px] h-[200px] sm:w-[252px] sm:h-[252px] absolute -right-[68px] top-1/2 -translate-y-1/2">
                    <div class="absolute bottom-[85px] sm:bottom-[95px] left-[40px] sm:left-[60px] font-bold">
                        <span class="text-[50px] sm:text-[70px]">9</span>
                        <span class="text-[25px] sm:text-[40px]">/</span>
                        <span class="text-[16px] sm:text-[21px]">10</span>
                    </div>
                    <div class="bg-primary text-white py-1 px-2 text-[10px] sm:text-[12px] rounded-md absolute bottom-[60px] sm:bottom-[76px] left-[20px] sm:left-[49px]">View Full Report</div>
                </div>
            </div>

            <!-- big screen content -->
            <div class="hidden w-full grow lg:flex items-center justify-between z-10 gap-x-10">
                <div class="shrink-0">
                    <img src="/images/home/security-audit.svg" alt="" srcset="">
                </div>
                <div class="w-full max-w-[440px] xl:max-w-[450px]">
                    <div class="text-[3.75rem] font-bold ">
                        <Title  text="Secruity Audit" />
                    </div>
                    <div class="text-3xl font-bold leading-loose">Rising Legends ranked 78th this year for security Protocol.</div>
                    <button class="bg-primary hover:bg-white hover:text-black hover:shadow-xl duration-200 text-white text-3xl py-2 px-3 rounded-md font-bold mt-6">View Report</button>
                </div>
            </div>

            <!-- blur group -->
            <div v-if="false" class="blur-group hidden xs:block absolute -top-[200px] -left-[20%] xs:-left-[5%] sm:left-[10%] z-0 lg:top-10 lg:left-8">
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
import Title from "@/components/UI/Title.vue";

const contentContainer = ref(null)
const maxOffsetBlur = ref(400)
const offsetBlur = ref(0)

const getBlurOffset = computed(()=> `${offsetBlur.value}px`)

function setOffset() {
    //animation 1
    offsetBlur.value = ( (contentContainer.value.getBoundingClientRect().bottom - contentContainer.value.offsetHeight)/ contentContainer.value.offsetHeight ) * maxOffsetBlur.value
    
    if(offsetBlur.value > maxOffsetBlur.value){
        offsetBlur.value = maxOffsetBlur.value
    }
    else if(offsetBlur.value < 0){
        offsetBlur.value = 0
    }
   
}

onMounted(() => {
  //  window.addEventListener('scroll',setOffset)

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

.blur-group{
    transform: translateY(v-bind(getBlurOffset));
    transition: transform 200ms ease;
}
</style>