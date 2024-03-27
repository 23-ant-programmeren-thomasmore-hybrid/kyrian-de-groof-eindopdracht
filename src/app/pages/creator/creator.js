import Link from "next/link";

export default function Creator() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <Link href={"/"}>
                    <a className="text-blue-400">Home</a>
                </Link>
            </div>
        </main>
    );
}