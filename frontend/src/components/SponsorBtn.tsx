export const SponsorBtn = (props: {btnTitle: string}) => {
  return (
      <div className="my-14">
          <a
              className="button w-full md:w-auto px-8"
              href="mailto:hello@gophers.africa?subject=GopherCon%20Africa%20Sponsorship"
          >
              {props.btnTitle}
          </a>
      </div>
  )
}