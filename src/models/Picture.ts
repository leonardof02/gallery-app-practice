export default interface Picture {
    id?: number;
    picture: File;
    description: string;
    picturePathInPersistence: string;
    album: string;
    url: string;
}
