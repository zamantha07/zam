const apiKey = '2d4ef437a11c74952b584ab5b17b1709'; // Reemplaza con tu API key

document.getElementById('recommendationsButton').addEventListener('click', () => {
    const genreId = document.getElementById('genreSelect').value;
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=${genreId}`)
        .then(response => response.json())
        .then(data => {
            const moviesDiv = document.getElementById('movies');
            moviesDiv.innerHTML = ''; // Limpiar las películas anteriores
            data.results.forEach(movie => {
                const movieDiv = document.createElement('div');
                movieDiv.classList.add('movie');
                movieDiv.innerHTML = `
                    <h2>${movie.title}</h2>
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                    <p>Rating: ${movie.vote_average}</p>
                    <p>Release Date: ${movie.release_date}</p>
                `;
                moviesDiv.appendChild(movieDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching movie data:', error);
            const moviesDiv = document.getElementById('movies');
            moviesDiv.innerHTML = '<p>Failed to load movie data</p>';
        });
});
