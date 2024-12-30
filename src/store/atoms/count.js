import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
});

export const evenSelector = selector({
    key: "evenSelector",
    get: (props) => {
        const count = props.get(countAtom);//here is what happening is that the selector is equivalent to useMemo in usememo it takes
        //function and dependency array here it also take function and dependency through countAtom whenever the countAtoom change thr function 
        //rerendered and we need to provide a key for
        return count % 2==0;
    }
});

// Todo creation application with filtering logic
// todos, filter