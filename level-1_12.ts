import IceCreamFlavor from "./classes/IceCreamFlavor";

// =========================================
//? ------------ Console part --------------
// =========================================

const vanilla = new IceCreamFlavor('Vanilla', 2.10, true);
console.log(vanilla);
vanilla.getTotalPrice(1);
vanilla.printInfo();
console.log(vanilla.getLengthOfDescription());

const pistachio = new IceCreamFlavor('Pistachio Cream', 4.60, false, 'A creamy pistachio ice cream with a smooth, nutty flavor, subtly sweet with hints of roasted pistachios, delivering a rich and refreshing taste.');
console.log(pistachio);
pistachio.getTotalPrice(2);
pistachio.printInfo();
console.log(pistachio.getLengthOfDescription());

const chocolate = new IceCreamFlavor('Chocolate', 2.50, true);
console.log(chocolate);
chocolate.getTotalPrice(3);
chocolate.printInfo();
console.log(chocolate.getLengthOfDescription());

const iceCreamArr: IceCreamFlavor[] = [vanilla, pistachio, chocolate];

// =========================================
//? -------------- DOM part ----------------
// =========================================

const showIceCreams = document.querySelector('.showIceCreams') as HTMLDivElement;

const createIceCreamMenu = (iceCreamFlavor: IceCreamFlavor) => {
    const iceCream = document.createElement('div') as HTMLDivElement;
    iceCream.classList.add('iceCreamBox');
    iceCream.innerHTML = `
        <div class="star">
            ${iceCreamFlavor._isPopular ? '⭐️' : ''}
        </div>
        <h3>${iceCreamFlavor._name}</h3>
        <p>Price: ${iceCreamFlavor._price} Euro</p>
        <p class="scoops">Scoops: 0</p>
        <p class="totalPrice">Total Price: 0.00 Euro</p>
        <button class="addScoop">+1</button>
    `;
    showIceCreams.appendChild(iceCream);

    const addButton = iceCream.querySelector('.addScoop') as HTMLButtonElement;
    const scoops = iceCream.querySelector('.scoops') as HTMLParagraphElement;
    const totalPrice = iceCream.querySelector('.totalPrice') as HTMLParagraphElement;

    let scoopsCounter: number = 0;
    addButton.addEventListener('click', () => {
        scoopsCounter++;
        scoops.textContent = `Scoops: ${scoopsCounter}`;
        totalPrice.textContent = `Total Price: ${iceCreamFlavor.getTotalPrice(scoopsCounter)} Euro`;
    });
}
iceCreamArr.forEach((iceCream) => createIceCreamMenu(iceCream));