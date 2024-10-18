import { ISession } from "../components/SessionCard.tsx";

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
      date: '9:00AM - 09:30AM EAT, Fri Oct 18th',
      duration: '30Min',
      title: "Keynote: Empowering the future with Go. (Africa's Role in the Go Community)",
      room: 'Main Conference Room, iHub',
      description: "Keynote: Empowering the future with Go. (Africa's Role in the Go Community)",
      level: "All attendees",
      name: "Adesina Hassan",
      role: "Senior Software Engineer",
      company: "",
      titleDescription: "",
      day: "18th"
    },
    {
      startTime: '9:30AM',
      date: '9:30AM - 11:30AM EAT, Fri Oct 18th',
      duration: 'Workshop 2h',
      title: 'Go for Infrastructure Test Automation',
      room: 'Main Conference Room, iHub',
      description: "<b>What a student is expected to learn</b><br>" +
        "<br>" +
        "1. The essentials of the Go testing library.<br>" +
        "2. How to write automated tests in Go.<br>" +
        "3. How to increase confidence in deploying cloud infrastructure using Terratest, an open source Go library to write automated tests, including unit, integration and end-to-end tests for infrastructure code, with Terraform as an example.<br>" +
        "<br><b>Prerequisites</b><br>" +
        "<br>" +
        "1. A free tier AWS account or higher<br>" +
        "2. Terraform 1.5 or higher<br>" +
        "3. Go version 1.13 or higher<br>" +
        "4. Git version 1.5 or higher<br>" +
        "5. GitHub account<br>" +
        "6. VS Code<br><br>" +
        "<b>Preparation</b><br>" +
        "<br>" +
        "Personal regular checks on my terraform modules to use in the workshop <br>",
      level: "All attendees",
      name: "Chris Otta",
      role: "Software Development Engineer in Test",
      company: "",
      titleDescription: "",
      day: "18th"
    },
    {
      startTime: '11:30AM',
      date: '11:30AM - 11:45AM EAT, Fri Oct 18th',
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
      startTime: '11:45AM',
      date: '11:45AM - 1:45PM EAT, Fri Oct 18th',
      duration: 'Workshop 2h',
      title: 'Workshop: Advanced Monitoring and Observability with OpenTelemetry and APItoolkit',
      room: 'Main Conference Room, iHub',
      description: `<p>
          In this hands-on workshop, you will learn how to leverage OpenTelemetry and APItoolkit
          to build robust, scalable, and insightful monitoring and observability solutions for
          modern applications. The session will focus on practical techniques for instrumenting
          distributed systems, collecting and analyzing telemetry data, and visualizing key
          metrics and traces to gain a deeper understanding of system performance.
      </p>
      <br/>
      <p>
        We will explore how OpenTelemetry, the leading open-source observability framework,
        integrates with APItoolkit to streamline monitoring and troubleshooting.
        Participants will work through real-world scenarios, from setting up telemetry pipelines
        to using APItoolkit for tracing, logging, and metric aggregation. By the end of the workshop,
        you will have the skills to implement comprehensive observability strategies,
        optimize performance, and proactively detect and resolve issues in your applications.
      </p>`,
      level: "All attendees",
      name: "Anthony Alaribe",
      role: "Founder",
      company: "ApiToolkit",
      titleDescription: "",
      day: "18th"
    },
    {
      startTime: '1:45PM',
      date: '1:45PM - 2:30PM EAT, Fri Oct 18th',
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
      startTime: '2:30AM',
      date: '2:30PM - 2:55PM EAT, Fri Oct 18th',
      duration: 'Lightening Talk 25 Min',
      title: 'Building a Local Go Community as a Student',
      room: 'Main Conference Hall, iHub',
      description: "We will explore key steps such as identifying the right audience, organising engaging events, and leveraging online and offline resources to foster growth. I will also share insights on overcoming common obstacles, from balancing academic responsibilities to maintaining community engagement. Whether you’re a student looking to start your own community or an experienced developer seeking to expand your reach, this talk will offer practical advice and inspiration for growing a vibrant local tech ecosystem.\n" +
        "<br>" +
        "Join me to learn how you can make a meaningful impact in your community and turn your passion for technology into a collaborative, supportive network.",
      level: "All attendees",
      name: "Mudasiru Rasheed",
      role: "S/W Engineer",
      company: "",
      titleDescription: "",
      day: "18th",
      twitter: 'taiwrash'
    },
    {
      startTime: '2:55PM',
      date: '2:55PM - 3:20PM EAT, Fri Oct 18th',
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
      role: "S/W Engineer",
      company: "",
      titleDescription: "",
      coPresenterName: 'Umang Mundhra',
      coPresenterRole: 'S/W Engineer',
      coPresenterCompany: '',
      day: "18th"
    },
    {
      startTime: '3:20PM',
      date: '3:20PM - 4:00PM EAT, Fri Oct 18th',
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
      name: "Joseph Augustine Asuquo",
      role: "Software Engineer",
      company: "PARTNA",
      titleDescription: "",
      day: "18th"
    },
    {
      startTime: '4:00PM',
      date: '4:00PM - 4:40PM EAT, Fri Oct 18th',
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
      role: "S/W Engineer",
      company: "",
      titleDescription: "",
      day: "18th"
    },
    {
      startTime: '4:40PM',
      date: '4:40PM - 6:00PM EAT, Fri Oct 18th',
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
      date: '7:30AM - 9:00AM EAT, Sat Oct 19th',
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
      date: '9:00AM - 10:00AM EAT, Sat Oct 19th',
      duration: '1h',
      title: 'Keynote',
      room: 'Main Conference Hall, iHub',
      description: "Keynote",
      level: "All attendees",
      name: "Anthony Alaribe",
      role: "Founder",
      company: "ApiToolkit",
      titleDescription: "",
      day: "19th"
    },
    {
      startTime: '10:00AM',
      date: '10:00AM - 10:40AM EAT, Sat Oct 19th',
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
      role: "S/W Engineer",
      coPresenterName: "Orji Cecilia",
      coPresenterRole: "S/W Engineer",
      company: "",
      titleDescription: "",
      day: "19th"
    },
    {
      startTime: '10:40AM',
      date: '10:40AM - 11:00AM EAT, Fri Oct 19th',
      duration: '20Min',
      title: 'Coffee Break',
      room: 'iHub',
      description: "",
      level: "All attendees",
      name: "",
      role: "",
      company: "",
      titleDescription: "",
      day: "19th"
    },
    {
      startTime: '11:00AM',
      date: '11:00AM - 11:40AM EAT, Sat Oct 19th',
      duration: 'Main Talk 40 Min',
      title: 'SDK Secrets: Unlocking API Magic',
      room: 'Main Conference Hall, iHub',
      description: "In this exploration of SDK development with Go, we will cover the “hows” and “whys” that every developer should know when building an SDK for their APIs. We will explore the foundational principles and best practices for building efficient, user-friendly, and robust SDKs. We will cover seamless API integrations for improved programmatic functionality. We will cover the basics, core design principles and implementation strategies you can leverage to ensure a successful SDK for your APIs. The session will wrap up with a live demo of an SDK, during which attendees will see firsthand the functionality and usefulness of this powerful tool, turning theoretical knowledge into practical skills. This session will benefit seasoned developers and developers starting with their Golang careers.",
      level: "All attendees",
      name: "Ehi Enabs",
      role: "S/W Engineer",
      company: "",
      titleDescription: "",
      day: "19th"
    },
    {
      startTime: '11:40AM',
      date: '11:40AM - 12:05PM EAT, Sat Oct 19th',
      duration: 'Lightening Talk 25 Min',
      title: 'Unveiling the Power of Interfaces: Go’s Secret Weapon',
      room: 'Main Conference Hall, iHub',
      description: "Interfaces are one of the most powerful and versatile features in Go, yet their true potential is often overlooked or underutilized. In this talk, we’ll unveil the secrets behind interfaces and demonstrate how to harness their full power to write more maintainable, testable, and flexible code. \n\n" +
      "What You’ll Learn \n- Understand the fundamental principles of interface design in Go\n" +
      "- Learn best practices for implementing interfaces effectively",
      level: "All attendees",
      name: "Sammy Oina",
      role: "Technical lead",
      company: "Ultraviolet",
      titleDescription: "",
      day: "19th",
    },
    {
      startTime: '12:05PM',
      date: '12:05PM - 12:45PM EAT, Sat Oct 19th',
      duration: 'Main Talk 40 Min',
      title: 'Understanding Entropy in Design Systems',
      room: 'Main Conference Hall, iHub',
      description: "<h1>Taming Code Chaos: Reducing Entropy in Go Design Systems</h1>\n" +
        "    <br>" +
        "    <p>Is your codebase spiraling out of control? High entropy can lead to unpredictable behavior, making your code difficult to maintain and scale. In this talk, we’ll dive into the concept of entropy in software design, focusing on practical strategies to bring order to your Go projects.</p>\n" +
        "<br>" +
        "    <h2>We’ll explore:</h2>\n" +
        "    <ul class='ml-2'>\n" +
        "        <li><strong>- Consistent Coding Practices:</strong> How tools like <code>gofmt</code> and <code>golint</code> can enforce standards and reduce complexity.</li>\n" +
        "        <li><strong>- Clear Package Structures:</strong> Organizing your code for maximum clarity and minimal chaos.</li>\n" +
        "        <li><strong>- Interface-Driven Design:</strong> Using interfaces to define clear contracts and reduce coupling.</li>\n" +
        "        <li><strong>- Dependency Injection:</strong> Managing dependencies explicitly to improve testability and maintainability.</li>\n" +
        "        <li><strong>- Comprehensive Testing:</strong> Ensuring your code remains consistent and reliable through rigorous testing.</li>\n" +
        "    </ul>\n" +
        "<br>" +
        "    <p>You’ll learn how to transform your Go codebase into a well-oiled machine through real-world examples and actionable insights. This talk will provide you with the tools and knowledge to keep your projects clean, organized, and scalable.</p>\n" +
        "<br>" +
        "    <p>Don’t let your codebase descend into chaos. Join us and discover the secrets to taming entropy in your design systems!</p>\n",
      level: "All attendees",
      name: "Nwokoye Chigozie",
      role: "S/W Engineer",
      company: "",
      titleDescription: "",
      day: "19th"
    },
    {
      startTime: '12:45PM',
      date: '12:45PM - 1:15PM EAT, Sat Oct 19th',
      duration: 'Community 30 Min',
      title: 'Community Roundtable',
      room: 'Main Conference Hall, iHub',
      description: "This is a great chance to connect with the Go community and event sponsors, allowing you to ask questions and learn more about Go and its growing community in Africa.",
      level: "All attendees",
      name: "GopherCon Africa",
      role: "",
      company: "",
      titleDescription: "",
      day: "19th"
    },
    {
      startTime: '1:15PM',
      date: '1:15PM - 2:00PM EAT, Fri Oct 19th',
      duration: '45Min',
      title: 'Lunch Break',
      room: 'iHub',
      description: "",
      level: "All attendees",
      name: "",
      role: "",
      company: "",
      titleDescription: "",
      day: "19th"
    },
    {
      startTime: '2:00PM',
      date: '2:00PM - 2:25PM EAT, Sat Oct 19th',
      duration: 'Lightening Talk 25 Min',
      title: 'Realizing Hexagonal Architecture in Go',
      room: 'Main Conference Hall, iHub',
      description: "  <p>With the fast rate at which the software development field is changing, it truly matters that your application remains maintainable, testable, and scalable. Hexagonal Architecture, also called Ports and Adapters, shows the runway lights for developers to create applications that are flexible and decoupled.</p>\n" +
        "    <br>" +
        "    <p>Attend a great talk on <strong>“Realizing Hexagonal Architecture in Go”</strong>—explore how this architecture can uplift your Go projects. I will show a case and demonstrate practical steps in the realization of hexagonal architecture in Go, where one can easily morph complex dependencies into easily manageable components. You will learn to design your applications so that they resist change, you can pivot easily between different technologies, and you can easily test each part of your system in isolation.</p>\n" +
        "    <br>" +
        "    <p>This talk will explain how Hexagonal Architecture could loosen up your codebase, making it more adaptive, and how it will help you fulfill the demands of the modern development cycle. It doesn’t matter whether you are a well-experienced Go developer or you have just started with this language; this talk will provide you with some great insights and tricks to take your Go application to the next level.</p>\n" +
        "    <br>" +
        "    <p>Don’t miss your chance to level up your development skills and ensure your projects are future-proof. Let’s build better software, one hexagon at a time.</p>\n",
      level: "All attendees",
      name: "Kathurima",
      role: "David",
      company: "",
      titleDescription: "",
      day: "19th"
    },
    {
      startTime: '2:25PM',
      date: '2:25PM - 3:05PM EAT, Sat Oct 19th',
      duration: 'Main Talk 40 Min',
      title: 'Mastering Intra-Service Communication in Go with gRPC',
      room: 'Main Conference Hall, iHub',
      description: " <p>When working with microservices, it’s essential to have efficient and reliable communication between services. gRPC provides a strong solution for intra-service communication in Go applications, thanks to its high performance and low latency.</p>\n" +
        "    <br>" +
        "    <p>This presentation will explore the ins and outs of using gRPC for intra-service communication in Go applications. We’ll begin with an introduction to gRPC, comparing it with REST and emphasizing its unique advantages. The session will cover the following key topics:</p>\n" +
        "<br>" +
        "    <ul class='mt-2 ml-2'>\n" +
        "        <li>- Getting Started with gRPC and Protocol Buffers</li>\n" +
        "        <li>- Setting up a gRPC server and client in Go</li>\n" +
        "        <li>- Implementing secure and high-performance service-to-service communication</li>\n" +
        "        <li>- Best practices for defining and evolving gRPC services</li>\n" +
        "        <li>- Troubleshooting common issues and debugging gRPC applications</li>\n" +
        "    </ul>\n" +
        "    <br>" +
        "    <p>Attendees will gain a thorough understanding of gRPC and practical advice for integrating it into their Go projects, enhancing performance and maintainability.</p>\n",
      level: "All attendees",
      name: "Kennedy Karoko",
      role: "S/W Engineer",
      company: "",
      titleDescription: "",
      day: "19th"
    },
    {
      startTime: '',
      date: '2:25PM - 3:05PM EAT, Sat Oct 19th',
      duration: 'Main Talk 40 Min',
      title: 'Engineering Reliable gRPC APIs: The World of Instrumentation',
      room: 'Boardroom I, iHub',
      description: "This session will cover adding monitoring and observability features to gRPC-based APIs built with Go. Attendees will learn about the various approaches to instrumenting gRPC APIs, including adding logging and tracing, monitoring API performance, implementing circuit breakers, and adding health checks. The session will also include practical examples of how to use Go to implement these features in gRPC APIs and best practices for engineering reliable and performant gRPC APIs through instrumentation.",
      level: "All attendees",
      name: "Rodney Osodo",
      role: "S/W Engineer",
      company: "",
      titleDescription: "",
      day: "19th"
    },
    {
      startTime: '3:05PM',
      date: '3:05PM - 3:45PM EAT, Sat Oct 19th',
      duration: 'Main Talk 40 Min',
      title: 'Testing in Go: Unlocking Confidence and Efficiency',
      room: 'Main Conference Hall, iHub',
      description: " <p>Testing is an integral part of software development, ensuring that applications are reliable, maintainable, and bug-free. In this session, we’ll explore the fundamentals and advanced techniques of testing in Go.</p>\n" +
        "<br>" +
        "    <p>We’ll start with the basics, covering Go’s built-in testing tools and how to write effective unit tests. Then, we’ll delve into more advanced topics like table-driven tests, mocking dependencies, and leveraging the power of Go’s testing frameworks to handle complex scenarios. We’ll also explore tools for benchmarking and profiling your tests to ensure optimal performance. Whether you’re new to Go or a seasoned developer, you’ll walk away with practical knowledge and strategies to improve the quality of your Go applications.</p>\n" +
        "<br>" +
        "    <h2>Key Takeaways:</h2>\n" +
        "    <ul>\n" +
        "        <li>Gain a thorough understanding of Go’s built-in testing tools and their usage.</li>\n" +
        "        <li>Learn advanced techniques for writing maintainable and effective tests in Go.</li>\n" +
        "        <li>Discover how to use popular Go testing frameworks to streamline the testing process.</li>\n" +
        "        <li>Understand the importance of performance testing and how to conduct it in Go.</li>\n" +
        "        <li>Explore best practices to avoid common testing mistakes and pitfalls in Go development.</li>\n" +
        "    </ul>\n" +
        "<br>" +
        "    <p>This talk promises to be an engaging and informative journey into the world of Go testing, equipping you with the skills and knowledge to write tests with confidence and build robust Go applications.</p>\n",
      level: "All attendees",
      name: "Kalio Princewill",
      role: "S/W Engineer",
      company: "",
      titleDescription: "",
      day: "19th"
    },
    {
      startTime: '3:45PM',
      date: '3:45PM - 4:15PM EAT, Sat Oct 19th',
      duration: 'Community 30 Min',
      title: 'Panel Discussion [Podcast]: The State of Golang in Africa',
      room: 'Main Conference Hall, iHub',
      description: "This is a great chance to connect with the Go community and event sponsors, allowing you to ask questions and learn more about Go and its growing community in Africa.",
      level: "All attendees",
      name: "",
      role: "",
      company: "",
      titleDescription: "",
      day: "19th"
    },
    {
      startTime: '4:15PM',
      date: '4:15PM - 4:30PM EAT, Sat Oct 19th',
      duration: 'Closing Remarks 15 Min',
      title: 'Closing Remarks and Sponsors Appreciation',
      room: 'Main Conference Hall, iHub',
      description: "This is a great chance to connect with the Go community and event sponsors, allowing you to ask questions and learn more about Go and its growing community in Africa.",
      level: "All attendees",
      name: "",
      role: "",
      company: "",
      titleDescription: "",
      day: "19th"
    },
    {
      startTime: '4:30PM',
      date: '4:30PM - 5:00PM EAT, Sat Oct 19th',
      duration: '30 Min',
      title: 'Commute To GopherCon Party (TBC)',
      room: 'TBC',
      description: "",
      level: "All attendees",
      name: "",
      role: "",
      company: "",
      titleDescription: "",
      day: "19th"
    },
    {
      startTime: '5:00PM',
      date: '5:00PM - 9:00PM EAT, Sat Oct 19th',
      duration: '4 Hr',
      title: 'First GopherCon Africa Party (TBC)',
      room: 'TBC',
      description: "",
      level: "All attendees",
      name: "",
      role: "",
      company: "",
      titleDescription: "",
      day: "19th"
    },
  ]
}

export default SessionsList
