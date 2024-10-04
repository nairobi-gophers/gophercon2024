import { useEffect, useState } from "react";
import SessionsList from "../utils/sessions.ts";
import SessionCard, { ISession } from "./SessionCard.tsx";

const Sessions = () => {
    const [activeDay, setActiveDay] = useState<string>('all')
    const [activeSessions, setActiveSessions] = useState<Array<ISession>>([])
    useEffect(() => {
        let sessions = SessionsList()
        if (activeDay != 'all') {
            sessions = sessions.filter(item => item.day == activeDay)
        }
        setActiveSessions(sessions)
    }, [activeDay]);


    return (
        <section
            id="sponsors"
            className="container mx-auto px-6 py-12 md:py-24 flex flex-col items-center text-center text-secondary"
        >
            <h2 className="text-3xl md:text-5xl font-bold mt-8 mb-6">
                GopherCon Africa Schedule
            </h2>
            <div className="w-full lg:w-[80%] mt-8">
                <div className="border border-b-2 border-l-0 border-r-0 bg-gray-200 pt-6 border-t-0 overscroll-contain sticky top-0 z-50">
                    <ul className="flex space-x-4 cursor-pointer">
                        <li onClick={() => setActiveDay('all')} className={`${activeDay == 'all' ? 'border border-b-4 border-l-0 border-r-0 border-t-0 border-blue-600' : ''} px-2`}>All Days</li>
                        <li onClick={() => setActiveDay('18th')} className={`${activeDay == '18th' ? 'border border-b-4 border-l-0 border-r-0 border-t-0 border-blue-600' : ''} px-2`}>Fri Oct 18th</li>
                        <li onClick={() => setActiveDay('19th')} className={`${activeDay == '19th' ? 'border border-b-4 border-l-0 border-r-0 border-t-0 border-blue-600' : ''} px-2`}>Sat Oct 19th</li>
                    </ul>
                </div>
                <div className="my-8">
                    {(activeDay == 'all' || activeDay == '18th') && <div className="mt-8">
                        <p className="text-left text-lg font-semibold">Fri Oct 18</p>
                        {
                            activeSessions.map(session => {
                                if (session.day == '18th') {
                                    return (
                                        <SessionCard session={session} />
                                    )
                                }
                            })
                        }
                    </div>}
                    {(activeDay == 'all' || activeDay == '19th') && <div className="mt-8">
                        <p className="text-left text-lg font-semibold">Sat Oct 19</p>
                        {
                            activeSessions.map(session => {
                                if (session.day == '19th') {
                                    return (
                                        <SessionCard session={session} />
                                    )
                                }
                            })
                        }
                    </div>}
                </div>
            </div>
        </section>
    )
}

export default Sessions