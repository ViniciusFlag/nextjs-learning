import Width from "@/components/width";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre",
    description: "Página sobre nós",
};

export default function SobrePage() {
    return (
        <main>
            <h1>Sobre</h1>

            <Width />
        </main>
    );
}
