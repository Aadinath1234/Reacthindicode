import React from 'react'

function Header(props){
    console.warn("header", props.data)
    return(
        <div>
            <div className="add-to-cart">
                <span className='cart-count'>{props.data.length}

                </span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUcg0-tFz8L_7CFfb57I9LYpyboq_2iHdzEPbIvhf6hw&s" alt="headerphoto" />
            </div>
        </div>
    )
}

export default Header;
