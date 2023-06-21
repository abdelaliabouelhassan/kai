<template>
  <div class="relative font-inter" id="lang">
    <div class="cursor-pointer w-full rounded-xl bg-[#17313A] px-2 py-2 flex items-center space-x-2 justify-between" @click="openLang">
     <div class=" flex items-center space-x-2">
      <img class="w-[1.688rem] h-[1.688rem] rounded-full object-cover" v-if="!loading" :src="getLang.flag" alt="" />
      <span class=" text-white font-normal text-sm capitalize">{{getLang.name}}</span>
     </div>
      <svg :class="{'rotate-180':show}" class=" duration-300" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.77466e-08 1.32109C7.26125e-08 1.66118 0.121736 2.00769 0.377386 2.26437L4.28762 6.26723C4.68013 6.66904 5.3265 6.66883 5.71875 6.26676L9.62337 2.26437C10.1225 1.75102 10.1286 0.9104 9.62337 0.390634C9.13033 -0.122716 8.3147 -0.129133 7.81557 0.390634L4.99733 3.2718L2.18518 0.384211C1.67997 -0.129138 0.870419 -0.129132 0.371293 0.390634C0.127816 0.647309 4.31611e-08 0.987411 5.77466e-08 1.32109Z" fill="#5F696D"/>
      </svg>

    </div>
    
    <div v-if="show" class="absolute z-40 space-y-1.5 top-11 right-0 py-2 rounded-lg bg-white w-full shadow">
      <div
        @click="setLang(lang)"
        class="flex pl-5 pr-10 rtl:pr-5 py-1 items-center space-x-2 cursor-pointer duration-300 hover:bg-secondary group"
        v-for="(lang, index, key) in langs"
        :key="key"
      >
        <img :src="lang.flag" :alt="lang.name" class="w-[1.588rem] h-[1.588rem] object-cover rounded-full" />
        <span class="text-black text-base font-normal group-hover:text-white rtl:px-2">{{ lang.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  showCode:false
})
const currentLang = ref("en")
const loading = ref(false);
const show = ref(false);
const langs = ref([
  {
    code: "en",
    flag: "/images/flags/en.svg",
    name: "English",
  },
  {
    code: "en",
    flag: "/images/flags/en.svg",
    name: "English",
  },
]);

const openLang = () => {
  show.value = !show.value;
};

const setLang = (lang) => {
  currentLang.value = lang.code;
  show.value = false;

};

const getLang = computed(() => {
  return langs.value.find((lang) => lang.code === currentLang.value);
});


</script>



<style>
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>