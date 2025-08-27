import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className=" relative">
        <div>
          <img src="/home.png" alt="homecover" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black bg-red-500 text-center">
          <button className="cursor-pointer hover:bg-green-500">
            Sastra 2025 Collection
          </button>
        </div>
        <div></div>
      </div>
    </>
  );
}
