"use client";
import Input from "../components/input";
import TextArea from "../components/textArea";
import Select from "../components/select";

const formPage = () => {
  return (
    <>
      <div className=" bg-[#47C1BF] w-full h-auto border border-solid border-black flex justify-center">
        <div className="bg-[#F7A9A8] w-[1200px] h-screen border border-solid border-black mt-20 flex justify-between flex-col rounded-2xl p-5">
          <div className="w-full h-20 border border-solid border-black p-5 rounded-2xl">
            <h3 className="text-3xl text-center font-semibold">
              This is a form Page
            </h3>
          </div>

          <div className="w-full h-full border border-solid border-black mt-5 rounded-2xl">
            <div className="w-full flex justify-around">
              <Input label="FirstName" placeholder="Enter Your First Name" />
              <Input label="LastName" placeholder="Enter Your Last Name" />
            </div>
            <div className="w-full flex justify-around">
              <Input label="Email" placeholder="Enter Your email" />
              <Input label="Age" placeholder="Enter your age" />
            </div>
            <div className="w-full flex justify-around">
              <Input label="Password" placeholder="Enter your password" />
              <Input
                label="College Name"
                placeholder="Enter your college name"
              />
            </div>
            <div>
            <Select />
            </div>
            <div className="w-full flex justify-around px-10 mt-2">
             < TextArea />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default formPage;
