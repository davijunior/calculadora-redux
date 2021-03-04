import React from 'react'
import { connect } from 'react-redux'


class Button extends React.Component{

	state = {
		visor: "",
		memory: "",
		operation: ""
	}

	writeVisor = (s) => {
		this.props.dispatch({type: 'TO_VISOR', data: s})
	}

	render(){
		return(
			<button onClick={() => this.writeVisor(this.props.number)}>{this.props.number}</button>
		)
	}
}

function mapStateToProps(state){
	return{
		visor: state.visor,
		memory: state.memory,
		operation: state.operation
	}
}

export default connect(mapStateToProps)(Button)