// import {Link, useNavigate, useLocation} from "react-router-dom"
// function Home(){
   
   
//     const navigate = useNavigate();
//     const navToPage =(url) =>{
//         navigate(url)
//     }
//     return(
//     <div>
//     <h1>Home Page</h1>
//     <p>this is a home page of our awesome app</p>
//     <p>and here we are learning about router </p>
//     <Link to="/about">Go to about page</Link> <br />
//     {/* <button onClick={()=>navigate('/about')}>Go to about page </button> */}

//     {/* <button onClick={()=>navigate('/filter')}>Go to Filter page </button> */}


//     <button onClick={()=>navToPage('/about')}>Go to about page </button>
//     <button onClick={()=>navToPage('/filter')}>Go to filter  page </button>
//     </div>
// )}

// export default Home;





import React from 'react'

function Home(props)
{
    console.warn("Home",props)
    return(
        <div>
            
            <h1>Home Component </h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://media.istockphoto.com/id/1190447864/photo/apple-iphone-11-pro-gray-smartphone.jpg?s=1024x1024&w=is&k=20&c=hsOTjL-jukTcgUSpni0VVQCUfF2nlJGYYoSKGaruoNk=" alt="phone" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                    onClick={()=>props.addToCartHandler({price:1000,name:'i phone 11'})}>
                        Add to cart 
                    </button>
                    <button
                    onClick={()=>props.removeToCartHandler()}>
                        Remove to cart 
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Home;