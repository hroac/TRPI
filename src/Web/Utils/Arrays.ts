export class Arrays {
    public static chunk(array: Array<any>, chunkSize: number) {
        return array.reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / chunkSize)

            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk
            }

            resultArray[chunkIndex].push(item)

            return resultArray
        }, [])
    }
}