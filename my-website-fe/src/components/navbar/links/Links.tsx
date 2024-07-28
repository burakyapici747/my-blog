import Link from "next/link";

const Links = () => {

    const links = [
        {
            title: "Articles",
            path: "/articles",
        },
        {
            title: "Categories",
            path: "/categories"
        },
    ];

    return (
        <ul className="flex flex-row space-x-2 flex-1">
            {
                links.map(link => (
                    <li className="p-2" key={link.path}>
                        <Link className="hover:underline text-white text-md font-medium" style={{color: '#0000008C!important'}} href={link.path} id={link.title}>{link.title}</Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default Links