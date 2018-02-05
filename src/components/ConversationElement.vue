
<template>

  <!--  <tr>
            <td>{{ channel.label }}</td>
            <td>{{ channel.topic }}</td>
            <td><button @click="deleteChannel">Supprimer</button></td>
            <td><router-link tag="button" :to="{ name : 'messages', params : {id : channel._id} }">Afficher</router-link></td>
    </tr> -->
  <div class="panel-block channel-list-item">
  <span class="panel-icon">
                            <i class="fa fa-comment"></i>
                        </span>
                        
                            <b>{{ channel.label }}&nbsp;&nbsp;</b>
                            <router-link tag="button" :to="{ name : 'messages', params : {id : channel._id} }">Afficher</router-link>
                        
                        <span class="right-channels">
                            <span class="tag">{{ channel.created_at }}</span>
                            <a @click="deleteChannel" class="panel-icon effacer-channel">
                                <i class="fa fa-trash has-text-dark"></i>
                            </a>
                        </span>
                        </div>

</template>

<script>
export default {
  name: "conversation-element",
  props : ['channel'],
  data() {
    return {
    };
  },
 
  mounted() {
 
  },
  methods: {
    deleteChannel() {
      if(confirm("Effacer cette conversation ?")) {
           window.axios.delete('channels/'+this.channel._id).then((response) => {
            alert('La conversation a été supprimé');
            location.reload();
           });
         }
    },
    voirChannel() {
     this.$router.push({ path: "/messages" });
     
      
    }
      
    
  }
};
</script>

<style>

</style>