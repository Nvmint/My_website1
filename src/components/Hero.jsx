
export const Hero = () => {
    return (
        <div className="flex flex-row p-9">
            <div className="basis-1/4">
                <img className="rounded-full my-8" src="src\assets\1.jpg"></img>
            </div>
            <div className="flex basis-3/4 flex-col items-center justify-between flex-wrap">
                <h1 className="text-5xl h-10 text-center">hi there!</h1>
                <p className="m-5 text-center ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                </p>
                <button className="rounded-md text-sm bg-orange-1 py-3 px-10 place-self-center hover:bg-pink-1">holi</button>
            </div>

        </div>
    )
}

