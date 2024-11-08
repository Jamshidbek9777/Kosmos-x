import { getText } from "../locales";
import { FaUniversity, FaHotel, FaStethoscope, FaIndustry, FaConciergeBell } from 'react-icons/fa';

const Advantage = () => {
  return (
    <>
      <div className="Projects mt-5">
        <div className="container">
          <h4 className="main-title">Advantages of Applying with Cosmos-x</h4>
          <div className="row justify-content-center">
            {/* Card 1: Education Icon */}
            <div className="col-lg-4 col-md-6 col-12 mt-5">
              <div className="card advantage-card">
                <div className="card-body d-flex align-items-center gap-3">
                  <FaUniversity size={20} />
                  <div className="info ml-3">
                    <h5> Free and Guaranteed University Acceptance</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Hospitality Icon */}
            <div className="col-lg-4 col-md-6 col-12 mt-5">
              <div className="card advantage-card">
                <div className="card-body d-flex align-items-center gap-3">
                  <FaConciergeBell size={20} />
                  <div className="info ml-3">
                    <h5> Exclusive Discounts up to 75%</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Hotel Icon */}
            <div className="col-lg-4 col-md-6 col-12 mt-5">
              <div className="card advantage-card">
                <div className="card-body d-flex align-items-center gap-3">
                  <FaHotel size={20} />
                  <div className="info ml-3">
                    <h5> Expert Advisors Graduated from Turkey</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: CRM Icon */}
            <div className="col-lg-4 col-md-6 col-12 mt-5">
              <div className="card advantage-card">
                <div className="card-body d-flex align-items-center gap-3">
                  <FaIndustry size={20} />
                  <div className="info ml-3">
                    <h5> Quick Response and Continuous Support</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Pharmacy Icon */}
            <div className="col-lg-4 col-md-6 col-12 mt-5">
              <div className="card advantage-card">
                <div className="card-body d-flex align-items-center gap-3">
                  <FaStethoscope size={20} />
                  <div className="info ml-3">
                    <h5>Agents for over 65 Private Universities</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: Restaurant Icon */}
            <div className="col-lg-4 col-md-6 col-12 mt-5">
              <div className="card advantage-card">
                <div className="card-body d-flex align-items-center gap-3">
                  <FaConciergeBell size={20} />
                  <div className="info ml-3">
                    <h5>With You Until Settled in Turkey</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advantage;
