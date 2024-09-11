import SpeakerCard from "./SpeakerCard";

interface Speaker {
  name: string;
  twitterHandle: string;
  company: string;
  description: string;
  imageUrl: string;
  companyLogoUrl: string;
}

export default function Speakers() {
  const speakers: Speaker[] = [];

  return (
    <section
      id="sponsors"
      className="container mx-auto px-6 py-12 md:py-24 flex flex-col items-center text-center text-secondary mt-20"
    >
      {speakers.length > 0 ?
        <>
          <h2 className="text-3xl md:text-5xl font-bold mt-8 mb-6">
            Speakers
          </h2>
          <p className="max-w-lg mb-8 text-sm md:text-base">
            GopherCon Africa features global speakers who deliver cutting-edge content on Go programming and related technologies to keep attendees at the forefront of the field.
          </p>

          {/*<div className="p-6 max-w-lg mx-auto ">*/}
          {/*  <div className="flex items-center justify-between mt-20">*/}
          {/*    <div>*/}
          {/*      <h2 className="text-2xl font-bold text-black">Our Speakers List</h2>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-4 sm:p-6">
            {speakers.map((speaker, index) => (
              <SpeakerCard key={index} {...speaker} />
            ))}
          </div>
        </> :
        <div className="p-6 max-w-lg mx-auto ">
          <div className="flex items-center justify-between mt-20">
            <div>
              <h2 className="text-2xl font-bold text-black">Speakers will be announced soon</h2>
            </div>
          </div>
        </div>}
    </section>
  );
}
