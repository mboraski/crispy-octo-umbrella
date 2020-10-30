// import React from 'react';
// import { connect } from 'react-redux';
// import { FlatFeed, LikeButton, CommentList, CommentField, Activity } from 'react-activity-feed';
// import 'react-activity-feed/dist/index.css';
//
// class MainFeedContainer extends React.Component {
//     render() {
//         return (
//             <FlatFeed
//               options={ {reactions: { recent: true } } }
//               notify
//               Activity={(props) =>
//                   <Activity {...props}
//                     Footer={() => (
//                       <div style={ {padding: '8px 16px'} }>
//                         <LikeButton {...props} />
//                         <CommentField
//                           activity={props.activity}
//                           onAddReaction={props.onAddReaction} />
//                         <CommentList activityId={props.activity.id} />
//                       </div>
//                     )}
//                   />
//                 }
//              />
//         );
//     }
// }
//
// const mapStateToProps = (state) => {
//     return {
//         token: state.userData.authToken,
//     };
// };
//
// export default connect(mapStateToProps, {})(MainFeedContainer);
