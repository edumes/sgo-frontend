import { useEffect, useState } from "react";

type Sizes = "xs" | "sm" | "md" | "lg";

const useComponentSize = () => {
    const [size, setSize] = useState<number>(75);
    const [sizeClass, setSizeClass] = useState<Sizes>("xs");

    const increaseSize = () => {
        if (size < 100) {
            setSize((prevSize) => prevSize + 25);
        }
    };

    const decreaseSize = () => {
        if (size > 0) {
            setSize((prevSize) => Math.max(prevSize - 25, 0));
        }
    };

    const isDecreaseDisabled = size === 25;
    const isIncreaseDisabled = size === 100;

    useEffect(() => {
        if (size === 25) {
            setSizeClass("xs");
        } else if (size === 50) {
            setSizeClass("sm");
        } else if (size === 75) {
            setSizeClass("md");
        } else if (size === 100) {
            setSizeClass("lg");
        }
    }, [size]);

    return {
        size,
        sizeClass,
        increaseSize,
        decreaseSize,
        isDecreaseDisabled,
        isIncreaseDisabled,
    };
};

export default useComponentSize;