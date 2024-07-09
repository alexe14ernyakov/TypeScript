
class DataProvider{
    request() {
        return 'file.xml'
    }
}

class XmlToPdfAdapter{
    adaptee: DataProvider

    constructor(adaptee: DataProvider){
        this.adaptee = adaptee
    }

    request(){
        return this.adaptee.request().replace('xml', 'pdf')
    }
}