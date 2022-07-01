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
        <v-text-field
          label="Search for voucher name, voucher id or something ..."
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
        width="30%"
      >
        <v-alert outlined color="first" height="178.64" class="pa-0">
          <v-container fluid class="d-flex flex-column align-center py-0">
            <v-btn class="align-self-end" icon>
              <img
                width="7.69"
                height="13.37"
                src="/icon/voucher/arrow_detail.png"
              />
            </v-btn>
            <div class="text-nominal mb-2">
              {{ voucher.nominal }}
            </div>
            <div class="text-poin" style="color: #ff3d00">
              Poin : {{ voucher.poin }}
            </div>
            <div class="mt-6">
              <v-btn color="primary">Add Stock</v-btn>
            </div>
          </v-container>
        </v-alert>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import HambMenu from "../components/HambMenu";
export default {
  name: "ListVoucher",
  components: {
    HambMenu,
  },
  data: () => ({
    vouchers: [
      { nominal: "1000", poin: "500" },
      { nominal: "2000", poin: "500" },
      { nominal: "3000", poin: "500" },
      { nominal: "4000", poin: "500" },
      { nominal: "5000", poin: "500" },
      { nominal: "6000", poin: "500" },
      { nominal: "7000", poin: "500" },
      { nominal: "8000", poin: "500" },
      { nominal: "9000", poin: "500" },
    ],
  }),
};
</script>

<style>
.text-nominal {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 42px;
  text-align: center;
}

.text-poin {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
}
</style>
