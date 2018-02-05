
<template>
<!-- div>
   <p>{{ unMessage.message }}</p>
</div> -->
    <div class="panel">
                <article class="media channel-message">
                    
                    <div class="media-content">
                        <strong>{{auteur}}</strong>
                        <small>{{info.email}}</small>
                        
                        <br>
                        <div>
                            {{unMessage.message}}
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
    

</template>

<script>
export default {
  name: "message-element",
  props : ['unMessage'],
  data() {
    return {
			auteur:"",
			info: this.$store.state.member,
			user :false
			
		};
  },
 
  mounted() {
 window.axios.get('members', {
   params : {
     token : this.$store.state.token
   }
 }).then ((response) => {
   response.data.forEach(function(el){
     if (this.unMessage.member_id == el._id)
     {
       this.auteur = el.fullname
       if (el.mail == this.mon_email)
       {
         this.auteur == "Moi"
         this.user = true
       }
     }
   },this)
 })
  },
  methods: {
     
   
}
}
</script>

<style>

</style>