import { Link } from "react-router-dom";
import { AiOutlineTeam } from "react-icons/ai";
import { MdOutlineBookmarks } from "react-icons/md";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { MdOutlineAnalytics } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { collection} from "firebase/firestore";
import {  query, where, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { VscBook } from "react-icons/vsc";
import { AiOutlineComment } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import person from "../../assets/person.svg";
const Analytics = () => {
  
  const [onePost, setOnePost] = useState()
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchPostings()
  
  })
  async function fetchPostings() {
    try {

  const listingRef = collection(db, "posts")
  const q = query(
    listingRef,
    where("userRef", "==", user.uid),
    orderBy("timeStamp", "asec"),
    limit(1)
  );
  const querySnap = await getDocs(q);
  querySnap.docs.map(async (doc) => {
    const userRef = doc.data()
    setOnePost(userRef)
  })
  }
  catch (error) {
    console.error(error.message);
    toast.error("There was an error while fetching your posts.");
  
  }

}
  return (
    <div className="flex">
      <div className="border border-l-2 w-[200px] h-fit pl-10 pt-5 side-nav">
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
      <div className=" w-full ml-12 ">
        <div className="text-center w-full border-b-2">
          <input
            type="text"
            placeholder="search chatter"
            className="w-[400px] border-2 my-2 outline-none h-7 px-2 rounded-md"
          />
        </div>
        <div className="mt-4 ml-3 w-[900px] h-fit">
          <div className=" border-b-2 border-purple w-full">
            <h1 className=" font-semibold text-xl mb-6">Post analytics</h1>
            <div className="flex gap-1 mb-4 items-center">
              <p>May 2023,</p>
              <p className="text-[#626262] text-sm">25 days so far</p>
            </div>
          </div>
          <div className="">
            <h2 className="font-semibold text-lg my-4">Post highlight</h2>
           <div className="flex items-center gap-2">
           <p className="font-semibold text-xl">
              Top post{" "}
            </p>
              <span className="text-[#626262] text-sm">
                earned 2980 impressions
              </span>
           </div>
            <div>
              {
                onePost? 
                <div
                className="mb-10  pr-20"
              >
              <div className="flex gap-2 align-middle">
              <img className="rounded-full " src={person} alt=""/>
                <div>
                <h1 className=" font-semibold mt-4 text-lg">{user.displayName}</h1>
                <div className="flex gap-6 text-[#626262]">
                <p>Technical writer</p>
              <p>{onePost.timeStamp.toDat}</p>
                </div>
                </div>
              </div>
              <div>
              {onePost.title !='' ? <h1 className=" font-semibold mt-4 text-2xl mb-2">{onePost.title}</h1> : null }
             <div className="flex items-center gap-2 text-sm mb-4">
             <VscBook size={20} />
              <p className="text-[#626262] text-sm">10 mins read</p>
             </div>
           
               {onePost.body !='' ? <p className="text-[#626262]">{onePost.body}</p> : null }
                
                {
                  onePost.imgUrl ? <img src={onePost.imgUrl} alt="" /> : null
                }
              </div>
             <div>
              <p>
              
              </p>
             </div>
             <div className="flex justify-between text-sm mt-2  mb-4">
                <div className="flex items-center gap-2">
                <AiOutlineComment />
                <p>200</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegHeart />
                  <p>120</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineAnalytics />
                  <p>2980 views</p>
                </div>
             </div>
              </div>
                : <p>E don cast</p>
              }
            </div>
            <button className="text-sm bg-purple text-white p-3 font-semibold rounded-md">
              View post activity
            </button>
          </div>
          <div>
            <div className="border-b-2 border-purple w-full">
              <h3 className="font-semibold mt-4 text-2xl mb-2">Post summary</h3>
              <p className="text-[#626262] text-sm">May 2023 summary</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 pt-3 gap-4 w-[300px]">
              <div className=" px-3">
                <p className="text-[#626262] "> Posts</p>
                <p className="ml-3 font-semibold text-xl">3</p>
              </div>
              <div className=" px-3">
                <p className="text-[#626262] "> Post Impressions</p>
                <p className="ml-3 font-semibold text-xl">2.98K views</p>
              </div>
              <div className=" px-3">
                <p className="text-[#626262] "> Profile visits</p>
                <p className="ml-3 font-semibold text-xl">300</p>
              </div>
              <div className=" px-3">
                <p className="text-[#626262] "> New followers</p>
                <p className="ml-3 font-semibold text-xl">300</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
