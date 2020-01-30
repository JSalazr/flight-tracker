import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchFlight, setSearchText, cleanStore } from '../../redux/actions';
import { Link, withRouter } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    searchText: this.props.searchText
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleEnterPress);
  }

  search = () => {
    this.props.searchFlightDispatcher(this.state.searchText);
    this.props.setSearchTextDispatcher(this.state.searchText);
  }

  goHome = () => {
    this.props.cleanStoreDispatcher();
  }

  onChangeFlight = (event) => {
    this.setState({
      searchText: event.target.value
    });
  }

  handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      this.search();
      this.props.history.push(`/${this.state.searchText}`)
    }
  }

  render() {
    const { searchText } = this.state;
    return (
      <>
        <label>
          <Link className='search-label' to={'/'} onClick={this.goHome}>
            Flight Tracker
          </Link>
          <input className='search-area search-bar' onChange={this.onChangeFlight} type="text" name="name" placeholder="Flight number" />
        </label>
        <Link className='search-area search-button' to={`/${searchText}`} onClick={this.search}><FaSearch /></Link>
      </>
    );
  }
}

SearchForm.propTypes = {
  searchText: PropTypes.string,
  searchFlightDispatcher: PropTypes.func,
  setSearchTextDispatcher: PropTypes.func,
  cleanStoreDispatcher: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    searchText: state.search.searchText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchFlightDispatcher: (searchText) => dispatch(searchFlight(searchText)),
    setSearchTextDispatcher: (searchText) => dispatch(setSearchText(searchText)),
    cleanStoreDispatcher: () => dispatch(cleanStore())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm));