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
      <footer className="flex  items-center justify-center p-4 gap-2 ">
        <p className="flex justify-center items-center">
          2025 Sastra. All rights reserved.
        </p>
        <span className="gap-2 flex justify-center items-center">
          <Link href="/policy/shipping-policy">Shipping Policy</Link>
          <Link href="/policy/refund-policy">Refund Policy</Link>
        </span>
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
