import Cookie from "../Interfaces/interface";

const getAdvice = async () => {
    let randoms: number = Math.floor(Math.random() * 224) + 1;
    const promise = await fetch(`https://api.adviceslip.com/advice/${randoms}`);
    const data: Cookie = await promise.json();
 
    return data;
}

export default getAdvice 