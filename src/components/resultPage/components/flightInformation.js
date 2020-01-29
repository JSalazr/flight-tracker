import React from 'react';
import { connect } from 'react-redux';
import { searchFlight } from '../../../redux/actions';

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
      <>
        {flightInformation.flightNumber && (
        <ul>
          <li>{flightInformation.flightNumber}</li>
          <li>{flightInformation.location.origin}</li>
          <li>{flightInformation.location.destination}</li>
          <li>{flightInformation.location.distance}</li>
          <li>{flightInformation.date}</li>
          <li>{flightInformation.arrivalTime}</li>
          <li>{flightInformation.delay}</li>
          <li>{flightInformation.terminal}</li>
          <li>{flightInformation.baggage}</li>
        </ul>)}
      </>
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