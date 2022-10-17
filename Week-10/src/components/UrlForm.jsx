import React, { useState } from "react";
import Card from "../layout/Card";
import validator from "validator";

function UrlForm({ handleUrl }) {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    handleUrl(url);
  };
  const handleText = (e) => {
    if (validator.isURL(e.target.value)) {
      setMessage("");
      setUrl(e.target.value);
    } else {
      setMessage("please enter a valid url");
    }
  };
  return (
    <div className="container mx-auto">
      <Card>
        <form onSubmit={handleSubmit} className="flex flex-row">
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter url"
            onChange={handleText}
            required
          />
          <button
            type="submit"
            className=" ml-4 mt-1 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Create Shortlink
          </button>
          <p className="text-red-500 font-bold text-xl">{message} </p>
        </form>
      </Card>
    </div>
  );
}

export default UrlForm;
