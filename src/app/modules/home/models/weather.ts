export interface Weather {
    geoAddress: string;
    currentTemperature: number;
    nextHoursTemperature: NextHoursTemperature[];
}

export interface NextHoursTemperature {
    time: number;
    temperature: number;
}