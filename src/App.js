import Logo from './logo.svg';
import Vid from './music.mp4';
import './App.css';

function App() {
  return (
    <div className="App">   
    
      <div style={{border: "solid 1px black", maxwidth: 100}}>

    <h1 className="title red">Your name here</h1>
   
    <br />
   
    <img src={Logo} alt="logo src" />
   
    <br />
   
    <img src={process.env.PUBLIC_URL + '../logo192.png'}  alt="logo public"/> 
   
   </div>
  
<video src={Vid} width={320} height={240} controls="controls"   type="video/mp4"/>
   </div>
      
 
   
  );
}

export default App;