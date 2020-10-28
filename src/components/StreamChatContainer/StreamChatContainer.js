import React from 'react';
import {
    Chat,
    Channel,
    ChannelHeader,
    Thread,
    Window,
} from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
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

const channel = chatClient.channel('messaging', 'goodevs', {
    image:
        'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
    name: 'Talk about Go',
});

const StreamChatContainer = () => (
    <Chat client={chatClient} theme={'messaging light'}>
        <Channel channel={channel}>
            <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput />
            </Window>
            <Thread />
        </Channel>
    </Chat>
);

export default StreamChatContainer;
