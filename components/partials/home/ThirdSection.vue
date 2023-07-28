<template>
    <section class="pt-[52px] flex flex-col px-4 pb-[110px] sm:pb-[210px] sm:px-16 lg:px-16 lg:flex-row lg:items-center lg:gap-x-14 justify-between
        max-w-[68.5rem] mx-auto xl:px-0 lg:pt-[200px] overflow-x-clip lg:overflow-x-visible">
            <div  class="relative flex text-white self-end lg:self-auto ">
                <div class="content mr-4 text-[2.25rem] sm:text-[3.75rem] max-w-[10rem] sm:max-w-xs text-end z-10 font-bold lg:text-start">
                    <Title text="Utility Functions"/>
                </div>
                <!-- <h1 >Utility Functions</h1> -->
                <!-- blur 1 -->
                <div v-if="false" class="blur-group w-[344px] h-[310px] absolute -top-14 sm:-top-[40px] -right-16 sm:-right-8 blur-[50px] overflow-hidden z-0 lg:hidden">
                    <BlurUnit class="w-[344px] h-[310px] absolute -top-0 right-0  blur-[80px]"/>
                </div>
                
                <!-- blur 2 -->
                <div v-if="false" class="blur-group hidden absolute -top-[110px] -left-20 z-0 lg:block w-[403px]  h-[401px] rounded-full overflow-hidden blur-[80px]">
                    <div class="absolute top-0 left-0">
                        <div class="absolute top-0 left-[24px]">
                            <BlurUnit class="blur-[80px]"/>
                        </div>
                        <div class="absolute left-[64px] top-[90px]">
                            <BlurUnit class="blur-[80px]"/>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div ref="contentContainer" class="z-10 flex max-w-[619px] w-full flex-col gap-y-8 ">
                <div class="list-element flex items-center gap-x-5 sm:gap-x-10 cursor-default ">
                    <div class="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] rounded-full flex items-center justify-center 
                    list-element-number text-white text-3xl sm:text-4xl shrink-0">1</div>
                    <div class="list-element-content text-[20px] sm:text-[25px] lg:text-3xl">Utility 1 is this thing that does 12</div>
                </div>
                <div class="list-element flex items-center gap-x-5 sm:gap-x-10 cursor-default">
                    <div class="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] rounded-full flex items-center justify-center 
                    list-element-number text-white text-3xl sm:text-4xl">2</div>
                    <div class="list-element-content text-[20px] sm:text-[25px] lg:text-3xl">Utility 2</div>
                </div>
                <div class="list-element flex items-center gap-x-5 sm:gap-x-10 cursor-default">
                    <div class="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] rounded-full flex items-center justify-center 
                    list-element-number text-white text-3xl sm:text-4xl">3</div>
                    <div class="list-element-content text-[20px] sm:text-[25px] lg:text-3xl">Utility 3</div>
                </div>
                <div class="list-element flex items-center gap-x-5 sm:gap-x-10 cursor-default">
                    <div class="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] rounded-full flex items-center justify-center 
                    list-element-number text-white text-3xl sm:text-4xl">4</div>
                    <div class="list-element-content text-[20px] sm:text-[25px] lg:text-3xl">Utility 4</div>
                </div>
                <div class="list-element flex items-center gap-x-5 sm:gap-x-10 cursor-default">
                    <div class="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] rounded-full flex items-center justify-center 
                    list-element-number text-white text-3xl sm:text-4xl">5</div>
                    <div class="list-element-content text-[20px] sm:text-[25px] lg:text-3xl">Utility 5</div>
                </div>
                <div class="list-element flex items-center gap-x-5 sm:gap-x-10 cursor-default">
                    <div class="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] rounded-full flex items-center justify-center 
                    list-element-number text-white text-3xl sm:text-4xl">6</div>
                    <div class="list-element-content text-[20px] sm:text-[25px] lg:text-3xl">Utility 6</div>
                </div>
            </div>

    </section>
</template>
<script setup>
import BlurUnit from "@/components/UI/BlurUnitRotated.vue"; 
import Title from "@/components/UI/Title.vue";
const contentContainer = ref(null)
const maxOffsetContent = ref(60)
const maxOffsetBlur = ref(200)
const offsetContent = ref(0)
const offsetBlur = ref(0)

const getContentOffset = computed(()=> `-${offsetContent.value}px`)
const getBlurOffset = computed(()=> `${offsetBlur.value}px`)

const width = ref(null)

function setOffset() {
    //animation 1
    let topOffset = 400
    if(window.innerWidth >= 1024){
        topOffset = 100
    }
    offsetContent.value = ( (contentContainer.value.getBoundingClientRect().bottom - contentContainer.value.offsetHeight - topOffset)/ contentContainer.value.offsetHeight ) * maxOffsetContent.value
   if(width.value > 1200)
    offsetBlur.value = ( (contentContainer.value.getBoundingClientRect().bottom - contentContainer.value.offsetHeight - topOffset)/ contentContainer.value.offsetHeight ) * maxOffsetBlur.value
    
    
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
function highlight() {
    let elements = document.querySelectorAll('.list-element')
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
   // window.addEventListener('scroll',animate)
});
onUnmounted(()=>{
    window.removeEventListener('scroll',animate)
})

</script>
<style scoped>
.list-element .list-element-number {
    transition: background 200ms ease;
    background: linear-gradient(180deg, #000000 , #000000 );
}

.list-element-number , .list-element.highlight .list-element-number {
background: linear-gradient(180deg, #BC3689 0%, #C73585 33.33%, #C53072 59.38%, #713393 94.27%);
}
.list-element.highlight .list-element-content {
    font-weight: bold;
}
.content{
transform: translateY(v-bind(getContentOffset));
transition: transform 200ms ease;
}
.blur-group{
transform: translateY(v-bind(getBlurOffset));
transition: transform 200ms ease;
}


/* .list-element:hover .list-element-number , .list-element.highlight .list-element-number {
background: linear-gradient(180deg, #BC3689 0%, #C73585 33.33%, #C53072 59.38%, #713393 94.27%);
}
.list-element:hover .list-element-content , .list-element.highlight .list-element-content {
    font-weight: bold;
} */

</style>