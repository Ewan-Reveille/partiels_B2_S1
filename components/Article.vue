<template>
  <div>
    <article> <!-- Right or left to define-->
        <div>
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
        <button class="more"> Voir plus ▶</button>
    </div>
    <div class="img">
        <div class="forme"></div>
      <img :src="image" :alt="description" draggable="false">
    </div>
    
    </article>
    <div>
      <hr />
    </div>
    
  </div>
  </template>
  
  <script>
export default {
  props: {
    title: String,
    content: String,
    image: String,
    description: String,
  },
  mounted() {
    console.log("Image path:", this.image);
  },
};
  </script>
  