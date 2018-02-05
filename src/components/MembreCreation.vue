<template>
<!-- <form @submit="creerMembre">
  <div>
    Nom:
  <input type="text" v-model="fullname"/>
  </div>
  <div>
    Email:
  <input type="email" v-model="email"/>
  </div>
  <div>
    mdp:
  <input type="password" v-model="password"/>
  </div>
  <input type="submit" value="Créer le compte"/>
  <router-link to ="/connexion"> Annuler </router-link>
</form> -->
<div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Co'op - Identification</p>
            </header>
            <section class="modal-card-body">
                <form @submit="creerMembre" class="coop-signup" wtx-context="A7A9BB60-9ACE-45E0-A007-1AFDAEEE3AC3" style="">
                    <div class="field">
                        <p class="control has-icons-left">
                            <input type="text" placeholder="Nom" class="input" wtx-context="B0542032-21D9-455B-8DA7-1C110CFAAC8D" v-model="fullname">
                            <span class="icon is-small is-left">
                                <i class="fa fa-user"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input type="email" placeholder="Email" class="input" wtx-context="9CE31BD7-CB49-4A0C-847E-41C64CBFD2CC" v-model="email">
                            <span class="icon is-small is-left">
                                <i class="fa fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input type="password" placeholder="Mot de passe" class="input" wtx-context="268F3932-BFE8-4CBA-8666-7DD0E028C613" v-model="password">
                            <span class="icon is-small is-left">
                                <i class="fa fa-lock"></i>
                            </span>
                        </p>
                    </div>

                    <div class="field">
                        <p class="control">
                            <input type="submit" value="Créer le compte" class="button is-success">
                                
                            </input>
                            <router-link to ="/connexion"> Annuler </router-link>
                        </p>
                    </div>
                </form>
                
            </section>
        </div>
    </div>

</template>

<script>
export default {
  name: "MembreCreation",
  data() {
    return {
      fullname: "",
      email: "",
      password: ""
    };
  },
  methods: {
    creerMembre() {
      window.axios
        .post("members", {
          fullname: this.fullname,
          email: this.email,
          password: this.password
        })
        .then((response) => {
          alert('Le membre '+response.data.fullname+' a bien  été crée');
          this.$router.push({ path:'/connexion'})
        })
        .catch((error) => {
          alert(error/response.data.error.joint("\n"));
        });
      console.log(this.fullname);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
