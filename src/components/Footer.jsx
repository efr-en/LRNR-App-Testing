import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return (
        <>
        <footer className="bg-blue-400 text-white p-6 flex justify-between items-start">
            <div className="w-full flex justify-between items-start">
        <p className="w-1/2 ml-4 text-left">Embrace the power of our app and unlock the secrets of the universe, one quiz at a time. 
        As I always say, 'Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is 
        called the present.'</p>
        <div className="mr-4">
            <ul className="flex flex-col space-y-2">
                <p className="text-white text-lg">Links</p>
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Quiz Generator</a></li>
                <li><a href="#" className="hover:underline">Account</a></li>
            </ul>
        </div>
        </div>
        <p className="mt-6 ml4 self-start">&copy;Made by Tailwind</p>
        </footer>
        </>
    );
};

export default Footer;