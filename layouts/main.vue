<template>
    <div class=" w-full bg-tertiary h-full text-white overflow-hidden">
        <div class=" w-full px-4 xl:px-0 max-w-[73.188rem] mx-auto py-5">
            <Header />
            <slot />
        </div>
         <Footer />
    </div>
</template>


<script setup>
    import Header from "@/components/partials/Header.vue"
    import Footer from "@/components/partials/Footer.vue"
</script>