import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        // fetch('http://localhost:5000/services')
        fetch('https://glacial-anchorage-39923.herokuapp.com/services')
        .then(res => res.json())
        .then( data => setServices(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if(proceed){
            // const url = `http://localhost:5000/services/${id}`
            const url = `https://glacial-anchorage-39923.herokuapp.com/services/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    // console.log(data);
                    alert('Deleted Successfully')
                    const remaining = services.filter( service => service._id !== id)
                    setServices(remaining)
                }
            })
        }
    }
    return (
        <div>
            <h2>Manage Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;