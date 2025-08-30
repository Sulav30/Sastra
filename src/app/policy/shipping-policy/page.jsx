import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-black text-white px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-10 space-y-6 font-serif text-base sm:text-lg tracking-wide">
      <p>
        Thank you for choosing Sastra! We strive to provide you with a seamless
        shopping experience, including fast and reliable delivery of your
        orders.
      </p>
      <div>
        <h3 className="font-semibold underline">Order Processing:</h3>
        <p>
          Once you place an order, our team will process it within 24 hours
          (excluding weekends and holidays).
        </p>
        <p>
          You will receive a confirmation email with the details of your order.
        </p>
      </div>
      <div>
        <h3 className="font-semibold underline">Shipping Method:</h3>
        <p>All orders are shipped using our reliable logistic team.</p>
        <p>
          Delivery time within your location is typically 1-3 days from the date
          of order confirmation.
        </p>
        <p>
          For international orders, please allow additional time for delivery
          based on the destination country.
        </p>
      </div>
      <div>
        <h3 className="font-semibold underline">Shipping Costs:</h3>
        <p>Shipping fees will be determined based on the location.</p>
        <p>
          For international orders, shipping costs will be calculated at
          checkout based on the destination and package weight.
        </p>
      </div>
      <div>
        <h3 className="font-semibold underline">Order Tracking:</h3>
        <p>
          Once your order is shipped, you will receive a tracking number via
          email to track your package's journey.
        </p>
      </div>
      <div>
        <h3 className="font-semibold underline">Delivery Issues:</h3>
        <p>
          If you encounter any issues with your delivery, please contact our
          customer service team at @sastraofficialnp for assistance.
        </p>
      </div>
      <div>
        <h3 className="font-semibold underline">Returns & Refunds:</h3>
        <p>
          For information on returns and refunds, please refer to our{" "}
          <Link href={"/policy/refund-policy"}>
            <span className="underline text-pink-400 cursor-pointer">
              Returns Policy
            </span>
          </Link>
          .
        </p>
      </div>
      <div>
        <h3 className="font-semibold underline">Note:</h3>
        <p>Shipping times may vary during peak seasons and holidays.</p>
        <p>
          We do not ship to P.O. boxes. Please provide a physical address for
          delivery.
        </p>
        <p>
          If you have any questions or need further assistance, please feel free
          to contact us at @sastraofficialnp.
        </p>
      </div>
      <h3 className="font-semibold text-center text-pink-500">
        Thank you for choosing Sastra!
      </h3>
    </div>
  );
}
