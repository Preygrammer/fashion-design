import Vue from 'vue'
import Vuex from 'vuex'

// Modules import
import userModule from 'modules/user'
import productModule from 'modules/product'

Vue.use(Vuex)

const state = {}
const actions = ({})
const mutations = ({})
const getters = ({})

const modules = {
    user: userModule,
    product: productModule
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules
})