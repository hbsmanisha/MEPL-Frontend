import type { Metadata } from "next";
import "../globals.css"; // ✅ You CAN import from parent using ../

export const metadata: Metadata = {
    title: "Login | MEPL Dashboard",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            {children}
        </div>
    );
}

