import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <Link href="/creator">
                    <Image src="/TARON.jpg" alt="Creator" width={300} height={300}/>
                </Link>
            </div>
        </main>
    );
}

