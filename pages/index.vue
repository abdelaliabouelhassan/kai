<template>
    <div class=" w-full">
        <HeroSection />
        <SecondSection />
        <ThirdSection />
    </div> 
</template>



<script setup>
import HeroSection from '@/components/partials/sections/home/HeroSection.vue'
import SecondSection from '@/components/partials/sections/home/SecondSection.vue'
import ThirdSection from "@/components/partials/sections/home/ThirdSection.vue"

 useSeoMeta({ // change title and description values to your needs
    title: 'Kai - Home',
    description: 'Learn more about the CoinGames.',
})
</script>