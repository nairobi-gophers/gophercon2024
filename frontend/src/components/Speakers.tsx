import Navbar from "./Navbar";
import SpeakersList from "./SpeakersLists";

export default function Speakers() {
    return (
        <section
            id="sponsors"
            className="container mx-auto px-6 py-12 md:py-24 flex flex-col items-center text-center text-secondary mt-20"
        >
            <Navbar />
            <h2 className="text-3xl md:text-5xl font-bold mt-8 mb-6">
                Our Event Speakers
            </h2>
            <p className="max-w-lg mb-8 text-sm md:text-base">
                GopherCon Africa features global speakers who deliver cutting-edge content on Go programming and related technologies to keep attendees at the forefront of the field.
            </p>

            <div className="p-6 max-w-lg mx-auto ">
                <div className="flex items-center justify-between mt-20">
                    <div>
                        <h2 className="text-2xl font-bold text-black">Our Speakers List</h2>
                    </div>
                </div>
            </div>

            <SpeakersList />
        </section>
    );
}
