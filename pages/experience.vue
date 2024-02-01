<script setup>

// refs
const router = useRouter()

onMounted(() => {
  document.getElementById('test').scrollIntoView()
})

</script>

<template>
  <div id="test" class="dark-indigo-100">
    <code>
      <div class="font-bold text-2xl mb-5">Professional Experience</div>

      <div class="flex flex-col gap-5">
        <div>
          <div class="font-bold text-sm text-xl">Addessa Corporation</div>
          <div class="font-semibold text-sm dark-indigo-300">Full Stack Web Developer</div>
          <div class="text-sm dark-green-100">Sept 2015 - Jun 2020</div>
        </div>
        <div>
          <div class="font-bold text-sm text-xl">Addessa Corporation</div>
          <div class="font-semibold text-sm dark-indigo-300">Network Specialist</div>
          <div class="text-sm dark-green-100">Sept 2015 - Jun 2020</div>
        </div>
        <div>
          <div class="font-bold text-sm text-xl">Esco Philippines Inc.</div>
          <div class="font-semibold text-sm dark-indigo-300">Full Stack Web Developer</div>
          <div class="text-sm dark-green-100">Aug 2020 - Sept 2023</div>
        </div>
        <div>
          <a @click="router.push('cv')" href="javascript: void(0);" class="text-sm underline dark-green-100">check my cv...</a>
        </div>
      </div>
    </code>
  </div>
</template>

<style scoped>

</style>