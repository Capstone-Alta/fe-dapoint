<template>
  <v-container>
    <h1>Voucher</h1>
    <router-link
      v-for="item in items"
      :key="item"
      class="router-link"
      :to="item.link"
    >
      {{ item.title }}
    </router-link>
  </v-container>
</template>

<script>
export default {
  name: "Voucher",
  data: () => ({
    items: [
      { title: "Pulsa", link: "/pulsa", icon: "pulsa" },
      { title: "Data", link: "/data", icon: "data" },
      { title: "E-Money", link: "/emoney", icon: "emoney" },
      { title: "Cash Out", link: "/cashout", icon: "cashout" },
    ],
  }),
};
</script>

<style></style>
