import Image from "next/image";
import ButtonLink from './components/link'

export default function Home() {
  return (
    <div className="font-sans p-5">
      <div className="w-full h-screen bg-[#dbdbb0] border border-solid border-black rounded-md ">
        <div className="flex justify-center items-center flex-col p-2">
          <div className="p-3 border border-solid rounded-2xl bg-amber-200">
            <p className="text-center text-3xl font-semibold">Welcome to TG Level App</p>
          </div>
          <div className="p-2 h-32 flex justify-center items-center">
            <p className="text-center text-2xl font-semibold p-3 border border-solid rounded-2xl bg-amber-300 animate-typing">Click Below to get started</p>
          </div>
          <div>
            < ButtonLink btnTxt="Click here" path="/home" className="bg-amber-200 rounded-2xl border border-solid border-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
