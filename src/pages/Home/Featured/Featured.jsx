import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"

import './Featured.css'
const Featured = () => {
    return (
        <div className="pt-4 my-16 bg-fixed featured-item text-white">
            <SectionTitle
            subHeading="Check it out"
            heading="Featured Item"
            ></SectionTitle>

            <div className="md:flex justify-center bg-slate-600 opacity-60 items-center pt-12 pb-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio est fuga perspiciatis maxime voluptatem qui a fugit incidunt repellat blanditiis.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;