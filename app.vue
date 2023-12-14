<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Stage d\'immersion - MyDigitalSchool',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
useSeoMeta({
  title: 'Stage d\'immersion - MyDigitalSchool',
  ogTitle: 'Stage d\'immersion - MyDigitalSchool',
  ogImage: '@/img/my-digital-school-logo.png',
  twitterCard: 'summary_large_image'
})

</script>

<style>

</style>