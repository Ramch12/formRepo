"use client";
import { Poppins } from "next/font/google";
import Input from "../input";
import Button from "../button";
import { PiGreaterThan } from "react-icons/pi";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const HeroSection = () => {
  return (
    <>
      <div
        className={`text-white w-full h-screen flex justify-center items-center flex-col`}
      >
        <div className={`text-6xl text-center ${poppins.className} font-bold`}>
          <p>Unlimited movies,</p>
          <p className="mt-5">shows, and more</p>
        </div>
        <p className="mt-5 text-xl font-semibold">
          Starts at ₹149. Cancel at any time.
        </p>
        <p className="mt-5">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex justify-between w-[560px] mt-3">
          <Input className={"ml-2 h-12 w-[400px]"} placeholder="Enter your email"/>
          <Button
            btnTxt="Get Started"
            icon={<PiGreaterThan />}
            className="w-40 ml-2"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
