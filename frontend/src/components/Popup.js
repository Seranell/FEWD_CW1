import React, { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { RxCross2 } from "react-icons/rx";

const Popup = () => {
  const [hasRated, setHasRated] = useLocalStorage("hasRated", false);
  const [isVisible, setIsVisible] = useState(!hasRated);
  const [selectedRating, setSelectedRating] = useState(null);
  const [comment, setComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emojis = [
    { emoji: "😡", label: "Terrible" },
    { emoji: "😕", label: "Bad" },
    { emoji: "😐", label: "Okay" },
    { emoji: "😊", label: "Good" },
    { emoji: "🤩", label: "Excellent" },
  ];

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    if (!hasRated && !isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 60000);

      return () => clearTimeout(timer);
    }
  }, [hasRated, isVisible]);

  const handleRating = (index) => {
    setSelectedRating(index + 1);
  };

  const handleSubmit = () => {
    if (selectedRating) {
      if (!comment.trim()) {
        alert("Please add a comment before submitting.");
        return;
      }

      setIsSubmitted(true);
      setHasRated(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      console.log("Feedback submitted:", { rating: selectedRating, comment });
    } else {
      alert("Please select a rating before submitting.");
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="popup bg-white text-gray-800 p-6 rounded shadow-lg max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-bold">Rate this Conference Event!</p>
              <button
                onClick={handleClose}
                className="text-gray-800 font-bold hover:text-gray-500 text-2xl"
                aria-label="Close pop-up"
              >
                <RxCross2 />
              </button>
            </div>

            {!isSubmitted ? (
              <>
                <p className="mb-4">How would you rate your experience?</p>
                <div className="flex justify-center gap-4 mb-4 flex-wrap">
                  {emojis.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleRating(index)}
                      className={`text-4xl ${
                        selectedRating === index + 1
                          ? "scale-125 text-yellow-500"
                          : "text-gray-300"
                      } transition-transform duration-200 hover:scale-150`}
                      aria-label={item.label}
                      title={item.label}
                    >
                      {item.emoji}
                    </button>
                  ))}
                </div>

                {selectedRating && (
                  <div className="mb-4">
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full p-2 rounded bg-gray-100 text-gray-800"
                      placeholder="Please share your experience..."
                      rows="4"
                    />
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  className="bg-green-500 px-4 py-2 rounded text-white font-semibold hover:bg-green-600 transition"
                >
                  Submit
                </button>
              </>
            ) : (
              <p className="text-center font-bold">Thank you for your feedback! 🎉</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;