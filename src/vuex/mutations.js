export default {
	del:(state,idx)=>state.todos.splice(idx,1),
	add(state,txt){
		state.id++
		state.todos.push({
		  text:txt,
		  selected:!1,
		  id:state.id
	   })
	},
	update:(state,arr)=>state.todos[arr[0]].text = arr[1],
	select:(state,arr)=>state.todos[arr[0]].selected = arr[1],
	changeFilter:(state,idx)=>state.filter = idx,
	delSelected(state){
		state.todos = state.todos.filter((todo)=>{
			return !todo.selected
		})
	},
	selectAll(state,bool){
		state.todos = state.todos.map((todo)=>{
			todo.selected = bool
			return todo
		})
	}
}
