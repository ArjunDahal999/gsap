

const Form = () =>
{
    return (
        <>
            <div className="  gap-16  flex flex-col">
                <h1 className=' text-white font-nats text-6xl '>Let's Get Started</h1>
                <input placeholder=" ID NUMBER" className=' h-12 border-b-2  bg-transparent  border-slate-400' type="text" />
                <input placeholder="PHONE NUMBER" className=' h-12 border-b-2  bg-transparent  border-slate-400' type="text" />
                <div className=" flex gap-2 ">
                    <input id="checkbox" type="checkbox" className=" border-2 border-purple-400 w-6 h-6 bg-transparent" />
                    <h1 className=" text-slate-400  translate-y-[-15px]">I accpet terms & Condition . Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquam ullam. Necessitatibus</h1>
                </div>
                <button className=" cursor-pointer translate-y-[-45px] px-6 py-6 w-[200px] rounded bg-gradient-to-r from-purple-800  via-pink-400  to-purple-700 text-white ">Apply Now</button>
            </div>
        </>
    )
}

export default Form