'use client';

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";

interface UserDataResponse {
    user: object | null;
    error: AxiosError | null;
}

export default function DashBoardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const router = useRouter();

    const [authorized, setAuthorized] = useState(false);

    const getUserData = async () => {
        try {
            const { user, error } : UserDataResponse = await axios.post('/api/auth_token');
            setAuthorized(true);
        } catch (error) {
            router.push("/login-register");
        }
    };

    useEffect(() => {
        getUserData();
    }, [router])

    return (
          <main>
            {authorized ? (
                <Suspense fallback={ <Loading />}>
                    {children}
                </Suspense>
            ): (
                <Loading />
            )}
          </main>
    )
  }