export interface Stats {
    created: number;
    updated: number;
    deleted: number;
    skipped: number;
    failed: number;
}

export interface Result {
    id: number;
    ref: string;
}

export interface Winstrom {
    '@version': string;
    success: boolean;
    stats: Stats;
    results: Result[];
}

export interface InventoryResult {
    winstrom: Winstrom;
}