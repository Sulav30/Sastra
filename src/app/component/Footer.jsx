import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

export default function Footer() {
  return (
    <>
      <footer className=" relative flex  items-center justify-center px-5 py-4  font-serif text-white bg-stone-500">
        <div className="flex gap-5 absolute left-1/2 transform -translate-x-1/2">
          <span>2025 Sastra. All rights reserved.</span>

          <span className="hover:underline hover:text-black">
            <Link href="/policy/shipping-policy">Shipping Policy</Link>
          </span>
          <span className="hover:underline hover:text-black">
            <Link href="/policy/refund-policy">Refund Policy</Link>
          </span>
        </div>

        <div className=" ml-auto  flex items-center gap-5 px-3 py-1 rounded-full ">
          <Link href="https://www.facebook.com/" target="_blank">
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              className="text-blue-700 h-5 w-5"
            />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              className="h-5 w-5 text-pink-600"
            />
          </Link>
          <Link href="https://www.whatsapp.com/" target="_blank">
            <FontAwesomeIcon
              icon={["fab", "whatsapp"]}
              className="text-green-800 h-5 w-5"
            />
          </Link>
        </div>
      </footer>
    </>
  );
}
