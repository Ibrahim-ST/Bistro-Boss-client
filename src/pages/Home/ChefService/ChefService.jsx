import chefServiceImg from "../../../assets/home/chef-service.jpg";
const ChefService = () => {
  const divStyle = {
    backgroundImage: `url(${chefServiceImg})`,
    backgroundPosition: "top",
  };
  return (
    <div style={divStyle} className="h-full p-8 rounded my-2">
      <div className="bg-white m-16 p-16 rounded-md hover:bg-slate-100">
        <h3 className="text-4xl text-center font-serif font-thin uppercase">Bistro Boss</h3>
        <p className="text-justify">
          Welcome to our exclusive world of culinary delight! Elevate your
          dining experience to new heights with our exceptional chef
          service. Immerse yourself in a gastronomic journey tailored to your
          every desire. Our team of highly skilled and passionate chefs will
          create unforgettable moments for you and your guests. From intimate
          gatherings to grand celebrations, we bring the artistry of fine dining
          directly to your table.
        </p>
      </div>
    </div>
  );
};

export default ChefService;
