namespace TS4D {

    import AbstractItem = TS4D.UploadItem.AbstractItem;
    import FileItem = TS4D.UploadItem.FileItem;

    export class Uploader {
        uploadList : Array<AbstractItem>;

        constructor(){
            this.uploadList = [];
        }

        public addAsFile(file : File) {
            if(!(file instanceof File)){
                console.log(file);
                throw new Error('Invalid argument type!');
            }
            let currentUploadItem = new FileItem(file);
            this.uploadList.push( currentUploadItem );
            return currentUploadItem;
        }

        public getUploadList(): Array<AbstractItem> {
            return this.uploadList;
        }
    }
}