import Create from "./Create";
import { Link } from "react-router-dom";
import { AiOutlineTeam } from "react-icons/ai";
import { MdOutlineBookmarks } from "react-icons/md";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { MdOutlineAnalytics } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
const Profile = () => {
  return (
        <div className="flex">
          <div className="border border-l-2 w-[200px] h-full pl-10 pt-5 side-nav">
            <div className=" w-28">
              <h1 className="text-purple text-2xl leading-3">CHATTER</h1>
              <p className="mt-4 text-sm">Overwiew</p>
            </div>
            <div className="p-3">
              <p className="pt-2 mb-2 text-xs">Feed</p>
              <p className="mb-2 text-[12px] flex gap-2 items-center">
                <MdOutlineBookmarks />
                Bookmarks</p>
              <p className="mb-2 text-[12px] flex gap-2 items-center">
                <AiOutlineTeam />
                Team blogs</p>
              <p className="mb-2 text-[12px] flex gap-2 items-center">
                <FaRegEnvelopeOpen />
                draft</p>
              <Link to="/analytics" className="mb-2 text-[12px] flex gap-2 items-center">
                <MdOutlineAnalytics />
                Analytics
              </Link>
            </div>
            <div>
              <h2 className="font-semibold flex gap-2 items-center">
                Trending tags 
                 <AiOutlineRise />
                </h2>
              <div className="p-3">
                <p className="mb-2 text-xs">Programming</p>
                <p className="mb-2 text-xs">Data Science</p>
                <p className="mb-2 text-xs">Technology</p>
                <p className="mb-2 text-xs">Machine learning</p>
                <p className="mb-2 text-xs">Politics</p>
                <p className="mb-2 text-xs">See all</p>
              </div>
            </div>
            <div>
              <h2>Personal</h2>
              <div className="p-3">
                <p className="mb-2 text-xs flex gap-2 items-center">
                  <IoPersonOutline />
                  Account</p>
                <p className="mb-2 text-xs flex gap-2 items-center">
                  <FaRegBell />
                  Notifications</p>
              </div>
              <p className="mb-2 text-sm text-red">Log out</p>
            </div>
          </div>
      <div>
        <div className="text-center">
          <input type="text" placeholder="search chatter" />
        </div>
        <div>
          <Create />
        </div>
      </div>
    </div>
  );
};

export default Profile;
