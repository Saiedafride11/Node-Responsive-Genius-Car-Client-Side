import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({})
    useEffect( () => {
        // fetch(`http://localhost:5000/services/${serviceId}`)
        fetch(`https://glacial-anchorage-39923.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2>Details of {service.name}</h2>
            <h2>This is Booking {serviceId}</h2>
        </div>
    );
};

export default Booking;