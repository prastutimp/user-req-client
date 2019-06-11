<template>
  <q-layout view="lHh Lpr lFf">
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
       <q-breadcrumbs active-color="white" style="font-size: 16px" class="float-right">
          <q-breadcrumbs-el label="Home" icon="home" />
          <q-breadcrumbs-el label="Dashboard" icon="widgets" />
          <q-breadcrumbs-el label="View My Requirements" />
        </q-breadcrumbs>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item clickable tag="a" target="_blank" href="">
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>My Requirements</q-item-label>
            <q-item-label caption>View all requirements posted by you</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-12">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>
<style>
.eolHeader {
   background-color:#003883;
   height:100px;
   width:100%;
    }
    .header-logo
    {
      float: left;
      margin: 0.625rem;
    }
</style>
