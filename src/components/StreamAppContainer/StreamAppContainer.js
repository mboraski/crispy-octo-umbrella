import React from 'react';
import { connect } from 'react-redux';
import { StreamApp, NotificationDropdown, FlatFeed } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

class StreamAppContainer extends React.Component {
    render() {
        return (
            <StreamApp
                apiKey="7ybe5zzkwqdx"
                appId="97919"
                token={this.props.token}
            >
                <NotificationDropdown notify />
                <FlatFeed notify />
            </StreamApp>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.userData.authToken,
    };
};

export default connect(mapStateToProps, {})(StreamAppContainer);
