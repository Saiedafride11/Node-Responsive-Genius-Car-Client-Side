import React from 'react';
import './Expert.css';

const Expert = (props) => {
    const {name, img, expertize} = props.expert;
    return (
        <div className="col-lg-4 col-sm-6 col-12" style={{padding: '10px'}}>
            <div className="expert pb-2">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h5 className="text-danger">{expertize}</h5>
            </div>
        </div>
    );
};

export default Expert;