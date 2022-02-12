import React from 'react';
import PropTypes from 'prop-types';
import { useReadinessToSail } from './useReadinessToSail.js';

import './css/style.css';

function ShipParamsPanel(props) {
    let shipType = "cruiser";
    if(props.type==="destroyer") shipType = "destroyer";

    const isReadyToSail = useReadinessToSail(shipType);
    const readinessToSailIndicator = isReadyToSail ? <span className='ready-to-sail'>READY TO SAIL!</span> : 
    <span className='not-ready-to-sail'>NOT READY TO SAIL YET...</span>;

    return (
        <div className="ship-params-panel">
            {readinessToSailIndicator}
        </div>
    );
}

ShipParamsPanel.propTypes = {
    type: PropTypes.string.isRequired
}

export {ShipParamsPanel};