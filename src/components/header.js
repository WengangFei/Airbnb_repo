import logo from '../images/logo.png';

export default function Header(){
    let time = ()=>{
        let now = new Date().getHours();
        if(now < 12) return 'Morning';
        else if(now > 12 && now < 18)  return 'Afternoon';
        else return 'Night';
    }


    return (
        
        <div className="App-header">
            <img src={ logo } className="logo" alt="logo" />  
            <h3 className="greet">Good { time() }</h3>
        </div>
      
        
    );
}