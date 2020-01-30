import React from 'react';
import { connect } from 'react-redux';
import { searchFlight } from '../../../redux/actions';
import { FaPlaneDeparture } from 'react-icons/fa'

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
            <div className='top-row'>
              <div className='top-row-info'>
                <div className='top-row-info-title'>FLIGHT</div>
                {flightInformation.flightNumber}
              </div>
              <div className='top-row-info'>
                <div className='top-row-info-title'>STATUS</div>
                {flightInformation.status}
              </div>
              <div className='top-row-info'>
                <div className='top-row-info-title'>DESTINATION</div>
                {flightInformation.location.origin} TO {flightInformation.location.destination}
              </div>
              <div className='top-row-info'>
                <div className='top-row-info-title'>DURATION</div>
                {flightInformation.duration}
              </div>
            </div>
            <div className='departure-arrival-container'>
              <div className='departure-arrival-row'>
                <div className='departure-arrival-row-info'>
                  <div className='departure-arrival-row-info-title'>DEPARTURE GATE</div>
                  {flightInformation.terminal}
                </div>
                <div className='departure-arrival-row-info'>
                  <div className='departure-arrival-row-info-title'>DEPARTURE</div>
                  {flightInformation.arrivalTime}
                </div>
                <div className='departure-arrival-row-info'>
                  <div className='departure-arrival-row-info-title'>DEPARTURE DATE</div>
                  {flightInformation.date}
                </div>
              </div>
              <div className='departure-arrival-row'>
                <div className='departure-arrival-row-info'>
                  <div className='departure-arrival-row-info-title'>ARRIVAL GATE</div>
                  {flightInformation.terminal}
                </div>
                <div className='departure-arrival-row-info'>
                  <div className='departure-arrival-row-info-title'>ARRIVAL</div>
                  {flightInformation.arrivalTime}
                </div>
                <div className='departure-arrival-row-info'>
                  <div className='departure-arrival-row-info-title'>ARRIVAL DATE</div>
                  {flightInformation.date}
                </div>
              </div>
              <div className='plane-icon'>
                <FaPlaneDeparture />
              </div>
            </div>
            <div className='footer-row'>
              <div className='footer-row-info'>
                <div className='footer-row-info-title'>DELAY</div>
                {flightInformation.delay}
              </div>
              <div className='footer-row-info'>
                <div className='footer-row-info-title'>BAGGAGE TERMINAL</div>
                {flightInformation.baggage}
              </div>
            </div>
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