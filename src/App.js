import './App.css';
import React, {useState, useEffect} from 'react';
import Userlist from './components/Userlist/Userlist';
import Userdata from './components/Userlist/Userdata';


function App(){

  const[data, SetData] = useState([])
  const[active, Setactive] = useState(false)
  const[newdata, Setnewdata] = useState([])
  const[error, Seterror] = useState(false)



  useEffect(() => {
    try{
    const fetchInfo = async () => {
    const newdata = await fetch('https://mocki.io/v1/aff8652e-63be-4beb-8223-f2d281a01245');
    const displaydata = await newdata.json();
    SetData(displaydata)
  }
  fetchInfo();
}
catch(error){
  Seterror(!error)
}
 
  }, [])

  const handleClick = (id) => {
    Setactive(!active)
   const newset = data.find(item => item.id == id )
   Setnewdata(newset)
  }

  const returnBack = () => {
    Setactive(!active)
  }


  return (
    <>
      { error ? <div>Something is wrong</div> : 
      
      <>
            {!active &&  <Userlist data={data} handleClick={handleClick}  /> }
            { active && <Userdata data={data} newdata={newdata} returnBack={returnBack}/> }
      </>

      }
  
    </>
  );
};

export default App;
