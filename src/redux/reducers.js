import { TO_VISOR, OPERATION, EQUALS } from './actions'

const initialState = {
	visor: "",
	memory: "",
	operation: ""
}

export function reducer(state = initialState, action){
	switch (action.type) {
		case TO_VISOR:

			if(state.operation == "e-e") { 
				state.visor = action.data
			}else{
				if(action.data == "." && state.visor==""){
					state.visor = "0"+action.data
				}else{
					state.visor = state.visor + action.data
				}
			}
			return{
				visor: state.visor,
				memory: state.memory,
				operation: state.operation
			}
		case OPERATION:
			return{
				visor: "",
				memory: state.visor,
				operation: action.data
			}
		case EQUALS:
			let result = 0
			let visor = parseFloat(state.visor, 10)
			let memory = (state.memory == "") ? 0 : parseFloat(state.memory, 10)
			switch (state.operation) {
				case "+":
					result = memory + visor
					break;
				case "-":
					result = memory - visor
					break;
				case "*":
					result = memory * visor
					break;
				case "/":
					result = memory / visor
					break;		
			}
			return{
				visor: result,
				memory: result,
				operation: "e-e"
			}
		default:
			return state
	}
}