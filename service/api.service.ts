import React from 'react';
import { InventoryResult } from '../types/InventoryRespponse';
import InventuraItem from '../types/InventuraItem';
import SkladovaKartaResponse from '../types/skladova-karta';
import WarehouseResponse from '../types/WarehouseResponse';

export const getWarehouses = (): Promise<WarehouseResponse> => {

    let url = "https://inventura.flexibee.eu/v2/c/firma4/sklad?detail=full";

    return fetch(url, {
        method: "GET",
        headers: {
            Authorization: "Basic YWRtaW40OmFkbWluNGFkbWluNA==",
            Accept: "application/json",
        },
    })
        .then((res) => res.json());
};

export const postInventuraItem = (items: InventuraItem[]) => {

    let url = "https://inventura.flexibee.eu/v2/c/firma4/sklad?detail=full";

    let body =
    {
        winstrom: {
            items
        }
    };

    return fetch(url, {
        method: "POST",
        headers: {
            Authorization: "Basic YWRtaW40OmFkbWluNGFkbWluNA==",
            Accept: "application/json",
            body: JSON.stringify(body)
        },
    })
        .then((res) => res.json());
};

export const getCatalog = (itemCode: string) : Promise<SkladovaKartaResponse> => {

    let url = "https://inventura.flexibee.eu/v2/c/firma4/skladova-karta/" + encodeURIComponent('(sklad = "code:SKLAD" and ucetObdobi = "code:2022" and cenik="ean:' + itemCode +'")')
    + '?details=';

  
    return fetch(url, {
        method: "GET",
        headers: {
            Authorization: "Basic YWRtaW40OmFkbWluNGFkbWluNA==",
            Accept: "application/json"
        },
    })
        .then((res) => res.json());
};


export const postInventoryHeader = (skladId: number) : Promise<InventoryResult> => {

    let url = "https://inventura.flexibee.eu/v2/c/firma4/inventura/";

  
    return fetch(url, {
        method: "GET",
        headers: {
            Authorization: "Basic YWRtaW40OmFkbWluNGFkbWluNA==",
            Accept: "application/json"
        },
    })
        .then((res) => res.json());
};


