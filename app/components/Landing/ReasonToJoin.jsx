import { reasonToJoin } from "../../utils/constants/index";

const ReasonToJoin = () => {
  return (
    <div className="bg-black h-auto p-2">
      <p className="text-2xl text-white">More reasons to join</p>
      <div className="w-[90%] mx-auto mt-4">
        <div className=" flex justify-between">
          {reasonToJoin.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[24%] h-72 border border-solid border-white rounded-xl p-4 bg-[#241530] text-white bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 relative"
              >
                <p className="font-semibold text-2xl my-2">{item.title}</p>
                <p className="">{item.description}</p>
                <div className="absolute right-10 bottom-10">{item.icon}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReasonToJoin;
