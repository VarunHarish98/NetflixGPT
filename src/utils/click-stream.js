import ReactGA from "react-ga4";
/**
 * A function that fires Google Analytics for a defined event.
 * @param {String} category - Categories like Project, Experience, Education etc.
 * @param {String} label - label for the project.
 * @returns null - only fires a Google Analytics event.
 */
export const clickStreamEvent = (category, label, event) => {
    console.log("Click stream called", category, label, event);
    ReactGA.event({
        category: `${category}`,
        action: `${event}`,
        label: `${label}`
    });
}