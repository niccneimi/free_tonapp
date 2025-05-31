import './MenuItem.css';

export default function MenuItem( props ) {
  return (
    <div className={`menu-item ${props.isActive ? 'active' : ''}`} onClick={props.onClick}>
        <img src={props.image} alt={props.alt} className="menu-item-icon" />
        <span className="menu-item-text">{props.text}</span>
    </div>
  )
}