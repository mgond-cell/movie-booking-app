import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function BookingForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const submit = () => {
    localStorage.setItem("booking", JSON.stringify(form));
    navigate("/success");
  };

  return (
    <div className="container form">
      <h2>Booking Form</h2>

      <input placeholder="Name"
        onChange={e => setForm({...form,name:e.target.value})}/>
      <br/>

      <input placeholder="Email"
        onChange={e => setForm({...form,email:e.target.value})}/>
      <br/>

      <input placeholder="Mobile"
        onChange={e => setForm({...form,mobile:e.target.value})}/>
      <br/><br/>

      <button onClick={submit}>Submit</button>
    </div>
  );
}
