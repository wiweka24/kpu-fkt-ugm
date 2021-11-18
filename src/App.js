import GlobalStyle from './globalStyle';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Beranda from './pages/Beranda';
import TentangKPU from './pages/TentangKPU'

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle/>
        <Header/>
        <ScrollToTop/>
        <Switch>
          <Route exact path="/" component={Beranda} />
          <Route path="/tentang" component={TentangKPU} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
