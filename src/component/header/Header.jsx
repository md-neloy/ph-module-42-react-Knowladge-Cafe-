import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <>
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-3xl font-bold">Knowladge Cafe</div>
        <div>
          <img src={profile} alt="" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
