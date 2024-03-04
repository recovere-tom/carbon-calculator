import distanceFrom from 'distance-from';

export function calculateDistance(
    originCoordinates: [number, number],
    destinationCoordinates: [number, number]
): number {
    try {
        return Math.floor(
            distanceFrom(originCoordinates).to(destinationCoordinates).in('km')
        );
    } catch (error) {
        console.error('Error calculating distance:', error);
        return 0; // Default distance in case of error
    }
}
