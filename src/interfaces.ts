export interface ILossShortModel {
    Id: string;
    Date: Date;
    Abandoned: number;
    Captured: number;
    Damaged: number;
    Destroyed: number;
    Total: number;
}

export interface ILossModel extends ILossShortModel {
    Text: string;
    EquipmentLossList: Array<IEquipmentLossModel>;
}

export interface IEquipmentLossShortModel {
    Type: string;
    Abandoned: number;
    Captured: number;
    Damaged: number;
    Destroyed: number;
    Total: number;
}

export interface IEquipmentLossModel extends IEquipmentLossShortModel {
    Text: string;
    EquipmentMakes: Array<IEquipmentMakeModel>;
}

export interface IEquipmentMakeModel {
    Name: string;
    Total: number;
}

export enum LossType {
    total = "Total",
    abandoned = "Abandoned",
    captured = "Captured",
    damaged = "Damaged",
    destroyed = "Destroyed"
}