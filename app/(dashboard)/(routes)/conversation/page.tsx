"use client";

import * as z from "zod";
// import axios from "axios";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { ChatCompletionRequestMessage } from "openai";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn } from "@/lib/utils";

import { formSchema } from "./constants";
// import Empty from "@/components/empty";
// import { Loader } from "@/components/Loader";
// import { UserAvatar } from "@/components/user-avatar";
// import { BotAvatar } from "@/components/bot-avatar";
// import { useProModal } from "@/hooks/use-pro-modal";
// import toast from "react-hot-toast";

const ConversationPage = () => {
    //   const proModal = useProModal();
    //   const router = useRouter();
    //   const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
        },
    });

    const isLoading = form.formState.isSubmitting;

    //   const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //     try {
    //       const userMessage: ChatCompletionRequestMessage = {
    //         role: "user",
    //         content: values.prompt,
    //       };
    //       const newMessages = [...messages, userMessage];

    //       const response = await axios.post("/api/conversation", {
    //         messages: newMessages,
    //       });
    //       setMessages((current) => [...current, userMessage, response.data]);
    //       toast.success("You did it!")

    //       form.reset();
    //     } catch (error: any) {
    //       if(error?.response?.status === 403 ) {
    //         proModal.onOpen();
    //       } else {
    //         toast.error("Something went wrong.")
    //       }
    //     } finally {
    //       router.refresh();
    //     }
    //   };

    return (
        <div>
            <Heading
                title="Conversation"
                description="Our most advanced conversation model."
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <div className=" p-1 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                            <div className="p-3 w-full rounded-full bg-white">
                                <form
                                    //   onSubmit={form.handleSubmit(onSubmit)}
                                    className="rounded-3xl w-full px-4 md:px-6 grid grid-cols-12 gap-2  "
                                >
                                    <FormField
                                        name="prompt"
                                        render={({ field }) => (
                                            <FormItem className="col-span-12 lg:col-span-10">
                                                <FormControl className="m-0 p-0">
                                                    <Input
                                                        className="border-1 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                                        disabled={isLoading}

                                                        placeholder="Message Oriss AI"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <Button
                                        variant={isLoading ? "secondary" : "default"}
                                        className="col-span-12 lg:col-span-2 w-full"
                                        disabled={isLoading}>
                                        Generate
                                    </Button>
                                </form>
                            </div>
                        </div>

                    </Form>
                </div>

                <div className="space-y-4 mt-4">
                    Message Content

                </div>
            </div>
        </div>
    );
};
export default ConversationPage;