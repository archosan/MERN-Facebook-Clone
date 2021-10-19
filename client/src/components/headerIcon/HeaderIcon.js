import "./HeaderIcon.style.css";

export default function HeaderIcon({ Icon, active }) {
  return (
    <div className={`container ${active && "container__active"}`}>
      <Icon name={Icon} className={`container__icon ${active && "active"}`} />
    </div>
  );
}
