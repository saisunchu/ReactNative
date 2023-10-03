export type FeatureType = {
    feature: string,
}
export const FearuresData : Array<FeatureType> = [
    { feature: 'Beauty' },
    { feature: 'Fashion' },
    { feature: 'Kids' },
    { feature: 'Mens' },
    { feature: 'Womens' },
]

export type AdsCardsType= {
    Image: Image;
}
export const AdsCardsData : Array<AdsCardsType> = [
    { Image: Images.AdsCard },
    { Image: Images.AdsCard },
    {Image : Images.AdsCard},
]

export type ShoppingCardType= {
    Image: Image,
    Title: string,
    Desc: string,
    Price: Number,
    MRP: Number,
    Discount: Number,
    NoOfRatings: Number,
}
export const ShoppingCardData : Array<ShoppingCardType> = [
    {
        Image: Images.ShoppingCard, Title: 'Women Printed Kurta', Desc: 'Neque porro quisquam est qui dolorem ipsum quia',
        Price: 1500, MRP: 2499, Discount: 40, NoOfRatings: 56890
    },
    {
        Image: Images.ShoppingCard, Title: 'Women Printed Kurta', Desc: 'Neque porro quisquam est qui dolorem ipsum quia',
        Price: 1500, MRP: 2499, Discount: 40, NoOfRatings: 56890
    },
    {
        Image: Images.ShoppingCard, Title: 'Women Printed Kurta', Desc: 'Neque porro quisquam est qui dolorem ipsum quia',
        Price: 1500, MRP: 2499, Discount: 40, NoOfRatings: 56890
    },
    {
        Image: Images.ShoppingCard, Title: 'Women Printed Kurta', Desc: 'Neque porro quisquam est qui dolorem ipsum quia',
        Price: 1500, MRP: 2499, Discount: 40, NoOfRatings: 56890
    },
]