<template>
  <v-container fluid class="px-16">
    <v-row>
      <v-app-bar dense color="white" elevation="0" class="px-0">
        <HambMenu ref="hamb" />
        <span class="text_first mx-2 welcome">Voucher</span>
        <v-spacer></v-spacer>
        <v-btn tile icon large class="ml-1 mr-4">
          <img src="/icon/notification.png" width="30" />
        </v-btn>
      </v-app-bar>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-card
        class="my-7 px-4 d-flex align-center justify-space-between"
        color="#AEE1F2"
        width="95%"
        height="57.28"
        tile
        elevation="0"
      >
        <div style="width: 49.5%">
          <v-btn block color="primary" elevation="0">Entry New Voucher</v-btn>
        </div>
        <div style="width: 49.5%">
          <v-text-field
            label="Search for voucher name, voucher id or something ..."
            solo
            dense
            flat
            color="#dcf3fb"
            background-color="#dcf3fb"
            hide-details
          ></v-text-field>
        </div>
      </v-card>
    </v-row>
    <v-row class="d-flex flex-wrap justify-space-around">
      <div
        style="width: 200px; height: 200px"
        class="ma-3"
        v-for="item in items"
        :key="item"
      >
        <router-link class="router-link" :to="item.link">
          <v-card
            color="second"
            class="d-flex flex-column justify-center align-center"
            height="200px"
          >
            <img
              :src="'/icon/voucher/' + item.icon + '.png'"
              width="90px"
              height="90px"
              class="ma-3"
            />
            <div class="text-voucher">
              {{ item.title }}
            </div>
          </v-card>
        </router-link>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import HambMenu from "../components/HambMenu";
export default {
  name: "Voucher",
  components: {
    HambMenu,
  },
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

<style>
.text-voucher {
  font-family: "Inter";
  font-style: normal;
  font-weight: 200;
  font-size: 30px;
  line-height: 48px;
  color: #ffffff;
}
</style>
