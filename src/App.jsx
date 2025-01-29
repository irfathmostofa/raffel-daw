import { useState } from "react";
import logo from "../src/assets/logo.png";
import "./App.css";

function App() {
  const [tickets, setTickets] = useState([]);
  const [ticketCount, setTicketCount] = useState(0);
  const [price, setPrice] = useState("২০ টাকা");
  const [eventName, setEventName] = useState("রওশন পরিবারের আনন্দ ভ্রমণ ২০২৫");

  const generateRandomTicketNumber = () => {
    const randomNum = Math.floor(10 + Math.random() * 90);
    return `09856${randomNum.toString().slice(-5)}`;
  };

  const generateTickets = () => {
    const newTickets = Array.from({ length: Number(ticketCount) }, () => ({
      id: generateRandomTicketNumber(),
    }));
    setTickets(newTickets);
  };

  return (
    <div className="container-fluid">
      <div className="mb-4" id="no-print">
        <h2 className="my-4 text-center" id="no-print">
          Event Ticket Generator
        </h2>
        <input
          type="number"
          min="1"
          value={ticketCount}
          onChange={(e) => setTicketCount(e.target.value)}
          placeholder="Enter number of tickets"
          className="form-control mb-3"
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Price of tickets"
          className="form-control mb-3"
        />
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Enter event name"
          className="form-control mb-3"
        />
        <button className="btn btn-primary w-100" onClick={generateTickets}>
          Generate Raffle Tickets
        </button>
      </div>
      <div id="ticketSection" className="row">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="col-md-4 mb-3">
            <div className="d-flex gap-2 align-item-middle rounded-4">
              <div className=" w-100 ticket-card ticket-watermark">
                <div className="ticket-content">
                  <p className="m-0 p-0">{eventName}</p>
                  <p className="fw-bold m-0">Ticket #{ticket.id}</p>
                  <small>আয়োজক কপি </small>
                  <br />
                  <small>{price}</small>
                </div>
              </div>
              <div className=" w-100 ticket-card ticket-watermark">
                <div className="ticket-content">
                  <p className="m-0 p-0">{eventName}</p>
                  <p className="fw-bold m-0">Ticket #{ticket.id}</p>
                  <small>প্রতিযোগী কপি</small>
                  <br />
                  <small>{price}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
