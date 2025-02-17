import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import FoundersNote from './components/FoundersNote';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element = {<Layout />}>
        <Route index element={<About />} />
        <Route path='foundersnote' element={<FoundersNote />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
