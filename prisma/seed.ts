import prisma from "../src/database/prisma";

const categories = [
    { name: 'Entradas', icon: '🥗' },
    { name: 'Sopas e Caldos', icon: '🍲' },
    { name: 'Carnes', icon: '🥩' },
    { name: 'Frutos do Mar', icon: '🍤' },
    { name: 'Massas', icon: '🍝' },
    { name: 'Pizzas', icon: '🍕' },
    { name: 'Tacos e Burritos', icon: '🌮' },
    { name: 'Sanduíches', icon: '🥪' },
    { name: 'Pratos Principais', icon: '🥘' },
    { name: 'Vegetariano/Vegano', icon: '🥦' },
    { name: 'Sobremesas', icon: '🍧' },
    { name: 'Bebidas Quentes', icon: '☕' },
    { name: 'Bebidas Geladas', icon: '🍹' },
    { name: 'Sucos Naturais', icon: '🥤' },
    { name: 'Cervejas Artesanais', icon: '🍺' },
    { name: 'Carta de Vinhos', icon: '🍷' }
]

async function main(){
    await prisma.category.createMany({data: categories})
}

main().catch((e)=>{
    console.error(e)
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})
