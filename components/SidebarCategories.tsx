import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

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

const SidebarCategories = () => {
  return (
    <div className="">
      <div>
        {productCategories.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.pathname}
              className="flex justify-start items-center gap-2 px-3 py-4 border"
            >
              <Image
                src={item.image}
                alt="category"
                width={25}
                height={25}
                className="rounded-full"
              />
              <h1>{item.pathname}</h1>
              <FaArrowRight className="ml-auto text-accent" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarCategories;
