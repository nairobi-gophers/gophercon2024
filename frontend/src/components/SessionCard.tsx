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
    name: string
    role: string
    company: string
    titleDescription: string
    day: string
}

interface IProps {
    session: ISession
}
const SessionCard = (props: IProps) => {
  return (
      <div className={`w-full lg:flex text-left flex-1 lg:space-x-4`}>
          <div className="py-4 text-center">
              <div className="bg-blue-700 text-white rounded p-2">
                  {props.session.startTime}
              </div>
          </div>
          <div className="border flex-1 p-4">
              <p className="font-semibold text-gray-600 tracking-wider">{props.session.date} <span
                  className="text-gray-400">({props.session.duration})</span></p>
              <p className="font-semibold text-gray-800 text-lg lg:text-xl my-1 tracking-wide">{props.session.title}</p>
              <div className="flex justify-start items-center">
                  <LocationIcon/><p className="text-gray-500 text-sm">{props.session.room}</p></div>
              <div className="my-1 text-gray-800">
                  <p className="lg:text-lg" style={{ whiteSpace: "pre-line" }}><span className="font-semibold text-gray-800">Desc:</span> {props.session.description}</p>
              </div>
              <p className="text-gray-800"><span
                  className="font-semibold text-sm text-gray-800">Talk/Attendee Level:</span> {props.session.level}</p>
              <div className="mt-2">
                  <p className="text-gray-800 font-semibold lg:text-lg">Speaker Detail</p>
                  <div className="flex justify-start space-x-1 items-center">
                      <img className="w-20" src={props.session.image ?? SpeakerImagePH} alt=""/>
                      <div className="font-normal">
                          <p className="font-semibold">{props.session.name}</p>
                          <p>{props.session.role} {props.session.company}</p>
                      </div>
                  </div>
                  <p>{props.session.titleDescription}</p>
              </div>
          </div>
      </div>
  )
}

export default SessionCard