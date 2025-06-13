interface MIprops {
    content?: string;
}


const MenuInput: React.FC<MIprops> = ({ content }) => {

    return (
        <input className="border rounded-xl m-5 p-3 flex gap-1 hover:bg-gray-800 hover:cursor-text transition-colors" placeholder={content} />
    );
}

export default MenuInput;