import {LocationIcon} from "./icons/Location.tsx";
import SpeakerImagePH from "../assets/speakers/placeholder.png";

export interface ISession {
    startTime: string
    date: string
    duration: string
    title: string
    room: string
    description: string
    level: string
    image?: string
    coPresenterImage?: string
    name: string
    role: string
    company: string
    titleDescription: string
    day: string
    twitter?: string
    bio?: string
    coPresenterName?: string
    coPresenterRole?: string
    coPresenterCompany?: string
}

interface IProps {
    session: ISession
}
const SessionCard = (props: IProps) => {
  return (
      <div className={`w-full lg:flex text-left my-4 flex-1 lg:space-x-4`}>
          <div className="py-4 w-20 text-center">
              {props.session.startTime.length > 2 && <div className="bg-blue-700 text-white rounded p-2">
                  {props.session.startTime}
              </div>}
          </div>
          <div className="border flex-1 p-4">
              <p className="font-semibold text-gray-600 tracking-wider">{props.session.date} <span
                  className="text-gray-400">({props.session.duration})</span></p>
              <p className="font-semibold text-gray-800 text-lg lg:text-xl my-1 tracking-wide">{props.session.title}</p>
              <div className="flex justify-start items-center">
                  <LocationIcon/><p className="text-gray-500 text-sm">{props.session.room}</p></div>
              {props.session.name.length > 3 && <div>
                  <div className="my-1 text-gray-800 ml-4 mt-2">
                      <p className="text-lg text-gray-700 font-semibold">Description</p>
                      <div className="ml-2 text-gray-600" dangerouslySetInnerHTML={{ __html: props.session.description }} />
                  </div>
                  <div className="my-2">
                      <p className="text-gray-800 "><span
                          className="font-semibold text-sm text-gray-800">Talk/Attendee Level:</span> {props.session.level}
                      </p>
                  </div>
                  <div className="mt-2">
                      <div className="flex justify-start space-x-2 items-center">
                          <div className="flex justify-start space-x-1 items-center">
                              <div className="p-4">
                                  <img className="w-16" src={props.session.image ?? SpeakerImagePH} alt=""/>
                              </div>
                              <div className="font-normal">
                                  <p className="font-semibold">{props.session.name}</p>
                                  <p>{props.session.role} {props.session.company.length > 2 ? '@' + props.session.company : props.session.company}</p>
                                  {/*<p className='my-1'>{props.session.bio}</p>*/}
                                  {/*{(props.session.twitter && props.session.twitter.length > 2) && <a href={`https://x.com/${props.session.twitter}`}>*/}
                                  {/*    <img className="w-8" src={Twitter} alt=""/>*/}
                                  {/*    <span>@{props.session.twitter}</span>*/}
                                  {/*</a>}*/}
                              </div>
                          </div>
                          {(props.session.coPresenterName && props.session.coPresenterName.length > 1) && <div className="flex justify-start space-x-1 items-center">
                              <div className="p-4">
                                  <img className="w-16" src={props.session.coPresenterImage ?? SpeakerImagePH} alt=""/>
                              </div>
                              <div className="font-normal">
                                  <p className="font-semibold">{props.session.coPresenterName}</p>
                                  <p>{props.session.coPresenterRole} {(props.session.coPresenterCompany && props.session.coPresenterCompany.length > 2) ? '@' + props.session.coPresenterCompany : props.session.coPresenterCompany}</p>
                                  {/*<p className='my-1'>{props.session.bio}</p>*/}
                                  {/*{(props.session.twitter && props.session.twitter.length > 2) && <a href={`https://x.com/${props.session.twitter}`}>*/}
                                  {/*    <img className="w-8" src={Twitter} alt=""/>*/}
                                  {/*    <span>@{props.session.twitter}</span>*/}
                                  {/*</a>}*/}
                              </div>
                          </div>}
                      </div>
                      {/*<p>{props.session.titleDescription}</p>*/}
                  </div>
              </div>}
          </div>
      </div>
  )
}

export default SessionCard