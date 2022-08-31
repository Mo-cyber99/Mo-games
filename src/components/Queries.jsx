import { SortBy } from "./Queries/SortBy";

export default function Queries ({sortBy, setSortBy}) {

    return (
        <section className="queries">
            <SortBy sortBy={sortBy} setSortBy={setSortBy}/>
        </section>
    );
};