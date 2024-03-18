import { useEffect, useState } from "react";
import { collection, getDocs} from "firebase/firestore";
import { db } from "../../firebase";
import person from "../../assets/person.svg";
const Featured = () => {
  const user = JSON.parse(localStorage.getItem("user"));
console.log(user.uid);
  const [posts, setPosts] = useState([])
  const fetchData = async () => {
    if (user) {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setPosts(querySnapshot.docs);

    } else {
      window.location.replace("/");
    }
  };
   console.log(posts);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
         {posts?posts.map((item,) => {
        let postResult = item.data()
        console.log(postResult);
        user.uid == postResult.userRef ? 
        <div
        // key={}
        className=""
      >
      <div className="flex gap-2 align-middle">
      <img className="rounded-full " src={person} alt=""/>
      <h1 className=" font-semibold mt-4 text-lg">{user.displayName}</h1>
      </div>
      <div>
      {postResult.title !='' ? <h1 className=" font-semibold mt-4 text-2xl mb-4">{postResult.title}</h1> : null }
       {postResult.body !='' ? <p className="text-[#626262]">{postResult.body}</p> : null }
    
        {
          postResult.imgUrl ? <img src={postResult.imgUrl} alt="" /> : <p>NOT SHOWING OOOOO</p>
        }
      </div>
      </div>
        
        : <p>nothing to see here.....</p>;
         }):null}
    </div>
  )
}

export default Featured