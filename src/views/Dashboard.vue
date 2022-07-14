<template>
  <v-container fluid class="px-16">
    <notification />
    <v-row>
      <v-app-bar dense color="white" elevation="0">
        <HambMenu ref="hamb" />
        <span v-if="!drawer" class="text_first mx-2 welcome"
          >Welcome, Jane Doe</span
        >
        <span v-else class="text_first mx-2 welcome-small"
          >Welcome, Jane Doe</span
        >
        <v-spacer></v-spacer>
        <v-alert outlined class="pa-0 ma-0" color="first" style="width: 60%">
          <!-- <v-autocomplete dense solo hide-details></v-autocomplete> -->
          <v-text-field dense solo hide-details flat> </v-text-field>
        </v-alert>
        <btn-notif />
      </v-app-bar>
    </v-row>
    <v-row>
      <v-col v-for="stat in stats" :key="stat" cols="6">
        <v-card elevation="0">
          <v-alert outlined color="first" max-height="160" class="px-8">
            <v-card-title class="pa-0"> {{ stat.key }}</v-card-title>
            <v-card-text class="pa-0 d-flex align-center justify-space-between">
              <div class="card-value">
                {{ stat.value }}
              </div>
              <v-card
                color="green_diff"
                class="difference d-flex align-center justify-center mr-8"
                width="80"
                height="30"
                flat
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
          <v-alert outlined color="first" width="1400p" height="280">
            <v-container fluid>
              <v-row>
                <v-col cols="3">
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
                  <v-card-title class="pa-0 mt-3">
                    {{ statsPoin.key }}
                  </v-card-title>
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
                </v-col>
                <v-col cols="9">
                  <v-sparkline
                    :value="reedem"
                    :gradient="gradient"
                    :smooth="radius || false"
                    :padding="padding"
                    :line-width="width"
                    :stroke-linecap="lineCap"
                    :gradient-direction="gradientDirection"
                    :fill="fill"
                    :type="type"
                    :auto-line-width="autoLineWidth"
                    auto-draw
                    :labels="month"
                  >
                    <template :label="month">
                      {{ month }}
                    </template></v-sparkline
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-alert>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";
import HambMenu from "../components/HambMenu";
import BtnNotif from "../components/BtnNotif";
import Notification from "@/components/Notification.vue";
const gradients = [
  ["#222"],
  ["#005389"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];

export default {
  name: "Dashboard",

  components: {
    HambMenu,
    Notification,
    BtnNotif,
  },

  data: () => ({
    // stats: [
    //   { key: "Total User", value: "1000", difference: "+500" },
    //   { key: "Voucher Avaible", value: "1000", difference: "+500" },
    // ],
    statsPoin: {
      key: "Point Reedem",
      value: "2000",
    },

    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    gradient: gradients[1],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    grap_stats: [
      { month: "JAN", reedem: 2000 },
      { month: "FEB", reedem: 3000 },
      { month: "MAR", reedem: 7000 },
      { month: "APR", reedem: 2500 },
      { month: "MEI", reedem: 4000 },
      { month: "JUN", reedem: 5000 },
    ],
    month: ["JAN", "FEB", "MAR", "APR", "MEI", "JUN"],
    reedem: [2000, 3000, 7000, 2500, 4000, 5000],
    gradientDirection: "top",
    gradients,
    fill: false,
    type: "trend",
    autoLineWidth: false,
  }),
  methods: {
    fetchVoucher(query) {
      this.$store.dispatch("voucher/fetchVoucher", {
        query,
      });
    },
    fetchUser(query) {
      this.$store.dispatch("user/fetchUser", {
        query,
      });
    },
    fetchStatsReed(query) {
      this.$store.dispatch("voucher/fetchStatsReed", {
        query,
      });
    },
    splitGraph(item, index) {
      // this.month += index;
      // this.reedem += item;
      console.log("index : ", index);
      console.log("item : ", item);
    },
    // graphReed() {
    //   console.log("AAA");
    //   console.log(this.statsReed);
    //   // this.statsReed.forEach((element) => {
    //   //   console.log("element: ", element);
    //   //   // console.log("index: ", index);
    //   // });
    // },
  },
  computed: {
    drawer() {
      return this.$store.state.drawer;
    },
    vou_count() {
      return this.$store.state.voucher.vouchers.count;
    },
    user_count() {
      return this.$store.state.user.users.count;
    },
    stats() {
      return [
        { key: "Total User", value: this.user_count, difference: "+500" },
        { key: "Voucher Avaible", value: this.vou_count, difference: "+500" },
      ];
    },
    statsReed() {
      return this.$store.state.voucher.statsReed.data.april;
    },
  },
  mounted() {
    this.fetchVoucher("getall");
    this.fetchUser("getall");
    this.fetchStatsReed();
    console.log(console.log("dashstat", this.statsReed));
    // this.graphReed();
  },
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
.welcome-small {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: #005389;
}

.card-value {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 80px;
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
