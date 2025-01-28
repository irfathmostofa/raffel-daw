import { useState } from "react";

import "./App.css";

function App() {
  const [tickets, setTickets] = useState([]);
  const [ticketCount, setTicketCount] = useState(0);
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
      <h2 className="my-4 text-center" id="no-print">
        Event Ticket Generator
      </h2>
      <div className="mb-4" id="no-print">
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
            <div
              className="d-flex gap-2 align-item-middle"
              style={{ border: "1px dashed #000" }}
            >
              <div
                className="p-3 w-100"
                style={{ borderRight: "1px dashed #000" }}
              >
                <p>{eventName}</p>
                <p className="fw-bold">Ticket #{ticket.id}</p>
                <small>আয়োজক কপি </small>
              </div>
              <div className="p-3 w-100">
                <p>{eventName}</p>
                <p className="fw-bold">Ticket #{ticket.id}</p>
                <small>প্রতিযোগী কপি</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
