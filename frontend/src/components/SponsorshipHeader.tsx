const SponsorshipHeader = (props: {title: string}) => {
  return (
      <div className="w-full py-4 bg-blue-400 text-white font-semibold tracking-wider text-lg">
          <p>{ props.title}</p>
      </div>
  )
}

export default SponsorshipHeader