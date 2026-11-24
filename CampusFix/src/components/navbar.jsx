import Logo from "./logo.jsx"

const navbar = () => {
    return(
        <div className="flex justify-between px-8 py-5 border-y items-center">
            <Logo />
            
            <div className="flex gap-8">
                <div className="text-stone-500 text-sm"><a href="#">SUBMIT LOST ITEM</a></div>
                <div className="text-stone-500 text-sm"><a href="#">SUBMIT FOUND ITEM</a></div>
                <div className="text-stone-500 text-sm"><a href="#">VIEW RECENT POSTS</a></div>
            </div>
        </div>
    )
}

export default navbar