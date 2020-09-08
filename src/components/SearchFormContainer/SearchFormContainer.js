import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSeriesData } from '../../actions/seriesDataActions';
import { updateSearchTerm } from '../../actions/searchFormActions';
import './SearchFormContainer.css';

class SearchFormContainer extends Component {
    onInputChange = (event) => {
        this.props.updateSearchTerm(event.target.value);
    };

    onSearchSubmit = (event) => {
        event.preventDefault();

        const validEntry = this.validateEntry();

        if (validEntry) {
            this.props.fetchSeriesData();
        }
    };

    validateEntry = () => {
        const term = this.props.term;
        if (this.props.seriesId === term) {
            return false;
        } else if (!term.length) {
            return false;
        } else if (!RegExp(/^\d+$/).test(term)) {
            return false;
        } else {
            return true;
        }
    };

    determineSubmitMessage = () => {
        const { isFetching, error } = this.props;
        let submitMessage = '';

        if (error) {
            submitMessage = 'Not Found';
        } else if (isFetching) {
            submitMessage = 'THINKING!';
        }

        return submitMessage;
    };

    render() {
        const submitMessageClass = this.props.error
            ? 'search-form__submit-message--danger'
            : 'search-form__submit-message';
        return (
            <div className="search-form-container">
                <form className="search-form" onSubmit={this.onSearchSubmit}>
                    <div className="search-form__input-wrapper">
                        <label>Series Id:</label>
                        <input
                            type="text"
                            className="search-form__input"
                            value={this.props.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                    <button
                        className="search-form__button"
                        onClick={this.onSearchSubmit}
                    >
                        GET SERIES DATA
                    </button>
                </form>
                <div className={submitMessageClass}>
                    {this.determineSubmitMessage()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('search form map state: ', state);
    return {
        term: state.searchForm.term,
        isFetching: state.seriesData.isFetching,
        error: state.seriesData.error,
    };
};

export default connect(mapStateToProps, { fetchSeriesData, updateSearchTerm })(
    SearchFormContainer
);
