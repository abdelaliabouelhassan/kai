<template>
    <div class=" w-full py-20 font-inter space-y-10">
        <div class=" w-full bg-secondary p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class=" w-full flex flex-col items-start space-y-4">
                <div class=" flex items-center space-x-2">
                        <Casino />
                        <span class=" text-white font-medium text-base md:text-2xl">Casino</span>
                </div>
                <div class=" w-full max-h-[14.218rem] rounded-lg overflow-hidden">
                    <img src="/images/WiderCasino.svg" class=" w-full h-full object-cover" alt="">
                </div>
                <div class=" w-full flex items-center justify-between">
                    <div>
                        <img src="/images/PragmaticPlay.svg"  alt="">
                    </div>
                    <div>
                        <img src="/images/pgsoft.svg" alt="">
                    </div>
                    <div>
                        <img src="/images/netent-transformed.svg" alt="">
                    </div>
                    <div>
                        <img src="/images/play.svg" alt="">
                    </div>
                </div>
                <div class=" w-full">
                    <button class=" w-full h-[2.324rem] md:h-[3.581rem] text-center bg-primary text-white font-medium text-base md:text-2xl rounded hover:bg-opacity-75 duration-300">Casino</button>
                </div>
            </div>
            <div class=" w-full flex flex-col items-start space-y-4">
                <div class=" flex items-center space-x-2">
                        <SportsBook />
                        <span class=" text-white font-medium text-base md:text-2xl">Sports</span>
                </div>
                <div class=" w-full max-h-[14.218rem] rounded-lg overflow-hidden relative">
                    <img src="/images/Artboard.svg" class=" w-full h-full object-cover" alt="">
                    <button class=" absolute cursor-default top-0 right-0 text-primary font-bold font-inter  text-base md:text-lg bg-white  max-w-[8.625rem] md:max-w-[10.518rem] w-full h-[2.563rem] md:h-[3.125rem] text-center  duration-300">Coming Soon</button>
                </div>
                <div class=" w-full flex items-center justify-between">
                    <div>
                        <img src="/images/premier-league.svg"  alt="">
                    </div>
                    <div>
                        <img src="/images/nba.svg" alt="">
                    </div>
                    <div>
                        <img src="/images/ufc.svg" alt="">
                    </div>
                    <div>
                        <img src="/images/IPL-dlkwyo.svg" alt="">
                    </div>
                </div>
                <div class=" w-full">
                    <button class=" w-full h-[2.324rem] md:h-[3.581rem] text-center bg-[#ACABAB] text-[#595252] font-medium text-base md:text-2xl rounded hover:bg-opacity-75 duration-300">Sports</button>
                </div>
            </div>
        </div>

        <div class="w-full bg-secondary p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 md:gap-10 ">
            <div class=" w-full flex">
                <div class=" m-auto flex flex-col items-center space-y-4">
                    <div>
                        <p class=" hidden md:block font-medium text-white text-center sm:text-[2.033rem] lg:text-[3.117rem] sm:leading-[1.887rem] lg:leading-[2.892rem]">
                             Current 
                             <br>
                             <span class=" text-primary font-bold textShadow" >Promotions</span>
                        </p>
                    </div>

                    <button class=" hidden md:flex items-center space-x-1">
                        <span class=" text-white font-bold sm:text-base text-2xl pb-1">See all Promotions</span>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.80731 8.16372C1.80731 4.69692 4.62949 1.87474 8.09629 1.87474C11.5631 1.87474 14.3853 4.69692 14.3853 8.16372C14.3853 11.6305 11.5631 14.4527 8.09629 14.4527C4.62949 14.4527 1.80731 11.6305 1.80731 8.16372ZM0.235064 8.16372C0.235064 12.5031 3.75689 16.0249 8.09629 16.0249C12.4357 16.0249 15.9575 12.5031 15.9575 8.16372C15.9575 3.82432 12.4357 0.30249 8.09629 0.30249C3.7569 0.30249 0.235064 3.82432 0.235064 8.16372ZM8.09629 7.3776L4.9518 7.3776L4.9518 8.94984L8.09629 8.94984L8.09629 11.3082L11.2408 8.16372L8.09629 5.01923L8.09629 7.3776Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div class=" w-full flex flex-col items-start space-y-2 ">
                <div class=" w-full flex justify-center pb-5 md:hidden">
                    <span class="textShadow font-bold text-4xl text-primary">Promotions</span>
                </div>
              <PromotionCard title="Welcome Bonus 250%" subtitle='Deposit <span class=" font-bold">$60 </span> or more for a 250% bonus'>
                      <img src="/images/GiftCard2.svg" alt="">
              </PromotionCard>
               <PromotionCard title="Welcome Bonus 150%" subtitle='Deposit <span class=" font-bold">$20 </span> or more for a 250% bonus'>
                      <img src="/images/GiftCard2.svg" alt="">
              </PromotionCard>
               <PromotionCard title="Crypto Cashback" subtitle='Deposit <span class=" font-bold">$20 </span> Get 20% cashback'>
                      <img src="/images/MedalFirstPlace.svg" alt="">
              </PromotionCard>

              <div class=" w-full flex justify-end">
                    <button class="  md:hidden flex items-center space-x-1">
                        <span class=" text-white font-bold text-xd  pb-1">See all Promotions</span>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.80731 8.16372C1.80731 4.69692 4.62949 1.87474 8.09629 1.87474C11.5631 1.87474 14.3853 4.69692 14.3853 8.16372C14.3853 11.6305 11.5631 14.4527 8.09629 14.4527C4.62949 14.4527 1.80731 11.6305 1.80731 8.16372ZM0.235064 8.16372C0.235064 12.5031 3.75689 16.0249 8.09629 16.0249C12.4357 16.0249 15.9575 12.5031 15.9575 8.16372C15.9575 3.82432 12.4357 0.30249 8.09629 0.30249C3.7569 0.30249 0.235064 3.82432 0.235064 8.16372ZM8.09629 7.3776L4.9518 7.3776L4.9518 8.94984L8.09629 8.94984L8.09629 11.3082L11.2408 8.16372L8.09629 5.01923L8.09629 7.3776Z" fill="white"/>
                        </svg>
                    </button>
              </div>
            </div>
        </div>
    </div>
</template>


<script setup>
 import Casino from "@/components/UI/Icons/Casino.vue"
 import SportsBook from "@/components/UI/Icons/SportsBook.vue"
 import PromotionCard from "@/components/UI/PromotionCard.vue"
</script>


<style scoped>
 .textShadow {
    text-shadow: 0px 0px 720.323px #D4145A, 0px 0px 411.613px #D4145A, 0px 0px 240.108px #D4145A, 0px 0px 120.054px #D4145A, 0px 0px 34.3011px #D4145A, 0px 0px 17.1506px #D4145A;
 }
</style>