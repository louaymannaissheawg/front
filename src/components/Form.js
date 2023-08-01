import React,{useState} from 'react'
import bgImg from '../images/cafe.jpg';
import Details from "./Details";
import Datetime from "./Date";


export default function Form() {

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        numberp: "",
        date: "",
        time: "",
    });

    const FormTitles = ["Who?", "When?"];
    const PageDisplay = () => {
        if (page === 0) {
            return <Details formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <Datetime formData={formData} setFormData={setFormData} />;
        }
    };
    const handleFormSubmit = () => {
        if (page === FormTitles.length - 1) {
            fetch("http://localhost:4000/api/addreservations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then((response) => {
                    if (response.ok) {
                        window.location.href = "/reservations";

                    } else {

                        throw new Error("Network response was not ok.");
                    }
                })
                .then((data) => {
                    // Data contains the parsed JSON response (if successful)
                    console.log("Server response:", data);
                    alert("Form submitted successfully!");
                })
                .catch((error) => {
                    console.error("Error sending POST request:", error);
                    alert("An error occurred. please fill all the inputs even the date ");
                });
        } else {
            setPage((currPage) => currPage + 1);
        }
    };


    return (
        <div className="form">

            <div className="form-container">
                <div className="header">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body">{PageDisplay()}</div>
                <div className="footer">
                    <button
                        disabled={page == 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1);
                        }}
                    >
                        Prev
                    </button>
                    <button
                        onClick={handleFormSubmit}
                    >
                        {page === FormTitles.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}
