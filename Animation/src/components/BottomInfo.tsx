import { ArrowRight, SearchIcon } from "lucide-react"


const BottomInfo = () =>
{
    return (
        <div className=" px-[5vw] fixed flex  items-center justify-between bottom-0 w-full h-[4vw] z-50">
            <div className="  rounded-tr-lg flex justify-center items-center bg-[#142038] h-full w-24 ml-[-99px]">
                <SearchIcon color="white" />
            </div>
            <div className=" flex text-white ">
                Learn more
                <ArrowRight />
            </div>
        </div>
    )
}

export default BottomInfo