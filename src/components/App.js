import React from 'react'
import {connect} from 'react-redux'
import Button from './Button'

class App extends React.Component{

	state = {
		visor: "",
		memory: "",
		operation: ""
	}

	

	getOperator = (s) => {
		this.props.dispatch({type: 'OPERATION', data: s})
	}

	getResult = (s) => {
		this.props.dispatch({type: 'EQUALS'})
	}

	render(){
		return(
			<div className="calculadora">
				<div className="visor"><span className="memo">{this.props.memory}</span><hr /></div>
				<div className="visor"><span>{this.props.visor}</span></div>
				<div className="buttonArea">
					<div className="btn-container">
						<Button number="7"/>
					</div>
					<div className="btn-container">
						<Button number="8"/>
					</div>
					<div className="btn-container">
						<Button number="9"/>
					</div>
					<div className="btn-container">
						<button onClick={() => this.getOperator("/")}>/</button>
					</div>
				</div>
				<div className="buttonArea">
					<div className="btn-container">
						<Button number="4"/>
					</div>
					<div className="btn-container">
						<Button number="5"/>
					</div>
					<div className="btn-container">
						<Button number="6"/>
					</div>
					<div className="btn-container">
						<button onClick={() => this.getOperator("*")}>*</button>
					</div>
				</div>
				<div className="buttonArea">
					<div className="btn-container">
						<Button number="1"/>
					</div>
					<div className="btn-container">
						<Button number="2"/>
					</div>
					<div className="btn-container">
						<Button number="3"/>
					</div>
					<div className="btn-container">
						<button onClick={() => this.getOperator("-")}>-</button>
					</div>
				</div>
				<div className="buttonArea">
					<div className="btn-container">
						<Button number="7"/>
					</div>
					<div className="btn-container">
						<Button number="7"/>
					</div>
					<div className="btn-container">
						<button onClick={() => this.getOperator("+")}>+</button>
					</div>
					<div className="btn-container">
						<button onClick={() => this.getResult()}>=</button>
					</div>
				</div>
			</div>
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

export default connect(mapStateToProps)(App)