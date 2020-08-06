<template>
  <div class="text-center">
    <v-flex>собачка</v-flex>
    <v-btn
          block
          v-on:click="showCalendar = !showCalendar"
          color="green"
          dark
        >
          Каледарь
        </v-btn>
    <v-btn
          block
          v-on:click="showCalendar = !showCalendar"
          color="green"
          dark
        >
          Каледарь
        </v-btn>
    <v-slide-y-transition>
      <v-calendar v-show="showCalendar">
    </v-calendar>
    </v-slide-y-transition>
    <v-btn
          block
          v-on:click="showCalendar = !showCalendar"
          color="green"
          dark
        >
          Каледарь
        </v-btn>
    <v-btn
          block
          v-on:click="showCalendar = !showCalendar"
          color="green"
          dark
        >
          Каледарь
        </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Vacancy',
  data() {
    return {
      showCalendar: false,
    };
  },
};
</script>

<style scoped>

</style>
