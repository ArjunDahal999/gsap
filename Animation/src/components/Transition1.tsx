import React, { useEffect, useRef } from 'react';
import { gsap, Power1, Power3 } from 'gsap';
import { Card, Circle, Cylinder, Ring, Semi } from '../../public/images';
import { useCurrentTab } from '../store/store';
import { useInView } from 'react-intersection-observer';
import 'aos/dist/aos.css';
import Aos from 'aos';


const Transition1: React.FC = () =>
{
    const setTab = useCurrentTab().setCurrentTab
    const [ref, inView] = useInView()
    useEffect(() =>
    {

        setTab(1);
        Aos.init();
        const tl = gsap.timeline({
            scrollTrigger: {
                start: '0% 0%',
                end: '70% 50%',
                scrub: 7,

            },
        });

        tl.to('#card', {
            top: '-10%',
            duration: 10,
            opacity: 0,
            rotateY: '-180deg',
            ease: Power1.easeInOut,
        }, 'o');

        tl.to('#circle', {
            top: '0%',
            opacity: 0,
            duration: 10,
            ease: Power3.easeInOut,
        }, 'o');

        tl.to('#semi', {
            top: '0%',
            opacity: 0,
            duration: 10,
            ease: Power3.easeInOut,
        }, 'o');

        tl.to('#ring', {
            top: '0%',
            opacity: 0,
            duration: 10,
            ease: Power3.easeInOut,
        }, 'o');

        tl.to('#cylinder', {
            top: '0%',
            opacity: 0,
            duration: 10,
            rotate: "120deg",
            ease: Power3.easeInOut,
        }, 'o');

    }, []);

    useEffect(() =>
    {
        if (inView)
        {
            setTab(1)
        }
    }, [inView])

    return (
        <div ref={ref} data-aos="fade-down"
            data-aos-delay="200" className=" w-full h-[100vh] z-[-10] flex justify-center items-center relative">
            <img width={120} id="cylinder" height={120} className="absolute top-[15vw] left-[35vw]" src={Cylinder} alt="" />
            <img width={400} id="card" className="absolute transform -rotate-12 z-[49]" src={Card} alt="Card" />
            <img width={70} id="ring" className="absolute top-[7vw] left-[35vw]" src={Ring} alt="" />
            <img width={120} id="circle" className="absolute top-[10vw] left-[60vw]" src={Circle} alt="" />
            <img width={40} id="semi" className="absolute top-[25vw] left-[50vw]" src={Semi} alt="" />
            <div data-aos="fade-up"
                data-aos-delay="800" className="  dialog absolute bottom-[20px] left-[35vw]">
                <div className=" box text-6xl text-white font-nats">
                    <h1>THE MOST ADVANTEGOUS</h1>
                    <h1 className="ml-40">CREDIT CARD</h1>
                </div>
                <p className="ml-[-10vw] text-slate-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at consequatur, dolores ducimus veniam vel
                    voluptas consequuntur sint ab enim!
                </p>
            </div>
        </div>
    );
};

export default Transition1;
