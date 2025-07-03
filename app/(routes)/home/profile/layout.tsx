import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="md:mx-36 pt-10">
            {children}
        </div>
    );
}