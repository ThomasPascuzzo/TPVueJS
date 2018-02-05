<template>
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

            <div class="panel">
                <article class="media channel-message">
                    
                    <div class="media-content">
                        <strong>john</strong>
                        <small>123@gmail.com</small>
                        <span title="2018-01-22T16:51:16.745+01:00" class="date"> 40m</span>
                        <br>
                        <div>
                            Encore un autre message
                        </div>
                    </div>
                    <div class="media-right ">
                        <div style="display: none;">
                            <a class="icon">
                                <i class="fa fa-pencil has-text-dark"></i>
                            </a>
                            <a class="icon">
                                <i class="fa fa-trash has-text-dark"></i>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
            <nav class="navbar has-shadow is-fixed-bottom">
                <div class="navbar-item field saisie-message">
                    <div class="control">
                        <input type="text" size="130" placeholder="Entrez votre message ici" class="input" wtx-context="DDAF2E15-E91C-4549-B809-7C8E126D4164">
                        <input type ="submit">
                    </div>
                </div>
            </nav>
        </div>
    </section>

</div>
</template>

<script>

export default {
  name: "test",

  data() {
    return {
    };
  },
 
  mounted() {
 
  },
  methods: {
   
}
}
</script>
