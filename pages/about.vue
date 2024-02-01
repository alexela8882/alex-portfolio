<script setup>

onMounted(() => {
  window.scrollTo(0, document.body.scrollHeight);
})

</script>

<template>
  <div class="dark-indigo-100">
    <code>
      <div class="font-bold text-2xl mb-5">Technical Profile</div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <div class="font-bold text-xl">Backend</div>
          <ul style="list-style: circle;" class="dark-green-100">
            <li>PHP</li>
            <li>Laravel</li>
            <li>DJango</li>
            <li>NodeJS</li>
            <li>REST Api</li>
          </ul>
        </div>
        <div>
          <div class="font-bold text-xl">Frontend</div>
          <ul style="list-style: circle;" class="dark-green-100">
            <li>JavaScript</li>
            <li>ES6</li>
            <li>jQuery</li>
            <li>Vue3</li>
            <li>Nuxt3</li>
          </ul>
        </div>
        <div>
          <div class="font-bold text-xl">UI/UX</div>
          <ul style="list-style: circle;" class="dark-green-100">
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>Bootstrap</li>
            <li>Vuetify</li>
            <li>Primevue</li>
            <li>Material Design</li>
          </ul>
        </div>
        <div>
          <div class="font-bold text-xl">Integrations</div>
          <ul style="list-style: circle;" class="dark-green-100">
            <li>Microsoft AAD</li>
            <li>DynamicNavs</li>
            <li>SAML/SAML2</li>
            <li>ERPNext</li>
          </ul>
        </div>
        <div>
          <a href="~/assets/files/AlexanderCV.pdf" class="text-sm underline dark-green-100">
            see more on my cv...
          </a>
        </div>
      </div>
    </code>
  </div>
</template>

<style scoped>

</style>