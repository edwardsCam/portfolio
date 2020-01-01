import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainScreen from 'screens/main'
import styles from './App.scss'

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Router>
          <div className={styles.content}>
            <Route path="/" component={MainScreen} />
          </div>
        </Router>
      </div>
    )
  }
}
