// app/page.tsx
export default function MilfordCareerEPortfolio() {
    const skills = [
        "Python",
        "Java",
        "C",
        "C++",
        "Next.js",
        "Supabase",
        "Vercel",
        "GitHub",
        "Jupyter Notebook",
        "Google Workspace",
        "Microsoft Excel",
        "Canva",
    ];

    const strengths = [
        "Analytic problem-solving",
        "Attention to detail",
        "Communication",
        "Leadership",
        "Adaptability",
        "Time management",
        "Patience and consistency",
        "Eagerness to learn",
    ];

    const academicHighlights = [
        {
            title: "ESY Trading Digital Catalog and Inquiry Website",
            subtitle: "Academic Work Sample",
            description:
                "A live web-based catalog and inquiry platform for an electrical supplies business. This project reflects my ability to turn business needs into a working digital solution with a clean interface, organized product presentation, and a practical inquiry process for both customers and administrators.",
            bullets: [
                "Built to help customers browse electrical supply products, view available sizes, and send inquiries more efficiently",
                "Includes an admin side for managing products, product images, stock availability, and customer inquiries",
                "Shows my growing skills in web development, interface design, database-backed workflows, and business-oriented problem solving",
            ],
            link: "https://esytrading.vercel.app",
            linkLabel: "View Project",
            screenshots: [
                {
                    src: "/esy-products-catalog.png",
                    alt: "ESY Trading public products catalog page",
                    title: "Customer Product Catalog",
                    caption:
                        "This page shows the customer-facing product catalog where users can browse items, search products, filter by status, choose sizes, and add products to an inquiry list. It highlights the usability of the platform and how the interface was designed to make product selection simple and organized.",
                },
                {
                    src: "/esy-admin-dashboard.png",
                    alt: "ESY Trading admin inventory dashboard",
                    title: "Admin Inventory Dashboard",
                    caption:
                        "This dashboard serves as the main control area for the system. It gives administrators quick access to product management, customer inquiries, activity logs, and backups, showing how the platform supports not only customer browsing but also internal operations and monitoring.",
                },
                {
                    src: "/esy-admin-product-management.png",
                    alt: "ESY Trading admin product management page",
                    title: "Product Management Module",
                    caption:
                        "This screen shows the staff product management page where admins can add new products, upload product images, update descriptions, edit sizes, and change availability. It demonstrates the practical backend workflow of maintaining an accurate and usable digital catalog.",
                },
                {
                    src: "/esy-admin-customer-inquiries.png",
                    alt: "ESY Trading customer inquiries management page",
                    title: "Customer Inquiry Management",
                    caption:
                        "This module displays submitted customer inquiries in an organized and trackable format. It allows staff to review grouped requests, manage item status, and process inquiries more efficiently, which supports a smoother communication flow between the business and its customers.",
                },
            ],
        },
    ];

    const experience = [
        {
            title: "Chief Marketing Officer",
            org: "Gran Turismo (GT) Apparel",
            date: "July 2023 to August 2024",
            bullets: [
                "Helped sell and market products directly to consumers in bazaars, contributing to a complete sellout",
                "Handled social media posting and community engagement to strengthen brand connection",
                "Contributed to product design based on consumer preference and detail-oriented research",
                "Conducted market research to support a thoughtful and informed launch",
            ],
        },
        {
            title: "Events and Special Services Committee Member",
            org: "Lasallian Aide",
            date: "September 2025 to Present",
            bullets: [
                "Helped organize and support graduation-related operations for college and senior high school events",
                "Coordinated materials and on-site logistics with care and attention to detail",
            ],
        },
        {
            title: "Records and Enrollment Registration Work Committee Member",
            org: "Lasallian Aide",
            date: "May 2025 to August 2025",
            bullets: [
                "Supported documentation and coordination work under the Secretariat arm",
                "Managed registration, attendance, and record tracking through Google Sheets",
            ],
        },
    ];

    const education = [
        {
            school: "De La Salle University Manila",
            degree: "BS Computer Engineering",
            date: "2024 to Present",
            detail: "Current GWA: 3.185/4",
        },
        {
            school: "De La Salle University Integrated School Manila",
            degree: "Accountancy, Business, and Management Strand",
            date: "2022 to 2024",
            detail: "GWA: 3.643/4 • General Excellence Award - Silver Medallion (With High Honors)",
        },
    ];

    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900">
            <section className="border-b bg-white">
                <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
                    <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                                Career E-Portfolio
                            </p>
                            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                                Milford Emerson S. Yao
                            </h1>
                            <p className="mt-5 max-w-2xl text-left text-base leading-7 text-neutral-700 md:text-justify md:text-lg">
                                I am a BS Computer Engineering student from De La Salle University Manila who is interested in building practical digital solutions, improving user experience, and growing as a future technology professional. I enjoy projects that combine technical work, business thinking, and real-world usefulness.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href="https://www.linkedin.com/in/milford-yao"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                                >
                                    LinkedIn Profile
                                </a>
                                <a
                                    href="https://esytrading.vercel.app"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
                                >
                                    Featured Project
                                </a>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-2 text-sm text-neutral-600">
                                <span className="rounded-full bg-neutral-100 px-3 py-1">San Juan City, Philippines</span>
                                <span className="rounded-full bg-neutral-100 px-3 py-1">milfordemersonyao@gmail.com</span>
                                <span className="rounded-full bg-neutral-100 px-3 py-1">+63 970 572 2999</span>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
                            <h2 className="text-lg font-semibold">Career Direction</h2>
                            <p className="mt-3 text-left text-sm leading-7 text-neutral-700 md:text-justify">
                                I want to build a strong foundation in technology through projects that improve processes, solve clear problems, and create useful digital experiences. My current interests include web development, artificial intelligence, cybersecurity, and UI/UX design.
                            </p>
                            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                                <div className="rounded-2xl bg-white p-4">
                                    <p className="font-semibold">Strength</p>
                                    <p className="mt-1 text-neutral-600">Technical and business balance</p>
                                </div>
                                <div className="rounded-2xl bg-white p-4">
                                    <p className="font-semibold">Focus</p>
                                    <p className="mt-1 text-neutral-600">Practical and user-centered solutions</p>
                                </div>
                                <div className="rounded-2xl bg-white p-4">
                                    <p className="font-semibold">Approach</p>
                                    <p className="mt-1 text-neutral-600">Detail-oriented and consistent</p>
                                </div>
                                <div className="rounded-2xl bg-white p-4">
                                    <p className="font-semibold">Goal</p>
                                    <p className="mt-1 text-neutral-600">Grow into a reliable tech professional</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-14 md:px-10">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-neutral-200">
                        <h2 className="text-2xl font-semibold">About Me</h2>
                        <p className="mt-4 text-left text-sm leading-7 text-neutral-700 md:text-justify">
                            My academic and personal experiences have helped me develop both technical and interpersonal skills. As a Computer Engineering student, I am learning how to connect technology with real needs. I value work that is organized, useful, and well thought out, and I try to bring those qualities into every project and responsibility I take on.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-neutral-200">
                        <h2 className="text-2xl font-semibold">Resume Snapshot</h2>
                        <div className="mt-4 space-y-4 text-sm text-neutral-700">
                            {education.map((item) => (
                                <div key={item.school} className="rounded-2xl bg-neutral-50 p-4">
                                    <p className="font-semibold text-neutral-900">{item.school}</p>
                                    <p>{item.degree}</p>
                                    <p>{item.date}</p>
                                    <p className="mt-1 text-neutral-600">{item.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 pb-14 md:px-10">
                <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-neutral-200">
                    <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold">Technical Skills</h2>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full bg-neutral-100 px-3 py-2 text-sm text-neutral-700"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold">Core Strengths</h2>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {strengths.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full bg-neutral-100 px-3 py-2 text-sm text-neutral-700"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 pb-14 md:px-10">
                <div className="px-2 md:px-3">
                    <h2 className="text-3xl font-semibold">Academic Work Sample</h2>
                    <div className="mt-6 grid gap-6">
                        {academicHighlights.map((project) => (
                            <div
                                key={project.title}
                                className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-neutral-200"
                            >
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                                    {project.subtitle}
                                </p>

                                <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>

                                <p className="mt-4 max-w-4xl text-left text-sm leading-7 text-neutral-700 md:text-justify">
                                    {project.description}
                                </p>

                                <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-neutral-700 marker:text-neutral-900">
                                    {project.bullets.map((bullet) => (
                                        <li key={bullet}>
                                            <p className="leading-7 text-left md:text-justify">{bullet}</p>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-6 inline-flex rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
                                >
                                    {project.linkLabel}
                                </a>

                                <div className="mt-10 grid gap-6 md:grid-cols-2">
                                    {project.screenshots.map((shot) => (
                                        <div
                                            key={shot.src}
                                            className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50"
                                        >
                                            <div className="border-b border-neutral-200 bg-white p-4">
                                                <img
                                                    src={shot.src}
                                                    alt={shot.alt}
                                                    className="h-auto w-full rounded-2xl object-cover"
                                                />
                                            </div>

                                            <div className="p-5">
                                                <h4 className="text-lg font-semibold text-neutral-900">
                                                    {shot.title}
                                                </h4>
                                                <p className="mt-3 text-left text-sm leading-7 text-neutral-700 md:text-justify">
                                                    {shot.caption}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
                <div className="px-2 md:px-3">
                    <h2 className="text-3xl font-semibold">Business, Volunteer, and Leadership Experience</h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-3">
                        {experience.map((item) => (
                            <div
                                key={item.title + item.org}
                                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200"
                            >
                                <p className="text-sm font-semibold text-neutral-500">{item.date}</p>
                                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                                <p className="mt-1 text-sm text-neutral-700">{item.org}</p>
                                <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-neutral-700 marker:text-neutral-900">
                                    {item.bullets.map((bullet) => (
                                        <li key={bullet}>
                                            <p className="leading-7 text-left md:text-justify">{bullet}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t bg-white">
                <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-lg font-semibold">Milford Emerson S. Yao</p>
                            <p className="text-sm text-neutral-600">
                                BS Computer Engineering Student • De La Salle University Manila
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm">
                            <a
                                href="https://www.linkedin.com/in/milford-yao"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-2xl border border-neutral-300 px-4 py-2 transition hover:bg-neutral-100"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="mailto:milfordemersonyao@gmail.com"
                                className="rounded-2xl border border-neutral-300 px-4 py-2 transition hover:bg-neutral-100"
                            >
                                Email
                            </a>
                            <a
                                href="https://esytrading.vercel.app"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-2xl border border-neutral-300 px-4 py-2 transition hover:bg-neutral-100"
                            >
                                ESY Trading Project
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}