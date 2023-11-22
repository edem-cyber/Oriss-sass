import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

export default function Dashboard() {
    return (
        <div>

            <Link href={'/'}>
                <Button variant={"destructive"}>Home</Button>
            </Link>
        </div>
    );
}
