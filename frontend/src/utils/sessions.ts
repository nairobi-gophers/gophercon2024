import {ISession} from "../components/SessionCard.tsx";

const SessionsList = (): Array<ISession> => {
    return [
        {
            startTime: '7:30AM',
            date: '7:30AM - 9:00AM EAT, Fri Oct 18th',
            duration: '1h 30Min',
            title: 'Registration And Gopher Merch Shop',
            room: 'iHub',
            description: "Registration And Gopher Merch Shop",
            level: "All attendees",
            name: "",
            role: "",
            company: "",
            titleDescription: "",
            day: "18th"
        },
        {
            startTime: '9:00AM',
            date: '9:00AM - 11:00AM EAT, Fri Oct 18th',
            duration: '2h',
            title: 'Workshop',
            room: 'Main Conference Room, iHub',
            description: "Detail coming soon",
            level: "All attendees",
            name: "",
            role: "",
            company: "",
            titleDescription: "",
            day: "18th"
        },
        {
            startTime: '11:00AM',
            date: '11:00AM - 11:15AM EAT, Fri Oct 18th',
            duration: '15Min',
            title: 'Coffee Break',
            room: 'iHub',
            description: "",
            level: "All attendees",
            name: "",
            role: "",
            company: "",
            titleDescription: "",
            day: "18th"
        },
        {
            startTime: '11:15AM',
            date: '11:15AM - 1:15PM EAT, Fri Oct 18th',
            duration: '2h',
            title: 'Workshop',
            room: 'Main Conference Room, iHub',
            description: "Detail coming soon",
            level: "All attendees",
            name: "",
            role: "",
            company: "",
            titleDescription: "",
            day: "18th"
        },
        {
            startTime: '1:15PM',
            date: '1:15PM - 2:00PM EAT, Fri Oct 18th',
            duration: '45Min',
            title: 'Lunch Break',
            room: 'iHub',
            description: "",
            level: "All attendees",
            name: "",
            role: "",
            company: "",
            titleDescription: "",
            day: "18th"
        },
        {
            startTime: '2:00PM',
            date: '2:00PM - 2:25PM EAT, Fri Oct 18th',
            duration: 'Lightening Talk 25 Min',
            title: 'Unveiling the Power of Interfaces: Go’s Secret Weapon',
            room: 'Main Conference Hall, iHub',
            description: "Interfaces are one of the most powerful and versatile features in Go, yet their true potential is often overlooked or underutilized. In this talk, we’ll unveil the secrets behind interfaces and demonstrate how to harness their full power to write more maintainable, testable, and flexible code. \n\n" +
                "What You’ll Learn \n- Understand the fundamental principles of interface design in Go\n"+
            "- Learn best practices for implementing interfaces effectively",
            level: "All attendees",
            name: "Sammy Oina",
            role: "S/W Developer",
            company: "",
            titleDescription: "",
            day: "18th"
        },
        {
            startTime: '2:25PM',
            date: '2:25PM - 2:50PM EAT, Fri Oct 18th',
            duration: 'Lightening Talk 25 Min',
            title: 'GoFr: High-Performance Go Framework for Scalable Web Applications',
            room: 'Main Conference Hall, iHub',
            description: "<b>Effortless Development with GoFr</b>" +
                "\n" +
                "        <p class='mt-2'><b>- Intuitive API</b> Minimize boilerplate code and focus on core application logic with GoFr’s clean and concise API.</p>\n" +
                "        <p><b>- Automatic Code Generation:</b> Streamline repetitive tasks with optional code generation capabilities (e.g., RESTHandlers).</p>\n" +
                "\n" +
                "        <p class='mt-2'><b>Enhanced Observability</b></p>" +
                "        <ul class='mt-2 ml-2'>" +
                "            <li><strong>- Structured Logging:</strong> Integrates a robust logging system that captures detailed and structured information about application events, making debugging and monitoring easier.</li>\n" +
                "            <li><strong>- Customizable Logging Levels:</strong> Configure logging levels based on your application’s needs to control the verbosity of log messages.</li>\n" +
                "            <li><strong>- Metrics Integration:</strong> Easily integrate with popular metrics collectors to gather valuable insights into application performance and resource utilization.</li>\n" +
                "            <li><strong>- Distributed Tracing:</strong> Track request flows across your application ecosystem, pinpoint bottlenecks, and optimize performance with built-in tracing capabilities.</li>\n" +
                "        </ul>\n" +
                "\n" +
                "        <p class='mt-2'><b>Seamless Database Connectivity</b></p>" +
                "        <ul class='mt-2 ml-2'>" +
                "            <li><strong>- Database Agnostic:</strong> Supports a wide range of popular database backends (e.g., MySQL, PostgreSQL, Redis) through well-established drivers, offering flexibility in data storage solutions.</li>\n" +
                "            <li><strong>- Database Migrations:</strong> Efficiently manage database schema changes with a built-in migration system, ensuring smooth upgrades and rollbacks.</li>\n" +
                "        </ul>\n" +
                "\n" +
                "        <p class='mt-2'><b>Robust Security</b></p>" +
                "        <ul class='mt-2 ml-2'>" +
                "            <li><strong>- Built-in Authentication Mechanisms:</strong> Offers out-of-the-box support for common HTTP authentication methods (e.g., Basic Auth, JWT), simplifying user access control.</li>\n" +
                "            <li><strong>- Customizable Authorization:</strong> Implement granular authorization rules to control access to specific application resources and functionalities.</li>\n" +
                "        </ul>\n" +
                "\n" +
                "        <p class='mt-2'><b>Why Choose GoFr?</b></p>" +
                "        <ul class='mt-2 ml-2'>" +
                "            <li><strong>- Developer Productivity:</strong> Build distributed, performant Go applications with minimal effort.</li>\n" +
                "            <li><strong>- Advanced Observability:</strong> Gain deep insights into application behavior through advanced logging and observability features.</li>\n" +
                "            <li><strong>- Seamless Database Integration:</strong> Connect seamlessly with various database backends for efficient data management.</li>\n" +
                "            <li><strong>- Secure Access Control:</strong> Implement robust and secure HTTP authentication mechanisms for user access control.</li>\n" +
                "        </ul>",
            level: "All attendees",
            name: "Aryan Mehrotra",
            role: "S/W Developer",
            company: "",
            titleDescription: "",
            day: "18th"
        },
        {
            startTime: '2:50PM',
            date: '2:50PM - 3:30PM EAT, Fri Oct 18th',
            duration: 'Main Talk 40 Min',
            title: 'CLEAN CODE IN GO',
            room: 'Main Conference Hall, iHub',
            description: "In the fast-paced world of software development, engineers often encounter codebases that are overly complex and difficult to maintain. These challenges can lead to frustration, decreased productivity, and a lack of enjoyment in your work. This talk, “Clean Code in Go” aims to address these issues by introducing you to the core principles of writing clean, efficient, and maintainable Go code. <br>" +
                "<br>" +
                "During this session, we’ll explore: <br><br>" +
                "\n" +
                "1. The Pitfalls of Over-Engineering: Understand how over-engineering can lead to cumbersome and error-prone code.\n" +
                "<br>" +
                "2. Key Principles of Clean Code: Discover practical guidelines and best practices for writing clean Go code that is easy to read, understand, and maintain.\n" +
                "<br>" +
                "3. Refactoring Techniques: Learn effective refactoring techniques to improve existing codebases without introducing bugs or regressions.\n" +
                "<br>" +
                "4. Real-World Examples: See how these principles are applied in real-world scenarios, transforming messy code into clean, elegant solutions.\n" +
                "<br><br>" +
                "Whether you are new to GO or an experienced developer, this talk will provide you with valuable insights and actionable strategies to enhance your coding practices. By adopting these principles, you’ll be able to create codebases that are not only robust and scalable but also a pleasure to work with.",
            level: "All attendees",
            name: "JA Asuquo",
            role: "S/W Developer",
            company: "",
            titleDescription: "",
            day: "18th"
        },
        {
            startTime: '3:30PM',
            date: '3:30PM - 4:10PM EAT, Fri Oct 18th',
            duration: 'Main Talk 40 Min',
            title: 'Event-Driven Architecture with Go and Kafka',
            room: 'Main Conference Hall, iHub',
            description: "This talk will explore event-driven architectures (EDA). We’ll unpack its core concepts, understand the problems it solves, and discover why it’s become a hot topic in building decoupled systems.\n" +
                "<br><br>" +
                "Next, we’ll shift gears to discuss Golang, a language known for its robust concurrency features. These features make Golang a powerful tool for building event-driven applications.\n" +
                "<br><br>" +
                "Finally, we’ll introduce Apache Kafka, a distributed streaming platform. We’ll explore how Golang and Kafka can be leveraged to create highly scalable and responsive event-driven applications.\n" +
                "\n" +
                "Throughout this session, I will talk about:\n" +
                "<br><br>" +
                "- Event-driven architecture, its core principles, components, common use cases, and benefits<br>" +
                "- Kafka, its architecture, features and capabilities, and its role in EDA<br>" +
                "- Go features that make it suitable for EDA<br>" +
                "- Integrating Go with Kafka, demonstrating the setup and configuration, with code examples<br>" +
                "- Showcase real-life examples of Go and Kafka in action<br>" +
                "- Best practices and resource recommendation<br><br>" +
                "By the end of this talk, attendees will have a deeper understanding of why the world is paying more attention to event-driven architectures and how they are revolutionizing the speed at which organizations can scale their services, respond to user requests, and enable real-time data processing.\n" +
                "<br><br>" +
                "<b>Key Takeaways:</b> - Comprehensive understanding of Event-driven architecture and the why behind it all - Understanding how to leverage Go and Kafka to build event-driven architectures - Knowledge of best practices and use cases for Go and Kafka in building EDAs - Inspiration to leverage EDAs for building efficient and scalable solutions.",
            level: "All attendees",
            name: "Amarachi Iheanacho",
            role: "S/W Developer",
            company: "",
            titleDescription: "",
            day: "18th"
        },
        {
            startTime: '4:10PM',
            date: '4:10PM - 5:30PM EAT, Fri Oct 18th',
            duration: '80Min',
            title: 'Closing Remarks | Networking',
            room: 'iHub',
            description: "",
            level: "All attendees",
            name: "",
            role: "",
            company: "",
            titleDescription: "",
            day: "18th"
        },
        {
            startTime: '7:30AM',
            date: '7:30AM - 9:00AM EAT, Fri Oct 18th',
            duration: '1h 30Min',
            title: 'Registration And Gopher Merch Shop',
            room: 'iHub',
            description: "Registration And Gopher Merch Shop",
            level: "All attendees",
            name: "",
            role: "",
            company: "",
            titleDescription: "",
            day: "19th"
        },
        {
            startTime: '9:00AM',
            date: '9:00AM - 10:00AM EAT, Fri Oct 18th',
            duration: '1h',
            title: 'Keynote',
            room: 'Main Conference Hall, iHub',
            description: "Keynote",
            level: "All attendees",
            name: "",
            role: "",
            company: "",
            titleDescription: "",
            day: "19th"
        },
        {
            startTime: '10:00AM',
            date: '10:00AM - 10:40AM EAT, Fri Oct 18th',
            duration: 'Main Talk 40 Min',
            title: 'Effective Testing Strategies for Large Data Inserts into PostgreSQL Tables',
            room: 'Main Conference Hall, iHub',
            description: "This talk provides an overview of Go and PostgreSQL’s roles in high-performance data handling.\n" +
                "<br><br>" +
                "Go developers often struggle to guarantee the functionality and performance of their code when dealing with large data inserts into PostgreSQL databases. This can lead to data loss, slow performance, and ultimately, frustrated users. This talk tackles this challenge by focusing on robust testing strategies for Go functions handling massive data insertions.\n" +
                "<br><br>" +
                "We’ll explore a multi-layered approach:\n" +
                "<br><br>" +
                "Unit testing: Isolate and rigorously test individual functions interacting with PostgreSQL using mocks or dependency injection.\n" +
                "<br><br>" +
                "Integration testing: Move beyond units and validate how your Go functions work seamlessly with PostgreSQL in a dedicated test environment.\n" +
                "<br><br>" +
                "Performance testing: Measure execution time and throughput under real-world data volumes using benchmarking tools and identify bottlenecks with profilers.\n" +
                "<br><br>" +
                "By the end, you’ll be equipped with the knowledge to:\n" +
                "<br><br>" +
                "Craft comprehensive test suites for Go functions handling large data inserts.\n" +
                "<br><br>" +
                "Uncover performance issues before they impact production.\n" +
                "<br><br>" +
                "Gain confidence in your application’s stability and scalability.\n" +
                "<br><br>" +
                "This talk specifically focuses on testing Go code interacting with PostgreSQL, complementing popular ORMs like Gorm. The goal is to equip developers with strategies to minimize latency and maximize throughput in data operations.\n" +
                "<br><br>" +
                "The session sets the stage by explaining why these technologies are preferred for managing large data volumes and highlights real-world applications.",
            level: "All attendees",
            name: "Ufia Irene",
            role: "S/W Developer",
            company: "",
            titleDescription: "",
            day: "19th"
        },
    ]
}

export default SessionsList