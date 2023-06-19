<template>
    <div class=" w-full flex items-center justify-between">
        <div class=" flex items-center space-x-5">
            <button>
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
    </div>
</template>


<script setup>
 import Burger from "@/components/UI/Icons/Burger.vue"
 import LanguageSwitch from "@/components/UI/LanguageSwitch.vue"
</script>