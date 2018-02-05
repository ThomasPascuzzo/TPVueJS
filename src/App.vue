<template>
  <div id="app">

<router-view/>
  </div>
</template>

<script>
import MembreCreation from "./components/MembreCreation.vue";
import Connexion from "./components/Connexion.vue";
import Conversations from "./components/Conversations.vue";
import Messages from "./components/Messages.vue";

export default {
  name: "app",
  components: { MembreCreation, Connexion, Conversations },
  mounted() {
    if (!this.$store.state.member) {
      this.$router.push ({ path: '/connexion'});
    }
    else {
      window.axios.defaults.params.token = this.$store.state.token;
    } 

    window.bus.$on ('logout',() => {
      window.axios.delete('members/signout');
      this.$store.commit('setMember',false);
      this.$store.commit('setToken',false);
      this.$router.push({ path:'/connexion'})
    })



  }
};
</script>

<style>

</style>
