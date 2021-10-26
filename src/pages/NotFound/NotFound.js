import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/404.png';

const NotFound = () => {
    return (
        <div>
            <img style={{width: '50%'}} src={img} alt=""/>
            <br/>
            <Link to="/">
                <button className="btn btn-primary mt-2">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;