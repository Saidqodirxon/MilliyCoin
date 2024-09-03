/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css"; // Make sure to import your CSS file
import { AiFillDollarCircle } from "react-icons/ai";
import { MdGroups2 } from "react-icons/md";
import { IoLogoGameControllerA } from "react-icons/io";
import { PiHandTapFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";

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
  function truncateText(text) {
    if (text.length > 7) {
      return text.slice(0, 7) + "...";
    }
    return text;
  }

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center select-none">
      <div className="bg-gradient-to-b from-gray-800 to-blue-600 max-w-md mx-auto p-4 rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-3 rounded-lg mb-4">
          <a href="https://t.me/alcoderbot" className="flex items-center">
            <img
              src="https://web.telegram.org/a/icon-192x192.png"
              alt="Telegram"
              className="w-8 h-8"
            />
            <div className="ml-2">
              <div className="text-sm font-semibold">
                {truncateText("Saidqodirxon Rahimov")}
              </div>
            </div>
          </a>
          <div className="logo">
            <h2>💎 Milliy Coin</h2>
          </div>
          <div className="text-sm">Haqida</div>
        </div>

        <div className="relative flex items-center mb-4 justify-center">
          <img
            src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/yellow-stars-coin_QJF3Fz_thumb.jpg"
            alt="Coin"
            className="w-8 h-8 mr-3 rounded-full"
          />
          <div className="text-3xl font-bold" id="balans">
            {balans}
          </div>
        </div>

        <div className="text-sm mb-4 flex justify-center gap-2">
          <p className="flex justify-between items-center gap-1">
            <AiFillDollarCircle className="text-2xl text-yellow-300" />0 Nimadir
            uroven
          </p>

          <p className="flex justify-between items-center gap-1">
            {" "}
            <PiHandTapFill className="text-2xl text-blue-100" /> Milliy Coin
          </p>
        </div>

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
              className="absolute bg-red-500 text-white text-xl font-bold rounded-full p-2"
              style={{
                left: plusOne.x,
                top: plusOne.y,
                transform: "translate(-50%, -50%)",
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
              <div className="text-lg">
                <FaHome className="text-center flex ml-[25%]" />
                <p className="text-sm mt-2">Asosiy</p>
              </div>
            </div>

            <div className="bg-gray-500 text-center rounded-lg px-3 py-1 mr-1 text-xs">
              <div className="text-lg">
                <AiFillDollarCircle className="text-center flex ml-[25%]" />
                <p className="text-sm mt-2">Olish</p>
              </div>
            </div>
            <div className="bg-gray-500 text-center rounded-lg px-3 py-1 mr-1 text-xs">
              <div className="text-lg">
                <MdGroups2 className="text-center flex ml-[25%]" />
                <p className="text-sm mt-2">Tarqat</p>
              </div>
            </div>
            <div className="bg-gray-500 text-center rounded-lg px-3 py-1 mr-1 text-xs">
              <div className="text-lg">
                <IoLogoGameControllerA className="text-center flex ml-[25%]" />
                <p className="text-sm mt-2">O'yin</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-600 to-gray-300 h-3 rounded-lg"></div>
      </div>
    </div>
  );
};

export default App;
