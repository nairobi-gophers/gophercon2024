import {ISession} from "../components/SessionCard.tsx";

const SessionsList = (): Array<ISession> => {
    return [
        {
            startTime: '2 PM',
            date: '2 PM - 2:25 PM EAT, Fri Oct 18th',
            duration: '25 Min',
            title: 'Unveiling the Power of Interfaces: Go’s Secret Weapon',
            room: 'Main Conference Hall, iHub',
            description: "Interfaces are one of the most powerful and versatile features in Go, yet their true potential is often overlooked or underutilized. In this talk, we’ll unveil the secrets behind interfaces and demonstrate how to harness their full power to write more maintainable, testable, and flexible code. \n\n" +
                "What You’ll Learn \n- Understand the fundamental principles of interface design in Go\n"+
            "- Learn best practices for implementing interfaces effectively\n",
            level: "All attendees",
            name: "Sammy Oina",
            role: "S/W Developer",
            company: "",
            titleDescription: "",
            day: "18th"
        }
    ]
}

export default SessionsList