<template>
  <v-row>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Каледарь</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-col>
            <v-sheet height="64">
              <v-toolbar flat color="white">
                <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
                  Today
                </v-btn>
                <v-btn text @click="prev">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn text @click="next">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
                <v-toolbar-title v-if="$refs.calendar">
                  {{ $refs.calendar.title }}
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-menu bottom right>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      outlined
                      color="grey darken-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <span>{{ typeToLabel[type] }}</span>
                      <v-icon right>mdi-menu-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="type = 'day'">
                      <v-list-item-title>Day</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = 'week'">
                      <v-list-item-title>Week</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = 'month'">
                      <v-list-item-title>Month</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = '4day'">
                      <v-list-item-title>4 days</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-toolbar>
            </v-sheet>
            <v-calendar
              height="5"
              width="5"
              ref="calendar"
              v-model="focus"
              color="primary"
              :type="type"
              @click:event="showEvent"
              @click:more="viewDay"
              @click:date="viewDay"
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
      temperature: [],
      h: [],
      date: [],
      type: 'month',
      selectedEvent: {},
      selectedElement: null,
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
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => {
          this.selectedOpen = true;
        }, 10);
      };
      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }
      nativeEvent.stopPropagation();
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = 'day';
    },
    addTemp(date, value) {
      this.temperature.push({ date, value });
      alert(this.temperature[0].value);
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
