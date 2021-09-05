export const AUTH_URL = "https://opendata.nationalrail.co.uk/authenticate";
export const STATIONS_URL = "https://opendata.nationalrail.co.uk/api/staticfeeds/4.0/stations";
export const USERNAME = "info@hwyl.uk";
export const PASSWORK = "T1ckety%99";

interface station {
    ChangeHistory: {
        "com:ChangedBy": {
            _text: string
        },
        "com:LastChangedDate": {
            _text: string
        }
    },
    CrsCode: {
        _text: string
    },
    AlternativeIdentifiers: {
        "NationalLocationCode": {
            _text: string
        }
    },
    Name: {
        _text: string
    },  
    SixteenCharacterName: {
        _text: string
    },
    Address: {
        "com:PostalAddress": {
            "add:Line": [{
                _text: string
            }],
            "add:PostCode": {
                _text: string
            }
        }
    },
    Longitude: {
        _text: string,
    },
    Latitude: {
        _text: string,
    },
    StationOperator:{}
}