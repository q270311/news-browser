
import { useCurrentDate } from "./useCurrentDate";
import { Time } from "./styled";

const formatDate = (date) => date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
});

const Clock = () => {
    const date = useCurrentDate();

    return (
        <Time>
            Aktualny czas: {formatDate(date)}
        </Time>
    );
};

export default Clock;