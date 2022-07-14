import {RecoilRoot } from 'recoil'
import { Header } from './components/header';
import { HomePage } from "./pages";


function App() {
  return (
    <RecoilRoot>
      <Header />
      <div className='body'>
      <HomePage />
      </div>
    </RecoilRoot>
  );
}

export default App;
