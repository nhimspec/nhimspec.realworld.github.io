import React from 'react';
import ObjectUtils from './../../utils/ObjectUtils';

const renderErrorMessages = (errors) => (
    errors && (
        <ul className="error-messages">
            {
                ObjectUtils.mapValuesToList(errors, (errList, field) => (
                    errList.map((errMessage, i) => (
                        <li key={i}>{field} {errMessage}</li>
                    ))
                ))
            }
        </ul>
    )
);
export default renderErrorMessages;