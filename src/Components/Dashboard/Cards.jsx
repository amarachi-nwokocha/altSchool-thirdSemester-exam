import { BsGraphUp } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsNewspaper } from "react-icons/bs";

const Cards = () => {
  return (
    <div className=" ">
      <div className="flex flex-col md:flex-row justify-around gap-10">
        <div className="border-4 p-6 md:p-10 rounded-md mx-10">
          <div className="w-[200px] md:w-[230px] h-[250px] md:h-[200px]]">
            <BsGraphUp size={30} className="mb-6"/>
            <h3 className="text-2xl font-semibold my-6">Analytics</h3>
            <p>
              Analytics to track the number of views, likes and comment and also
              analyze the performance of your articles over a period of time
            </p>
          </div>
        </div>
        <div className="border-4 p-6 md:p-10 rounded-md mx-10">
          <div className="w-[200px] md:w-[230px] h-[250px] md:h-[200px]">
            <FaPeopleGroup size={30} className="mb-6"/>
            <h3 className="text-2xl font-semibold my-6">
            Social interactions
            </h3>
            <p>
            Users on the platform can interact with posts they like, comment and engage in discussions
            </p>
          </div>
        </div>
        <div className="border-4 p-6 md:p-10 rounded-md mx-10">
          <div className="w-[200px] md:w-[200px] h-[250px] md:h-[200px]">
            <BsNewspaper size={30} className="mb-6"/>
            <h3 className="text-2xl font-semibold my-6">
            Content creation
            </h3>
            <p>
            Write nice and appealing with our in-built markdown, a rich text editor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
