export const initials = (str) => {
    if (!str) {
        return ' ';
    };
    if (str.indexOf(' ') !== -1) {
        str = `${str.substr(0,1)}${str.substr(str.indexOf(' ') + 1, 1)}`
    } else {
        str = str.substr(0,1)
    }
    return str.toUpperCase();
}