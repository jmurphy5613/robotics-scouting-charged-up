export interface AddScouter {
    name: string,
}

export interface AddMatch {
    matchNumber: number,
    teamNumber: number,
    defensive: boolean,
    notes: string,
    conesScoredAuto: Int32Array,
    cubesScoredAuto: Int32Array,
    conesScored: Int32Array,
    cubesScored: Int32Array,
    endGameStatus: string,
    endAutoStatus: string,
    feedLocation: string,
    feederType: string,
    scouterId: number
}