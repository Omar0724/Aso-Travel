import React from "react";
<<<<<<< HEAD

function Step3({ formData, setFormData }) {
  return (
    <div >
      <input
        type="text"
        placeholder="nationality"
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="passport"
        value={formData.passport}
        onChange={(e) => {
          setFormData({ ...formData, passport: e.target.value });
        }}
      />
      Class : 
      <input type="radio" name="class" value="first class" 
      onChange={(e) => {
        setFormData({ ...formData, gender: e.target.value });
      }}/> first class
      <input type="radio" name="class" value="eco class" 
      onChange={(e) => {
        setFormData({ ...formData, class: e.target.value });
      }}/> eco class
      <input type="radio" name="class" value="business class " 
      onChange={(e) => {
        setFormData({ ...formData, class: e.target.value });
      }}/> business class 
=======
import './form.css';
function Step3({ formData, setFormData }) {
  return (
    <table>
      <tr>
        <td>
          <input
          type="text"
          placeholder="nationality"
          value={formData.nationality}
          onChange={(e) => {
            setFormData({ ...formData, nationality: e.target.value });
          }}
        />
        </td>
        <td>
          <input
          type="text"
          placeholder="passport"
          value={formData.passport}
          onChange={(e) => {
            setFormData({ ...formData, passport: e.target.value });
          }}
          />
        </td>
      </tr>
      <tr>
          <td colSpan={2}>
          Class : 
          <input type="radio" name="class" value="first class" 
          onChange={(e) => {
            setFormData({ ...formData, class: e.target.value });
          }}/> first class
          <input type="radio" name="class" value="eco class" 
          onChange={(e) => {
            setFormData({ ...formData, class: e.target.value });
          }}/> eco class
          <input type="radio" name="class" value="business class " 
          onChange={(e) => {
            setFormData({ ...formData, class: e.target.value });
          }}/> business class 
          </td>
      </tr>
      
      
      
>>>>>>> ebce85f0fe89fb83b40164bac153530b6ae1448e
      
   

      
     

<<<<<<< HEAD
    </div>
=======
    </table>
>>>>>>> ebce85f0fe89fb83b40164bac153530b6ae1448e
  );
}

export default Step3;