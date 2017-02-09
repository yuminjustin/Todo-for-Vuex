<template>
  <div class="mainbox m oh">
	<h1>{{title}}</h1>
	<InputBox/>
	<List/>
	<FootBar/>
  </div>
</template>

<script>
import InputBox from './input'
import List from './list'
import FootBar from './foot'

export default {
   data(){
      return {
	     title:"Vuex todo"
	  }
   },
   components:{
      InputBox,
	  List,
	  FootBar
   }
}
</script>
