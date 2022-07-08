<template>
  <!-- <v-row>
    <v-app-bar dense color="white" elevation="0">
      <HambMenu ref="hamb" />
      <span class="text_first mx-2 welcome">E-Money</span>
      <v-spacer></v-spacer>
      <v-btn tile icon large class="ml-1 mr-4">
        <img src="/icon/notification.png" width="30" />
      </v-btn>
    </v-app-bar>
  </v-row> -->
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
        <!-- <tr v-for="item in user" :key="item.name">
          <td>{{ item.no }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.iduser }}</td>
          <td>{{ item.accountused }}</td>
          <td>{{ item.point }}</td>
          <td>{{ item.historyuser }}</td>
        </tr> -->
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
// import HambMenu from "../components/HambMenu";
export default {
  name: "DataUser",
};
</script>
