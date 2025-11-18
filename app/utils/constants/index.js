import moviesImage from "@/public/moviesImage.jpg";
import { FaDownload } from "react-icons/fa";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { MdCelebration } from "react-icons/md";
import { TbBrandYoutubeKids } from "react-icons/tb";

const languages = [
  {
    title: "Hindi",
    value: "hindi",
  },
  {
    title: "English",
    value: "english",
  },
];

const moviesCollection = [
  {
    movieName: "Inception",
    path: "movie1.jpg",
  },
  {
    movieName: "Interstellar",
    path: "movie2.jpg",
  },
  {
    movieName: "The Dark Knight",
    path: "movie3.jpg",
  },
  {
    movieName: "Avengers: Endgame",
    path: "movie4.jpg",
  },
  {
    movieName: "The Shawshank Redemption",
    path: "movie5.jpg",
  },
  {
    movieName: "Parasite",
    path: "movie6.jpg",
  },
  {
    movieName: "Gladiator",
    path: "movie9.jpg",
  },
];

const reasonToJoin = [
  {
    title: "Enjoy on your TV",
    description:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: <PiTelevisionSimpleDuotone size={50} />,
  },
  {
    title: "Download your shows to watch offline",
    description:
      "Save your favourites easily and always have something to watch.",
    icon: <FaDownload size={50} />,
  },
  {
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: <MdCelebration size={50} />,
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    icon: <TbBrandYoutubeKids size={50} />,
  },
];

export { languages, moviesCollection, reasonToJoin };
