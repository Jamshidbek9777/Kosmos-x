// import React from 'react'

import { getText } from "../locales"

const GetinTouch = () => {
  return (
    <>
        <div className="getInTouch">
        <div className="container">
         <div className="row align-items-center">

         <div className="col-9">
                <h3>{getText("getInTouch_Title")}</h3>
            </div>
            <div className="col-3">
                <div className="button d-flex justify-content-end">
                    <button>{getText("getInTouch_Button")}</button>
                </div>
            </div>
         </div>
        </div>
        </div>
    </>
  )
}

export default GetinTouch
