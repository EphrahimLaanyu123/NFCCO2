const Auth = () => {
    return (
        <div>
            <input placeholder="Email..." />
            <input placeholder="Password..." />
            <button onClick={signIn}> Sign In</button>
        </div>
    )
}

export default Auth;