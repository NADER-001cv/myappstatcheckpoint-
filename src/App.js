import  React,{Component}  from 'react';
import './App.module.css';
import Time from './Time';
import ShowProfile from './ShowProfile';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

class App extends Component{
   state={
     name:'Nader Chargui',
     bio: 'learning  in gomycode',
     img: '/images/man-01.png',
     profession: 'full stack developper',
   }

    componentDidMount() {
  // alert('hello')
   console.log('componentDidMount')
 }
componentDidUpdate(){
  // alert('change')
  console.log('componentDidUpdate')
}



render(){
  var   name =  this.state.name ;
function  Handleprofile(name){
           
  return alert("This is me " + name + ".")
}
    
  
       return(


        <div  >

          <h1 > hy every one  this is me <span>{ this.state.name }</span></h1>
          <div>

          <img   src={ this.state.img }  style={{width:'220px',height:'220px'}}/>
          </div>
          <div  style={{ textAlign:'center',marginTop:'-100px' }} className="block__profile">
            <div>
            <p>
           {this.state.bio} 
            </p>
            <p>
                {this.state.profession}
            </p>
            </div>
          </div>
          <div>
            <button onClick={Handleprofile(name)} style={{ textAlign:'center',marginTop:'20px' }} >
              show profile
            </button>
          </div>
          <Time   />
          <ShowProfile />
        </div>
       )


  }
  
   
}
export default App;
