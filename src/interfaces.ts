export interface ILossModel {
    Id: string;
    Abandoned: number;
    Captured: number;
    Damaged: number;
    Destroyed: number;
    Total: number;
    Text: string;
    Date: Date;  
}