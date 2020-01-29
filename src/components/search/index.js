import React from 'react';
import { connect } from 'react-redux';
import { searchFlight } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'

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
          <input className='search-area search-bar' onChange={this.onChangeFlight} type="text" name="name" placeholder="Flight number" />
        </label>
        <Link className='search-area search-button' to={`/${searchText}`} onClick={this.search}><FaSearch /></Link>
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