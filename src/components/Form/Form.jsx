import React from 'react'
import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export default function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      username: "",
      nationality: "",
      datebirthday: "",
      gender:"",
      wherefrom:"",
      whereto:"",
      dateD:"",
      dateR:"",
      passport:"",
      class:""
    });
  
    const FormTitles = [ "Personal Info", "Payment Methode","Payment Methode","Payment Methode"];
  
    const PageDisplay = () => {
      if (page === 0) {
        return <Step1 formData={formData} setFormData={setFormData} />;
      } else if (page === 1) {
        return <Step2 formData={formData} setFormData={setFormData} />;
      } else if (page === 1) {
        return <Step3 formData={formData} setFormData={setFormData} />;
      }
    };
  
    return (
      <div className="form">
        <div className="progressbar">
          <div
            style={{ width: page === 0 ? "25%" : page ===1 ? "50%" :page ===3 ? "75%": "100%" }}
          ></div>
        </div>
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    );
}
