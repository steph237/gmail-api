import "./App.css";
import React from "react";
import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
// import axios from "axios";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=xz10U--DxnmCZryuKrhMDSYtONRRPAOqu7ar9jiBHts"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div> Error : {error.message}</div>;
  } else if (isLoaded) {
    return <div> laoding....</div>;
  } else {
    return (
      <div className="main mx-10">
        <h1 className="text-4xl font-bold text-blue-700 mt-6 p-8">
          {" "}
          Send Batch Emails{" "}
        </h1>
        <ul>
          {items.map((item) => (
            <li key={item.id}>Username: {item.likes}</li>
          ))}
        </ul>
        <div div className="App p-10">
          <div className="app-image">
            <p className="text-red-700">great</p>
          </div>

          <div className="form-content">
            <form className="p-6">
              <div className="flex flex-col">
                <label htmlFor="email">Enter Emails</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>

              <div className="flex flex-col col-span-2">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="flex flex-col col-span-2">
                <label htmlFor="subject">
                  <div className="flex align-items">
                    Message
                    <span className="ml-auto opacity-50">
                      Max. 500 characters
                    </span>
                  </div>
                </label>
                <textarea
                  maxLength="500"
                  rows="4"
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>

              <div className="flex justify-end py-4">
                <button
                  type="submit"
                  className="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
