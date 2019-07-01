<template>
<form @submit.prevent="SubmitRequirement">
  <div class="user-req-details q-gutter-y-md column" style="max-width: 80rem">
    <section>
   <q-input 
   outlined v-model="requirement.name" 
   label="Name" 
   placeholder="Give your requirement a name" 
   style="max-width: 30rem"
  :rules="[val => !!val || 'Field is required', val => val.length <= 200 || 'Please use maximum 20 characters']"
  ref="Name"
   />
   <q-input 
   v-model="requirement.description" 
   type ="textarea" 
   placeholder="Provide a detailed description of your requirement here"
     label="Description"
      :rules="[val => !!val || 'Field is required', val => val.length <= 1000 || 'Please use maximum 20 characters']"
      ref="Description"
   />
    <q-input v-model="requirement.benefits" type ="textarea" placeholder="Tell us how it will help the business"
     label="Benefits"
    ref="Benefits"
    />
  </section>
   <section>
   <q-btn color="secondary" class="float-right" label="Post" type="submit" :loading="submitting && isEdit">
      <template v-slot:loading>
        <q-spinner-hourglass class="on-left" />
         ...
        </template>
   </q-btn>
   <q-btn color="secondary" v-if="!isEdit" class="float-left" type="reset" label="Clear" @click="clearReq"></q-btn>
     <q-btn v-if="isEdit" label="Cancel" color="secondary" v-close-popup />
   </section>
  </div>
  <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row column items-center">
          <q-avatar icon="signal_wifi_off" color="secondary" text-color="black" />
          <span class="q-ml-sm">Thank You.Your requirement has been submitted.
          </span>
        </q-card-section>

        <q-card-actions class="row column items-center">
          <q-btn label="Done" color="secondary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>


</form>
</template>

<script lang="js">
import { required } from 'vuelidate/lib/validators'
import { mapActions } from "vuex";

  export default {
    name: 'userReqDetails',
    created() {
     console.log(this.isEdit)
    },
     mounted() {
     
    },
    props: {
        requirement: Object,
        isEdit: Boolean
      },
    
    data() {
      return {
        ischecked: false,
        baseUrl: 'http://localhost:50849/',
        submitting: false,
        confirm: false
        // requirement: {
        //     id: '',
        //     Title: '',
        //     Description: '',
        //     Benefits: '',
        //     Status: ''
        // }
      }

    },
    components: {
  },
    validations: {
      title: { required },
      description: { required },
      benefits: { required }
    },
    methods: {
      ...mapActions(['SaveRequirement','UpdateRequirement']),
       SubmitRequirement() {
         this.triggerValidation()
         if(this.isFormvalid())
      {
        this.submitting = true;
        if(this.isEdit)
        {
        this.UpdateRequirement(this.requirement)
       .then(r => 
       this.confirm = true 
       )
       .catch( e=>this.confirm = true)
        }
        else {
        this.SaveRequirement(this.requirement)
       .then(r => this.confirm = true)
       .catch( e=>this.confirm = true)
        }
      }
         },
    triggerValidation() {
      this.$refs.Name.validate()
      this.$refs.Description.validate()
      this.$refs.Benefits.validate()
    },
  clearReq() {
    this.requirement.name = ''
    this.requirement.description = ''
    this.requirement.benefits = ''

  },
    isFormvalid() {
      if(!this.$refs.Name.hasError && !this.$refs.Description.hasError && !this.$refs.Benefits.hasError) {
          return true;
      }
      return false
    },
    submit () {
      this.submitting = true
      this.$v.form.$touch()

      if (this.$v.form.$error) {
        this.$q.notify('Title is mandatory')
      }
      this.SubmitIdea()
    },
    SubmitIdea() {
     let resourceUrl = this.baseUrl + 'api/idea/new'

  //   this.$axios.post(resourceUrl, {
  //   Name: 'Fred',
  //   Description: 'Flintstone'
  // })
  // .then(function (response) {
  //   console.log(response)
  // })
  // .catch(function (error) {
  //   console.log(error)
  // })
    }
    },
    computed: {

    }
}
</script>
<style scoped lang="scss">
  .user-req-details {

  }
</style>
