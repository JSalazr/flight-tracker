import React from 'react';
import { connect } from 'react-redux';
import { searchFlight } from '../../../redux/actions';
import TopRow from './topRow';
import DepartureArrivalRow from './departureArrivalRow';
import FooterRow from './footerRow';


class FlightInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { flight, flightInformation} = this.props;
    if(flight !== flightInformation.flightNumber){
      this.search();
    }
  }

  search = () => {
    this.props.searchFlightDispatcher(this.props.flight);
  }

  render() {
    const { flightInformation } = this.props;
    return (
      <div className='result-page'>
        {flightInformation.flightNumber && (
          <div>
            <TopRow 
              flightNumber={flightInformation.flightNumber}
              status={flightInformation.status}
              origin={flightInformation.location.origin}
              destination={flightInformation.location.destination}
              duration={flightInformation.duration}
            />
            <DepartureArrivalRow 
              departureTerminal={flightInformation.terminal}
              departureTime={flightInformation.arrivalTime}
              departureDate={flightInformation.date}
              arrivalTerminal={flightInformation.terminal}
              arrivalTime={flightInformation.arrivalTime}
              arrivalDate={flightInformation.date}
            />
            <FooterRow 
              delay={flightInformation.delay}
              baggage={flightInformation.baggage}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    flightInformation: state.search.flightInformation
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchFlightDispatcher: (searchText) => dispatch(searchFlight(searchText))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightInformation);