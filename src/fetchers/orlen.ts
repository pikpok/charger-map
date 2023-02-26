const baseUrl = 'https://orlencharge.orlen.pl/DuskyWebApi//noauthlocations';

export interface Access {
	GPSLongitude: number;
	GPSLatitude: number;
}

export interface Country {
	Id: number;
	Code: string;
	ISO2Code: string;
	ISO3Code: string;
	Title: string;
}

export interface Address {
	Country: Country;
	CityName: string;
	CityDistrictName: string;
	PostNumber: string;
	StreetName: string;
	HouseNumber: string;
}

export interface AccessType {
	IsPrivate: boolean;
	Id: number;
	Title: string;
}

export interface OrlenStation {
	Id: number;
	FriendlyName: string;
	FriendlyCode: string;
	Access: Access;
	Address: Address;
	AccessType: AccessType;
	TotalEvses: number;
	AvailableEvses: number;
	FaultyEvses: number;
	OccupiedEvses: number;
	ParkingOccupiedEvses: number;
	OutOfWorkingTimeEvses: number;
	OutOfCommunicationEvses: number;
	IsPartnerRoaming: boolean;
	PinColor: string;
	PinCount: number;
	GeoHash: string;
}

export const getOrlenStations = async () => {
	const url = new URL(baseUrl);
	url.searchParams.set('UserGPSaccessLatitude', '52.578084210792646');
	url.searchParams.set('UserGPSaccessLongitude', '19.651343822479248');
	url.searchParams.set('poiTypes', '');
	url.searchParams.set('searchRadius', '1000');
	const response = await fetch(url);
	return (await response.json()) as OrlenStation[];
};
