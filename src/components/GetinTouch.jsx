import  { useState } from "react";
import { getText } from "../locales";

const GetinTouch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal fade show" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="false" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" className="close" onClick={closeModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="getInTouch">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-9">
              <h3>{getText("getInTouch_Title")}</h3>
            </div>
            <div className="col-3">
              <div className="button d-flex justify-content-end">
                <button type="button" className="btn btn-primary" onClick={openModal}>
                  {getText("getInTouch_Button")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetinTouch;
