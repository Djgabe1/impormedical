import './category.css'
import {Accessible, Masks, Bathroom, NordicWalking, AirlineSeatReclineExtra} from '@mui/icons-material'

export default function Category() {

    
    return (
        <div class="carouselCategory">
            <button className='carouselButton previous' id='previous'> {"<"} </button>
            <div className="carousel__Item">
                <div className='containerItem'>
                    <img src="img/3.png" alt="" />
                    <span className='carouselItem'>Seguridad en el baño</span>
                    <Bathroom/>
                </div>
                <div className='containerItem'>
                    <img src="img/4.jpg" alt="" />
                    <span className='carouselItem'>Tapabocas</span>
                    <Masks/>
                </div>
                <div className='containerItem'>
                    <img src="img/1.png" alt="" />
                    <span className='carouselItem'>Sillas de Ruedas</span>
                    <Accessible/>
                    </div>
                 <div className='containerItem'>
                    <img src="img/5.jpg" alt="" />
                    <span className='carouselItem'>Ayudas para la marcha</span>
                    <NordicWalking/>
                    </div>
                <div className='containerItem'>
                    <img src="img/7.jpg" alt="" />
                    <span className='carouselItem'>Confort</span>
                    <AirlineSeatReclineExtra />
                    </div>
            </div>
            <button className='carouselButton next' id='next'> {'>'} </button>
        </div>

    )
}
