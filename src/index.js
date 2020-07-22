import React from "react";
import ReactDOM from "react-dom";
import Greeting from "components/Greeting";
import Header from "components/Header";
import 'css/index.css';

const App = () => {
	return(
        <>
            <Header />
            <Greeting name="World" />
        </>
        )
}

ReactDOM.render(<App />, document.getElementById('root'));
