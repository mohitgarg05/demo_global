import HeaderMenu from "./Navbar";
import Swiper from 'swiper/bundle';
import { useEffect } from "react";
import "../App.css";

import 'swiper/css/bundle';
import FeaturesGrid from "../Components/Service";
import FooterLinks from "./Footer";
import AboutUs from "../Components/AboutUs";



  
function Home(){
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
          direction: 'horizontal',
          loop: true,
          autoplay: {
            delay: 3000, 
            disableOnInteraction: false, 
          },
          pagination: {
            el: '.swiper-pagination',
          },
    

        });
      }, []);
    return(
      <>
        <section className="navbar">
            <HeaderMenu />
        </section>
        <section>
            <section>
                <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide slide1">
                        <div className="slide_content">
                            <h1>Credentials</h1>
                            <p>Global MetCorp is globally and international recognised and accredited</p>
                            <button className="read_more">Read More</button>
                        </div>
                    </div>
                    <div className="swiper-slide slide2">               
                        <div className="slide_content">
                            <h1>Diversifiction</h1>
                            <p>Along with sister branch Ardour World, we additionally traded in rubber, waste paper and non-ferrous scrap</p>
                            <button className="read_more">Read More</button>


                        </div>
                    </div>
                    <div className="swiper-slide slide1">               
                        <div className="slide_content">
                            <h1>Traders</h1>
                            <p>In 2017 global traded in excess of 1.5M tonnes of ferrous scrap</p>
                            <button className="read_more">Read More</button>
                        </div>
                    </div>
                    <div className="swiper-slide slide1">               
                        <div className="slide_content">
                            <h1>Additional Credemntials</h1>
                            <p>The Group Companies namely Global Metcorp Limited and Ardour World Limited both enjoy prestigious Accredited Registration.</p>
                            <button className="read_more">Read More</button>
                        </div>
                    </div>
                    <div className="swiper-slide slide1">               
                    <div className="slide_content">
                            <h1>Sustainability</h1>
                            <p>At Global Metcorp, we are dedicated to sustainable trading practices, committed to reducing our carbon footprint and fostering a greener future for all.</p>
                            <button className="read_more">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
                </div>
            </section>
            <section>
                <FeaturesGrid />
            </section>
            <section id="about">
                <AboutUs />
            </section>
            <section className="section3">
                <div className="bg_background">
                    <div className=" content">
                        <h1>Commited to High Quality Service</h1>
                        <p>We have furnished steel for many of the largest construction projects in the region and have the estimating, detailing and fabricating experience to manage any project!</p>
                    </div>
                </div>
            </section>
            <section className="footer_links">
                <FooterLinks />
            </section>
        </section>
      </>
     
    )
}


export default Home;