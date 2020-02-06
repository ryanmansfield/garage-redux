import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { selectChannel, fetchMessages } from '../actions/index';

class CarsIndex extends Component {
  render() {
    return (
       <div className="list-container">
        {this.props.cars.map((car) => {
          return(
            <div key={car.id} className="car-smallad">
              <link rel="stylesheet" href="#"/>
              <img src="" alt="" className="car-logo"/>
              <div className="car-details">
                <span>{car.brand} - {car.model}</span>
                <ul>
                  <li>{car.owner}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    cars: state.cars,
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({  }, dispatch)
// }

export default connect(mapStateToProps)(CarsIndex);


