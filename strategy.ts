interface Strategy{
    doAlgorithm(data: string[]): string[]
}

class SortingStrategy implements Strategy{
    doAlgorithm(data: string[]): string[] {
        return data.sort()
    }
}

class ReversingStrategy implements Strategy{
    doAlgorithm(data: string[]): string[] {
        return data.reverse()
    }
}
