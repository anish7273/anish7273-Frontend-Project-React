import {atom, selector } from 'recoil'


export const networkAtom = atom({
    key: "networkAtom",
    default: 102
});


export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
});


export const messageAtom = atom({
    key: "messageAtom",
    default: 0
});


export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
});

export const totalNotiselector = selector({
    key: "totalNotiselector",
    get: ({get}) =>{
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const messageAtomCount = get(messageAtom);
        const notificationAtomCount = get(notificationAtom);
        return networkAtomCount+ jobsAtomCount + messageAtomCount + notificationAtomCount;
    }
})