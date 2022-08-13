export const LISTS = [
    'aaaaaa', 'bbbbbbbbbbbbbb', 'cccccccccccccccccccccccc'
];

export const getLanguages=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(LISTS);
        },1000)
    })
}