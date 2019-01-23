<template>
  <!-- <v-container fluid>

    <v-layout row>
      <v-flex xs6>
        <v-card>
          <div>Policy Holder: {{policy.policyHolderName}}</div>
          <div>Annual Premium: {{policy.annualPremium}}</div>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card>
          <div>Product Type: {{policy.productType}}</div>
          <div>Line of Business: {{policy.lineOfBusiness}}</div>
          <div>Admin System: {{policy.adminSystem}}</div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>-->
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8 lg10>
        <v-flex xs12 md12 lg12>
          <card color="#333333" title="General Policy Info">
            <v-form>
              <v-container py-0>
                <v-layout row>
                  <v-flex xs6 md6>
                    <v-text-field v-model="policy.id" label="Policy #" class="purple-input"/>
                  </v-flex>
                  <v-flex xs6 md6>
                    <v-text-field
                      v-model="policy.adminSystem"
                      label="Admin System"
                      class="purple-input"
                    />
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 md6>
                    <v-text-field
                      v-model="policy.lineOfBusiness"
                      label="Line Of Business"
                      class="purple-input"
                    />
                  </v-flex>
                  <v-flex xs6 md6>
                    <v-text-field
                      v-model="policy.productType"
                      label="Product"
                      class="purple-input"
                    />
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 md6>
                    <v-text-field v-model="policy.status" label="Status" class="purple-input"/>
                  </v-flex>
                  <v-flex xs6 md6>
                    <v-text-field
                      v-model="policy.suspendCodes"
                      label="Suspend Codes"
                      class="purple-input"
                    />
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </card>
        </v-flex>
        <v-flex xs12 md12 lg12>
          <card color="#333333" title="Policy Holder Details">
            <v-form>
              <v-container py-0>
                <v-layout wrap>
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="policy.policyHolderFirstName"
                      label="First Name"
                      class="purple-input"
                    />
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="policy.policyHolderLastName"
                      label="Last Name"
                      class="purple-input"
                    />
                  </v-flex>
                  <v-flex xs12 md3>
                    <v-text-field label="Adress" class="purple-input"/>
                  </v-flex>
                  <v-flex xs12 md3>
                    <v-text-field label="City" class="purple-input"/>
                  </v-flex>
                  <v-flex xs12 md3>
                    <v-text-field label="State" class="purple-input"/>
                  </v-flex>
                  <v-flex xs12 md3>
                    <v-text-field class="purple-input" label="Postal Code" type="number"/>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field class="purple-input" label="Phone" type="number"/>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field class="purple-input" label="Email"/>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </card>
        </v-flex>
        <v-flex xs12 md12 lg12>
          <!-- would be coverage component -->
          <card color="#333333" title="Coverage">
            <v-form>
              <v-container py-0>
                <v-layout wrap>
                  <v-flex xs12 md3>
                    <v-text-field label="Coverage" v-model="policy.coverage.productType" disabled/>
                  </v-flex>
                  <v-flex xs12 md3>
                    <v-text-field label="Status" v-model="policy.coverage.status" disabled/>
                  </v-flex>
                  <v-flex xs12 md3>
                    <v-text-field label="Amount" v-model="policy.coverage.amount" disabled/>
                  </v-flex>
                  <v-flex xs12 md3>
                    <v-text-field label="Annual" v-model="policy.coverage.annual" disabled/>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field label="Layer" value="1" class="purple-input"/>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field label="Issue Date" value="01/01/2001" class="purple-input"/>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field label="Face Amount" value="$250,000" class="purple-input"/>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field label="Termination Date" value="01/01/2050" class="purple-input"/>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field label="Issue Age" class="purple-input" type="number"/>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field class="purple-input" value="Preferred" label="Risk Class"/>
                  </v-flex>
                  <v-flex xs12>
                    <v-textarea
                      class="purple-input"
                      label="Primary Insured Beneficiaries"
                      value="Primary Estate of Steve Rogers"
                    />
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </card>
        </v-flex>
      </v-flex>
      <v-flex xs12 md8 lg2>
        <div>Actions</div>
        <v-flex>
          <v-btn large color="success" class="font-weight-light">Crt</v-btn>
        </v-flex>
        <v-btn large color="success" class="font-weight-light">Decrease</v-btn>
        <div>
          <v-btn large color="success" class="font-weight-light">Cancel</v-btn>
        </div>
        <div>
          <v-btn large color="success" class="font-weight-light">Plan Change</v-btn>
        </div>
        <div>
          <v-btn color="success" class="font-weight-light">Add Waiver</v-btn>
        </div>
        <div>
          <v-btn color="success" class="font-weight-light">Add Rider</v-btn>
        </div>
        <div>
          <v-btn color="success" class="font-weight-light">Add Additional Insured</v-btn>
        </div>

        <div>
          <v-btn color="success" class="font-weight-light">Special Request</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Card from "@/components/Card";
export default {
  name: "activePolicies",
  components: { Card },
  computed: {
    policy() {
      return this.$store.state.currentPolicy;
    }
  }
};
</script>
<style lang="scss">
</style>
