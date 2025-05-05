import CrownIcon from "../components/icons/crownIcon.astro" //owner
import UserTieIcon from "../components/icons/userTieIcon.astro" //manager
import HammerIcon from "../components/icons/hammerIcon.astro" // mod
import CodeIcon from "../components/icons/codeIcon.astro" // dev
import ToolsIcon from "../components/icons/toolsIcon.astro" // admin
import UserIcon from "../components/icons/userIcon.astro" // helper

export const STAFFS = [
    {
        name: "Luporojo",
        rank: "Owner",
        rankIcon: CrownIcon,
        image: "owner.png"
    },
    {
        name: "BlueWolf",
        rank: "Admin",
        rankIcon: ToolsIcon,
        image: "owner.png"
    },
    {
        name: "GreenFox",
        rank: "Moderator",
        rankIcon: HammerIcon,
        image: "owner.png"
    },
    {
        name: "RedPanda",
        rank: "Helper",
        rankIcon: UserIcon,
        image: "owner.png"
    }
]
