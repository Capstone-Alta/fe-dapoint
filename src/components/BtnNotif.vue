<template>
  <v-btn tile icon large class="ml-1 mr-4" @click="openSnackbar()">
    <img src="/icon/notification.png" width="30" />
  </v-btn>
</template>

<script>
export default {
  name: "BtnNotif",

  data: () => ({}),
  computed: {},
  methods: {
    openSnackbar() {
      this.$store.commit("openSnackbar");
    },
  },
};
</script>

<style></style>
