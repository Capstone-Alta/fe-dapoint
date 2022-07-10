<template>
  <v-container fluid class="px-16">
    <notification />
    <v-row>
      <v-app-bar dense color="white" elevation="0">
        <HambMenu ref="hamb" />
        <span class="text_first mx-2 welcome">Pulsa</span>
        <v-spacer></v-spacer>
        <btn-notif />
      </v-app-bar>
    </v-row>
    <v-row>
      <v-col v-for="provider in providers" :key="provider">
        <router-link to="/listvoucher/pulsa">
          <v-card elevation="0">
            <v-alert
              outlined
              color="first"
              height="178.64"
              class="px-8 d-flex align-center justify-center"
            >
              <img
                :src="'/icon/voucher/pulsa/' + provider + '.png'"
                width="284.29"
              />
            </v-alert>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HambMenu from "../components/HambMenu";
import BtnNotif from "../components/BtnNotif";
import Notification from "@/components/Notification.vue";

export default {
  name: "Pulsa",
  components: {
    HambMenu,
    BtnNotif,
    Notification,
  },
  data: () => ({
    providers: ["telkomsel", "xl_axiata"],
  }),
};
</script>

<style></style>
