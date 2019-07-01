<template lang="html">
<q-list separator bordered class="shadow-19">
      <q-item clickable v-ripple v-for ="(req,index) in requirements" v-bind:key="req.id" class="bg-accent">
        <q-item-section>
          <q-item-label>{{req.name}}</q-item-label>
          <q-item-label caption lines="1">{{req.description}}</q-item-label>
          </q-item-section>
            <q-item-section>{{req.benefits}}</q-item-section>
        <q-item-section>{{req.status}}</q-item-section>
        <q-item-section avatar>
          <q-icon color="primary" @click="DeleteRequirement({id:req.id})" class="float-right" name="delete" />
        </q-item-section>
        <q-item-section avatar>
          <q-icon color="primary" class="float-left" name="edit" @click="editRequirement(req)" />
        </q-item-section>
      </q-item>
</q-list>
</template>

<script lang="js">
 import { mapGetters } from "vuex";
 import { mapActions } from "vuex";
 
  export default {
    name: 'requirementList',
    props: [],
    data () {
      return {
   
      }
    },
    mounted() {

    },
    created() {
      this.GetRequirements()
    },
    components: {
  
  },
    methods: {
      ...mapActions(['DeleteRequirement','GetRequirements']),
      editRequirement(requirement) {
        this.$emit('editRequirement',requirement)
        this.$emit('isEdit',true)
      }
     
    },
    computed: {
      ...mapGetters(['requirements'])
    }
}
</script>

<style scoped lang="scss">

.border-bottom {
border-bottom: 2px solid grey
}
</style>
