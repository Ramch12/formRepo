const textArea = ({ formik, name }) => {
  const { handleChange } = formik;
  return (
    <>
      <div className="w-full">
        <label htmlFor="" className="font-semibold text-md">
          About yourself
        </label>
        <textarea
          name={name}
          id=""
          rows={10}
          cols={10}
          style={{ width: "100%" }}
          className="border border-black rounded-md"
          value={formik.values[name]}
          onChange={handleChange}
        ></textarea>
        {formik.touched[name] && formik.errors[name] && <p className="text-red-500">{formik.errors[name]}</p>}
      </div>
    </>
  );
};

export default textArea;
