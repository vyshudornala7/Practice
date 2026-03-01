import React, { useState, useMemo } from "react";

const LiveSearch = () => {
  const [query, setQuery] = useState("");
const items = [
    "Apple",
    "Banana",
    "Cherry",
   "strawberry",
    "Orange",
    "Grapes",
    "muskmelon",
    "Kiwi",
    "Lemon",
    "Mango",
   
  ];

  const filteredItems = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return items.filter((item) => item.toLowerCase().includes(lowerQuery));
  }, [query, items]);
  

 
  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
      <h2>Live Search Filter</h2>
      <input
        type="text"
        placeholder="Search items..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}


        style={{
          padding: "12px",
          width: "100%",
          margin: "16px",
          borderRadius: "7px",
          border: "8px #ccc",
        }}
      />

      {filteredItems.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 3 }}>
          {filteredItems.map((item, index) => (
            <li
              key={index}
              style={{
                padding: "8px",
                borderBottom: "1px solid #eee",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default LiveSearch;