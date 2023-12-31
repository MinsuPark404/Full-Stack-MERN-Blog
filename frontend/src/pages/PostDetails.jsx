import Comment from '../components/Comment';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">10 User of Artficial Intelligence in Day to Day Life</h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@InnoDevMinsu</p>
          <div className="flex space-x-2">
            <p>2023/09/10</p>
            <p>16:15</p>
          </div>
        </div>
        <img src="https://cdn.pixabay.com/photo/2023/02/05/01/10/artificial-intelligence-7768526_640.jpg" className="w-full mx-auto mt-8" alt="" />
        <p className="mx-auto mt-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded px-3 py-1">Ai</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">comments:</h3>
          <Comment />
          <Comment />
        </div>
        {/* write a comment */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0" />
          <button className="bg-black text-sm text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
