import { useEffect } from "react";
import { ATM, Card } from "../../public/images";
import gsap, { Power3 } from "gsap";
import Form from "./Form";
import { useInView } from "react-intersection-observer";
import { useCurrentTab } from "../store/store";

const Transition3 = () =>
{
    const setTab = useCurrentTab().setCurrentTab
    const [ref, inView] = useInView({ threshold: 0.3 })
    const [ref2, inView2] = useInView({ threshold: 0.3 })
    useEffect(() =>
    {
        if (inView)
        {
            setTab(3)
        }

        if (inView2)
        {
            setTab(4)
        }
    }, [inView, inView2])

    useEffect(() =>
    {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".box2",
                start: "-20% center",
                end: "70% center",
                scrub: 2
            },
        });

        tl.to("#Card2", {
            right: "40%",
            opacity: 100,
            top: "10%",
            // Add the rotation property here:
            rotationY: 360,
            rotationZ: 340,
            rotationX: 360,
            ease: Power3.easeOut,
            stagger: 0.2,
        }, 'z'),

            tl.to("#Scanner", {
                top: "10%",
                opacity: 100,
                ease: Power3.easeOut,
                stagger: 0.2,
            }, 'z');

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".box3",
                start: "-100% center",
                end: "bottom center",
                scrub: 2
            },
        });
        tl3.to("#Card2", {
            top: "75%",
            scale: 1.4,
            left: "20%",
            stagger: 0.2,
        })

    }, []);

    return (
        <>
            <div className="box2 w-full h-[200vh] flex justify-center items-center relative  overflow-hidden">
                <img ref={ref} id="Card2" src={Card} className="absolute z-40 right-[-600px]" width={320} alt="" />
                <img id="Scanner" src={ATM} className=" absolute left-[30%]  bottom-[-50%] " width={500} alt="" />
                <div
                    data-aos="fade-down"
                    data-aos-delay="100s"
                    className=" absolute top-[50%]  text-5xl font-nats text-white flex justify-center flex-col items-center"
                >
                    <h1> NO TOUCH ,NO CONTACT</h1>
                    <h1> NO WORRIES</h1>
                </div>

                <div
                    ref={ref2}
                    className=" box3 w-[32%] h-[25%]
                 absolute right-[15%] bottom-[8%]">

                    <Form />


                </div>
            </div>
        </>

    );
};

export default Transition3;
