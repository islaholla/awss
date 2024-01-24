import React from "react"

const PriceCard = (harga) => {
  return (
    <>
      {harga.price.map((val) => (
        <div className='items shadow'>
          <h1>
            <div className="wrap-image">
            <img src={val.price} alt="" />
            </div>
          </h1>
          <h3>{val.name}</h3>

          <ul>
            {val.desc.map((desc)=>(
              <li>{desc}</li>
            ))}</ul>
        </div>
      ))}
    </>
  )
}

export default PriceCard
