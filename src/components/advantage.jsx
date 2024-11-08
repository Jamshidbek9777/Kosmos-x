import { getText } from "../locales";
import { FaUniversity, FaHotel, FaStethoscope, FaBuilding, FaIndustry , FaConciergeBell } from 'react-icons/fa'; // Correct import

const Advantage = () => {
  return (
    <>
      <div className="Projects mt-5">
        <div className="container">
          <h4 className="main-title">Advantages of Applying with Cosmos-x</h4>
          <div className="row justify-content-center">
            {/* Card 1: Education Icon */}
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <div className="card advantage-card">
                <div className="card-body d-flex align-items-center  gap-3">
                  <FaUniversity size={20}  />
                  <div className="info ml-3">
                    <h5>{getText("edu")}</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Hospitality Icon */}
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <div className="card advantage-card">
                <div className="card-body d-flex align-items-center gap-3">
                  <FaConciergeBell size={20}  />
                  <div className="info ml-3">
                    <h5>{getText("hospitality")}</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Hotel Icon */}
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <div className="card advantage-card">
                <div className="card-body d-flex align-items-center  gap-3">
                  <FaHotel size={20}  />
                  <div className="info ml-3">
                    <h5>{getText("hotel")}</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Construction Icon */}
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <div className="card advantage-card">
                <div className="card-body d-flex align-items-center  gap-3">
                  <FaBuilding size={20}  />
                  <div className="info ml-3">
                    <h5>{getText("building")}</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: CRM Icon */}
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <div className="card advantage-card">
                <div className="card-body d-flex align-items-center  gap-3">
                  <FaIndustry size={20}  />
                  <div className="info ml-3">
                    <h5>CRM</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: Pharmacy Icon */}
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <div className="card advantage-card">
                <div className="card-body d-flex align-items-center  gap-3">
                  <FaStethoscope size={20}  />
                  <div className="info ml-3">
                    <h5>{getText("pharmacy")}</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 7: Restaurant Icon */}
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <div className="card advantage-card">
                <div className="card-body d-flex align-items-center  gap-3">
                  <FaConciergeBell size={20}  />
                  <div className="info ml-3">
                    <h5>{getText("restaurant")}</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 8: University Icon */}
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <div className="card advantage-card">
                <div className="card-body d-flex align-items-center  gap-3">
                  <FaUniversity size={20}  />
                  <div className="info ml-3">
                    <h5>{getText("university")}</h5>
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
