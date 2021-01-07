export class GetEntryExist {

    PortId:string;
    PageNumber:number;
    PageSize:number;
    FromDate:string;
    ToDate:string;
    TotalCount:number;
    Records:string;
    SortBy:string;
    SortOrder:boolean;
    Filter:string;
     
    constructor(){
        this.PortId=null;
        this.PageNumber=null;
        this.PageSize=null;
        this.FromDate=null;
        this.ToDate=null;
        this.TotalCount=null;
        this.Records=null;
        this.SortBy=null;
        this.SortOrder=null;
        this.Filter=null;
    }
}
