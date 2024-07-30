import { memo } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import "./style.scss";
import cat1Img from "assets/users/images/categories/h2.png";
import cat2Img from "assets/users/images/categories/h3.png";
import cat3Img from "assets/users/images/categories/h4.png";
import cat4Img from "assets/users/images/categories/h5.png";
import cat5Img from "assets/users/images/categories/h6.png";
import cat6Img from "assets/users/images/categories/h7.png";
const HomePage = () => {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    const sliderItems =[
        {
            bgImg: cat1Img,
            name:"Cây Tùng Bonsai"
        },
        {
            bgImg: cat2Img,
            name:"Cây Lưỡi Hổ"
        },
        {
            bgImg: cat3Img,
            name:"Cây Hoa Trang Bonsai"
        },
        {
            bgImg: cat4Img,
            name:"Cây Xanh Bonsai"
        },
        {
            bgImg: cat5Img,
            name:"Cây Sung Bonsai"
        },
        {
            bgImg: cat6Img,
            name:"Cây Phong Lá Đỏ"
        },
    ];
  
    return (
       <>
        {/* Categories Begin */}
      <div className="container container__categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
            {sliderItems.map((item,key)=>(
                 <div className="categories_slider_item"
                 style={{backgroundImage: `url(${item.bgImg})`}}
                 key={key}
                 >
                     <p>{item.name}</p>
               </div>
            ))}
         
        </Carousel>
       
      </div>
       {/* Categories End */}
       </>
    );
  };
export default memo(HomePage);