

export const LoginButton = ({ isConnecting }) => {
    return (
        <button
            className={` btn ${!isConnecting ? 'btn-primary' : 'btn-secondary'}`}
            disabled={isConnecting}
        >
            {
                isConnecting ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    : null
            }
            {
                isConnecting ? 'Connecting...' : 'Login'
            }
        </button>
    )
}
