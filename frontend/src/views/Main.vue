<template>
  <v-row>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Каледарь</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-col>
            <v-sheet height="64">
              <v-toolbar flat color="white">
                <v-btn text @click="prev">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn text @click="next">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
                <v-toolbar-title v-if="$refs.calendar">
                  {{ $refs.calendar.title }}
                </v-toolbar-title>
              </v-toolbar>
            </v-sheet>
            <v-calendar
              ref="calendar"
              v-model="focus"
              color="primary"
              :type="type"
            >
              <template v-slot:day="{ date }">
                <v-col>
                  <v-text-field filled clearable v-model="tempObj[date]">
                  </v-text-field>
                </v-col>
              </template>
            </v-calendar>
          </v-col>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>График</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-col>
            <v-btn outlined color="grey darken-2" @click="keysGet">нажми
            </v-btn>
            <apexchart height="500" type="bar" :options="options" :series="series"></apexchart>
          </v-col>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <pre>{{ series }}}</pre>
    <pre>{{ tempObj }}</pre>
  </v-row>
</template>

<script>

export default {
  name: 'Main',
  data() {
    return {
      focus: '',
      type: 'month',
      tempObj: {},
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      options: {
        chart: {
          id: 'vuechart-example',
        },
        xaxis: {
          type: 'datetime',
        },
      },
      series: [{
        name: 'Температура',
        data: [],
      }],
    };
  },
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    keysGet() {
      this.series = [{
        data: Object.entries(this.tempObj)
          .filter((arr) => arr[1] !== null)
          .map(([x, y]) => ({ x, y })),
      }];
    },
  },
};
</script>

<style scoped>

</style>
