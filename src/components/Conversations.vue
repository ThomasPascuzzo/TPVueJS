
<template>
<!-- 
<div>
    <div>
Bienvue sur le site coop !

</div>
<div>
<button @click="seDeconnecter">Déconnexion</button>
</div>

<div>
<button @click="addChannel">Créer une conversation</button>
</div>

<div>
  <router-link tag="button" :to="{ name : 'membres' }">Afficher les Membres</router-link>
  </div>

<div>
    <h1> Les conversations </h1>
    <div>
      
        <table>
            <tr>
                <th>Nom de la conversation </th>
                <th>Description </th>
            </tr>
            <conversation-element v-for="channel in channels" :channel="channel"/>
    </table>
     
    </div>


    

</div>


</div>
-->

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
                        Conversations</a>
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
        <div class="channels">
            <div class="modal is-active" style="display: none;">
                <div class="modal-background"></div>
                
            </div>
            <div class="channels-list">
                <div class="panel-list">
                    <div class="panel-heading">
                        Conversations

                        <div class="button is-small" >
                            <span class="icon">
                                <i @click="addChannel" class="fa fa-plus"></i>
                            </span>
                            <span @click="addChannel">
                                Nouvelle conversation
                            </span>
                        </div>
                    </div>
                    
                        <!-- <span class="panel-icon">
                            <i class="fa fa-comment"></i>
                        </span>
                        <a href="#/channel/5a3131b446e1151e6b83d1b4" class="">
                            <b>Le titre de la conversation...</b>
                        </a>
                        <span class="right-channels">
                            <span class="tag">15/01/1998</span>
                            <a class="panel-icon effacer-channel">
                                <i class="fa fa-trash has-text-dark"></i>
                            </a>
                        </span> -->
                        <conversation-element v-for="channel in channels" :channel="channel"/>
                    
                </div>
            </div>
        </div>
    </section>
    
    </div>


</template>

<script>
import ConversationElement from "./ConversationElement.vue"
import Messages from "./Messages.vue"
export default {
  name: "Conversations",
  components: {ConversationElement, Messages},
  data() {
    return {
      channels: []
    };
  },
 
  mounted() {
    this.recupChannels();
  },
  methods: {
    seDeconnecter() {
      window.bus.$emit("logout");
    },
    recupChannels() {
      window.axios
        .get("channels")
        .then(response => {
          this.channels = response.data;
          console.table(response.data);
        })
        .catch(error => {
          alert(error / response.data.error.joint("\n"));
        });
    },
    addChannel() {
      this.$router.push({ path: "/creer-conversation" });
    },
  }
};
</script>

<style>

</style>