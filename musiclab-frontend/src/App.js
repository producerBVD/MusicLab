import './App.css';
import { ReactComponent as Logo } from './components/imgs/Logo.svg'; // Импорт SVG как компонент
import LoginForm from './components/login'; // Исправленный путь с правильным регистром

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />

        <LoginForm />
      </header>
    </div>
  );
}

export default App;