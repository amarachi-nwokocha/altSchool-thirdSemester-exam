import img from '../../assets/un2.svg'

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="flex flex-col md:flex-row justify-between my-20 md:mx-[40px] px-10 md:px-[30px]"
      >
        <div className="">
        <h1 className=" text-3xl font-bold mb-12">About Chatter</h1>
          <p className=' mb-10 md:mb-0 md:w-[550px]'>
            Chatter is a multi-functional platform where authors and readers can
            have access to their own content. It aims to be a traditional
            bookworm’s heaven and a blog to get access to more text based
            content. Our vision is to foster an inclusive and vibrant community
            where diversity is celebrated. We encourage open-mindedness and
            respect for all individuals, regardless of their backgrounds or
            beliefs. By promoting dialogue and understanding, we strive
          </p>
        </div>
        <div className="">
            <img src={img} className='h-[300px]' alt="Chatter Team" />
        </div>
      </section>
    </div>
  );
};

export default About;
