export const saveState = (maxNumber: number | string, startNumber: number | string) => {
    let obj = {
        'max': maxNumber,
        'min': startNumber
    }
    localStorage.setItem('counter', JSON.stringify(obj));
}

export const restoreState = () => {
    let obj = localStorage.getItem('counter')
    return obj ? JSON.parse(obj) : {'max': "", 'min': ""}
}