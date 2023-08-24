import React from 'react';
import { ImSpoonKnife } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";

interface Feature {
    id: number;
    logo: React.ReactNode;
    title: string;
    Description: string;
}

const details: Feature[] = [
    {
        id: 1,
        logo: <ImSpoonKnife color='yellow' size={50} />,
        title: 'Tasty Dishes',
        Description: "Delve into a culinary odyssey with our exquisite dishes crafted by expert chefs. Immerse in a realm of flavors and textures, indulging your taste buds and igniting cravings for more.",
    },
    {
        id: 2,
        logo: <AiFillHeart color='yellow' size={50} />,
        title: 'Quality Ingredients',
        Description: " Discover culinary mastery with our dedication to quality. We thoughtfully choose fresh ingredients to craft dishes that satisfy your senses and nurture your body.",
    },
    {
        id: 3,
        logo: <MdFastfood color='yellow' size={50} />,
        title: 'Quick Service',
        Description: "Experience our rapid and efficient service tailored for your busy lifestyle. Enjoy the ease of grabbing your favorite meals on the move, ensuring prompt satisfaction of your cravings.",
    },
];

const SpecialFeatures = () => {
    return (
        <div className="py-16 ">
            <p className="text-3xl font-bold text-center  mb-8">Our Special Features</p>
            <div className="flex flex-wrap justify-center items-center gap-10">
                {details.map((item) => (
                    <div
                        key={item.id}
                        className={`text-center w-72  p-6 rounded-lg shadow-lg transform transition-transform hover:scale-110`}
                    >
                        <div className="flex flex-col items-center mb-4">
                            <div className="text-2xl pb-1">{item.logo}</div>
                            <p className="text-lg font-semibold">{item.title}</p>
                        </div>
                        <p className="text-sm text-gray-500">{item.Description}</p>


                    </div>
                ))}
            </div>
        </div>
    );
}

export default SpecialFeatures;
