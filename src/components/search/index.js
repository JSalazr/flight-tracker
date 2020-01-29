import React from 'react';
import { connect } from 'react-redux';
import { searchFlight } from '../../redux/actions';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    searchText: this.props.searchText
  }

  search = () => {
    this.props.searchFlightDispatcher(this.state.searchText);
  }

  onChangeFlight = (event) => {
    this.setState({
      searchText: event.target.value
    });
  }

  render() {
    return (
      <>
        <label>
          Flight:
          <input onChange={this.onChangeFlight} type="text" name="name" />
        </label>
        <button onClick={this.search}>
          Search
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchText: state.search.searchText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchFlightDispatcher: (searchText) => dispatch(searchFlight(searchText))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);