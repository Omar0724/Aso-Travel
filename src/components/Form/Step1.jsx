import React from "react";

function Step1({ formData, setFormData }) {
  return (
    <table>
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
  );
}

export default Step1;
