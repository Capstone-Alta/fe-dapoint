<template>
  <div>
    <v-btn
      v-if="drawer == false"
      @click="openDrawer()"
      tile
      icon
      large
      class="ml-1 mr-4"
    >
      <img src="/icon/hamburger_menu.png" width="30" />
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "HambMenu",

  data: () => ({}),
  computed: {
    drawer() {
      return this.$store.state.drawer;
    },
  },
  methods: {
    toggleDrawer() {
      this.$store.commit("toggleDrawer");
    },
    openDrawer() {
      this.$store.commit("openDrawer");
    },
  },
};
</script>

<style></style>
