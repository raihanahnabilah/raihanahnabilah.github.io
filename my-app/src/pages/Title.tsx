import { FC } from "react";

const Title: FC<{
    title: string,
}> = (props) => {
    const {title} = props

    const finalTitle = title === "swe" ? "Programming Portfolio" : title === "internships" ? "Past Internships" : title === "featured" ? "Featured" : title === "pm" ? "UI Design Portfolio" : null;

    return (
        <div>
            <h1>{finalTitle}</h1>
        </div>
    );
};
export default Title;
