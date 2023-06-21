<template>
   <div class=" w-full space-y-10 pb-10 font-inter">
        <div class=" w-full p-5 rounded-md bg-secondary flex flex-col items-start space-y-2">
            <div class=" flex text-white text-xs font-light bg-[#081B23] overflow-hidden rounded-full ">
                <button :class="{'bg-primary': selected == 1}" class="  p-2 rounded-full hover:bg-opacity-75 duration-300" @click="selected = 1;">Recent Wins</button>
                <button :class="{'bg-primary': selected == 2}" class="p-2 rounded-full hover:bg-opacity-75 duration-300" @click="selected = 2;">Biggest Wins</button>
            </div>

            <div class=" w-full">

                <div class="relative overflow-x-auto">
                    <table class="w-full text-[0.668rem] lg:text-xs font-light text-left text-white ">
                        <thead class="text-[0.678rem] lg:text-xs font-light text-white uppercase   ">
                            <tr>
                                <th scope="col" class="px-6 py-3 hidden md:block">
                                Game
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    User
                                </th>
                                <th scope="col" class="px-6 py-3 text-center hidden md:block">
                                    Time
                                </th>
                                <th scope="col" class="px-6 py-3 text-end">
                                    Payout
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr :class="{'bg-[#152D36]': index % 2 == 0}" v-for="(item,index,key) in data" :key="key">
                                <th scope="row" class="sm:px-6 px-4 py-4   whitespace-nowrap  rounded-l-sm hidden md:block">
                                    {{ item.game }}
                                </th>
                                <td class="sm:px-6 py-4 px-4  rounded-l-sm">
                                {{item.user}}
                                </td>
                                <td class="sm:px-6 py-4 px-4  text-center hidden md:block">
                                    {{ item.time }}
                                </td>
                                <td class="sm:px-6 py-4 px-4  text-end rounded-r-sm">
                                <div class=" flex justify-end  items-center space-x-2">
                                        <span>{{ item.payout }}</span>
                                        <img src="/images/Asset.svg" alt="">
                                </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

        <div class=" w-full">
            <img src="/images/compan.svg" class=" w-full h-full object-cover md:block hidden" alt="">
            <img src="/images/companmobile.svg" class=" w-full h-full object-cover md:hidden" alt="">
        </div>
   </div>
</template>


<script setup>
 const selected = ref(1);
 const data = ref([
    {
        game:'Sweet Bonaza',
        user:'Jeremy Lane',
        time:'15:31',
        payout:'676.51'
    },
    {
        game:'Sweet Bonaza',
        user:'Spike Sinha',
        time:'15:32',
        payout:'111.51'
    },
    {
        game:'Lucky Fridays',
        user:'i222288******121212',
        time:'15:32',
        payout:'10.1'
    },
    {
        game:'Dead or Alive',
        user:'xxx12312312******2134123',
        time:'15:32',
        payout:'788787867.99'
    },
    {
        game:'Bronco Sprit',
        user:'Karl Walker',
        time:'15:34',
        payout:'676.51'
    },
    {
        game:'Prosperity Fortune',
        user:'Harry Kane',
        time:'15:35',
        payout:'676.51'
    },
    {
        game:'7 Gold Gigablox',
        user:'n’golo Kante',
        time:'15:37',
        payout:'676.51'
    },
 ])
</script>