const textArea = () => {
  return (
    <>
      <div className="w-full">
        <label htmlFor="" className="font-semibold text-md">
          About yourself
        </label>
        <textarea
          name=""
          id=""
          rows={10}
          cols={10}
          style={{ width: "100%" }}
          className="border border-black rounded-md"
        ></textarea>
      </div>
    </>
  );
};

export default textArea;
