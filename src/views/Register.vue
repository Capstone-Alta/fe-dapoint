<template>
  <div>
    <h1>Register</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="email"> </v-text-field>
    </v-form>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="password"> </v-text-field>
    </v-form>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="notlp"> </v-text-field>
    </v-form>
    <v-btn color="success" class="mr-4">Registrasi </v-btn>
  </div>
</template>

<script>
export default {
  name: "regis",
};
</script>
