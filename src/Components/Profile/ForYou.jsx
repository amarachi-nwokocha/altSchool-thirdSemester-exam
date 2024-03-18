import { useEffect, useState } from "react";
 import person from "../../assets/person.svg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
// import { data } from "autoprefixer";
import { VscBook } from "react-icons/vsc";
import { AiOutlineComment } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineAnalytics } from "react-icons/md";

const ForYou = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user.displayName);
  //create async function
  const [posts, setPosts] = useState([])
 const navigate = useNavigate()
  const fetchData = async () => {
    if (user) {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setPosts(querySnapshot.docs);
    } else {
      window.location.replace("/");
    }
  };
  useEffect(() => {
    fetchData();
  },[]);

  const toAnalytics=()=>{
  navigate('/analytics')
  }
  return (
    <div className="" onClick={toAnalytics}>
      {posts?posts.map((item,index) => {
        let postResult = item.data()
        // console.log(postResult);
        return (
          <div
            key={index}
            className="mb-10 ml-10 pr-20"
          >
          <div className="flex gap-2 align-middle">
          <img className="rounded-full " src={person} alt=""/>
            <div>
            <h1 className=" font-semibold mt-4 text-lg">{user.displayName}</h1>
            <div className="flex gap-6 text-[#626262]">
            <p>Technical writer</p>
          <p>{postResult.timeStamp.toDat}</p>
            </div>
            </div>
          </div>
          <div>
          {postResult.title !='' ? <h1 className=" font-semibold mt-4 text-2xl mb-2">{postResult.title}</h1> : null }
         <div className="flex items-center gap-2 text-sm mb-4">
         <VscBook size={20} />
          <p className="text-[#626262] text-sm">10 mins read</p>
         </div>
       
           {postResult.body !='' ? <p className="text-[#626262]">{postResult.body}</p> : null }
            
            {
              postResult.imgUrl ? <img src={postResult.imgUrl} alt="" /> : null
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
        );
      }) : <p>LOADING.....</p>}
    </div>
  );
};

export default ForYou;
