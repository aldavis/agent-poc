<template>
  <v-container>
    <v-layout wrap>
      <v-flex sm12 md12 lg6>
        <card
          color="#333333"
          title="Recently Submitted Applications"
          text="Applications submitted in the past 14 days"
        >
          <v-data-table
            :headers="recentSubmissions.columns"
            :items="recentSubmissions.items"
            hide-actions
          >
            <template slot="headerCell" slot-scope="{ header }">
              <span class="font-weight-light text-warning text--darken-3" v-text="header.text"/>
            </template>
            <template slot="items" slot-scope="{ index, item }">
              <td>{{ item.name }}</td>
              <td class="text-xs-right">{{ item.type }}</td>
              <td class="text-xs-right">{{ item.faceAmount }}</td>
              <td class="text-xs-right">{{ item.status }}</td>
            </template>
          </v-data-table>
        </card>
      </v-flex>
      <v-flex sm12 md12 lg6>
        <card color="#333333" title="Recently Viewed Cases" text="Cases view in the past 7 days">
          <v-data-table :headers="viewedCases.columns" :items="viewedCases.items" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
              <span class="font-weight-light text-warning text--darken-3" v-text="header.text"/>
            </template>
            <template slot="items" slot-scope="{ index, item }">
              <td>{{ item.name }}</td>
              <td class="text-xs-right">{{ item.type }}</td>
              <td class="text-xs-right">{{ item.policyNumber }}</td>
            </template>
          </v-data-table>
        </card>
      </v-flex>
      <v-flex sm12 md12 lg4>
        <chart-card
          :data="dailySalesChart.data"
          :options="dailySalesChart.options"
          color="red"
          type="Line"
        >
          <h4 class="title font-weight-light">Monthly Sales</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon color="green" small>mdi-arrow-up</v-icon>
            <span class="green--text">55%</span>&nbsp;
            increase in today's sales
          </p>

          <template slot="actions">
            <v-icon class="mr-2" small>mdi-clock-outline</v-icon>
            <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
          </template>
        </chart-card>
      </v-flex>
      <v-flex sm12 md12 lg4>
        <chart-card
          :data="yearlySalesChart.data"
          :options="yearlySalesChart.options"
          :responsive-options="yearlySalesChart.responsiveOptions"
          color="gray"
          type="Bar"
        >
          <h4 class="title font-weight-light">Yearly Sales</h4>
          <p class="category d-inline-flex font-weight-light">YTD</p>

          <template slot="actions">
            <v-icon class="mr-2" small>mdi-clock-outline</v-icon>
            <span class="caption grey--text font-weight-light">updated 10 minutes ago</span>
          </template>
        </chart-card>
      </v-flex>
      <v-flex sm12 md12 lg4>
        <chart-card
          :data="yearlySalesChart.data"
          :options="yearlySalesChart.options"
          :responsive-options="yearlySalesChart.responsiveOptions"
          color="green"
          type="Line"
        >
          <h4 class="title font-weight-light">Other types of graphs</h4>
          <p class="category d-inline-flex font-weight-light">YTD</p>

          <template slot="actions">
            <v-icon class="mr-2" small>mdi-clock-outline</v-icon>
            <span class="caption grey--text font-weight-light">updated 10 minutes ago</span>
          </template>
        </chart-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Card from "@/components/Card";
import ChartCard from "@/components/ChartCard";
export default {
  components: { Card, ChartCard },
  data() {
    return {
      dailySalesChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      yearlySalesChart: {
        data: {
          labels: [
            "Ja",
            "Fe",
            "Ma",
            "Ap",
            "Mai",
            "Ju",
            "Jul",
            "Au",
            "Se",
            "Oc",
            "No",
            "De"
          ],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      },
      recentSubmissions: {
        columns: [
          {
            sortable: true,
            text: "Name",
            value: "name"
          },
          {
            sortable: true,
            text: "Policy Type",
            value: "type",
            align: "right"
          },
          {
            sortable: true,
            text: "Face Amount",
            value: "faceAmount",
            align: "right"
          },
          {
            sortable: true,
            text: "Status",
            value: "status",
            align: "right"
          }
        ],
        items: [
          {
            name: "Steve Rogers",
            type: "Term 30",
            faceAmount: "$500,000",
            status: "In-Underwriting"
          },
          {
            name: "Bruce Wayne",
            type: "Secure 20",
            faceAmount: "$25,000",
            status: "Received"
          }
        ]
      },
      viewedCases: {
        columns: [
          {
            sortable: true,
            text: "Name",
            value: "name"
          },
          {
            sortable: true,
            text: "Policy Type",
            value: "type",
            align: "right"
          },
          {
            sortable: true,
            text: "Policy #",
            value: "policyNumber",
            align: "right"
          }
        ],
        items: [
          {
            name: "Barry Allen",
            type: "Term 30",
            policyNumber: "TR985632"
          },
          {
            name: "Harvey Dent",
            type: "Secure 20",
            policyNumber: "TR125487"
          }
        ]
      }
    };
  }
};
</script>
<style lang="scss">
</style>
