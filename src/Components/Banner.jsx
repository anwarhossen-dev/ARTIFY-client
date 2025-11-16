//import React, { use, useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,  Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AuthContext } from "../Providers/AuthContext";
import { use, useEffect, useState } from "react";
import axios from "axios";


const Banner = () => {
  const {user} = use(AuthContext)
  const [loaddata, setLoadData] = useState([]);
  const [swiperKey, setSwiperKey] = useState(0);

  // useEffect(() => {
    
  //   axios("http://localhost:3000/latest-addArtwork")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoadData(data);
  //       setSwiperKey((prev) => prev + 1); 
  //     })
  // }, [user]);

  useEffect(() => {
  axios.get("http://localhost:3000/latest-addArtwork")
    .then((res) => {
      setLoadData(res.data);
      setSwiperKey((prev) => prev + 1);
    })
    .catch((err) => console.error("Failed to load banner data:", err));
}, [user]);


  return (
    <section className="flex flex-col md:flex-row gap-10 items-center justify-center min-h-screen  p-10">
      {/* Left Text Section */}
      <div className="max-w-2xl text-center md:text-left space-y-5">
        <Fade >
          <h1 className="text-xl md:text-5xl font-bold">
       
            Artify: {" "} 
            <span className="text-yellow-300">
              <Typewriter
                words={["Showcase","Connect", "Inspire", "Create","Share"]}
                loop={true}
                cursor
                cursorStyle="."
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
        </Fade>

        <Fade direction="up" delay={300} triggerOnce>
          <p className="text-lg opacity-90">
            An inspiring online art-sharing platform where artists and art lovers connect through creativity. Users can upload, explore, and curate stunning artworks in a modern, clean, and interactive space that celebrates artistic expression and community appreciation. Perfect for passionate creators and admirers alike.
          </p>
        </Fade>

        
      </div>

      {/* Right Swiper Section */}
      
        <div>
          <h2 className="font-bold text-2xl mb-[-30px]">Latest Artwork</h2>
          {loaddata.length > 0 && (
          <div className="w-[300px] md:w-[450px] mt-10 mx-auto md:mx-0">
            <Swiper
              key={swiperKey}
              modules={[Autoplay, Pagination, ]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              className="rounded-2xl shadow-lg"
            >
              {loaddata.map((data) => (
                <SwiperSlide key={data._id}>
                  <div>
                    <img
                      src={data.ImageURL}
                      alt={data.name || "Artwork"}
                      className="w-full h-50 md:h-64 object-cover rounded-2xl"
                      
                    />
                   
                  </div>
                 
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        </div>
     
    </section>
  );
};

export default Banner;