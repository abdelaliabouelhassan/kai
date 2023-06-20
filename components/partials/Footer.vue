<template>
    <div class=" w-full bg-secondary p-10 font-inter">
         <div class="max-w-[73.188rem] mx-auto">
            <!-- Desktop -->
            <div class=" w-full  justify-between items-start lg:flex hidden">
                <div class=" flex flex-col items-start space-y-3">
                    <div>
                        <img src="/images/logo.svg" class=" max-w-[149px]" alt="">
                    </div>
                    <div class=" flex items-center space-x-2">
                        <a href="#" target="_blank">
                            <Twitter />
                        </a>
                         <a href="#" target="_blank">
                            <Facebook />
                        </a>
                         <a href="#" target="_blank">
                            <Instagram />
                        </a>
                    </div>
                </div>
                 <div class=" flex flex-col items-start space-y-2">
                     <RouterLink to="/" class=" text-sm font-bold text-white">
                        Terms and Conditions
                    </RouterLink>
                     <RouterLink to="/" class=" text-sm font-bold text-white">
                        Privacy Policy
                    </RouterLink>
                     <RouterLink to="/" class=" text-sm font-bold text-white">
                        Responsible Game
                    </RouterLink>
                     <RouterLink to="/" class=" text-sm font-bold text-white">
                       Fair Play
                    </RouterLink>
                     <RouterLink to="/" class=" text-sm font-bold text-white">
                       Contact Us
                    </RouterLink>
                   
                </div>
                <div class=" flex  items-start space-x-4">
                       <div class=" flex flex-col items-center space-y-8 w-[55.47px]">
                        <div class="w-[55.47px]">
                              <img src="/images/crown.svg"  class=" max-w-[52.47px] w-full h-full" alt="">
                        </div>
                       <div class="w-[55.47px] pl-2">
                           <img src="/images/18.svg" class=" max-w-[36.3px] w-full h-full" alt="">
                       </div>
                       </div>
                        <p class=" max-w-[400px] lg:max-w-[601.64px] text-sm text-white font-normal">
                            Casino.com is operated by SG International N.V., which is registered in E-Commerce park, Vredenberg, Curacao, having gaming licence No.8048/JAZZ2015-035 and all rights to operate the gaming software. SG International LP is providing payment services as an agent according to the licence agreement concluded between SG International LP and SG International N.V.
                            <br>  <br>
                              © Casino. All rights reserved. <br>
                            Developed by <span class=" text-white underline">SoftGamings</span>
                        </p>                   
                </div>
                <div class=" border p-1 rounded-md">
                    <LanguageSwitch :showCode="true"/>
                </div>
            </div>
            <!-- mobile -->
            <div class=" w-full flex flex-col items-center lg:hidden space-y-4">
                <div class=" border p-1 rounded-md">
                    <LanguageSwitch :showCode="true"/>
                </div>
                <div class=" flex flex-col items-center space-y-2">
                     <RouterLink to="/" class=" text-sm font-bold text-white">
                        Terms and Conditions
                    </RouterLink>
                     <RouterLink to="/" class=" text-sm font-bold text-white">
                        Privacy Policy
                    </RouterLink>
                     <RouterLink to="/" class=" text-sm font-bold text-white">
                        Responsible Game
                    </RouterLink>
                     <RouterLink to="/" class=" text-sm font-bold text-white">
                       Fair Play
                    </RouterLink>
                     <RouterLink to="/" class=" text-sm font-bold text-white">
                       Contact Us
                    </RouterLink> 
                </div> 
                  <div class=" flex items-center space-x-2">
                        <a href="#" target="_blank">
                            <Twitter />
                        </a>
                         <a href="#" target="_blank">
                            <Facebook />
                        </a>
                         <a href="#" target="_blank">
                            <Instagram />
                        </a>
                 </div> 

                 <div>
                    <p class=" max-w-[297.92px] text-xs text-white font-normal text-center">
                            Casino.com is operated by SG International N.V., which is registered in E-Commerce park, Vredenberg, Curacao, having gaming licence No.8048/JAZZ2015-035 and all rights to operate the gaming software. SG International LP is providing payment services as an agent according to the licence agreement concluded between SG International LP and SG International N.V.
                            <br>  <br>
                              © Casino. All rights reserved. <br>
                            Developed by <span class=" text-white underline">SoftGamings</span>
                        </p> 
                 </div>
                  <div class=" flex  items-center space-x-4 ">
                      
                       <div class="">
                           <img src="/images/18.svg" class=" max-w-[36.3px] w-full h-full" alt="">
                       </div>
                         <div >
                              <img src="/images/crown.svg"  class=" max-w-[52.47px] w-full h-full" alt="">
                        </div>
                 </div>
            </div>
         </div>
    </div>
</template>


<script setup>
 import Twitter from "@/components/UI/Icons/Twitter.vue"
 import Facebook from "@/components/UI/Icons/Facebook.vue"
 import Instagram from "@/components/UI/Icons/Instagram.vue"
 import LanguageSwitch from "@/components/UI/LanguageSwitch.vue"
</script>