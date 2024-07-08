import React, { useEffect, useState } from "react";

function Recipe() {
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    if (!term) return; // Exit early if term is empty

    fetch(
      `https://api.spoonacular.com/recipes/search?query=${term}&apiKey=32269f2757ab4f3487575d134527cec8`
    )
      .then((response) => response.json())
      .then((data) => {
        // data.results contains an array of recipes
        setRecipes(data.results);
        console.log(data.results);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, [term]);

  const handleSearch = (e) => {
    e.preventDefault();
    setTerm(input);
    setInput("");
  };

  return (
    <div>
      <div className="SearchRecipe">
        <input
          type="text"
          placeholder="Enter Material..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <h1 style={{textAlign:'center', color:'white', marginBottom:'30px'}}>Recipes</h1>
      <ul className="recipeList">
        {recipes.length === 0 ? (<h3 style={{textAlign:'center', color:'white', width:'100vw', marginLeft:'-50px'}}>
            Search Tomato, Potato etc. to get the result
        </h3>) :
        recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.summary}</p>
            <img src={recipe.image} alt={recipe.title} />
            <a
              href={recipe.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              READ MORE
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;
