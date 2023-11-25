import { Heading } from '@/components/heading';
import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function Conversation() {
    return (
        <div>
            <Heading
                title="Conversation"
                description="Generate a conversation between two people"
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="bg-violet-100"
            />

            <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
                
            </div>

        </div>
    );
}
