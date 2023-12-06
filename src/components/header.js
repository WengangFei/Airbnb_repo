import logo from '../images/logo.png';

export default function Header(){
    return (
        
        <div className="App-header">
            <img src={ logo } className="logo" alt="logo" />
            <hr className='line'></hr>
        </div>
      
        
    );
}