import React from 'react';
import {
    Chat,
    Channel,
    ChannelHeader,
    Attachment,
    Window,
} from 'stream-chat-react';
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

class MyAttachmentComponent extends React.Component {
    render() {
        const { attachments } = this.props;
        attachments.forEach((attachment) => {
            if (attachment.type === 'product') {
                return (
                    <div className="product">
                        Product:
                        <a
                            href={attachment.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={attachment.image}
                                alt="img"
                                height={'100px'}
                            />
                            <br />
                            {attachment.name}
                        </a>
                    </div>
                );
            }
        });
        return (
            <div>
                testing
                <Attachment {...this.props} />
            </div>
        );
    }
}

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

const attachments = [
    {
        type: 'product',
        name: 'iPhone',
        url: 'https://goo.gl/ppFmcR',
        image: 'https://goo.gle/J2gQpi',
    },
];

channel.sendMessage({
    text: 'Your selected product is out of stock',
    attachments: attachments,
});

const StreamChatContainer = () => (
    <Chat client={chatClient} theme={'livestream dark'}>
        <Channel
            channel={channel}
            Attachment={MyAttachmentComponent}
            message={MessageLivestream}
        >
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
