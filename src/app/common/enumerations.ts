export enum StartStop {
    START = "START",
    STOP = "STOP",
    NONE = "NONE",
};

export enum OnOff {
    ON = "ON",
    OFF = "OFF",
};

export enum EnabledDisabled {
    ENABLED = "ENABLED",
    DISABLED = "DISABLED",
};

export enum YesNo {
    YES = "YES",
    NO = "NO",
};

export enum OperationalState {
    OPERATIONAL = "OPERATIONAL",
	IDLE = "IDLE",
}

export enum SearchMode {
    ACTIVE = "ACTIVE",
	PASSIVE = "PASSIVE",
}

export enum AircraftType {
    LAB = "LAB",
	CTOL = "CTOL",
	STOVL = "STOVL",
	CV = "CV",
	CATB = "CATB",
}

export enum OneToFour {
    ONE = "1",
    TWO = "2",
    THREE = "3",
    FOUR = "4"
}

export enum IfdlIncoming {
    CLOSE_NET = "Close Net",
    WIDE_NET = "Wide Net"
}

// Catch-all for random radio strings
export enum RadioEnums {
    CANCEL = "CANCEL",
    ADD = "ADD",
    MODIFY = "MODIFY",
    ENABLE = "ENABLE",
    DISABLE = "DISABLE",
    CREATE = "CREATE",
    OPERATE = "OPERATE",
    INOPERATIVE = "INOPERATIVE",
    SET_OWN_CONFIGURATION = "SETOWNCONFIGURATION",
    SET_LINK1_STATE = "SETLINK1STATE",
    SET_LINK2_STATE = "SETLINK2STATE",
    PILOT_ON = "PILOT ON",
    PILOT_OFF = "PILOT OFF"


}