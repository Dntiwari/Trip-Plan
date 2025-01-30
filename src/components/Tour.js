import Card from './Card'
import './Tour.css';

function Tour({tours,removeTour}){
    return(
        <div className='container'>
            <div>
                <h2 className='title'>Plan with Love</h2>
            </div>
            
            <div className='cards'>
            {
              tours?.map((tour) => {
               return <Card {...tour} removeTour={removeTour}/>
               })
            }
            </div>
        </div>
    );
}
export default Tour;