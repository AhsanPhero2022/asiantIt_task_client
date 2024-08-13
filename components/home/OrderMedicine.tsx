import Image from "next/image";
import React from "react";
import VideoModal from "../VideoModal";

const OrderMedicine = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="space-y-4 w-[50%]">
          <h1 className="text-4xl font-bold">কিভাবে ঔষধ অর্ডার করবেন?</h1>
          <ol>
            <li>1. প্রেসক্রিপশন ছবি আপলোড করুন অথবা ঔষধ সার্চ করে কিনুন।</li>
            <li>
              2. আমাদের ফার্মাসিস্ট আপনার প্রদানকৃত প্রেসক্রিপশন ভেরিফাইড করে
              আপনাকে ফোন করে অর্ডার কনফার্ম করবেন।
            </li>
            <li>3. ১২-২৪ ঘন্টার মধ্য আপনার ডেলিভারি বুঝে নিন।</li>
          </ol>
          <h2>
            ওষুধে আকর্ষণীয় মূল্যছাড় পেতে এখনই ডাউনলোড করুন - <br />
            <span className="text-2xl font-bold">MedEasy App</span>
          </h2>
          <Image
            src="https://medeasy.health/_next/image?url=%2Fassets%2Fimages%2Fplay-store.png&w=256&q=75"
            alt="image"
            width={100}
            height={100}
          />
        </div>
        <div className="w-[50%]">
          <VideoModal />
        </div>
      </div>
    </div>
  );
};

export default OrderMedicine;
