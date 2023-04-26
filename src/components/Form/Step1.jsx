import React from "react";
<<<<<<< HEAD

function Step1({ formData, setFormData }) {
  return (
    <div >
      <input
        type="text"
        placeholder="Email"
        value={formData.Email}
        onChange={(e) => {
          setFormData({ ...formData, Email: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="first name"
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="last name"
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      date of birthday : 
      <input type="date" 
      value={formData.datebirthday}
      onChange={(e) => {
        setFormData({ ...formData, datebirthday: e.target.value });
      }}

      />
      Gender : 
      <input type="radio" name="gender" value="male" 
      onChange={(e) => {
        setFormData({ ...formData, gender: e.target.value });
      }}/> Male
      <input type="radio" name="gender" value="female" 
      onChange={(e) => {
        setFormData({ ...formData, gender: e.target.value });
      }}/> Female

=======
import './form.css';
function Step1({ formData, setFormData }) {
  return (
    <div className="personainfo-container">
    <table className="form-table">
      <tr>
        <td>
          <input
            type="text"
            placeholder="first name"
            value={formData.firstName}
            onChange={(e) => {
              setFormData({ ...formData, firstName: e.target.value });
            }}
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="last name"
            value={formData.lastName}
            onChange={(e) => {
              setFormData({ ...formData, lastName: e.target.value });
            }}
          />
        </td>
      </tr>
      <tr>
        <td>
          date of birthday : 
          <input type="date" 
          value={formData.datebirthday}
          onChange={(e) => {
            setFormData({ ...formData, datebirthday: e.target.value });
          }}
          />
        </td>
        <td>
          Gender : 
          <input type="radio" name="gender" value="male" 
          onChange={(e) => {
            setFormData({ ...formData, gender: e.target.value });
          }}/> Male
          <input type="radio" name="gender" value="female" 
          onChange={(e) => {
            setFormData({ ...formData, gender: e.target.value });
          }}/> Female
        </td>
      </tr>

      
      

    </table>
>>>>>>> ebce85f0fe89fb83b40164bac153530b6ae1448e
    </div>
  );
}

export default Step1;
