// import React from 'react'
import { getText } from "../locales";
import Tilt from "react-vanilla-tilt";
// import Aos from "aos";

const Projects = () => {
  return (
    <>
      <div className="Projects mt-5">
        <div className="container">
          <h4 className="main-title">Bizning xizmatlar</h4>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <Tilt
                options={{ glare: true, "max-glare": 0.5 }}
                className="tilt p-0 m-0 w-100 h-100"
              >
                <div className="card h-100">
                  <div className="card-body">
                    <div className="img">
                      <img className="w-100" src="./img/service1.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h5>Uzay Kampı Gezisi</h5>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <Tilt className="tilt p-0 m-0 w-100 h-100">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="img">
                      <img className="w-100" src="./img/service2.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h5>Uzay Atölyeleri</h5>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <Tilt className="tilt p-0 m-0 w-100 h-100">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="img">
                      <img
                        className="w-100"
                        src="./img/service3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <h5>Müfredat Geliştirme</h5>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <Tilt className="tilt p-0 m-0 w-100 h-100">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="img">
                      <img
                        className="w-100"
                        src="./img/service4.avif"
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <h5>Eğitimcinin Eğitimi</h5>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
       
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <Tilt className="tilt p-0 m-0 w-100 h-100">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="img">
                      <img className="w-100" src="./img/service5.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h5>Farkındalık Etkinlikleri</h5>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <Tilt className="tilt p-0 m-0 w-100 h-100">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="img">
                      <img className="w-100" src="./img/service5.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h5>Kitap Yayıncılığı</h5>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <Tilt className="tilt p-0 m-0 w-100 h-100">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="img">
                      <img
                        className="w-100"
                        src="./img/service6.webp"
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <h5>Online Eğitim Platformu</h5>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <Tilt className="tilt p-0 m-0 w-100 h-100">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="img">
                      <img
                        className="w-100"
                        src="./img/university.webp"
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <h5>{getText("university")}</h5>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
