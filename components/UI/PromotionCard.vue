<template>
     <div class=" w-full flex items-center space-x-5  ">
                 <div class="  sm:hidden">
                        <slot />
                    </div>
                  <div class=" w-full flex items-center space-x-5  bg-[#172933] rounded-2xl justify-between  py-5 px-4 sm:px-5">
                    <div class=" hidden sm:block">
                       <slot />
                    </div>
                    <div class=" flex w-full flex-col items-center space-y-2 lg:px-4 ">
                        <span class=" text-white font-bold text-xl lg:text-[2.078rem] text-center">{{ title }}</span>
                        <p class=" text-[0.508rem] lg:text-xs text-white font-light text-center" v-html="subtitle">
                        </p>
                    </div>
                </div>
    </div>
</template>


<script setup>
 const props = defineProps({
    title:'',
    subtitle:'',
 })
</script>