
 export const PinCode = {
	name: 'PinCode',
	primaryKey:'username',
	properties: {
		id: 'int',
		pin: { type: 'int', indexed: true },
		username: { type: 'string', index: true },
		password: { type: 'string' ,optional: true }
	}
}
