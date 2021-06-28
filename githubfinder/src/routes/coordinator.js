export const goToHome = (history, setUser) => {
    history.push("/")
    setUser({})
}

export const goToUserDetails= (history, login) => {
    history.push(`/${login}`)
}