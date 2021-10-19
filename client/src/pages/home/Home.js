import TopBar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./Home.styles.css";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="body">
        {/*  sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* rightbar */}
        <Rightbar />
      </div>
    </>
  );
}
