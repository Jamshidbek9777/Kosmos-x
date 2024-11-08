import { useState } from "react";
import { Modal } from "react-bootstrap";

// Dummy video IDs (Replace these with actual YouTube video IDs)
const videoData = [
  { id: "eV6lTEY95yY", title: "Cosmos-x" },
  { id: "eV6lTEY95yY", title: "Cosmos-x" },
  { id: "eV6lTEY95yY", title: "Cosmos-x" },
];

const CosmosXVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (videoId) => {
    setSelectedVideo(videoId);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedVideo(null); 
  };

  return (
    <>
      <div className="cosmos-videos mt-5">
        <div className="container">
          <h4 className="main-title">Cosmos-x Videos</h4>
          <div className="row justify-content-center">
            {videoData.map((video, index) => (
              <div className="col-lg-4 col-md-6 col-12 mt-5" key={index}>
                <div className="card video-card" onClick={() => handleCardClick(video.id)}>
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className="video-cover" style={{ position: "relative", borderRadius: "10px", overflow: "hidden" }}>
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                        alt="Video Thumbnail"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <div
                        className="play-icon"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          fontSize: "30px",
                          color: "#fff",
                        }}
                      >
                        &#9654;
                      </div>
                    </div>
                    <div className="info mt-3 text-center">
                      <h5>{video.title}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{videoData.find(v => v.id === selectedVideo)?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedVideo && (
              <div className="video-iframe-container" style={{ textAlign: "center" }}>
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${selectedVideo}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default CosmosXVideos;
