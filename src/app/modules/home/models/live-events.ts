export interface LiveEvents {
    info: Info;
    alerts: Info;
    alarms: Info;
    sosRaiseChart: SosRaiseChart;
}

export interface SosRaiseChart {
    times: string[];
    frequencies: number[];
}

export interface Info {
    total: number;
    percentageChange: number;
}