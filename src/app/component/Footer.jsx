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
      <footer className="flex  items-center justify-center p-4 gap-5 font-serif text-white bg-stone-500 w-full h-auto">
        <p className="flex justify-center items-center">
          2025 Sastra. All rights reserved.
        </p>
        <p className=" flex justify-center items-center gap-5 ">
          <span className="hover:underline hover:text-black">
            <Link href="/policy/shipping-policy">Shipping Policy</Link>
          </span>
          <span className="hover:underline hover:text-black">
            <Link href="/policy/refund-policy">Refund Policy</Link>
          </span>
        </p>
        <div>
          <Link href="https://www.facebook.com/">
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
          </Link>
          <Link href="https://www.instagram.com/">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </Link>
          <Link href="https://www.whatsapp.com/">
            <FontAwesomeIcon
              icon="fa-brands fa-whatsapp"
              className="text-green-700"
            />
          </Link>
        </div>
      </footer>
    </>
  );
}
