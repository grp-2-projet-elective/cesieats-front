<template>
  <div>
    <LeaderboardComponent/>
    <div class="mr-2">
      <RolesComponent/>
    </div>
  </div>
</template>

<script lang="typescript">
import Vue from 'vue'
import LeaderboardComponent from '@/components/home/LeaderboardComponent.vue'
import RolesComponent from '@/components/home/RolesComponent.vue'

export default Vue.extend({
  name: 'HomeView',

  components: {
    LeaderboardComponent,
    RolesComponent
  }
})
</script>
