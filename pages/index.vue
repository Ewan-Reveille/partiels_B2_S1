<template>
    <div>
      <Header />
      <LandingPage1 />
      <hr>
      <Article class="left" :title="article1.title" :content="article1.content" :image="`/article-image-1.png`" />
      <Article class="right" :title="article2.title" :content="article2.content" :image="`/article-image-2.png`" />
      <Article class="left" :title="article3.title" :content="article3.content" :image="`/article-image-3.png`" />
      <Form />
      <Footer />
    </div>
  </template>
  
  <script setup>    
    const article1 = {
      title: 'Stage d\'immersion à Annecy',
      content: 'Les 4 et 5 janvier, à MyDigitalSchool Annecy, un stage d\'immersion de 8 heures vous permettra de découvrir l\'école ainsi que les différents métiers du digital. Venez nombreux !',
      
    };
    
    const article2 = {
      title: 'Stage d\'immersion à Annecy',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione. Experiamur igitur, inquit, etsi habet haec Stoicorum ratio difficilius quiddam et obscurius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione.',
    };
    
    const article3 = {
      title: 'Stage d\'immersion à Annecy',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione. Experiamur igitur, inquit, etsi habet haec Stoicorum ratio difficilius quiddam et obscurius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc non est positum in nostra actione.',
    };

const description = ref('My amazing site.')
const route = useRoute()

useHead({
  meta: [
    { name: 'description', content: description },
    { name: 'ogdescription', content: description }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'http://localhost:3000' + route.path,
    },
  ],

})


  </script>