<template>
  <div class="text-center">
    <v-flex>собачка</v-flex>
    <v-btn @click="increment">Кнопочка</v-btn>
    <pre>{{ doneTodos }}</pre>
    <testslot>
      <template v-slot:fam="{ person }">
        {{ person.fam }}
      </template>
    </testslot>
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
import testslot from '@/components/testslot.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Vacancy',
  components: {
    testslot,
  },
  data() {
    return {
      showCalendar: false,
      person: {
        name: 'пиу',
      },
    };
  },
  computed: mapGetters([
    'doneTodos',
  ]),
  methods: {
    increment() {
      this.$store.commit('increment');
      console.log(this.$store.state.count);
    },
  },
};
</script>

<style scoped>

</style>
