<template>
  <v-container fluid class="px-16">
    <Notification ref="notif" />
    <v-row>
      <v-app-bar dense color="white" elevation="0" class="px-0">
        <HambMenu ref="hamb" />
        <span class="text_first mx-2 welcome text-capitalize">
          {{ voucher_type }}
        </span>
        <v-spacer></v-spacer>
        <btn-notif />
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
          flat
          color="#dcf3fb"
          background-color="#dcf3fb"
          hide-details
        ></v-text-field>
        <v-menu offset-y left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              tile
              icon
              large
              class="ml-1"
              style="background-color: #dcf3fb"
              height="70%"
              v-bind="attrs"
              v-on="on"
            >
              <img src="/icon/voucher/filter.png" width="30" />
            </v-btn>
          </template>
          <v-list color="#DCF3FB" class="">
            <router-link class="filter-link" to="#">
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                color="#DCF3FB"
                class=""
              >
                <v-list-item-title style="color: #005389">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </router-link>
          </v-list>
        </v-menu>
      </v-card>
    </v-row>
    <v-row class="d-flex justify-space-around">
      <v-card
        elevation="0"
        v-for="voucher in vouchers"
        :key="voucher"
        width="30%"
      >
        <v-alert outlined color="#008FBF" height="178.64" class="pa-0">
          <v-container fluid class="d-flex flex-column align-center py-0">
            <v-dialog transition="dialog-top-transition" max-width="425">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="align-self-end" v-bind="attrs" v-on="on" icon>
                  <img
                    width="7.69"
                    height="13.37"
                    src="/icon/voucher/arrow_detail.png"
                  />
                </v-btn>
              </template>
              <template v-slot:default="">
                <v-card class="d-flex justify-center align-center" height="400">
                  <v-card-text class="mx-2">
                    <div class="pa-2">
                      <div class="text-detail">Voucher ID</div>
                      <v-alert outlined color="first" class="pa-0">
                        <v-text-field
                          :value="voucher.ID"
                          class="text-detail-value"
                          solo
                          readonly
                          hide-details
                        >
                        </v-text-field>
                      </v-alert>
                    </div>
                    <div class="pa-2">
                      <div class="text-detail">Voucher Nama</div>
                      <v-alert outlined color="first" class="pa-0">
                        <v-text-field
                          :value="voucher.name"
                          class="text-detail-value"
                          solo
                          readonly
                          hide-details
                        >
                        </v-text-field>
                      </v-alert>
                    </div>
                    <div class="pa-2">
                      <div class="text-detail">Voucher Amount</div>
                      <v-alert outlined color="first" class="pa-0">
                        <v-text-field
                          :value="voucher.stock"
                          class="text-detail-value"
                          solo
                          readonly
                          hide-details
                        >
                        </v-text-field>
                      </v-alert>
                    </div>
                  </v-card-text>
                </v-card>
              </template>
            </v-dialog>
            <div class="text-nominal mb-2">
              {{ voucher.name }}
            </div>
            <div class="text-poin" style="color: #ff3d00">
              Poin : {{ voucher.harga_point }}
            </div>
            <v-dialog
              transition="dialog-top-transition"
              max-width="425"
              v-model="dialog"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  class="mt-6"
                  v-bind="attrs"
                  v-on="on"
                  @click="setAmount(voucher.stock)"
                  >Add Stock</v-btn
                >
              </template>
              <template v-slot:default="">
                <v-form
                  @submit.prevent="
                    updateVoucher(
                      voucher.ID,
                      voucher.name,
                      temp_amount,
                      voucher.harga_point,
                      voucher.nominal
                    )
                  "
                >
                  <v-card
                    class="d-flex justify-center align-center"
                    height="400"
                  >
                    <v-card-text class="mx-2">
                      <div class="pa-1">
                        <div class="text-detail">Amount of Voucher</div>
                        <v-alert outlined color="first" class="pa-0 ma-0">
                          <v-text-field
                            :value="voucher.stock"
                            class="text-detail-value"
                            solo
                            readonly
                            hide-details
                          >
                          </v-text-field>
                        </v-alert>
                      </div>
                      <div class="pa-1">
                        <div class="text-detail">Restock</div>
                        <v-alert outlined color="first" class="pa-0 ma-0">
                          <v-text-field
                            v-model.number="amount_added"
                            @keyup="restock()"
                            class="text-detail-value"
                            solo
                            hide-details
                            type="number"
                          >
                          </v-text-field>
                        </v-alert>
                      </div>
                      <div class="pa-1">
                        <div class="text-detail">Preview</div>
                        <v-alert outlined color="first" class="pa-0 ma-0">
                          <v-text-field
                            :value="temp_amount"
                            class="text-detail-value"
                            solo
                            hide-details
                          >
                          </v-text-field>
                        </v-alert>
                      </div>
                      <v-btn
                        block
                        color="primary"
                        elevation="2"
                        large
                        class="mt-6"
                        type="submit"
                        @click="dialog = false"
                        >Submit</v-btn
                      >
                    </v-card-text>
                  </v-card>
                </v-form>
              </template>
            </v-dialog>
          </v-container>
        </v-alert>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import Notification from "@/components/Notification.vue";
import HambMenu from "../components/HambMenu";
import BtnNotif from "../components/BtnNotif";
export default {
  name: "ListVoucher",
  components: {
    HambMenu,
    Notification,
    BtnNotif,
  },
  data: () => ({
    vouchersa: [
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
    items: [{ title: "Sold" }, { title: "All Voucher" }],
    text: `Hello, I'm a snackbar`,
    amount_added: 0,
    amount: 0,
    dialog: false,
  }),
  methods: {
    openSnackbar() {
      this.$store.commit("openSnackbar");
    },
    fetchVoucher(query) {
      this.$store.dispatch("voucher/fetchVoucher", {
        query,
      });
    },
    async updateVoucher(id, vou_name, stock, harga_point, nominal) {
      console.log("update", vou_name);
      const edit_status = await this.$store.dispatch("voucher/updateVoucher", {
        id,
        vou_name,
        stock,
        harga_point,
        nominal,
      });
      console.log("lia", edit_status);
      this.fetchVoucher(`getbytype/${this.voucher_type}`);
      this.amount_added = 0;
    },
    setAmount(v_stock) {
      this.amount = v_stock;
    },
    restock() {
      this.temp_amount = this.amount + this.amount_added;
    },
  },
  computed: {
    voucher_type() {
      return this.$route.params.voucher_type;
    },
    vouchers() {
      return this.$store.state.voucher.vouchers.data;
    },
    temp_amount() {
      return this.amount + this.amount_added;
    },
  },
  mounted() {
    this.fetchVoucher(`getbytype/${this.voucher_type}`);
  },
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

.text-detail {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  /* identical to box height, or 45px */
  color: #005389;

  letter-spacing: -0.011em;
}

.text-detail-value {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  color: #2f2e41;
}

.filter-link {
  color: #005389;
  text-decoration: none;
  text-align: center;
}

.notif-title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #005389;
}

.notif-read {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #005389;
}

.notif-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2f2e41;
}
</style>
