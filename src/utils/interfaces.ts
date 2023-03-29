export interface AddScouter {
    name: string,
}

export interface AddMatch {
    matchNumber: number,
    teamNumber: number,
    defensive: boolean,
    notes: string,
    conesScoredAuto: Array<number>,
    cubesScoredAuto: Array<number>,
    conesScored: Array<number>,
    cubesScored: Array<number>,
    endGameStatus: string,
    endAutoStatus: string,
    feedLocation: string,
    feederType: string,
    scouterId: number
}