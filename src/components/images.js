import youya1 from '../images/youya1.jpeg';
import youya2 from '../images/youya2.jpeg';
import youya3 from '../images/youya3.jpeg';
import youya4 from '../images/youya4.jpeg';


export default function Images(){
    return (
        <div className="images">
            <img src={ youya1 } alt='youya' className='youya'/>
            <img src={ youya2 } alt='youya' className='youya'/>
            <img src={ youya3 } alt='youya' className='youya'/>
            <img src={ youya4 } alt='youya' className='youya'/>
        </div>
    )
}