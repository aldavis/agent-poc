<template>
  <v-layout wrap>
    <v-flex xs12 sm12 md12 lg12>
      <card
        v-for="category in categories"
        :key="category.name"
        color="grey"
        fullWidth:true
        v-bind:title="category.name"
      >
        <v-flex hover v-for="product in category.products" :key="product.name">
          <v-btn flat color="primary" @click="showProduct(category,product)">
            <h4>{{product.name}}</h4>
          </v-btn>
          <div v-if="product.visible">
            {{product.description}}
            <v-btn color="green">Start Application</v-btn>
          </div>
        </v-flex>
      </card>
      <!-- <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex v-for="category in categories" :key="category.name">
            <v-card hover class="categoryCard">
              <v-card-title>{{category.name}}</v-card-title>
              <v-flex v-for="product in category.products" :key="product.name">
                <v-btn flat small color="primary">{{product.name}}</v-btn>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>-->
    </v-flex>
  </v-layout>
</template>

<script>
import Card from "@/components/Card";
export default {
  el: "#ActiveProducts",
  name: "ActiveProducts",
  components: { Card },
  data() {
    return {
      categories: [
        {
          name: "Universal Life",
          products: [
            {
              name: "FlexLife UL",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit urna et tincidunt porta. Ut non massa quis enim cursus cursus. Aenean vitae orci ac mi semper scelerisque quis quis arcu. Donec tempor auctor tortor nec efficitur. Praesent rutrum tortor diam, a pharetra diam pretium at. Nulla tempus venenatis purus, at egestas felis elementum et. Etiam varius fermentum turpis, vel bibendum dui aliquam at. Nunc efficitur mi in nibh iaculis, sed rhoncus libero mollis. Fusce commodo dictum nunc, at feugiat sapien porta non. In bibendum eu ante sit amet varius. Sed lorem risus, commodo vitae faucibus id, condimentum commodo felis. Nam augue felis, rhoncus at turpis sed, fringilla blandit elit. Vivamus a lorem luctus elit gravida vulputate sed a nisl. Aenean ligula nulla, semper ac suscipit pellentesque, vulputate sit amet enim",
              visible: false
            },
            {
              name: "Platinum UL",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit urna et tincidunt porta. Ut non massa quis enim cursus cursus. Aenean vitae orci ac mi semper scelerisque quis quis arcu. Donec tempor auctor tortor nec efficitur. Praesent rutrum tortor diam, a pharetra diam pretium at. Nulla tempus venenatis purus, at egestas felis elementum et. Etiam varius fermentum turpis, vel bibendum dui aliquam at. Nunc efficitur mi in nibh iaculis, sed rhoncus libero mollis. Fusce commodo dictum nunc, at feugiat sapien porta non. In bibendum eu ante sit amet varius. Sed lorem risus, commodo vitae faucibus id, condimentum commodo felis. Nam augue felis, rhoncus at turpis sed, fringilla blandit elit. Vivamus a lorem luctus elit gravida vulputate sed a nisl. Aenean ligula nulla, semper ac suscipit pellentesque, vulputate sit amet enim",
              visible: false
            }
          ]
        },
        {
          name: "Term",
          products: [
            {
              name: "Secure Term ART",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit urna et tincidunt porta. Ut non massa quis enim cursus cursus. Aenean vitae orci ac mi semper scelerisque quis quis arcu. Donec tempor auctor tortor nec efficitur. Praesent rutrum tortor diam, a pharetra diam pretium at. Nulla tempus venenatis purus, at egestas felis elementum et. Etiam varius fermentum turpis, vel bibendum dui aliquam at. Nunc efficitur mi in nibh iaculis, sed rhoncus libero mollis. Fusce commodo dictum nunc, at feugiat sapien porta non. In bibendum eu ante sit amet varius. Sed lorem risus, commodo vitae faucibus id, condimentum commodo felis. Nam augue felis, rhoncus at turpis sed, fringilla blandit elit. Vivamus a lorem luctus elit gravida vulputate sed a nisl. Aenean ligula nulla, semper ac suscipit pellentesque, vulputate sit amet enim",
              visible: false
            },
            {
              name: "Secure Term 10",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit urna et tincidunt porta. Ut non massa quis enim cursus cursus. Aenean vitae orci ac mi semper scelerisque quis quis arcu. Donec tempor auctor tortor nec efficitur. Praesent rutrum tortor diam, a pharetra diam pretium at. Nulla tempus venenatis purus, at egestas felis elementum et. Etiam varius fermentum turpis, vel bibendum dui aliquam at. Nunc efficitur mi in nibh iaculis, sed rhoncus libero mollis. Fusce commodo dictum nunc, at feugiat sapien porta non. In bibendum eu ante sit amet varius. Sed lorem risus, commodo vitae faucibus id, condimentum commodo felis. Nam augue felis, rhoncus at turpis sed, fringilla blandit elit. Vivamus a lorem luctus elit gravida vulputate sed a nisl. Aenean ligula nulla, semper ac suscipit pellentesque, vulputate sit amet enim",
              visible: false
            },
            {
              name: "Secure Term 20",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit urna et tincidunt porta. Ut non massa quis enim cursus cursus. Aenean vitae orci ac mi semper scelerisque quis quis arcu. Donec tempor auctor tortor nec efficitur. Praesent rutrum tortor diam, a pharetra diam pretium at. Nulla tempus venenatis purus, at egestas felis elementum et. Etiam varius fermentum turpis, vel bibendum dui aliquam at. Nunc efficitur mi in nibh iaculis, sed rhoncus libero mollis. Fusce commodo dictum nunc, at feugiat sapien porta non. In bibendum eu ante sit amet varius. Sed lorem risus, commodo vitae faucibus id, condimentum commodo felis. Nam augue felis, rhoncus at turpis sed, fringilla blandit elit. Vivamus a lorem luctus elit gravida vulputate sed a nisl. Aenean ligula nulla, semper ac suscipit pellentesque, vulputate sit amet enim",
              visible: false
            },
            {
              name: "Secure Term 30",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit urna et tincidunt porta. Ut non massa quis enim cursus cursus. Aenean vitae orci ac mi semper scelerisque quis quis arcu. Donec tempor auctor tortor nec efficitur. Praesent rutrum tortor diam, a pharetra diam pretium at. Nulla tempus venenatis purus, at egestas felis elementum et. Etiam varius fermentum turpis, vel bibendum dui aliquam at. Nunc efficitur mi in nibh iaculis, sed rhoncus libero mollis. Fusce commodo dictum nunc, at feugiat sapien porta non. In bibendum eu ante sit amet varius. Sed lorem risus, commodo vitae faucibus id, condimentum commodo felis. Nam augue felis, rhoncus at turpis sed, fringilla blandit elit. Vivamus a lorem luctus elit gravida vulputate sed a nisl. Aenean ligula nulla, semper ac suscipit pellentesque, vulputate sit amet enim",
              visible: false
            }
          ]
        },
        {
          name: "Whole Life",
          products: [
            {
              name: "Summit Whole Life",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit urna et tincidunt porta. Ut non massa quis enim cursus cursus. Aenean vitae orci ac mi semper scelerisque quis quis arcu. Donec tempor auctor tortor nec efficitur. Praesent rutrum tortor diam, a pharetra diam pretium at. Nulla tempus venenatis purus, at egestas felis elementum et. Etiam varius fermentum turpis, vel bibendum dui aliquam at. Nunc efficitur mi in nibh iaculis, sed rhoncus libero mollis. Fusce commodo dictum nunc, at feugiat sapien porta non. In bibendum eu ante sit amet varius. Sed lorem risus, commodo vitae faucibus id, condimentum commodo felis. Nam augue felis, rhoncus at turpis sed, fringilla blandit elit. Vivamus a lorem luctus elit gravida vulputate sed a nisl. Aenean ligula nulla, semper ac suscipit pellentesque, vulputate sit amet enim",
              visible: false
            }
          ]
        }
      ]
    };
  },
  methods: {
    showProduct(category, product) {
      console.log(category.name);
      console.log(product.name);
      if (this.categories[0].products[0].visible === true) {
        this.categories[0].products[0].visible = false;
      } else {
        this.categories[0].products[0].visible = true;
      }
    }
  }
};
</script>

<style>
.categoryCard {
  min-height: 500px;
}
</style>
