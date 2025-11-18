import Logo from "../utils/images/logo";
import Select from "../components/select";
import Button from "../components/button";
import { languages } from "../utils/constants/index";
import HeroSection from "../components/Landing/HeroSection";
import TrendingSection from "../components/Landing/TrendingSection";
import ReasonToJoinSection from "../components/Landing/ReasonToJoin";
import ButtonLink from '../components/link';


export default function Header() {
  return (
    <div className="w-full bg-[url('/netflix-image.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-60 h-screen"></div>
      <div className="relative z-10">
        <div className="flex justify-around items-center">
          <div>
            <Logo />
          </div>
          <div className="flex justify-between items-center min-w-52 relative z-50">
            <div>
              <Select options={languages} className={`border border-black w-full  bg-amber-600`} />
            </div>
            <div>
              <Button btnTxt="Sign In" />
            </div>
          </div>
        </div>
        <div className="relative bottom-20">
          <HeroSection />
        </div>
      </div>
      <div>
        <TrendingSection />
      </div>
      <div>
        <ReasonToJoinSection />
      </div>
      //form section
      <div className="w-full h-52 bg-black text-center p-3 font-semibold font-serif flex flex-col justify-around">
        <h3 className="text-3xl text-white">Fill a form to get touch with you</h3>
        <ButtonLink className={'bg-amber-500 rounded-2xl text-2xl'} />
      </div>
    </div>
  );
}
