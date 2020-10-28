import React from 'react';
import { Chat, Channel, ChannelHeader, Window } from 'stream-chat-react';
import {
    MessageList,
    MessageInput,
    MessageLivestream,
    MessageInputSmall,
    Thread,
} from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('ycyq43kqr2em');
const userToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic3dlZXQtaGF6ZS03In0.pbPehrBTUzAdZGq5ERdN-xCV-P2cqI-2k71uHUiyLjo';

chatClient.setUser(
    {
        id: 'sweet-haze-7',
        name: 'Sweet haze',
        image:
            'https://getstream.io/random_png/?id=sweet-haze-7&name=Sweet+haze',
    },
    userToken
);

const channel = chatClient.channel('livestream', 'spacex', {
    image: 'https://goo.gle/Zefkbx',
    name: 'SpaceX launch discussion',
});

const StreamChatContainer = () => (
    <Chat client={chatClient} theme={'livestream dark'}>
        <Channel channel={channel} message={MessageLivestream}>
            <Window hideOnThread>
                <ChannelHeader live />
                <MessageList />
                <MessageInput Input={MessageInputSmall} focus />
            </Window>
            <Thread fullWidth />
        </Channel>
    </Chat>
);

export default StreamChatContainer;
