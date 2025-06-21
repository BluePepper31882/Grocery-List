import { NextResponse } from "next/server";
import { hashPassword } from "@/lib/passHash";
import { db } from "@/lib/db";

export async function POST(req: Request) {
    const { username, password } = await req.json();
    const hashedPassword = await hashPassword(password);
    if (!username || !password){
        return NextResponse.json({ success: false });
    }
    await db.query('INSERT INTO users (username, password) VALUES (?,?)', [username, hashedPassword]);

    return NextResponse.json({ success: true });
}