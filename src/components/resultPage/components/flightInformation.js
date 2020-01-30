import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';
import { searchFlight, searchFlightSuccess, setSearchText, showSpinner } from '../../../redux/actions';
import TopRow from './topRow';
import DepartureArrivalRow from './departureArrivalRow';
import FooterRow from './footerRow';


class FlightInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    flightInformation: {}
  }

  componentDidMount() {
    console.log('here');
    const {showSpinnerDispatcher, setSearchTextDispatcher, flight } = this.props;
    showSpinnerDispatcher();
    setSearchTextDispatcher(flight);
    this.search();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.flight != this.props.flight){
      this.search();
    }
  }

  search = () => {
    const {showSpinner, searchFlightSuccessDispatcher,alert } = this.props;
    searchFlight(this.props.flight).then(flightInformation => {
      if(flightInformation.error) alert.show(flightInformation.error);
      this.setState({
        flightInformation
      });
      if(showSpinner) searchFlightSuccessDispatcher();
    });
  } 

  render() {
    const { flightInformation } = this.state;
    return (
      <>
        {flightInformation.flightNumber && (
          <div className='result-page'>
            <TopRow 
              flightNumber={flightInformation.flightNumber}
              status={flightInformation.status}
              origin={flightInformation.location.origin}
              destination={flightInformation.location.destination}
              duration={flightInformation.duration}
            />
            <DepartureArrivalRow 
              departureTerminal={flightInformation.terminal}
              departureDate={flightInformation.departureDate}
              arrivalTerminal={flightInformation.terminal}
              arrivalDate={flightInformation.arrivalDate}
            />
            <FooterRow 
              delay={flightInformation.delay}
              baggage={flightInformation.baggage}
            />
          </div>
        )}
      </>
    );
  }
}

FlightInformation.propTypes = {
  flight: PropTypes.string,
  showSpinner: PropTypes.bool,
  searchFlightSuccessDispatcher: PropTypes.func,
  setSearchTextDispatcher: PropTypes.func,
  showSpinnerDispatcher: PropTypes.func,
  alert: PropTypes.any
};

const mapStateToProps = (state) => {
  return {
    showSpinner: state.search.showSpinner
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchFlightSuccessDispatcher: () => dispatch(searchFlightSuccess()),
    setSearchTextDispatcher: (searchText) => dispatch(setSearchText(searchText)),
    showSpinnerDispatcher: () => dispatch(showSpinner()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withAlert()(FlightInformation));