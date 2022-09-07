
export type productsType = [
    {
        id:string,
        name: string,
        price: string
        country: string,
        category:string,
        collection:string,
        countryCode:string,
        description:string,
        detail:string,
        tastingnote: {
            smell: string[],
            taste:string[]
        },
        flavourIntensity: string,
        abv:string
    }
]

export const products:productsType = [
    {
        id:"1",
        name:"Kiss My Rhubarb",
        price:"230.33",
        country:"BELGIUM",
        category:"Spirits",
        collection:"Kiss My",
        countryCode:'BE',
        description:"Kiss My Rhubarb is a fresh and aromatic Belgian aperitif. It uses bright and zesty supporting ingredients like pink grapefruit and lemon verbena to create an aperitif perfectly designed to pair with hot summery nights.",
        detail:"Kiss My Rhubarb takes its origins from an old handwritten recipe from co-creators Niels’ and Wouters’ rebellious grandparents. Using carefully hand-selected stalks of rhubarb, and locally-sourced flowers and herbs, this summery aperitif perfectly expresses the brimming liveliness that characterizes the Belgian countryside in bloom. Kiss My Rhubarb is created in collaboration with local producers in Izegem that select only the freshest stalks of rhubarb using attentive and sustainable practices. By avoiding the pitfalls of overproduction and diminished flavour that large-scale harvesting methods can bring, Kiss My’s careful foraging process results in an aperitif that emphasises the tangy juiciness of its primary ingredient. ",
        tastingnote:{
            smell:["ASTRINGENT","FRUITY","COMPLEX"],
            taste:["BITTER","FLAMBOYANT","BRIGHT"]
        },
        flavourIntensity:"40",
        abv:"21%"
    }
   
]