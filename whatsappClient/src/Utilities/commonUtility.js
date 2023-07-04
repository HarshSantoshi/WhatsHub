
export const formateDate = (date)=>{
    const hours = new Date(date).getHours();
    const min = new Date(date).getMinutes();
    return `${hours<10 ? '0' + hours : hours} : ${min <10 ? '0' +min :min}`;
}