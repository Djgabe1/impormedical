/* eslint-disable jsx-a11y/anchor-is-valid */
import './topbar.css'
import {Search, ShoppingCart, Dehaze, Accessible, CleanHands, PersonPin,  HealthAndSafety} from '@mui/icons-material'
import {Link} from 'react-router-dom';

export default function Topbar() {
    return (
        <div className='topbarContainer'>
               <div className="topbarHigher">
                   <div className="topbarHigherLeft">
                        <img src="img/logo.png" alt="" className='leftLogo' />
                   </div>
                   <div className="topbarHigherCenter">
                        <div className="searchbar">
                        <input placeholder='¿QUÉ ESTÁS BUSCANDO? ESCRÍBELO AQUI...' className="searchInput" />
                        <Search className='searchIcon' />
                        </div>
                   </div>
                   <div className="topbarHigherRight">
                      <div className="topbarRightLinks">
                          <div className="topbarRightContainer">
                          <Link to='' style={{textDecoration:'none'}} >
                          <span className="topbarRightLink">MIS PEDIDOS</span>
                          </Link>
                          </div>
                          <div className="topbarRightContainerAliado">
                          <Link to=''  style={{textDecoration:'none'}}>
                            <span className="topbarRightLink1" >HOLA ALIAD@ <br /></span>
                            <span className='topbarRightLink2'> <a href=""> INGRESA</a> </span>
                          </Link>
                          </div>
                          <div className="topbarRightContainerCar">
                          <Link to='/' style={{textDecoration:'none'}}>
                          <ShoppingCart className='searchIconCar' />
                            <span className='toggle'>0</span>
                          <span className='topbarRightLinkCar'>CARRITO</span>
                          </Link>
                          </div>
                      </div>
                   </div>
               </div>
               <div className="topbarLower">
                    <div className="topbarLowerLeft">
                        <Dehaze className='menuBars' />
                    </div>
                    <div className="topbarLowerRight">
                        <div className="linkLowerRight">
                            <Accessible className='lowerIcon'/> 
                            <span className='lowerText'>MOVILIDAD</span>
                        </div>
                        <div className="linkLowerRight">
                            <HealthAndSafety className='lowerIcon'/>
                            <span className='lowerText'>CUIDAD EN EL HOGAR</span>
                        </div>
                        <div className="linkLowerRight">
                            <PersonPin className='lowerIcon'/>
                            <span className='lowerText'>PROFESIONALES DE LA SALUD</span>
                        </div>
                        <div className="linkLowerRight">
                        <CleanHands className='lowerIcon' />
                        <span className='lowerText'>TAPABOCAS Y DESINFECCIÓN</span>
                        </div>
                    </div>
               </div>
           </div>

    )
}
