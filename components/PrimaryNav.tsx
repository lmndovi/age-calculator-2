import Image from "next/image";
import React from "react";

const PrimaryNav = () => {
  return (
    <nav className="px-8 py-3 flex justify-between items-center">
      <div className="flex w-1/2 items-center justify-between">
        <Image
          src="/betsolverslogo.png"
          alt="BetSolvers"
          height={70}
          width={140}
        />

        <ul className="flex space-x-10">
          <li>About us</li>
          <li>Contact us</li>
          <li>Category 3</li>
        </ul>
      </div>

      <button className="flex  items-center justify-evenly w-48 py-3 px-10 bg-[#FB4B4E] rounded-xl">
        <Image src="/logout.svg" alt="icon" height={20} width={20} />
        <p>Logout</p>
      </button>
    </nav>
  );
};

export default PrimaryNav;
