import prisma from "../src/database/prisma";

const categories = [
    {
        id: "3e4b15ab-f1b4-493f-ae78-355c7e43d020",
        name: "Entradas",
        icon: "🥗",
    },
    {
        id: "25c402af-89b6-4ad8-b51a-aaa8f7522297",
        name: "Sopas e Caldos",
        icon: "🍲",
    },
    {
        id: "3cfc55ad-d4c9-4acb-b8ee-b09a155e926c",
        name: "Carnes",
        icon: "🥩",
    },
    {
        id: "1a502553-c3c0-4dd9-9923-d5d812b4b1eb",
        name: "Frutos do Mar",
        icon: "🍤",
    },
    {
        id: "6cb02d29-a732-48ba-b14f-b29821f279b4",
        name: "Massas",
        icon: "🍝",
    },
    {
        id: "b4e3a2f8-f36a-4ac5-98b2-6a3a9140296a",
        name: "Pizzas",
        icon: "🍕",
    },
    {
        id: "2bce768d-f896-488a-87ef-a70a4f6fa7fe",
        name: "Tacos e Burritos",
        icon: "🌮",
    },
    {
        id: "77021eda-11ee-4f9c-bfc3-2f2b28f7c7d1",
        name: "Sanduíches",
        icon: "🥪",
    },
    {
        id: "6216b51f-b831-48f8-9453-d13987bcb933",
        name: "Pratos Principais",
        icon: "🥘",
    },
    {
        id: "c1b6e9df-0826-4fc1-91c9-70fa814a861a",
        name: "Vegetariano/Vegano",
        icon: "🥦",
    },
    {
        id: "6cf64a3c-60ee-42c5-8860-330144a4c086",
        name: "Sobremesas",
        icon: "🍧",
    },
    {
        id: "c51252f7-bcc4-443d-bcfc-34aa3ddc61c5",
        name: "Bebidas Quentes",
        icon: "☕",
    },
    {
        id: "b3abd932-c14c-45a9-b5e6-57ec42f11c46",
        name: "Bebidas Geladas",
        icon: "🍹",
    },
    {
        id: "63123602-f714-4df2-a675-2b6fcf2e02ad",
        name: "Sucos Naturais",
        icon: "🥤",
    },
    {
        id: "fb9acd8d-075e-471f-82d2-8c95e7bc979f",
        name: "Cervejas Artesanais",
        icon: "🍺",
    },
    {
        id: "508c5be0-e979-4207-bdf5-18469264a754",
        name: "Carta de Vinhos",
        icon: "🍷",
    },
    {
        id: "c23c2531-713e-47ce-a27f-e78f31f87030",
        name: "Peixes",
        icon: "🐟",
    },
    {
        id: "08ce10b0-98bc-4add-9dc2-5a5e450c90d7",
        name: "Sushi",
        icon: "🍣"
    }
]

const products = [
    {
        id: "16b98f0b-80ba-4627-8924-b90fac1fbbdd",
        name: "Penne à Carbonara",
        description: "Uma clássica massa italiana com molho carbonara cremoso, bacon crocante e queijo parmesão gratinado.",
        price: 19.75,
        category: "6cb02d29-a732-48ba-b14f-b29821f279b4",
        imagePath: "https://waiter-app-aws.s3.us-east-2.amazonaws.com/8ca403f8559d66f5dac1-penne-carbonara.jpg",
        ingredients: "[    { \"name\": \"Penne\", \"icon\": \"🍝\" },    { \"name\": \"Bacon\", \"icon\": \"🥓\" },    { \"name\": \"Ovo\", \"icon\": \"🥚\" },    { \"name\": \"Queijo parmesão ralado\", \"icon\": \"🧀\" },    { \"name\": \"Creme de leite\", \"icon\": \"🥛\" },    { \"name\": \"Pimenta-do-reino\", \"icon\": \"🌶️\" }  ]"
    },
    {
        id: "0886d564-4775-47ef-a44e-df7e5c614c49",
        name: "Salmão Grelhado",
        description: "Um prato refinado de salmão grelhado, servido com legumes frescos e um molho de manteiga e ervas.",
        price: 32.5,
        category: "6216b51f-b831-48f8-9453-d13987bcb933",
        imagePath: "https://waiter-app-aws.s3.us-east-2.amazonaws.com/7b99018fefeb56f3ce6d-salmÃ£o-grelhado.jpg",
        ingredients: "[    { \"name\": \"Filé de salmão\", \"icon\": \"🐟\" },    { \"name\": \"Sal\", \"icon\": \"🧂\" },    { \"name\": \"Pimenta-do-reino\", \"icon\": \"🌶️\" },    { \"name\": \"Manteiga\", \"icon\": \"🧈\" },    { \"name\": \"Ervas frescas\", \"icon\": \"🌿\" },    { \"name\": \"Legumes variados\", \"icon\": \"🥦\" }  ]"
    },
    {
        id: "4aacbba6-7590-4af0-b777-984259264bd9",
        name: "Hambúrguer Clássico",
        description: "Hambúrguer suculento com queijo, alface, tomate e molho especial.",
        price: 12.99,
        category: "77021eda-11ee-4f9c-bfc3-2f2b28f7c7d1",
        imagePath: "https://waiter-app-aws.s3.us-east-2.amazonaws.com/61e870a56a7dcaf7d0f3-origem-do-hambuguer-cnn4.jpg",
        ingredients: "[    {\"name\": \"Hambúrguer\", \"icon\": \"🍔\"},    {\"name\": \"Queijo\", \"icon\": \"🧀\"},    {\"name\": \"Alface\", \"icon\": \"🥬\"},    {\"name\": \"Tomate\", \"icon\": \"🍅\"},    {\"name\": \"Molho Especial\", \"icon\": \"🍔\"}  ]"
    },
    {
        id: "e0718508-6576-42d9-858d-70a54ef03377",
        name: "Salada Caesar",
        description: "Alface romana, croutons, queijo parmesão e molho caesar.",
        price: 10.99,
        category: "3e4b15ab-f1b4-493f-ae78-355c7e43d020",
        imagePath: "https://waiter-app-aws.s3.us-east-2.amazonaws.com/8ee972fc43f2589dde70-salada-caesar.jpg",
        ingredients: "[    {\"name\": \"Alface Romana\", \"icon\": \"🥗\"},    {\"name\": \"Croutons\", \"icon\": \"🍞\"},    {\"name\": \"Queijo Parmesão\", \"icon\": \"🧀\"},    {\"name\": \"Molho Caesar\", \"icon\": \"🥗\"}  ]"
    },
    {
        id: "1d45a0ea-72aa-4ce5-b166-21fdfe27a8c7",
        name: "Pizza Margherita",
        description: "Pizza tradicional com molho de tomate, queijo mozzarella e manjericão fresco.",
        price: 15.99,
        category: "b4e3a2f8-f36a-4ac5-98b2-6a3a9140296a",
        imagePath: "https://waiter-app-aws.s3.us-east-2.amazonaws.com/4d95143ccf1bdb7a7bce-margherita.jpg",
        ingredients: "[    {\"name\": \"Molho de Tomate\", \"icon\": \"🍅\"},    {\"name\": \"Queijo Mozzarella\", \"icon\": \"🧀\"},    {\"name\": \"Manjericão Fresco\", \"icon\": \"🌿\"}  ]"
    },
    {
        id: "4b886ce7-ceff-4d5b-b80b-1c9d164eeac6",
        name: "Taco de Carne",
        description: "Taco mexicano com carne temperada, alface, queijo e molho picante.",
        price: 9.99,
        category: "2bce768d-f896-488a-87ef-a70a4f6fa7fe",
        imagePath: "https://waiter-app-aws.s3.us-east-2.amazonaws.com/087aeeb25367df712c07-347923-original.jpg",
        ingredients: "[    {\"name\": \"Carne Temperada\", \"icon\": \"🌮\"},    {\"name\": \"Alface\", \"icon\": \"🥬\"},    {\"name\": \"Queijo\", \"icon\": \"🧀\"},    {\"name\": \"Molho Picante\", \"icon\": \"🌶️\"}  ]"
    },
    {
        id: "70e8202d-7820-418d-98d5-67049a24b19c",
        name: "Creme de Abóbora",
        description: "Sopa cremosa de abóbora com croutons.",
        price: 8.99,
        category: "25c402af-89b6-4ad8-b51a-aaa8f7522297",
        imagePath: "https://waiter-app-aws.s3.us-east-2.amazonaws.com/2aa47a0890e5d3cd2f35-iStock-541305426.jpg",
        ingredients: "[    {\"name\": \"Abóbora\", \"icon\": \"🎃\"},    {\"name\": \"Croutons\", \"icon\": \"🍞\"}  ]"
    },
    {
        id: "51d8f565-6b7a-4a14-bb1f-18867a8ccfd7",
        name: "Fettuccine Alfredo",
        description: "Massa fettuccine com molho Alfredo cremoso e ervas frescas.",
        price: 17.75,
        category: "6cb02d29-a732-48ba-b14f-b29821f279b4",
        imagePath: "https://waiter-app-aws.s3.us-east-2.amazonaws.com/2b11549002826493b246-35474t1.jpeg",
        ingredients: "[    {\"name\": \"Fettuccine\", \"icon\": \"🍝\"},    {\"name\": \"Molho Alfredo\", \"icon\": \"🧀\"},    {\"name\": \"Ervas Frescas\", \"icon\": \"🌿\"}  ]"
    },
    {
        id: "529ddf9a-5375-4bcf-881c-925bc7b9d43a",
        name: "Tiramisu",
        description: "Sobremesa italiana de mascarpone, café e biscoitos.",
        price: 9,
        category: "6cf64a3c-60ee-42c5-8860-330144a4c086",
        imagePath: "https://waiter-app-aws.s3.us-east-2.amazonaws.com/b62f7dfe85238fd281b9-332009-original.jpg",
        ingredients: "[    {\"name\": \"Mascarpone\", \"icon\": \"🍰\"},    {\"name\": \"Café\", \"icon\": \"☕\"},    {\"name\": \"Biscoitos\", \"icon\": \"🍪\"}  ]"
    },
    {
        id: "751bba37-478a-419d-9843-70efc908b65e",
        name: "Temaki de Salmão",
        description: "Temaki de salmão fresco, arroz e ingredientes especiais enrolados em alga nori.",
        price: 12.5,
        category: "08ce10b0-98bc-4add-9dc2-5a5e450c90d7",
        imagePath: "https://waiter-app-aws.s3.us-east-2.amazonaws.com/928a6099777b885f28ee-a72a01a7fd764bc09812c16b2928cc67-scaled.jpg",
        ingredients: "[    {\"name\": \"Salmão Fresco\", \"icon\": \"🐟\"},    {\"name\": \"Arroz\", \"icon\": \"🍚\"},    {\"name\": \"Alga Nori\", \"icon\": \"🌿\"},    {\"name\": \"Outros Ingredientes Especiais\", \"icon\": \"🍣\"}  ]"
    },
    {
        id: "4a4d4198-a20c-4cae-bf03-190112809bcc",
        name: "Cerveja Artesanal IPA",
        description: "Cerveja IPA artesanal, aromática e com notas cítricas.",
        price: 8.99,
        category: "fb9acd8d-075e-471f-82d2-8c95e7bc979f",
        imagePath: "https://waiter-app-aws.s3.us-east-2.amazonaws.com/1c4e26653143b95c0185-Onde-comprar-cerveja-artesanal-em-SP.jpg",
        ingredients: " [    {\"name\": \"Lúpulo\", \"icon\": \"🌿\"},    {\"name\": \"Malte\", \"icon\": \"🌾\"},    {\"name\": \"Levedura\", \"icon\": \"🍺\"}  ]"
    },
    {
        id: "4cbd4826-bbbf-4d8e-a860-8de022ed7981",
        name: "Paella de Frutos do Mar",
        description: "Paella espanhola com frutos do mar frescos, arroz e açafrão.",
        price: 29.99,
        category: "1a502553-c3c0-4dd9-9923-d5d812b4b1eb",
        imagePath: "https://waiter-app-aws.s3.us-east-2.amazonaws.com/a0587e9485a45e5f1ab8-Onde-comprar-cerveja-artesanal-em-SP.jpg",
        ingredients: "[    {\"name\": \"Camarão\", \"icon\": \"🦐\"},    {\"name\": \"Mexilhões\", \"icon\": \"🐚\"},    {\"name\": \"Lula\", \"icon\": \"🦑\"},    {\"name\": \"Açafrão\", \"icon\": \"🌼\"}  ]"
    },
    {
        id: "2981c066-c13d-4c6c-a9d1-82c852d174bb",
        name: "Risoto de Cogumelos",
        description: "Risoto cremoso com uma variedade de cogumelos e queijo parmesão.",
        price: 16.5,
        category: "c1b6e9df-0826-4fc1-91c9-70fa814a861a",
        imagePath: "https://waiter-app-aws.s3.us-east-2.amazonaws.com/462ed7af39509080ba80-risoto.png",
        ingredients: "[    {\"name\": \"Cogumelos\", \"icon\": \"🍄\"},    {\"name\": \"Arroz Arbóreo\", \"icon\": \"🍚\"},    {\"name\": \"Queijo Parmesão\", \"icon\": \"🧀\"}  ]"
    },
    {
        id: "61e7a7e3-dde1-4a93-9bdd-c2edbeec8177",
        name: "Café Espresso",
        description: "Café espresso encorpado e aromático, servido em xícara pequena.",
        price: 3.5,
        category: "c51252f7-bcc4-443d-bcfc-34aa3ddc61c5",
        imagePath: "https://waiter-app-aws.s3.us-east-2.amazonaws.com/f3db721dc58b00172da7-cafe.jpg",
        ingredients: "[    {\"name\": \"Café\", \"icon\": \"☕\"},    {\"name\": \"Água Quente\", \"icon\": \"💧\"}  ]"
    },
    {
        id: "d70fe96f-f2ac-4f62-9e3f-1f92045e8aea",
        name: "Smoothie de Frutas",
        description: "Smoothie refrescante com abacaxi, manga e coco.",
        price: 6.99,
        category: "b3abd932-c14c-45a9-b5e6-57ec42f11c46",
        imagePath: "https://waiter-app-aws.s3.us-east-2.amazonaws.com/2f820134c2b70175d34b-smoothie.jpg",
        ingredients: "[    {\"name\": \"Abacaxi\", \"icon\": \"🍍\"},    {\"name\": \"Manga\", \"icon\": \"🥭\"},    {\"name\": \"Coco\", \"icon\": \"🥥\"}  ]"
    },
    {
        id: "4fba1b98-b7e5-4e64-9d70-6a800441099c",
        name: "Vinho Tinto",
        description: "Vinho tinto reserva, encorpado e de sabor intenso.",
        price: 22.99,
        category: "508c5be0-e979-4207-bdf5-18469264a754",
        imagePath: "https://waiter-app-aws.s3.us-east-2.amazonaws.com/d2e5dbfed86e7164368b-vinhos.jpg",
        ingredients: " [    {\"name\": \"Uvas\", \"icon\": \"🍇\"},    {\"name\": \"Envelhecimento em Barril de Carvalho\", \"icon\": \"🍷\"}  ]"
    },
    {
        id: "fa70d51c-bdaa-4bf5-b25a-221f7094b663",
        name: "Salmão ao Molho de Maracujá",
        description: "Filet de salmão grelhado com molho de maracujá, servido com legumes frescos.",
        price: 24.5,
        category: "c23c2531-713e-47ce-a27f-e78f31f87030",
        imagePath: "https://waiter-app-aws.s3.us-east-2.amazonaws.com/37d8c736ad7d99d19a9b-Via-Castelli-SalmÃ£o-ao-MaracujÃ¡.jpg",
        ingredients: "[    {\"name\": \"Salmão\", \"icon\": \"🐟\"},    {\"name\": \"Maracujá\", \"icon\": \"🍈\"},    {\"name\": \"Legumes Frescos\", \"icon\": \"🥦\"}  ]"
    }
]

async function main(){
    await prisma.category.createMany({data: categories})
    
    await prisma.product.createMany({data: products})
}

main().catch((e)=>{
    console.error(e)
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})
