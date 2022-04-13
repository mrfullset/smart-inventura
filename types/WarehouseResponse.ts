interface WarehouseResponse {
    winstrom: {
        sklad: Warehouse[];
    }
  }

  export interface Warehouse {
    id: number;
    lastUpdate: Date;
    kod: string;
    nazev: string;
    nazevA: string;
    nazevB: string;
    nazevC: string;
    poznam: string;
    popis: string;
    ucetObdobiOd: string;
    ucetObdobiDo: string;
    platiOd: number;
    platiDo: number;
    modul: string;
    automatickySklad: boolean;
    stitky: string;
    radaPrijem: string;
    radaVydej: string;
    stredisko: string;
    primUcet: string;
    mena: string;
}
  
  export default WarehouseResponse;
  