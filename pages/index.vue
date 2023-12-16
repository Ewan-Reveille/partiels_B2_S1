<template>
    <div>
      <Header />
      <LandingPage1 />
      <hr>
      <Article class="left" :title="article1.title" :content="article1.content" :image="`/article-image-1.png`" :alt="article1.description" />
      <Article class="right" :title="article2.title" :content="article2.content" :image="`/article-image-2.png`" :alt="article2.description"/>
      <Article class="left" :title="article3.title" :content="article3.content" :image="`/article-image-3.png`" :alt="article3.description" />
      <Form />
      <Footer />
    </div>
  </template>
  
  <script setup>    
    const article1 = {
      title: 'Stage d\'immersion à Annecy',
      content: 'Les 4 et 5 janvier, à MyDigitalSchool Annecy, un stage d\'immersion de 8 heures vous permettra de découvrir l\'école ainsi que les différents métiers du digital. Venez nombreux !',
      description:'casque à réalité virtuelle'
    };
    
    const article2 = {
      title: 'Rencontrez nos élèves',
      content: 'Venez rencontrez nos étudiants lors des salons étudiants présents dans ta région !',
      description:'réseau social'
    };
    
    const article3 = {
      title: 'Découvrez le campus de vos rêves',
      content: 'Trouvez l\'école MyDigitalSchool la plus proche de vous et rentrez dans le monde du digital',
      description:'Groupe d\'étudiants'
    };

const description = ref('MyDigitalSchool, l\'école multimédia qui développe votre logique et votre raisonnement et stimule votre créativité et votre analyse.')
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