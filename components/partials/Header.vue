<template>
    <div class=" w-full flex items-center justify-between font-inter">
        <div class=" flex items-center space-x-5">
             <button @click="open">
                <Burger />
            </button>
            <RouterLink to="/" class=" hidden md:block">
                <img src="/images/logo.svg" class=" max-w-[11.938rem] max-h-[2.5rem] w-full h-full object-cover" alt="">
            </RouterLink>
        </div>

        <div class=" flex items-center space-x-5">
            <button class=" text-white text-sm font-inter font-bold bg-primary text-center md:w-[9.813rem] w-[9.113rem] h-[2.5rem]  hover:bg-opacity-75 duration-300 rounded-[0.388rem] md:rounded-[0.188rem]">Connect Wallet</button>
            <LanguageSwitch class="  hidden md:block" />
        </div>

        <RouterLink to="/" class=" md:hidden">
            <img src="/images/mobile_logo.svg" alt="">
        </RouterLink>

         
             <Register ref="RegisterRef"/>
    </div>
     <div class="flex items-center lg:order-2 ">
                <aside id="default-sidebar" :class="{'translate-x-0':show,'-translate-x-full rtl:translate-x-full':!show}" class="fixed py-4 bg-[#132932] top-0 left-0 rtl:right-0 z-40 w-64 h-screen transition-transform  " aria-label="Sidebar">
                    <div class="h-full  overflow-y-auto   ">
                       <div class=" w-full flex flex-col items-center space-y-4">
                         <div class=" w-full flex items-center justify-between p-4">
                            <span class=" text-sm text-white font-normal">Menu</span>
                            <button @click="show = false" class=" text-white hover:text-secondary duration-300">
                                <svg class=" fill-current" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4949 0.601128C15.2994 -0.212677 16.589 -0.198389 17.3753 0.633041C18.1615 1.46447 18.1468 2.7982 17.3423 3.612L12.0686 8.94675L17.7002 14.6436C18.5047 15.4574 18.5195 16.7911 17.7332 17.6226C16.9469 18.454 15.6574 18.4683 14.8529 17.6545L9.15669 11.8923L3.46048 17.6545C2.65599 18.4683 1.36643 18.454 0.580165 17.6226C-0.206099 16.7911 -0.191321 15.4574 0.613171 14.6436L6.24482 8.94675L0.971116 3.612C0.166624 2.7982 0.151847 1.46447 0.93811 0.633041C1.72437 -0.198389 3.01394 -0.212677 3.81843 0.601128L9.15669 6.00118L14.4949 0.601128Z" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <img src="/images/logo.svg" alt="">
                        </div>
                       </div>
                       <div class=" w-full py-8 px-4 flex bg-[#0D2129]">
                        <div class=" flex flex-col items-start space-y-4 m-auto">
                            <button @click="openModal" class=" text-white border border-white font-bold text-sm w-[137px] h-[40px] rounded-lg">
                                Register
                            </button>
                             <button @click="openModal" class=" text-white  bg-primary font-bold text-sm w-[137px] h-[40px] rounded-lg">
                                Connect Wallet
                            </button>
                        </div>
                       </div>
                        <ul class="space-y-2 font-medium">
                            <li>
                                <NuxtLink to="/" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-[#FFFFFF80] ">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9624 9.16876L11.8021 1.00928C11.4543 0.661377 10.992 0.469727 10.5002 0.469727C10.0083 0.469727 9.54597 0.661224 9.19805 1.00912L1.04345 9.16312L1.03521 9.17151C0.321055 9.88974 0.322276 11.0551 1.03872 11.7715C1.36604 12.0989 1.79834 12.2886 2.26056 12.3084C2.27933 12.3102 2.29825 12.3112 2.31732 12.3112H2.64251V18.315C2.64251 19.5031 3.6092 20.4697 4.79763 20.4697H7.98964C8.31314 20.4697 8.57561 20.2074 8.57561 19.8838V15.1768C8.57561 14.6346 9.01661 14.1936 9.55879 14.1936H11.4415C11.9837 14.1936 12.4247 14.6346 12.4247 15.1768V19.8838C12.4247 20.2074 12.687 20.4697 13.0107 20.4697H16.2027C17.3911 20.4697 18.3578 19.5031 18.3578 18.315V12.3112H18.6593C19.151 12.3112 19.6134 12.1197 19.9614 11.7718C20.6786 11.0541 20.6789 9.88684 19.9624 9.16876ZM19.1126 10.9235C19.3615 10.6744 19.3618 10.2664 19.1134 10.0169L19.1124 10.0159L10.9535 1.85782C10.8307 1.73495 10.6734 1.66973 10.5002 1.66973C10.3267 1.66973 10.1695 1.73476 10.0466 1.85765L1.89611 10.0076L1.89454 10.0092L1.88621 10.0176C1.63812 10.2671 1.63884 10.6745 1.88729 10.9229C2.00171 11.0374 2.14951 11.1025 2.31201 11.1095L2.34461 11.1109L2.34711 11.1112H3.84257V18.315C3.84257 18.8402 4.27187 19.2697 4.79763 19.2697H7.37554V15.1768C7.37554 13.9719 8.35383 12.9936 9.55879 12.9936H11.4415C12.6465 12.9936 13.6248 13.9719 13.6248 15.1768V19.2697H16.2027C16.7284 19.2697 17.1577 18.8402 17.1577 18.315V11.1112H18.6593C18.8324 11.1112 18.9895 11.0464 19.1126 10.9235Z" fill="white"/>
                                    </svg>
                                <span class="flex-1 ml-3 whitespace-nowrap text-white text-base font-bold">Home page</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-[#FFFFFF80] ">
                                   <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_2401_40801)">
                                        <path d="M21.3389 4.63086C18.9779 2.26997 15.8389 0.969727 12.5 0.969727C9.16113 0.969727 6.02212 2.26997 3.66113 4.63086C1.30024 6.99185 0 10.1309 0 13.4697C0 16.8086 1.30024 19.9476 3.66113 22.3086C6.02212 24.6695 9.16113 25.9697 12.5 25.9697C15.8389 25.9697 18.9779 24.6695 21.3389 22.3086C23.6998 19.9476 25 16.8086 25 13.4697C25 10.1309 23.6998 6.99185 21.3389 4.63086ZM23.5352 13.4697C23.5352 14.7063 23.3307 15.8961 22.9538 17.007L21.5963 16.4448C21.9035 15.5079 22.0703 14.508 22.0703 13.4697C22.0703 12.4314 21.9035 11.4316 21.5963 10.4947L22.9538 9.93242C23.3307 11.0433 23.5352 12.2331 23.5352 13.4697ZM12.5 21.5752C8.03062 21.5752 4.39453 17.9391 4.39453 13.4697C4.39453 9.00034 8.03062 5.36426 12.5 5.36426C16.9694 5.36426 20.6055 9.00034 20.6055 13.4697C20.6055 17.9391 16.9694 21.5752 12.5 21.5752ZM1.46484 13.4697C1.46484 12.2331 1.66934 11.0433 2.04624 9.93242L3.40371 10.4947C3.09653 11.4316 2.92969 12.4314 2.92969 13.4697C2.92969 14.508 3.09653 15.5079 3.40371 16.4448L2.04624 17.007C1.66934 15.8961 1.46484 14.7063 1.46484 13.4697ZM22.3907 8.58008L21.0344 9.14189C20.1139 7.33403 18.6357 5.85586 16.8278 4.93535L17.3896 3.579C19.5534 4.65308 21.3167 6.41631 22.3907 8.58008ZM16.0373 3.01597L15.475 4.37344C14.5381 4.06626 13.5383 3.89941 12.5 3.89941C11.4617 3.89941 10.4619 4.06626 9.52495 4.37344L8.9627 3.01597C10.0736 2.63906 11.2634 2.43457 12.5 2.43457C13.7366 2.43457 14.9264 2.63906 16.0373 3.01597ZM7.61035 3.579L8.17217 4.93535C6.36431 5.85586 4.88613 7.33403 3.96563 9.14189L2.60928 8.58008C3.68335 6.41631 5.44658 4.65308 7.61035 3.579ZM2.60928 18.3594L3.96563 17.7976C4.88613 19.6054 6.36431 21.0836 8.17217 22.0041L7.61035 23.3605C5.44658 22.2864 3.68335 20.5231 2.60928 18.3594ZM8.9627 23.9235L9.52495 22.566C10.4619 22.8732 11.4617 23.04 12.5 23.04C13.5383 23.04 14.5381 22.8732 15.475 22.566L16.0373 23.9235C14.9264 24.3004 13.7366 24.5049 12.5 24.5049C11.2634 24.5049 10.0736 24.3004 8.9627 23.9235ZM17.3896 23.3605L16.8278 22.0041C18.6357 21.0836 20.1139 19.6054 21.0344 17.7976L22.3907 18.3594C21.3167 20.5231 19.5534 22.2864 17.3896 23.3605Z" fill="white"/>
                                        <path d="M12.5 6.8291C8.83833 6.8291 5.85938 9.80806 5.85938 13.4697C5.85938 17.1314 8.83833 20.1104 12.5 20.1104C16.1617 20.1104 19.1406 17.1314 19.1406 13.4697C19.1406 9.80806 16.1617 6.8291 12.5 6.8291ZM12.5 18.6455C9.64604 18.6455 7.32422 16.3237 7.32422 13.4697C7.32422 10.6158 9.64604 8.29395 12.5 8.29395C15.354 8.29395 17.6758 10.6158 17.6758 13.4697C17.6758 16.3237 15.354 18.6455 12.5 18.6455Z" fill="white"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_2401_40801">
                                        <rect width="25" height="25" fill="white" transform="translate(0 0.969727)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>

                                <span class="flex-1 ml-3 whitespace-nowrap text-white text-base font-bold">Casino</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-[#FFFFFF80] ">
                                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2402_40896)">
                                    <path d="M19.9669 3.82686L3.80005 19.9663L4.97754 21.1458L21.1444 5.00634L19.9669 3.82686Z" fill="white"/>
                                    <path d="M4.97754 3.82735L3.80005 5.00684L19.9669 21.1463L21.1444 19.9668L4.97754 3.82735Z" fill="white"/>
                                    <path d="M15.0775 15.272C12.7814 17.5679 11.682 20.7342 12.0614 23.9587L13.7164 23.764C13.397 21.0495 14.3228 18.3837 16.2558 16.4503C18.26 14.4462 21.1178 13.5162 23.8955 13.9617L24.1597 12.3162C20.8545 11.7856 17.4586 12.8909 15.0775 15.272Z" fill="white"/>
                                    <path d="M12.0807 1.02344L10.4185 1.14346C10.6029 3.70098 9.6585 6.21816 7.82295 8.05376C6.01797 9.88291 3.57158 10.8013 0.9396 10.6404L0.837646 12.3041C1.07153 12.3185 1.30347 12.3254 1.53457 12.3254C4.38931 12.3254 7.02207 11.2388 9.00542 9.22822C11.1793 7.05425 12.3002 4.06372 12.0807 1.02344Z" fill="white"/>
                                    <path d="M12.5 0C5.60752 0 0 5.60752 0 12.5C0 19.3925 5.60752 25 12.5 25C19.3925 25 25 19.3925 25 12.5C25 5.60752 19.3925 0 12.5 0ZM12.5 23.3333C6.52637 23.3333 1.66665 18.4736 1.66665 12.5C1.66665 6.52637 6.52637 1.66665 12.5 1.66665C18.4736 1.66665 23.3333 6.52637 23.3333 12.5C23.3333 18.4736 18.4736 23.3333 12.5 23.3333Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_2402_40896">
                                    <rect width="25" height="25" fill="white"/>
                                    </clipPath>
                                    </defs>
                                 </svg>


                                <span class="flex-1 ml-3 whitespace-nowrap text-white text-base font-bold">Sports </span>
                                </NuxtLink>
                            </li>
                             <li>
                                <NuxtLink to="/" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-[#FFFFFF80] ">
                                 <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M25 11.6238C25 9.13657 23.1637 7.07104 20.7778 6.71538V3.404C20.7778 2.06172 19.6876 0.969727 18.3476 0.969727C17.0075 0.969727 15.9173 2.06172 15.9173 3.404V3.74258L9.16445 6.38765H5.43936C2.44009 6.3876 0 8.83169 0 11.8359C0 14.6503 2.1416 16.9731 4.87822 17.2553L7.20576 25.4371C7.29541 25.7523 7.58296 25.9697 7.91016 25.9697H11.6211C11.8487 25.9697 12.0634 25.8637 12.202 25.6829C12.3407 25.502 12.3875 25.2668 12.3287 25.0466L10.384 17.7619L15.9173 19.9292V20.2678C15.9173 21.6101 17.0075 22.7021 18.3475 22.7021C19.6875 22.7021 20.7778 21.6101 20.7778 20.2678V16.5323C23.1637 16.1766 25 14.111 25 11.6238ZM6.26724 7.85488H8.57012V15.8169H6.26724V7.85488ZM1.46484 11.8359C1.46484 9.85796 2.91265 8.21294 4.80239 7.90664V15.7651C2.91265 15.4588 1.46484 13.8139 1.46484 11.8359ZM8.46304 24.5025L6.40962 17.2842H8.74018L10.6671 24.5025H8.46304ZM10.035 16.0497V7.62212L15.9173 5.31807V18.3539L10.035 16.0497ZM19.313 20.2678C19.313 20.801 18.8799 21.2349 18.3476 21.2349C17.8152 21.2349 17.3822 20.8011 17.3822 20.2678V3.404C17.3822 2.8708 17.8152 2.43701 18.3476 2.43701C18.8799 2.43701 19.313 2.8708 19.313 3.404V20.2678ZM20.7778 15.0418V8.20576C22.3517 8.5437 23.5352 9.9479 23.5352 11.6238C23.5352 13.2998 22.3517 14.7039 20.7778 15.0418Z" fill="white"/>
                                </svg>
                                <span class="flex-1 ml-3 whitespace-nowrap text-white text-base font-bold">Promotions </span>
                                </NuxtLink>
                            </li>
                             <li>
                                <NuxtLink to="/" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-[#FFFFFF80] ">
                                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M24.2676 2.77408H21.0594C21.0711 2.41874 21.0775 2.0613 21.0775 1.70215C21.0775 1.2976 20.7495 0.969727 20.3451 0.969727H4.65488C4.25053 0.969727 3.92246 1.2976 3.92246 1.70215C3.92246 2.0613 3.92895 2.41874 3.94058 2.77408H0.732422C0.327873 2.77408 0 3.10195 0 3.5065C0 6.78828 0.857735 9.88448 2.41508 12.225C3.95451 14.5388 6.0051 15.8659 8.22029 15.9951C8.7225 16.5415 9.25331 16.9871 9.80625 17.327V20.5822H8.57754C7.09209 20.5822 5.88379 21.7907 5.88379 23.276V24.5047H5.83172C5.42717 24.5047 5.0993 24.8328 5.0993 25.2371C5.0993 25.6417 5.42717 25.9695 5.83172 25.9695H19.1683C19.5728 25.9695 19.9007 25.6417 19.9007 25.2371C19.9007 24.8328 19.5728 24.5047 19.1683 24.5047H19.1162V23.276C19.1162 21.7907 17.9079 20.5822 16.4225 20.5822H15.1937V17.327C15.7467 16.9873 16.2777 16.5415 16.7799 15.9951C18.9949 15.8659 21.0455 14.5388 22.5851 12.225C24.1425 9.88448 25 6.78828 25 3.5065C25 3.10195 24.6721 2.77408 24.2676 2.77408ZM3.63464 11.4136C2.35004 9.48318 1.59531 6.95823 1.48029 4.23892H4.02241C4.28658 7.58174 5.07126 10.6716 6.29768 13.1243C6.493 13.5149 6.69727 13.884 6.90918 14.2315C5.69096 13.7715 4.56352 12.8098 3.63464 11.4136ZM17.6514 23.276V24.5049H7.34863V23.276C7.34863 22.5985 7.89986 22.0471 8.57754 22.0471H16.4225C17.1001 22.0471 17.6514 22.5985 17.6514 23.276ZM13.7289 20.5822H11.2711V17.9634C11.6737 18.0695 12.084 18.1246 12.5 18.1246C12.916 18.1246 13.3263 18.0695 13.7289 17.9634V20.5822ZM14.1825 16.2209C14.1495 16.2344 14.1178 16.2508 14.0875 16.269C13.5698 16.5264 13.0379 16.6598 12.5 16.6598C11.9623 16.6598 11.4305 16.5264 10.9131 16.2693C10.8824 16.2508 10.8505 16.2344 10.8171 16.2205C10.2428 15.9169 9.68723 15.4583 9.16176 14.8558C9.1341 14.8163 9.10301 14.7799 9.06849 14.7467C8.54683 14.1274 8.05607 13.3656 7.60784 12.4691C6.26183 9.77729 5.48439 6.23782 5.39589 2.43457H19.6041C19.5154 6.23782 18.738 9.77748 17.3922 12.4691C16.9439 13.3656 16.4532 14.1274 15.9317 14.7467C15.897 14.7799 15.8655 14.8165 15.8381 14.856C15.3126 15.4587 14.7568 15.917 14.1825 16.2209ZM21.3654 11.4136C20.4365 12.8098 19.309 13.7715 18.0908 14.2315C18.3027 13.884 18.507 13.5149 18.7023 13.1243C19.9287 10.6716 20.7132 7.58174 20.9776 4.23892H23.5197C23.4047 6.95823 22.65 9.48318 21.3654 11.4136Z" fill="white"/>
                                </svg>
                                <span class="flex-1 ml-3 whitespace-nowrap text-white text-base font-bold">Tournaments </span>
                                </NuxtLink>
                            </li>
                             <li>
                                <NuxtLink to="/" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-[#FFFFFF80] ">
                                <span></span>
                                <span class="flex-1 ml-9 whitespace-nowrap text-white text-base font-bold">VIP Program </span>
                                </NuxtLink>
                            </li>
                             
                        </ul>
                        <div class=" px-2">
                            <ul class="space-y-2 font-medium border-y py-4 border-[#FFFFFF80]">
                            <li class=" space-y-4">
                                <NuxtLink to="/" class="flex items-center  text-gray-900 rounded-lg  hover:bg-[#FFFFFF80] "> 
                                  <span class="flex-1 ml-3 whitespace-nowrap text-white text-base font-normal">Terms & Conditions</span>
                                </NuxtLink>
                                <NuxtLink to="/" class="flex items-center  text-gray-900 rounded-lg  hover:bg-[#FFFFFF80] "> 
                                  <span class="flex-1 ml-3 whitespace-nowrap text-white text-base font-normal">Privacy Policy</span>
                                </NuxtLink>
                                <NuxtLink to="/" class="flex items-center  text-gray-900 rounded-lg  hover:bg-[#FFFFFF80] "> 
                                  <span class="flex-1 ml-3 whitespace-nowrap text-white text-base font-normal">Responsible Gaming</span>
                                </NuxtLink>
                                <NuxtLink to="/" class="flex items-center  text-gray-900 rounded-lg  hover:bg-[#FFFFFF80] "> 
                                  <span class="flex-1 ml-3 whitespace-nowrap text-white text-base font-normal">Fair play</span>
                                </NuxtLink>
                                <NuxtLink to="/" class="flex items-center  text-gray-900 rounded-lg  hover:bg-[#FFFFFF80] "> 
                                  <span class="flex-1 ml-3 whitespace-nowrap text-white text-base font-normal">FAQs</span>
                                </NuxtLink>
                                 <NuxtLink to="/" class="flex items-center  text-gray-900 rounded-lg  hover:bg-[#FFFFFF80] "> 
                                  <span class="flex-1 ml-3 whitespace-nowrap text-white text-base font-normal">About Us</span>
                                </NuxtLink>
                            </li>
                             
                        </ul>
                        </div>
                        <div class=" px-2">
                            <div class=" w-full border-b py-4 border-[#FFFFFF80] space-y-4">
                                <button class=" w-full rounded-xl bg-[#17313A] px-2 py-2 flex items-center space-x-2">
                                    <img src="/images/Discord.svg" alt="">
                                    <span class=" text-white text-sm font-normal">Discord</span>
                                </button>
                                  <LanguageSwitch2 />
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
</template>


<script setup>
 import Burger from "@/components/UI/Icons/Burger.vue"
 import LanguageSwitch from "@/components/UI/LanguageSwitch.vue"
 import  LanguageSwitch2 from "@/components/UI/LanguageSwitch2.vue"

 import Register from "@/components/UI/Register.vue"

 const show = ref(false)
    const open = () => {
        show.value = !show.value
    }
 const RegisterRef = ref(null)

 const openModal = () => {
    show.value = false
    RegisterRef.value.open();
 }
</script>

