<template>
  <v-snackbar
    v-model="snackbar"
    color="first"
    multi-line
    outlined
    timeout="0"
    :right="true"
    :top="true"
    vertical="true"
    width="400"
  >
    <v-container>
      <v-row class="d-flex justify-space-between align-center mb-3">
        <span class="notif-title">Notifikasi</span>
        <v-btn color="first" class="text-capitalize" text>
          <span class="notif-read">Read</span>
        </v-btn>
      </v-row>
      <v-row>
        <v-card
          color="#DCF3FB"
          flat
          class="d-flex justify-space-between align-center my-2"
        >
          <img src="/icon/success.png" alt="" width="60" class="ma-3" />
          <div class="notif-text ma-3">
            Congratulations, voucher pulsa XL RP 10.000 successfully added
          </div>
        </v-card>
      </v-row>
      <v-row>
        <v-card
          color="#DCF3FB"
          flat
          class="d-flex justify-space-between align-center my-2"
        >
          <img src="/icon/failed.png" alt="" width="60" class="ma-3" />
          <div class="notif-text ma-3">
            Oops sorry, voucher pulsa XL RP 10.000 out of stock
          </div>
        </v-card>
      </v-row>
    </v-container>
    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text v-bind="attrs" @click="closeSnackbar()">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "Notification",

  data: () => ({
    snackbart: true,
  }),
  methods: {
    closeSnackbar() {
      this.$store.commit("closeSnackbar");
    },
  },
  computed: {
    snackbar() {
      return this.$store.state.snackbar;
    },
  },
};
</script>
