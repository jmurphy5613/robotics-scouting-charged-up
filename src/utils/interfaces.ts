export interface AddScouter {
    name: string,
}

export interface AddMatch {
    matchNumber: number,
    teamNumber: number,
    defensive: boolean,
    notes: string,
    gamePieces: Array<string>
    endGameStatus: string,
    endAutoStatus: string,
    feedLocation: string,
    feederType: string,
    scouterId: number
}