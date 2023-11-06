import { ClerkProvider } from '@clerk/nextjs';
// import matrixVid from "/Users/";
// import mv from "/"


export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // <ClerkProvider>

        <div className='flex flex-row w-full h-full relative overflow-hidden'>
            <video src="/video/matrixvid.mp4" className='absolute ' autoPlay loop muted />
            <div className="flex flex-row items-center justify-center h-full w-full">
                {children}
            </div>
        </div>
        // </ClerkProvider>
    );
}