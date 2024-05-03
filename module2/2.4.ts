interface Developer <T, X = null> {
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number
    },
    smartWatch: T;
    bike? : X;
}

interface SmartWatch {
    brand: string;
    model: string;
    display: string
}

type Bike = {
    brand: string;
    model: string
}

const poorDeveloper : Developer<SmartWatch, Bike> = {
    name: "SuHan",
    computer: {
        brand: "Anus",
        model: "Ac007",
        releaseYear: 2008
    },
    smartWatch: {
        brand: "Emily",
        model: "kw563",
        display: "OHED"
    },
    bike: {
        brand: "HuDai",
        model: "Ac55"
    }
}

interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    waterProved: boolean;
}

const richDeveloper : Developer<AppleWatch> = {
    name: "RuHan",
    computer: {
        brand: "HP",
        model: "Ac7",
        releaseYear: 2019
    },
    smartWatch: {
        brand: "Family",
        model: "W563",
        heartTrack : true,
        waterProved: false,
    }
}