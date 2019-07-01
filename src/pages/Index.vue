<template>
<q-page padding>
<userReqDetails :requirement="requirement"></userReqDetails>
</q-page>
</template>

<style>
</style>

<script>
import userReqDetails from '../components/user-req-details.vue'
export default {
  name: 'PageIndex',
  data() {
    return {
    requirement: {
            id: '',
            Title: '',
            Description: '',
            Benefits: '',
            Status: ''
        }
  }
  },
  components: {
  userReqDetails
  },
  methods: {
   
  }
}
</script>
