<template>
    <section class="py-[250px] sm:py-[298px] overflow-x-clip lg:pt-[273px] lg:pb-[200px]">
        <div ref="contentContainer" class="flex relative w-full max-w-[576px] mx-auto lg:max-w-[68.5rem] px-4 lg:px-16 xl:px-0">
            <!-- content -->
            <div class="flex flex-col items-center gap-y-11 w-full  mx-auto z-10 ">
                <div class=" w-full lg:flex lg:items-center lg:gap-x-6">
                    <!-- promo card -->
                    <div class="hidden h-full lg:flex flex-col justify-between items-center shrink-0 text-center bg-[#282828] rounded-2xl overflow-hidden text-white py-[21px] px-[34px] w-[284px] 
                      xl:w-[400px] xl:py-[30px] ">
                        <!-- gift img -->
                        <svg class="ml-[25%] mr-auto" width="67" height="66" viewBox="0 0 67 66" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect x="0.930725" y="0.19458" width="65.6341" height="65.6341" fill="url(#pattern0)"/>
                            <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_12_790" transform="scale(0.0104167)"/>
                            </pattern>
                            <image id="image0_12_790" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADYElEQVR4nO3cu24TQRjF8RG3hksENSWOEMmDEFFFiCdA4mkghASkPEMISFDQADUUUAE9goguErl0gP5oYIIsY3vn5pnd9flJqfDOfnPOerETaY0REREREREREREREREZASwD68BH4IjMTAPa58hlYTNZntkFA5wBHgG/Zrkb070Chv0ENm1Wswj/dYkdmG4XcOxV1hLclV+E6UcB1kbOe759axVh+lOAzWwpRwEPSk5t+lOAtZajgE8lJzb9KuBDjgIOS05s+lXAQY4CijItmyeVCqhMBVSmAiprWwFf3Ff168BV4Kz7GQCrwJbHPFvutYOh4+1aK8BD4Cst0pYCdoE7wKnkgRoAJ4BbwGdawKTKMMMz4HzyIIHsOYHnVJZjIyk27BWZPETau8He8qrJsYlYL4CTyQPkKcG+C6uoVcBujdvOJMAF4BsVmFSR571tWoa/HwKKyzF4zEfN6reeUfYTmHtnFmVSRZxz02PNy8Bj+8sq9/MUWAyYKer4kn9YOua7p2lDh1rxCG9vzHF79t885ok+HrhBYTGZjw4dauqV6K7cSbY95ok+3n1jLiom89GhQ0399ONuGZPse8wTfbz7clZUTOajQ4c6lxAgifN8bzh2Lgq40rDek5SBmW6n4dhFCovJPGTD46x6hLAXOzCT2TUHDcfepLCYzH03PMmW5yeZbXvPDh14zPnsGjtN4Q/9KruokKxFRERERET+mNH3k3fAxVwRAwvAG1oox+ZaHX7bSzCpuhB+m0swqboSfltLMKm6FH4bSzCpMszw1gbiea6FHK85fp07d1U+szZtpMiVjwvM43XvgUtdeSf4zNm0iWLh4//3gM6U4DOjz4ZjeIXEyK0iYJ6o9UsLybppwzGmhsSYcALnCV6/tJTsx204xtiQJoVjwucJWn8eC/gvpGnhmLh5vNef1wL+hdQUjomfx2v9eS4AF8zUcEzaPI3rz3sByQPTMSqgMhVQmQqoTAVUpgJ6UMBBmwamW/ZzFKBHllV+ZNl9CjLN83TJ3RwFLOmxldGPrbyWXIArodgDL0zzLF2xniX8oUcX28fxzpzpRwEvgdPZChgqYWPWT9E13S7gh3uKet7wx/yfsGb/h5/FM0VN9wo4dFncy3bPFxERERERERERERER0ye/AcwE03dHHnLZAAAAAElFTkSuQmCC"/>
                            </defs>
                        </svg>
                        <div class="font-semibold xl:text-2xl">Are you looking to stake long term?</div>
                        <div class="text-[13px] font-light xl:text-[19px]">Follow for our special offer today!</div>
                        <button class="bg-primary text-white px-16 py-2 rounded-lg font-semibold w-fit xl:text-2xl">Promo</button>
                    </div>

                    <!-- comming soon card -->
                    <div class="bg-white hover:shadow-2xl duration-100 flex flex-col items-center gap-y-10 overflow-hidden rounded-2xl py-10 sm:pb-10 sm:pt-11 w-full  relative text-center px-8 xl:gap-y-16">
                        <div class="bg-primary text-sm sm:text-base text-white py-2 px-6 absolute top-0 right-0"> comming soon</div>
                        <div class="text-xl sm:text-[26px] font-bold xl:text-[38px]"> stake your NFT’s and earn DeGa </div>
                        <div class="font-bold text-sm sm:text-base xl:text-2xl">Staking coming soon</div>
                        <div class="h-[40px] w-[166px] bg-[#ACABAB] rounded-md xl:h-[60px] xl:w-[280px]"></div>
                    </div>
                    
                </div>
                <div class="content text-[2.25rem] sm:text-[3.75rem] font-bold text-center max-w-[250px] sm:max-w-[400px] text-white ">
                    <Title text="Staking Coming soon"/>
                </div>
            </div>

            <!-- blurs 1-->
            <div v-if="false" class=" absolute -top-[135px] left-1/2 -translate-x-1/2 w-[460px] h-[713px] blur-[80px] overflow-hidden lg:hidden">
                <div class="blur-group absolute top-0 left-0">
                    <div class="absolute top-0 left-[24px]">
                        <BlurUnit class="blur-[100px]"/>
                    </div>
                    <div class="absolute top-[51px] left-0">
                        <BlurUnit class="blur-[100px]"/>
                    </div>
                </div>
                <div class="blur-group absolute top-0 left-[106px]">
                    <div class="absolute top-0 left-[24px]">
                        <BlurUnit class="blur-[100px]"/>
                    </div>
                    <div class="absolute top-[51px] left-0">
                        <BlurUnit class="blur-[100px]"/>
                    </div>
                </div>
                <div class="blur-group absolute top-[225px] left-[46px]">
                    <div class="absolute top-0 left-[24px]">
                        <BlurUnit class="blur-[100px]"/>
                    </div>
                    <div class="absolute top-[51px] left-0">
                        <BlurUnit class="blur-[100px]"/>
                    </div>
                </div>
            </div>

            <!-- blurs 2-->
            <div v-if="false" class="blur-group hidden absolute -top-[247px] xl:-top-[113px]  left-16 w-full lg:block">
                <div class="absolute top-0 left-0 w-[622px] h-[500px] blur-[80px] overflow-hidden">
                    <div class="absolute top-0 left-0">
                        <div class="absolute top-0 left-[24px]">
                            <BlurUnit class="blur-[80px]"/>
                        </div>
                        <div class="absolute top-[51px] left-0">
                            <BlurUnit class="blur-[80px]"/>
                        </div>
                    </div>
                    <div class="absolute top-0 left-[178px]">
                        <div class="absolute top-0 left-[24px]">
                            <BlurUnit class="blur-[80px]"/>
                        </div>
                        <div class="absolute top-[51px] left-0">
                            <BlurUnit class="blur-[80px]"/>
                        </div>
                    </div>
                </div>
                
            </div>
            <!-- blurs 3-->
            <div class="blur-group hidden absolute top-[220px] right-[220px] w-[444px] h-[506px] blur-[80px] overflow-hidden lg:block
            xl:top-[300px] xl:right-[200px]">
                    <div class="absolute top-0 left-0">
                        <div class="absolute top-0 left-[24px]">
                            <BlurUnit class="blur-[80px]"/>
                        </div>
                        <div class="absolute top-[51px] left-0">
                            <BlurUnit class="blur-[80px]"/>
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
const maxOffsetContent = ref(60)
const maxOffsetBlur = ref(200)
const offsetContent = ref(0)
const offsetBlur = ref(0)

const getContentOffset = computed(()=> `-${offsetContent.value}px`)
const getBlurOffset = computed(()=> `${offsetBlur.value}px`)

const width = ref(null)

function setOffset() {
    //animation 1
    offsetContent.value = ( (contentContainer.value.getBoundingClientRect().bottom - contentContainer.value.offsetHeight - 200)/ contentContainer.value.offsetHeight ) * maxOffsetContent.value
    if(width.value > 1200)
    offsetBlur.value = ( (contentContainer.value.getBoundingClientRect().bottom - contentContainer.value.offsetHeight - 200)/ contentContainer.value.offsetHeight ) * maxOffsetBlur.value
    
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
    //window.addEventListener('scroll',setOffset)
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