
<template>

  <!-- <div>
  <h1> Liste des messages </h1>

<message-element v-for="unMessage in messages" :unMessage="unMessage"/>

 
<form @submit="envoyerMessage">
  <input type="text" placeholder="Message" v-model="message">
  <input type="submit" value="Envoyer"/>
</form>
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
    <nav class="navbar is-light">
        <div class="navbar-item">
            <a href="#/channels" class="button is-small">
                <span class="icon">
                    <i class="fa fa-arrow-left"></i>
                </span>
                <span>Retour</span>
            </a>
        </div>
        <div class="navbar-item titre-channel">
            Liste des messages
            
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <button class="button is-small is-danger">
                    <i class="fa fa-refresh"></i>
                    Rafraichir
                </button>
            </div>
           
        </div>
    </nav>
    <section class="section coop-accueil">
        <div class="channel">
            <message-element v-for="unMessage in messages" :unMessage="unMessage"/>
            
            <nav class="navbar has-shadow is-fixed-bottom">
                <div class="navbar-item field saisie-message">
                    <div class="control">
                      <form @submit="envoyerMessage">
                        <input type="text" size="130" placeholder="Entrez votre message ici et appuyez sur Entrée ou le bouton Envoyer" class="input" wtx-context="DDAF2E15-E91C-4549-B809-7C8E126D4164" v-model="message">
                        <input type="submit" value="Envoyer"/>
                      </form>
                    </div>
                </div>
            </nav>
        </div>
    </section>

</div>
</template>

<script>
import MessageElement from "./MessageElement.vue"
export default {
  name: "Messages",
   components: {MessageElement},

  data() {
    return {
      messages: [],
      message: "",
      timer :setInterval( ()=> {
				this.recupMessages()
			}
			,2000)
		
      
    };
  },

  mounted() {
    this.recupMessages();
    this.timer;
  },
  /*todo: setInterval(function(){ this.recupMessage() }, 1000),*/
  methods: {
    recupMessages() {
      window.axios
        .get("channels/" + this.$route.params.id + "/posts")
        .then(response => {
          this.messages = response.data;
          console.table(response.data);
        })
        .catch(error => {
          alert(error / response.data.error.joint("\n"));
        });
    },
    seDeconnecter() {
      window.bus.$emit("logout");
    },
    envoyerMessage() {
      window.axios
        .post("channels/" + this.$route.params.id + "/posts", {
          message: this.message
        })
        .then(reponse => {
          location.reload();
        })
        .catch(error => {
          alert(error / response.data.error.joint("\n"));
        });
    }
  }
};
</script>

<style>

</style>