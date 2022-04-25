import React from "react";

const Story = () => {
    return (
        <div className="stories flex justify-between h-48 gap-2">
            {/* aquí le agrega como 20 mil before para que se vea mas el nombre blanco */}
            <div className="story p-4 rounded-[1rem] flex flex-col justify-between items-center text-white text-[0.75rem] w-full relative overflow-hidden bg-story-img bg-no-repeat bg-center bg-cover">
                <div
                    className={`profile-picture w-[2rem] h-[2rem] self-start border-[3px] border-solid border-hPrimary rounded-[50%] overflow-hidden `}
                >
                    <img src={profile1} alt="" className="block w-full" />
                </div>
                <p className="name text-[#fff] z-2">Your Story</p>
            </div>
            <div className="story p-4 rounded-[1rem] flex flex-col justify-between items-center text-white text-[0.75rem] w-full relative overflow-hidden bg-story-img bg-no-repeat bg-center bg-cover">
                <div
                    className={`profile-picture w-[2rem] h-[2rem] self-start border-[3px] border-solid border-hPrimary rounded-[50%] overflow-hidden `}
                >
                    <img src={profile1} alt="" className="block w-full" />
                </div>
                <p className="name">Your Story</p>
            </div>
            <div className="story p-4 rounded-[1rem] flex flex-col justify-between items-center text-white text-[0.75rem] w-full relative overflow-hidden bg-story-img bg-no-repeat bg-center bg-cover">
                <div
                    className={`profile-picture w-[2rem] h-[2rem] self-start border-[3px] border-solid border-hPrimary rounded-[50%] overflow-hidden `}
                >
                    <img src={profile1} alt="" className="block w-full" />
                </div>
                <p className="name">Your Story</p>
            </div>
            <div className="story p-4 rounded-[1rem] flex flex-col justify-between items-center text-white text-[0.75rem] w-full relative overflow-hidden bg-story-img bg-no-repeat bg-center bg-cover">
                <div
                    className={`profile-picture w-[2rem] h-[2rem] self-start border-[3px] border-solid border-hPrimary rounded-[50%] overflow-hidden `}
                >
                    <img src={profile1} alt="" className="block w-full" />
                </div>
                <p className="name">Your Story</p>
            </div>
            <div className="story p-4 rounded-[1rem] flex flex-col justify-between items-center text-white text-[0.75rem] w-full relative overflow-hidden bg-story-img bg-no-repeat bg-center bg-cover">
                <div
                    className={`profile-picture w-[2rem] h-[2rem] self-start border-[3px] border-solid border-hPrimary rounded-[50%] overflow-hidden `}
                >
                    <img src={profile1} alt="" className="block w-full" />
                </div>
                <p className="name">Your Story</p>
            </div>
            <div className="story p-4 rounded-[1rem] flex flex-col justify-between items-center text-white text-[0.75rem] w-full relative overflow-hidden bg-story-img bg-no-repeat bg-center bg-cover">
                <div
                    className={`profile-picture w-[2rem] h-[2rem] self-start border-[3px] border-solid border-hPrimary rounded-[50%] overflow-hidden `}
                >
                    <img src={profile1} alt="" className="block w-full" />
                </div>
                <p className="name">Your Story</p>
            </div>
        </div>
    );
};

export default Story;
