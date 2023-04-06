import { buyIceCream } from "../redux/icecream/IceCreamActions";
import { connect } from 'react-redux';

function IceCreamContainer(props) {
    return ( 
        <div>
            <h2>Number of Icecreams - { props.numOfIcreCreams }</h2>
            <button onClick={ props.buyIceCream }>Buy Icecream</button>
        </div>
     );
}

/** State selector */
const mapStateToProps = (state) => {
    return {
        numOfIcreCreams: state.icecream.numOfIceCreams
    }
}

/** Action dispatcher */
const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

/** Connect the component to the redux state.
 * This will pass both numOfCakes and buyCake attributes
 * as props from the return abjects above.
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer);