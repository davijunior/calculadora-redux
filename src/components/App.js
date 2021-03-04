import React from 'react'
import {connect} from 'react-redux'

class App extends React.Component{

	state = {
		visor: "",
		memoria: "",
		operation: ""
	}

	writeVisor = (s) => {
		this.props.dispatch({type: 'TO_VISOR', data: s})
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
				<div className="visor"><span className="memo">{this.props.memoria}</span><hr /></div>
				<div className="visor"><span>{this.props.visor}</span></div>
				<div className="buttonArea">
					<div className="btn-container">
						<button onClick={() => this.writeVisor('7')}>7</button>
					</div>
					<div className="btn-container">
						<button onClick={() => this.writeVisor('8')}>8</button>
					</div>
					<div className="btn-container">
						<button onClick={() => this.writeVisor('9')}>9</button>
					</div>
					<div className="btn-container">
						<button onClick={() => this.getOperator("/")}>/</button>
					</div>
				</div>
				<div className="buttonArea">
					<div className="btn-container">
						<button onClick={() => this.writeVisor('4')}>4</button>
					</div>
					<div className="btn-container">
						<button onClick={() => this.writeVisor('5')}>5</button>
					</div>
					<div className="btn-container">
						<button onClick={() => this.writeVisor('6')}>6</button>
					</div>
					<div className="btn-container">
						<button onClick={() => this.getOperator("*")}>*</button>
					</div>
				</div>
				<div className="buttonArea">
					<div className="btn-container">
						<button onClick={() => this.writeVisor('1')}>1</button>
					</div>
					<div className="btn-container">
						<button onClick={() => this.writeVisor('2')}>2</button>
					</div>
					<div className="btn-container">
						<button onClick={() => this.writeVisor('3')}>3</button>
					</div>
					<div className="btn-container">
						<button onClick={() => this.getOperator("-")}>-</button>
					</div>
				</div>
				<div className="buttonArea">
					<div className="btn-container">
						<button onClick={() => this.writeVisor('0')}>0</button>
					</div>
					<div className="btn-container">
						<button onClick={() => this.writeVisor('.')}>.</button>
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
		memoria: state.memoria,
		operation: state.operation
	}
}

export default connect(mapStateToProps)(App)