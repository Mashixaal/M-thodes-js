import "./assets/css/styles.css";
import { Shirt, Shoes } from "./clothes";
import FindClothes from "./findClothes";

let KillianShirt = new Shirt("blue", "XXL", "Nike", "shirt");
let KillianShoes = new Shoes("white", "34", "Abibas", "shoes");
KillianShirt.FindCategory();

console.log(KillianShirt, KillianShoes);