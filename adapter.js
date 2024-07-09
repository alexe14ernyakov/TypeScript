"use strict";
class DataProvider {
    request() {
        return 'file.xml';
    }
}
class XmlToPdfAdapter {
    constructor(adaptee) {
        this.adaptee = adaptee;
    }
    request() {
        return this.adaptee.request().replace('xml', 'pdf');
    }
}
