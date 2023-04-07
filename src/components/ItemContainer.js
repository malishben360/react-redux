import { connect } from 'react-redux';
import {buyCake, buyIceCream} from '../redux';

function ItemContainer(props) {
    return ( 
        <div>
            <h2>Items - { props.numOfItem }</h2>
            <button onClick={()=> props.buyItem()}>Buy Item</button>
        </div>
     );
}

/** Dynamic selector base on ownProps */
const mapStateToProps = (state, ownProps) => {
    const numOfItem = ownProps.cake
    ? state.cake.numOfCakes
    : state.icecream.numOfIceCreams;
    return {
        numOfItem
    }
}

/** Dynamic action dispatcher base on ownProps */
const mapDispatchToProps = (dispatch, ownProps) => {
    const buyItem = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
    return {
        buyItem
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer);