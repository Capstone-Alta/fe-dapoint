<template>
  <v-container fluid class="px-16">
    <v-row>
      <v-app-bar dense color="white" elevation="0">
        <HambMenu ref="hamb" />
        <span class="text_first mx-2 welcome">E-Money</span>
        <v-spacer></v-spacer>
        <v-btn tile icon large class="ml-1 mr-4">
          <img src="/icon/notification.png" width="30" />
        </v-btn>
      </v-app-bar>
    </v-row>
    <v-row>
      <v-col v-for="provider in providers" :key="provider">
        <v-card elevation="0">
          <v-alert
            outlined
            color="first"
            height="178.64"
            class="px-8 d-flex align-center justify-center"
          >
            <img
              :src="'/icon/voucher/emoney/' + provider + '.png'"
              width="284.29"
            />
          </v-alert>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HambMenu from "../components/HambMenu";
export default {
  name: "EMoney",
  components: {
    HambMenu,
  },
  data: () => ({
    providers: ["shopeepay", "gopay"],
  }),
};
</script>

<style></style>
