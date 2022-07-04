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
    <!-- <v-row>
      <v-dialog transition="dialog-top-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" v-bind="attrs" v-on="on">From the top</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="primary" dark>Opening from the top</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-row> -->
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
        <v-menu offset-y>
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
                <v-card class="d-flex justify-center align-center" height="507">
                  <!-- <v-toolbar color="primary" dark
                    >Opening from the top</v-toolbar
                  > -->
                  <v-card-text class="mx-2">
                    <!-- <div class="text-h2 pa-12">{{ voucher.nominal }}</div> -->
                    <div class="pa-2">
                      <div class="text-detail">Voucher ID</div>
                      <v-alert outlined color="first" class="pa-0">
                        <v-text-field
                          :value="voucher.nominal"
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
                          :value="voucher.nominal"
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
                          :value="voucher.nominal"
                          class="text-detail-value"
                          solo
                          readonly
                          hide-details
                        >
                        </v-text-field>
                      </v-alert>
                    </div>
                  </v-card-text>
                  <!-- <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false">Close</v-btn>
                  </v-card-actions> -->
                </v-card>
              </template>
            </v-dialog>
            <div class="text-nominal mb-2">
              {{ voucher.nominal }}
            </div>
            <div class="text-poin" style="color: #ff3d00">
              Poin : {{ voucher.poin }}
            </div>
            <v-dialog transition="dialog-top-transition" max-width="425">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" class="mt-6" v-bind="attrs" v-on="on"
                  >Add Stock</v-btn
                >
              </template>
              <template v-slot:default="">
                <v-card class="d-flex justify-center align-center" height="507">
                  <v-card-text class="mx-2">
                    <div class="pa-2">
                      <div class="text-detail">Amount of Voucher</div>
                      <v-alert outlined color="first" class="pa-0">
                        <v-text-field
                          :value="voucher.nominal"
                          class="text-detail-value"
                          solo
                          readonly
                          hide-details
                        >
                        </v-text-field>
                      </v-alert>
                    </div>
                    <div class="pa-2">
                      <div class="text-detail">Restock</div>
                      <v-alert outlined color="first" class="pa-0">
                        <v-text-field
                          :value="voucher.nominal"
                          class="text-detail-value"
                          solo
                          readonly
                          hide-details
                        >
                        </v-text-field>
                      </v-alert>
                    </div>
                    <div class="pa-2">
                      <div class="text-detail">Preview</div>
                      <v-alert outlined color="first" class="pa-0">
                        <v-text-field
                          :value="voucher.nominal"
                          class="text-detail-value"
                          solo
                          readonly
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
                      >Submit</v-btn
                    >
                  </v-card-text>
                </v-card>
              </template>
            </v-dialog>
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
    items: [{ title: "Sold" }, { title: "All Voucher" }],
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

.text-detail {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
  /* identical to box height, or 45px */
  color: #005389;

  letter-spacing: -0.011em;
}

.text-detail-value {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  color: #2f2e41;
}

.filter-link {
  color: #005389;
  text-decoration: none;
  text-align: center;
}
</style>
