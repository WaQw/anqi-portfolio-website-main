import MotionDiv from "@/components/motion-div";
import MotionList from "@/components/motion-list";
import Image from "next/image";
import reactIcon from "@/assets/icons/react.png";
import nextjsIcon from "@/assets/icons/next-js.png";
import typescriptIcon from "@/assets/icons/typescript.png";
import javascriptIcon from "@/assets/icons/javascript.png";
import pythonIcon from "@/assets/icons/python.png";
import javaIcon from "@/assets/icons/java.png";
import html5Icon from "@/assets/icons/html5.png";
import tailwindcssIcon from "@/assets/icons/tailwindcss.png";
import viteIcon from "@/assets/icons/vite.png";
import prettierIcon from "@/assets/icons/prettier.png";
import nodejsIcon from "@/assets/icons/nodejs.png";
import expressjsIcon from "@/assets/icons/express-js.png";
import jiraIcon from "@/assets/icons/jira.png";
import confluenceIcon from "@/assets/icons/confluence.png";
import dockerIcon from "@/assets/icons/docker.png";
import gitIcon from "@/assets/icons/git.png";
import ubuntuIcon from "@/assets/icons/ubuntu.svg";
import macosIcon from "@/assets/icons/macos.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import postmanIcon from "@/assets/icons/postman.svg";
import ExpoIcon from "@/assets/icons/expo.png";
import githubActionsIcon from "@/assets/icons/github-actions.png";
import mysqlIcon from "@/assets/icons/mysql.png";
import mongodbIcon from "@/assets/icons/mongodb.png";
import androidIcon from "@/assets/icons/android.png";
import swiftIcon from "@/assets/icons/swift.png";
import cIcon from "@/assets/icons/c.png";
import cplusIcon from "@/assets/icons/cplus.png";
import sqlIcon from "@/assets/icons/sql.png";


export default function skills() {
  const data = [
    {
      title: "Web Development",
      skills: [
        {
          name: "React.js",
          icon: reactIcon,
        },
        {
          name: "Next.js",
          icon: nextjsIcon,
        }, 
        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
        {
          name: "HTML5",
          icon: html5Icon,
        },
        {
          name: "Tailwind CSS",
          icon: tailwindcssIcon,
        },
        {
          name: "Vite",
          icon: viteIcon,
        },
        {
          name: "Prettier",
          icon: prettierIcon,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Express.js",
          icon: expressjsIcon,
        },
        {
          name: "Node.js",
          icon: nodejsIcon,
        },
        {
          name: "MySQL",
          icon: mysqlIcon,
        },
        {
          name: "MongoDB",
          icon: mongodbIcon,
        },
      ],
    },
    {
      title: "Mobile Development",
      skills: [
        {
          name: "React Native",
          icon: reactIcon,
        },
        {
          name: "Expo",
          icon: ExpoIcon,
        },
        {
          name: "iOS",
          icon: macosIcon,
        },
        {
          name: "Android",
          icon: androidIcon,
        },
      ],
    },
    {
      title: "DevOps",
      skills: [
        {
          name: "Git",
          icon: gitIcon,
        },
        {
          name: "GitHub Actions",
          icon: githubActionsIcon,
        },
        {
          name: "Docker",
          icon: dockerIcon,
        },
        {
          name: "Ubuntu",
          icon: ubuntuIcon,
        },
      ],
    },
    {
      title: "Tools & Environment",
      skills: [
        {
          name: "VS Code",
          icon: vscodeIcon,
        },
        {
          name: "Postman",
          icon: postmanIcon,
        },
        {
          name: "Jira",
          icon: jiraIcon,
        },
        {
          name: "Confluence",
          icon: confluenceIcon,
        },
      ],
    },
    {
      title: "Languages",
      skills: [
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
        {
          name: "Java",
          icon: javaIcon,
        },
        {
          name: "Swift",
          icon: swiftIcon,
        },
        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "Python",
          icon: pythonIcon,
        },
        {
          name: "C",
          icon: cIcon,
        },
        {
          name: "C++",
          icon: cplusIcon,
        },
        {
          name: "SQL",
          icon: sqlIcon,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center"
    >
      <MotionDiv>
        <h2 className="mb-8">My Skills</h2>
      </MotionDiv>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-7 md:px-2">
              <div className="mb-4">
                <h3>{item.title}</h3>
              </div>
              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="group rounded-xl border-none p-2 text-center shadow-none">
      <div className="flex flex-col items-center gap-1">
        <div className="flex h-10 w-10 items-center justify-center">
          <Image src={icon} alt={name} priority />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}
