
import './App.css';
import ResortListingContainer from './assets/components/ResortListingContainer';
import data from './data/data';


function App() {
  
  return( 
  <>
  <h1>Resorts Lite</h1>
  <ResortListingContainer data={data}/>
  </> 
  
    
  );
}

export default App
