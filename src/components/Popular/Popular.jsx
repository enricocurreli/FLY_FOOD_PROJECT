import { useEffect } from "react";
import Section from "../Section/Section";
import Article from "../Section/Article";
import Title from "../Title/Title";
import  Carousel  from "../Carousel/Carousel";
import Card from "../Card/Card";
import { IoArrowForwardOutline } from "react-icons/io5";
import useFetch from "../../hooks/useFetch";
import Paragraph from "../Paragraph/Paragraph";
//CSS
import "./Popular.css";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// IMG
import crudo from "../../assets/imgCarousel/crudo.jpg";
import cutPatatine from "../../assets/imgCarousel/cutPatatine.jpg";
import fornoPizza from "../../assets/imgCarousel/fornoPizza.jpg";
import gelato from "../../assets/imgCarousel/gelato.jpg";
import gelato2 from "../../assets/imgCarousel/gelato2.jpg";
import panino from "../../assets/imgCarousel/panino.jpg";
import patate from "../../assets/imgCarousel/patate.jpg";
import pizza from "../../assets/imgCarousel/pizza.jpg";
import prodPane from "../../assets/imgCarousel/prodPane.jpg";
import prodPizza from "../../assets/imgCarousel/prodPizza.jpg";
import sushi from "../../assets/imgCarousel/sushi.jpg";
import burger from "../../assets/imgCarousel/burger.jpg";
import burger2 from "../../assets/imgCarousel/burger2.jpg";
//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import Img from "../Img/Img";



const Popular = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const posts = useFetch("/src/data.json");
  const lastNews = posts && posts.filter((post) => post.id % 10 == 0 );

  return (

    <>
  
      <Section classes={"flex justify-center mt-28"}>
           
            <Article classes={"text-center text-2xl  px-12 py-3 mt-10  overflow-hidden"} >
              <Title tag={"h1"} classes={"md:text-6xl text-5xl text-center font-medium"}>International <span className={"md:text-6xl text-5xl font-extralight px-6"}>Cuisine</span> </Title>

              <Paragraph classes={"text-center text-2xl font-light lg:px-12 py-3 mt-10 mb-5"} aos={"fade-right"}>Il nostro ristorante offre un'esperienza culinaria unica, dove
              ogni piatto è preparato con passione e attenzione ai dettagli.</Paragraph>

              <Paragraph classes={"text-center text-2xl font-light lg:px-12 py-3 mb-5"} aos={"fade-left"}>Dalla nostra pizza croccante, cotta al punto giusto, ai panini
                farciti con ingredienti freschissimi, tutto è creato
                artigianalmente per garantire il massimo del gusto.</Paragraph>


              <Paragraph classes={"text-center text-2xl font-light lg:px-12 py-3 "} aos={"fade-right"}>Le patatine,
                tagliate e fritte al momento, accompagnano perfettamente i nostri
                piatti, mentre i gelati, realizzati a mano, offrono un dolce
                finale che delizia ogni palato. Per i veri amanti della cucina
                fusion, il nostro sushi è preparato con pesce freschissimo e riso
                di alta qualità, unendo tradizione e innovazione in ogni boccone.</Paragraph>

              <Paragraph classes={"text-center text-3xl  lg:px-12 py-3  mt-10"} aos={"fade-left"}>Venite a scoprire la differenza che fanno i prodotti freschi e
              l'artigianalità!</Paragraph>

            </Article>


      </Section>

      <Carousel>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Img src={pizza} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={prodPizza} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={fornoPizza} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={panino} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={prodPane} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={burger} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={burger2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={patate} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={cutPatatine} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={crudo} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={sushi} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={gelato} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={gelato2} alt="" />
            </SwiperSlide>
          </Swiper>
      </Carousel>

          <Section classes={"flex justify-center md:mt-0 my-8 overflow-hidden"}  aos={"zoom-out-up"} aosDuration={"1000"} >
              
              <Title tag={"h1"} classes={"text-5xl text-center lg:text-start font-medium md:px-6"}>
                Last <span className={"text-5xl font-extralight px-3"}>News</span> 
              </Title>

            <Article classes={"my-16  container flex justify-evenly flex-wrap bg-[#0a446bdf] rounded-lg"}>

              {
                  posts && lastNews.map((post)=> <Card 
                    post={post} 
                    key={post.id} 
                    btnText={<IoArrowForwardOutline/>} 
                  />)
              }
            </Article>
            
          </Section>
    </>
  );
};

export default Popular;
