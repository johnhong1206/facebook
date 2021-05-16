import zonghongimg from "../Images/zonghongphoto.jpg";
import zonghong from "../Images/zonghong.jpg";
import sonyimage from "../Images/sonyimage.jpg";
import sonylogo from "../Images/sonylogo.jpg";
import diantalogo from "../Images/diantalogo.jpg";
import diantaimage from "../Images/diantaimage.jpg";
import samsunglogo from "../Images/samsunglogo.jpg";
import samsungimage from "../Images/samsungimage.jpg";
import uniqlologo from "../Images/uniqlologo.png";
import uniqloimag from "../Images/uniqloimage.jpg";
import StoryCard from "./StoryCard";

const storyData = [
  {
    name: "Zong Hong Sin",
    src: `${zonghongimg}`,
    profile: `${zonghong}`,
  },
  {
    name: "Sony Malaysia",
    src: `${sonyimage}`,
    profile: `${sonylogo}`,
  },
  {
    name: "電獺少女-女孩的科技日常",
    src: `${diantaimage}`,
    profile: `${diantalogo}`,
  },
  {
    name: "Samsung Malaysia",
    src: `${samsungimage}`,
    profile: `${samsunglogo}`,
  },
  {
    name: "Uniqlo Malaysia",
    src: `${uniqloimag}`,
    profile: `${uniqlologo}`,
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto ">
      {storyData.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
