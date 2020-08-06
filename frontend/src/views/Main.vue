<template>
  <div>
    <v-btn
      block
      v-on:click="showCalendar = !showCalendar"
      color="#296443"
      dark
    >
      Каледарь
    </v-btn>
    <v-slide-y-transition>
      <div v-show="showCalendar">
        <v-sheet height="64">
          <v-toolbar flat dark color="#358357">
            <v-btn text @click="prev">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn text @click="next">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar" >
              {{ $refs.calendar.title }}
            </v-toolbar-title>
          </v-toolbar>
        </v-sheet>
        <v-calendar
          dark
          ref="calendar"
          v-model="focus"
          color="#358357"
          :type="type"
        >
          <template v-slot:day="{ date }">
            <v-col>
              <v-text-field
                :rules="floatRules"
                filled
                clearable
                v-model="tempObj[date]"
              >
              </v-text-field>
            </v-col>
          </template>
        </v-calendar>
      </div>
    </v-slide-y-transition>
    <v-btn
      block
      v-on:click="showGraph = !showGraph"
      color="#296443"
      dark
    >
      График
    </v-btn>
    <v-slide-y-transition>
      <apexchart
        v-show="showGraph"
        height="500"
        type="bar"
        :options="options"
        :series="series"
      ></apexchart>
    </v-slide-y-transition>

    <v-row>
    <pre>{{ series }}</pre>
    <pre>{{ tempObj }}</pre>
      </v-row>
  </div>
</template>

<script>

export default {
  name: 'Main',
  data() {
    return {
      showCalendar: false,
      showGraph: false,
      focus: '',
      type: 'month',
      tempObj: {},
      floatRules: [
        (v) => /\d*\.\d*|\d*/.test(v) || 'Нужно число',
      ],
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      options: {
        chart: {
          background: '#b1cabc',
          id: 'vuechart-example',
        },
        xaxis: {
          type: 'datetime',
        },
      },
      // series: [{
      //   name: 'Температура',
      //   data: [],
      // }],
    };
  },
  mounted() {
    // this.$refs.calendar.checkChange();
  },
  computed: {
    series() {
      return [{
        name: 'Температура',
        color: '#296443',
        data: [...Object.entries(this.tempObj)
          .filter((arr) => arr[1] !== null && arr[1] !== '')
          .sort()
          .map(([x, y]) => ({ x, y }))],
      }];
    },
  },
  // watch: {
  //   tempObj: {
  //     immediate: false,
  //     deep: true,
  //     handler() {
  //       this.series[0].data = [...Object.entries(this.tempObj)
  //         .filter((arr) => arr[1] !== null)
  //         .sort()
  //         .map(([x, y]) => ({ x, y }))];
  //       // this.$set(this.series[0], 'data', Object.entries(this.tempObj)
  //       //   .filter((arr) => arr[1] !== null)
  //       //   .sort()
  //       //   .map(([x, y]) => ({ x, y })));
  //     },
  //   },
  // },
  methods: {
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
  },
};
</script>

<style scoped>

</style>
