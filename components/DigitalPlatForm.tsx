import React from "react";
import { Button } from "./ui/button";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Image from "next/image";

const DigitalPlatForm = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-between items-center my-12">
      <div className="w-[50%]">
        <h1 className="text-4xl font-bold mb-5">
          দেশের ১ নম্বর ডিজিটাল প্লাটফর্ম{" "}
        </h1>
        <p>এক অ্যাপেয় পাবেন সব সমাদান </p>
        <Button className="bg-red-400 hover:bg-red-500 mt-12">
          <IoLogoGooglePlaystore className="me-2" />
          ডাউনলোড করুন
        </Button>
      </div>
      <div className="w-[50%]">
        <Image
          src="https://medeasy.health/_next/image?url=%2Fassets%2Fimages%2Fdoctorlayout.png&w=1920&q=75"
          alt="image"
          width={1200}
          height={500}
        />
      </div>
    </div>
  );
};

export default DigitalPlatForm;
