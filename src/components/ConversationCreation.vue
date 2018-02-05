<template>
<form @submit="creerConversation">
<b>Nouvelle conversation</b>
<input type="text" placeholder="Titre" v-model="label">
<input type="text" placeholder="Descripition" v-model="topic">
<input type="submit" value="Créer la conversation"/>

</form>
</template>

<script>
export default {
  name: "ConversationCreation",
  data() {
    return {
      label: "",
      topic: ""
    };
  },
  methods : {
      creerConversation() {
          window.axios.post('channels', {
             
                  label:this.label,
                  topic:this.topic
              
          }).then((reponse) => {
            alert('La conversation a été crée');
            this.$router.push({ path:'/conversations'})
          })
          .catch((error) => {
          alert(error/response.data.error.joint("\n"));
        });
      }
  }
};
</script>

<style>

</style>