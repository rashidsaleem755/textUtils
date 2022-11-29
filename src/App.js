
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import './App.css';
function App() {
  return (
    <>
      <Navbar title = "TextUtils" AboutText = "About Text"/>
      <TextForm Heading = "Enter your  text to Anlyze"/>
      {/* <About/> */}
    </>
    );
}

export default App;
