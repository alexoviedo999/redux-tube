import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA0cgxVcTFlPtruOGs28r_z9Se8YkYhwL0';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('.container'));
