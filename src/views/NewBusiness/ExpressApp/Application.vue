<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout row>
        <v-flex cols="12">
          <v-stepper value="2">
            <v-stepper-header>
              <v-stepper-step step="1" complete>Applicant Info</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="2">Policy Info</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="3">Payment Info</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="4">Existing Ins.</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="5">Non Med</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="6">Agent Quest.</v-stepper-step>
            </v-stepper-header>
          </v-stepper>
        </v-flex>
      </v-layout>
      <v-layout justify-end>
        <v-btn color="green" :to="{name: 'Signatures'}">Next</v-btn>
      </v-layout>
      <v-layout row>
        <v-flex cols="12">
          <v-layout row wrap>
            <v-expansion-panel focusable class="appSection">
              <v-expansion-panel-content>
                <div slot="header">Applicant Info</div>
                <card>
                  <v-layout row>
                    <v-flex cols="8">
                      <v-text-field label="First Name" required></v-text-field>
                    </v-flex>
                    <v-flex cols="4">
                      <v-text-field label="Middle Name/Initial"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex cols="6">
                      <v-text-field label="Last Name" required></v-text-field>
                    </v-flex>
                    <v-flex cols="6">
                      <v-text-field label="Previous Last Name(If applicable)"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex cols="6">
                      <v-text-field label="Prefix"></v-text-field>
                    </v-flex>
                    <v-flex cols="6">
                      <v-text-field label="Suffix"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex cols="6">
                      <v-text-field label="Birth Date"></v-text-field>
                    </v-flex>
                    <v-flex cols="6">
                      <v-text-field label="Birth State/Country"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex cols="6">
                      <div style="text-align:left">
                        <strong class="primary--text">Gender</strong>
                      </div>
                      <v-radio-group v-model="row" row>
                        <v-radio label="Male" value="radio-1"></v-radio>
                        <v-radio label="Female" value="radio-2"></v-radio>
                      </v-radio-group>
                    </v-flex>
                    <v-flex cols="6">
                      <div style="text-align:left">
                        <strong class="primary--text">Married</strong>
                      </div>
                      <v-radio-group v-model="row" row>
                        <v-radio label="Yes" value="radio-1"></v-radio>
                        <v-radio label="No" value="radio-2"></v-radio>
                      </v-radio-group>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex cols="6">
                      <div style="text-align:left">
                        <strong class="primary--text">US Citizen</strong>
                      </div>
                      <v-radio-group v-model="row" row>
                        <v-radio label="Yes" value="radio-1"></v-radio>
                        <v-radio label="No" value="radio-2"></v-radio>
                      </v-radio-group>
                    </v-flex>
                    <v-flex cols="6">
                      <v-text-field label="SSN"></v-text-field>
                    </v-flex>
                  </v-layout>
                </card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-layout>
          <v-layout row wrap>
            <v-expansion-panel focusable class="appSection">
              <v-expansion-panel-content>
                <div slot="header">Policy Info</div>
                <card>
                  <v-layout wrap align-center justify-center>
                    <v-flex cols="8">
                      <v-text-field label="Face Amount" required></v-text-field>
                    </v-flex>
                    <v-flex cols="4">
                      <v-text-field label="Other Fields"></v-text-field>
                    </v-flex>
                  </v-layout>
                </card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-layout>
          <v-layout row wrap>
            <v-expansion-panel focusable class="appSection">
              <v-expansion-panel-content>
                <div slot="header">Payment Information</div>
                <card>
                  <v-layout row>
                    <v-flex cols="4">
                      <v-text-field label="Routing Number" required></v-text-field>
                    </v-flex>
                    <v-flex cols="4">
                      <v-text-field label="Account Number"></v-text-field>
                    </v-flex>
                    <v-flex cols="4">
                      <v-text-field label="Re-Enter Account Number"></v-text-field>
                    </v-flex>
                  </v-layout>
                </card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-layout>
          <v-layout row wrap>
            <v-expansion-panel focusable class="appSection">
              <v-expansion-panel-content>
                <div slot="header">Existing Insurance</div>
                <card>
                  <div>List All Existing Insurances</div>
                  <v-layout row>
                    <v-flex cols="8">
                      <v-text-field label="Company Name"></v-text-field>
                    </v-flex>
                    <v-flex cols="4">
                      <v-text-field label="$ Amount"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-btn color="blue">Add Additional Insurer</v-btn>
                </card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-layout>
          <v-layout row wrap>
            <v-expansion-panel focusable class="appSection">
              <v-expansion-panel-content>
                <div slot="header">Non Medical</div>
                <card>
                  <v-layout row>
                    <v-flex cols="10">Question 1</v-flex>
                    <v-flex cols="2" align-right justify-right>
                      <v-radio-group v-model="row" row>
                        <v-radio label="Yes" value="radio-1"></v-radio>
                        <v-radio label="No" value="radio-2"></v-radio>
                      </v-radio-group>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex cols="10">Question 2</v-flex>
                    <v-flex cols="2" align-right justify-right>
                      <v-radio-group v-model="row" row>
                        <v-radio label="Yes" value="radio-1"></v-radio>
                        <v-radio label="No" value="radio-2"></v-radio>
                      </v-radio-group>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex cols="10">Question 3</v-flex>
                    <v-flex cols="2" align-right justify-right>
                      <v-radio-group v-model="row" row>
                        <v-radio label="Yes" value="radio-1"></v-radio>
                        <v-radio label="No" value="radio-2"></v-radio>
                      </v-radio-group>
                    </v-flex>
                  </v-layout>
                </card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-layout>
          <v-layout row wrap>
            <v-expansion-panel focusable class="appSection">
              <v-expansion-panel-content>
                <div slot="header">Agent Questionnaire</div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import Card from "@/components/Card";
export default {
  components: { Card },
  data() {
    return {
      applicantIsOwner: true,
      applicantIsPayor: true
    };
  }
};
</script>

<style>
.appSection {
  padding-bottom: 25px;
  font-size: x-large;
}
</style>
