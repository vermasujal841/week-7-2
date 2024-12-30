import { atom } from "recoil";

export const countAtom = atom({
    key: "countAtom", // this shpuld be unique for every atom so name it as same as variable 
    default: 0
});
