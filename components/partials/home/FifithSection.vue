<template>
    <section class="pt-[119px] pb-[147px] sm:pt-[169px] sm:pb-[197px] overflow-x-clip lg:py-[117px]">
        <div ref="contentContainer" class="flex w-full max-w-[90rem] mx-auto px-4 relative">

            <div class="w-full max-w-[515px] mx-auto flex flex-col gap-y-[70px] z-10 lg:max-w-[650px] lg:gap-y-[90px] ">
                <h1 class="text-[2.25rem] sm:text-[3.75rem]  text-center z-10 font-bold lg:text-[7.5rem]">Road Map</h1>
                <div class="list-element-text list-element-text-content text-2xl sm:text-3xl font-bold lg:text-[40px] pr-8">27th September minting</div>
                <div class="list-element-text list-element-text-content text-2xl sm:text-3xl font-bold lg:text-[40px] text-end pl-8">20th September Pre minting</div>
                <div class="list-element-text list-element-text-content text-2xl sm:text-3xl font-bold lg:text-[40px] pr-8">16th August Announcement</div>
                <div class="list-element-text list-element-text-content text-2xl sm:text-3xl font-bold lg:text-[40px] text-end pl-8">Staking Implementation TBA</div>
            </div>
            <div v-if="width > 1023" class="blur-group absolute top-0 -right-64 z-0 lg:top-auto lg:bottom-0 h-fit">
                <BlurUnit class="blur-[80px]"/>
            </div>
        </div>
        
        
        
    </section>
</template>
<script setup>
import BlurUnit from "@/components/UI/BlurUnitRotated.vue"; 

const contentContainer = ref(null)
const maxOffsetBlur = ref(300)
const offsetBlur = ref(0)

const getBlurOffset = computed(()=> `${offsetBlur.value}px`)

const width = ref(null)

function setOffset() {
    maxOffsetBlur.value = 300
    if(window.innerWidth >= 1024){
        maxOffsetBlur.value = 400
    }
    if(width > 1023)
     offsetBlur.value = ( (contentContainer.value.getBoundingClientRect().bottom - contentContainer.value.offsetHeight - 100)/ contentContainer.value.offsetHeight ) * maxOffsetBlur.value
   
    if(offsetBlur.value > maxOffsetBlur.value){
        offsetBlur.value = maxOffsetBlur.value
    }
    else if(offsetBlur.value < 0){
        offsetBlur.value = 0
    }
   
}

function highlight() {
    let elements = document.querySelectorAll('.list-element-text')
    let highlightMargin = 50
    if(window.innerWidth >= 640){
        highlightMargin = 65
    }
    elements.forEach(element => {
        if(element.getBoundingClientRect().top < (window.innerHeight/2)+highlightMargin
            && element.getBoundingClientRect().top > (window.innerHeight/2)-highlightMargin){
            element.classList.add('highlight')
        }else{
            element.classList.remove('highlight')
        }
        
    });
}

function animate() {
    setOffset()
    highlight()
}


onMounted(() => {
    width.value = window.innerWidth
    window.addEventListener('resize', () => {
        width.value = window.innerWidth
    })
    window.addEventListener('scroll',animate)
});
onUnmounted(()=>{
    window.removeEventListener('scroll',animate)
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

.list-element-text  {
    transition: background 200ms ease;
}
.list-element-text:hover  , .list-element-text.highlight  {
 color:#BC3689;
}
.list-element-text:hover .list-element-text-content , .list-element-text.highlight .list-element-text-content {
    font-weight: bold;
}


</style>

