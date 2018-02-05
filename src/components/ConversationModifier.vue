<template>

</template>

<script>
export default {
  name: "ConversationModifier",
  data() {
    return {
      
    };
  },
  methods : {
      suppConversation() {
          window.axios.delete('channels', {  
              
          }).then((reponse) => {
            alert('La conversation a été supprimé');
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