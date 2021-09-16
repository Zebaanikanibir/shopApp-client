import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listShops } from './../../Action/Action';
import ShopDetails from './../ShopDetails/ShopDetails';
import './Home.css';

const Home = () => {
  const [search, setSearch] = useState("");

  const shopList = useSelector(state => state.shopList)
  const { loading, error, shops } = shopList;



  const dispatch = useDispatch()
  useEffect(() => {



    dispatch(listShops())
  }, [])

  const excludeColumns = ["area", "category"];

  const filterShops = shops.filter(shop => {

    return shop.area.toLowerCase().toLowerCase().includes(search.toLowerCase()) || shop.category.toLowerCase().toLowerCase().includes(search.toLowerCase())||shop.opening.toLowerCase().toLowerCase().includes(search.toLowerCase())||shop.closingDate.toLowerCase().toLowerCase().includes(search.toLowerCase())


  }

  )

  return (
    <div>

      <div className="search-box">
      <input
        style={{ marginLeft: 5 }}
        type="text"
        placeholder="Search by Area/Category/Date"

        onChange={e => setSearch(e.target.value)}
      />
      </div>
      <Link to="/addShop">
        
        <div classANme="add-shop" >
        <svg style={{ width: '50px' ,marginTop:'50px'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        <p>
       
          ADD MORE
        </p>
        </div>
      </Link>
      {
        loading ? <h4>Loading...</h4> : error ? <h3>{error}</h3>
          :
          <div className="home">

            <div className="shop-box">

              {filterShops.map(shop => <ShopDetails shop={shop} key={shop._id}></ShopDetails>)}
              <div>

              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default Home
