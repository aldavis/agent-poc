<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-stepper value="2">
          <v-stepper-header>
            <v-stepper-step step="7" complete>Reivew Documents</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="8">Customer Signatures</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="9">Agent Signature</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="10">Submit</v-stepper-step>
          </v-stepper-header>
        </v-stepper>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-btn color="green" :to="{name: 'Application'}">Back To Application</v-btn>
      </v-flex>
      <v-flex>
        <v-btn color="green" :to="{name: 'Signatures'}">Submit Application</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-expansion-panel focusable class="appSection">
          <v-expansion-panel-content>
            <div slot="header">Document Review</div>
            <div style="height:600px;background-color:grey;"></div>
            <v-layout justify-center>
              <v-btn color="green">Verify Documents</v-btn>
            </v-layout>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-expansion-panel focusable class="appSection">
          <v-expansion-panel-content>
            <div slot="header">Customer Signatures</div>
            <v-layout wrap align-center justify-center>
              <v-flex cols="8">
                <v-text-field label="Email" required></v-text-field>
              </v-flex>
              <v-flex cols="4">
                <v-text-field label="Other Fields"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout justify-center>
              <v-btn color="green">Send For Signatures</v-btn>
            </v-layout>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>
