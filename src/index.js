import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './styles/main.sass'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {reducer} from './redux/reducers'





const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const rootElement = document.getElementById("root")
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement)
