import { NextRequest, NextResponse } from "next/server";

export async function POST (req: NextRequest){
    const formData = await req.formData();
    const image = formData.get('image') as File;

    if(!image){
        return NextResponse.json({ error: 'No image provided'}, { status: 400 });
    }

    const ocrForm = new FormData();
    ocrForm.append('image', image);

    const ocrRes = await fetch('http://192.168.1.2:3010/ocr', {
        method: 'POST',
        body: ocrForm,
    });

    const ocrData = await ocrRes.json();
    return NextResponse.json(ocrData)
}