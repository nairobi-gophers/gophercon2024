import Navbar from "./Navbar";

export default function Socials() {
    return (
        <section
            id="sponsors"
            className="container mx-auto px-6 py-12 md:py-24 flex flex-col items-center text-center text-secondary"
        >
            <Navbar />
            <h2 className="text-3xl md:text-5xl font-bold mt-8 mb-6">
                Socials
            </h2>
            <p className="w-[60%] mb-8 text-sm md:text-base">
                GopherCon Africa offers abundant networking prospects for you to connect with fellow Go developers, renowned speakers, and our esteemed event sponsors throughout the conference. Embrace numerous opportunities to foster meaningful connections and engage in valuable exchanges within the vibrant Go community.            </p>
        </section>
    );
}
