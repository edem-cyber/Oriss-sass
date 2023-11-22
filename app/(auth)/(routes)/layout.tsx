export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

        <div className='flex flex-row w-full h-full relative overflow-hidden bg-black'>
            <video src="/video/matrixvid.mp4" className='absolute object-cover' autoPlay loop muted />
            <div className="flex flex-row items-center justify-center h-full w-full">
                {children}
            </div>
        </div>
    );
}