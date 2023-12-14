<template>
  <form @submit.prevent="submitForm">
    <h3>Pour t'inscrire au stage d'immersion, inscris toi tout de suite via ce formulaire !</h3>
    <label for="lastName">Nom</label>
    <input type="text" id="nom" v-model="formData.lastName" required>

    <label for="firstName">Prénom</label>
    <input type="text" id="prenom" v-model="formData.firstName" required>

    <label for="email">Email</label>
    <input type="text" id="email" v-model="formData.email" required>

    <label for="phone">Téléphone</label>
    <input type="text" id="numero_telephone" v-model="formData.phone" required>

    <label for="educationLevel">Niveau d'études</label>
    <select id="niveau_etudes" v-model="formData.educationLevel" required>
        <option value="">Veuillez sélectionner</option>
        <option value="Bac">Bac</option>
        <option value="Bac+1">Bac+1</option>
        <option value="Bac+2">Bac+2</option>
        <option value="Bac+3">Bac+3</option>
        <option value="Bac+5">Bac+5</option>
        <option value="Bac+8">Bac+8</option>
        <option value="Autre">Autre</option>
    </select>
    <div>
      <input type="checkbox" id="confidentiality" v-model="formData.confidentiality" required>
    <label for="confidentiality">Accepter les conditions de confidentialité</label>
    </div>
    
    
    <button type="submit" class="more">S'inscrire ▶ </button>
  </form>
</template>

<script>
/**
 * Return true if all from data are validate and ok
 * @param {Object} formData Form data to validate
 */
 export default {
  data() {
    return {
      formData: {
        nom: '',
        prenom: '',
        email: '',
        numero_telephone: '',
        niveau_etudes: '',
        confidentiality: false
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:5000/datas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        });

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
      this.formData = {
        nom: '',
        prenom: '',
        email: '',
        numero_telephone: '',
        niveau_etudes: '',
        confidentiality: false}
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  }
};

</script>