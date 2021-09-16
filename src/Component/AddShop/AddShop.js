import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import './AddShop.css';
const AddShop = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();



  console.log(errors)
  const onSubmit = data => {
    if (Date.parse(data.closingDate) < Date.parse(data.openingDate)) {
      alert('openingDate is not greater than closingDate')
    } else {
      const eventData = {
        name: data.name,
        area: data.area,
        category: data.category,
        opening: data.openingDate,
        closingDate: data.closingDate
      }
      const url = `http://localhost:5002/addShop`
      console.log(eventData)

      fetch(url, {

        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(eventData)
      })
        .then(res => alert('Shop added', res))
    }


    // console.log('opening',Date.parse(data.openingDate))
    // console.log('closing',Date.parse(data.closingDate))





  };

  // const date = new Date()
  // console.log('date',date)

  return (
    <div className="form-box">

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className="label">NAME</label> <br />


        <input className="input-name" id="name" name="name" type="text" placeholder="Shop Name"{...register('name', {
          required: true, maxLength: {
            value: 30,
            message: "Max length is 30"
          },
          pattern: {
            value:

              /^[a-zA-Z\s]*$/
            ,
            message: "only alphabet"
          }
        })} /> <br />
        {/* use aria-invalid to indicate field contain error */}
        {errors.name && errors.name.type === "required" && (
          <span role="alert">This is required</span>
        )}

        {errors.name && errors.name.type === "pattern" && (
          <span role="alert">Max length exceeded</span>

        )}
        <div className="flex-box">
          <div className="area-box">
            <label htmlFor="name" className="label">AREA</label> <br />

            {/* use aria-invalid to indicate field contain error */}
            <select className="input-name" id="area"{...register('area', {
              required: true, maxLength: {
                value: 30,

              }
            })} name="area">
              <option value="Thane">Thane</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai Suburban">Mumbai Suburban</option>
              <option value="Nashik">Nashik</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Ahmednagar">Ahmednagar</option>
              <option value="Solapur">Solapur</option>
            </select> <br />
            {/* use role="alert" to announce the error message */}
            {errors.name && errors.name.type === "required" && (
              <span role="alert">This is required</span>
            )}
            {errors.name && errors.name.type === "maxLength" && (
              <span role="alert">Max length exceeded</span>
            )} <br />
            <label htmlFor="name" className="label">CATEGORY</label> <br />

            {/* use aria-invalid to indicate field contain error */}
            <select className="input-name" id="category"{...register('category', {
              required: true, maxLength: {
                value: 30,

              }
            })} name="category">
              <option value="Grocery">Grocery</option>
              <option value="Butcher">Butcher</option>
              <option value="Baker">Baker</option>
              <option value="Chemist">Chemist</option>
              <option value="Stationery shop">Stationery shop</option>
            </select><br />

            {/* use role="alert" to announce the error message */}
            {errors.name && errors.name.type === "required" && (
              <span role="alert">This is required</span>
            )}
            {errors.name && errors.name.type === "maxLength" && (
              <span role="alert">Max length exceeded</span>
            )}
          </div>
          <div className="date-box">
            <label htmlFor="name" className="label">OPENING DATE</label> <br />

            {/* use aria-invalid to indicate field contain error */}
            <input className="input-name" id="openingDate" name="openingDate" type="date" placeholder="Opening Date"{...register('openingDate', {
              required: true, maxLength: {
                message: "Max length is 30",
                value: 30,
              }

            })} /> <br />

            {/* use role="alert" to announce the error message */}
            {errors.name && errors.name.type === "required" && (
              <span role="alert">This is required</span>
            )}
            {errors.name && errors.name.type === "maxLength" && (
              <span role="alert">Max length exceeded</span>
            )}
            {errors.openingDate && <p>{errors.openingDate.message}</p>}


            <br />
            <label htmlFor="name" className="label">CLOSING DATE</label> <br />

            {/* use aria-invalid to indicate field contain error */}
            <input className="input-name" id="closingDate" name="closingDate" type="date" placeholder="Closing Date"{...register('closingDate', {
              required: true, maxLength: {
                message: "Max length is 30",
                value: 30,
              },

            })} /><br />
            {/* use role="alert" to announce the error message */}
            {errors.name && errors.name.type === "required" && (
              <span role="alert">This is required</span>
            )}
            {errors.name && errors.name.type === "maxLength" && (
              <span role="alert">Max length exceeded</span>
            )}

            {errors.openingDate && <p>{errors.openingDate.message}</p>}
            <br />

          </div>
        </div>
        <input className="submit-button" type="submit" />
      </form>




    </div>
  );
}

export default AddShop;
