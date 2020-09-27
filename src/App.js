import React from 'react';
import {Route} from 'react-router-dom';
import styles from './App.module.scss';
import AboutPage from './components/AboutPage/AboutPage';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route path='/about' component={AboutPage} />
    </div>
  );
}

export default App;
