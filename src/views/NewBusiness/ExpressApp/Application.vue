<template>
  <v-container>
    <v-layout>
      <v-flex md9>
        <v-stepper v-model="applicationStepper" vertical>
          <v-stepper-step :complete="applicationStepper > 1" step="1">
            Applicant Information
            <small>Summarize if needed</small>
          </v-stepper-step>
          <v-stepper-content step="1">
            <v-card>
              <v-layout>
                <v-flex>
                  <v-text-field label="First Name" required></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field label="Middle Name/Initial"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex>
                  <v-text-field label="Last Name" required></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field label="Previous Last Name(If applicable)"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex>
                  <v-text-field label="Prefix"></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field label="Suffix"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex>
                  <v-text-field label="Birth Date"></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field label="Birth State/Country"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex>
                  <div style="text-align:left">
                    <strong class="primary--text">Gender</strong>
                  </div>
                  <v-radio-group v-model="row" row>
                    <v-radio label="Male" value="radio-1"></v-radio>
                    <v-radio label="Female" value="radio-2"></v-radio>
                  </v-radio-group>
                </v-flex>
                <v-flex>
                  <div style="text-align:left">
                    <strong class="primary--text">Married</strong>
                  </div>
                  <v-radio-group v-model="row" row>
                    <v-radio label="Yes" value="radio-1"></v-radio>
                    <v-radio label="No" value="radio-2"></v-radio>
                  </v-radio-group>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex>
                  <div style="text-align:left">
                    <strong class="primary--text">US Citizen</strong>
                  </div>
                  <v-radio-group v-model="row" row>
                    <v-radio label="Yes" value="radio-1"></v-radio>
                    <v-radio label="No" value="radio-2"></v-radio>
                  </v-radio-group>
                </v-flex>
                <v-flex>
                  <v-text-field label="SSN"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout justify-start>
                <v-btn color="green" @click="applicationStepper = 2">Continue to Policy Information</v-btn>
                <v-btn color="red" text>Cancel</v-btn>
              </v-layout>
            </v-card>
          </v-stepper-content>
          <v-stepper-step :complete="applicationStepper > 2" step="2">Policy Information</v-stepper-step>
          <v-stepper-content step="2">
            <v-card>
              <v-layout>
                <v-flex cols="8">
                  <v-text-field label="Face Amount" required></v-text-field>
                </v-flex>
                <v-flex cols="4">
                  <v-text-field label="Other Fields"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout justify-start>
                <v-btn color="green" @click="applicationStepper = 3">Continue to Payment Information</v-btn>
                <v-btn color="red" text>Cancel</v-btn>
              </v-layout>
            </v-card>
          </v-stepper-content>

          <v-stepper-step :complete="applicationStepper > 3" step="3">Payment Information</v-stepper-step>

          <v-stepper-content step="3">
            <v-card>
              <v-layout>
                <v-flex>
                  <v-text-field label="Routing Number" required></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field label="Account Number"></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field label="Re-Enter Account Number"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout justify-start>
                <v-btn color="green" @click="applicationStepper = 4">Continue</v-btn>
                <v-btn color="red" text>Cancel</v-btn>
              </v-layout>
            </v-card>
          </v-stepper-content>

          <v-stepper-step :complete="applicationStepper > 4" step="4">Existing Insurance(s)</v-stepper-step>
          <v-stepper-content step="4">
            <v-card>
              <div>List All Existing Insurances</div>
              <v-layout row>
                <v-flex cols="8">
                  <v-text-field label="Company Name"></v-text-field>
                </v-flex>
                <v-flex cols="2">
                  <v-text-field label="$ Amount"></v-text-field>
                </v-flex>
                <v-flex cols="2">
                  <v-btn color="blue">Add Additional Insurer</v-btn>
                </v-flex>
              </v-layout>
              <v-layout justify-start>
                <v-btn color="green" @click="applicationStepper = 5">Continue</v-btn>
                <v-btn color="red" text>Cancel</v-btn>
              </v-layout>
            </v-card>
          </v-stepper-content>

          <v-stepper-step :complete="applicationStepper > 5" step="5">Medical Questionairre</v-stepper-step>
          <v-stepper-content step="5">
            <v-card>
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
              <v-layout justify-start>
                <v-btn color="green" @click="applicationStepper = 6">Continue</v-btn>
                <v-btn color="red" text>Cancel</v-btn>
              </v-layout>
            </v-card>
          </v-stepper-content>

          <v-stepper-step :complete="applicationStepper > 6" step="6">Agent Questionairre</v-stepper-step>
          <v-stepper-content step="6">
            <v-card>
              <v-layout row></v-layout>
              <v-layout justify-start>
                <v-btn color="green" @click="applicationStepper = 7">Continue</v-btn>
                <v-btn color="red" text>Cancel</v-btn>
              </v-layout>
            </v-card>
          </v-stepper-content>

          <v-stepper-step :complete="applicationStepper > 7" step="7">Review Documents</v-stepper-step>
          <v-stepper-content step="7">
            <v-card>
              <v-layout row></v-layout>
              <v-layout justify-start>
                <v-btn color="green" @click="applicationStepper = 8">Continue</v-btn>
                <v-btn color="red" text>Cancel</v-btn>
              </v-layout>
            </v-card>
          </v-stepper-content>

          <v-stepper-step :complete="applicationStepper > 8" step="8">Customer Signatures</v-stepper-step>
          <v-stepper-content step="8">
            <v-card>
              <v-layout row></v-layout>
              <v-layout justify-start>
                <v-btn color="green" @click="applicationStepper = 9">Continue</v-btn>
                <v-btn color="red" text>Cancel</v-btn>
              </v-layout>
            </v-card>
          </v-stepper-content>

          <v-stepper-step :complete="applicationStepper > 9" step="9">Agent Signatures</v-stepper-step>
          <v-stepper-content step="9">
            <v-card>
              <v-layout row></v-layout>
              <v-layout justify-start>
                <v-btn color="green" @click="applicationStepper = 10">Continue</v-btn>
                <v-btn color="red" text>Cancel</v-btn>
              </v-layout>
            </v-card>
          </v-stepper-content>

          <v-stepper-step :complete="applicationStepper > 10" step="10">Submit for Processing</v-stepper-step>
          <v-stepper-content step="10">
            <v-card>
              <v-layout row></v-layout>
              <v-layout justify-start>
                <v-btn color="green" @click="applicationStepper = 1">Submit for Processing</v-btn>
                <v-btn color="red" text>Cancel</v-btn>
              </v-layout>
            </v-card>
          </v-stepper-content>
        </v-stepper>
      </v-flex>
      <v-flex md3>
        <v-card raised>Application Summary</v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
//import Card from "@/components/Card";
export default {
  // components: { Card },
  data() {
    return {
      applicantIsOwner: true,
      applicantIsPayor: true,
      applicationStepper: 1
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
