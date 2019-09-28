/**----------------------------------------
* Function: Auto random ID
* Component: AdminPage
----------------------------------------**/
const autoRandomStringGUID = () => {
    return Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1);
}

const autoGenerateRandomGUID = () => {
    return autoRandomStringGUID() + autoRandomStringGUID() + autoRandomStringGUID();
}

export const UUID = () => {
    return autoGenerateRandomGUID();
}
