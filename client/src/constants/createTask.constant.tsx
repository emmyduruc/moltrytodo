import colors from "../utils/colors";
import { VideoCamera } from "../component/Icons/VideoCamera";
import { Megaphone } from "../component/Icons/Megaphone";
import { Add } from "../component/Icons/Add";
import { Console } from "../component/Icons/Console";
import { HeartBeat } from "../component/Icons/Heartbeat";
import { Mortalboard } from "../component/Icons/Mortarboard";
import { Music } from "../component/Icons/Music";
import { Bread } from "../component/Icons/Bread";
import { Design } from "../component/Icons/Design";

export const priorityData = [
  {
    level: 1,
    color: "red",
    backgroundColor: colors.blue[100],
  },
  {
    level: 2,
    color: "yellow",
    backgroundColor: colors.pink[200],
  },
  {
    level: 3,
    color: "green",
    backgroundColor: colors.purple[200],
  },
  {
    level: 4,
    color: "blue",
    backgroundColor: colors.green[1000],
  },
  {
    level: 5,
    color: "purple",
    backgroundColor: colors.green[400],
  },
  {
    level: 6,
    color: "pink",
    backgroundColor: colors.orange[200],
  },
  {
    level: 7,
    color: "orange",
    backgroundColor: colors.blue[100],
  },
  {
    level: 8,
    color: "gray",
    backgroundColor: colors.purple[200],
  },
  {
    level: 9,
    color: "#D4AF37",
    backgroundColor: colors.green[800],
  },
  {
    level: 10,
    color: "white",
    backgroundColor: colors.green[300],
  },
] as const;

export const categoryData = [
  {
    name: "Work",
    icon: <VideoCamera />,
    colors: [colors.green[600]],
  },
  {
    name: "Social",
    icon: <Megaphone />,
    colors: [colors.pink[300]],
  },
  {
    name: "Health",
    icon: <HeartBeat />,
    colors: [colors.green[900]],
  },
  {
    name: "Education",
    icon: <Mortalboard />,
    colors: [colors.purple[400]],
  },
  {
    name: "Music",
    icon: <Music />,
    colors: [colors.pink[400]],
  },
  {
    name: "Food",
    icon: <Bread />,
    colors: [colors.green[600]],
  },
  {
    name: "Design",
    icon: <Design />,
    colors: [colors.green[800]],
  },
  {
    name: "Sport",
    icon: <Console />,
    colors: [colors.purple[400]],
  },
  {
    name: "",
    icon: <Add />,
    colors: [colors.green[1000]],
  },
] as const;
