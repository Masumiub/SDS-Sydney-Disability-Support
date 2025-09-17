import React from "react";

const formatDateRange = (datesArray) => {
  if (!datesArray || datesArray.length === 0) return "N/A";

  // Convert to JS Date safely
  const jsDates = datesArray.map((ts) => {
    if (!ts) return null;

    // Firestore Timestamp object (has .toDate)
    if (typeof ts.toDate === "function") {
      return ts.toDate();
    }

    // Object with _seconds (from backend API)
    if (ts._seconds) {
      return new Date(ts._seconds * 1000);
    }

    // Already a Date string
    return new Date(ts);
  }).filter(Boolean);

  if (jsDates.length === 0) return "N/A";

  // Sort dates
  jsDates.sort((a, b) => a - b);

  const start = jsDates[0];
  const end = jsDates[jsDates.length - 1];

  const options = { year: "numeric", month: "long", day: "numeric" };

  return `${start.toLocaleDateString("en-US", options)} - ${end.toLocaleDateString("en-US", options)}`;
};

export default function PreferredDate({ preferredDates }) {
  return (
    <div>
      
      {formatDateRange(preferredDates)}
    </div>
  );
}
