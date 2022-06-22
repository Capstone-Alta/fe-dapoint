import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        // primary: "#3C2DD3",
        // primary: "#005582",
        first: "#005389",
        second: "#008FBF",
        third: "#B8EBFC",
        white: "#FFFFFF",
        gray: "#F4F7FE",
      },
    },
  },
});
