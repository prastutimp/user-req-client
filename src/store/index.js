import Vue from 'vue'
import Vuex from 'vuex'

import requirements from './store-requirements'


Vue.use(Vuex)

export default function() {
    const Store = new Vuex.Store({
        modules: {
            requirements
        },

        strict: process.env.DEV
    })

    return Store
}