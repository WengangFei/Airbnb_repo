export default function List({ data }){

    let singleInfo = function({id,img,point,nation}){
        return (
            <div key={ id }>
                <div>
                    <i className="fa-solid fa-heart"></i>
                </div>
                <img src={ img } alt="youya" className='youyaImage'/>
                <div className="description">
                    <i className="fa-solid fa-star"></i>
                    <span className="grey">{ point } - { nation }</span>
                    <p>Life lesson with youya</p>
                    <h5>From 100USD/night</h5>
                </div>
            </div>
        )
        
    }
    
    let result = data.map((item)=>singleInfo(item));
    
    
    return <div className="imageSection">{ result }</div>;
   
}