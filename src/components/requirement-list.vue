<template lang="html">
<!-- <q-list separator bordered class="shadow-19">
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
</q-list> -->
 <q-table
      title="Your Requirements"
      :data="requirements"
      :columns="columns"
      row-key="id"
      color="amber"
    >
    <q-td slot="body-cell-action" slot-scope="props" :props="props">
      <q-item-section avatar>
          <q-icon color="primary" @click="DeleteRequirement({id:props.row.id})" class="float-right" name="delete" />
        </q-item-section>
        <q-item-section avatar>
          <q-icon color="primary" class="float-right" name="edit" @click="editRequirement(props.row)" />
        </q-item-section>
  </q-td>
    </q-table>
</template>

<script lang="js">
 import { mapGetters } from "vuex";
 import { mapActions } from "vuex";
 
  export default {
    name: 'requirementList',
    props: [],
    data () {
      return {
   columns: [
        {
          name: 'Id',
          required: true,
          label: 'id',
          align: 'left',
          field: 'id',
          sortable: true
        },
        { name: 'Name', align: 'center', label: 'Name', field: 'name', sortable: true },
        { name: 'Description', label: 'Description', field: 'description', sortable: true },
        { name: 'Benefits', label: 'Benefits', field: 'benefits' },
        // { name: 'Status', label: 'Status', field: 'status' },
         { label: 'Actions', name: 'action', sort:false }
      ]
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
      },
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
