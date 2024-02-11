import React from "react";



const SecondCard = (props) => {

	return (
		<div className="m-3" style={{backgroundColor: "rgb(8, 8, 8)", height: '180px', width: '120px', borderRadius: '10px',}}>
			<div className="position-relative top-50 start-50 translate-middle" style={{textAlign: 'center', fontSize: '100px', color: "white"}}>
			<p>{props.digito}</p>
			</div>
		</div>
	);
};

export default SecondCard;