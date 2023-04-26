import React, { useState } from "react";

function Fl() {
  const [tripType, setTripType] = useState("");
  const [tripFrom, setTripFrom] = useState("");
  const [tripTo, setTripTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adultsCount, setAdultsCount] = useState("");
  const [childrenCount, setChildrenCount] = useState("");
  const [flightClass, setFlightClass] = useState("");

  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
  };

  const handleTripFromChange = (e) => {
    setTripFrom(e.target.value);
  };

  const handleTripToChange = (e) => {
    setTripTo(e.target.value);
  };

  const handleDepartureDateChange = (e) => {
    setDepartureDate(e.target.value);
  };

  const handleReturnDateChange = (e) => {
    setReturnDate(e.target.value);
  };

  const handleAdultsCountChange = (e) => {
    setAdultsCount(e.target.value);
  };

  const handleChildrenCountChange = (e) => {
    setChildrenCount(e.target.value);
  };

  const handleFlightClassChange = (e) => {
    setFlightClass(e.target.value);
  };

  return (
                <div role="tabpanel" className="tab-pane fade in" id="flights">
                  <div className="tab-para">
                    <div className="trip-circle">
                      <div className="single-trip-circle">
                        <input type="radio" id="radio01" name="radio" checked={tripType === "Round Trip"}
            onChange={handleTripTypeChange} />
                        <label htmlFor="radio01">
                          <span className="round-boarder">
                            <span className="round-boarder1" />
                          </span>
                          round trip
                        </label>
                      </div>
                      {/*/.single-trip-circle*/}
                      <div className="single-trip-circle">
                        <input type="radio" id="radio02" name="radio" checked={tripType === "On Way"}
            onChange={handleTripTypeChange}/>
                        <label htmlFor="radio02">
                          <span className="round-boarder">
                            <span className="round-boarder1" />
                          </span>
                          on way
                        </label>
                      </div>
                      {/*/.single-trip-circle*/}
                    </div>
                    {/*/.trip-circle*/}
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="single-tab-select-box">
                          <h2>from</h2>
                          <div className="travel-select-icon">
                            <select className="form-control " onChange={handleTripFromChange}>
                              <option value="default">
                                enter your location
                              </option>
                              {/* /.option*/}
                              <option value="turkey">turkey</option>
                              {/* /.option*/}
                              <option value="russia">russia</option>
                              {/* /.option*/}
                              <option value="egept">egypt</option>
                              {/* /.option*/}
                            </select>
                            {/* /.select*/}
                          </div>
                          {/* /.travel-select-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="col-lg-2 col-md-3 col-sm-4">
                        <div className="single-tab-select-box">
                          <h2>departure</h2>
                          <div className="travel-check-icon">
                            <form action="#">
                              <input
                                type="text"
                                name="departure"
                                className="form-control"
                                data-toggle="datepicker"
                                placeholder="12 -01 - 2017 "
                                onChange={handleDepartureDateChange}
                              />
                            </form>
                          </div>
                          {/* /.travel-check-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="col-lg-2 col-md-3 col-sm-4">
                        <div className="single-tab-select-box">
                          <h2>return</h2>
                          <div className="travel-check-icon">
                            <form action="#">
                              <input
                                type="text"
                                name="return"
                                className="form-control"
                                data-toggle="datepicker"
                                placeholder="22 -01 - 2017 "
                                onChange={handleReturnDateChange}
                              />
                            </form>
                          </div>
                          {/* /.travel-check-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="col-lg-2 col-md-1 col-sm-4">
                        <div className="single-tab-select-box">
                          <h2>adults</h2>
                          <div className="travel-select-icon">
                            <select className="form-control " onChange={handleAdultsCountChange}>
                              <option value="default">5</option>
                              {/* /.option*/}
                              <option value={10}>10</option>
                              {/* /.option*/}
                              <option value={15}>15</option>
                              {/* /.option*/}
                              <option value={20}>20</option>
                              {/* /.option*/}
                            </select>
                            {/* /.select*/}
                          </div>
                          {/* /.travel-select-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="col-lg-2 col-md-1 col-sm-4">
                        <div className="single-tab-select-box">
                          <h2>childs</h2>
                          <div className="travel-select-icon">
                            <select className="form-control " onChange={handleChildrenCountChange}>
                              <option value="default">1</option>
                              {/* /.option*/}
                              <option value={2}>2</option>
                              {/* /.option*/}
                              <option value={4}>4</option>
                              {/* /.option*/}
                              <option value={8}>8</option>
                              {/* /.option*/}
                            </select>
                            {/* /.select*/}
                          </div>
                          {/* /.travel-select-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                    </div>
                    {/*/.row*/}
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="single-tab-select-box">
                          <h2>to</h2>
                          <div className="travel-select-icon">
                            <select className="form-control " onChange={handleTripToChange}>
                              <option value="default">
                                enter your destination location
                              </option>
                              {/* /.option*/}
                              <option value="istambul">istambul</option>
                              {/* /.option*/}
                              <option value="mosko">mosko</option>
                              {/* /.option*/}
                              <option value="cairo">cairo</option>
                              {/* /.option*/}
                            </select>
                            {/* /.select*/}
                          </div>
                          {/* /.travel-select-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="col-lg-3 col-md-3 col-sm-4">
                        <div className="single-tab-select-box">
                          <h2>class</h2>
                          <div className="travel-select-icon">
                            <select className="form-control " onChange={handleFlightClassChange}>
                              <option value="default">enter class</option>
                              {/* /.option*/}
                              <option value="A">A</option>
                              {/* /.option*/}
                              <option value="B">B</option>
                              {/* /.option*/}
                              <option value="C">C</option>
                              {/* /.option*/}
                            </select>
                            {/* /.select*/}
                          </div>
                          {/* /.travel-select-icon */}
                        </div>
                        {/*/.single-tab-select-box*/}
                      </div>
                      {/*/.col*/}
                      <div className="clo-sm-5">
                        <div className="about-btn pull-right">
                          <button className="about-view travel-btn">
                            search
                          </button>
                          {/*/.travel-btn*/}
                        </div>
                        {/*/.about-btn*/}
                      </div>
                      {/*/.col*/}
                    </div>
                    {/*/.row*/}
                  </div>
                </div>
                  );
                }
                export default Fl;
