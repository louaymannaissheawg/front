import React from "react";
import { Button } from "reactstrap";

const Main = () => {
    const handleClick = () => {
        // Route to Form.
        window.location.href = "/form";
    };
    return (
        <div className="container">
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
                rel="stylesheet"
            />
            <p className="looking-for-pleasure">
                "C'est un moment de plaisir"
            </p>
            <Button
                color="none"
                className="book-table-btn"
                onClick={handleClick}
            >
                Book a Table
            </Button>
            <div className="img-container">
                <img
                    src={require("../images/cafe.jpg")}
                    alt="cafe"
                    className="big-img"
                />
            </div>
            <div className="restaurant-info">
                <h1>Welcome to Our Mediterranean Restaurant</h1>
                <p>
                    Enjoy the finest Mediterranean cuisine at our restaurant. We pride ourselves in offering delicious and authentic dishes made with the freshest ingredients. Whether you are looking for a family dinner or a romantic evening for two, we have the perfect ambiance to make your dining experience unforgettable.
                </p>
                <Button
                    color="none"
                    className="book-table-btn"
                    onClick={handleClick}
                >
                    Book a Table
                </Button>
            </div>
        </div>
    );
};

export default Main;
