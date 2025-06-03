import './ProfileMenu.css'

export default function ProfileMenu({ profileSubMenu, setProfileSubMenu }) {
    return (
        <div className="profile-menu">
            <button className={`profile-button ${profileSubMenu === 'profile' ? 'active' : ''}`} onClick={() => setProfileSubMenu('profile')}>Профиль</button>
            <button className={`advertising-button ${profileSubMenu === 'advertising' ? 'active' : ''}`} onClick={() => setProfileSubMenu('advertising')}>Рекламный кабинет</button>
        </div>
    )
};