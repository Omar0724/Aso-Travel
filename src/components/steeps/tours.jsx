import React, { useState } from "react";

function To() {
  const [destination, setDestination] = useState("");
  const [destinationn, setDestinationn] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [duration, setDuration] = useState(0);
  const [numMembers, setNumMembers] = useState(0);
  const [budget, setBudget] = useState(0);

  function handleDestinationChange(event) {
    setDestination(event.target.value);
  }
  function handleDestinationnChange(event) {
    setDestinationn(event.target.value);
  }
  function handleCheckInDateChange(event) {
    setCheckInDate(event.target.value);
  }
  function handleCheckOutDateChange(event) {
    setCheckOutDate(event.target.value);
  }
  function handleDurationChange(event) {
    setDuration(event.target.value);
  }
  function handleNumMembersChange(event) {
    setNumMembers(event.target.value);
  }
  function handleBudgetChange(event) {
    setBudget(event.target.value);
  }

  return (
                <div
                  role="tabpanel"
                  className="tab-pane active fade in"
                  id="tours"
                >
                  <div className="tab-para">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="single-tab-select-box">
                          <h2>destination</h2>
                          <div className="travel-select-icon">
                            <select className="form-control " onChange={handleDestinationChange} >
                              <option value="default">
                                enter your destination country
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
                          <div className="travel-select-icon">
                            <select className="form-control " onChange={handleDestinationnChange}>
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
                      <div className="col-lg-2 col-md-3 col-sm-4">
                        <div className="single-tab-select-box">
                          <h2>check in</h2>
                          <div className="travel-check-icon">
                            <form action="#">
                              <input
                                type="text"
                                name="check_in"
                                className="form-control"
                                data-toggle="datepicker"
                                placeholder="12 -01 - 2017 "
                                onChange={handleCheckInDateChange}
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
                          <h2>check out</h2>
                          <div className="travel-check-icon">
                            <form action="#">
                              <input
                                type="text"
                                name="check_out"
                                className="form-control"
                                data-toggle="datepicker"
                                placeholder="22 -01 - 2017 "
                                onChange={handleCheckOutDateChange}
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
                          <h2>duration</h2>
                          <div className="travel-select-icon">
                            <select className="form-control " onChange={handleDurationChange}>
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
                          <h2>members</h2>
                          <div className="travel-select-icon">
                            <select className="form-control " onChange={handleNumMembersChange}>
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
                      <div className="col-sm-5">
                        <div className="travel-budget">
                          <div className="row">
                            <div className="col-md-4 col-sm-4">
                              <h3>budget : </h3>
                            </div>
                            {/*/.col*/}
                            <div className="co-md-9 col-sm-8">
                              <div className="travel-filter">
                                <div className="info_widget">
                                  <div className="price_filter">
                                    <div id="slider-range" />
                                    {/*/.slider-range*/}
                                    <div className="price_slider_amount">
                                      <input
                                        type="text"
                                        id="amount"
                                        name="price"
                                        placeholder="Add Your Price"
                                        onChange={handleBudgetChange}
                                      />
                                    </div>
                                    {/*/.price_slider_amount*/}
                                  </div>
                                  {/*/.price-filter*/}
                                </div>
                                {/*/.info_widget*/}
                              </div>
                              {/*/.travel-filter*/}
                            </div>
                            {/*/.col*/}
                          </div>
                          {/*/.row*/}
                        </div>
                        {/*/.travel-budget*/}
                      </div>
                      {/*/.col*/}
                      <div className="clo-sm-7">
                        <div className="about-btn travel-mrt-0 pull-right">
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
                  {/*/.tab-para*/}
                </div>
  );
}

export default To;




