
var tenis = [
    `https://images.stockx.com/360/adidas-Yeezy-Boost-350-V2-Zebra/Images/adidas-Yeezy-Boost-350-V2-Zebra/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=480&amp;dpr=2&amp;updated_at=1635342807&amp;h=320&amp;q=60 2x`,
    `https://images.stockx.com/360/Air-Jordan-1-Retro-High-OG-Yellow-Toe/Images/Air-Jordan-1-Retro-High-OG-Yellow-Toe/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=480&amp;dpr=2&amp;updated_at=1659075277&amp;h=320&amp;q=60 2x`,
    `https://images.stockx.com/360/Nike-Dunk-Low-Court-Purple/Images/Nike-Dunk-Low-Court-Purple/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=480&amp;dpr=2&amp;updated_at=1648145946&amp;h=320&amp;q=60 2x
   `,
    `https://images.stockx.com/360/New-Balance-550-White-Black-Rain-Cloud-GS/Images/New-Balance-550-White-Black-Rain-Cloud-GS/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=480&amp;dpr=2&amp;updated_at=1674030282&amp;h=320&amp;q=60 2x
   `,
    `https://images.stockx.com/360/Air-Jordan-4-Retro-University-Blue/Images/Air-Jordan-4-Retro-University-Blue/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=480&amp;dpr=2&amp;updated_at=1635344971&amp;h=320&amp;q=60 2x
   `,
    `https://images.stockx.com/360/adidas-Yeezy-Wave-Runner-700-Solid-Grey/Images/adidas-Yeezy-Wave-Runner-700-Solid-Grey/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=480&amp;dpr=2&amp;updated_at=1635255057&amp;h=320&amp;q=60 2x
   `,
    `https://images.stockx.com/360/adidas-Yeezy-Slide-Bone-2022/Images/adidas-Yeezy-Slide-Bone-2022/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=480&amp;dpr=2&amp;updated_at=1660144762&amp;h=320&amp;q=60 2x
   `,
    `https://images.stockx.com/360/adidas-Yeezy-Foam-RNNR-Onyx/Images/adidas-Yeezy-Foam-RNNR-Onyx/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=480&amp;dpr=2&amp;updated_at=1654263493&amp;h=320&amp;q=60 2x
   `,
    `https://images.stockx.com/360/Air-Jordan-11-Retro-Cool-Grey-2021/Images/Air-Jordan-11-Retro-Cool-Grey-2021/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=480&amp;dpr=2&amp;updated_at=1635726052&amp;h=320&amp;q=60 2x
   `,
    `https://images.stockx.com/360/Air-Jordan-3-Retro-A-Ma-Maniere-W/Images/Air-Jordan-3-Retro-A-Ma-Maniere-W/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=480&amp;dpr=2&amp;updated_at=1634934382&amp;h=320&amp;q=60 2x
   `,
    `https://images.stockx.com/360/Converse-Run-Star-Hike-Hi-Black-White-Gum/Images/Converse-Run-Star-Hike-Hi-Black-White-Gum/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=480&amp;dpr=2&amp;updated_at=1635307673&amp;h=320&amp;q=60 2x`,
    `https://images.stockx.com/360/Nike-Blazer-Mid-77-Jumbo-White-Black/Images/Nike-Blazer-Mid-77-Jumbo-White-Black/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=480&amp;dpr=2&amp;updated_at=1637269953&amp;h=320&amp;q=60 2x`

]

function GERAR() {

    var NumeroAleatorio;

    var NumeroAleatorio = (Math.random() * 10).toFixed();

    console.log(NumeroAleatorio)

    div_IMG.innerHTML = `<img src="${tenis[NumeroAleatorio]}" alt=""></img>`

}


