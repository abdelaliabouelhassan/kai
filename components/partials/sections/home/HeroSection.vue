<template>
    <div class=" w-full pt-9 md:pt-28 pb-5 font-inter space-y-10">
        <div class=" w-full flex flex-col items-center md:grid  md:grid-cols-2 md:gap-10">
            <div class=" max-w-[32.269rem] w-full flex flex-col items-center md:items-start space-y-10">
                <p class=" text-white text-center md:text-start text-[2.5rem] md:text-[3.712rem] font-extrabold leading-[3.658rem] md:leading-[5.375rem]">
                    The <span class=" text-primary textShadow" >1st</span> Fully 
                    <span class=" text-primary textShadow">Decentralized </span>
                    <br>
                    <span class="textShadow text-primary">Casino</span>
                </p>
                <div class="  space-y-4">
                    <div class=" flex items-center space-x-5">
                        <div>
                            <img src="/images/DataTransfer.svg" alt="">
                        </div>
                        <div class=" px-2 py-px bg-black rounded-[0.221rem]">
                            <span class=" text-white font-extrabold text-xl">Instant withdrawls</span>
                        </div>
                    </div>
                    <div class=" flex items-center space-x-5">
                        <div>
                            <img src="/images/GiftCard.svg" alt="">
                        </div>
                        <div class=" px-2 py-px bg-black rounded-[0.221rem]">
                            <span class=" text-white font-extrabold text-xl">Daily Promtions</span>
                        </div>
                    </div>
                    <div class=" flex items-center space-x-5">
                        <div>
                            <img src="/images/Discord.svg" alt="">
                        </div>
                        <div class=" px-2 py-px bg-black rounded-[0.221rem]">
                            <span class=" text-white font-extrabold text-xl">24/7 Live support </span>
                        </div>
                    </div>
                    <div class=" flex items-center space-x-5">
                        <div>
                            <img src="/images/Rocket.svg" alt="">
                        </div>
                        <div class=" px-2 py-px bg-black rounded-[0.221rem]">
                            <span class=" text-white font-extrabold text-xl">10,000 + Games</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" w-full flex flex-col items-center md:items-start md:space-y-10">
                <div class=" w-full flex justify-center  pt-16 ">
                   <img src="/images/Colourportal1mobile.svg" class=" md:hidden  w-full h-full object-cover " alt="">
                    <img src="/images/Colourportal1.svg" class=" hidden md:block max-w-[23rem] md:max-w-full w-full h-full object-cover  md:pl-20 md:scale-[1.7] lg:pl-0 lg:scale-125 " alt="">
                </div>
                <div class=" flex items-center space-x-2 md:pl-5">
                    <div>
                        <img src="/images/de.ga.svg" alt="">
                    </div>
                     <div>
                        <img src="/images/bnb.svg" alt="">
                    </div>
                    <div class=" flex flex-col items-start -space-y-10 -mt-4">
                        <img src="/images/polygon.svg" alt="">
                        <span class=" text-[#BCB8B8] font-inter font-medium text-[0.573rem]">(Coming soon)</span>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class=" flex justify-center items-center  md:space-x-5 flex-row-reverse md:flex-row pb-4">
            <button class=" text-white font-bold font-inter text-lg md:text-[1.503rem] bg-primary rounded-[0.601rem] max-w-[10.11rem] md:max-w-[14.128rem] w-full h-[2.791rem] md:h-[3.9rem] text-center hover:bg-opacity-75 duration-300">Connect Wallet</button>
            <button @click="openModal" class=" mr-2 md:pr-0 text-primary font-bold font-inter text-lg md:text-[1.503rem] bg-white rounded-[0.601rem] max-w-[10.11rem] md:max-w-[14.128rem] w-full h-[2.791rem] md:h-[3.9rem] text-center hover:bg-opacity-75 duration-300">Register</button>
        </div>
        <Register ref="RegisterRef"/>
    </div>
</template>


<script setup>
 import Register from "@/components/UI/Register.vue"
 const RegisterRef = ref(null)

 const openModal = () => {
    RegisterRef.value.open();
 }
</script>

<style scoped>
 .textShadow {
    text-shadow: 0px 0px 1000.54px #D4165C, 0px 0px 30.45px #D4165C, 0px 0px 500.18px #D4165C, 0px 0px 500.59px #D4165C, 0px 0px 84.4543px #D4165C, 0px 0px 42.2272px #D4165C;
 }
</style>