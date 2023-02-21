import { Blur } from "./modules/blur.js";
import { MagicalBlob } from "./modules/magical-blob.js";
import { HackerEffect } from "./modules/hacker-effect.js";

document.body.appendChild(new MagicalBlob());
document.body.appendChild(new Blur());
document.body.appendChild(new HackerEffect("hyperdonkey", "title"));
