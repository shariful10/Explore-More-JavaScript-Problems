const phones = [
    {name: 'Samsung', camera: 48, storage: '32 GB', price: 36000, color: 'White'},
    {name: 'Walton', camera: 28, storage: '32 GB', price: 22000, color: 'Green'},
    {name: 'iPhone', camera: 85, storage: '128 GB', price: 82000, color: 'Blue'},
    {name: 'Xaomi', camera: 76, storage: '32 GB', price: 52000, color: 'Red'},
    {name: 'Oppo', camera: 24, storage: '32 GB', price: 20000, color: 'Black'},
    {name: 'Nokia', camera: 74, storage: '32 GB', price: 44000, color: 'Golden'},
    {name: 'HTC', camera: 80, storage: '128 GB', price: 62000, color: 'Silver'},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const myPhone = cheapestPhone(phones);
console.log('Cheapest Phone is:', myPhone);

/****************************************
Find High Quality Camera
****************************************/

function highQualityCameraPhone(phones){
    let highRegulation = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.camera > highRegulation.camera) {
            highRegulation = phone;
        }
    }
    return highRegulation;
}
const mySelection = highQualityCameraPhone(phones);
console.log("High Quality Camera's Phone is:", myPhone);