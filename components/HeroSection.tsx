import Image from "next/image";
import { MdOutlineNoteAlt } from "react-icons/md";
import { MdOutlineNoteAdd } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { MdOutlineVoiceOverOff } from "react-icons/md";
import OrderMedicine from "./home/OrderMedicine";

const productCategories = [
  {
    pathname: "Supplement",
    image:
      "https://medeasy.health/_next/image?url=https%3A%2F%2Fapi.medeasy.health%2Fmedia%2Fmedicines%2Fcategories%2Fdrugs.png&w=96&q=75",
  },
  {
    pathname: "Women's choice",
    image:
      "https://medeasy.health/_next/image?url=https%3A%2F%2Fapi.medeasy.health%2Fmedia%2Fmedicines%2Fcategories%2Fwoman.png&w=96&q=75",
  },
  {
    pathname: "Diabetic Care",
    image:
      "https://medeasy.health/_next/image?url=https%3A%2F%2Fapi.medeasy.health%2Fmedia%2Fmedicines%2Fcategories%2FDiabetics-Care.png&w=96&q=75",
  },
  {
    pathname: "Baby Care",
    image:
      "https://medeasy.health/_next/image?url=https%3A%2F%2Fapi.medeasy.health%2Fmedia%2Fmedicines%2Fcategories%2Fbaby-boy.png&w=96&q=75",
  },
];

const HeroSection = () => {
  return (
    <section className="">
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

      {/* product categories */}
      <div className="my-12">
        <h1 className="text-3xl font-semibold ">Product Categories</h1>
        <div className="my-4 grid lg:grid-cols-4 md:grid-cols-2 gap-4 justify-items-center">
          {productCategories.map((category, index) => {
            return (
              <div key={index}>
                <Image
                  width={100}
                  height={100}
                  src={category.image}
                  alt="image"
                />
                <h1>{category.pathname}</h1>
              </div>
            );
          })}
        </div>
      </div>

      <OrderMedicine />
    </section>
  );
};

export default HeroSection;
