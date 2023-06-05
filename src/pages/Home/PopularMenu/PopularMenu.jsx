import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="my-8">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {popular.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 ">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
