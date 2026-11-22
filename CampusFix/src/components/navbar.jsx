import logo from "../assets/LOGO.png"

const navbar = () => {
    return(
        <div className="flex justify-between px-8 py-5 border-y items-center">
            <div className="flex flex-col items-center">
                <div className="up text-2xl">
                    FRIENDSFIND
                </div>
                <div className="down text-xs">
                    MEET | CONNECT | FIND
                </div>
            </div>
            <div className="flex gap-8">
                <div className="text-stone-500 text-sm"><a href="#">SUBMIT LOST ITEM</a></div>
                <div className="text-stone-500 text-sm"><a href="#">SUBMIT FOUND ITEM</a></div>
                <div className="text-stone-500 text-sm"><a href="#">VIEW RECENT POSTS</a></div>
            </div>
        </div>
    )
}

export default navbar