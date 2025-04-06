export function HomeBanner() {
  return (
    <>
      <h1 className="text-5xl lg:text-7xl font-bold text-primary">Gophercon Africa</h1>
      <p className="lg:w-[600px]  text-pretty mx-auto">
        Join local & international Go enthusiasts, experts, and rising stars for an unforgettable celebration of the Go programming language. Grab your ticket or become a sponsor - let's make history together!
      </p>

      <div className="w-fit p-8 space-y-2 mx-auto border border-secondary rounded-md bg-white">
        <p><b>Date:</b> 17th - 18th October 2025</p>
        <p><b>City:</b> Nairobi, Kenya</p>
        <p><b>Venue:</b> iHub</p>
        <div>
          <a className="text-decoration-line: underline" href="https://maps.app.goo.gl/ysBLZUary5EmqR6t7" target="_blank"><span className="font-semibold">Google Maps </span> <span>Jahazi Building, 154 James Gichuru Road</span></a>
        </div>
      </div>

    </>
  );
}
