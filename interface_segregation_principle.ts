export interface ISmartDevice {
	openApp(path: string): void;
	connectWifi(userName: string, password: string): void;
}

export interface IPhoneDevice {
	call(contact: string): void;
	sendSMS(contact: string, content: string): void;
}

export class SmartPhone implements ISmartDevice, IPhoneDevice {
	call(contact: string): void {
		console.log(`call ${contact}`);
	}
	sendSMS(contact: string, content: string): void {
		console.log(`${contact} ${content}`);
	}
	openApp(path: string) {
		console.log(`open ${path}`);
	}
	connectWifi(userName: string, password: string) {
		console.log(`${userName} ${password}`);
	}
}

export class SmartTablet implements ISmartDevice {
	openApp(path: string) {
		console.log(`open ${path}`);
	}
	connectWifi(userName: string, password: string) {
		console.log(`${userName} ${password}`);
	}
}
