import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import HomeScreen from './screens/HomeScreen'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={HomeScreen} exact />
    </Router>
  )
}

export default App
