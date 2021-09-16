import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteShops } from '../../Action/Action'
import './ShopDetails.css';
const ShopDetails = (props) => {
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteShops(id))

    alert('Deleted Successfully')
    console.log(id)
  }

  return (
    <div className="details">
      <p className="details-name" >{props.shop.name}</p>
      <p className="details-area">{props.shop.area}</p>
      <p className="details-category">{props.shop.category}</p>
      <p className="details-category"><small>Opening Date: {props.shop.opening}</small></p>
      <p className="details-category"><small>Closing Date: {props.shop.closingDate}</small></p>
      <svg onClick={() => handleDelete(props.shop._id)} style={{ width: '40px', color: 'red', marginBottom: '20px' }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </div>
  )
}

export default ShopDetails
