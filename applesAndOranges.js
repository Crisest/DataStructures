const apples = [-2, 2, 1]
const oranges = [5, -6]
const start = 7
const end = 11
const AppleTreeLocation = 5
const OrangeTreeLocation = 15

const countApplesAndOranges= (startHouse, endHouse, ATreeLocation, OTreeLocation, apples, oranges) => {

    const ApplesLocationArray = apples.map((apple) => {
        return ATreeLocation + apple
    }).filter((apple) => {
        return startHouse <= apple && endHouse >= apple
    }).length

    const OrangesLocationArray = oranges.map((orange) => {
        return OTreeLocation + orange
    }).filter((orange) => {
        return startHouse <= orange && endHouse >= orange
    }).length

    console.log(ApplesLocationArray);
    console.log(OrangesLocationArray);
}

countApplesAndOranges(start, end, AppleTreeLocation, OrangeTreeLocation, apples, oranges)