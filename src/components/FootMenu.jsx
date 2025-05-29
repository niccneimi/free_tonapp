import './FootMenu.css';
import MenuItem from './MenuItem';
import { footMenuItems } from '../data.js';

export default function FootMenu() {
  return (
    <div className="foot-menu">
        <MenuItem {...footMenuItems[0]} />
        <MenuItem {...footMenuItems[1]} />
        <MenuItem {...footMenuItems[2]} />
        <MenuItem {...footMenuItems[3]} />
        <MenuItem {...footMenuItems[4]} />
    </div>
  )
}
