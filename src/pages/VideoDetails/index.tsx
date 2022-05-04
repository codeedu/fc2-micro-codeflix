import Page from "../../components/Page";
import BannerCategory from "../Home/Banner/BannerCategory";
import VideoContent from "../Home/Banner/VideoContent";
import Title from "../../components/Video/Title";

const VideoHeader = () => {
  <BannerCategory>
    {video.categories.map((c) => c.name).join(" | ")}
  </BannerCategory>;
  <Title className={classes.title}>{video.title}</Title>;
};

type Props = {};
const VideoDetails = (props: Props) => {
  return (
    <Page>
      <VideoContent
        video={{
          id: "0000",
          title: "epitafios",
          categories: [{ id: "111", name: "Documentario", is_active: true }],
        }}
      />
    </Page>
  );
};

export default VideoDetails;
