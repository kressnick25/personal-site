function truncate(str, maxLength=150) {
    if (!str) return ""
    if (str.length > maxLength) {
        return str.substring(0, maxLength - 3) + "...";
    }
    return str;
} 

export {
    truncate
}