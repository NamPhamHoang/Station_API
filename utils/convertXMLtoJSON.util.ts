
export const handlerStation = (stationList) => {
    // fs.writeFileSync("./text.json", JSON.stringify(stationList))
    return stationList["StationList"][0].Station.map((station, index) => {
        return {
            Name: `${station.Name[0]._text[0]} ${station.CrsCode[0]._text[0]}`,
            CrsCode: station.CrsCode[0]._text[0]
        }
    })
} 
