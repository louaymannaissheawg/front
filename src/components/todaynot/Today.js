import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Today.css'

const NotificationBell = () => {
    const [todayReservations, setTodayReservations] = useState([]);

    useEffect(() => {
        // Fetch Today's Reservations from the backend
        axios.get('http://localhost:4000/api/searchtoday')
            .then((response) => {
                setTodayReservations(response.data.reservations);

            })
            .catch((error) => {
                console.error('Error fetching today\'s reservations:', error);
            });
    }, []);
    let down = false;
    let box  = document.getElementById('box');
    const toggleNotifi = ()=>{
        let today = todayReservations
        if (down) {
            box.style.height  = '0px';
            box.style.opacity = 0;
            down = false;
        }else {
            box.style.height  = '510px';
            box.style.opacity = 1;
            down = true;
        }

    }

    return (
        <div>
            <div className="icon" onClick={toggleNotifi}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                </svg>
                {todayReservations.length > 0 && <span className="badge">{todayReservations.length}</span>}
            </div>
            <div className="notifi-box" id="box">
                <h2>Today's Reservations <span>{todayReservations.length}</span></h2>
                <div className="notification-list">
                    <ul>
                        {todayReservations.map((reservation) => (
                            <li key={reservation._id}>
                                <div className="reservation-info">
                                    <h4>{reservation.name}</h4>
                                    <p>{reservation.email}</p>
                                </div>
                                <div className="reservation-time reservation-info ">
                                    <h2>{reservation.time}</h2>     <h5>For <span className="blue-number">1</span> Person</h5>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NotificationBell;
