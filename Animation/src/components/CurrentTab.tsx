import { useCurrentTab } from "../store/store"

const CurrentTab = () =>
{
    const currentTab = useCurrentTab().tab
    return (
        <>
            <div className=" fixed top-[45%] right-[8%] text-white">
                <div className=" gap-7 flex flex-col">
                    <div className={`w-3 h-3 rounded-full bg-white ${currentTab === 1 ? " opacity-100" : " opacity-30"}`} />
                    <div className={`w-3 h-3 rounded-full bg-white ${currentTab === 2 ? " opacity-100" : " opacity-30"}`} />
                    <div className={`w-3 h-3 rounded-full bg-white ${currentTab === 3 ? " opacity-100" : " opacity-30"}`} />
                    <div className={`w-3 h-3 rounded-full bg-white ${currentTab === 4 ? " opacity-100" : " opacity-30"}`} />

                </div>

            </div>
        </>
    )
}

export default CurrentTab