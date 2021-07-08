/**
 * @description response body model * 
 */

class SuccessModel{
    constructor(data){
        this.errno=0;
        if(data!=null){
            this.data=data
        }
        
    }
}

class ErrorModel{
    constructor(errno=-1,message='error'){
        this.errno=errno;
        this.message=message
    }
}

module.exports = { SuccessModel, ErrorModel };

