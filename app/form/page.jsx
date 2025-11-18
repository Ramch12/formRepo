"use client";
import Input from "../components/input";
import TextArea from "../components/textArea";
import Select from "../components/select";
import Link from '../components/link';
import { countries, genderConstants, hobbies } from '../utils/constants/index';
import Button from "../components/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSubmitForm } from '../hooks/submitForm'

const formPage = () => {
  const { currentDate, formik, setCurrentDate } = useSubmitForm();
  return (
    <>
      <div className=" bg-[#d7f0ef] w-full h-auto border border-solid border-black flex justify-center">
        <div className="bg-[#eeb0af] w-[1200px] h-auto border border-solid border-black mt-20 flex justify-between flex-col rounded-2xl p-5">
          <div className="w-full h-20 border border-solid border-black p-5 rounded-2xl">
            <h3 className="text-3xl text-center font-semibold">
              Contact Form
            </h3>
          </div>

          <div className="w-full h-full border border-solid border-black mt-5 rounded-2xl my-5">
            <div className="w-full flex justify-around">
              <Input label="FirstName" placeholder="Enter Your First Name" {...formik} />
              <Input label="LastName" placeholder="Enter Your Last Name" {...formik} />
            </div>
            <div className="w-full flex justify-around">
              <Input label="Email" placeholder="Enter Your email" {...formik} />
              <Input label="Age" placeholder="Enter your age" {...formik} />
            </div>
            <div className="w-full flex justify-around">
              <Input label="Password" placeholder="Enter your password" {...formik} />
              <Input
                label="College Name"
                placeholder="Enter your college name"
                {...formik}
              />
            </div>

            {/* Countries Dropdown */}

            <div className="w-full px-10 mt-5">
              <Select options={countries} className={`border border-black w-full text-black`} />
            </div>

            {/* Gender Radio Button */}
            <div className="px-10 mt-3 ">
              <p className=" font-bold my-2">Select Your Gender</p>
              <div className="flex justify-between w-full">
                {genderConstants.map((item) => {
                  return <>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name={"select_gender"} value={item.value} class="accent-blue-600 w-6 h-6" />
                      <span>{item.title}</span>
                    </label>
                  </>
                })}
              </div>
            </div>

            {/*Checkbox for terms and condition*/}

            <div className="w-1/2 px-10 flex items-center mt-3 justify-start">
              <input type="checkbox" id="terms_condition" className="w-5 h-5 appearance-non" />
              <label htmlFor="" id="terms_condition" className="inline-block ml-2 font-semibold">Agree Terms and Condition</label>
            </div>

            <div className="w-full px-10 mt-5">
              <p className="font-semibold">Hobbies</p>
              <div className="w-full flex justify-between mt-2">
                {hobbies.map((item) => {
                  return <div>
                    <input type="checkbox" id={item.id} className="w-5 h-5 appearance-non" />
                    <label htmlFor="" id={item.id} className="inline-block ml-2 " value={item.value}>{item.title}</label>
                  </div>
                })}
              </div>
            </div>
            <div className="w-full px-10 mt-2">
              <label className="font-semibold">Select your DOB</label>
              <br />
              <DatePicker className="bg-white" placeholderText="Select your date of birth" />
            </div>

            {/* Upload file here */}

            <div className="w-full px-10 mt-4 flex justify-center flex-col items-center">
              <p className="text-center font-semibold">Upload Your file here</p>
              <div className="w-1/2 h-40 border border-dashed border-black">
                <label htmlFor="upload_file" className="w-full h-full flex justify-center items-center">Click Here to upload the file</label>
              </div>
              <input type="file" id="upload_file" style={{ display: "none" }} />
            </div>

            <div className="w-full flex justify-around px-10 mt-2">
              < TextArea />
            </div>

            <div className="w-full grid grid-cols-3 items-center px-10 mb-3 justify-between">
              <div>
              </div>
              <div className="justify-self-start">
                <Button className={`text-center`} />
              </div>
              <div className="flex justify-end">
                <Link btnTxt="Go To Home" path="/home" className=" bg-[#f0d89e] rounded-md border border-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default formPage;
