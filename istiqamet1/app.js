"use strict"

const ist = prompt('istiqametleri mueyyen edin');



switch (ist) {
    case "upp":
        console.log('yuxari gedin');
        break;


    case "right":
        console.log('saga gedin');
        break;

    case "left":
        console.log('sola gedin');
        break;


    case "down":
        console.log('asagi  gedin');
        break;

    default:
        console.log('yalnis');
}
