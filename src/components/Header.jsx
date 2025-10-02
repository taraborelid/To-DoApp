import './Header.css';

export default function Header() {
    return (
        <div className="header">
            <img src="/logo.png" alt="Logo" className="header-logo" />
            <h1 className='h1'>Mis Tareas </h1>
            <img src="/icon-check.png" alt="icon" className="header-icon" />
        </div>
    )
}