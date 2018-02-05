
<template>

<!-- <div>
     <table>
    <tr>
        <th> Nom </th>
        <th> E-mail </th>
    </tr>
    <membre-element v-for="unMembre in membres" :unMembre="unMembre"/>
    </table>

</div> -->
<div>
  <nav class="navbar is-primary">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <i class="fa fa-globe"></i>
                    <b>Co'op</b>
                </a>
                <span class="navbar-burger burger" data-target="navbarMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div id="navbarMenu" class="navbar-menu ">
                <div class="navbar-end">
                    <a href="#/channels" class="navbar-item router-link-exact-active router-link-active is-active">
                        <i class="fa fa-comments"></i>
                        <router-link tag="button" :to="{ name:'conv' }">Afficher les Conversations</router-link></a>
                    <a href="#/members" class="navbar-item">
                        <i class="fa fa-users"></i>
                         <router-link tag="button" :to="{ name : 'membres' }">Afficher les Membres</router-link>
                    </a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            <i class="fa fa-user"></i>
                            Actions
                        </a>
                        <div class="navbar-dropdown is-boxed">
                            <a @click="seDeconnecter" class="navbar-item">
                                Se déconnecter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <section class="section coop-accueil">
        <div class="panel">
            <p class="panel-heading">
                Membres
            </p>
            <membre-element v-for="unMembre in membres" :unMembre="unMembre"/>
            
        </div>
    </section>
  </div>



</template>

<script>
import MembreElement from "./MembreElement.vue"
export default {
  name: "Membres",
  components: {MembreElement},

  data() {
    return {
      membres: []
    };
  },
 
  mounted() {
    this.recupMembres();
  },
  methods: {
    seDeconnecter() {
      window.bus.$emit("logout");
    },
    recupMembres() {
      window.axios
        .get("members")
        .then(response => {
          this.membres = response.data;
          console.table(response.data);
        })
        .catch(error => {
          alert(error / response.data.error.joint("\n"));
        });
    },
    
  }
};
</script>

<style>

</style>