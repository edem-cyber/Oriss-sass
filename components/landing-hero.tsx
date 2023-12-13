"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="text-white font-bold py-36 text-center space-y-8">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl space-y-5 font-extrabold">
                <h1>Create Content Using AI 10x Faster</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-600">
                    <TypewriterComponent
                        options={{
                            strings: [
                                "Generate Code.",
                                "Write Articles.",
                                "Compose Music Videos.",
                                "Craft Logos.",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="text-lg md:text-xl font-light text-zinc-400">
                Unlock the Power of AI to Accelerate Your Content Creation Process.
            </div>
            <div>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button
                        variant="premium"
                        className="md:text-lg p-4 md:p-6 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600"
                    >
                        Start Generating For Free
                    </Button>
                </Link>
            </div>
            <div className="text-zinc-400 text-sm md:text-base font-normal">
                No Credit Card Required.
            </div>
        </div>
    );
};
