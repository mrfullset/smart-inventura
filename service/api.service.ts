import React from 'react';
import { InventoryResult } from '../types/InventoryRespponse';
import { ItemReponse } from '../types/ItemResponse';

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

export const postInventuraItem = (items: InventuraItem) : Promise<void | InventoryResult> => {

    let url = "https://inventura.flexibee.eu/v2/c/firma4/inventura/";

    let body =
    {
        winstrom: {
            inventura: [items]
        }
    };

    let bodyJson = JSON.stringify(body)

    return fetch(url, {
        method: "POST",
        headers: {
            Authorization: "Basic YWRtaW40OmFkbWluNGFkbWluNA==",
            Accept: "application/json",
            'Content-Type': "application/json",
        },
        body: bodyJson,
        })
        .then((res) =>
        { 
            res.json()
        });
};

export const getCatalog = (itemCode: string): Promise<SkladovaKartaResponse> => {

    let url = "https://inventura.flexibee.eu/v2/c/firma4/skladova-karta/" + encodeURIComponent('(sklad = "code:SKLAD" and ucetObdobi = "code:2022" and cenik="ean:' + itemCode + '")')
        + '?detail=' + 'custom%3Acenik%28eanKod%2Cnazev%2Ckod%29%2Csklad%2Cobdobi%2CstavMj' + '&includes%3D%2Fskladova-karta%2Fcenik';


    return fetch(url, {
        method: "GET",
        headers: {
            Authorization: "Basic YWRtaW40OmFkbWluNGFkbWluNA==",
            Accept: "application/json"
        },
    })
        .then((res) => res.json());
};


export const postItem = (skladId: number, intventoryId: number, skladKartaId: number, cenikId: number, amount: number): Promise<void | ItemReponse> => {

    let url = "https://inventura.flexibee.eu/v2/c/firma4/inventura-polozka";

    var items = [{
        "inventura": intventoryId,
        "sklad": skladId,
        "cenik": cenikId,
        "skladKarta": skladKartaId,
        "mnozMjReal": amount
    }];

    let body =
    {
        winstrom: {
            items
        }
    };

    let bodyJson = JSON.stringify(body)

    return fetch(url, {
        method: "POST",
        headers: {
            Authorization: "Basic YWRtaW40OmFkbWluNGFkbWluNA==",
            Accept: "application/json",
            'Content-Type': "application/json",
        },
        body: bodyJson,
        })
        .then((res) =>
        { 
            res.json()
        });
};


