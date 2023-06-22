<template>
<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" v-if="show">
 
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full  h-full items-center justify-center  text-center sm:items-center ">
   
      <div  class="relative transform overflow-y-auto font-inter h-full   w-screen sm:h-auto p-8 bg-[#132932] text-left shadow-xl transition-all sm:my-8  sm:w-full sm:max-w-[449px]">
            <button @click="show = false" class=" absolute top-4 right-4">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.90561 0.674728C9.32148 0.265976 9.99575 0.265976 10.4116 0.674728C10.8275 1.08348 10.8275 1.7462 10.4116 2.15495L6.95361 5.55374L10.5097 9.04896C10.9256 9.45771 10.9256 10.1204 10.5097 10.5292C10.0939 10.9379 9.41959 10.9379 9.00371 10.5292L5.44759 7.03397L1.89147 10.5292C1.47559 10.9379 0.801328 10.9379 0.385453 10.5292C-0.0304215 10.1204 -0.0304212 9.45771 0.385454 9.04896L3.94157 5.55374L0.483557 2.15495C0.0676822 1.7462 0.0676822 1.08348 0.483557 0.674728C0.899432 0.265976 1.5737 0.265976 1.98957 0.674728L5.44759 4.07352L8.90561 0.674728Z" fill="white" fill-opacity="0.5"/>
                </svg>
            </button>

          <div class=" flex flex-col items-center space-y-10">
             <div class=" flex items-center space-x-2">
                <button @click="step = 1" v-if="step > 1">
                    <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.02411 0.194374C5.68213 0.194374 5.33369 0.314338 5.07559 0.566268L0.845119 4.61618C0.555476 4.89346 0.555629 5.35633 0.845454 5.63342L5.07559 9.67768C5.59179 10.1695 6.43708 10.1755 6.95973 9.67768C7.47594 9.19181 7.48239 8.38806 6.95973 7.8962L4.06256 5.11897L6.96619 2.34775C7.4824 1.84989 7.48239 1.05212 6.95974 0.560263C6.70163 0.32033 6.35964 0.194374 6.02411 0.194374Z" fill="white"/>
                    </svg>
                </button>
                <div class="  font-bold text-lg text-center">
                Register {{step}}/2
                </div>
             </div>
           
          </div>

          <div v-if="step == 1" class=" w-full flex flex-col items-center space-y-2 pt-4">
             <span class=" text-white font-normal text-xs">Choose your Welcome Bonus</span>
                <div class=" w-full flex items-center space-x-5 pt-4 cursor-pointer ">
                    <div class="">
                            <img src="/images/GiftCard2.svg" alt="">
                        </div>
                    <div class=" w-full flex items-center space-x-5  bg-[#17313A] hover:bg-opacity-70 duration-300 rounded-2xl justify-between  py-5 px-4 sm:px-5">
                        
                        <div class=" flex w-full flex-col items-center space-y-2 lg:px-4 ">
                            <span class=" text-white font-bold text-xl sm:text-2xl text-center" style="font-family: 'Proxima Nova';">Welcome Bonus 250%</span>
                            <p class=" text-xs text-white font-light text-center">
                                Deposit <span class=" font-bold">$60 </span> or more for a 250% bonus
                            </p>
                        </div>
                    </div>
                </div>
                <div class=" w-full flex items-center space-x-5 cursor-pointer ">
                    <div class="">
                            <img src="/images/GiftCard2.svg" alt="">
                        </div>
                    <div class=" w-full flex items-center space-x-5  bg-[#17313A] hover:bg-opacity-70 duration-300  rounded-2xl justify-between  py-5 px-4 sm:px-5">
                        
                        <div class=" flex w-full flex-col items-center space-y-2 lg:px-4 ">
                            <span class=" text-white font-bold text-xl sm:text-2xl text-center">Welcome Bonus 150%</span>
                            <p class=" text-xs text-white font-light text-center">
                                Deposit <span class=" font-bold">$10 </span> or more for a 250% bonus
                            </p>
                        </div>
                    </div>
                </div>
          </div>

          <div v-else class=" w-full flex flex-col items-center space-y-4 pt-4">
                <div class=" w-full text-center pb-5">
                    <span>Bonus Selected: </span>
                </div>
                <div class=" w-full flex items-center space-x-5  ">
                    <div class="">
                            <img src="/images/GiftCard2.svg" alt="">
                        </div>
                    <div class=" w-full flex items-center space-x-5  bg-[#36535C] rounded-2xl justify-between  py-5 px-4 sm:px-5">
                        
                        <div class=" flex w-full flex-col items-center space-y-2 lg:px-4 ">
                            <span class=" text-white font-bold text-xl sm:text-2xl text-center" style="font-family: 'Proxima Nova';">Welcome Bonus 250%</span>
                            <p class=" text-xs text-white font-light text-center">
                                Deposit <span class=" font-bold">$60 </span> or more for a 250% bonus
                            </p>
                        </div>
                    </div>
                </div>
                <span class=" font-normal text-lg font-inter">Choose your Wallet</span>
                <div class=" flex items-center space-x-4">
                    <button>
                        <img src="/images/coinbasewallet.svg" alt="">
                    </button>
                     <button>
                        <img src="/images/MetaMask.svg" alt="">
                    </button>
                     <button>
                        <img src="/images/TWT.svg" alt="">
                    </button>
                     <button>
                        <img src="/images/walletconnect.svg" alt="">
                    </button>
                </div>

                <div class=" w-full flex flex-col items-start space-y-5">
                    <div class=" flex flex-col items-start space-y-1 w-full">
                        <span class=" text-[#667B83] text-xs font-normal">E-mail  *</span>
                        <input type="text" class=" w-full bg-white rounded-lg h-[2.4rem] p-4 outline-none text-black" placeholder="E-mail">
                    </div>
                     <div class=" flex flex-col items-start space-y-1 w-full">
                        <span class=" text-[#667B83] text-xs font-normal">Username</span>
                        <input type="text" class=" w-full bg-white rounded-lg h-[2.4rem] p-4 outline-none text-black" placeholder="Username">
                    </div>
                     <div class=" flex flex-col items-start space-y-1 w-full">
                        <span class=" text-[#667B83] text-xs font-normal">Promo code</span>
                        <input type="text" class=" w-full bg-white rounded-lg h-[2.4rem] max-w-[15.239rem] p-4 outline-none text-black" placeholder="Promo code">
                    </div>
                    <div class=" flex items-center space-x-2">
                        <input class=" w-4 h-4 border border-[#667B83] " type="checkbox">
                        <span class=" text-white font-normal text-xs">I agree with <a href="" class=" underline">Terms and Conditions</a> </span>
                    </div>
                     <div class=" flex items-center space-x-2">
                        <input class=" w-4 h-4 border border-[#667B83]" type="checkbox">
                        <span class=" text-white font-normal text-xs">I confirm that I'm 18 years or older</span>
                    </div>
                </div>
          </div>


          <div class=" flex flex-col items-center space-y-5 pt-10">
                        <button @click="nextStep" class=" md:pr-0 text-white font-bold font-inter text-xs bg-primary rounded-sm max-w-[6.839rem]  w-full h-[2.76rem]  text-center hover:bg-opacity-75 duration-300">Next</button>
                        <div class=" items-center flex flex-col">
                            <span class=" text-white text-sm font-normal">Already have an account?</span>
                            <button class=" flex items-center font-bold text-sm space-x-1">
                                <span>Connect Wallet</span>
                                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1.07922 7.96492C1.32777 7.96492 1.581 7.87969 1.76858 7.70071L4.67984 4.97628C4.97721 4.69799 4.97706 4.22617 4.6795 3.94808L1.76858 1.22755C1.39342 0.878107 0.779093 0.873846 0.399246 1.22755C0.0240885 1.57273 0.019399 2.14375 0.399246 2.4932L2.50481 4.46626L0.394552 6.43506C0.0193945 6.78877 0.019399 7.35553 0.399246 7.70498C0.586825 7.87543 0.835372 7.96492 1.07922 7.96492Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
          </div>
      </div>
    </div>
  </div>
</div>

</template>


<script setup>
 import PromotionCard from "@/components/UI/PromotionCard.vue"
 const step = ref(1);
 const show = ref(false)

 const open = () => {
    show.value = true
 }

 const nextStep = () => {
    if(step.value == 2 ){
        //create account

    }
    step.value = 2;
 }


 defineExpose({
    open
 })


</script>
