import React ,{useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Datetime({ formData, setFormData }) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState("9:00 AM");



    const handleDateChange = (date) => {
        setSelectedDate(date);
        updateFormData("date", date.toISOString().slice(0, 10));
    };



    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
        updateFormData("time", e.target.value);
    };


    const updateFormData = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };
    return (
        <div className="date" >
        <h4>Select Date:</h4>
    <DatePicker selected={selectedDate} onChange={handleDateChange} minDate={new Date()}  />
    <h4>Select Time:</h4>
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

        </div>

    );
}

export default Datetime;