import React from 'react';
import { connect } from 'react-redux';
import { searchFlight } from '../../redux/actions';
import { Link } from 'react-router-dom';

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
    const { searchText } = this.state;
    return (
      <>
        <label>
          <div className='search-label'>
            Flight Tracker
          </div>
          <input className='search-bar' onChange={this.onChangeFlight} type="text" name="name" />
        </label>
        <Link to={`/${searchText}`} onClick={this.search}>Search</Link>
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