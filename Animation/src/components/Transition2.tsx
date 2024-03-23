//@ts-nocheck

import { useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Gift, Phone, Plane, Bag, Coin, ATM } from "../../public/images";
import { useCurrentTab } from '../store/store';
import { useInView } from 'react-intersection-observer';


gsap.registerPlugin(ScrollTrigger);

const Transition2 = () =>
{
    const [ref1, inView] = useInView({ threshold: 0.5 })
    const setTab = useCurrentTab().setCurrentTab
    useEffect(() =>
    {


        const phoneImage = document.querySelector('#Phone');
        //@ts-ignore
        phoneImage.style.opacity = 1;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.box1',
                start: '-20% center',
                end: 'bottom center',

                scrub: 2

            },
        });

        tl.from('#Phone', {
            opacity: 100,
            ease: Power3.easeOut,
            duration: 1,
            stagger: 0.2,
            onComplete: () => phoneImage.style.opacity = 1,
        }, 'p');
        tl.to('#Plane', {
            scale: 1.2,
            top: '-=90',
            left: '+=50',
            opacity: 100,
            ease: Power3.easeOut,
            duration: 1,
            stagger: 0.2,
        }, 'p');
        tl.to('#Gift', {
            scale: 1.3,
            top: '-=10',
            left: '-=160',
            opacity: 100,
            rotate: "70deg",
            ease: Power3.easeOut,
            duration: 1,
            stagger: 0.2,
        }, 'p');
        tl.to('#Bag', {
            scale: 1.3,
            top: '-=10',
            left: '-=250',
            opacity: 100,
            rotate: "-70deg",
            ease: Power3.easeOut,
            duration: 1,
            stagger: 0.2,
        }, 'p');
        tl.to('#Coin', {
            scale: 1.3,
            top: '+=100',
            left: '+=160',
            opacity: 100,
            rotate: "12deg",
            ease: Power3.easeOut,
            duration: 1,
            stagger: 0.2,
        }, 'p');
        tl.to('#ATM', {
            scale: 1.3,
            top: '+=100',
            left: '+=160',
            opacity: 100,
            rotate: "12deg",
            ease: Power3.easeOut,
            duration: 1,
            stagger: 0.2,
        }, 'p');
    }, []);
    useEffect(() =>
    {
        if (inView)
        {
            setTab(2)
        }
    }, [inView])

    return (
        <>
            <div ref={ref1} className="box1 w-full h-[100vh] flex justify-center items-center relative ">
                <img id="Phone" className=" z-10" width={270} src={Phone} alt="" />
                <img id='Plane' className=' absolute left-[50%] top-[20%] z-[9]' src={Plane} width={300} alt="" />
                <img id='Gift' className=' absolute left-[40%] bottom-[30%]  z-[9]' src={Gift} width={120} alt="" />
                <img id='Bag' className=' absolute left-[45%]  top-[20%]   z-[9]' src={Bag} width={120} alt="" />
                <img id='Coin' className=' absolute left-[55%] top-[30%] z-[9]' src={Coin} width={40} alt="" />
                <img id='ATM' className=' absolute left-[50%]  bottom-[30%] z-[9]' src={ATM} width={90} alt="" />

                <div
                    data-aos="fade-down"
                    data-aos-delay="100s"
                    className=" absolute bottom-0  text-5xl font-nats text-white flex justify-center flex-col items-center">
                    <h1>SPEND MORE, EARN MORE</h1>
                    <h1>WITH NEPAL BANK</h1>
                </div>

            </div>
        </>
    );
};

export default Transition2;
