export default {
	del:({dispatch},id)=>dispatch('getIdx',['del',id]),
	add:({commit},txt)=>commit('add',txt),
	update:({dispatch},arr)=>dispatch('getIdx',['update',arr]),
	select:({dispatch},arr)=>dispatch('getIdx',['select',arr]),
	changeFilter:({commit},id)=>commit('changeFilter',id),
	delSelected:({commit})=>commit('delSelected'),
	selectAll:({commit},bool)=>commit('selectAll',bool),
	getIdx({commit,state},cfg){
		let idx,
			bool = cfg instanceof Array,
		    id = bool?cfg[1][0]:cfg[1];
		state.todos.map((todo,index)=>{
			todo.id == id && (idx = index)
		})
		if(bool) commit(cfg[0],[idx,cfg[1][1]])
		else commit(cfg[0],idx)
	}
}
