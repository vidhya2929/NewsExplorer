// don't push API key to git => use .env 


// axios automatically parse JSON and provides easier  error handling
// text-4xl => large font  
// font-bold => bold weight
// text-center → center aligned
// text-blue-600 → blue shade
// underline decoration-blue-40 => underline with custom color
// underline-offset-8 => gap between text and underline

// to make search and input horizontally center => 
  // Makes the form flex container so they are in a row ,justify-center (horizontally centers) items-center (vertically aligns)

// w-80 => with 20 rem
// sm:w-96 => small screen and above => 24rem
// px-4 => padding left and right 1 rem(16px)
// py-2 => padding top & bottom => 0.5 rem
// rounded-l-full => border-top-left-radius & border-bottom-left-radius(fully round)
// border => 1px solid border
// focus:outline-none => :focus{ outline: none}
// caret-blue-500 => caret-color
// hover:bg-blue-600 => button:hover{  background-color: blue}
// min-h-screen => min-height: 100vh
// grid => display: grid;
// grid-cols-1 => grid-template-columns: repeat(1, minmax(0, 1fr));
// gap-6=> gap => gap: 1.5rem
// shadow-md => medium
// sm:grid-cols-2 => from small screen size and above
// text-sm => font-size: 14px(0.875rem)
//  h-full => height full
// mt-auto => margin-top: auto
// flex-grow => flex-grow: 1


// axios automatically parse JSON and provides easier  error handling
// axios.get ssends a get request to the API URL.
// URL => q=${keyword} => what to search, apiKey =...
// await make the function wait until the API responds before moving to the next line

// 'res' contains the response object from the API.
// res.data => actual data returned











// In searchBar.jsx
 if(!search.trim()) return;
    onSearch(search);    // callback function from the parent component(that fetches the news)





// article => current news object from the array
// index=> the position of the element in the array
// article = {article} -> passes the current news object as a prop to NewsCard
// export default function NewsCard({ article }) { => article is one news object (title, description, image) passed from the parent.



//  // Function to fetch news based on a query
  const fetchNews = async (query = 'cars AND technology AND sports') => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=5f5f4186d83c4c1d8f339752eaf383d9`
      );
      setArticles(res.data.articles);
    } catch (err) {
      console.error('Error fetching news:', err);
    }
  };
// q= what to search for
// keyword is the parameter of the fetch function => it represents the search term(s) we want to fetch
// if nothing is passed default => cra,technology,sports



// search is what the user types. 
// onSearch is the fn fetchNews passed from News(contributor)
// when user submit form, search becomes the argument to fetchNews.
// Inside fetchNews, the value is stored in the keyword








  // // Fetch default news on page load
    useEffect(() => {
      fetchNews(); // default query
    }, []);
  

    // User types a keyword and clicks "Search" → SearchBar calls onSearch(search)

// onSearch is actually fetchNews from News → fetches articles for that keyword.

// Articles state (articles) updates → grid re-renders with search results.

// SearchBar does not fetch directly. It only sends the input value to the parent.

// News holds the articles state and the fetchNews function.

// Connection is made via props:

// <SearchBar onSearch={fetchNews} />


// onSearch prop → SearchBar calls it whenever user submits.

// News updates articles → grid displays the results.