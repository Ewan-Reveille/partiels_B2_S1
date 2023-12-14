<template>
    <a :href="buttonLink">
      <img v-if="imageSrc" src="../img/conseiller.png" alt="Parler à un conseiller" />
      <span>{{ buttonText }}</span>
    </a>
  </template>
  
  <script>
  export default {
    props: {
      buttonText: {
        type: String,
        default: 'Button',
      },
      imageSrc: {
        type: String,
        default: '',
      },
      buttonLink: {
        type: String,
        default: '#',
      },
    },
  };
  </script>
  