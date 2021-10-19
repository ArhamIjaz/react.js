import React from 'react'
import Nav from './components/nav/nav'
import Header from './components/header/header'
import Slider from './components/slider/slider'
import Body1 from './components/body1/body1'
import Slider2 from './components/slider2/slider2'
import Body2 from './components/body2/body2'
import Footer from './components/footer/footer'
import End from './components/end/end'
import End2 from './components/end2/end2'
import Img2 from './Images/1-768x576.jpg'
import Img1 from './Images/2-300x225.jpg'
import Img3 from './Images/3-300x225.jpg'
import Img4 from './Images/4-300x225.jpg'
import Img5 from './Images/5-300x225.jpg'
import Img6 from './Images/6-300x225.jpg'
import Img7 from './Images/8-300x225.jpg'
import Img8 from './Images/9-300x225.jpg'
import Img9 from './Images/10-300x225.jpg'
import Img10 from './Images/11-300x225.jpg'
import Img11 from './Images/12-300x225.jpg'
import Img12 from './Images/Esports-Pakistan-Tekken7-Fifa18-Event-27-300x199.jpg'

import Img14 from './Images/Esports-Pakistan-Tekken7-Fifa18-Event-24-300x199.jpg'
import Img15 from './Images/Esports-Pakistan-Tekken7-Fifa18-Event-23-300x200.jpg'
import Img16 from './Images/7-225x300.jpg'
export default class App extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <Header/>
                <Slider/>
                <Body1/>
                <Slider2/>
                <Body2/>
                <Footer/>
                <End src={Img2}/>
                <End src={Img1}/>
                <End src={Img3}/>
                <End src={Img4}/>
                <End src={Img5}/>
                <End src={Img6}/>
                <End src={Img16}/>
                <End src={Img7}/>
                <End src={Img8}/>
                <End src={Img9}/>
                <End src={Img10}/>
                <End src={Img11}/>
                <End src={Img12}/>
                <End2/>
                <End src={Img14}/>
                <End src={Img15}/>
            </div>
        )
    }
}