import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeroImage from '../HeroImage/HeroImage';
import SeriesTitle from '../SeriesTitle/SeriesTitle';
import EpisodeList from '../EpisodeList/EpisodeList';
import './SeriesDataContainer.css';

class SeriesDataContainer extends Component {
    render() {
        const {
            seriesHero,
            seriesTitle,
            episodeList,
            isFetching,
            error,
        } = this.props;
        console.log('this.props: ', this.props);

        const renderable = !isFetching && !error && seriesHero.length;

        if (renderable) {
            return (
                <div>
                    <HeroImage seriesHero={seriesHero} />
                    <div className="series-details-wrapper">
                        <SeriesTitle seriesTitle={seriesTitle} />
                        <EpisodeList episodeList={episodeList} />
                    </div>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

const mapStateToProps = (state) => {
    const {
        seriesHero,
        seriesTitle,
        episodeList,
        isFetching,
        error,
    } = state.seriesData;
    return {
        seriesHero,
        seriesTitle,
        episodeList,
        isFetching,
        error,
    };
};

export default connect(mapStateToProps)(SeriesDataContainer);
