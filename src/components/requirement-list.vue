<template lang="html">
 <q-table
      title="Your Requirements"
      :data="requirements"
      :columns="columns"
      row-key="id"
      color = "secondary"
    >
    <q-td slot="body-cell-action" slot-scope="props" :props="props">
          <div class="row">
           <q-item-section avatar>
          <q-icon color="primary" @click="DeleteRequirement({id:props.row.id})" class="float-right" name="delete" />
        </q-item-section>
        <q-item-section avatar>
          <q-icon color="primary" class="float-right" name="edit" @click="editRequirement(props.row)" />
        </q-item-section>
        </div>
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
        { name: 'Name', align: 'left', label: 'Name', field: 'name', sortable: true },
        { name: 'Description', label: 'Description', align: 'left', field: 'description', sortable: true },
        { name: 'Benefits', label: 'Benefits', align: 'left', field: 'benefits' },
        { name: 'Status', label: 'Status', align: 'left', field: 'status' },
         { label: 'Actions', name: 'action', align: 'left',sort:false }
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
      }
     
    },
    computed: {
      ...mapGetters(['requirements'])
    }
}
</script>

<style lang="scss">

.border-bottom {
border-bottom: 2px solid grey
}

.q-table td, .q-table th {
    /* don't shorten cell contents */
    white-space: normal !important;
}
</style>
