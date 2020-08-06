<template>
    <v-card  class="d-inline-block mx-auto"
    max-width="200"
             outlined
             dark
    >
      <v-system-bar
           color="#006d5b"
           dark
          >
            <v-spacer></v-spacer>
            <v-icon>mdi-window-maximize</v-icon>
            <v-icon v-on:click="$emit('remove')">mdi-close</v-icon>
      </v-system-bar>
      <v-img
        alt="Vue logo" src="../assets/logo.png"></v-img>
      <v-card-text>
        {{num}}
      </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    num: String,
  },
};
</script>
