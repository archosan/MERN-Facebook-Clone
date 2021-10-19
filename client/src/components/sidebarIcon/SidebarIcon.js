import "./SidebarIcon.style.css";
function SidebarIcon({ Icon, src, name }) {
  return (
    <div className="sidebar__iconContainer">
      {Icon ? (
        <Icon name={Icon} className="sidebar__icon" />
      ) : (
        <img src={src} className="sidebar__iconImage" alt="friends logo" />
      )}
      <p className="sidebar__iconName">{name}</p>
    </div>
  );
}

export default SidebarIcon;
