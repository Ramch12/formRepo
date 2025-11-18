import Link from "next/link";

const link = ({ btnTxt = "Submit", path = "/form", className=''}) => {
  return (
    <>
      <div>
        <button className={`w-32 h-12 ${className}`}>
          <Link href={`${path}`}>{btnTxt}</Link>    
        </button>
      </div>
    </>
  );
};

export default link;
