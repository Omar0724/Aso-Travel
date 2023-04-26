import React from "react";
<<<<<<< HEAD

function Step2({ formData, setFormData }) {
  return (
    <div >
      <input
        type="text"
        placeholder="where from ?"
        value={formData.wherefrom}
        onChange={(e) => {
          setFormData({ ...formData, wherefrom: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="where to ?"
        value={formData.whereto}
        onChange={(e) => {
          setFormData({ ...formData, whereto: e.target.value });
        }}
      />
      date departure :
      <input
        type="date"
        value={formData.dateD}
        onChange={(e) => {
          setFormData({ ...formData, dateD: e.target.value });
        }}
      />
    date return :
      <input type="date" 
      value={formData.dateR}
      onChange={(e) => {
        setFormData({ ...formData, dateR: e.target.value });
      }}
      />
=======
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
>>>>>>> ebce85f0fe89fb83b40164bac153530b6ae1448e
    </div>
  );
}

export default Step2;