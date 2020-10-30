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

import 'react-activity-feed/dist/index.css';

class StreamAppContainer2 extends React.Component {
    render() {
        return (
            <StreamApp
                apiKey="z4q3wx2b4jve"
                appId="98339"
                token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.XwUo_eb-rSe0LXl54R-_F6Et4ZAMlEDb6Y_ySqlzFko"
            >
                <UserBar
                    avatar="https://placehold.it/100x100"
                    username="Dan the Fireman"
                    subtitle="extinguising fires since 1999"
                    timestamp="2018-09-19T07:44:11+00:00"
                    onClickUser={() => console.log('clicked the user')}
                />
                <StatusUpdateForm />
                <NotificationDropdown notify />
                <FlatFeed notify />
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

export default connect(mapStateToProps, {})(StreamAppContainer2);
