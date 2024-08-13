import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="my-12">
      <Image
        width={1200}
        height={300}
        src="https://medeasy.health/_next/image?url=%2Fassets%2Fimages%2FstaticPageImage%2FMedEasy_Customer-Review_Banner.png&w=1920&q=100"
        alt="image"
      />
    </div>
  );
};

export default Testimonial;
