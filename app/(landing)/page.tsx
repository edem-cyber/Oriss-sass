import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

export default function Landing() {
    return (
        <div>Landing(Unprotected)
            <div className="flex w-full justify-center gap-9">
                <div className="text-5xl">
                   
                    <Link href={"/sign-in"} className="" >
                        <Button>
                            Sign In
                        </Button>
                    </Link>
                    <Link href={"/sign-up"} className="" >
                        <Button variant={"destructive"}>
                            Sign Up
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
