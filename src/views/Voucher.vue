<template>
  <v-container fluid class="px-16">
    <notification />
    <v-row>
      <v-app-bar dense color="white" elevation="0" class="px-0">
        <HambMenu ref="hamb" />
        <span class="text_first mx-2 welcome">Voucher</span>
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
        <div style="width: 49.5%">
          <v-dialog v-model="dialog" width="60%">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                block
                color="primary"
                elevation="0"
                v-bind="attrs"
                v-on="on"
                >Entry New Voucher</v-btn
              >
            </template>
            <v-form
              @submit.prevent="
                addVoucher(nama, nominal, harga_poin, stok, jenis)
              "
            >
              <v-card
                class="d-flex flex-column justify-center align-center"
                height="400"
              >
                <v-card-text class="mx-2 d-flex flex-wrap">
                  <div class="pa-2" style="width: 50%">
                    <div class="text-detail">Nama Voucher</div>
                    <v-alert outlined color="first" class="pa-0 ma-0">
                      <v-text-field
                        class="text-detail-value"
                        v-model="nama"
                        solo
                        hide-details
                      >
                      </v-text-field>
                    </v-alert>
                  </div>
                  <div class="pa-2" style="width: 50%">
                    <div class="text-detail">Nominal</div>
                    <v-alert outlined color="first" class="pa-0 ma-0">
                      <v-text-field
                        class="text-detail-value"
                        v-model.number="nominal"
                        solo
                        hide-details
                        type="number"
                      >
                      </v-text-field>
                    </v-alert>
                  </div>
                  <div class="pa-2" style="width: 50%">
                    <div class="text-detail">Harga Point</div>
                    <v-alert outlined color="first" class="pa-0 ma-0">
                      <v-text-field
                        class="text-detail-value"
                        v-model.number="harga_poin"
                        solo
                        hide-details
                        type="number"
                      >
                      </v-text-field>
                    </v-alert>
                  </div>
                  <div class="pa-2" style="width: 50%">
                    <div class="text-detail">Stok</div>
                    <v-alert outlined color="first" class="pa-0 ma-0">
                      <v-text-field
                        class="text-detail-value"
                        v-model.number="stok"
                        solo
                        hide-details
                        type="number"
                      >
                      </v-text-field>
                    </v-alert>
                  </div>
                  <div class="pa-2" style="width: 50%">
                    <div class="text-detail">Jenis</div>
                    <v-alert outlined color="first" class="pa-0 ma-0">
                      <v-text-field
                        class="text-detail-value"
                        v-model="jenis"
                        solo
                        hide-details
                      >
                      </v-text-field>
                    </v-alert>
                  </div>
                </v-card-text>
                <v-card-actions style="width: 70%">
                  <v-btn
                    color="#005389"
                    class="text-button"
                    style="color: white"
                    @click="dialog = false"
                    type="submit"
                    large
                    block
                  >
                    Simpan
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-form>
          </v-dialog>
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
import BtnNotif from "../components/BtnNotif";
import Notification from "@/components/Notification.vue";
export default {
  name: "Voucher",
  components: {
    HambMenu,
    BtnNotif,
    Notification,
  },
  data: () => ({
    items: [
      { title: "Pulsa", link: "/pulsa", icon: "pulsa" },
      { title: "Data", link: "/data", icon: "data" },
      { title: "E-Money", link: "/emoney", icon: "emoney" },
      { title: "Cash Out", link: "/cashout", icon: "cashout" },
    ],
    dialog: false,
    nama: "",
    nominal: 0,
    harga_poin: 0,
    stok: 0,
    jenis: "",
  }),
  methods: {
    async addVoucher(vou_name, nominal, harga_poin, stock, jenis) {
      // console.log("update", vou_name);
      console.log("vou_name : ", vou_name);
      console.log("nominal : ", nominal);
      console.log("harga_point : ", harga_poin);
      console.log("stock : ", stock);
      console.log("jenis : ", jenis);
      const add_status = await this.$store.dispatch("voucher/addVoucher", {
        vou_name,
        nominal,
        harga_poin,
        stock,
        jenis,
      });
      console.log("add Statussss", add_status);
      this.nama = "";
      this.nominal = 0;
      this.harga_poin = 0;
      this.stok = 0;
      this.jenis = "";
    },
  },
  mounted() {
    // this.$store.dispatch("fetchVouchers");
  },
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

.text-button {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  color: white;
}
</style>
