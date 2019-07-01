import { uid } from 'quasar'
import axios from 'axios'
const state = {
        requirements: []
      }
const mutations = {
  DeleteRequirement(state,payload){
    this.state.requirements.requirements.splice(this.state.requirements.requirements.findIndex(item => item.id === payload.id), 1)
  },
  SaveRequirement(state,payload){
   this.state.requirements.requirements.push(payload)
  },
  UpdateRequirement(state,payload){
    var index = this.state.requirements.requirements.findIndex(item => item.id === payload.id)
    this.state.requirements.requirements[index] = payload;
   },
  CommitRequirement(state, requirements)
  {
  state.requirements = requirements
  }
}
const actions = {
  DeleteRequirement({commit}, payload) {
    axios.delete('http://localhost:50849/idea/delete-idea/'+payload.id)
    .then(function (response) {
      commit('DeleteRequirement', payload)
    })
    .catch(function (error) {
      commit('DeleteRequirement', payload)
      console.log(error);
    });
  },
  GetRequirements({commit})
  {
    axios.get('http://localhost:50849/idea/all')
  .then(response => {
      commit('CommitRequirement', response.data)
      console.log("success"+response.data);
      })
  .catch(error => {
    commit('CommitRequirement', response.data)
      console.log("error="+error);
  });
  },
  SaveRequirement({commit}, requirement) {
    return axios({
      url: 'http://localhost:50849/idea/new',
      method: 'POST',
      data: {
      name: requirement.name,
      description: requirement.description,
      benefits: requirement.benefits,
    },
      headers: {
          'Content-Type': 'application/Json'
      }
  })
  .then(response => {
      commit('SaveRequirement', payload)
      console.log("success"+response);
      return "done"
      })
  .catch(error => {
    commit('UpdateRequirement', payload)
      console.log("error="+error);
      return "done"
  });
  },

  UpdateRequirement({commit}, requirement) {
    return axios({
      url: 'http://localhost:50849/idea/update-idea',
      method: 'PUT',
      data: {
      name: requirement.name,
      description: requirement.description,
      benefits: requirement.benefits,
      id: requirement.id
    },
      headers: {
          'Content-Type': 'application/Json'
      }
  })
  .then(response => {
      commit('UpdateRequirement', payload)
      console.log("success"+response);
      return "done"
      })
  .catch(error => {
    commit('UpdateRequirement', payload)
      console.log("error="+error);
      return "done"
  });
  }
}
const getters = {
requirements: (state) => {
return state.requirements
}
}
export default {
    namespeced:true,
    state,
    mutations,
    actions,
    getters
}
