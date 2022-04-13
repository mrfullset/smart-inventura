
export interface InventuraPolozka {
    inventura: number;
    sklad: number;
    cenik: string;
    skladKarta: number;
    mnozMjReal: number;
}

export interface Winstrom {
    'inventura-polozka': InventuraPolozka[];
}

export interface ItemReponse {
    winstrom: Winstrom;
}

