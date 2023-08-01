import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Reservation.css";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the date picker styles
const Post = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("9:00 AM");
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    numberp: "",

  });

  useEffect(() => {
    if (!id) return;
    const fetchPost = async () => {
      const { data } = await axios.get(`http://localhost:4000/api/reservations/${id}`);
      setPost(data);
    };
    fetchPost();
  }, []);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    post.date = date
  };
  const handleTimeChange = (time) => {
    setSelectedTime(time);
   post.time = time
  };
  const handleChange = (e) => {
    const postClone = { ...post };
    postClone[e.target.name] = e.target.value;
    setPost(postClone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      await axios.put(`http://localhost:4000/api/updatereservations/${id}`, post);
      return navigate("/reservations");

  };

  return (
    <div className="reservation">
      <div className="container">
        <form className="post">
          <input
            type="text"
            placeholder="Name..."
            name="name"
            value={post.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email..."
            name="email"
            value={post.email}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Number Of Persons..."
            name="numberp"
            value={post.numberp}
            onChange={handleChange}
          />
          <DatePicker selected={selectedDate} onChange={handleDateChange} minDate={new Date()}  />
          <select value={selectedTime} onChange={handleTimeChange}>
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="5:00 PM">5:00 PM</option>
            <option value="6:00 PM">6:00 PM</option>
            <option value="7:00 PM">7:00 PM</option>
            <option value="8:00 PM">8:00 PM</option>
            <option value="9:00 PM">9:00 PM</option>
            <option value="10:00 PM">10:00 PM</option>
            <option value="11:00 PM">11:00 PM</option>
          </select>
          <button onClick={handleSubmit} className="update-button button">
            {id === "new" ? "Post" : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
