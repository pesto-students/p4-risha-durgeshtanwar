import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import UrlForm from "./components/UrlForm";
import Card from "./layout/Card";

function App() {
  const [shortLink, setShortLink] = useState("");
  const handleUrl = async (url) => {
    try {
      const options = { method: "POST" };
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`,
        options
      );
      const data = await response.json();
      setShortLink(data.result.short_link);
    } catch (error) {
      setShortLink(
        <div className="text-red-500">
          {" "}
          Something went wrong. please check your url
        </div>
      );
    }
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(shortLink);
    toast("Shortlink Copied");
  };
  return (
    <Router>
      <ToastContainer />
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <Main />
        <UrlForm handleUrl={handleUrl} />
        {shortLink && shortLink.length > 0 ? (
          <Card>
            <div class="flex justify-between">
              <p className="shortlink">{shortLink}</p>
              <button
                type="button"
                className="py-2 px-4 bg-green-300 text-black"
                onClick={handleCopy}
              >
                Copy
              </button>
            </div>
          </Card>
        ) : (
          " "
        )}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
