<template>
    <header>
      <div class="navbar">
        <div class="burger" @click="toggleNav">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav :class="{ 'nav-visible': isNavVisible }"> <!-- Add a dynamic class based on isNavVisible -->
  
        </nav>
        <a href="https://www.mydigitalschool.com/">
          <img v-if="isDarkMode" src="@/img/defonce.png" alt="Le logo de MyDigitalSchool" draggable="false" class="dark">
          <img v-else src="@/img/my-digital-school-logo.png" alt="Le logo de MyDigitalSchool" draggable="false"/>
        </a>
        <nav>
          <Button buttonText="Parler à un conseiller" imageSrc="@/img/conseiller.png" buttonLink="https://www.mydigitalschool.com/etre-appele"/>
          <Button buttonText="JPO" buttonLink="https://www.mydigitalschool.com/inscription-aux-jpo-et-sessions-dadmissions"/>
          <Button buttonText="Candidature" buttonLink="https://www.mydigitalschool.com/dossier-de-candidature"/>
          <Button buttonText="Brochure" buttonLink="https://www.mydigitalschool.com/demande-de-documentation"/>
        </nav>
      </div>
    </header>
  </template>
  <script>
  export default {
  data() {
    return {
      isNavVisible: false,
      isDarkMode: false,
    };
  },
  mounted() {
    if (typeof window !== undefined) {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      this.isDarkMode = darkModeMediaQuery.matches;

      darkModeMediaQuery.addListener(this.toggleDarkMode);
    }
  },
  destroyed() {
    if (typeof window !== undefined) {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      darkModeMediaQuery.removeListener(this.toggleDarkMode); // Remove listener on component destruction
    }
  },
  methods: {
    toggleNav() {
      this.isNavVisible = !this.isNavVisible;
    },
    toggleDarkMode(e) {
      this.isDarkMode = e.matches; // Update dark mode status
    },
  },
};
  </script>
