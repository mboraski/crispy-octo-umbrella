import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../../actions/userActions';
import './HeaderContainer.css';

class HeaderContainer extends Component {
    onAuthenticationClick = () => {
        const { loginState } = this.props;

        if (loginState) {
            this.props.logout();
        } else {
            this.props.login();
        }
    };
    render() {
        return (
            <nav className="header">
                <h1>{`Conscious Social Connection`}</h1>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    const { loginState } = state.userData;
    return {
        loginState,
    };
};

export default connect(mapStateToProps, { login, logout })(HeaderContainer);
