
import photo from "../../assets/Image/Watercolour Painting.jpg";
import photo_1 from "../../assets/Image/Figure Charcoal Sketch.jpg";
import photo_2 from "../../assets/Image/Comic Strip Drawing.jpg";
import photo_3 from "../../assets/Image/Landscape Painting.jpg";
import photo_4 from "../../assets/Image/catherine-kay-greenup-n2Ic38Ptn_k-unsplash.jpg";
import photo_5 from "../../assets/Image/annie-spratt-TywjkDHf0Ps-unsplash.jpg";



const Banner = () => {
    return (
   

        <div className="carousel max-h-screen">
  <div id="slide1" className="carousel-item relative w-full">
    <img className="w-full lg:h-96" src={photo} />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle bg-green-400">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-green-400">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full">
    <img src={photo_1} className="w-full lg:h-96" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle bg-green-400">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-green-400">❯</a>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full">
    <img src={photo_2} className="w-full lg:h-96" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle bg-green-400">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-green-400">❯</a>
    </div>
  </div> 
  
  <div id="slide4" className="carousel-item relative w-full">
    <img src={photo_3} className="w-full lg:h-96" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle bg-green-400">❮</a> 
      <a href="#slide5" className="btn btn-circle bg-green-400">❯</a>
    </div>
  </div>

  <div id="slide5" className="carousel-item relative w-full">
    <img src={photo_4} className="w-full lg:h-96" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle bg-green-400">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-green-400">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;