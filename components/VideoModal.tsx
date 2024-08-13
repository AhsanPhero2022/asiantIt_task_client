"use client";

import React, { useState } from "react";

const VideoModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center my-4 relative">
      <div className="relative w-full max-w-xl">
        <iframe
          className="w-full aspect-video rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/gYrYj2y4cCQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <button
          onClick={openModal}
          className="absolute inset-0  flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl rounded-lg"
        >
          &#9658;
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative w-full max-w-3xl p-4  rounded-lg shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-5 right-10 text-accent hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <iframe
              className="w-full aspect-video rounded-lg"
              src="https://www.youtube.com/embed/gYrYj2y4cCQ?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoModal;
