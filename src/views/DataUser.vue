<template>
  <v-container fluid class="px-16">
    <notification />
    <v-row>
      <v-app-bar dense color="white" elevation="0" class="px-0">
        <HambMenu ref="hamb" />
        <span class="text_first mx-2 welcome">DATA USER</span>
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
          <v-dialog transition="dialog-top-transition" max-width="425">
            <template v-slot:activator="{ on, attrs }">
              <v-btn block color="primary" v-bind="attrs" v-on="on">
                Entry Amount Total Shopping
              </v-btn>
            </template>
            <template v-slot:default="">
              <v-card class="d-flex justify-center align-center" height="400">
                <v-card-text class="mx-2">
                  <div class="pa-1">
                    <div class="text-detail">Id User</div>
                    <v-alert outlined color="first" class="pa-0 ma-0">
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
                  <div class="pa-1">
                    <div class="text-detail">Amount of total Shopping</div>
                    <v-alert outlined color="first" class="pa-0 ma-0">
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
                  <v-btn block color="primary" elevation="2" large class="mt-6"
                    >Submit</v-btn
                  >
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
        </div>
        <div style="width: 49.5%">
          <v-text-field
            label="Search for name, email, id user or something ..."
            solo
            dense
            flat
            color="#dcf3fb"
            background-color="#dcf3fb"
            hide-details
          ></v-text-field>
          <!-- <v-menu offset-y left bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                tile
                icon
                large
                class="ml-1"
                style="background-color: #dcf3fb"
                height="30%"
                v-bind="attrs"
                v-on="on"
              >
                <img src="/icon/voucher/filter.png" width="30" />
              </v-btn>
            </template>
          </v-menu> -->
        </div>
      </v-card>
    </v-row>
    <v-simple-table fixed-header height="300px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">No</th>
            <th class="text-left">Date</th>
            <th class="text-left">Name</th>
            <th class="text-left">Email</th>
            <th class="text-left">ID User</th>
            <th class="text-left">Account Used</th>
            <th class="text-left">Point</th>
            <th class="text-left">History User</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>15/02/2022</td>
            <td>John Doe</td>
            <td>johndoe@gmail.com</td>
            <td>John123</td>
            <td>Google Account</td>
            <td>100</td>
            <td><a href="">See details</a></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
// import HambMenu from "../components/HambMenu";
import HambMenu from "../components/HambMenu";
import BtnNotif from "../components/BtnNotif";
import Notification from "@/components/Notification.vue";
export default {
  name: "DataUser",
  components: {
    HambMenu,
    BtnNotif,
    Notification,
  },
};
</script>
