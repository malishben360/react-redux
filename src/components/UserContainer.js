import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers]);

    return userData.isLoading ? (<p> Loading... </p>) 
        : userData.error ? (<h2>{ userData.error }</h2>)
        : (
            <div>
                <h2>Active Users</h2>
                {
                    userData && 
                    userData.users && 
                    userData.users.map((user) => <p key={user.id}>{ user.username } - { user.name }</p>)
                }
            </div>
            );
}

/** User state selector */
const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}

/** User action dispatcher */
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer);