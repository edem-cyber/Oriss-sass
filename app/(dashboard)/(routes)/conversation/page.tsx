"use client";
import { Heading } from '@/components/heading';
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { formSchema } from './constants';
import { zodResolver } from '@hookform/resolvers/zod';

export default function Conversation() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
        }
    });


    const isLoading = form.formState.isSubmitting;

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
