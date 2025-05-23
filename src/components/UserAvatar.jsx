const UserAvatar = () => {
  return (
    <div className="flex items-center space-x-4">
      <img
        src="https://i.ibb.co/swg7qVX/322601239-1295619711229716-8901972936173054758-n.jpg"
        alt="User Avatar"
        className="w-10 h-10 rounded-full"
      />
      <div>
        <p className="font-medium">Abrar Haider</p>
      </div>
    </div>
  );
};

export default UserAvatar;
