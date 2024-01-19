import {connect} from 'react-redux'
import Home from '../component/Home.js'
import { addToCart,removeToCart } from '../Services/Actions/actions.js';

const mapStateToProps=state =>({
    cardData:state
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler: data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;
