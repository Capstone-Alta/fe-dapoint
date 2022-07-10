<template>
  <v-app>
    <v-navigation-drawer
      dark
      app
      height="925"
      width="280"
      class="drawer-bar"
      permanent
      v-if="drawer"
    >
      <div class="">
        <div fluid class="d-flex justify-end">
          <v-btn @click="closeDrawer()" tile icon large class="ml-1 mr-4">
            <img src="icon/arrow.png" width="21.84" />
          </v-btn>
        </div>
        <div class="d-flex align-center justify-center">
          <img src="/icon/logo.png" width="40" />
          <span class="text-logo ml-2">DaPoint Admin</span>
        </div>
      </div>
      <v-img
        aspect-ratio="1"
        width="120"
        src="https://picsum.photos/id/11/500/300"
        class="avatar"
      ></v-img>
      <div class="nalo">
        <div class="name">Jane Doe</div>
        <div class="role">Proffesional Admin</div>
        <!-- ygy {{ group }} -->
      </div>
      <v-list class="sidebar-menu">
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <router-link
            class="router-link"
            v-for="item in items"
            :key="item.title"
            :to="item.link"
          >
            <v-list-item
              link
              active-class="deep-purple--text text--accent-4"
              active
            >
              <v-list-item-icon>
                <!-- <v-icon> -->
                <v-img
                  :src="'/icon/sidebar/' + item.icon + '.png'"
                  width="25.82"
                  height="19.41"
                ></v-img>
                <!-- </v-icon> -->
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="sidebar-text" style="color: white">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
              <div class="d-flex align-center">
                <!-- <v-icon> -->
                <img
                  src="/icon/sidebar/right_arrow.png"
                  width="5.18"
                  height="8.7"
                />
              </div>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <div class="mb-5">
          <v-btn color="first" text
            ><img src="/icon/sidebar/Logout.png" width="26" height="23.5" />
            <span class="sidebar-text ml-7"> Logout </span>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main style="padding-top: 30px">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    items: [
      {
        title: "Dashboard",
        icon: "dashboard",
        icon_clicked: "dashboard_clicked",
        link: "/",
      },
      {
        title: "Data User",
        icon: "data_user",
        icon_clicked: "data_user_clicked",
        link: "/data_user",
      },
      {
        title: "Voucher Stock",
        icon: "voucher",
        icon_clicked: "voucher_clicked",
        link: "/voucher",
      },
    ],
    group: 0,
    // drawer: false,
  }),
  computed: {
    drawer() {
      return this.$store.state.drawer;
    },
  },
  methods: {
    toggleDrawer() {
      this.$store.commit("toggleDrawer");
    },
    closeDrawer() {
      this.$store.commit("closeDrawer");
    },
  },
};
</script>

<style scoped>
.retangle-sidebar {
  position: absolute;
  width: 285.64px;
  height: 167.31px;
  left: 0px;
  top: 57px;

  background: #d9d9d9;
}

.text_first {
  color: #005389;
}
.retangle-white {
  height: 182.67px;
  background-color: white;
}

.avatar {
  border-radius: 50%;
  position: relative;
  left: 30%;
  top: 0%;
}
.sidebar-menu {
  margin-top: 20px;
}
.sidebar-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
}
.text-logo {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  color: #005389;
}

.name {
  color: white;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20.7361px;
  line-height: 25px;
}
.role {
  color: white;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16.5889px;
  line-height: 20px;
}
.nalo {
  text-align: center;
  margin-top: 20px;
}

.router-link {
  text-decoration: none;
}

.drawer-bar {
  background-image: linear-gradient(180deg, white 28%, #008fbf 28%);
}
</style>
