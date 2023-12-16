<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Ecole de multimédia et digital - MyDigitalSchool',
  lang: 'fr',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
useSeoMeta({
  title: 'Ecole de multimédia et digital - MyDigitalSchool',
  ogTitle: 'Ecole de multimédia et digital - MyDigitalSchool',
  ogImage: '@/img/my-digital-school-logo.png',
  twitterCard: 'summary_large_image'
})

</script>

<style>

</style>