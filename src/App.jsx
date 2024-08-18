/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css"; // Make sure to import your CSS file

const App = () => {
  const [balans, setBalans] = useState(0);
  const [ketishi, setKetishi] = useState(4000);
  const [url, setUrl] = useState(
    "https://m3854.myxvest.ru/Xzcoinbot-hmzmzh/balans.php?apicid="
  );
  const [cid, setCid] = useState("");
  const [plusOne, setPlusOne] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ketishi < 5000) {
        setKetishi((prev) => prev + 1);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [ketishi]);

  const myFunction = (e) => {
    if (ketishi > 0) {
      setBalans((prev) => prev + 1);
      setKetishi((prev) => prev - 1);

      fetch(`${url}${cid}&apibalans=${balans}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      // Get click/touch position
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPlusOne({ x, y });

      // Hide plusOne after animation
      setTimeout(() => {
        setPlusOne(null);
      }, 1000); // Match with animation duration
    }
  };

  useEffect(() => {
    const handleKeydown = (e) => e.preventDefault();
    const handleContextMenu = (e) => e.preventDefault();
    const handleMousedown = (e) => e.preventDefault();
    const handleTouchstart = (e) => e.preventDefault();

    document.body.addEventListener("keydown", handleKeydown);
    document.body.addEventListener("contextmenu", handleContextMenu);
    document.body.addEventListener("mousedown", handleMousedown);
    document.body.addEventListener("touchstart", handleTouchstart);

    return () => {
      document.body.removeEventListener("keydown", handleKeydown);
      document.body.removeEventListener("contextmenu", handleContextMenu);
      document.body.removeEventListener("mousedown", handleMousedown);
      document.body.removeEventListener("touchstart", handleTouchstart);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-gradient-to-b from-gray-800 to-orange-600 max-w-md mx-auto p-4 rounded-lg shadow-lg">
        <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg mb-4">
          <a href="https://t.me/Icecoinsbot" className="flex items-center">
            <img
              src="https://web.telegram.org/a/icon-192x192.png"
              alt="Telegram"
              className="w-8 h-8"
            />
            <div className="ml-2">
              <div className="text-lg font-semibold">Milliy Coin</div>
              <div className="text-sm">🔵 Bu nima</div>
            </div>
          </a>
          <div className="text-xl">💎 Milliy Coin</div>
        </div>

        <div className="relative flex items-center mb-4">
          <img
            src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/yellow-stars-coin_QJF3Fz_thumb.jpg"
            alt="Coin"
            className="w-8 h-8 mr-3"
          />
          <div className="text-3xl font-bold" id="balans">
            {balans}
          </div>
        </div>

        <div className="text-lg mb-4">Ajoyib • 🏆 Milliy Coin</div>

        <div
          className="relative mb-4"
          onClick={myFunction}
          onTouchStart={myFunction} // Handle touch events
        >
          <img
            src="https://cbu.uz/upload/iblock/c07/100som_2009_01.png"
            alt="Click"
            className="w-full cursor-pointer transform transition-transform hover:scale-95"
          />
          {plusOne && (
            <div
              className="plus-one"
              style={{
                left: plusOne.x,
                top: plusOne.y,
              }}
            >
              +1
            </div>
          )}
        </div>

        <div className="flex justify-between items-center bg-gray-600 p-3 rounded-lg mb-4">
          <div className="flex items-center">
            <div className="text-2xl mr-3">⚡</div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-semibold" id="ketishi">
                {ketishi}
              </div>
              <div className="text-xs" id="kelishi">
                /5000
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="bg-gray-500 text-center rounded-lg px-3 py-1 mr-1 text-xs">
              <div className="text-lg">🔒</div>
              <div>Soon</div>
            </div>
            <div className="bg-gray-500 text-center rounded-lg px-3 py-1 mr-1 text-xs">
              <div className="text-lg">🔒</div>
              <div>Soon</div>
            </div>
            <div className="bg-gray-500 text-center rounded-lg px-3 py-1 text-xs">
              <div className="text-lg">🔒</div>
              <div>Soon</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-600 to-gray-300 h-3 rounded-lg"></div>
      </div>
    </div>
  );
};

export default App;
