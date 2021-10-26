import React from 'react';
// import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {name, price, description, img, _id} = props.service;
    // const history = useHistory();
    // const handleBooking = () => {
    //     history.push(`/booking/${id}`)
    // }
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            {/* <button onClick={handleBooking} className="btn btn-warning">Book {name.toLowerCase()}</button> */}
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-primary">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;