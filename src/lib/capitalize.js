const Capitalize = (string) => {
    if (!string) {
        return "";
    }

    const firstLetter = string[0].toUpperCase();
    const remainingStr = string.slice(1);

    const capitalizedStr = firstLetter + remainingStr;

    return capitalizedStr;
};

export default Capitalize;