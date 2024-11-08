const AboutUsHome = () => {
  return (
    <>
      <div className="aboutUsHome  mb-5 mt-5">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 col-md-6 col-12 d-flex align-items-stretch">
              <img
                src="/img/akademiktur2.jpg"
                alt="About Us"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div>

            <div className="col-lg-5 col-md-6 col-12 d-flex flex-column justify-content-center">
              <h4 className="main-title">About Us</h4>
              <h5>
                If youve decided to enroll in one of Turkeys colleges, this is
                the first place to gain information about studying in Turkey and
                to get your free admission.
              </h5>
              {/* <h6>With a seamless mix of innovation and over 10 years of experience, Turkey Campus opens doors to unparalleled educational opportunities in Turkey and Cyprus. We are the official partner of more than 65 universities. Our platform offers personalized guidance, from choosing the perfect program to navigating admissions, ensuring every students journey is smooth and successful. Join us today and embark on a transformative academic adventure with Turkey Campus at your side!</h6> */}
              <button className=" mt-5 more-button">More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsHome;
