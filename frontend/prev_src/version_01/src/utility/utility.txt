// https://stackoverflow.com/questions/586182/
// https://medium.com/analytics-vidhya/
// 3-ways-to-copy-by-value-any-composite-data-type-in-javascript-ca3c730e4d2f

export function copy_obj<t>(input:t){
    return JSON.parse(JSON.stringify(input)) as t
}
