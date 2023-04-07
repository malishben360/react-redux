import { useState } from 'react';
import { buyCake } from '../redux';
import { connect } from 'react-redux';

function NewCakeContainer(props) {
    const [num, setNumber] = useState(1);
    return ( 
        <div>
            <h2>Number of New Cakes - { props.numOfCakes }</h2>
            <input type="number" onChange={ (e)=> setNumber(e.target.value)} placeholder="1"/>
            <button onClick={()=> props.buyCake(num)}>Buy { num } Cake(s)</button>
        </div>
     );
}

/** State selector */
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

/** Action dispatcher */
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (num) => dispatch(buyCake(num))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer);