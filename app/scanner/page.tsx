'use client'
import { useEffect, useState } from 'react';
import MenuButton from "@/components/menuButton";
import MenuInput from "@/components/menuInput";

export default function Home() {
    const [image, setImage] = useState<File | null>(null);

    async function submitPic(file: File) {
        const formData = new FormData();
        formData.append('image', file);

        const res = await fetch('/api/ocr', {
            method: 'POST',
            body: formData,
        });

        const data = await res.json();
        console.log(data.text);
    }

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
        }
    }

    function clickPic() {
        if (image) {
            submitPic(image);
        } else {
            console.warn('No image selected');
        }
    }

    return (
        <div className="flex flex-col ml-100 mr-100 mt-50">
            <input type='file' onChange={handleFileChange}></input>
            <MenuButton content='upload' icon='/pencil.svg' onClick={clickPic}></MenuButton>
        </div>
    );
}