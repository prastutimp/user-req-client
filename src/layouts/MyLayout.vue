<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated  class ="eolHeader">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
         <img class ="header-logo" alt="Eurofins logo" src="~assets/eurofins-logo-primary.png">
        </q-toolbar-title>
      </q-toolbar>
      <div class="absolute-center text-weight-bold q-toolbar__title">My Requirements App</div>
       <!-- <q-breadcrumbs active-color="white" style="font-size: 16px" >
          <q-breadcrumbs-el label="Home" icon="home" clickable />
          <q-breadcrumbs-el label="Dashboard" icon="widgets" />
          <q-breadcrumbs-el label="View My Requirements" />
        </q-breadcrumbs> -->
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-primary"
      :breakpoint="767"
      :width="230"
    >
      <q-item-label header class="text-grey-1"> Navigation </q-item-label>
      <q-list class= "text-accent" v-for ="nav in navs" v-bind:key="nav.Title">
        <q-item clickable :to="nav.Route" exact>
          <q-item-section avatar>
            <q-icon :name="nav.Icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{nav.Title}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="primary">
      <router-view />
    </q-page-container>
     <q-footer>
   <q-tabs>
        <q-route-tab v-for ="nav in navs" v-bind:key="nav.Title"
        :to="nav.Route" :icon="nav.Icon" :label="nav.Title" />
      </q-tabs>
            </q-footer>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      navs: [
        {
          Title: 'My Requirements',
          Icon: 'list',
          Description: 'View all requirements posted by you',
          Route: '/requirements'
        },
        {
          Title: 'Add a Requirement',
          Icon: 'note_add',
          Description: 'You can add your requirement here',
          Route: '/'
        }
      ]
    }
  },
  methods: {
    openURL
  }
}
</script>
<style lang="scss">
.eolHeader {
   height:100px;
   width:100%;
    }
    .header-logo
    {
      float: left;
      margin: 0.625rem;
    }
    .q-drawer {
     .q-router-link--exact-active {
      color: #ffffff;
    }
    }
   @media screen and (min-width: 768px){
      .q-footer{
        display: none;
      }
    }
    </style>
