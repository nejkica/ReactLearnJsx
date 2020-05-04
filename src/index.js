import React from 'react';
import ReactDOM from 'react-dom';



const App = function() {

	const btnTxt = { text: 'click me' };

	return <div>
		<label className="label" htmlFor="name">
			Enter name:
		</label>
		<input type="text" id="name" />
		<button style={{ backgroundColor: 'blue', color: 'white' }}>{btnTxt.text}</button>
	</div>

};

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);