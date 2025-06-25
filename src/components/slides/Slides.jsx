import { useRef, useState } from "react";
import PropTypes from "prop-types";
import SlideItem from "./SlideItem";
import SlideButton from "./SlideButton";
import slidesData from "../../data/slidesData.json";
import { ArrowLeftIcon, ArrowRightIcon } from "../../icons";

const Slides = ({ onChangePage }) => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
    };

    return (
        <div className="relative flex flex-row mt-4 mb-5 ml-4 md:ml-16 xl:ml-32 mr-4 md:mr-16 xl:mr-36">
            <div
                ref={scrollRef}
                className="flex px-2 py-1 flex-row gap-2 items-center flex-nowrap overflow-x-hidden overflow-y-hidden no-scrollbar"
            >
                {slidesData.map((item, index) => (
                    <SlideItem
                        key={item.id}
                        title={item.title}
                        icon={item.icon}
                        isActive={activeIndex === index}
                        onChangePage={onChangePage}
                        onClick={() => {
                            setActiveIndex(index);
                            onChangePage(item.title);
                        }}
                    />
                ))}
            </div>
            <div className="flex flex-row gap-3.5 ml-2.5">
                <SlideButton onClick={scrollLeft}>
                    <ArrowLeftIcon color={"#313B54"} />
                </SlideButton>
                <SlideButton onClick={scrollRight}>
                    <ArrowRightIcon color={"#313B54"} />
                </SlideButton>
            </div>
        </div>
    );
};

Slides.propTypes = {
    onChangePage: PropTypes.func.isRequired,
};

export default Slides;
