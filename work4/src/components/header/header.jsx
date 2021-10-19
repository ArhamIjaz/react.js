import React from 'react'
import './header.css'
import Carousel from 'react-bootstrap/Carousel'  
import Image1 from '../../Images/espslider.jpg'
import Image2 from '../../Images/Slider03-1.jpg'
export default class header extends React.Component{
    render(){
        return(
        // <div id="carouselExampleControls" className="carousel slide border border-danger" data-ride="carousel">
        //     <div className="carousel-inner">
        //       <div className="carousel-item active">
        //         <img className='img1' src={Image1}/>
        //       </div>
        //       <div className="carousel-item">
        //       <img className='img1' src={Image2}/>
        //       </div> 
        //     </div>
        //     <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        //       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //       <span className="sr-only">Previous</span>
        //     </a>
        //     <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        //       <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //       <span className="sr-only">Next</span>
        //     </a>
            
        // </div>
        
                                <div className="shift">
                                 <Carousel>  
                                
                                <Carousel.Item style={{'height':"500px"}} >  
        
                                 <img style={{'height':"500px"}}  
        
                                 className="d-block w-100"  
    
                                src={Image1}  />  
        
                                </Carousel.Item  >  
        
                                         <Carousel.Item style={{'height':"500px"}}>  
        
                                         <img style={{'height':"500px"}}  
        
                                           className="d-block w-100"  
        
                                            src={Image2}    />  
        
                                                 </Carousel.Item>  
                                                
                                                </Carousel>  
        
                                </div>                         
        
                                 
        )
    }
}