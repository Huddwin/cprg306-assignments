"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="bg-gray-900 min-h-screen p-4">
            <h1 className="text-3xl font-bold mb-6 text-blue-800">Shopping List App</h1>

            {!user ? (
                <div>
                    <p className="text-white mb-4">Please sign in to continue</p>
                    <button onClick={handleSignIn} className="bg-blue-800 hover:bg-blue-600 text-white px-6 py-3 rounded">Sign in with GitHub</button>
                </div>
            ) : (
                <div>
                    <p className="text-white mb-4">Welcome, {user.displayName} ({user.email})</p>
                    <div className="flex gap-4">
                        <Link href="/week-9/shopping-list" className="bg-blue-800 hover:bg-blue-600 text-white px-6 py-3 rounded inline-block">Go to Shopping List</Link>
                        <button onClick={handleSignOut} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded">Sign Out</button>
                    </div>
                </div>
            )}
        </main>
    );
}