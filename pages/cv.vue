<script setup>

// refs
const router = useRouter()

onMounted(() => {
  router.push('contact')
})

</script>

<template>
  <div>
    <!-- <embed src="/files/AlexanderCV.pdf" width="100%" height="100vh" /> -->
    <object width="100%" height="70vh" type="application/pdf" data="/files/AlexanderCV.pdf" id="pdf_content" style="pointer-events: none;">
      <p>Insert your error message here, if the PDF cannot be displayed.</p>
    </object>
  </div>
</template>

<style scoped>

</style>