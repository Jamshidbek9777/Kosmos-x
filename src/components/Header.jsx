// import React from 'react'
// import { getText } from '../locales';
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { getText } from "../locales/index";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Header = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <div className="header">
        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
          <SwiperSlide>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6">
                  <div className="info flex-column">
                    <h3>Uzay Kampı Gezisi</h3>
                    <p>
                      KosmosX, Türkiye’deki uzay kampının Özbekistan’daki
                      exclusive distribütörü olarak, katılımcılarına eşsiz bir
                      uzay deneyimi sunuyor. Uzay kampı gezisi, her yaştan
                      katılımcının uzayın sırlarını keşfetmesini ve geleceğin
                      bilim insanları için ilham kaynağı olmasını amaçlayan
                      heyecan verici bir programdır.
                    </p>
                    <Link
                      to="okulaile"
                      className="myBtn custom-btn btn-16"
                      type="submit"
                    >
                      {getText("more")}
                    </Link>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="img">
                    <img className="w-100" src="./img/header2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6">
                  <div className="info flex-column">
                    <div className="logo">
                      <img src="./img/ztechlogo.png" alt="" />
                    </div>
                    <h3>{getText("headerztechT")}</h3>
                    <ul>
                      <li>{getText("headerztechli1")}</li>
                      <li>{getText("headerztechli2")}</li>
                      <li>{getText("headerztechli3")}</li>
                      <li>{getText("headerztechli4")}</li>
                      <li>{getText("headerztechli5")}</li>
                    </ul>
                    <Link to="https://ztechedu.co/home" className="myBtn custom-btn btn-16" type="submit">
                      {getText("more")}
                    </Link>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="img">
                    <img className="w-100" src="./img/ztechhead.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6">
                  <div className="info flex-column">
                    <div className="logo">
                      <img src="./img/kliksoft.png" alt="" />
                    </div>
                    <p>{getText("headerklikP")}</p>
                    <Link to="https://www.kliksoft.net/" className="myBtn custom-btn btn-16" type="submit">
                      {getText("more")}
                    </Link>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="img">
                    <img className="w-100" src="./img/kliksofthead.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}

          {/* <SwiperSlide>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6">
                  <div className="info flex-column">
                    <div className="logo">
                      <img src="./img/teknosinav.webp" alt="" />
                    </div>
                    <h3>{getText("headerteknoT")}</h3>
                    <p>{getText("headerteknoP")}</p>
                    <Link to="https://www.teknosinav.com/" className="myBtn custom-btn btn-16" type="submit">
                      {getText("more")}
                    </Link>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="img">
                    <img className="w-100" src="./img/teknosinavhead.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
          <SwiperSlide>
            <div className="container">
              {/* partners, okulaile sertificate */}
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6">
                  <div className="info flex-column">
                    <h3>{getText("headk12netT")}</h3>
                    <p>{getText("headk12netP")}</p>
                    <Link
                      to="https://k12net.com/tr/"
                      className="myBtn custom-btn btn-16"
                      type="submit"
                    >
                      {getText("more")}
                    </Link>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="img">
                    <img className="w-100" src="./img/k12nethead.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6">
                  <div className="info flex-column">
                    <h3>{getText("headerMentalUpT")}</h3>
                    <p>{getText("headerMentalUpP")}</p>
                    <Link
                      to="mentalup"
                      className="myBtn custom-btn btn-16"
                      type="submit"
                    >
                      {getText("more")}
                    </Link>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="img">
                    <img className="w-100" src="./img/header1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6">
                  <div className="info flex-column">
                    {/* <h3>{getText("headerMentalUpT")}</h3> */}
                    <h3>Online Eğitim Platformu</h3>
                    <p>
                      Birkaç dakika içinde kendi logonuz ve renklerinizle
                      tamamen size özel bir sistem kuralım.
                    </p>
                    <p>{getText("headerMentalUpP")}</p>
                    <Link
                      to="https://www.vedubox.com/"
                      className="myBtn custom-btn btn-16"
                      type="submit"
                    >
                      {getText("more")}
                    </Link>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="img">
                    <img
                      className="w-100"
                      src="./img/vedubox-online-akademi.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Header;
