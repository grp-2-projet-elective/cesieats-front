<template>
  <div id="customer-view">
    <v-container>
      <CustomerOperation/>
      <RestaurantOwnerOperation/>
      <DeliveryManOperation/>
      <JoinUsComponent/>
    </v-container>
  </div>
</template>

<script>
import CustomerOperation from '@/components/roles/CustomerOperation.vue'
import RestaurantOwnerOperation from '@/components/roles/RestaurantOwnerOperation.vue'
import DeliveryManOperation from '@/components/roles/DeliveryManOperation.vue'
import JoinUsComponent from '@/components/roles/JoinUsComponent.vue'

export default {
  name: 'HelpView',
  components: {
    CustomerOperation,
    RestaurantOwnerOperation,
    DeliveryManOperation,
    JoinUsComponent
  }
}
</script>

<style scoped>

</style>
