
const Prices = () => {
    return (
        <div className="flex flex-col md:flex-row gap-5 p-5 justify-between mx-auto w-11/12  ">
            <div className="border bg-blue-400 text-white flex-col rounded-lg flex justify-center items-center px-12 py-5 gap-5">
                <div><h1 className="text-2xl font-bold">Premium PAckage</h1></div>
                <div className="flex justify-center flex-col gap-4  flex-grow">
                    <ul className="list-disc">
                        <li className="text-base font-normal text-[#13131390]">6 month</li>
                        <li className="text-base font-normal text-[#13131390]">6 month</li>
                        <li className="text-base font-normal text-[#13131390]">6 month</li>
                        <li className="text-base font-normal text-[#13131390]">6 month</li>
                        <li className="text-base font-normal text-[#13131390]">36 class</li>
                        <li className="text-base font-normal text-[#13131390]">Every week 3 Live class</li>
                        <li className="text-base font-normal text-[#13131390]">5 Support Session</li>
                    </ul>
                </div>
                <div><button className="px-4 py-2 btn rounded-lg bg-red-500 text-[#ffffffb1]">View details</button></div>
            </div>
            <div className="border bg-blue-400 text-white flex-col rounded-lg flex items-center  px-12 py-5 gap-5">
                <div><h1 className="text-2xl font-bold">Premium PAckage</h1></div>
                <div className="flex  flex-col gap-4 flex-grow">
                    <ul className="list-disc">
                        <li className="text-base font-normal text-[#13131390]">6 month</li>
                        <li className="text-base font-normal text-[#13131390]">36 class</li>
                        <li className="text-base font-normal text-[#13131390]">Every week 3 Live class</li>
                        <li className="text-base font-normal text-[#13131390]">5 Support Session</li>
                        <li className="text-base font-normal text-[#13131390]">5 Support Session</li>
                    </ul>
                </div>
                <div><button className="px-4 btn py-2 rounded-lg bg-red-500 text-[#ffffffb1]">View details</button></div>
            </div>
            <div className="border bg-blue-400 text-white  flex-col rounded-lg flex px-12 py-5 justify-center items-center gap-5">
                <div><h1 className="text-2xl font-bold">Premium PAckage</h1></div>
                <div className="flex justify-center flex-col gap-4 flex-grow">
                    <ul className="list-disc">
                        <li className="text-base font-normal text-[#13131390]">6 month</li>
                        <li className="text-base font-normal text-[#13131390]">36 class</li>
                        <li className="text-base font-normal text-[#13131390]">Every week 3 Live class</li>
                        <li className="text-base font-normal text-[#13131390]">5 Support Session</li>
                    </ul>
                </div>
                <div><button className="px-4 btn py-2 rounded-lg bg-red-500 text-[#ffffffb1]">View details</button></div>
            </div>
             
        </div>
    );
};

export default Prices;