import Star from "./Star";
import { useLocalStorage } from "./useLocalStorage";

export default function StarRating({ position, totalStars = 5 }) {
    const createArray = (length) => [...Array(length)];
    let positionInMenu = JSON.stringify(position);
    const [selectedStars, setSelectedStars] = useLocalStorage(positionInMenu, 3);
  
    return (
      <div>
        <div className="flex space-x-2">
          {createArray(totalStars).map((n, i) => (
            <Star
              key={i}
              selected={selectedStars > i}
              onSelect={() => setSelectedStars(i + 1)}
            />
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-600">
          {selectedStars} of {totalStars} are selected.
        </p>
      </div>
    );
  }