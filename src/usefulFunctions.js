function ageCalculating() {
    const myBirthYear = 1999;
    const myBirthMonth = 8;
    const currentMonth = new Date().getMonth();
    return (currentMonth < myBirthMonth) ? new Date().getFullYear() - myBirthYear - 1 : new Date().getFullYear() - myBirthYear;
}
export default ageCalculating();