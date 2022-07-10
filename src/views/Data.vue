<template>
  <v-container fluid class="px-16">
    <notification />
    <v-row>
      <v-app-bar dense color="white" elevation="0">
        <HambMenu ref="hamb" />
        <span class="text_first mx-2 welcome">Data</span>
        <v-spacer></v-spacer>
        <btn-notif />
      </v-app-bar>
    </v-row>
    <v-row>
      <v-col v-for="provider in providers" :key="provider">
        <router-link to="/listvoucher/data">
          <v-card elevation="0">
            <v-alert
              outlined
              color="first"
              height="178.64"
              class="px-8 d-flex align-center justify-center"
            >
              <img
                :src="'/icon/voucher/data/' + provider + '.png'"
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
import Notification from "@/components/Notification.vue";
import BtnNotif from "@/components/BtnNotif.vue";
export default {
  name: "Data",
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
