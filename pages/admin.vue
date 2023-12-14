<template>
  <div>
    <h1>Liste des utilisateurs</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
          <th>Numéro de téléphone</th>
          <th>Niveau d'étude</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.nom }}</td>
          <td>{{ user.prenom }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.numero_telephone }}</td>
          <td>{{ user.niveau_etudes }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const users = ref([]);

async function fetchData() {
  try {
    const response = await fetch('http://localhost:5000/users');
    if (response.ok) {
      users.value = await response.json();
    } else {
      console.error('Erreur lors de la récupération des utilisateurs :', response.statusText);
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
  }
}

fetchData();
</script>
