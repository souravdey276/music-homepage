export class Song {
    artistName : String;
    albumName : String;
    _id : String;
    email : string;

    public setEmail(email)
    {
        console.log(email);
        
        this.email=email;
    }

    public getEmail():string
    {
        return this.email;
    }
    
}