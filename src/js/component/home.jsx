import React from "react";

//include images into your bundle

import SecondCard from "./SecondCard";
import IconCard from "./IconCard";

let styles = {
	backgroundColor: "black",
	height: '200px',
	
}



//create your first component
const Home = (props) => {

let unidades = 0;
let decenas = 0; 
let centenas = 0; 
let miles = 0; 


	return (
		<div className="d-flex justify-content-center align-items-center py-5" style={{backgroundColor: "black", height: '200px'}}>
			<div className="row position-absolute center">
				<IconCard />
				<SecondCard digito={props.centimiles}/>
				<SecondCard digito={props.decamiles}/>
				<SecondCard digito={props.miles}/>
				<SecondCard digito={props.centenas}/>
				<SecondCard digito={props.decenas}/> 
				<SecondCard digito={props.unidades} id='unidades'/> 
			</div>
		</div>
	);
};

export default Home;
