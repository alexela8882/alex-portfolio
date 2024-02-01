<script setup>

// refs
const router = useRouter()

onMounted(() => {
  router.push('contact')
})

</script>

<template>
  <div>
    <embed src="/files/AlexanderCV.pdf" width="100%" height="100vh" />
  </div>
</template>

<style scoped>

</style>