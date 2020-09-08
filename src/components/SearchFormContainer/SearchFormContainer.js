import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSeriesData } from '../../actions/seriesDataActions';
import { updateSearchTerm } from '../../actions/searchFormActions';

class SearchFormContainer extends Component {
    onInputChange = (event) => {
        this.props.updateSearchTerm(event.target.value);
    };

    onSearchSubmit = (event) => {
        event.preventDefault();

        this.props.fetchSeriesData();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSearchSubmit}>
                    <div>
                        <label>Series Id:</label>
                        <input
                            type="text"
                            value={this.props.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { term } = state;
    return {
        term,
    };
};

export default connect(mapStateToProps, { fetchSeriesData, updateSearchTerm })(
    SearchFormContainer
);
