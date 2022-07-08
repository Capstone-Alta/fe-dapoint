<template>
  <v-app>
    <!-- <v-btn @click="drawer = !drawer" tile icon large class="ml-1 mr-4">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABmJLR0QA/wD/AP+gvaeTAAACtUlEQVRYhe2ZQWsTQRSAv9ndbjFJE1OltbVV1NL2oBdFBZF60pt46tGLFBEv/gX/gsceFBXxLB4E24OH6sGKCCqIKB4qpqa2DU02kW5293lI4snZJKWbTcDvuDMw38y+fW9mR1FHRFLATeAKcBhIEC8ukAMWgTtKqRyAAhCRaeAZcCQ2vXCKwKxSakHVV/Y93SvbwAFOGdTCoNtlAVLAbSUir4Bzcdu0iGMA43FbtEHKAKy4LdrBiFugXUJX1xdh/ucai4UtHN+PVCRlmlzMZrgxMhy6iqHCc1++cT//a5fV9DzZ2ORtqczdyaPaPtrJrGxvd1S2wb38Gt+3XW27VjjnViMRaoUf7g6Ejyf2kLU6n0AGLYsTCf02RiucMk0eTB0jY5mRiP2LjGXycGqCpKn/7JSI5IARXYf1qsdyyaEcRJslkobJ2YEU+/rC32pT4W6j5wpHzwm3lAYCwBOJVkSpllYvVLjs+7xxyuTdKgHRChsohu0+TqeSJE19ZtJOSoClosOq60YuCxAgrLouS8VS6Gha4S3fp+B1vtoVPI8tz9O268Mm4pgNQymlbdMKZywrltKcNS3SO4lhBcxk0oz02RjoZ7xbGChGbZuZvenQ0VqqdD2T1hoYgB0SV52k5ypdzwk3DYn1qsfrkkMl4u1lor693N9kexna+nSjwNXPXylGfGJukDZNHk1PcHkwq+2jzRKO73No+R2FkKoTBYOWxcqZk9pThzaGP1Z+d1wWYNPz+FCpaNu1wgdtOxKhVhgLGVsrPN5vc214KBKhMOYODDHWrxcOrXQBML+aZ6EDv6oGTJNL2QzXm/yq+n8IjRqD2pvvGQxgLW6JNqga1O7BeoUXSkRGgU9AOm6bJgTABaN+wzhL7R6sWwmAW0qpl3+fiMikiDwWEUe6B1dEnovI+YbnH7E/dKswwngnAAAAAElFTkSuQmCC"
      />
    </v-btn> -->
    <!-- {{ drawer }} -->

    <v-navigation-drawer
      color="second"
      dark
      app
      height="925"
      width="
311.87"
      permanent
      v-if="drawer"
    >
      <v-img
        aspect-ratio="1"
        width="
154.31"
        src="https://picsum.photos/id/11/500/300"
        class="avatar"
      ></v-img>
      <div class="retangle-white">
        <div fluid class="d-flex justify-end">
          <v-btn @click="closeDrawer()" tile icon large class="ml-1 mr-4">
            <img src="icon/arrow.png" width="21.84" />
          </v-btn>
        </div>
        <div class="d-flex align-center justify-space-around">
          <img src="/icon/logo.png" width="59.72" />
          <!-- <img src="/icon/text_logo.png" width="182.48" /> -->
          <span class="text-logo">DaPoint Admin</span>
        </div>
      </div>
      <div class="nalo">
        <div class="name">Jane Doe</div>
        <div class="role">Proffesional Admin</div>
      </div>
      <v-list class="sidebar-menu">
        <v-list-item v-for="item in items" :key="item.title" link>
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
            <v-list-item-title class="sidebar-text">
              <router-link
                class="router-link"
                :to="item.link"
                style="color: white"
              >
                {{ item.title }}
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
      { title: "Dashboard", icon: "dashboard", link: "/" },
      { title: "Data User", icon: "data_user", link: "/datauser" },
      { title: "Voucher Stock", icon: "voucher", link: "/voucher" },
    ],
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
  position: absolute;
  left: 25%;
  top: 19.09%;
}
.sidebar-menu {
  margin-top: 20px;
}
.sidebar-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20.7361px;
  line-height: 25px;
}
.text-logo {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 24.8833px;
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
  margin-top: 100px;
}

.router-link {
  text-decoration: none;
}
</style>
