import { UserButton } from '@clerk/nextjs';
import React from 'react';

export default function Landing() {
    return (
        <div>Landing(Unprotected)
            <div className="text-5xl">
                <UserButton afterSignOutUrl="/" showName userProfileMode='navigation'></UserButton>
            </div>
        </div>
    );
}
