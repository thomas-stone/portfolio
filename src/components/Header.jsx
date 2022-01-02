import React from 'react'

const Header = () => {

    const onClick = (e) => {
        console.log("CLICK", e)
    }

    return (
        <div className="border-b h-16 text-lg text-slate-700 bg-slate-400 cursor-default">
            <div className="flex justify-between items-center h-16 ">
                <h1 className="pl-6 hover:cursor-pointer">Thomas Stone</h1>
                <div className="flex items-center">
                    <span onClick={onClick} className="mx-4 p-2 navBtn hover:cursor-pointer hover:border-white hover:text-white">About</span>
                    <span className="mx-4 p-2 navBtn hover:cursor-pointer hover:border-white hover:text-white">Projects</span>
                    <span className="mx-4 p-2 navBtn hover:cursor-pointer hover:border-white hover:text-white">Contact</span>
                </div>
            </div>
        </div>
    )
}

export default Header
