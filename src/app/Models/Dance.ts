
export class Dance{
    danceId !: number;
    danceName!: string;
    danceState!: string;

    constructor(danceId: number,danceName: string, danceState: string)
    {
        this.danceId=danceId;
        this.danceName=danceName;
        this.danceState=danceState
    }
   
}