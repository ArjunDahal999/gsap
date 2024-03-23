
const navLinks: string[] = ["FEATURE", "BENEFIT", "OFFER", "SUPPORT"]
const HorizontalNav: React.FC = () =>
{
    return (
        <>
            <ul className=" text-white font-nats fixed top-[30%] ml-10 py-10 h-[60vh] flex flex-col justify-between">
                {navLinks.map((link, index) => (
                    <li className=" transform -rotate-90" key={index}>
                        <a className="text-neon-white" href="/">{link}</a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default HorizontalNav