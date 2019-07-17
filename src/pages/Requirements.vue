<template>
<q-page padding>
<requirementList v-on:editRequirement="editRequirement"></requirementList>
    <q-dialog v-model="editReq" v-on: persistent >
      <q-card style="min-width: 400px">
        <q-card-section class="row">
          <div class="text-primary text-h6"> Edit requirement </div>
          <q-space/>
          <q-btn size="8px"
           class="float-right" round color="primary" v-close-popup icon="close" />
        </q-card-section>
        <q-card-section>
         <userReqDetails :isEdit="editReq" :requirement="requirement" v-on:closeEdit="closeEdit"></userReqDetails>
        </q-card-section>
      </q-card>
    </q-dialog>
 
</q-page>
</template>

<style>
</style>

<script>
import requirementList from '../components/requirement-list.vue'
import userReqDetails from '../components/user-req-details.vue'

export default {
  name: 'PageRequirements',
   data () {
      return {
      editReq : false,
      requirement: {
            id: '',
            Title: '',
            Description: '',
            Benefits: '',
            Status: ''
        }
      }
    },
    methods: {
      editRequirement(value) {
        this.editReq = true
        this.requirement = value
      },
      closeEdit()
      {
        this.editReq = false;
      }
    },
  components: {
  requirementList,
  userReqDetails
  }
}
</script>
