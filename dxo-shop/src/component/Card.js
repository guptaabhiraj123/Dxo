import React from 'react'
import '../styles/card.css'

const Card = ({ item,handleClick }) => {
    return (
        <div className='cards'>
            <div className='image_box'>
                <img src={item.img} alt='' />
            </div>
            <div className='details'>
                <p>{item.title}</p>
                <p>{item.author}</p>
                <p>Price - {item.price} Rs</p>
             <button onClick={()=>handleClick(item)}>Add to cart</button>

            </div>


        </div>
    )
}

export default Card