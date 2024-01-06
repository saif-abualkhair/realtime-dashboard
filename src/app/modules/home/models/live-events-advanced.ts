export interface LiveEventsAdvanced {
    totalAlerts: TotalAlerts;
    totalAlarms: TotalAlerts;
    previousYearTotal: TotalAlerts;
    totalEvents: number;
    dataSets: DataSets;
    SitesStatistics: SitesStatistic[];
}

export interface SitesStatistic {
    name: string;
    totalEvents: number;
    isDecrease: boolean;
    PrevYear: PrevYear;
    grpAvg: PrevYear;
    dataSets: DataSets2;
}

export interface DataSets2 {
    values: Value[];
}

export interface Value {
    value: number;
    color: string;
}

export interface PrevYear {
    percentage1: number;
    percentage2: number;
}

export interface DataSets {
    values: number[];
    backgroundColors: string[];
}

export interface TotalAlerts {
    totalNumber: number;
    percentage: number;
}