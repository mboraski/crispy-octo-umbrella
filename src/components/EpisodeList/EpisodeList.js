import React from 'react';

const EpisodeList = (props) => {
    const list = props.episodeList.map((episode) => {
        return <li key={episode.episodeId}>{episode.episodeTitle}</li>;
    });
    return (
        <div>
            <div>First Twenty (or less) Episodes:</div>
            <ol>{list}</ol>
        </div>
    );
};

export default EpisodeList;
