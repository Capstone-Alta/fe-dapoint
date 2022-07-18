<template>
  <div class="row">
    <div class="column">
      <div>
        <img id="boxsatu" src="/img/bawah.png" alt="Gambar bagian bawah" />
        <img id="boxdua" src="/img/atas.png" alt="Gambar bagian atas" />
      </div>
    </div>
    <div class="column pt">
      <div class="text-center">
        <span class="text_first mx-2 welcome-small"
          >Welcome to <br />
          DaPoint Admin</span
        >
      </div>
      <div class="form-input text-center">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="email" placeholder="Email"> </v-text-field>
        </v-form>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="password" placeholder="Password">
          </v-text-field>
        </v-form>
      </div>
      <v-btn color="success" class="button">Login </v-btn>
    </div>
  </div>
</template>

<style>
.welcome {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 47px;
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

.flex {
  display: flex;
}

.column {
  float: left;
  width: 50%;
}

#boxsatu,
#boxdua {
  position: absolute;
  height: 100px;
}

#boxsatu {
  width: 60%;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: 1;
}
#boxdua {
  width: 45%;
  height: 90%;
  left: 0px;
  top: 0px;
  z-index: 2;
}
.form-input {
  padding: 15px;
  padding-left: 150px;
  margin-right: 100px;
  display: grid;
  align-items: center;
}
.pt {
  padding-top: 250px;
}
.button {
  margin-left: 150px;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>

<script>
export default {
  name: "logins",
};
</script>
