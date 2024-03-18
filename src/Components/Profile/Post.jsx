import { useState } from "react";
import { toast } from "react-toastify";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { MdOutlineImage, MdOutlineVideocam } from "react-icons/md";
import { useRef } from "react";
const Post = () => {
  
  const [postDetails, setPostDetails] = useState({
    title: "",
    body: "",
    imageUrl: "",
    videoUrl: "",
    userName: "",
    programming: false,
    machineLearning: false,
    dataScience: false,
    technology: false,
    politics: false,
    webDevelopment: false,
  });
  const {
    title,
  //  userName,
    body,
    // programming,
    // machineLearning,
    // dataScience,
    // technology,
    // politics,
    // webDevelopment,
  } = postDetails;
  const [media, showMedia] = useState(false);
  const uploadImg = (e) => {
    console.log(e.target.value);
    let file = e.target.files[0];
    console.log(file);
    var imgurl = URL.createObjectURL(file);
    setPostDetails({ ...postDetails, imageUrl: imgurl });

    showMedia(false);
  };
  // console.log(hideModal());
  const uploadVid = (e) => {
    let file = e.target.files[0];
    var vidUrl = URL.createObjectURL(file);
    setPostDetails({ ...postDetails, videoUrl: vidUrl });
    showMedia(false);
  };
  console.log(postDetails.imageUrl);
  const handleChange = (e) => {
    setPostDetails((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  //REF ROR IMG UPLOAD

  const upload_ref = useRef(null);

  // Upload Image With Preview
  const UploadFileHandler = () => {
    if (upload_ref.current) {
      return upload_ref.current.click();
    }
  };

  const vid_ref = useRef(null);

  // Upload Image With Preview
  const UploadVidHandler = () => {
    if (vid_ref.current) {
      return vid_ref.current.click();
    }
  };


  const addPost = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      postDetails.userName  = user.displayName;
      const postDetailsCopy = {
        ...postDetails,
        timeStamp: serverTimestamp(),
        userRef: user?.uid,
      };
    
      await addDoc(collection(db, "posts"), postDetailsCopy,user);
      // hideModal()
      postDetails.body= ''
      postDetails.title=''
      toast.success("post added");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleMedia = () => {
    showMedia(!media);
  };

  return (
    <div>
      <button
        className="bg-purple text-white text-sm p-3 rounded-md"
        onClick={addPost}
         
      >
        Publish
      </button>

      <div className="w-[900px] my-5">
      {postDetails.imageUrl ? (
          <img
            src={postDetails.imageUrl}
            alt=""
            srcSet=""
            className="w-[500px] h-[200px] rounded-md"
          />
        ) : null}
        {postDetails.videoUrl ? (
          <video
            src={postDetails.videoUrl}
            className="w-[500px] h-[200px] rounded-md"
          ></video>
        ) : null}
      </div>

      <div className="flex">
        <div className="flex align-middle gap-10">
          <p
            className="text-6xl h-24 border-r-2 hover:cursor-pointer"
            onClick={handleMedia}
          >
            +
          </p>
          {media ? (
            <div className="flex bg-gray-100 gap-10 p-2 h-24 w-[300px] absolute ml-10">
              <MdOutlineImage
                size={42}
                className=" text-purple w-[50px]  h-20 rounded-[50%] border-2 border-purple"
                onClick={UploadFileHandler}
              ></MdOutlineImage>
              <input
                type="file"
                accept="image/png, image/jpeg, image/svg, image,jpg"
                style={{ display: "none" }}
                onChange={uploadImg}
                ref={upload_ref}
                src=""
                alt=""
              />{" "}
              <MdOutlineVideocam
                size={20}
                className="text-purple w-[50px]  h-20 rounded-[50%] border-2 border-purple"
                onClick={UploadVidHandler}
              />
              <input
                type="file"
                accept="video/*"
                style={{ display: "none" }}
                onChange={uploadVid}
                ref={vid_ref}
                src=""
                alt=""
              />{" "}
            </div>
          ) : null}
        </div>
       
        <div>
          <input
            type="text"
            placeholder="Title"
            className="text-3xl outline-none font-semibold"
            value={title}
            onChange={handleChange}
            id="title"
          ></input>
          <textarea
            value={body}
            onChange={handleChange}
            id="body"
            name=""
            cols="85"
            rows="16"
            placeholder="write a post ..."
            className="outline-none p-3 text-md"
          ></textarea>
          <div>
        
            {/* <button
              type="button"
              id="politics"
              onClick={addTag}
              value={politics}
            >
              politics
            </button>
            <button type="button" id="webDevelopment" value={webDevelopment}>
              webDevelopment
            </button>
            <button type="button" id="dataScience" value={dataScience}>
              dataScience
            </button>
            <button type="button" id="machineLearning" value={machineLearning}>
              machineLearning
            </button>
            <button type="button" id="programming" value={programming}>
              programming
            </button>
            <button type="button" id="technology" value={technology}>
              Technology
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
