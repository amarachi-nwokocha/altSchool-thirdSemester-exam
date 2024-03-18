import img from "../../assets/un4.svg";

const Reviews = () => {
  return (
    <div className="bg-[#FFEDCC80] my-10  pt-[30px] w-full h-fit ">
      <div className="flex flex-col  justify-around  gap-9 md:flex-row mt-[40px]">
        <div>
          <img src={img} className="rounded-full ml-16 md:m-0 h-[200px]" />
        </div>
        <div className=" w-[350px]  p-8 md:p-0 md:w-7/12">
          <p>
            &quot;Chatter has become an integral part of my online experience.
            As a user of this incredible blogging platform, I have discovered a
            vibrant community of individuals who are passionate about sharing
            their ideas and engaging in thoughtful discussions.”
          </p>
          <div className="flex flex-col md:flex-row gap-1 mt-6">
            {" "}
            <p className="font-bold">Adebobola Muhydeen,</p>
            <span> Software developer at Apple </span>
          </div>
          <button className="border-2 px-8 mt-6 py-2 rounded-md bg-purple text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
