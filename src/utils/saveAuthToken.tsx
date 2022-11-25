export const saveAuthToken = (token: string) => {
    localStorage.setItem('token', token);
}