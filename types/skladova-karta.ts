interface SkladovaKartaResponse {
    winstrom: {
        'skladova-karta': SkladovaKarta[];
    }
}

interface SkladovaKarta {
    id: number;
    cenik: string;
    'cenik@evidencePath': string;
    'cenik@showAs': string;
    'cenik@ref': string;
    sklad: string;
    'sklad@evidencePath': string;
    'sklad@showAs': string;
    'sklad@ref': string;
    typDokl: string;
    stavMjSPozadavky: number;
    'typDokl@evidencePath': string;
    'typDokl@showAs': string;
    'typDokl@ref': string;
}

export default SkladovaKartaResponse;
