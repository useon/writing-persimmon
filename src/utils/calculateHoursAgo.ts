export const calculateHoursAgo = (date: string) => {
    const now = new Date();
    const writeTime = new Date(date);
    const gap = now.getTime() - writeTime.getTime();
    const dateGap = Math.floor(gap/ (24 * 60 * 60 * 1000));
    const hourGap = Math.floor(gap/ ( 60 * 60 * 1000));

    if(hourGap < 1) return '방금 전';
    if(dateGap > 6) return `${writeTime.getFullYear()}년 ${writeTime.getMonth()+1}월 ${writeTime.getDate()}일`
    if(dateGap < 1) return `약 ${hourGap}시간 전`;
    return `${dateGap}일 전`;
}