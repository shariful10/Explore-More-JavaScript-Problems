/****************************************
* Fixed: Per item wood requirements.
* 1. Chair --> 3 cft.
* 2. Table --> 10 cft.
* 3. Bed --> 50 cft.
* Vary: Quantity.
****************************************/
function woodCalculator(chairQuantity, tableQuantity, badQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = badQuantity * perBedWood;
    // console.log(chairQuantity, tableQuantity, badQuantity);
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
const totalWood = woodCalculator(0, 0, 1);
console.log(totalWood);