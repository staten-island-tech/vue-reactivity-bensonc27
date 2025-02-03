import { reactive } from 'vue'

const products = {
  icecream: [
    {
      name: 'Berry Cone',
      src: '/public/berrycone.png',
      cost: 4,
    },
    {
      name: 'Chocolate Bar',
      src: '/public/chocolatebar.png',
      cost: 3.5,
    },
    {
      name: 'ChocoChip Sandwich',
      src: '/public/chocolatechipsandwich.png',
      cost: 2.5,
    },
    {
      name: 'Chocolate Cone',
      src: '/public/chocolatecone.png',
      cost: 2.5,
    },
    {
      name: 'Cookie',
      src: '/public/cookie.png',
      cost: 2.0,
    },
    {
      name: 'Mint Chocolate Cone',
      src: '/public/mintchoco.png',
      cost: 4.0,
    },
    {
      name: 'Mixed Cone',
      src: '/public/mixcone.png',
      cost: 4.5,
    },
    {
      name: 'Qaudruple Scoop',
      src: '/public/quadruplescoop.png',
      cost: 5.0,
    },
    {
      name: 'Strawberry Cone',
      src: '/public/strawberrycone.png',
      cost: 3.5,
    },
    {
      name: 'Twix Bar',
      src: '/public/twixbar.png',
      cost: 2.5,
    },
    {
      name: 'Vanilla Cone',
      src: '/public/vanillacone.png',
      cost: 3.5,
    },
    {
      name: 'Waffle',
      src: '/public/waffle.png',
      cost: 4.5,
    },
  ],
}

const store = reactive({
  Inventory: [],
  Total: 0,
})
