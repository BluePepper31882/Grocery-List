import { NextResponse } from "next/server";
import { hashPassword } from "@/lib/passHash";
import { db } from "@/lib/db";
import { Source_Sans_3 } from "next/font/google";

export async function POST(req: Request) {
    const { email, password } = await req.json();
    const hashedPassword = await hashPassword(password);

    await db.query('INSERT INTO users (email, password) VALUES (?,?)', [email, hashedPassword]);

    return NextResponse.json({ success: true });
}

/**
 * need to pass through the user, and then this should make a user with a hashed password
 */