
<template>

    
   
<p class="panel-block">
                <span class="panel-icon">
                    <i class="fa fa-user"></i>
                </span>
                <span class="panel-icon">
                    <img src="https://www.gravatar.com/avatar/5ad9f9520583d11d9c2455dad167123b?d=https://api.adorable.io/avatars/150/gilles@sopress.net">
                </span>
                <b>{{ unMembre.fullname }}</b>
                <span class="tag">{{ unMembre.email }}</span>
                
  </p>
    
    

</template>

<script>
export default {
  name: "membre-element",
  props : ['unMembre'],
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

<style>

</style>