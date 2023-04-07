import { useState } from 'react';
import { buyNewCake } from '../redux';
import { connect } from 'react-redux';

function NewCakeContainer(props) {
    const [num, setNumber] = useState(1);
    return ( 
        <div>
            <h2>Number of Cakes - { props.numOfNewCakes }</h2>
            <input type="number" onChange={ (e)=> setNumber(e.target.value)} placeholder="1"/>
            <button onClick={()=> props.buyNewCake(num)}>Buy { num } Cake</button>
        </div>
     );
}

/** State selector */
const mapStateToProps = (state) => {
    return {
        numOfNewCakes: state.newcake.numOfNewCakes
    }
}

/** Action dispatcher */
const mapDispatchToProps = (dispatch) => {
    return {
        buyNewCake: (num) => dispatch(buyNewCake(num))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer);