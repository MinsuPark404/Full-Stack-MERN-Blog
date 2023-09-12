import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BiEdit } from "react-icons/bi"
import { MdDelete } from "react-icons/md"

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold to-black md:text-3xl">10 User of Artficial Intelligence in Day to Day Life</h1>
          <div className="flex items-center justify-center space-x-2">
            <p><BiEdit/></p>
            <p><MdDelete/></p>
          </div>
          <div className="flex items-center justify-between mt-2 md:mt-4">

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
