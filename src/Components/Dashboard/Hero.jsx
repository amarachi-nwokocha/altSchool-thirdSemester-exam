import "./main.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className=" bg-black opacity-70 h-[500px]">
        <div className="px-4 pt-20 md:px-[120px] md:pt-[100px]">
          <h1 className="text-4xl relative mb-6 md:w-[700px] font-semibold text-white ">
            Welcome to Chatter: A Haven for Text-Based Content
          </h1>
          <p className="md:w-[470px] mb-10 md:mb-[30px]">
            Unleash the Power of Words, Connect with Like-minded Readers and
            Writers
          </p>
          <button className=" border-2 px-8 py-2 rounded-md bg-purple text-white">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;