import youya1 from '../images/youya1.jpeg';
import youya2 from '../images/youya2.jpeg';
import youya4 from '../images/youya4.jpeg';

export default function List(){
    let arr = [
        {
            img:youya1,
            point: 5,
            nation: "Japan"
        },
        {
            img:youya2,
            point: 4.7,
            nation: "China"
        },
        {
            img:youya4,
            point: 4.4,
            nation: "Japan"
        }
    ];


    let singleInfo = function({img,point,nation}){
        return (
            <div>
                <div>
                    <i class="fa-solid fa-heart"></i>
                </div>
                <img src={ img } alt="youya" className='youyaImage'/>
                <div className="description">
                    <i className="fa-solid fa-star"></i>
                    <span>{ point }(3)-{ nation }</span>
                    <p>Life lesson with youya</p>
                    <h5>From 100USD/night</h5>
                </div>
            </div>
        )
        
    }
    
    let result = arr.map((item)=>singleInfo(item));
    
    
    return <div className="imageSection">{ result }</div>;
   
}