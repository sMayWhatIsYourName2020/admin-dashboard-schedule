export const formatDate = (date: Date) => {
    const day = date.getDate();
    const formattedDay = day > 9 ? day : `0${day}`;
    const month = date.getMonth() + 1;
    const formattedMonth = month > 9 ? month : `0${month}`;
    const year = date.getFullYear();
    
    return `${formattedDay}${formattedMonth}${year}`;
    
}