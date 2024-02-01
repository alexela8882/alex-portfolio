<script setup>
// imports
import Header from './pages/layouts/Header'
import HomeContent from './components/HomeContent'

// refs
const router = useRouter()
const route = useRoute()
const navs = ref()

// actions
const getNavs = (payload) => {
  navs.value = payload
}

</script>

<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <NuxtLoadingIndicator />

    <Header @get-navs="getNavs($event)" />
    <div class="grid md:grid-cols-3 grid-cols-1 computed-h-full md:px-20 px-5">
      <div class="md:col-span-2 flex content-center md:pr-10">
        <HomeContent />
      </div>
      <div class="my-6 md:my-0 py-5 md:py-0">
        <div class="inline-flex md:hidden mb-5">
          <ul
            v-for="(nav, nx) in navs"
            :key="nx"
            class="flex flex-wrap text-sm text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
            :class="`${route.name == nav.route && 'font-bold'}`">
            <li class="me-2">
              <a
                @click="router.push(nav.route)"
                href="javascript: void(0);"
                aria-current="page"
                class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">
                {{ nav.label }}
              </a>
            </li>
          </ul>
        </div>
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style>

.computed-h-full {
  height: calc(100vh - 84px);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>
