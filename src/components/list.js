import youya1 from '../images/youya1.jpeg';
import youya2 from '../images/youya2.jpeg';
import youya4 from '../images/youya4.jpeg';

export default function List(){
    let arr = [youya1,youya2,youya4];
    let singleInfo = function(image){
        return (
            <>
                <div>
                    <i class="fa-solid fa-star"></i>
                </div>
                <img src={ image } alt="youya" className='youyaImage'/>

            </>
        )
        
    }
    
    let result = arr.map((item)=>singleInfo(item));
    
    
    return result;
}