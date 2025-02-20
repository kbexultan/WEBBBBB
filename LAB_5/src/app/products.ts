export interface Product {
  link: string;
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  likes: number;
  liked: boolean;
  pressed: boolean;
}
export interface ProductList {
  category: string;
  productItems: Array<Product>;
}

export const ProductsList: ProductList[] = [
  {
    category: "Laptops",
    productItems: [
      {
        link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000',
        id: 1,
        name: 'ThundeRobot 911',
        price: 529758,
        description: 'Ноутбук ThundeRobot 911 X Wild Hunter G2 Pro 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro /',
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium',
        likes: 0,
        liked: false,
        pressed: false
      },
      {
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
        id: 2,
        name: 'Apple MacBook Air 13',
        price: 497700,
        description: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS / MLXW3',
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
        likes: 0,
        liked: false,
        pressed: false
      },
      {
        link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-a315-35-nx-a9aex-00h-114792265/?c=750000000',
        id: 3,
        name: 'Acer Aspire 3',
        price: 229982,
        description: 'Ноутбук Acer Aspire 3 15.6" / 8 Гб / SSD 256 Гб / Win 11 / A315-35 / NX.A9AEX.00H',
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/hc8/84558388887582.jpg?format=gallery-medium',
        likes: 0,
        liked: false,
        pressed: false
      }
    ]
  },
  {
    category: "Tablets",
    productItems: [
      {
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-serebristyi-114175605/?c=750000000',
        id: 1,
        name: 'Планшет Samsung Galaxy Tab A9',
        price: 111980,
        description: 'Планшет Samsung Galaxy Tab A9+ 5G 11 дюйм 8 Гб/128 Гб серебристый',
        rating: 4.2,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-medium',
        likes: 0,
        liked: false,
        pressed: false
      },
      {
        link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-11-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000',
        id: 2,
        name: ' Apple iPad Air 2024',
        price: 335441,
        description: 'Планшет Apple iPad Air 2024 Wi-Fi 11 11 дюйм 8 Гб/128 Гб серый',
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h77/86745408634910.png?format=gallery-medium',
        likes: 0,
        liked: false,
        pressed: false
      },
      {
        link: 'http://kaspi.kz/shop/p/huawei-matepad-s-keyboard-tgr-w09-11-5-djuim-8-gb-256-gb-serebristyi-122142240/?c=750000000',
        id: 3,
        name: 'Планшет Huawei MatePad S',
        price: 149900,
        description: 'Планшет Huawei MatePad S Keyboard TGR-W09 11.5 дюйм 8 Гб/256 Гб серебристый.',
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pa9/p5b/4912194.jpg?format=gallery-medium',
        likes: 0,
        liked: false,
        pressed: false
      }
    ]
  },
  {
    category: "Telephone",
    productItems: [
      {
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
        id: 1,
        name: 'Apple iPhone 16 Pro Max',
        price: 682184,
        description: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный.',
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
        likes: 0,
        liked: false,
        pressed: false
      },
      {
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
        id: 2,
        name: 'Xiaomi Redmi 13C',
        price: 44967,
        description: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
        rating: 4.3,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
        likes: 0,
        liked: false,
        pressed: false
      },
      {
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-128-gb-temno-sinii-117420239/?c=750000000',
        id: 3,
        name: 'Samsung Galaxy A55',
        price: 162726,
        description: 'Смартфон Samsung Galaxy A55 5G 8 ГБ/128 ГБ темно-синий',
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h03/h20/85428948598814.png?format=gallery-medium',
        likes: 0,
        liked: false,
        pressed: false
      }
    ]
  },
  {
    category: "Accessories",
    productItems: [
      {
        link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000',
        id: 1,
        name: 'Logitech MX Master 3 Mouse',
        price: 5734,
        description: 'Зарядное устройство Apple 18W USB-C Power Adapter USB Type-C белый',
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-medium',
        likes: 0,
        liked: false,
        pressed: false
      },
      {
        link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
        id: 2,
        name: 'Чехол iphone 13',
        price: 100,
        description: 'Чехол Для Apple iPhone 13 прозрачный',
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=gallery-medium',
        likes: 0,
        liked: false,
        pressed: false
      },
      {
        link: 'https://kaspi.kz/shop/p/podstavka-afkas-nova-ak-37-chernyi-107656268/?c=750000000',
        id: 3,
        name: 'Подставка для телефона',
        price: 622,
        description: 'Подставка Afkas-nova AK-37 черный',
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/haf/65966324580382.jpg?format=gallery-medium',
        likes: 0,
        liked: false,
        pressed: false
      }
    ]
  }
];

