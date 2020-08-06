<template>
  <v-app>
    <v-app-bar
      app
      color="#003d37"
      dark
    >
      <v-tabs fixed-tabs>
        <v-tab to="/">Главная</v-tab>
        <v-tab to="/aboutAuthor">Об Авторе</v-tab>
        <v-tab to="/vacancy">Васансии</v-tab>
        <v-tab to="/home">Home</v-tab>
        <v-tab to="/about">About</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <router-view></router-view>

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
