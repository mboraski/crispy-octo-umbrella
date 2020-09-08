import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        if (!this.props.seriesHero) {
            return (
                <h1>{`Hello!  This is the <App /> component!  Please render your UI in .app__body below`}</h1>
            );
        } else {
            return <div></div>;
        }
    }
}

const mapStateToProps = (state) => {
    const { seriesHero } = state.seriesData;
    return {
        seriesHero,
    };
};

export default connect(mapStateToProps)(Header);
