import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';



const IconCard = (props) => {
	return (
		<div className="m-3" style={{backgroundColor: "rgb(8, 8, 8)", height: '180px', width: '190px', borderRadius: '10px',}}>
			<div className="position-relative top-50 start-50 translate-middle" style={{textAlign: 'center', fontSize: '100px', color: "white"}}>
      <FontAwesomeIcon icon={faClock} />
			</div>
		</div>
	);
}

export default IconCard