
const Footer = () => {
  return (
    <div>
        <div className="bg-[#FFEDCC80]  mt-20 px-10  py-20 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
            <a className=" text-purple font-bold text-2xl" href="/"> CHATTER</a>
            </div>
            <div>
                <h4 className="font-bold">Explore</h4>
                <p>Community</p>
                <p>Trending Blogs</p>
                <p>Chatter for teams</p>
            </div>
            <div>
                <h3 className="font-bold">Support</h3>
                <p>Support docs</p>
                <p>Join slack</p>
                <p>Contact</p>
            </div>
            <div>
                <h3 className="font-bold">Official Blog</h3>
                <p>Official blod</p>
                <p>Engineering blog</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
