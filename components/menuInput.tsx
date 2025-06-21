interface MIprops {
    content?: string;
    isPassword?: boolean;
    value: string;
    onChange: (val: string) => any;
}


const MenuInput: React.FC<MIprops> = ({ content, isPassword, value, onChange }) => {

    return (
        <input 
        className="border rounded-xl m-5 p-3 flex gap-1 hover:bg-gray-800 hover:cursor-text transition-colors" 
        type={isPassword ? "password" : "text"} 
        placeholder={content}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default MenuInput;