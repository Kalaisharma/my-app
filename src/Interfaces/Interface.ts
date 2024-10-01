export type MyContextType={
    email: string;
    setemail: (email: string) => void; //This property is named setEmail and it is a function. The function takes one parameter named email of type string and returns void (i.e., it doesn’t return any value).
}
export type VisibleContextType={
    visible: boolean;
    setvisible: (visible: boolean) => void;//This property is named setEmail and it is a function. The function takes one parameter named email of type string and returns void (i.e., it doesn’t return any value).
}
export type VisibleRemoveContextType={
    visibleremove: boolean;
    setvisibleremove: (visible: boolean) => void; //This property is named setEmail and it is a function. The function takes one parameter named email of type string and returns void (i.e., it doesn’t return any value).
}
export type LogindataType = {
    email: string;
    password: string;
}
export type favdata = {
    placeid: number;
    img: string;
    name: string;
    desc: string;
    email: string;
    visible: string;
}
export type removefavtype = {
    placeid: number;
    email: string;

}
export type emailtype = {
    email: string | '';
}