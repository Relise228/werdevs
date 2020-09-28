import React from 'react';
import {connect} from 'react-redux';
import HomePage from './HomePage';
import {setChosenDate} from '../../redux/home-reducer';
import moment from 'moment';

const HomePageContainer = ({chosenDate, setChosenDate}) => {
  const dateArray = moment(chosenDate)
    .format('MMMM Do dddd YYYY, h:mm:ss a')
    .split(' ');
  const day = dateArray[1] + ' ' + dateArray[2];
  const month = dateArray[0];

  return (
    <HomePage
      chosenDate={chosenDate}
      setChosenDate={setChosenDate}
      day={day}
      month={month}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    chosenDate: state.homePage.chosenDate,
  };
};

export default connect(mapStateToProps, {setChosenDate})(HomePageContainer);
