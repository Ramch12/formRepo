import Link from "next/link";

const link = ({ btnTxt = "Submit", path = "/form", className = '' }) => {
  return (
    <>
      <div>
        <button className={`${className}`}>
          <Link href={`${path}`} className="w-full h-full block p-2">{btnTxt}</Link>
        </button>
      </div>
    </>
  );
};

export default link;
