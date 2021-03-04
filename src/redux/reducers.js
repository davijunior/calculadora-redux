import { TO_VISOR, OPERATION, EQUALS } from './actions'

const initialState = {
	visor: "",
	memoria: "",
	operation: ""
}

export function reducer(state = initialState, action){
	switch (action.type) {
		case TO_VISOR:
			if(state.operation == "e-e"){
				return{
					visor: action.data,
					memoria: state.memoria,
					operation: state.operation
				}
			}
			if(action.data == "." && state.visor.indexOf(".")){
				return{
					visor: state.visor,
					memoria: state.memoria,
					operation: state.operation
				}
			}
			if(action.data == "." && state.visor==""){
				return{
					visor: "0" + action.data,
					memoria: state.memoria,
					operation: state.operation
				}
			}
			return{
				visor: state.visor + action.data,
				memoria: state.memoria,
				operation: state.operation
			}
		case OPERATION:
			return{
				visor: "",
				memoria: state.visor,
				operation: action.data
			}
		case EQUALS:
			let result = 0
			let visor = parseFloat(state.visor, 10)
			let memoria = (state.memoria == "") ? 0 : parseFloat(state.memoria, 10)
			switch (state.operation) {
				case "+":
					result = memoria + visor
					break;
				case "-":
					result = memoria - visor
					break;
				case "*":
					result = memoria * visor
					break;
				case "/":
					result = memoria / visor
					break;		
			}
			return{
				visor: result,
				memoria: result,
				operation: "e-e"
			}
		default:
			return state
	}
}