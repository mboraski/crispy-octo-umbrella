import React from 'react';
import './EpisodeList.css';

const EpisodeList = (props) => {
    const list = props.episodeList.map((episode) => {
        return <li key={episode.episodeId}>{episode.episodeTitle}</li>;
    });
    return (
        <div className="episode-list-wrapper">
            <div className="episode-list-title">
                First Twenty (or less) Episodes:
            </div>
            <ol className="episode-list">{list}</ol>
        </div>
    );
};

export default EpisodeList;
