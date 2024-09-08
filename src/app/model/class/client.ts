export class Client {
    clientId: number;
    contactPersonName: string;
    companyName: string;
    address: string;
    city: string;
    pincode: number;
    state: string;
    employeeStrength: number;
    gstNo: string;
    contactNo: string;
    regNo: string
    constructor() {
        this.clientId = 0;
        this.employeeStrength = 0;
        this.address = '';
        this.city = '';
        this.companyName = '';
        this.contactNo = '';
        this.state = '';
        this.gstNo = '';
        this.regNo = '';
        this.pincode = 0;
        this.contactPersonName = '';
    }
}