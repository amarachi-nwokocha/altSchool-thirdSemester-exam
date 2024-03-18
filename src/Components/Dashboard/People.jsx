import img1 from '../../assets/faces.svg'


const People = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between md:mx-40  px-10 md:px-[30px]">
        <div  className='w-[200px] md:w-full ml-10 md:ml-0'>
          <img src={img1} alt="" />
          
        </div>
        <div className='md:w-[500px] md:my-10 p-3 ml-7 md:ml-0 md:p-0 '> 
          <h3 className='font-bold  text-4xl leading-[50px]'>Write, read and connect with great minds on chatter</h3>
          <p>
            Share people your great ideas, and also read write-ups based on your
            interests. connect with people of same interests and goals{" "}
          </p>
          <button className="border-2 px-8 mt-6 py-2 rounded-md bg-purple text-white">
         Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default People;
