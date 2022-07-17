<template>
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
    </div>
    <v-list class="sidebar-menu px-2">
      <v-list-item-group>
        <router-link
          class="router-link"
          v-for="(item, index) in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item
            :class="group == index ? 'white-list' : ''"
            link
            @click="group = index"
          >
            <v-list-item-icon>
              <v-img
                :src="'/icon/sidebar/' + item.icon.origin + '.png'"
                width="25.82"
                height="19.41"
                v-if="group != index"
              ></v-img>
              <v-img
                :src="'/icon/sidebar/' + item.icon.clicked + '.png'"
                width="25.82"
                height="19.41"
                v-else
              ></v-img>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="sidebar-text"
                :style="group != index ? 'color: white' : 'color: #005389'"
              >
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
            <div class="d-flex align-center">
              <img
                src="/icon/sidebar/right_arrow.png"
                width="5.18"
                height="8.7"
                v-if="group != item"
              />
              <img
                src="/icon/sidebar/right_arrow_clicked.png"
                width="5.18"
                height="8.7"
                v-else
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
</template>

<script>
export default {
  name: "SidebarMenu",
  data: () => ({
    items: [
      {
        title: "Dashboard",
        icon: {
          origin: "dashboard",
          clicked: "dashboard_clicked",
        },
        link: "/",
      },
      {
        title: "Data User",
        icon: {
          origin: "data_user",
          clicked: "data_user_clicked",
        },
        link: "/datauser",
      },
      {
        title: "Voucher Stock",
        icon: {
          origin: "voucher",
          clicked: "voucher_clicked",
        },
        link: "/voucher",
      },
    ],
    group: 0,
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
.white-list {
  background-color: white;
  border-radius: 0%;
  /* max-width: 70%; */
}
.retangle-sidebar {
  position: absolute;
  width: 285.64px;
  height: 167.31px;
  left: 0px;
  top: 57px;
  background: #d9d9d9;
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
  background-image: linear-gradient(180deg, white 25%, #008fbf 25%);
}
</style>
