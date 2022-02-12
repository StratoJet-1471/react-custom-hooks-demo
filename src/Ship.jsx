import React from 'react';
import PropTypes from 'prop-types';

import { useReadinessToSail } from './useReadinessToSail.js';
import { ShipParamsPanel } from './ShipParamsPanel.jsx';

import './css/style.css';

function Ship(props) {    
    let shipImgClassName = "img cruiser";
    let shipTypeTitle = "CRUISER";
    let shipImgSrc = "./img/cruiser.jpg";
    let shipType = "cruiser";

    if(props.type==="destroyer") {
        shipImgClassName = "img destroyer";
        shipImgSrc = "./img/destroyer.jpg";
        shipTypeTitle = "DESTROYER";
        shipType = "destroyer";
    }

    const isReadyToSail = useReadinessToSail(shipType);
    const readinessToSailIndicatorClass = isReadyToSail ? " ready-to-sail" : " not-ready-to-sail";

    return (
        <div className={"ship" + readinessToSailIndicatorClass}>
            <div className="ship__title">
                <span className="ship__title-font">{shipTypeTitle}</span>
            </div>
            <img className={shipImgClassName} src={shipImgSrc} alt={shipType} />
            <ShipParamsPanel type={shipType}/>
        </div>
    );
}

Ship.propTypes = {
    type: PropTypes.string.isRequired
}

export { Ship };