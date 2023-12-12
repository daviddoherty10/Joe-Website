import Sidebar from "../../components/layoutComponents/sideBar/sideBar";
import { SidebarData } from "./forumSideBar";
import "../../components/layoutComponents/sideBar/sideBar.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
      }}
    >
      <div id="sidebar-container-forum">
        <ul>
          {SidebarData.map((item, index) => (
            <Sidebar
              key={index}
              src={item.link}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </ul>
        
      </div>
      {children}
    </div>
  );
}
