<template>
  <v-app>
    <sidebar-menu ref="sidebar" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SidebarMenu from "@/components/SidebarMenu";
export default {
  name: "App",
  components: {
    SidebarMenu,
  },

  data: () => ({
    // drawer: false,
  }),
};
</script>

<style scoped>
.text_first {
  color: #005389;
}
</style>
