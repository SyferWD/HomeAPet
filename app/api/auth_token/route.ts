import { jwt_token_name } from "@/constants";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";


export const POST = async() => {

    const userCookies = await cookies();

    const token = userCookies.get(jwt_token_name);

    if (!token) {
        return NextResponse.json({message: "Unauthorized"}, {status: 401});
    }

    //Retrieve secret key for JWT 
    const secret_key = process.env.JWT_SECRET_KEY;

    if (!secret_key) {
        throw new Error("JWT_SECRET_KEY environment variable is not set.");
    }
    
    try {
        const decodedToken = jwt.verify(token.value, secret_key);

        if (typeof decodedToken === 'object') {
            const userData = decodedToken.user;
            return NextResponse.json({message: "Authorized", userData}, {status: 200});
        } else {
            throw new Error('The token is not a valid JWT token.');
        }
        
    } catch (error) {
        return NextResponse.json({message: "Unauthorized"}, {status: 401});
    }
    

}