export const goToHome = (history) => {
    history.push("/")
}

export const goToUserDetails= (history, name) => {
    history.push(`/${name}`)
}