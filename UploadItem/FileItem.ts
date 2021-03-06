namespace CS4D {
    export namespace UploadItem {

        import DataUriType = UploadType.DataUri.Type;

        export class FileItem extends AbstractItem {

            constructor(file: File, options :Options.Options) {
                super(options);
                this.file = file;
                return this;
            }

            getPlainText(): Promise<string>{
                return new Promise((resolve, reject) => {
                    this.getDataUri()
                        .then((dataUri) => {
                            let dataUriObj = new DataUriType( new UploadType.DataUri.Input.DataUri( dataUri ) );
                            resolve( dataUriObj.getPlainData() );
                        })
                        .catch((error) => {
                            reject(error);
                        })
                    ;
                });
            }

            getBase64(): Promise<string>{
                return new Promise((resolve, reject) => {
                    this.getDataUri()
                        .then((dataUri) => {
                            let dataUriObj = new DataUriType( new UploadType.DataUri.Input.DataUri( dataUri ) );
                            resolve( dataUriObj.getBase64Data() );
                        })
                        .catch((error) => {
                            reject(error);
                        })
                    ;
                });
            }

            getDataUri(): Promise<string>{
                return new Promise((resolve, reject) => {
                    let fileReader = new FileReader();
                    fileReader.onload = () => {
                        resolve(fileReader.result);
                    };
                    fileReader.onerror = () => {
                        reject( fileReader.error );
                    };
                    fileReader.readAsDataURL( this.file );
                });
            }

            getFile(): Promise<File>{
                return new Promise((resolve, reject) => {
                    resolve(this.file);
                });
            }

        }
    }
}