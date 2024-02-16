import GrowingTreeImg from '../../public/GrowingTreeImg.png'
import CultureMingleImg from '../../public/CultureMingle.png'
import FurnitureImg from '../../public/FurnitureShopping.png'

const data = [
    {
        title: "Web | CultureMingle",
        description: "A web-based, user-friendly, and real-time activity planning application specifically tailored to international students. Students can create and join various activities such as cultural experiences and outdoor adventures.",
        tags: ["React", "Springboot", "MongoDB", "Jira"],
        imageUrl: CultureMingleImg,
        link: "https://github.com/WaQw/CultureMingle"
    },
    {
        title: "Mobile | GrowingTree",
        description: "An Android-based child development health record application, enabling parents to input children's growth parameters and milestones, generating personalized growth curves and milestone evaluations based on international standards.",
        tags: ["Android", "Go", "MaterialUI"],
        imageUrl: GrowingTreeImg,
        link: "https://github.com/WaQw/Android-App-for-Children-Development"
    },
    {
        title: "Mobile | FurnitureShop",
        description: "A cross-platform e-commerce application that allows users to browse, shop, and securely make purchases for furniture on their Android or iOS devices.",
        tags: ["React Native", "Node.js", "Express.js", "MongoDB"],
        imageUrl: FurnitureImg,
        link: "https://github.com/WaQw/furniture-app"
    }
  ] as const

  export default data;