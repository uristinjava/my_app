
import './App.css';
import Message from './components/Message';

const headerText = 'Первое приложение'
const myName = 'Миха'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message headerText={headerText} name={myName} />
      </header>
    </div>
  );
}

export default App;
