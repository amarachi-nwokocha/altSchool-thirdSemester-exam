// import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import Post from "./Post";
import Featured from "./Featured";
import Recent from "./Recent";
import ForYou from "./ForYou";
// import { db } from "../../firebase";

const Create = () => {
  const [showModal, setShowModal] = useState(false);
  const [forYou, setForYou] = useState(false);
  const [featured, setFeatured] = useState(false);
  const [recent, setRecent] = useState(false);

  // Get a reference to the document with the given ID
 
  const handleForYou = () => {
    setForYou(true);
    setFeatured(false);
    setRecent(false)
  };
  const handleFeatured = () => {
    setForYou(false)
    setFeatured(true);
    setRecent(false)
    };
  const handleRecent = () => {
    setForYou(false)
    setRecent(true);
    setFeatured(false)
    };
  const handleModal = () => {
    setShowModal(!showModal);
  };
  const hideModal = () => {
    setShowModal(false);
  };

  // const getAllDoc = async() =>{

  //   const docRef = doc(db, "posts", 'tgjNJtusVWx7St9e6dRl' );
  // const docSnap = await getDoc(docRef);
  // console.log(docSnap);
  // }
  return (
    <div className="ml-10">
      <div className="border-2 p-10 w-[700px] h-fit ">
        <div className="flex justify-between mt-2">
          <div className="">
            <h2 className="leading-3 text-3xl">FEED</h2>
            <p className="text-gray-400 mt-4 text-sm">
              explore diffrent content you&apos;d love
            </p>
          </div>
          <div>
            {showModal ? (
              <button className="bg-purple text-white text-sm p-3 rounded-md">
                Publish
              </button>
            ) : (
              <button
                className="bg-purple text-white text-sm p-3 rounded-md"
                onClick={handleModal}
              >
                post a content
              </button>
            )}
          </div>
        </div>
        {showModal ? <Post hidemodal={hideModal} /> : 
        
        <div className="">
        <div className="flex justify-between border-2 h-fit p-5 w-[579px] m-5 rounded-md ">
          <p
            className="font-bold border-b-2 hover:border-b-purple "
            onClick={handleForYou}
          >
            For you{" "}
          </p>
          <p
            className="font-bold border-b-2 hover:border-b-purple "
            onClick={handleFeatured}
          >
            Featured
          </p>
          <p
            className="font-bold border-b-2 hover:border-b-purple "
            onClick={handleRecent}
          >
            Recent
          </p>
        </div>
       <div className="rounded-md border-2 p-4">
        {forYou == true ? (
          <ForYou />
        ) : featured == true ? (
          <Featured />
        ) : recent == true ? (
          <Recent />
        ) : (
          <ForYou />
        )}
       </div>
        </div>
        }
      </div>
    </div>
  );
};

export default Create;
