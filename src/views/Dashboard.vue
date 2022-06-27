<template>
  <v-container fluid class="px-16">
    <v-row>
      <v-app-bar dense color="white" elevation="0">
        <HambMenu ref="hamb" />
        <span class="text_first mx-2 welcome">Welcome, Jane Doe</span>
        <v-spacer></v-spacer>
        <v-alert outlined class="pa-0 ma-0" color="first" style="width: 60%">
          <v-autocomplete dense solo hide-details></v-autocomplete>
        </v-alert>
        <v-btn tile icon large class="ml-1 mr-4">
          <img src="/icon/notification.png" width="30" />
        </v-btn>
      </v-app-bar>
    </v-row>
    <v-row>
      <v-col v-for="stat in stats" :key="stat">
        <v-card elevation="0">
          <v-alert outlined color="first" height="178.64" class="px-8">
            <v-card-title class="pa-0"> {{ stat.key }}</v-card-title>
            <v-card-text class="pa-0 d-flex align-center justify-space-between">
              <div class="card-value">
                {{ stat.value }}
              </div>
              <v-card
                color="green_diff"
                class="difference d-flex align-center justify-center mr-8"
                width="106.25"
                height="35.22"
              >
                <span style="color: #05cd99">
                  {{ stat.difference }}
                </span>
              </v-card>
            </v-card-text>
          </v-alert>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-alert outlined color="first" width="1400p" height="340.57">
            <v-card
              color="gray"
              width="89"
              height="37"
              class="py-auto d-flex align-center justify-center"
              elevation="0"
            >
              <img
                src="/icon/home/calendar_today.png"
                width="15"
                height="16.5"
              />
              <span class="year-text ml-2">2022</span>
            </v-card>
            <v-card-title class="pa-0 mt-3"> {{ statsPoin.key }} </v-card-title>

            <v-card-text class="pa-0">
              <div class="point-value">
                {{ statsPoin.value }}
              </div>
              <div class="year-text">
                Total Reedem
                <img src="/icon/home/arrow_up.png" class="ml-2" alt="" />
              </div>
              <div class="d-flex align-center">
                <img src="/icon/home/done.png" alt="" />
                <span style="color: #05cd99" class="ml-2">On Track</span>
              </div>
            </v-card-text>
          </v-alert>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";
import HambMenu from "../components/HambMenu";

export default {
  name: "Dashboard",

  components: {
    HambMenu,
  },

  data: () => ({
    stats: [
      { key: "Total User", value: "1000", difference: "+500" },
      { key: "Voucher Avaible", value: "1000", difference: "+500" },
    ],
    statsPoin: {
      key: "Point Reedem",
      value: "2000",
    },
  }),
};
</script>

<style>
.welcome {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: #005389;
}

.card-value {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 90px;
  line-height: 117px;
}

.year-text {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  /* display: flex;
  align-items: center;
  letter-spacing: -0.02em; */
  color: #a3aed0;
}

.point-value {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;
}

.difference {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  /* or 100% */

  text-align: center;
  letter-spacing: -0.02em;

  color: #05cd99;
}
</style>
