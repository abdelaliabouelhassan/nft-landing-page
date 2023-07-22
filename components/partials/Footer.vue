<template>
    <footer class="relative flex overflow-hidden">
       
        <!-- footer content -->
        <div class="w-full max-w-[68.5rem] mx-auto px-4 sm:px-16 pb-[100px] z-10">
            <!-- pages links -->
            <div class="pt-[145px] flex text-white gap-x-10 justify-between text-[25px] font-light">
                <div class="flex flex-col gap-y-6 w-full">
                    <a href="#">Roadmap</a>
                    <a href="#">Community</a>
                    <a href="#">Blog</a>
                </div>
                <div class="flex flex-col gap-y-6 w-full">
                    <a href="#">FAQ's</a>
                    <a href="#">Contact</a>
                    <a href="#">Terms and conditions</a>
                </div>
                <div class="flex flex-col gap-y-6 w-full">
                    <a href="#">Discord</a>
                    <a href="#">Instagram</a>
                    <a href="#">Telegram</a>
                    <a href="#">Twitter</a>
                </div>
            </div>
            
            <!-- social media -->
            <div class="grid grid-cols-2 w-fit gap-10 sm:grid-cols-4 pt-[100px]">
                <!-- twitter -->
                <a href="#" class="rounded-full w-[87px] h-[87px] bg-[#112A34] flex items-center justify-center">
                    <img src="/images/footer/twitter-logo.svg" alt="">
                </a>
                <!-- telegram -->
                <a href="#" class="rounded-full w-[87px] h-[87px] bg-[#112A34] flex items-center justify-center">
                    <img src="/images/footer/telegram-logo.svg" alt="">
                    
                </a>
                <!-- instagram -->
                <a href="#" class="rounded-full w-[87px] h-[87px] bg-[#112A34] flex items-center justify-center">
                    <img src="/images/footer/instagram-logo.svg" alt="">
                </a>
                <!-- discord -->
                <a href="#" class="rounded-full w-[87px] h-[87px] bg-[#112A34] flex items-center justify-center">
                    <img src="/images/footer/discord-logo.svg" alt="">
                </a>
            </div>
            <div class="flex items-center gap-x-32 gap-y-5 w-fit pt-[42px] flex-wrap">
                <img src="images/coin-games-logo.svg" alt="" srcset="">
                <img src="images/de-ga-logo.svg" alt="" srcset="">
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer{
    background:linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/footer/footer-background.svg);
    background-position:top  left;
    background-repeat: no-repeat; 
    background-size:cover;
}
</style>