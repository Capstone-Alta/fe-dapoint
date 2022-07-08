<template>
  <v-container fluid class="px-16">
    <v-row>
      <v-app-bar dense color="white" elevation="0" class="px-0">
        <HambMenu ref="hamb" />
        <span class="text_first mx-2 welcome">Pulsa</span>
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
        <!-- <v-autocomplete
          color="#DCF3FB"
          style="background-color: #dcf3fb; height: 70%"
          hide-details
        ></v-autocomplete> -->
        <v-text-field
          label="Solo"
          solo
          dense
          elevation="0"
          color="#dcf3fb"
          background-color="#dcf3fb"
          hide-details
        ></v-text-field>
        <v-btn
          tile
          icon
          large
          class="ml-1"
          style="background-color: #dcf3fb"
          height="70%"
        >
          <img src="/icon/voucher/filter.png" width="30" />
        </v-btn>
      </v-card>
    </v-row>
    <v-row class="d-flex justify-space-around">
      <v-card
        elevation="0"
        v-for="voucher in vouchers"
        :key="voucher"
        width="40%"
      >
        <v-alert
          outlined
          color="first"
          height="178.64"
          class="px-8 d-flex align-center justify-center"
        >
          <span class="text_first mx-2 welcome"> {{ voucher.value }} </span>
          <span> {{ voucher.poin }} </span>
          <v-btn color="primary">Add Stock</v-btn>
        </v-alert>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import HambMenu from "../components/HambMenu";
export default {
  name: "ListPulsa",
  components: {
    HambMenu,
  },
  data: () => ({
    vouchers: [
      { value: "1000", poin: "500" },
      { value: "2000", poin: "500" },
      { value: "3000", poin: "500" },
      { value: "4000", poin: "500" },
      { value: "5000", poin: "500" },
      { value: "6000", poin: "500" },
      { value: "7000", poin: "500" },
      { value: "8000", poin: "500" },
      { value: "9000", poin: "500" },
    ],
  }),
};
</script>

<style></style>
