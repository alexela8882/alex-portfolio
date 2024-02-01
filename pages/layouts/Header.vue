<script setup>
// imports
import DropdownMenu from '../../components/DropdownMenu'

// defines
const emit = defineEmits(['get-navs'])

// refs
const router = useRouter()
const route = useRoute()
const navs = ref([
  { label: 'About', route: 'about' },
  { label: 'Experience', route: 'experience' },
  { label: 'Contact', route: 'contact' }
])

onMounted(() => {
  emit('get-navs', navs.value)
})

</script>

<template>
  <div class="md:px-20 px-5 py-5 flex justify-between">
    <div>
      <div class="flex items-center gap-4">
        <img class="w-10 h-10 rounded-full" src="~/assets/images/2x2.jpg" alt="">
        <div class="font-medium dark:text-white">
          <div>Fullstack Web Developer</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">Since 2015</div>
        </div>
      </div>
    </div>
    <div class="flex md:inline-flex hidden">
      <div class="flex self-center gap-5">
        <div v-for="(nav, nx) in navs" :key="nx">
          <code
            @click="router.push(nav.route)"
            class="flex gap-1 text-sm cursor-pointer"
            :class="`${nav.route == route.name && 'font-extrabold'}`"
            :style="`${nav.route == route.name && 'border-bottom: 2px solid #c1cbea;'}`">
            <div class="dark-green-100">0{{ nx + 1 }}. </div>
            <div class="dark-indigo-100">{{ nav.label }}</div>
          </code>
        </div>
        <div>
          <a
            @click="router.push('cv')"
            href="javascript: void(0);"
            class="dark-green-100 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-sm px-3 py-1 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
            CV
          </a>
        </div>
      </div>
    </div>
    <div class="inline-flex md:hidden">
      <!-- <DropdownMenu :navs="navs" /> -->
    </div>
  </div>
</template>

<style scoped>

</style>