import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import { withAlert } from 'react-alert';
import { setSearchText, cleanStore, showSpinner } from '../../redux/actions';


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

  componentDidUpdate(prevProps) {
    if(prevProps.searchText != this.props.searchText){
      this.setState({
        searchText: this.props.searchText
      });
    }

  }

  search = () => {
    if(this.state.searchText === '') this.props.alert.show('Please insert a flight number')
    this.props.showSpinnerDispatcher();
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
      window.location.href = `/${this.state.searchText}`;
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
          <input className='search-area search-bar' onChange={this.onChangeFlight} type="text" name="name" placeholder="Flight number" value={searchText} />
        </label>
        <Link className='search-area search-button' to={`/${searchText}`} onClick={this.search}><FaSearch /></Link>
      </>
    );
  }
}

SearchForm.propTypes = {
  searchText: PropTypes.string,
  setSearchTextDispatcher: PropTypes.func,
  showSpinnerDispatcher: PropTypes.func,
  cleanStoreDispatcher: PropTypes.func,
  alert: PropTypes.any
};

const mapStateToProps = (state) => {
  return {
    searchText: state.search.searchText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTextDispatcher: (searchText) => dispatch(setSearchText(searchText)),
    showSpinnerDispatcher: () => dispatch(showSpinner()),
    cleanStoreDispatcher: () => dispatch(cleanStore())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withAlert()(SearchForm)));