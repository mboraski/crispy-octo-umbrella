import React from 'react';
import { connect } from 'react-redux';
import {
    StreamApp,
    NotificationDropdown,
    FlatFeed,
    NotificationFeed,
    Notification,
    StatusUpdateForm,
    UserBar,
} from 'react-activity-feed';
import { login } from '../../actions/userActions';
import 'react-activity-feed/dist/index.css';
import './StreamAppContainer.css';

class StreamAppContainer1 extends React.Component {
    render() {
        return (
            <StreamApp
                apiKey="7ybe5zzkwqdx"
                appId="97919"
                token={this.props.token}
            >
                <UserBar
                    avatar="https://placehold.it/100x100"
                    username="Dan the Fireman"
                    subtitle="extinguising fires since 1999"
                    timestamp="2018-09-19T07:44:11+00:00"
                    onClickUser={() => this.props.login()}
                />
                <div className="stream-app-container__notification">
                    <NotificationDropdown notify />
                </div>
                <StatusUpdateForm />
                <div className="stream-app-container__flat-feed">
                    <h2>Flat Feed</h2>
                    <hr />
                    <FlatFeed notify />
                </div>
                <div className="stream-app-container__notification-feed">
                    <h2>Notification Feed</h2>
                    <hr />
                    <NotificationFeed
                        Group={(props) => (
                            <Notification
                                {...props}
                                onClickUser={(user) => console.log(user)}
                                onClickNotification={(notification) =>
                                    console.log(notification)
                                }
                            />
                        )}
                    />
                </div>
            </StreamApp>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.userData.authToken,
        id: state.userData.id,
    };
};

export default connect(mapStateToProps, { login })(StreamAppContainer1);
