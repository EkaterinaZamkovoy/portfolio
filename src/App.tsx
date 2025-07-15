import './App.css';
import { Title } from './components';
import { Header, MainBanner } from './widgets';

function App() {
  return (
    <>
      <Header />
      <MainBanner />
      <Title title='Skills' />
    </>
  );
}

export default App;
