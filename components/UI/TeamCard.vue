<template>
    <div class="team-card rounded-lg pt-8 pb-[54px] px-[51px] flex flex-col items-center gap-y-8 text-white text-center font-medium">
        <!-- image -->
        <div class="rounded-full ">
            <slot name="image" />
        </div>
        <!-- name -->
        <div>
            <slot name="name"/>
        </div>
        <!-- role -->
        <div >
            <slot name="role"/>
        </div>
    </div>
</template>
<style scoped>
.team-card{
    background: linear-gradient(180deg, #BC3689 0%, #C73585 33.33%, #C53072 59.38%, #713393 94.27%), #C62F6F;

}
</style>