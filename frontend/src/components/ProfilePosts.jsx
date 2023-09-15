const ProfilePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img src="https://cdn.pixabay.com/photo/2023/02/05/01/10/artificial-intelligence-7768526_640.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">10 User of Artficial Intelligence in Day to Day Life</h1>
        <div className="flex mb-2 text-sm font-semibold to-gray-500 items-center justify-between md:mb-4">
          <p>@InnoDevMinsu</p>
          <div className="flex space-x-2">
            <p>2023/09/10</p>
            <p>16:15</p>
          </div>
        </div>
        <p className="text-sm md:text-l">
          Prominent examples of AI software used in everyday life include voice assistants, image recognition for face unlock in mobile phones, and machine learning-based fraud detection. AI software usually involves
          just downloading software with AI capabilities from an online store and requires no peripheral devices.
        </p>
      </div>
    </div>
  );
};

export default ProfilePosts;
