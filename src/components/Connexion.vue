<template>
<!-- <form @submit="seConnecter">

 <div>
  <input type="email" v-model="email"/>
  </div>
  <div>
  <input type="password" v-model="password"/>
  </div>
  <input type="submit" value="Connexion"/>
  <router-link to ="/membre-creation"> Créer un compte </router-link>
</form> -->



  <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Co'op - Identification</p>
            </header>
            <section class="modal-card-body">

                <form @submit="seConnecter" class="coop-login" wtx-context="0607C13C-6246-4B7F-9A56-A9F89E136248">
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input type="email" placeholder="Email" class="input" wtx-context="FFD41BDF-D6B3-4ADC-9B96-44CE46A37369" v-model="email">
                            <span class="icon is-small is-left">
                                <i class="fa fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input type="password" placeholder="Mot de passe" class="input" wtx-context="B372AC4C-C596-4DE9-BF52-5719777E18EF" v-model="password">
                            <span class="icon is-small is-left">
                                <i class="fa fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control">
                            <input  type="submit" value="Connexion" class="button is-success">
                                
                            </input>
                            <router-link to ="/membre-creation"> Créer un compte </router-link>
                        </p>
                    </div>
                </form>
            </section>
        </div>
    </div>


</template>

<script>
export default {
  name: "Connexion",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods : {
      seConnecter() {
           window.axios
        .post("members/signin", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          this.$store.commit('setMember',response.data);
          this.$store.commit('setToken',response.data.token);
          window.axios.defaults.params.token = response.data.token;
          
          this.$router.push({ path:'/conversations'})
        })
        .catch((error) => {
          alert(error/response.data.error.joint("\n"));
        });
      console.log(this.email);
      }
  }
};
</script>

<style>

</style>