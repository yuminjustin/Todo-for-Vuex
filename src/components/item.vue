<template>
   <li :class="todo.selected?'selected':''" v-show="isShow()">
     <input type="checkbox" class="l db" @click="selectIt" :checked="todo.selected"/>
	 <span class="db l ellipsis" v-show="!isEdit" @dblclick="editIt">{{todo.text}}</span>
     <input ref="ipt" type="text" class="l db" v-show="isEdit" :placeholder="todo.text"/>
	 <div class="operate r">
		<button v-show="!isEdit" @click="delIt">删除</button>
		<button v-show="isEdit" @click="updateIt">修改</button>
		<button v-show="isEdit" @click="cancel">取消</button>
	</div>
   </li>
</template>
<script>
  export default {
     props:['todo'],
     data(){
	    return {
		   isEdit:!1
		}
	 },
	 methods: {
	   delIt(){
	      this.$store.dispatch('del',this.todo.id)
	   },
	   editIt() {
		  this.isEdit = !0
	   },
	   updateIt(){
	      let {ipt} = this.$refs
	      if(ipt.value){
		     this.$store.dispatch('update',[this.todo.id,ipt.value])
			 ipt.value = ""
			 this.isEdit = !1
		  }
	   },
	   cancel(){
	      this.$refs.ipt.value = ""
	      this.isEdit = !1
	   },
	   selectIt(e){
	      this.$store.dispatch('select',[this.todo.id,e.currentTarget.checked])
	   },
	   isShow(){
	     let {filter} = this.$store.state,
		     show = !0;
		 if(filter){
		     if(filter == 1) show = this.todo.selected?!1:!0
			 else  show = this.todo.selected?!0:!1
		 }
	     return show;
	   }
	 }
  }
</script>
