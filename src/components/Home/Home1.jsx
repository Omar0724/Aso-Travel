import React from 'react';
import '../../Assets/css/animate.css';
import '../../Assets/css/font-awesome.min.css';
import '../../Assets/css/hover-min.css';
import '../../Assets/css/datepicker.css';
import '../../Assets/css/owl.carousel.min.css';
import '../../Assets/css/owl.theme.default.min.css';
import '../../Assets/css/jquery-ui.min.css';
import '../../Assets/css/bootstrap.min.css';
import '../../Assets/css/bootsnav.css';
import '../../Assets/css/style.css';
import '../../Assets/css/responsive.css';
import {AiFillStar} from 'react-icons/ai';
import {FaAngleRight} from 'react-icons/fa';
import {BsFillAirplaneEnginesFill} from 'react-icons/bs';
import {BsFillBuildingFill} from 'react-icons/bs';
import {BsFillTreeFill} from 'react-icons/bs';


import s1 from '../../Assets/images/service/s1.png'
import s2 from '../../Assets/images/service/s2.png'
import s3 from '../../Assets/images/service/s3.png'


import b1 from '../../Assets/images/blog/b1.jpg'
import b2 from '../../Assets/images/blog/b2.jpg'
import b3 from '../../Assets/images/blog/b3.jpg'

import u1 from '../../Assets/images/client/testimonial1.jpg'
import u2 from '../../Assets/images/client/testimonial2.jpg'
import o1 from '../../Assets/images/offer/offer-shape.png'

const Home1=()=> {
	return (
<>
  <section id="home" className="about-us">
    <div className="container">
      <div className="about-us-content">
        <div className="row">
          <div className="col-sm-12">
            <div className="single-about-us">
              <div className="about-us-txt">
                <h2>Explore the Beauty of the Beautiful World</h2>
                <div className="about-btn">
                  <button className="about-view">explore now</button>
                </div>
                {/*/.about-btn*/}
              </div>
              {/*/.about-us-txt*/}
            </div>
            {/*/.single-about-us*/}
          </div>
          {/*/.col*/}
          <div className="col-sm-0">
            <div className="single-about-us"></div>
            {/*/.single-about-us*/}
          </div>
          {/*/.col*/}
        </div>
        {/*/.row*/}
      </div>
      {/*/.about-us-content*/}
    </div>
    {/*/.container*/}
  </section>
  {/*/.about-us*/}
  {/*about-us end */}
  {/*travel-box start*/}
  <section className="travel-box">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="single-travel-boxes">
            <div id="desc-tabs" className="desc-tabs">
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active">
                  <a
                    href="#tours"
                    aria-controls="tours"
                    role="tab"
                    data-toggle="tab"
                  >
                    <BsFillTreeFill />
                    tours
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#hotels"
                    aria-controls="hotels"
                    role="tab"
                    data-toggle="tab"
                  >
                    <BsFillBuildingFill />
                    hotels
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#flights"
                    aria-controls="flights"
                    role="tab"
                    data-toggle="tab"
                  >
                    <BsFillAirplaneEnginesFill />
                    flights
                  </a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
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
                            <select className="form-control ">
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
                            <select className="form-control ">
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
                            <select className="form-control ">
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
                            <select className="form-control ">
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
                {/*/.tabpannel*/}
                <div role="tabpanel" className="tab-pane fade in" id="hotels">
                  <div className="tab-para">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="single-tab-select-box">
                          <h2>destination</h2>
                          <div className="travel-select-icon">
                            <select className="form-control ">
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
                            <select className="form-control ">
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
                            <select className="form-control ">
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
                            <select className="form-control ">
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
                      <div className="col-sm-5" />
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
                {/*/.tabpannel*/}
                <div role="tabpanel" className="tab-pane fade in" id="flights">
                  <div className="tab-para">
                    <div className="trip-circle">
                      <div className="single-trip-circle">
                        <input type="radio" id="radio01" name="radio" />
                        <label htmlFor="radio01">
                          <span className="round-boarder">
                            <span className="round-boarder1" />
                          </span>
                          round trip
                        </label>
                      </div>
                      {/*/.single-trip-circle*/}
                      <div className="single-trip-circle">
                        <input type="radio" id="radio02" name="radio" />
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
                            <select className="form-control ">
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
                            <select className="form-control ">
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
                            <select className="form-control ">
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
                            <select className="form-control ">
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
                            <select className="form-control ">
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
                {/*/.tabpannel*/}
              </div>
              {/*/.tab content*/}
            </div>
            {/*/.desc-tabs*/}
          </div>
          {/*/.single-travel-box*/}
        </div>
        {/*/.col*/}
      </div>
      {/*/.row*/}
    </div>
    {/*/.container*/}
  </section>
  {/*/.travel-box*/}
  {/*travel-box end*/}
  {/*service start*/}
  <section id="service" className="service">
    <div className="container">
      <div className="service-counter text-center">
        <div className="col-md-4 col-sm-4">
          <div className="single-service-box">
            <div className="service-img">
              <img src={s1} alt="service-icon" />
            </div>
            {/*/.service-img*/}
            <div className="service-content">
              <h2>
                <a href="#">Choose amazing tour packages</a>
              </h2>
              <p>Must use our tour Planner for breathtaking tour packages!</p>
            </div>
            {/*/.service-content*/}
          </div>
          {/*/.single-service-box*/}
        </div>
        {/*/.col*/}
        <div className="col-md-4 col-sm-4">
          <div className="single-service-box">
            <div className="service-img">
              <img src={s2} alt="service-icon" />
            </div>
            {/*/.service-img*/}
            <div className="service-content">
              <h2>
                <a href="#">book top class hotel</a>
              </h2>
              <p>
                This amazing site helps you book the best hotels all around the
                world!
              </p>
            </div>
            {/*/.service-content*/}
          </div>
          {/*/.single-service-box*/}
        </div>
        {/*/.col*/}
        <div className="col-md-4 col-sm-4">
          <div className="single-service-box">
            <div className="statistics-img">
              <img src={s3} alt="service-icon" />
            </div>
            {/*/.service-img*/}
            <div className="service-content">
              <h2>
                <a href="#">online flight booking</a>
              </h2>
              <p>Book your flight instantly using TourNest!</p>
            </div>
            {/*/.service-content*/}
          </div>
          {/*/.single-service-box*/}
        </div>
        {/*/.col*/}
      </div>
      {/*/.statistics-counter*/}
    </div>
    {/*/.container*/}
  </section>
  {/*/.service*/}
  {/*service end*/}
  &lt;
  {/*discount-offer start*/}
  <section className="discount-offer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="dicount-offer-content text-center">
            <h2>Join with us within 7 March, 2019 and get upto 40% Discount</h2>
            <div className="campaign-timer">
              <div id="timer">
                <div className="time time-after" id="days">
                  <span />
                </div>
                {/*/.time*/}
                <div className="time time-after" id="hours"></div>
                {/*/.time*/}
                <div className="time time-after" id="minutes"></div>
                {/*/.time*/}
                <div className="time" id="seconds"></div>
                {/*/.time*/}
              </div>
              {/*/.timer*/}
            </div>
            {/*/.campaign-timer*/}
            <div className="about-btn">
              <button className="about-view discount-offer-btn">
                join now
              </button>
            </div>
            {/*/.about-btn*/}
          </div>
          {/* /.dicount-offer-content*/}
        </div>
        {/* /.col*/}
      </div>
      {/* /.row*/}
    </div>
    {/* /.container*/}
  </section>
  {/* /.discount-offer*/}
  {/*discount-offer end*/}
  {/*packages start*/}
  {/* testemonial Start */}
  
  {/*/.testimonial*/}
  {/* testemonial End */}
  {/*special-offer start*/}
  <section id="spo" className="special-offer">
    <div className="container">
      <div className="special-offer-content">
        <div className="row">
          <div className="col-sm-8">
            <div className="single-special-offer">
              <div className="single-special-offer-txt">
                <h2>thiland</h2>
                <div className="packages-review special-offer-review">
                  <p>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                
                    <span>2544 review</span>
                  </p>
                </div>
                {/*/.packages-review*/}
                <div className="packages-para special-offer-para">
                  <p>
                    <span>
                      <i className="fa fa-angle-right" /> 5 Days 6 nights
                    </span>
                    <span>
                      <i className="fa fa-angle-right" /> 2 person
                    </span>
                    <span>
                      <i className="fa fa-angle-right" /> 5 star accomodation
                    </span>
                  </p>
                  <p>
                    <span>
					<FaAngleRight/> transportation
                    </span>
                    <span>
					<FaAngleRight/> food facilities
                    </span>
                  </p>
                  <p className="offer-para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tem ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation una <br />{" "}
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                {/*/.packages-para*/}
                <div className="offer-btn-group">
                  <div className="about-btn">
                    <button className="about-view packages-btn offfer-btn">
                      make tour
                    </button>
                  </div>
                  {/*/.about-btn*/}
                  <div className="about-btn">
                    <button className="about-view packages-btn">
                      book now
                    </button>
                  </div>
                  {/*/.about-btn*/}
                </div>
                {/*/.offer-btn-group*/}
              </div>
              {/*/.single-special-offer-txt*/}
            </div>
            {/*/.single-special-offer*/}
          </div>
          {/*/.col*/}
          <div className="col-sm-4">
            <div className="single-special-offer">
              <div className="single-special-offer-bg">
                <img
                  src={o1}
                  alt="offer-shape"
                />
              </div>
              {/*/.single-special-offer-bg*/}
              <div className="single-special-shape-txt">
                <h3>special offer</h3>
                <h4>
                  <span>40%</span>
                  <br />
                  off
                </h4>
                <p>
                  <span>$999</span>
                  <br />
                  reguler $ 1450
                </p>
              </div>
              {/*/.single-special-shape-txt*/}
            </div>
            {/*/.single-special-offer*/}
          </div>
          {/*/.col*/}
        </div>
        {/*/.row*/}
      </div>
      {/*/.special-offer-content*/}
    </div>
    {/*/.container*/}
  </section>
  {/*/.special-offer end*/}
  {/*special-offer end*/}
  {/*blog start*/}
  <section id="blog" className="blog">
    <div className="container">
      <div className="blog-details">
        <div className="gallary-header text-center">
          <h2>latest news</h2>
          <p>Travel News from all over the world</p>
        </div>
        {/*/.gallery-header*/}
        <div className="blog-content">
          <div className="row">
            <div className="col-sm-4 col-md-4">
              <div className="thumbnail">
                <h2>
                  trending news <span>15 november 2017</span>
                </h2>
                <div className="thumbnail-img">
                  <img src={b1} alt="blog-img" />
                  <div className="thumbnail-img-overlay" />
                  {/*/.thumbnail-img-overlay*/}
                </div>
                {/*/.thumbnail-img*/}
                <div className="caption">
                  <div className="blog-txt">
                    <h3>
                      <a href="#">
                        Discover on beautiful weather, Fantastic foods and
                        historical place in Prag
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, contur adip elit, sed do mod
                      incid ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam
                    </p>
                    <a href="#">Read More</a>
                  </div>
                  {/*/.blog-txt*/}
                </div>
                {/*/.caption*/}
              </div>
              {/*/.thumbnail*/}
            </div>
            {/*/.col*/}
            <div className="col-sm-4 col-md-4">
              <div className="thumbnail">
                <h2>
                  trending news <span>15 november 2017</span>
                </h2>
                <div className="thumbnail-img">
                  <img src={b2} alt="blog-img" />
                  <div className="thumbnail-img-overlay" />
                  {/*/.thumbnail-img-overlay*/}
                </div>
                {/*/.thumbnail-img*/}
                <div className="caption">
                  <div className="blog-txt">
                    <h3>
                      <a href="#">
                        Discover on beautiful weather, Fantastic foods and
                        historical place in india
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, contur adip elit, sed do mod
                      incid ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam
                    </p>
                    <a href="#">Read More</a>
                  </div>
                  {/*/.blog-txt*/}
                </div>
                {/*/.caption*/}
              </div>
              {/*/.thumbnail*/}
            </div>
            {/*/.col*/}
            <div className="col-sm-4 col-md-4">
              <div className="thumbnail">
                <h2>
                  trending news <span>15 november 2017</span>
                </h2>
                <div className="thumbnail-img">
                  <img src={b3} alt="blog-img" />
                  <div className="thumbnail-img-overlay" />
                  {/*/.thumbnail-img-overlay*/}
                </div>
                {/*/.thumbnail-img*/}
                <div className="caption">
                  <div className="blog-txt">
                    <h3>
                      <a href="#">10 Most Natural place to Discover</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, contur adip elit, sed do mod
                      incid ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam
                    </p>
                    <a href="#">Read More</a>
                  </div>
                  {/*/.blog-txt*/}
                </div>
                {/*/.caption*/}
              </div>
              {/*/.thumbnail*/}
            </div>
            {/*/.col*/}
          </div>
          {/*/.row*/}
        </div>
        {/*/.blog-content*/}
      </div>
      {/*/.blog-details*/}
    </div>
    {/*/.container*/}
  </section>
  {/*/.blog*/}
  {/*blog end*/}
  {/*subscribe start*/}
  <section id="subs" className="subscribe">
    <div className="container">
      <div className="subscribe-title text-center">
        <h2>Join our Subscribers List to Get Regular Update</h2>
        <p>Subscribe Now. We will send you Best offer for your Trip</p>
      </div>
      <form>
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div className="custom-input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your Email Here"
              />
              <button className="appsLand-btn subscribe-btn">Subscribe</button>
              <div className="clearfix" />
              <i className="fa fa-envelope" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
  {/*subscribe end*/}
  {/* footer-copyright start */}
  <footer className="footer-copyright">
    <div className="container">
      <div className="footer-content">
        <div className="row">
          <div className="col-sm-3">
            <div className="single-footer-item">
              <div className="footer-logo">
                <a href="index.html">
                  tour<span>Nest</span>
                </a>
                <p>best travel agency</p>
              </div>
            </div>
            {/*/.single-footer-item*/}
          </div>
          {/*/.col*/}
          <div className="col-sm-3">
            <div className="single-footer-item">
              <h2>link</h2>
              <div className="single-footer-txt">
                <p>
                  <a href="#">home</a>
                </p>
                <p>
                  <a href="#">destination</a>
                </p>
                <p>
                  <a href="#">spacial packages</a>
                </p>
                <p>
                  <a href="#">special offers</a>
                </p>
                <p>
                  <a href="#">blog</a>
                </p>
                <p>
                  <a href="#">contacts</a>
                </p>
              </div>
              {/*/.single-footer-txt*/}
            </div>
            {/*/.single-footer-item*/}
          </div>
          {/*/.col*/}
          <div className="col-sm-3">
            <div className="single-footer-item">
              <h2>popular destination</h2>
              <div className="single-footer-txt">
                <p>
                  <a href="#">china</a>
                </p>
                <p>
                  <a href="#">venezuela</a>
                </p>
                <p>
                  <a href="#">brazil</a>
                </p>
                <p>
                  <a href="#">australia</a>
                </p>
                <p>
                  <a href="#">london</a>
                </p>
              </div>
              {/*/.single-footer-txt*/}
            </div>
            {/*/.single-footer-item*/}
          </div>
          {/*/.col*/}
          <div className="col-sm-3">
            <div className="single-footer-item text-center">
              <h2 className="text-left">contacts</h2>
              <div className="single-footer-txt text-left">
                <p>+1 (300) 1234 6543</p>
                <p className="foot-email">
                  <a href="#">info@tnest.com</a>
                </p>
                <p>North Warnner Park 336/A</p>
                <p>Newyork, USA</p>
              </div>
              {/*/.single-footer-txt*/}
            </div>
            {/*/.single-footer-item*/}
          </div>
          {/*/.col*/}
        </div>
        {/*/.row*/}
      </div>
      {/*/.footer-content*/}
      <hr />
      <div className="foot-icons ">
        <ul className="footer-social-links list-inline list-unstyled">
          <li>
            <a href="#" target="_blank" className="foot-icon-bg-1">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="foot-icon-bg-2">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="foot-icon-bg-3">
              <i className="fa fa-instagram" />
            </a>
          </li>
        </ul>
        <p>
          © 2017 <a href="https://www.themesine.com">ThemeSINE</a>. All Right
          Reserved
        </p>
      </div>
      {/*/.foot-icons*/}
      <div id="scroll-Top">
        <i
          className="fa fa-angle-double-up return-to-top"
          id="scroll-top"
          data-toggle="tooltip"
          data-placement="top"
          title=""
          data-original-title="Back to Top"
          aria-hidden="true"
        />
      </div>
      {/*/.scroll-Top*/}
    </div>
    {/* /.container*/}
  </footer>
  {/* /.footer-copyright*/}
  {/* footer-copyright end */}
  {/* Include all compiled plugins (below), or include individual files as needed */}
  {/*modernizr.min.js*/}
  {/*bootstrap.min.js*/}
  {/* bootsnav js */}
  {/* jquery.filterizr.min.js */}
  {/*jquery-ui.min.js*/}
  {/* counter js */}
  {/*owl.carousel.js*/}
  {/* jquery.sticky.js */}
  {/*datepicker.js*/}
  {/*Custom JS*/}
</>
)
}
export default Home1