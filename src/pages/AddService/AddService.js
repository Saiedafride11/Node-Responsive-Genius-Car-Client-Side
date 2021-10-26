import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
        .then(res => {
            // console.log(res);
            if(res.data.insertedId){
                alert('Added Successfully');
                reset();
            }
        })
    };
    return (
        <div className="add-service">
            <h2>Please add a services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" required/>
                <textarea {...register("description")} placeholder="Description" required/>
                <input type="number" {...register("price")} placeholder="Price" required/>
                <input {...register("img")} placeholder="Image Url"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;