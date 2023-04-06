import { buyCake } from "../redux";
import { connect } from "react-redux";

function CakeContainer(props) {
    return ( 
        <div>
            <h2>Number of Cakes - { props.numOfCakes }</h2>
            <button onClick={ props.buyCake }>Buy Cake</button>
        </div>
     );
}

/** State selector function */
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}
/** Action dispatcher */
const mapDispatchToProps = (dispatch) =>{
    return {
        buyCake: () => dispatch(buyCake())
    }
}

/** Connect the component to the redux state.
 * This will pass both numOfCakes and buyCake attributes
 * as props from the return abjects above.
 */


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);