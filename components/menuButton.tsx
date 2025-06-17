interface MBprops {
    content: string;
    icon: string;
    onClick: () => void;
}


const MenuButton: React.FC<MBprops> = ({ content, icon, onClick }) => {

    return (
        <div className="border rounded-xl m-5 p-3 flex gap-1 hover:bg-gray-800 hover:cursor-pointer transition-colors active:bg-gray-700" onClick={onClick}>
            <img src={icon} className="w-10"></img>
            <label className="text-center content-center font-bold">{content}</label>
        </div>
    );
}

export default MenuButton;