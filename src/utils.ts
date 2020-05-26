interface WheelData {
  option: string
  style: {
    backgroundColor?: string
    textColor?: string
  }
}

export const getRotationDegrees = (
  prizeNumber: number,
  numberOfPrizes: number,
) => {
  const degreesPerPrize = 360 / numberOfPrizes
  console.log('degreesPerPrize', degreesPerPrize)

  const initialRotation = 43 + degreesPerPrize / 2
  console.log('initialRotation', initialRotation)

  const randomDifference = (-1 + Math.random() * 2) * degreesPerPrize * 0.35

  const prizeRotation =
    degreesPerPrize * (numberOfPrizes - prizeNumber) -
    initialRotation +
    randomDifference
  console.log('prizeRotation', prizeRotation)

  return numberOfPrizes - prizeNumber > numberOfPrizes / 2
    ? -360 + prizeRotation
    : prizeRotation
}

export const clamp = (min: number, max: number, val: number) =>
  Math.min(Math.max(min, +val), max)
