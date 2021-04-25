import './App.css';
import {Header, Layout} from './components/Layout.components';
import CardGameBoard from './components/CardGameBoard';

function App() {
  return (
    <div className="App">
      <Header>High Low</Header>
      <Layout>
        <CardGameBoard />
      </Layout>
    </div>
  );
}

export default App;
