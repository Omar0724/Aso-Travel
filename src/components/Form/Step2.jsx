import React from "react";
import './form.css';
function Step2({ formData, setFormData }) {
  return (
    <div className="other-info-container">
    <table>
      <tr>
        <td>
          <input
          type="text"
          placeholder="where from ?"
          value={formData.wherefrom}
          onChange={(e) => {
            setFormData({ ...formData, wherefrom: e.target.value });
          }}
          />
        </td>
        <td>
          <input
          type="text"
          placeholder="where to ?"
          value={formData.whereto}
          onChange={(e) => {
            setFormData({ ...formData, whereto: e.target.value });
          }}
          />
        </td>
      </tr>
      <tr>
        <td>
          date departure :
          <input
            type="date"
            value={formData.dateD}
            onChange={(e) => {
              setFormData({ ...formData, dateD: e.target.value });
            }}
          />
        </td>
        <td>
          date return :
          <input type="date" 
          value={formData.dateR}
          onChange={(e) => {
            setFormData({ ...formData, dateR: e.target.value });
          }}
          />
        </td>
      </tr>
    </table>
    </div>
  );
}

export default Step2;