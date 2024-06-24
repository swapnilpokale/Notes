const Header = ({ darkMode }) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button
                onClick={() => darkMode((prevMode) => !prevMode)}
                className="save">Toggle Mode</button>
        </div>
    )
}

export default Header;