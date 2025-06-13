interface MBprops {
    content: string;
    icon: string;
}


const MenuButton: React.FC<MBprops> = ({ content, icon }) => {

    return (
        <div className="border rounded-xl m-5 p-3 flex gap-1 hover:bg-gray-800 hover:cursor-pointer transition-colors">
            <img src={icon} className="w-10"></img>
            <label className="text-center content-center">{content}</label>
        </div>
    );
}

export default MenuButton;