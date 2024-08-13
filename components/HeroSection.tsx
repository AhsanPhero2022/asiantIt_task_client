import Image from "next/image";
import { MdOutlineNoteAlt } from "react-icons/md";
import { MdOutlineNoteAdd } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { MdOutlineVoiceOverOff } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="">
      <div>
        <Image
          width={1200}
          height={500}
          src="https://medeasy.health/_next/image?url=https%3A%2F%2Fapi.medeasy.health%2Fmedia%2Fsliders%2Fcontent-22.png&w=1920&q=100"
          alt="banner"
          className="rounded-lg"
        />
      </div>

      <div className="my-4 grid lg:grid-cols-4 md:grid-cols-2 gap-4 text-white">
        <div className="bg-[#82ccdd] py-16 px-6 rounded-lg flex gap-2 justify-center items-center">
          <MdOutlineNoteAlt className="text-black size-10" />
          <h1>Upload Prescriptions</h1>
        </div>
        <div className="bg-[#589eaf] py-16 px-6 rounded-lg flex gap-2 justify-center items-center">
          <MdOutlineNoteAdd className="text-black size-10" />
          <h1>Book Appointment </h1>
        </div>
        <div className="bg-[#38ada9] py-16 px-6 rounded-lg flex gap-2 justify-center items-center">
          <CiVideoOn className="text-black size-10" />
          <h1>Doctor Consultation </h1>
        </div>
        <div className="bg-[#3c6382] py-16 px-6 rounded-lg flex gap-2 justify-center items-center">
          <MdOutlineVoiceOverOff className="text-black size-10" />
          <h1>Call to Order: ****</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
